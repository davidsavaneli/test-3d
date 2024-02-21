import { animateScroll as Scroll } from 'react-scroll'

const useScrollToTop = () => {
  setTimeout(() => {
    if (typeof document !== 'undefined') {
      const contactSection = document.body
      if (contactSection) {
        Scroll.scrollTo(contactSection.offsetTop, {
          duration: 0,
          smooth: true,
        })
      }
    }
  }, 700)
}

export default useScrollToTop
