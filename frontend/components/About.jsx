import React from "react";

export default function About() {
    return (
        <section className="bg-secondary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid items-center justify-center">
                <div className="p-3">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-indigo-600 pb-2">
                        <span className="text-accent">A</span>bout Me
                    </h2>

                    <p className="pb-5">
                        Hi! My name is Kamil Żegleń and I have been programming for several years.
                    </p>
                    <p className="pb-5">
                        Currently, I am a graduate of the Pedagogical University of Krakow,
                        where I studied Technical and Computer Education at the engineering and master's level.
                    </p>

                    <p>
                        I started my career with Python about 2 years ago.
                        My current achievement is developing an application called "Hyped,"
                        which was created for my master's thesis project.
                        I used Python with the Flask and React frameworks to develop it. Currently,
                        I am focusing on developing my skills as a FrontEnd developer (React, Tailwindcss),
                        but in the future, I aspire to become a DevOps engineer.
                    </p>
                </div>

            </div>
        </section>
    );
};