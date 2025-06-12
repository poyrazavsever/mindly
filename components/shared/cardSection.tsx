import React from 'react'
import { FaBrain, FaRobot, FaBookOpen, FaRegLightbulb } from 'react-icons/fa'

const agents = [
    {
        icon: <FaBrain size={32} className="text-primary" />,
        title: 'Verimlilik Asistanı',
        desc: 'Günlük görevlerinizi planlayın, hatırlatıcılar oluşturun ve verimliliğinizi artırın.',
    },
    {
        icon: <FaRobot size={32} className="text-primary" />,
        title: 'Sohbet Botu',
        desc: 'Sorularınızı yanıtlayan ve sizinle sohbet eden kişisel bir asistan oluşturun.',
    },
    {
        icon: <FaBookOpen size={32} className="text-primary" />,
        title: 'Bilgi Asistanı',
        desc: 'Belirli bir konuda bilgi veren veya kaynak öneren akıllı bir rehber oluşturun.',
    },
    {
        icon: <FaRegLightbulb size={32} className="text-primary" />,
        title: 'Fikir Üretici',
        desc: 'Yaratıcı fikirler ve çözümler üreten bir yapay zekâ asistanı oluşturun.',
    },
]

const CardSection = () => {
    return (
        <section className="w-full py-32 flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
                Neler Oluşturabilirsin?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
                {agents.map((agent, i) => (
                    <div
                        key={i}
                        className="bg-secondary rounded-xl p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-500"
                    >
                        <div className="mb-2">{agent.icon}</div>
                        <h3 className="text-xl font-semibold text-primary text-center">
                            {agent.title}
                        </h3>
                        <p className="text-primary/70 text-center text-sm">
                            {agent.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardSection