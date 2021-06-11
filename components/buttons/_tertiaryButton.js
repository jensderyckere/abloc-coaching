import { Link } from "react-scroll";

export default function TertiaryButton({ text, link, samePage, extraClasses }) {
    return (
        <Link className={`button tertiary-button cursor-pointer flex font-tertiary text-black uppercase tracking-widest font-bold text-xs md:text-sm${extraClasses ? ` ${extraClasses}` : "" }`} to={ link } smooth={true}>
            { text }
            <i className="ri-arrow-right-line ml-2 arrow"></i>
        </Link>
    )
};