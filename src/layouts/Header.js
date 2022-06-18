import Logo from "../assets/logo.jpeg";

export default function Header() {
  return (
    <div className="flex justify-between">
      <img className="App-logo" src={Logo} alt="" />
      <button className="text-white border rounded-lg px-4">Resume</button>
    </div>
  );
}
