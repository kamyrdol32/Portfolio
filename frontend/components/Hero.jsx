import React from "react";
import TypeIt from "typeit-react";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineFilePdf,
} from "react-icons/ai";
import {useTranslation} from "react-i18next";

export default function Hero() {

    const {t, i18n} = useTranslation();

    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between p-3">
                <div className="pb-5">

                    <div className="flex p-3 md:hidden items-center justify-center">
                        <img
                            src="./src/assets/kamil.jpg"
                            alt="Kamil Zeglen"
                            className="flex w-64 rounded-full border-4 border-accent"
                        />
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-bold">
                        {t("hi")} <br/>{t("i_am")} <span className="text-accent">Kamil</span> <br/>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance
                                    .type("BackEnd Developer")
                                    .pause(1000)
                                    .move(-10)
                                    .pause(500)
                                    .delete(7)
                                    .type("FrontEnd")
                                    .pause(1000)
                                    .delete(8)
                                    .type("FullStack")
                                    .pause(1000)
                                    .move(18)
                                    .type("!")
                                    .go();

                                // Remember to return it!
                                return instance;
                            }}
                        />
                    </h1>

                    <p className="pr-5 mr-5 py-5">
                        {t("hero_description")}
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/kamyrdol32"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineGithub size={55}/>{" "}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kamil%C5%BCegle%C5%84/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineLinkedin size={55}/>{" "}
                        </a>
                    </div>

                    <div className="flex py-5 ">
                        <a
                            href="/#projects"
                            className="mr-4 btn bg-accent border-2 bg-secondary border-accent text-white px-6 py-3 hover:bg-transparent"
                        >
                            {t("see_projects")}
                        </a>
                        {i18n.language === "pl" ? (
                            <a
                                href="./src/assets/CV/Kamil Żegleń - PL.pdf"
                                className="mr-4 btn bg-accent border-2 bg-secondary border-accent text-white px-6 py-3 hover:bg-transparent"
                            >
                                {t("see_cv")}
                            </a>
                        ) : (
                            <a
                                href="./src/assets/CV/Kamil Żegleń - ANG.pdf"
                                className="mr-4 btn bg-accent border-2 bg-secondary border-accent text-white px-6 py-3 hover:bg-transparent"
                            >
                                {t("see_cv")}
                            </a>
                        )}
                    </div>
                </div>

                <div className="p-3">
                    <img
                        src="./src/assets/kamil.jpg"
                        alt="Kamil Zeglen"
                        className="hidden w-96 md:block ml-auto rounded-full border-4 border-accent items-center justify-center"
                    />
                </div>
            </div>
        </section>
    );
};