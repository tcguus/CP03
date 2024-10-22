import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-[4rem] bg-gray-500 text-white font-bold flex items-center">
            <a href="/" className="ml-[1rem] text-lg transform hover:scale-110 transition duration-300">Home</a>
            <ul className="flex ml-auto mr-[1rem] gap-7 text-lg">
                <li className="transform hover:scale-110 transition duration-300"><Link href={"/checkpoint"}>CheckPoint</Link></li>
                <li className="transform hover:scale-110 transition duration-300"><Link href={"/challenge"}>Challenge Sprint</Link></li>
                <li className="transform hover:scale-110 transition duration-300"><Link href={"/global"}>Global Solution</Link></li>
            </ul>
        </header>
    );
}