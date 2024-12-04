import FrameHeader from "./frameHeader";
import { usePathname, useRouter } from "next/navigation";
import { mutate } from "swr";
import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { getDeleteContext } from "../svgAssets";

type props = {
  id?: number
  falseModal: () => void
  nameCategory: string
  deleteItem:(id: number)=> void;
}

export default function DeleteItem({ id, falseModal, nameCategory, deleteItem }: props) {
  const [isLoading, setIsLoading] = useState(false)
  const pathName = usePathname();
  const router = useRouter()
  const text = getDeleteContext(pathName)?.currText
  const revalKey = getDeleteContext(pathName)?.currPath
  const delRef = useRef(null)
  useClickOutside({ ref: delRef, falseModal })
  
  const loadSpinner = (
    <Hourglass
      visible={true}
      height="20"
      width="20"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    />
  )

  const awaitDelete = async () => {
    return deleteItem(Number(id))
  }

  const deleteAndRevalidate = async () => {
    setIsLoading(true)
    await awaitDelete()
    await mutate([revalKey])
    await mutate(["/summary"])
    setIsLoading(false)
    falseModal()
    if (revalKey === 'delete') {
      router.push('/')
    }
    return
  }

  const confirmText = `Are you sure you want to delete this ${text}? This action cannot 
                        be reversed, and all the data inside it will be removed forever.`;

  return (
    <div ref={delRef} className="w-[335px] md:w-[560px] md:h-[278px] z-[150] h-[277px] gap-5 rounded-lg bg-white px-5 py-6 md:px-8 md:py-8 flex flex-col">
      <FrameHeader
        text={`Delete '${nameCategory}'?`}
        shutModal={falseModal}
        bigFont="Yes"
      />
      <p className="text-gray-500 w-full text-[14px]">{confirmText}</p>
      <button
        disabled={isLoading? true:false}
        onClick={deleteAndRevalidate}
        className="w-full h-[53px] flex items-center justify-center bg-[#C94736] text-white rounded-lg"
      >
        {isLoading? loadSpinner:'Yes, Confirm Deletion'}
      </button>
      <button onClick={falseModal} className="text-gray-500 text-[14px]">
        No, I want to go back
      </button>
    </div>
  );
}
