import { Button } from "./common/Buttons";

export default function Hero({ name, profession, description }) {
  return (
    <div className="flex flex-col items-start">
      <p style={{ fontSize: "60px" }} className="text-xl text-white">
        {name}
      </p>
      <h2 style={{ fontSize: "50px" }}>A {profession}</h2>
      <p>{description}</p>
        <Button url="mailto:mealazartadesse@gmail" title="Get In Touch" />
    </div>
  );
}
