import { useEffect, useState } from 'react'

const useShowPreloader = (value: boolean) => {
  const [showPreloader, setShowPreloader] = useState<boolean>(value)

  useEffect(() => {
    document.body.classList.remove('preload')

    const handleBeforeUnload = () => setShowPreloader(true)
    window.addEventListener('beforeunload', handleBeforeUnload)

    const timeoutId = setTimeout(() => setShowPreloader(false), 2500)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(timeoutId)
    }
  }, [])

  return { showPreloader }
}

export default useShowPreloader
