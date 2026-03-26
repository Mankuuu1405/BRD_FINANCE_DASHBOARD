import { useLayoutEffect, useRef, useState } from 'react'
import { ResponsiveContainer } from 'recharts'

const SafeResponsiveContainer = ({ children, minHeight = 1 }) => {
  const hostRef = useRef(null)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    const element = hostRef.current
    if (!element) return undefined

    const updateReadyState = () => {
      const rect = element.getBoundingClientRect()
      setReady(rect.width > 0 && rect.height > 0)
    }

    updateReadyState()

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateReadyState)
      observer.observe(element)
      return () => observer.disconnect()
    }

    const timer = window.setInterval(updateReadyState, 250)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div ref={hostRef} className="h-full w-full min-w-0" style={{ minHeight }}>
      {ready ? (
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={minHeight}>
          {children}
        </ResponsiveContainer>
      ) : null}
    </div>
  )
}

export default SafeResponsiveContainer
