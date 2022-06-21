import { Button } from "./common/Buttons";

export default function Hero({ name, profession, description }) {
  return (
    <div className="flex flex-col items-start mt-20">
      <p className="md:text-[60px] text-2xl text-white">{name}</p>
      <h2 className="text-3xl mt-4 text-white">{profession}</h2>
      <p className="text-gray-500 mt-2 mb-6">{description}</p>
      <Button url="mailto:mealazartadesse@gmail" title="Get In Touch" />
    </div>
  );
}
