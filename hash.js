import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"

export default function useHash(name) {
  const [ toggle, setToggle ] = useState(false)
  const router = useRouter()

  const onHashChangeStart = (path) => {
    const [_, hash] = _getUrl(path)
    if (hash && hash == name) setToggle(true)
    else setToggle(false)
  }

  useEffect(() => {
    onHashChangeStart(router.asPath)
  }, [router])

  useEffect(() => {
    router.events.on("hashChangeStart", onHashChangeStart)
    return () => router.events.off("hashChangeStart", onHashChangeStart)
  }, [router.events])

  function disable() {
    router.back()
  }
  function enable() {
    const [url] = _getUrl(router.asPath)
    router.push(`${url}#${name}`)
  }
  function _getUrl(path) {
    return path.split('#')
  }

  return {
    toggle,
    enable,
    disable,
  }
}
