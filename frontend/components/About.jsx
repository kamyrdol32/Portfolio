import React from "react";

export default function About() {
    return (
        <section className="bg-secondary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid items-center justify-center">
                <div className="about-text p-3">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-indigo-600 pb-2">
                        <span className="text-accent">A</span>bout Me
                    </h2>

                    <p className="pb-5">
                        Cześć! Nazywam sie Kamil Żegleń i od kilku lat zajmuję sie programowania.
                    </p>
                    <p className="pb-5">
                        Aktualnie jestem studentem na "Uniwersytecie Pedagogicznym im. Komisji Edukacji Narodowej w Krakowie",
                        gdzie studiuję "Edukacje Techniczno-Informatyczną" na poziomie magisterskim.
                    </p>

                    <p>
                        Swoją karierę z Python'em rozpocząłem około 2-lata temu,
                        moim dotychczasowym osiągnięciem jest napisanie "Aplikacji do
                        zarządzania kadrami" która powstała na potrzeby pracy inżynierskiej
                        na studiach gdzie został wykorzystany język "Python" oraz framework "Flask".
                    </p>
                </div>

            </div>
        </section>
    );
};