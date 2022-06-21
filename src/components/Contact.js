import { Button } from "./common/Buttons";
export default function Contact() {
  return (
    <div className="get-in-touch my-20">
      <h1 className="text-white text-2xl font-bold">Get In Touch</h1>
      <p className="text-gray-500 py-6 md:w-[40%] text-center">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <Button url="mailto:mealazartadesse@gmail.com" title="Say Hello" />
    </div>
  );
}
