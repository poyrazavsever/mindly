import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import ChatBot from '@/components/shared/chatBot'

const Chat = () => {
    const [agents, setAgents] = useState<any[]>([])
    const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

    useEffect(() => {
        // Kullanıcının ajanlarını getir
        const fetchAgents = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                setAgents([])
                return
            }
            const { data } = await supabase
                .from('agents')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
            setAgents(data || [])
        }
        fetchAgents()
        // Storage'dan seçili ajanı yükle
        const stored = localStorage.getItem('selectedAgentId')
        if (stored) setSelectedAgent(stored)
    }, [])

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAgent(e.target.value)
        localStorage.setItem('selectedAgentId', e.target.value)
    }

    
    const agent = agents.find(a => String(a.id) === String(selectedAgent))
    console.log('agent:', agent)

    return (
        <div className="max-w-6xl min-w-full px-4">
            <div className="flex items-center justify-between gap-4 mb-8">
                <h2 className="text-lg text-primary font-bold mb-2">Ajan Seç</h2>
                <select
                    className="px-4 py-2 rounded-lg border border-primary/30 bg-background text-primary focus:outline-none focus:border-primary"
                    value={selectedAgent || ''}
                    onChange={handleSelect}
                >
                    <option value="" disabled>Ajan seçiniz</option>
                    {agents.map(agent => (
                        <option key={agent.id} value={agent.id}>{agent.name}</option>
                    ))}
                </select>
            </div>

            <ChatBot agent={agent} />
        </div>
    )
}

Chat.isAdminPage = true;
export default Chat