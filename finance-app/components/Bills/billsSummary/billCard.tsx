type cardProps = { type: string; amount: string, isLoading:boolean};

export default function BillCard({ type, amount, isLoading }: cardProps) {
  const borderColor = () => {
    let color
    switch (type) {
      case 'Paid Bills':
        color = 'border-l-[#277C78]'
        break
      case 'Total Upcoming':
        color = 'border-l-[#F2CDAC]'
        break
      default:
        color = 'border-l-[#82C9D7]'
    }
    return color
  }

  return (
    <div
      className={`w-full ${borderColor()} ${isLoading? 'animate-pulse':''} px-4 rounded-lg bg-[#F8F4F0] border-l-[3px] h-[61px] items-center flex justify-between`}
    >
      <p className="text-gray-500 text-[14px]">{type}</p>
      <p className="text-[14px] font-bold text-gray-900">{isLoading? '...':'$'+amount}</p>
    </div>
  );
}
