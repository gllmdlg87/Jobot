import Link from "next/link";

export default function Navbar() {
    return (
    <nav className = "shadow px-4 py-2 flex flex-rox justify-between items-center">
        <div className="text-xl font-bold">Jobot</div>
        <div>
            <Link href="/login">Log In</Link>
        </div>
    </nav>
    );
}