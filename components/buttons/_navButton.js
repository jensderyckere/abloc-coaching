import { useEffect, useState } from "react";

export default function NavButton({ link, title, samePage }) {
    const [ current, setCurrent ] = useState(false);

    useEffect(() => {
        if (document.location.pathname === link) {
            setCurrent(true);
        };
    });

    return <a className={`nav-button font-primary relative md:mr-10 lg:mr-20 hidden md:flex text-base ${current ? "font-bold" : "font-normal"}`} title={ title } href={ link }>{ title }</a>
};