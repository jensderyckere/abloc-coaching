import { Link } from "react-scroll";

export default function PrimaryButton({ text, link, samePage, extraClasses }) {
    return (
        <Link className={`button font-primary cursor-pointer uppercase tracking-widest primary-button border-blue-500 border-2 rounded-full overflow-hidden relative py-3 px-6 text-xs font-bold md:text-sm${extraClasses ? ` ${extraClasses}` : "" }`} to={ link } smooth={true}>
            { text }
        </Link>
    )
};