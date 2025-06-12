import React, { useState, useEffect, JSX } from 'react'
import { FaRobot, FaUser, FaPalette, FaEdit, FaTrash } from 'react-icons/fa'
import AddAgentModal from '@/components/shared/addAgentModal'
import { supabase } from '@/lib/supabaseClient'
import toast from 'react-hot-toast'

const iconMap: Record<string, JSX.Element> = {
  robot: <FaRobot size={32} className="text-primary" />,
  user: <FaUser size={32} className="text-primary" />,
  palette: <FaPalette size={32} className="text-primary" />,
}

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)
  const [agents, setAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [deleting, setDeleting] = useState(false)

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
  }, [showModal, deleting])

  // Silme işlemi
  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    const { error } = await supabase.from('agents').delete().eq('id', deleteId)
    setDeleting(false)
    setDeleteId(null)
    if (error) {
      toast.error('Ajan silinemedi: ' + error.message)
    } else {
      toast.success('Ajan silindi.')
      // Liste otomatik güncellenecek çünkü deleting değişti
    }
  }

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
              className="bg-secondary rounded-xl p-5 flex items-center gap-4 border border-secondary/40 relative"
            >
              <div>
                {iconMap[agent.icon] || <FaRobot size={32} className="text-primary" />}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-primary">{agent.name}</div>
                <div className="text-primary/70 text-sm line-clamp-2">{agent.desc}</div>
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="cursor-pointer p-2 rounded-full hover:bg-primary/10 transition-colors"
                  title="Düzenle"
                >
                  <FaEdit className="text-primary/70" />
                </button>
                <button
                  className="cursor-pointer p-2 rounded-full hover:bg-red-500/20 transition-colors"
                  title="Sil"
                  onClick={() => setDeleteId(agent.id)}
                >
                  <FaTrash className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && (
        <AddAgentModal
          onClose={() => setShowModal(false)}
          onSave={() => setShowModal(false)}
        />
      )}
      {/* Silme onay modali */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={e => { if (e.target === e.currentTarget) setDeleteId(null) }}>
          <div className="bg-secondary rounded-xl p-8 w-full max-w-sm shadow-lg text-center">
            <h2 className="text-xl font-bold text-primary mb-4">Ajanı Sil</h2>
            <p className="text-primary/80 mb-6">Bu ajanı silmek istediğinize emin misiniz?</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 rounded-full bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-colors"
                onClick={() => setDeleteId(null)}
                disabled={deleting}
              >
                Vazgeç
              </button>
              <button
                className="cursor-pointer px-4 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Siliniyor...' : 'Sil'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Dashboard.isAdminPage = true;
export default Dashboard