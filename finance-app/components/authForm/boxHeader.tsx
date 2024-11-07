import { usePathname } from "next/navigation"
import FrameHeader from "../modalFrames/frameHeader"

type props = {
    shutModal?:()=>void
}

export default function AuthFrameHeader({shutModal }: props) {
    const pathName = usePathname()
    const frameText = `Update income data whenever funds are added to your real account 
                       and or update personal info`

    const headerText = (path: string)=>{
        let text = ''
        switch (path) {
            case '/login':
                text = 'Login'
                break
            case '/signup':
                text = 'Signup'
                break
            default:
                text=frameText
        }
        return text
    }
    const text = headerText(pathName)

    return text.startsWith('Update') ?
        <div>
            <FrameHeader text={text} shutModal={()=> shutModal} />
        </div>
        :
        <h1 className="self-start font-bold text-[2rem]">{text}</h1>
}