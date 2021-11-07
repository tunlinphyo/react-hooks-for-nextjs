import { useEffect, useState } from "react"

export default function useKeyPress(targetKey, conbineKey, ignoreKeys = [], disableOnInput = true) {
  const nodes = ['INPUT', 'TEXTAREA']
  const [keyPressed, setKeyPressed] = useState(false)
  function downHandler({ target, key, metaKey, ctrlKey, altKey }) {
    if (
      (disableOnInput && nodes.includes(target.nodeName))  // disable on input
      || (ignoreKeys.includes('meta') && metaKey)
      || (ignoreKeys.includes('ctrl') && ctrlKey)
      || (ignoreKeys.includes('alt') && altKey)
    ) return
    if (
      (!conbineKey && key === targetKey)
      || (metaKey && conbineKey === 'meta' && key === targetKey)
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
