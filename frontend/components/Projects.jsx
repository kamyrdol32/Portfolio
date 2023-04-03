import {useTranslation} from "react-i18next";

const Projects = () => {

    const {t, i18n} = useTranslation();

    const projects = [
        {
            name: "Portfolio",
            year: "2023",
            img: "./src/assets/Projects/Portfolio/Glowna.png",
            desc: "projects_portfolio_desc",
            demo: "https://kamilzeglen.pl",
            github: "https://github.com/kamyrdol32/portfolio",
        },
        {
            name: "EvPanel",
            year: "2023",
            img: "./src/assets/Projects/EvPanel/Glowna.png",
            desc: "projects_evpanel_desc",
            demo: "https://evpanel.kamilzeglen.pl",
            github: "https://github.com/kamyrdol32/evpanel",
        },
        {
            name: "Instagram",
            year: "2022 / 2023",
            img: "./src/assets/Projects/Instagram2.0/Logowanie.png",
            desc: "projects_instagram_desc",
            demo: "",
            github: "https://github.com/franciszek-szeptycki/Instagram-2.0",
        },
        {
            name: "SezonowyOgrod",
            year: "2022 / 2023",
            img: "./src/assets/Projects/SezonowyOgrod/Glowna.png",
            desc: "projects_sezonowyogrod_desc",
            demo: "https://sezonowyogrod.kamilzeglen.pl/",
            github: "https://github.com/kamyrdol32/sezonowyogrod",
        },
        {
            name: "Hyped",
            year: "2022",
            img: "./src/assets/Projects/Hyped.pl/Glowna.png",
            desc: "projects_hyped_desc",
            demo: "https://hyped.kamilzeglen.pl/",
            github: "https://github.com/kamyrdol32/hyped",
        },
        {
            name: "Portfolio Old",
            year: "2022",
            img: "./src/assets/Projects/Portfolio_old/Glowna.png",
            desc: "projects_portfolio_old_desc",
            demo: "https://old.kamilzeglen.pl/",
            github: "https://github.com/kamyrdol32/portfolio_old",
        },
        {
            name: "Kadr",
            year: "2021",
            img: "./src/assets/Projects/Kadr.pl/Glowna.png",
            desc: "projects_kadr_desc",
            demo: "",
            github: "https://github.com/kamyrdol32/kadr",
        },
        {
            name: "Ambiwave",
            year: "2021",
            img: "./src/assets/Projects/AmbiWave.pl/Glowna.png",
            desc: "projects_ambiwave_desc",
            demo: "",
            github: "https://github.com/kamyrdol32/ambiwave",
        },
    ];

    return (
        <section className="bg-secondary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
                <div className="about-info mb-5">
                    {i18n.language === 'pl' ?
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-accent pb-2">
                            {t('projects_title')}
                        </h2>
                        :
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[135px] border-accent pb-2">
                            {t('projects_title')}
                        </h2>
                    }
                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-2 p-3">
                {projects.map((project) => (
                    <div key={project.name}>
                        <h3 className="block sm:hidden text-xl font-bold text-center text-accent pt-5">{project.name}</h3>
                        <div className="relative border-2 hover:border-accent bg-black">
                            <img src={project.img} alt={project.name}/>
                            <div
                                className="hidden sm:block flex absolute left-0 right-0 bottom-0 top-0 mx-auto w-[100%] h-[100%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                <h3 className="text-2xl font-bold text-center text-accent xl:pt-2">
                                    {project.name}
                                </h3>
                                <p className="py-1 px-2 text-center text-white text-sm">{project.year}</p>
                                <p className="hidden xl:block py-2 px-2 text-center text-white">
                                    {t(project.desc)}
                                </p>

                                {/* Desktop INFO */}

                                <div className="flex justify-center">

                                    {/* LIVE */}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            className="m-1 btn bg-accent border-2 border-secondary text-white px-6 py-3"
                                        >
                                            Live
                                        </a>
                                    )}

                                    {/* GITHUB */}
                                    {project.github && (
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

                        {/* Mobile INFO */}
                        <div className="flex justify-center block sm:hidden">

                            {/* LIVE */}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    className="w-1/2 m-1 btn bg-accent text-white px-14 py-3"
                                >
                                    Live
                                </a>
                            )}

                            {/* GITHUB */}
                            {project.github && (
                                <a
                                    href={project.github}
                                    className="w-1/2 m-1 btn bg-accent text-white px-12 py-3"
                                >
                                    Github
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;