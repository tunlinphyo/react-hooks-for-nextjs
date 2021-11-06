import { useEffect, useState } from "react"

export default function useWindowScroll() {
  const [ scroll, setScroll ] = useState(0)

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', onScroll)
    // window.addEventListener('wheel', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      // window.removeEventListener('wheel', onScroll)
    }
  }, [])

  function onScroll() {
    requestAnimationFrame(handleScroll)
  }
  function handleScroll() {
    setScroll(window.scrollY)
  }

  return { scroll }
}
