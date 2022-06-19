import Header from "../layouts/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        name="Alazar Tadesse"
        profession="Full Stack Developer"
        description="I'm a software engineer based in Addis Ababa, Bsc in Software Engineering from Addis Ababa Institute of Technology."
      />
    </div>
  );
}
