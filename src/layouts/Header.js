import Logo from "../assets/logo.jpeg";
import { Button } from "../components/common/Buttons";

export default function Header() {
  return (
    <div className="flex justify-between">
      <img className="App-logo" src={Logo} alt="" />
      <a
        className="text-white border rounded-lg p-2"
        href="../assets/Alazar%20Tadesse%20-%20Resume.pdf"
        download="Alazar Tadesse"
      >
        Resume
      </a>
    </div>
  );
}
