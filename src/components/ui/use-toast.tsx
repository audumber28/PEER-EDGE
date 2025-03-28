import React, { useState, useCallback } from 'react'

export interface Toast {
  message: string
  type?: 'success' | 'error' | 'warning'
  visible: boolean
}

export function useToast() {
  const [toast, setToast] = useState<Toast>({
    message: '',
    type: 'success',
    visible: false
  })

  const showToast = useCallback((
    message: string, 
    type: 'success' | 'error' | 'warning' = 'success'
  ) => {
    setToast({ message, type, visible: true })
    
    const timeoutId = setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }))
    }, 3000)

    // Return a function to clear the timeout if needed
    return () => clearTimeout(timeoutId)
  }, [])

  const ToastComponent: React.FC = () => {
    if (!toast.visible) return null

    const bgColorMap = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500'
    }

    return (
      <div 
        className={`
          fixed top-4 right-4 p-4 rounded-lg text-white z-50 
          ${bgColorMap[toast.type || 'success']} 
          animate-slide-in-right
        `}
        role="alert"
        aria-live="assertive"
      >
        {toast.message}
      </div>
    )
  }

  return { 
    showToast, 
    ToastComponent,
    toast 
  }
}