import { useState } from 'react'
import { LogOut, Search } from 'lucide-react'

export default function Navbar({ user, onLogout }) {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogoutClick = async () => {
    try {
      setIsLoggingOut(true)
      await onLogout()
    } catch (error) {
      console.error('Logout failed:', error)
      setIsLoggingOut(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-30 lg:ml-64">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left section - App name */}
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-gray-900 hidden sm:block">Kovai.co</h1>
        </div>

        {/* Center section - Search bar */}
        <div className="flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right section - User profile & logout */}
        <div className="flex items-center gap-4">
          {user && (
            <>
              {/* User profile */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 transition">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-8 h-8 rounded-full ring-2 ring-blue-500/20"
                  />
                )}
                {!user.photoURL && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ring-2 ring-blue-500/20">
                    <span className="text-xs font-semibold text-white">
                      {(user.displayName || 'U')[0].toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">
                    {user.displayName || 'User'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogoutClick}
                disabled={isLoggingOut}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline text-sm">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
