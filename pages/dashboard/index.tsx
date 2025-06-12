import React, { useState, useEffect } from 'react'
import { FaRobot, FaUser, FaPalette } from 'react-icons/fa'
import AgentModal from '@/components/shared/agentModal'
import { supabase } from '@/lib/supabaseClient'

const iconMap: Record<string, JSX.Element> = {
  robot: <FaRobot size={32} className="text-primary" />,
  user: <FaUser size={32} className="text-primary" />,
  palette: <FaPalette size={32} className="text-primary" />,
}

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)
  const [agents, setAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setAgents([])
        setLoading(false)
        return
      }
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (error) {
        console.error(error)
      }
      if (!error) setAgents(data || [])
      setLoading(false)
    }
    fetchAgents()
  }, [showModal])

  return (
    <div className="max-w-4xl min-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Ajanların</h1>
        <button
          className="px-5 py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Yeni Ajan Ekle
        </button>
      </div>
      {loading ? (
        <div className="text-primary/70 text-center py-10">Yükleniyor...</div>
      ) : agents.length === 0 ? (
        <div className="text-primary/70 text-center py-10">Henüz bir ajan oluşturmadınız.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map(agent => (
            <div
              key={agent.id}
              className="bg-secondary rounded-xl p-5 flex items-center gap-4 border border-secondary/40"
            >
              <div>
                {iconMap[agent.icon] || <FaRobot size={32} className="text-primary" />}
              </div>
              <div>
                <div className="text-lg font-semibold text-primary">{agent.name}</div>
                <div className="text-primary/70 text-sm line-clamp-2">{agent.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && (
        <AgentModal
          onClose={() => setShowModal(false)}
          onSave={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

Dashboard.isAdminPage = true;
export default Dashboard