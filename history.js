import { useEffect, useState } from "react"

export function useHistory(init, callback) {
  const [history, setHistory] = useState([init])

  useEffect(() => {
    callback(history[history.length - 1])
  }, [history])

  function pushHistory(page) {
    setHistory([...history, page])
  }
  function popHistory() {
    if (history.length == 1) return
    setHistory(history.slice(0, history.length - 1))
  }

  return { pushHistory, popHistory }
}
