import kovaiLogo from '../assets/kovai-logo.svg'

export default function LandingPage({ onGetStarted }) {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 border-b border-blue-700/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-300 tracking-widest">KOVAI.CO</p>
              <p className="text-sm font-bold text-white">Task Manager</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center h-full">
          
          {/* LEFT SIDE - Content */}
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            {/* Main Heading */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={kovaiLogo} alt="Kovai.co" className="w-14 lg:w-16 object-contain" />
                <div>
                  <p className="text-xs font-semibold text-blue-200 tracking-widest">KOVAI.CO</p>
                  <p className="text-sm font-bold text-white">Task Manager</p>
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Task <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">Management</span> App
              </h1>
            </div>

            {/* Description Lines */}
            <div className="space-y-4 max-w-lg">
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed font-medium">
                Organize and manage your tasks with a modern productivity workspace.
              </p>
              <p className="text-base lg:text-lg text-blue-100 leading-relaxed font-medium">
                Track progress, improve workflow, and stay productive efficiently.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="space-y-3 max-w-md pt-4">
              <div className="flex items-start gap-3 text-blue-100">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <p className="text-sm lg:text-base">Real-time synchronization</p>
              </div>
              <div className="flex items-start gap-3 text-blue-100">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <p className="text-sm lg:text-base">Enterprise-grade security</p>
              </div>
              <div className="flex items-start gap-3 text-blue-100">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <p className="text-sm lg:text-base">Instant productivity boost</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onGetStarted}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base font-semibold rounded-2xl shadow-xl shadow-blue-900/20 transition-all duration-200"
              >
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-10 flex flex-wrap items-center gap-6 border-t border-blue-700/30">
              <div className="text-center min-w-[120px]">
                <p className="text-2xl lg:text-3xl font-black text-white">100%</p>
                <p className="text-sm text-blue-200">Secure</p>
              </div>
              <div className="w-px h-12 bg-blue-700/30"></div>
              <div className="text-center min-w-[120px]">
                <p className="text-2xl lg:text-3xl font-black text-white">Real-time</p>
                <p className="text-sm text-blue-200">Updates</p>
              </div>
              <div className="w-px h-12 bg-blue-700/30"></div>
              <div className="text-center min-w-[120px]">
                <p className="text-2xl lg:text-3xl font-black text-white">Free</p>
                <p className="text-sm text-blue-200">to Use</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
                <div className="p-8 flex items-center justify-center">
                  {/* Use `/assets/hero-small.png` from the `public` folder so Vite doesn't fail at build-time if the file is missing. */}
                  <img src="/assets/hero-small.svg" alt="Overview" className="w-48 h-auto rounded-2xl shadow-2xl" />
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-700/30 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-blue-200/70 text-sm">
          <p>Kovai.co Task Management App - Built with React, Firebase & Tailwind CSS | Assessment Ready</p>
        </div>
      </footer>
    </div>
  )
}
