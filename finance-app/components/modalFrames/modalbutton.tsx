

type props = { event: () => void, text:string};

export default function AddEditBTN({ event, text }: props) {
  return (
    <button
      onClick={event}
      className="border-none h-[53px] transition-all duration-500 w-full rounded-lg hover:bg-gray-500 bg-gray-900 text-white"
    >
      {text}
    </button>
  );
}