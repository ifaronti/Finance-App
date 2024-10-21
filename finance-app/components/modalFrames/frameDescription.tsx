
type props = {
    text:string
}

export default function FrameDescription({ text }:props) {
   return <p className="text-gray-500 text-[14px]">{text}</p>
}