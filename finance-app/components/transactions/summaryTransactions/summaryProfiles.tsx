import Image from "next/image";

export type profileProps = { name: string; profilePic: string };

export default function Profile({ name, profilePic }: profileProps) {
  return (
    <div className="flex text-ellipsis gap-4 items-center">
      <span className="relative">
        <Image
          src={profilePic}
          height={40}
          width={40}
          alt={name}
          className="rounded-full"
        />
      </span>
      <p className="text-[14px] w-[120px] md:w-[unset] inline-block overflow-hidden whitespace-nowrap text-ellipsis text-gray-900 font-bold">
        {name}
      </p>
    </div>
  );
}
