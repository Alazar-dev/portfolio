import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-between items-center py-4 px-2">
            <Image
                src="/logo.jpeg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-md"
            />

            <a
                className="text-white border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition"
                href="/Alazar%20Tadesse.pdf"
                download
            >
                Resume
            </a>
        </div>
    );
}