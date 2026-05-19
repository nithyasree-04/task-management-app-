import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function TaskCard({ task }) {
  const [status, setStatus] = useState(task.status)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getStatusColor = (statusValue) => {
    switch (statusValue) {
      case 'Planned':
        return { badge: 'bg-slate-100 text-slate-700', dot: 'bg-slate-400' }
      case 'In Progress':
        return { badge: 'bg-amber-100 text-amber-700', dot: 'bg-amber-400' }
      case 'Complete':
        return { badge: 'bg-green-100 text-green-700', dot: 'bg-green-400' }
      default:
        return { badge: 'bg-slate-100 text-slate-700', dot: 'bg-slate-400' }
    }
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatFullDate = (timestamp) => {
    if (!timestamp) return '—'
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value
    if (newStatus === status) return

    try {
      setLoading(true)
      setError('')
      const taskRef = doc(db, 'tasks', task.id)
      await updateDoc(taskRef, { status: newStatus })
      setStatus(newStatus)
    } catch (err) {
      console.error('Error updating task:', err)
      setError('Failed to update')
    } finally {
      setLoading(false)
    }
  }

  const colors = getStatusColor(status)
  const createdDate = formatDate(task.createdAt)
  const dueDateFormatted = task.dueDate ? formatFullDate(task.dueDate) : 'No due date'

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 p-4">
      {error && (
        <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs font-medium">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Title and Dates */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 break-words line-clamp-2">
            {task.title}
          </h3>
          <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
            <span>Created: {createdDate || '—'}</span>
            <span className="hidden sm:inline">•</span>
            <span>Due: {dueDateFormatted}</span>
          </div>
        </div>

        {/* Status Controls */}
        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
            {status}
          </span>

          <select
            value={status}
            onChange={handleStatusChange}
            disabled={loading}
            className="px-2 py-1 border border-slate-300 rounded text-xs font-medium text-slate-700 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>

          {loading && (
            <span className="inline-block w-3 h-3 border-2 border-blue-300 border-t-blue-500 rounded-full animate-spin flex-shrink-0"></span>
          )}
        </div>
      </div>
    </div>
  )
}
