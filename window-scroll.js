import { useEffect, useState } from "react"

export default function useWindowScroll() {
  const [ scroll, setScroll ] = useState({ x: 0, y: 0})

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
    setScroll({ x: window.scrollX, y: window.scrollY })
  }

  return scroll
}
