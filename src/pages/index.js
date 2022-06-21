import Header from "../layouts/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Expreience";
import Contact from "../components/Contact";
import Profile_pic from "../assets/my_pic.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        name="Alazar Tadesse"
        profession="Full Stack Developer"
        description="I'm a software engineer based in Addis Ababa, Bsc in Software Engineering from Addis Ababa Institute of Technology."
      />
      <About
        technologies={[
          { name: "JavaScript (ES6+)" },
          { name: "React" },
          { name: "React Native" },
          { name: "Node.js" },
          { name: "Laravel" },
        ]}
        profile_pic={Profile_pic}
      />
      <Experience />
      <Contact />
    </div>
  );
}
