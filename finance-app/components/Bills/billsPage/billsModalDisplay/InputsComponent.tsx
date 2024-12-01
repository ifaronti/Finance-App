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
                placeholder={type === 'number' ? "Enter amount" :
                name === "due_day"? "Enter 1 - 31 for monthly payment":
                "Enter recipent's name"}
            name={name}
            max={name === "due_day"? 31:undefined}
            min={name === "due_day"? 1:undefined}
            id={name}
        />
            <label className="font-bold text-gray-500 capitalize text-[12px]" htmlFor={name}>{name.replace(/_/, " ")}</label>
        </div>
    )
}