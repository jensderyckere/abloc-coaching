import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

import { Logo, NavButton } from "../components";

// Styles
import "../styles/partials/Header.module.css";

// Content
import * as Content from "../utils/content/nl.json";

export default function Header() {
    const [ headerMovement, setHeaderMovement ] = useState("pinned");

    useEffect(() => {
        // Check if scrolling
        setHeaderMovement(window.scrollY >= 100 ? "unpinned" : "pinned");

        if (window) {
            window.addEventListener("scroll", () => {
                setHeaderMovement(window.scrollY >= 100 ? "unpinned" : "pinned");
            });
        };
    });

    return (
        <header className={`header z-50 header-${headerMovement} fixed left-0 w-full`}>
            <Fade>
                <nav className="nav container mx-auto px-4 py-8 flex items-center">
                    <Logo />
                    {
                        Content.nav.items.map((navItem, index) => {
                            return <Link className="nav-button cursor-pointer font-primary relative md:mr-10 lg:mr-20 hidden md:flex text-base" key={index} smooth={true} duration={200} to={navItem.href}>{navItem.title}</Link>
                        })
                    }
                </nav>

                <div className="toggle absolute cursor-pointer right-4 top-8 md:hidden flex flex-col">
                    <Fade 
                        right
                        delay={150}
                    >
                        <span className="bg-black h-1 w-8 mb-1"></span>
                    </Fade>
                    <Fade 
                        right
                        delay={250}
                    >
                        <span className="bg-black h-1 w-8 mb-1"></span>
                    </Fade>   
                    <Fade 
                        right
                        delay={350}
                    >
                        <span className="bg-black h-1 w-8"></span>
                    </Fade>                 
                </div>
            </Fade>
        </header>
    )
}
