import React from "react";
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


export default function Technologies() {

    const technologies = [
        {
            name: "Python",
            icon: <SiPython size={50}/>,
            stars: 4,
            description: "Python is a popular high-level programming language known for its simple and readable syntax. It is widely used in web development, data analysis, and scientific computing due to its extensive libraries and ease of use, making it a popular choice among beginner and experienced programmers alike.",
        },
        {
            name: "Flask",
            icon: <SiFlask size={50}/>,
            stars: 4,
            description: "Flask is a simple and flexible Python web application framework, perfect for small to medium-sized web applications. Its lightweight nature, minimal setup requirements, and extensive documentation make it a popular choice for developers.",
        },
        {
            name: "Django",
            icon: <SiDjango size={50}/>,
            stars: 1,
            description: "Django is a high-level, full-stack Python web framework used for building large-scale web applications. It provides a robust set of features and tools for developers, including an ORM, template engine, and admin interface. Django's popularity and vast ecosystem make it a go-to choice for many web developers.",
        },
        {
            name: "SQL / MySQL",
            icon: <SiMysql size={50}/>,
            stars: 3,
            description: "MySQL is a popular open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) for managing and manipulating data. It is widely used for web applications, powering many popular websites and content management systems. MySQL's scalability, performance, and reliability make it a go-to choice for many developers.",
        },
        {
            name: "JavaScript",
            icon: <SiJavascript size={50}/>,
            stars: 3,
            description: "JavaScript (JS) is a popular programming language used to create interactive and dynamic web pages. It runs on the client-side, meaning it executes in the user's web browser, and is commonly used to manipulate the Document Object Model (DOM) to add interactivity, handle user events, and create dynamic effects. JS is also used on the server-side with Node.js to build scalable and fast web applications.",
        },
        {
            name: "React",
            icon: <SiReact size={50}/>,
            stars: 4,
            description: "React is a popular JavaScript library used for building user interfaces. It is widely used for developing web applications, mobile applications, and single-page applications. React's component-based architecture, declarative programming style, and efficient rendering make it a go-to choice for many developers. Its vast ecosystem and active community also contribute to its popularity.",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss size={50}/>,
            stars: 3,
            description: "Tailwind CSS is a popular utility-first CSS framework used for building responsive user interfaces. It provides a set of pre-defined CSS classes that can be used to quickly style HTML elements, without the need to write custom CSS. Tailwind's modular, customizable, and consistent approach to styling makes it a go-to choice for many developers. Its active community and extensive documentation also contribute to its popularity.",
        },
        {
            name: "Git / GitHub",
            icon: <SiGit size={50}/>,
            stars: 3,
            description: "Git is a popular distributed version control system used for tracking changes in source code during software development. It provides powerful features for collaboration, branching, merging, and versioning. Git is widely used by software developers and is a go-to choice for managing and sharing code.",
        },
        {
            name: "Linux",
            icon: <SiLinux size={50}/>,
            stars: 3,
            description: "Linux is a popular open-source operating system widely used in servers, supercomputers, and mobile devices. Its flexibility, stability, and security make it a top choice for developers, as well as for hosting websites and applications. With its vast number of distributions and customization options, Linux can be tailored to meet specific needs.",
        },
        {
            name: "Docker / Docker Compose",
            icon: <SiDocker size={50}/>,
            stars: 3,
            description: "Docker is a popular containerization platform used for packaging, distributing, and running applications. It allows developers to create portable, isolated environments that can run on any machine. Docker Compose is a tool that simplifies the process of managing multiple containers and their dependencies. Docker's flexibility, scalability, and portability make it a go-to choice for many developers.",
        },
        {
            name: "Nginx",
            icon: <SiNginx size={50}/>,
            stars: 3,
            description: "Nginx is a popular open-source web server used for serving static and dynamic content. It is also used as a reverse proxy and load balancer. Nginx's high-performance, low resource usage, and ability to handle large amounts of traffic make it a popular choice for many websites and web applications. Its rich set of features and modules also contribute to its popularity.",
        },
    ]

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
