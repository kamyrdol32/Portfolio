import React from "react";
import {DiReact, DiPython} from "react-icons/di";
import {SiFlask, SiMysql, SiGit, SiLinux, SiDocker, SiNginx, SiDjango} from "react-icons/si";


export default function Technologies() {

    const technologies = [
        {
            name: "Python",
            icon: <DiPython size={50}/>,
            stars: 4,
            description: "Język programowania wysokiego poziomu ogólnego przeznaczenia, o rozbudowanym pakiecie bibliotek standardowych, którego ideą przewodnią jest czytelność i klarowność kodu źródłowego. Jego składnia cechuje się czytelnością, przejrzystością i zwięzłością.",
        },
        {
            name: "Flask",
            icon: <SiFlask size={50}/>,
            stars: 3,
            description: "Mikro framework aplikacji webowych napisany w języku Python. Jest sklasyfikowany jako micro-framework, ponieważ nie wymaga określonych narzędzi ani bibliotek. Jest to jeden z popularniejszych framework'ow wykorzystywanych do tworzenia stron internetowych.",
        },
        {
            name: "Django",
            icon: <SiDjango size={50}/>,
            stars: 1,
            description: "Wolny i otwarty framework przeznaczony do tworzenia aplikacji internetowych, napisany w Pythonie. Powstał pod koniec 2003 roku jako ewolucyjne rozwinięcie aplikacji internetowych, tworzonych przez grupę programistów związanych z Lawrence Journal-World.",
        },
        {
            name: "SQL / MySQL",
            icon: <SiMysql size={50}/>,
            stars: 3,
            description: "Jest to język dziedzinowy używany do tworzenia, modyfikowania relacyjnych baz danych oraz do umieszczania i pobierania danych z tych baz. Decyzję o sposobie przechowywania i pobrania danych pozostawia się systemowi zarządzania bazą danych.",
        },
        {
            name: "Git / GitHub",
            icon: <SiGit size={50}/>,
            stars: 3,
            description: "Rozproszonym systemem kontroli wersji ułatwiającym pracę nad tworzeniem aplikacji, stron internetowych i innych narzędzi w grupach. System śledzi wszystkie wykonywane zmiany w plikach, a także umożliwia przywrócenie ich dowolnej, wcześniejszej wersji",
        },
        {
            name: "Linux",
            icon: <SiLinux size={50}/>,
            stars: 3,
            description: "Rodzina uniksopodobnych systemów operacyjnych opartych na jądrze Linux. Linux jest jednym z przykładów wolnego i otwartego oprogramowania. Jego kod źródłowy może być dowolnie wykorzystywany, modyfikowany i rozpowszechniany.",
        },
        {
            name: "React",
            icon: <DiReact size={50}/>,
            stars: 3,
            description: "Biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Często wykorzystywana do tworzenia aplikacji typu Single Page Application.",
        },
        {
            name: "Docker / Docker Compose",
            icon: <SiDocker size={50}/>,
            stars: 3,
            description: "Otwarte oprogramowanie służące do realizacji wirtualizacji na poziomie systemu operacyjnego (tzw. „konteneryzacji”), działające jako 'platforma dla programistów i administratorów do tworzenia, wdrażania i uruchamiania aplikacji rozproszonych'.",
        },
        {
            name: "Nginx",
            icon: <SiNginx size={50}/>,
            stars: 2,
            description: "Serwer WWW (HTTP) oraz serwer proxy dla HTTP i IMAP/POP3. Zaprojektowany z myślą o wysokiej dostępności i silnie obciążonych serwisach (nacisk na skalowalność i niską zajętość zasobów). Wydawany jest na licencji BSD.",
        },
    ];

    return (
        <section className="bg-primary text-white px-5 py-32" id="technologies">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[220px] border-indigo-600 pb-2">
                        <span className="text-accent">T</span>echnologies
                    </h2>
                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-10">
                {technologies.map((technology) => (
                    <div className="flex" key={technology.name}>
                        <div className="flex flex-col justify-center items-center border-2">
                            <h3 className="p-2 text-2xl font-bold">{technology.name}</h3>
                            <div className="p-2 text-accent">{technology.icon}</div>

                            {/* Light stars */}
                            <div className="flex items-center m-3">
                                {[...Array(technology.stars)].map((star, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-accent"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12.804L5.158 15.4l.894-5.662L1.1 6.6l5.702-.823L10 1l2.198 5.377 5.702.823-4.054 4.038.894 5.662L10 12.804z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}


                                {/* Dark stars */}
                                {[...Array(5 - technology.stars)].map((star, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12.804L5.158 15.4l.894-5.662L1.1 6.6l5.702-.823L10 1l2.198 5.377 5.702.823-4.054 4.038.894 5.662L10 12.804z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}

                            </div>
                            <p className="p-2 m-2">{technology.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};
