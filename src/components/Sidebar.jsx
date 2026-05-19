import { useState } from 'react'
import { Menu, X, CheckSquare } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white z-40 transform transition-transform duration-300 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo section */}
        <div className="p-6 border-b border-blue-700/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-300 to-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-200 tracking-widest">KOVAI.CO</p>
              <p className="text-sm font-bold">Task Manager</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700/50 cursor-pointer transition-colors duration-200 group"
              >
                <Icon size={20} className="text-blue-200 group-hover:text-white transition" />
                <span className="font-medium text-sm group-hover:text-white transition">{item.label}</span>
              </div>
            )
          })}
        </nav>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
      </aside>

      {/* Main content offset */}
      <div className="lg:ml-64" />
    </>
  )
}
