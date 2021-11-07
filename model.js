import { useEffect } from "react"
import disableScroll from 'disable-scroll'

export default function useModel(onClose, disableWheel=false) {

  useEffect(() => {
    const handkeKeydown = ({keyCode, metaKey, altKey}) => {
      if (
        keyCode == 27 || // Escape Key
        ((metaKey || altKey) && keyCode == 37) // Command or Alt + Back Arrow
      ) onClose()
    }
    disableScroll.on(null, { disableWheel })
    window.addEventListener('keydown', handkeKeydown)
    return () => {
      disableScroll.off()
      window.removeEventListener('keydown', handkeKeydown)
    }
  }, [])

}
