import React, { useState } from 'react'
import { FaRobot } from 'react-icons/fa'
import AgentModal from '@/components/shared/agentModal'

const agents = [
  {
    id: 1,
    name: 'Productivity Agent',
    desc: 'Helps you plan your daily tasks, set reminders, and boost your productivity with smart suggestions.',
    icon: <FaRobot size={32} className="text-primary" />,
  },
  {
    id: 2,
    name: 'Chatbot Agent',
    desc: 'A personal assistant that answers your questions and chats with you in natural language.',
    icon: <FaRobot size={32} className="text-primary" />,
  },
  // ...örnek olarak ekledim.
]

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Ajanların</h1>
        <button
          className="px-5 py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors"
          onClick={() => setShowModal(true)}
        >
          Yeni Ajan Ekle
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map(agent => (
          <div
            key={agent.id}
            className="bg-secondary rounded-xl p-5 flex items-center gap-4 border border-secondary/40"
          >
            <div>{agent.icon}</div>
            <div>
              <div className="text-lg font-semibold text-primary">{agent.name}</div>
              <div className="text-primary/70 text-sm line-clamp-2">{agent.desc}</div>
            </div>
          </div>
        ))}
      </div>
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