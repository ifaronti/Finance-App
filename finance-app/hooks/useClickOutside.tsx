
import { useEffect } from "react"

export type eventType = React.MouseEvent|React.TouchEvent
type props = {
    ref: React.RefObject<HTMLDivElement|null|undefined>
    falseModal:()=>void
}

export default function useClickOutside({ ref, falseModal }: props) {
    function checkAreaClicked(e: eventType) {
        //@ts-expect-error if I use currentTarget which is not linted, it'll misbehave 
        if(ref?.current?.contains(e.target)){
          return
        }
        else {
            falseModal()
        }
    }

    useEffect(()=>{
        //@ts-expect-error unkknown type
        document.addEventListener('touchstart', checkAreaClicked)
        //@ts-expect-error unkknown type
        document.addEventListener('mousedown', checkAreaClicked)
    
        return () => {
            //@ts-expect-error unkknown type
            document.removeEventListener('touchstart', checkAreaClicked)
            //@ts-expect-error unkknown type
            document.removeEventListener('mousedown', checkAreaClicked)
        }
        //eslint-disable-next-line
      }, [ref])
}