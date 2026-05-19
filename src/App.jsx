import { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('landing')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setCurrentPage('dashboard')
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setCurrentPage('landing')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleGetStarted = () => {
    setCurrentPage('login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-10 h-10 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-slate-300 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  if (currentPage === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />
  }

  if (currentPage === 'login') {
    return <Login />
  }

  if (currentPage === 'dashboard' && user) {
    return (
      <div className="h-screen bg-slate-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Navbar */}
        <Navbar user={user} onLogout={handleLogout} />

        {/* Main Content - fixed within viewport */}
        <main className="pt-12 lg:ml-56 h-full flex flex-col">
          <div className="px-4 sm:px-6 lg:px-8 py-4 h-full flex flex-col">
            {/* Page Header */}
            <div className="mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Tasks</h1>
              <p className="text-slate-600 mt-1 text-sm">Manage and track your daily tasks</p>
            </div>

            {/* Action Section - fixed height */}
            <div className="flex-none mb-4">
              <TaskForm user={user} />
            </div>

            {/* Task List - scrolls internally */}
            <div className="flex-1 overflow-hidden">
              <TaskList user={user} />
            </div>
          </div>
        </main>
      </div>
    )
  }

  return <LandingPage onGetStarted={handleGetStarted} />
}
