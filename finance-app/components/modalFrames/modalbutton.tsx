type props = { event: () => void, text:string, isLoading?:boolean};

export default function AddEditBTN({ event, text, isLoading }: props) {
  return (
    <button
      onClick={event}
      className={`border-none ${isLoading? 'animate-pulse':""} h-[53px] transition-all duration-500 w-full rounded-lg hover:bg-gray-500 bg-gray-900 text-white`}
    >
      {text}
    </button>
  );
}