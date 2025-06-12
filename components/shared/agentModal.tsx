import React, { useState } from 'react'
import { FaRobot, FaUser, FaPalette } from 'react-icons/fa'

const colors = [
    { value: 'red', label: 'Kırmızı', className: 'bg-red-500' },
    { value: 'blue', label: 'Mavi', className: 'bg-blue-500' },
    { value: 'yellow', label: 'Sarı', className: 'bg-yellow-400' },
    { value: 'green', label: 'Yeşil', className: 'bg-green-500' },
]

const styles = [
    { value: 'helper', label: '📎 Yardımcı (nezaket odaklı)' },
    { value: 'fast', label: '⚡ Hızlı ve Direkt' },
    { value: 'creative', label: '🎨 Yaratıcı ve mizahi' },
    { value: 'pro', label: '📊 Profesyonel' },
]

const icons = [
    { value: 'robot', icon: <FaRobot size={28} /> },
    { value: 'user', icon: <FaUser size={28} /> },
    { value: 'palette', icon: <FaPalette size={28} /> },
]

const AgentModal = ({ onClose, onSave }: { onClose?: () => void; onSave?: (data: any) => void }) => {
    const [form, setForm] = useState({
        name: '',
        desc: '',
        icon: 'robot',
        color: 'blue',
        style: 'helper',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-secondary rounded-xl p-8 w-full max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-primary/60 hover:text-primary text-3xl cursor-pointer transition-colors"
                >
                    ×
                </button>
                <h2 className="text-xl font-bold text-primary mb-6 text-center">Yeni Ajanın</h2>
                <form
                    className="flex flex-col gap-5"
                    onSubmit={e => {
                        e.preventDefault()
                        onSave?.(form)
                    }}
                >
                    <div>
                        <label className="block text-primary mb-1 font-medium">Ajan Adı</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-background border border-primary/30 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
                            placeholder="Ajan adını girin"
                        />
                    </div>
                    <div>
                        <label className="block text-primary mb-1 font-medium">Ajan Açıklaması / Rolü</label>
                        <input
                            name="desc"
                            value={form.desc}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-background border border-primary/30 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
                            placeholder="Ajanın rolünü tanımlayın (örneğin: 'Yardımcı, rehber, asistan')"
                        />
                    </div>
                    <div>
                        <label className="block text-primary mb-1 font-medium">Profil İkonu</label>
                        <div className="flex gap-4">
                            {icons.map((item) => (
                                <button
                                    type="button"
                                    key={item.value}
                                    className={`p-2 rounded-lg border-2 ${form.icon === item.value ? 'border-primary' : 'border-transparent'} bg-background text-primary hover:border-primary/60`}
                                    onClick={() => setForm({ ...form, icon: item.value })}
                                >
                                    {item.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-primary mb-1 font-medium">Renk Teması</label>
                        <select
                            name="color"
                            value={form.color}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-background border border-primary/30 text-primary focus:outline-none focus:border-primary"
                        >
                            {colors.map((color) => (
                                <option key={color.value} value={color.value}>
                                    {color.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-primary mb-1 font-medium">Ajan Stili</label>
                        <select
                            name="style"
                            value={form.style}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-background border border-primary/30 text-primary focus:outline-none focus:border-primary"
                        >
                            {styles.map((style) => (
                                <option key={style.value} value={style.value}>
                                    {style.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 transition-colors mt-2"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AgentModal