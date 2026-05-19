import { useState, useEffect } from 'react'
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'

import { db } from '../firebase'
import TaskCard from './TaskCard'
import { CheckSquare, AlertCircle } from 'lucide-react'

export default function TaskList({ user }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) return

    setLoading(true)

    try {
      const q = query(
        collection(db, 'tasks'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      )

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const tasksList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))

          setTasks(tasksList)
          setLoading(false)
        },
        (err) => {
          console.error('Error fetching tasks:', err)
          setError('Failed to load tasks')
          setLoading(false)
        }
      )

      return () => unsubscribe()
    } catch (err) {
      console.error(err)
      setError('Something went wrong')
      setLoading(false)
    }
  }, [user])

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="inline-block w-8 h-8 border-3 border-slate-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-medium text-sm">Loading your tasks...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 font-semibold text-sm">{error}</p>
        </div>
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100">
            <CheckSquare size={32} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            No tasks yet
          </h3>
          <p className="text-slate-600 text-sm max-w-sm">
            Create your first task using the form above to get started
          </p>
        </div>
      </div>
    )
  }

  const plannedTasks = tasks.filter(t => t.status === 'Planned').length
  const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length
  const completedTasks = tasks.filter(t => t.status === 'Complete').length

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Task Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">All Tasks</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{tasks.length}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <CheckSquare size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">{inProgressTasks}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 font-medium">Completed</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{completedTasks}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col flex-1 min-h-0">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-gray-900">All Tasks</h2>
        </div>

        <div className="divide-y divide-slate-200 overflow-y-auto flex-1 min-h-0">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
