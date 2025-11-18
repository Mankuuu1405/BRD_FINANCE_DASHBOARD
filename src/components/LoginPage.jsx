import { useState } from 'react'

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password) {
        // Store auth token (in real app, this would come from API)
        localStorage.setItem('authToken', 'mock-token')
        localStorage.setItem('userEmail', formData.email)
        onLogin()
      } else {
        setError('Please enter both email and password')
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="w-full max-w-md rounded-3xl border border-brand-border bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M12 3l8 4v5c0 5-3 7-8 9-5-2-8-4-8-9V7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-brand-text">Finance Dashboard</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-brand-text">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="admin@los.com"
              required
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-text focus:border-brand-accent focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-brand-text">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-brand-border px-4 py-3 text-sm text-brand-text focus:border-brand-accent focus:outline-none"
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          <p>Demo: Use any email and password to login</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

