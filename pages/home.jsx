import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Expreience";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div>
            <Header/>
            <Hero
                name="Alazar Tadesse"
                profession="Full Stack Developer"
                description="I'm a software engineer based in Addis Ababa, Ehtiopia"
            />
            <About
                technologies={[
                    {name: "JavaScript (ES6+)"},
                    {name: "React"},
                    {name: "React Native"},
                    {name: "Node.js"},
                    {name: "Laravel"},
                ]}
                profile_pic={"/my_pic.png"}
            />
            <Experience/>
            <Contact/>
        </div>
    );
}
