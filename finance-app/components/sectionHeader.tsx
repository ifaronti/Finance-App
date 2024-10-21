import SeeDetails from "./seeDetails"

type SectionH2Props = {
    text: string
    location: string
    linkText: string
}

export default function SectionH3({ text, location, linkText }:SectionH2Props) {
    return (
        <article className="flex w-full justify-between">
            <h3 className="text-[20px] text-gray-900 font-bold">{text}</h3>
            <SeeDetails location={location} text={linkText} />
        </article>
    )
}