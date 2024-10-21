import Image from "next/image";

type props = {
  name: string
  amount: string
  date: string
  avatar: string
  category: string|undefined
}

export default function SingleTransaction({
  name,
  amount,
  date,
  avatar,
  category,
}: props) {
  return (
    <article className="w-full relative text-left flex justify-between gap-8">
      <div className="flex md:w-[55.5%] text-left md:items-center ">
        <Image
          src={avatar}
          height={40}
          width={40}
          alt={name}
          className="rounded-full mr-4"
        />
        <div className="flex w-full md:items-center text-left flex-col md:flex-row md:justify-between">
          <p className="text-[14px] w-[120px] md:w-[unset] inline-block overflow-hidden whitespace-nowrap text-ellipsis text-gray-900 font-bold">
            {name}
          </p>
          <p className="text-gray-500 text-[12px]">{category}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse textRight md:w-[44.5%] md:items-center md:flex-row md:justify-between">
        <p className="text-gray-500 text-right text-[12px]">{date}</p>
        <p
          className={`font-bold text-right ${
            amount.toString().includes("-") ? "text-gray-900" : "text-[#277C78]"
          }`}
        >
          {amount}
        </p>
      </div>
    </article>
  );
}
