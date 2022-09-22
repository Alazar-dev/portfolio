import Logo from "../assets/logo.jpeg";
import Resume from "../assets/Alazar Tadesse.pdf";

export default function Header() {
  return (
    <div className="flex justify-between">
      <img className="App-logo" src={Logo} alt="" />
      <a
        className="text-white border rounded-lg p-2"
        href={Resume}
        download="Alazar Tadesse"
      >
        Resume
      </a>
    </div>
  );
}
