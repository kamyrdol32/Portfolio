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
	SiPython,
	SiCss3,
	SiAngular,
	SiBootstrap,
	SiGithub,
	SiCypress
} from "react-icons/si";
import {useTranslation} from "react-i18next";


export default function Technologies() {

	const {t, i18n} = useTranslation();

	const languages = [
		{
			name: "Python",
			icon: <SiPython size={50}/>,
			stars: 4,
			description: "technologies_python_desc",
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
			name: "CSS",
			icon: <SiCss3 size={50}/>,
			stars: 3,
			description: "technologies_css_desc",
		},
	]

	const frameworks_frontend = [
		{
			name: "React",
			icon: <SiReact size={50}/>,
			stars: 4,
			description: "technologies_react_desc",
		},
		{
			name: "Angular",
			icon: <SiAngular size={50}/>,
			stars: 4,
			description: "technologies_angular_desc",
		},
		{
			name: "Tailwind CSS",
			icon: <SiTailwindcss size={50}/>,
			stars: 3,
			description: "technologies_tailwind_desc",
		},
		{
			name: "Bootstrap",
			icon: <SiBootstrap size={50}/>,
			stars: 3,
			description: "technologies_bootstrap_desc",
		},
	]

	const frameworks_backend = [
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
		}
	]

	const technologies = [
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
		{
			name: "GitHub Actions",
			icon: <SiGithub size={50}/>,
			stars: 2,
			description: "technologies_github_actions_desc",
		},
		{
			name: "Cypress.io",
			icon: <SiCypress  size={50}/>,
			stars: 2,
			description: "technologies_cypress_desc",
		},
	]

	return (
		<div>
			<section className="text-lg bg-primary text-white px-5 pt-32 pb-8" id="languages">
				<div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
					<div className="about-info mb-5">
						{i18n.language === 'pl' ?
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[390px] border-accent pb-2">
								{t("languages_title")}
							</h2>
							:
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[420px] border-accent pb-2">
								{t("languages_title")}
							</h2>
						}

					</div>
				</div>

				<div className="container mx-auto grid md:grid-cols-3 gap-10 p-3">
					{languages.map((language) => (
						<div className="flex" key={language.name}>
							<div className="flex flex-col items-center border-2 hover:border-accent p-3">
								<h3 className="p-2 text-2xl font-bold">{language.name}</h3>
								<div className="p-2 text-accent">{language.icon}</div>

								{/* Light stars */}
								<div className="flex items-center m-3">
									{[...Array(language.stars)].map((star, i) => (
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
									{[...Array(5 - language.stars)].map((star, i) => (
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
								<p className="p-2 m-2">{t(language.description)}</p>
							</div>
						</div>
					))}

				</div>
			</section>

			<section className="text-lg bg-primary text-white px-5 py-8" id="frameworks_frontend">
				<div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
					<div className="about-info mb-5">
						{i18n.language === 'pl' ?
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[430px] border-accent pb-2">
								{t("frameworks_frontend_title")}
							</h2>
							:
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[370px] border-accent pb-2">
								{t("frameworks_frontend_title")}
							</h2>
						}

					</div>
				</div>

				<div className="container mx-auto grid md:grid-cols-3 gap-10 p-3">
					{frameworks_frontend.map((framework_frontend) => (
						<div className="flex" key={framework_frontend.name}>
							<div className="flex flex-col items-center border-2 hover:border-accent p-3">
								<h3 className="p-2 text-2xl font-bold">{framework_frontend.name}</h3>
								<div className="p-2 text-accent">{framework_frontend.icon}</div>

								{/* Light stars */}
								<div className="flex items-center m-3">
									{[...Array(framework_frontend.stars)].map((star, i) => (
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
									{[...Array(5 - framework_frontend.stars)].map((star, i) => (
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
								<p className="p-2 m-2">{t(framework_frontend.description)}</p>
							</div>
						</div>
					))}

				</div>
			</section>

			<section className="text-lg bg-primary text-white px-5 py-8" id="frameworks_backend">
				<div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between p-3">
					<div className="about-info mb-5">
						{i18n.language === 'pl' ?
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[430px] border-accent pb-2">
								{t("frameworks_backend_title")}
							</h2>
							:
							<h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[360px] border-accent pb-2">
								{t("frameworks_backend_title")}
							</h2>
						}

					</div>
				</div>

				<div className="container mx-auto grid md:grid-cols-3 gap-10 p-3">
					{frameworks_backend.map((framework_backend) => (
						<div className="flex" key={framework_backend.name}>
							<div className="flex flex-col items-center border-2 hover:border-accent p-3">
								<h3 className="p-2 text-2xl font-bold">{framework_backend.name}</h3>
								<div className="p-2 text-accent">{framework_backend.icon}</div>

								{/* Light stars */}
								<div className="flex items-center m-3">
									{[...Array(framework_backend.stars)].map((star, i) => (
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
									{[...Array(5 - framework_backend.stars)].map((star, i) => (
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
								<p className="p-2 m-2">{t(framework_backend.description)}</p>
							</div>
						</div>
					))}

				</div>
			</section>

			<section className="text-lg bg-primary text-white px-5 pt-8 pb-32" id="technologies">
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
					{technologies.map((technologie) => (
						<div className="flex" key={technologie.name}>
							<div className="flex flex-col items-center border-2 hover:border-accent p-3">
								<h3 className="p-2 text-2xl font-bold">{technologie.name}</h3>
								<div className="p-2 text-accent">{technologie.icon}</div>

								{/* Light stars */}
								<div className="flex items-center m-3">
									{[...Array(technologie.stars)].map((star, i) => (
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
									{[...Array(5 - technologie.stars)].map((star, i) => (
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
								<p className="p-2 m-2">{t(technologie.description)}</p>
							</div>
						</div>
					))}

				</div>
			</section>
		</div>
	);
};
