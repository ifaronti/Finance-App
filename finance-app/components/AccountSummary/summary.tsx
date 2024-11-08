import { useShowbar } from "@/providers/showBarContext";

type summaryProps = {
  value: number|undefined|string
  description: string
  isLoading?:boolean
}

export default function SummaryCard({ value, description, isLoading }: summaryProps) {
  const textColor = description === "Current Balance" ? "white" : "gray-900";
  const bgColor = description === "Current Balance" ? "black" : "white";
  const {showBar}  = useShowbar()
  
  return (
    <article
      className={`bg-${bgColor} flex ${isLoading? 'animate-pulse':'animate-none'} flex-col justify-center rounded-lg ${showBar? '2xl:w-[337.33px] md:w-[213px]  transition-all duration-700':'2xl:w-[408px] transition-all duration-700'} w-[343px] h-[111px] md:h-[119px]`}
    >
      <div className="flex flex-col pl-5 sm:pl-6">
        <h2 className="text-gray-500 text-[14px]">{description}</h2>
        <p className={`text-[2rem] font-bold text-${textColor}`}>${isLoading?0:value?.toString()}</p>
      </div>
    </article>
  );
}
