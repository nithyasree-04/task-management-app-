import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true)
      setError('')
      const result = await signInWithPopup(auth, provider)
      console.log('User signed in:', result.user)
    } catch (err) {
      console.error('Sign in error:', err)
      setError(err.message || 'Failed to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen overflow-hidden flex bg-white">
      {/* LEFT SIDE - Branding & Background (55%) */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 h-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* SVG Background Illustration - Task Management Dashboard */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 1000" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Grid background */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="800" height="1000" fill="url(#grid)"/>
            
            {/* Decorative task cards */}
            <rect x="50" y="150" width="300" height="150" rx="12" fill="#ffffff" opacity="0.05" stroke="#ffffff" strokeWidth="1" opacity="0.1"/>
            <rect x="450" y="100" width="280" height="180" rx="12" fill="#ffffff" opacity="0.05" stroke="#ffffff" strokeWidth="1" opacity="0.1"/>
            <rect x="50" y="400" width="260" height="140" rx="12" fill="#ffffff" opacity="0.05" stroke="#ffffff" strokeWidth="1" opacity="0.1"/>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start p-12 max-w-lg h-full">
          {/* Logo Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-blue-200 text-xs font-bold tracking-widest">KOVAI.CO</p>
                <p className="text-white text-sm font-bold">Task Manager</p>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl font-black text-white leading-tight">Kovai.co</h1>
            <p className="text-lg text-blue-100 font-semibold">Your modern productivity workspace</p>
          </div>

          {/* Description */}
          <p className="text-base text-blue-100 leading-relaxed mb-10 max-w-md">
            Organize tasks, collaborate with teams, and stay on top of your work with real-time sync and intelligent task management.
          </p>

          {/* Features list */}
          <div className="space-y-3 w-full">
            <div className="flex items-center gap-3 text-blue-100 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Real-time synchronization</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-3 text-blue-100 text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-400/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Instant productivity boost</span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"></div>
      </div>

      {/* RIGHT SIDE - Login Card (45%) */}
      <div className="flex-1 lg:w-[45%] flex items-center justify-center p-4 lg:p-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-sm">
          {/* Mobile branding - shown only on mobile */}
          <div className="lg:hidden mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-blue-600 tracking-widest">KOVAI.CO</p>
                <p className="text-lg font-bold text-gray-900">Task Manager</p>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-7 lg:p-8 space-y-6 border border-gray-100">
            {/* Card Header */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Sign in to Kovai.co</h1>
              <p className="text-sm text-gray-600">Access your task management workspace</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full px-6 py-3.5 bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-md hover:bg-blue-50 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
            >
              {loading ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></span>
                  <span className="text-gray-700">Signing in...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545,10.739v3.717h5.677c-0.427,2.211-2.362,3.547-5.677,3.547c-3.414,0-6.195-2.781-6.195-6.195 c0-3.414,2.781-6.195,6.195-6.195c1.538,0,2.954,0.555,4.078,1.468l2.884-2.884C17.704,2.015,15.379,0.757,12.545,0.757 C5.714,0.757,0.057,6.414,0.057,13.246c0,6.832,5.657,12.489,12.488,12.489c3.633,0,6.659-1.273,8.835-3.49 c2.176-2.217,3.223-5.313,3.223-8.549c0-0.576-0.045-1.134-0.138-1.676H12.545Z" />
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>


          </div>


        </div>
      </div>
    </div>
  )
}
