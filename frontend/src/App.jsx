import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Technologies from "../components/Technologies.jsx";

export default function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </>
    )
}