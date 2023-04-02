import {useTranslation} from "react-i18next";

export default function Contact() {

    const {t, i18n} = useTranslation();

    return (
        <section className="text-lg bg-primary px-5 py-16" id="contact">
            <div className="text-center md:w-[60%] mx-auto text-white">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] mx-auto border-accent pb-2">
                    {t("contact_title")}
                </h2>

                <p className="py-2">
                    <span className="font-bold">E-mail:</span> kam.zeglen@gmail.com
                </p>
                <p className="py-2">
                    <span className="font-bold">{t("phone")}:</span> +48 661 514 204
                </p>
                <p className="py-2">
                    <span className="font-bold">{t("city")}:</span> Kraków
                </p>
            </div>
        </section>
    );
};