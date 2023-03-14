import React from "react";

const Projects = () => {

    const projects = [
        {
            name: "Portfolio",
            year: "2023",
            img: "./src/assets/Projects/Portfolio/Glowna.png",
            desc: "It's a website that showcases projects, works, and achievements.",
            demo: "https://kamilzeglen.pl",
            github: "https://github.com/kamyrdol32/portfolio",
        },
        {
            name: "EvPanel",
            year: "2023",
            img: "./src/assets/Projects/EvPanel/Glowna.png",
            desc: "This is an application created for a master's thesis. The dominant backend technology used in the project is Python (Flask), and the frontend is built using React.",
            demo: "https://evpanel.kamilzeglen.pl",
            github: "https://github.com/kamyrdol32/evpanel",
        },
        {
            name: "Instagram",
            year: "2022 / 2023",
            img: "./src/assets/Projects/Instagram2.0/Logowanie.png",
            desc: "The application was created in collaboration with 'franciszek-szeptycki' for portfolio development. The technologies used include Flask for the backend and React for the frontend.",
            demo: "",
            github: "https://github.com/franciszek-szeptycki/Instagram-2.0",
        },
        {
            name: "SezonowyOgrod",
            year: "2022 / 2023",
            img: "./src/assets/Projects/SezonowyOgrod/Glowna.png",
            desc: "",
            demo: "https://sezonowyogrod.kamilzeglen.pl/",
            github: "https://github.com/kamyrdol32/sezonowyogrod",
        },
        {
            name: "Hyped",
            year: "2022",
            img: "./src/assets/Projects/Hyped.pl/Glowna.png",
            desc: "This is an application created for a master's thesis, with Python (Flask) as the dominant backend technology and React as the frontend technology used in the project.",
            demo: "",
            github: "https://github.com/kamyrdol32/hyped",
        },
        {
            name: "Portfolio V1",
            year: "2022",
            img: "./src/assets/Projects/Portfolio_old/Glowna.png",
            desc: "This application was created to showcase oneself and their programming achievements.",
            demo: "",
            github: "https://github.com/kamyrdol32/portfolio_old",
        },
        {
            name: "Kadr",
            year: "2021",
            img: "./src/assets/Projects/Kadr.pl/Glowna.png",
            desc: "This is an application created for the purposes of an engineering thesis. The dominant technology used in the project is Python (Flask).",
            demo: "",
            github: "https://github.com/kamyrdol32/kadr",
        },
        {
            name: "Ambiwave",
            year: "2021",
            img: "./src/assets/Projects/AmbiWave.pl/Glowna.png",
            desc: "An application developed while learning Flask (Python) framework. JavaScript was also used to a minimal extent.",
            demo: "",
            github: "https://github.com/kamyrdol32/ambiwave",
        },
    ];

    return (
        <section className="bg-secondary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[135px] border-indigo-600 pb-2">
                        <span className="text-accent">P</span>rojects
                    </h2>
                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-10 p-3">
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

                                {/* LIVE */}
                                { project.demo && (
                                    <a
                                        href={project.demo}
                                        className="m-1 btn bg-accent border-2 border-secondary text-white px-6 py-3"
                                    >
                                        Live
                                    </a>
                                )}

                                {/* GITHUB */}
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