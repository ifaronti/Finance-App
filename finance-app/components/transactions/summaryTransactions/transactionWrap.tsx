import { dateProps } from "./dateAmount";
import { profileProps } from "./summaryProfiles";
import AmountDate from "./dateAmount";
import Profile from "./summaryProfiles";

type props = dateProps & profileProps

export default function OneTransaction({ date, amount, profilePic, name }: props) {
    
    return (
        <article className="flex w-full justify-between">
            <Profile name={name} profilePic={profilePic}/>
            <AmountDate amount={amount} date={date} />
        </article>
    )
}