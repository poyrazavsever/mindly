import type { NextApiRequest, NextApiResponse } from 'next'

type AgentProps = {
    name: string
    desc: string
    style: string
}

type Message = {
    role: 'user' | 'assistant' | 'system'
    content: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { messages, agent }: { messages: Message[]; agent: AgentProps } = req.body

    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API anahtarı bulunamadı.' })
    }

    if (!messages || !Array.isArray(messages) || !agent) {
        return res.status(400).json({ error: 'Eksik veri.' })
    }

    const systemPrompt = `
Sen bir yapay zekâ asistanısın.
Adın: ${agent.name}
Rolün: ${agent.desc}
Üslubun: ${agent.style}
Kullanıcıya bu bilgiler ışığında yardımcı ol.
  `.trim()

    const openaiMessages = [
        { role: 'system', content: systemPrompt },
        ...messages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content,
        })),
    ]

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: openaiMessages,
                temperature: 0.7,
                max_tokens: 512,
            }),
        })

        if (!response.ok) {
            const error = await response.json()
            return res.status(500).json({ error: error.error?.message || 'OpenAI API hatası.' })
        }

        const data = await response.json()
        const content = data.choices?.[0]?.message?.content

        return res.status(200).json({ content })
    } catch (err: any) {
        return res.status(500).json({ error: err.message || 'Bilinmeyen bir hata oluştu.' })
    }
}