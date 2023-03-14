import {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useTranslation} from "react-i18next";

export default function Navbar() {

    const {t, i18n} = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header
            className="flex justify-between px-5 py-3 bg-secondary text-white fixed w-full z-10 border-b-2 border-accent">
            <a href="#" className="text-2xl font-bold hover:text-accent">
                Kamil Żegleń
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#about">{t("about")}</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg"
                           href="/#technologies">{t("technologies")}</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#projects">{t("projects")}</a>
                    </li>
                    <li>
                        <a className="font-bold hover:text-accent px-4 py-5 text-lg" href="/#contact">{t("contact")}</a>
                    </li>
                    <li className="flex items-center justify-center px-4 ">
                        {/* Language */}
                            {i18n.language === 'pl' ?
                                <img src="/src/assets/Flags/PL.jpg" onClick={() => changeLanguage("en")}
                                     className="w-8 h-4" alt="Polish flag"/>
                                :
                                <img src="/src/assets/Flags/ENG.jpg" onClick={() => changeLanguage("pl")}
                                     className="w-8 h-4" alt="Polish flag"/>
                            }
                    </li>
                </ul>

            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
            >
                <ul className="flex flex-col divide-y-2 gap-1">
                    <li>
                        <a href="/#about" onClick={handleToggle}
                           className="font-bold hover:text-accent px-4 text-lg">{t("about")}</a>
                    </li>
                    <li>
                        <a href="/#technologies" onClick={handleToggle}
                           className="font-bold hover:text-accent px-4 py-5 text-lg">{t("technologies")}</a>
                    </li>
                    <li>
                        <a href="/#projects" onClick={handleToggle}
                           className="font-bold hover:text-accent px-4 py-5 text-lg">{t("projects")}</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={handleToggle}
                           className="font-bold hover:text-accent px-4 py-5 text-lg">{t("contact")}</a>
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