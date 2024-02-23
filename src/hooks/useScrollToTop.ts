import { useEffect } from 'react'
import { Router } from 'next/router'

const useScrollToTop = (router: Router) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 700)
  }, [router.route])
}

export default useScrollToTop
