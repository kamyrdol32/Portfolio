import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-5 py-3 bg-secondary text-white fixed w-full z-10 border-b-2 border-accent">
            <a href="/" className="text-2xl font-bold hover:text-accent">
                Kamil Żegleń
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#about">About</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#technologies">Technologies</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
            >
                <ul className="flex flex-col divide-y-2 gap-1">
                    <li>
                        <a href="/#about" onClick={handleToggle} className="font-bold hover:text-accent px-4 text-lg">About</a>
                    </li>
                    <li>
                        <a href="/#technologies" onClick={handleToggle} className="font-bold hover:text-accent px-4 py-5 text-lg">Technologies</a>
                    </li>
                    <li>
                        <a href="/#projects" onClick={handleToggle} className="font-bold hover:text-accent px-4 py-5 text-lg">Projects</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={handleToggle} className="font-bold hover:text-accent px-4 py-5 text-lg">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className="block md:hidden">
                {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            </button>
        </header>
    );
};