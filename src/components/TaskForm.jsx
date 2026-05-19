import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { Plus, AlertCircle, CheckCircle } from 'lucide-react'

export default function TaskForm({ user }) {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim()) {
      setError('Please enter a task title')
      return
    }

    if (!user) {
      setError('You must be logged in to create a task')
      return
    }

    try {
      setLoading(true)
      setError('')
      setSuccess('')

      await addDoc(collection(db, 'tasks'), {
        title: title.trim(),
        status: 'Planned',
        userId: user.uid,
        createdAt: serverTimestamp(),
        dueDate: dueDate ? new Date(dueDate) : null,
      })

      setTitle('')
      setDueDate('')
      setSuccess('Task created successfully')
      setTimeout(() => setSuccess(''), 2000)
    } catch (err) {
      console.error('Error creating task:', err)
      setError(err.message || 'Failed to create task. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Create New Task</h2>
          <p className="text-sm text-slate-500 mt-1">Add a task to your task list</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
          <Plus size={16} />
          New Task
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm font-medium">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-700 text-sm font-medium">{success}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          disabled={loading}
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-gray-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-400 transition-all duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          disabled={loading}
          className="w-36 px-3 py-2 border border-slate-300 rounded-lg text-sm text-gray-700 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
        >
          {loading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span className="hidden sm:inline">Creating...</span>
            </>
          ) : (
            <>
              <Plus size={18} />
              <span className="hidden sm:inline">Add Task</span>
              <span className="sm:hidden">Add</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
