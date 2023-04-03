import {
    SiFlask,
    SiMysql,
    SiGit,
    SiLinux,
    SiDocker,
    SiNginx,
    SiDjango,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiPython
} from "react-icons/si";
import {useTranslation} from "react-i18next";


export default function Technologies() {

    const {t, i18n} = useTranslation();

    const technologies = [
        {
            name: "Python",
            icon: <SiPython size={50}/>,
            stars: 4,
            description: "technologies_python_desc",
        },
        {
            name: "Flask",
            icon: <SiFlask size={50}/>,
            stars: 4,
            description: "technologies_flask_desc",
        },
        {
            name: "Django",
            icon: <SiDjango size={50}/>,
            stars: 1,
            description: "technologies_django_desc",
        },
        {
            name: "SQL / MySQL",
            icon: <SiMysql size={50}/>,
            stars: 3,
            description: "technologies_sql_desc",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript size={50}/>,
            stars: 3,
            description: "technologies_js_desc",
        },
        {
            name: "React",
            icon: <SiReact size={50}/>,
            stars: 4,
            description: "technologies_react_desc",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={50}/>,
            stars: 3,
            description: "technologies_tailwind_desc",
        },
        {
            name: "Git / GitHub",
            icon: <SiGit size={50}/>,
            stars: 3,
            description: "technologies_git_desc",
        },
        {
            name: "Linux",
            icon: <SiLinux size={50}/>,
            stars: 3,
            description: "technologies_linux_desc",
        },
        {
            name: "Docker / Docker Compose",
            icon: <SiDocker size={50}/>,
            stars: 3,
            description: "technologies_docker_desc",
        },
        {
            name: "Nginx",
            icon: <SiNginx size={50}/>,
            stars: 3,
            description: "technologies_nginx_desc",
        },
    ]

    return (
        <section className="text-lg bg-primary text-white px-5 py-32" id="technologies">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
                <div className="about-info mb-5">
                    {i18n.language === 'pl' ?
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[205px] border-accent pb-2">
                            {t("technologies_title")}
                        </h2>
                        :
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[220px] border-accent pb-2">
                            {t("technologies_title")}
                        </h2>
                    }

                </div>
            </div>

            <div className="container mx-auto grid md:grid-cols-3 gap-10 p-3">
                {technologies.map((technology) => (
                    <div className="flex" key={technology.name}>
                        <div className="flex flex-col items-center border-2 hover:border-accent p-3">
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
                            <p className="p-2 m-2">{t(technology.description)}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};
