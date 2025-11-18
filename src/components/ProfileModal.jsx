const ProfileModal = ({ isOpen, onClose, onLogout }) => {
  const userEmail = localStorage.getItem('userEmail') || 'admin@los.com'
  const userName = userEmail.split('@')[0] || 'Admin'

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-20" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl border border-brand-border bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-brand-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-indigo-100 text-center text-lg font-semibold leading-12 text-indigo-700">
              {userName
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-text">{userName}</p>
              <p className="text-xs text-brand-text/60">{userEmail}</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-brand-border">
          <button
            onClick={() => {
              alert('Profile settings coming soon!')
              onClose()
            }}
            className="flex w-full items-center gap-3 px-6 py-3 text-left text-sm text-brand-text transition hover:bg-slate-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 3a3 3 0 000 6 3 3 0 000-6z" />
              <path d="M12 14v7" />
              <path d="M5 14h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />
            </svg>
            Profile Settings
          </button>

          <button
            onClick={() => {
              alert('Account preferences coming soon!')
              onClose()
            }}
            className="flex w-full items-center gap-3 px-6 py-3 text-left text-sm text-brand-text transition hover:bg-slate-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.7 1.7 0 000-6l1.6-2.8-2.6-2.6L15.6 4a1.7 1.7 0 00-6 0L6.8 3.6 4.2 6.2 5.8 9a1.7 1.7 0 000 6l-1.6 2.8 2.6 2.6L8.4 20a1.7 1.7 0 006 0l2.8.4 2.6-2.6z" />
            </svg>
            Preferences
          </button>

          <button
            onClick={() => {
              alert('Help & Support coming soon!')
              onClose()
            }}
            className="flex w-full items-center gap-3 px-6 py-3 text-left text-sm text-brand-text transition hover:bg-slate-50"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
            Help & Support
          </button>
        </div>

        <div className="border-t border-brand-border p-4">
          <button
            onClick={() => {
              onLogout()
              onClose()
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal

