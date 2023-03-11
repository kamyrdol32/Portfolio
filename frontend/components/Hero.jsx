import React from "react";

import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";

export default function Hero() {
    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-5xl">
                        Hi! <br/>I am <span className="text-accent">K</span>amil <br/>
                        Backend Developer
                    </h1>

                    <p className="pr-5 mr-5">
                        I am a passionate developer who loves to create new things. I am currently working on my own projects and learning new technologies.
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

                <div className="hero-img p-3">
                    <img
                        src="./src/assets/kamil.jpg"
                        alt="Kamil Zeglen"
                        className="hidden w-3/4 md:block ml-auto rounded-full border-4 border-accent"
                    />
                </div>
            </div>
        </section>
    );
};