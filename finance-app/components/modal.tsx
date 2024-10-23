
export default function Modal({showModal}:{showModal:boolean}) {
    
    return (
        <div className={`fixed ${showModal? 'block':'hidden'} w-[100vw] h-[100vh] bg-gray-900 bg-opacity-50`}>

        </div>
    )

}