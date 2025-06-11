import React from 'react'
import { FaBrain, FaRobot, FaBookOpen, FaRegLightbulb } from 'react-icons/fa'

const agents = [
    {
        icon: <FaBrain size={32} className="text-primary" />,
        title: 'Productivity Agent',
        desc: 'Plan your daily tasks, create reminders, and boost your productivity.',
    },
    {
        icon: <FaRobot size={32} className="text-primary" />,
        title: 'Chatbot Agent',
        desc: 'Create a personal assistant that answers your questions and chats with you.',
    },
    {
        icon: <FaBookOpen size={32} className="text-primary" />,
        title: 'Knowledge Agent',
        desc: 'Build a smart guide that provides information or suggests resources on a specific topic.',
    },
    {
        icon: <FaRegLightbulb size={32} className="text-primary" />,
        title: 'Idea Generator',
        desc: 'Create an AI assistant that generates creative ideas and solutions.',
    },
]

const CardSection = () => {
    return (
        <section className="w-full py-32 flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
                What Can You Create?
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