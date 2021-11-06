import { useRef, useState, useEffect } from "react"

export default function useScrollObserver() {
  const targetEl = useRef()
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    let observer
    if (targetEl) {
      observer = new IntersectionObserver(
        ([e]) => setStuck(e.intersectionRatio < 1), {threshold: [1]}
      )
      observer.observe(targetEl?.current)
    }
    return () => targetEl?.current ? observer.unobserve(targetEl.current) : null
  }, [targetEl])

  return {
    stuck,
    targetEl,
  }
}
