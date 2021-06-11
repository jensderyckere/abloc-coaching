import { Link } from "react-scroll";

export default function SecondaryButton({ text, link, samePage, extraClasses }) {
    return (
        <Link className={`button font-secondary text-gray-500 uppercase tracking-widest secondary-button border-gray-300 border-2 rounded-full overflow-hidden relative py-3 px-6 cursor-pointer font-bold text-xs md:text-sm${extraClasses ? ` ${extraClasses}` : "" }`} to={ link } smooth={true}>
            { text }
        </Link>
    )
};