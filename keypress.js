import { useEffect, useState } from "react"

export default function useKeyPress(targetKey, conbineKey, ignoreKeys) {
  const [keyPressed, setKeyPressed] = useState(false)
  function downHandler({ key, metaKey, ctrlKey, altKey }) {
    if (
      (ignoreKeys.includes('meta') && metaKey)
      || (ignoreKeys.includes('ctrl') && ctrlKey)
      || (ignoreKeys.includes('alt') && altKey)
    ) return
    if (!conbineKey && key === targetKey) setKeyPressed(true)
    if (
      (metaKey && conbineKey === 'meta' && key === targetKey)
      || (ctrlKey && conbineKey === 'ctrl' && key === targetKey)
      || (altKey && conbineKey === 'alt' && key === targetKey)
    ) setKeyPressed(true)
  }
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)
    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
  }, [])
  return keyPressed
}
