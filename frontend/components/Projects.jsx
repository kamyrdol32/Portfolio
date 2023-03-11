import React from "react";

const Projects = () => {

    const projects = [
        {
            name: "Hyped",
            year: "2022",
            img: "./src/assets/Projects/Hyped.pl/Glowna.png",
            desc: "Jest to aplikacja stworzona na potrzeby pracy magisterskiej. W projekcie dominującą technologią BackEnd'ową jest Python (Flask) oraz React'a",
            demo: "",
            github: "https://github.com/kamyrdol32/hyped.pl",
        },
        {
            name: "Instagram",
            year: "2022 / 2023",
            img: "./src/assets/Projects/Instagram2.0/Zdjecia.png",
            desc: "Aplikacja stworzona wraz z 'franciszek-szeptycki' w celu rozwijania swojego portfolio. Wykorzystane technologie: Flask / React",
            demo: "",
            github: "",
        },
        {
            name: "Portfolio V1",
            year: "2021",
            img: "./src/assets/Projects/Portfolio/Glowna.png",
            desc: "Aplikacja stworzona na potrzeby zaprezentowania siebie oraz swoich dotychczasowych osiągnięć w programowaniu.",
            demo: "",
            github: "",
        },
        {
            name: "Kadr",
            year: "2020",
            img: "./src/assets/Projects/Kadr.pl/Glowna.png",
            desc: "Jest to aplikacja stworzona na potrzeby pracy inżynierskiej. W projekcie dominującą technologia jest Python (Flask).",
            demo: "",
            github: "",
        },
        {
            name: "Ambiwave",
            year: "2020",
            img: "./src/assets/Projects/AmbiWave.pl/Glowna.png",
            desc: "Aplikacja napisana w frameworku Flask (Python) w procesie nauki tej technologii. W minimalnym stopniu wykorzystano również JavaScript",
            demo: "",
            github: "",
        },
    ];

    return (
        <section className="bg-secondary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[135px] border-indigo-600 pb-2">
                        <span className="text-accent">P</span>rojects
                    </h2>
                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <div className="relative border-2 hover:border-accent bg-black" key={project.name}>
                        <img src={project.img} alt={project.name}/>
                        <div
                            className="flex absolute left-0 right-0 bottom-0 top-0 mx-auto w-[100%] h-[100%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                            <h3 className="text-2xl font-bold text-center text-accent">
                                {project.name}
                            </h3>
                            <p className="py-1 px-2 text-center text-white text-sm">{project.year}</p>
                            <p className="py-2 px-2 text-center text-white">
                                {project.desc}
                            </p>
                            <div className="flex justify-center">

                                {/* DEMO*/}
                                { project.demo && (
                                    <a
                                        href={project.demo}
                                        className="m-1 btn bg-accent border-2 border-secondary text-white px-6 py-3"
                                    >
                                        Live
                                    </a>
                                )}

                                {/* GITHUB*/}
                                { project.github && (
                                    <a
                                        href={project.github}
                                        className="m-1 btn bg-accent border-2 border-secondary text-white px-6 py-3"
                                    >
                                        Github
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;