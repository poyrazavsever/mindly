import React, { useRef, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type Message = {
    created_at: string
    role: 'user' | 'assistant' | 'system'
    content: string
}

const ChatBot = ({ agent }: { agent: any }) => {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage: Message = {
            created_at: new Date().toISOString(),
            role: 'user',
            content: input,
        }
        setMessages((prev) => [...prev, userMessage])
        setInput('')
        setLoading(true)

        try {
            const res = await fetch('/api/chatBotGpt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    agent,
                }),
            })
            const data = await res.json()
            if (res.ok && data.content) {
                setMessages((prev) => [
                    ...prev,
                    {
                        created_at: new Date().toISOString(),
                        role: 'assistant',
                        content: data.content,
                    },
                ])
            } else {
                toast.error(data.error || 'Bir hata oluştu.')
            }
        } catch (err) {
            toast.error('Bir hata oluştu.')
        } finally {
            setLoading(false)
        }
    }

    // Mesajları created_at'e göre sırala
    const sortedMessages = [...messages].sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )

    return (
        <div className="flex flex-col h-[700px] bg-secondary rounded-xl shadow-md p-4 overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-2">
                {sortedMessages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                    >
                        <div
                            className={`
                max-w-[70%] px-4 py-2 rounded-2xl
                ${msg.role === 'user'
                                    ? 'bg-primary text-secondary rounded-br-none'
                                    : 'bg-background text-primary rounded-bl-none border border-primary/10'}
                shadow-sm
              `}
                        >
                            <div className="text-sm">{msg.content}</div>
                            <div className="text-xs text-primary/50 mt-1 text-right">
                                {new Date(msg.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Mesajınızı yazın..."
                    className="flex-1 px-4 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors"
                    disabled={loading || !input.trim()}
                >
                    {loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
            </form>
        </div>
    )
}

export default ChatBot