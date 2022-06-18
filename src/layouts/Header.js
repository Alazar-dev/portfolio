import Logo from "../assets/logo.jpeg";
import { Button } from "../components/common/Buttons";

export default function Header() {
  return (
    <div className="flex justify-between">
      <img className="App-logo" src={Logo} alt="" />
      <Button url="#" title="Resume" />
    </div>
  );
}
