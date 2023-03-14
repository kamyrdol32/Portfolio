import React from "react";
import {useTranslation} from "react-i18next";

export default function About() {

    const {t, i18n} = useTranslation();

    return (
        <section className="bg-secondary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid items-center justify-center">
                <div className="p-3">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-accent pb-2">
                        {t("about_title")}
                    </h2>

                    <p className="pb-5">
                        {t("about_description")}
                    </p>
                    <p className="pb-5">
                        {t("about_description_2")}
                    </p>

                    <p>
                        {t("about_description_3")}
                    </p>
                </div>

            </div>
        </section>
    );
};