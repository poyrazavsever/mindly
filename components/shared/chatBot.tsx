import React, { useRef, useEffect } from 'react'

const messages = [
    {
        created_at: '2024-06-13T10:00:00Z',
        role: 'agent',
        content: 'Merhaba! Sana nasıl yardımcı olabilirim?',
    },
    {
        created_at: '2024-06-13T10:00:10Z',
        role: 'user',
        content: 'Bugünkü ajandamı özetler misin?',
    },
    {
        created_at: '2024-06-13T10:00:12Z',
        role: 'agent',
        content: 'Tabii! Bugün saat 14:00\'te bir toplantın var. Ayrıca 16:00\'da bir görev hatırlatıcın bulunuyor.',
    },
    {
        created_at: '2024-06-13T10:00:10Z',
        role: 'user',
        content: 'Bugünkü ajandamı özetler misin?',
    },
    {
        created_at: '2024-06-13T10:00:12Z',
        role: 'agent',
        content: 'Tabii! Bugün saat 14:00\'te bir toplantın var. Ayrıca 16:00\'da bir görev hatırlatıcın bulunuyor.',
    },
    {
        created_at: '2024-06-13T10:00:10Z',
        role: 'user',
        content: 'Bugünkü ajandamı özetler misin?',
    },
]

const ChatBot = () => {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

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
            <form className="flex gap-2 mt-4">
                <input
                    type="text"
                    placeholder="Mesajınızı yazın..."
                    className="flex-1 px-4 py-2 rounded-full bg-background border border-primary/30 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
                />
                <button
                    type="submit"
                    className="px-5 py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors"
                    disabled
                >
                    Gönder
                </button>
            </form>
        </div>
    )
}

export default ChatBot