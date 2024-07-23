import uniswipe_logo from "@/_images/uniswipe_logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white">
            <div className="flex items-center space-x-4">
                <Image src={uniswipe_logo} alt="UniSwipe Logo" width={50} height={50} />
                <h1 className="text-2xl font-bold">UniSwipe</h1>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-blue-500">Home</Link>
                <Link href="/model" className="text-blue-500">Model</Link>
                <Link href="/about" className="text-blue-500">About</Link>
            </div>
        </nav>
    )
}