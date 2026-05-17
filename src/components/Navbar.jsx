// src/components/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

    const [navOpen, setNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navRef = useRef();

    /* CLOSE MENU */

    const closeMenu = () => {
        setNavOpen(false);
    };

    /* CLOSE WHEN CLICK OUTSIDE */

    useEffect(() => {

        const handleOutsideClick = (event) => {

            if (
                navRef.current &&
                !navRef.current.contains(event.target)
            ) {
                setNavOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };

    }, []);

    /* ACTIVE SECTION */

    useEffect(() => {

        const handleScroll = () => {

            /* STOP UPDATING DURING MODAL */

            if (
                document.body.classList.contains("modal-open")
            ) {
                return;
            }

            const sections =
                document.querySelectorAll("section");

            let current = "home";

            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 140;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {
                    current = section.id;
                }

            });

            setActiveSection(current);

        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        /* INITIAL CHECK */

        handleScroll();

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);

    return (
        <>

            {/* OVERLAY */}

            <div
                className={`nav-overlay ${navOpen ? "show-overlay" : ""
                    }`}
                onClick={closeMenu}
            ></div>

            {/* NAVBAR */}

            <nav
                className="navbar navbar-expand-lg fixed-top custom-nav"
                ref={navRef}
            >

                <div className="container">

                    {/* LOGO */}

                    <a
                        className="navbar-brand"
                        href="#home"
                        onClick={closeMenu}
                    >
                        Latika S
                    </a>

                    {/* TOGGLE */}

                    <button
                        className={`navbar-toggler ${navOpen ? "open" : ""
                            }`}
                        type="button"
                        onClick={() => setNavOpen(!navOpen)}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                    {/* MENU */}

                    <div
                        className={`custom-collapse ${navOpen ? "show-menu" : ""
                            }`}
                    >

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === "home"
                                        ? "active-link"
                                        : ""
                                        }`}
                                    href="#home"
                                    onClick={closeMenu}
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === "about"
                                        ? "active-link"
                                        : ""
                                        }`}
                                    href="#about"
                                    onClick={closeMenu}
                                >
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === "skills"
                                        ? "active-link"
                                        : ""
                                        }`}
                                    href="#skills"
                                    onClick={closeMenu}
                                >
                                    Skills
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === "projects"
                                        ? "active-link"
                                        : ""
                                        }`}
                                    href="#projects"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === "contact"
                                        ? "active-link"
                                        : ""
                                        }`}
                                    href="#contact"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </>
    );
}

export default Navbar;