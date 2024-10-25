import { buttonEvent, inputEvent } from "@/components/types"


type props = {
    value: string | number;
    type: string;
    name: string;
    handleChange: (e:inputEvent | buttonEvent)=> void;
}

export default function InputComponent({ value, type, name, handleChange }:props) {
    return (
        <div className="w-full gap-1 flex flex-col-reverse">
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className="w-full h-[45px] rounded-lg pl-4 border border-gray-500"
            placeholder={type === 'number'? "Enter amount":"Enter recipent's name"}
            name={name}
            id={name}
        />
            <label className="font-bold text-gray-500 text-[12px]" htmlFor={name}>{name}</label>
        </div>
    )
}