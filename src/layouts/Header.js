import Logo from "../assets/logo.jpeg";

export default function Header() {
  return (
    <div className="flex justify-between">
      <img className="App-logo" src={Logo} alt="" />
      <a
        className="text-white border rounded-lg p-2"
        href="../assets/Alazar%20Tadesse.pdf"
        download="Alazar Tadesse"
      >
        Resume
      </a>
    </div>
  );
}
