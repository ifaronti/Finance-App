import FrameHeader from "./frameHeader";
import { usePathname, useRouter } from "next/navigation";
import { deleteBudget } from "../API-Calls/budgets";
import { deletePot } from "../API-Calls/pots";
import { mutate } from "swr";
import { deleteBill } from "../API-Calls/bills";
import useClickOutside from "@/hooks/useClickOutside";
import { deleteUser } from "../API-Calls/user";
import { useRef, useState } from "react";
import { Hourglass } from "react-loader-spinner";

type props = {
  id?: number
  falseModal: () => void
  nameCategory:string
}

export default function DeleteItem({ id, falseModal, nameCategory }: props) {
  const [isLoading, setIsLoading] = useState(false)
  const pathName = usePathname();
  const router = useRouter()
  const text = getCurrentPath()?.currText
  const revalKey = getCurrentPath()?.currPath
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
  
  function getCurrentPath() {
    let currPath
    let currText
    switch (pathName) {
      case '/dashboard/budgets':
        currPath = '/budgets'
        currText = 'budget'
        break
      case '/dashboard/pots':
        currPath = '/pots'
        currText = 'pot'
        break
      case '/dashboard/bills':
        currPath = '/bills?skip=0&sort=Latest&name='
        currText = 'bill'
        break
      default:
        currPath = 'delete'
        currText = 'account?'
    }
    return {currPath, currText}
  }

  function deleteItem() {
    const currPath = getCurrentPath()?.currPath
    if (currPath.includes('/budgets')) {
      return deleteBudget(Number(id))
    }
    if (currPath.includes('/pots')) {
      return deletePot(Number(id))
    }
    if (currPath.includes('delete')) {
      return deleteUser()
    }
    return deleteBill(Number(id))
  }

  const deleteAndRevalidate = async () => {
    setIsLoading(true)
    await deleteItem()
    await mutate([revalKey])
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
