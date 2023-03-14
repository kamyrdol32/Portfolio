import React from "react";
import TypeIt from "typeit-react";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between p-5">
                <div className="pb-5 md:pb-">
                    <h1 className="text-4xl lg:text-5xl">
                        Hi! <br/>I am <span className="text-accent">Kamil</span> <br/>
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
                        I am a passionate developer who loves to create new things. I am currently working on my own
                        projects and learning new technologies.
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="/#projects"
                            className="mr-4 btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                        >
                            See Projects
                        </a>
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