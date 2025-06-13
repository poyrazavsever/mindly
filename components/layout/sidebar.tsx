import React from 'react'
import { useRouter } from 'next/router'
import { FaRobot, FaComments, FaTasks, FaCalendarAlt, FaLightbulb, FaChartBar, FaCog, FaMoneyBillWaveAlt, FaLink } from 'react-icons/fa'
import classNames from 'classnames'

const sidebarLinks = [
  {
    href: '/dashboard',
    label: 'Asistanların',
    icon: <FaRobot size={20} />,
  },
  {
    href: '/dashboard/chat',
    label: 'Chat Bot',
    icon: <FaComments size={20} />,
  },
  {
    href: '/dashboard/tasks',
    label: 'Görev Zincileri',
    icon: <FaTasks size={20} />,
  },
  {
    href: '/dashboard/agenda',
    label: 'Ajanda',
    icon: <FaCalendarAlt size={20} />,
  },
  {
    href: '/dashboard/suggestions',
    label: 'Öneriler',
    icon: <FaLightbulb size={20} />,
  },
  {
    href: '/dashboard/reports',
    label: 'Raporlar',
    icon: <FaChartBar size={20} />,
  },
  {
    href: '/dashboard/market',
    label: 'Market',
    icon: <FaMoneyBillWaveAlt size={20} />,
  },
  {
    href: '/dashboard/connections',
    label: 'Bağlantılar',
    icon: <FaLink size={20} />,
  },
  {
    href: '/dashboard/settings',
    label: 'Ayarlar',
    icon: <FaCog size={20} />,
  },
]

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className="fixed left-0 h-screen w-64 bg-secondary flex flex-col py-8 px-4 border-r border-secondary/40">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 mb-10 px-2">
        <img src="/images/logo.png" alt="Mindly Logo" className="w-8 h-8 pb-1" />
        <span className="text-xl font-extrabold text-primary">Mindly</span>
      </a>
      {/* Links */}
      <nav className="flex flex-col gap-2">
        {sidebarLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={classNames(
              "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors",
              router.pathname === link.href
                ? "bg-primary/10 text-primary"
                : "text-primary/80 hover:bg-primary/10 hover:text-primary"
            )}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar