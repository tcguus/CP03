export default function Header () {
    return(
        <header className="w-full h-[4rem] bg-gray-500 text-white font-bold flex items-center">
            <a href="" className="ml-[1rem] text-lg transform hover:scale-110 transition duration-300">Home</a>
            <ul className="flex ml-auto mr-[1rem] gap-7 text-lg">
                <li className="transform hover:scale-110 transition duration-300"><a href="">CheckPoints</a></li>
                <li className="transform hover:scale-110 transition duration-300"><a href="">Global Solution</a></li>
                <li className="transform hover:scale-110 transition duration-300"><a href="">Challenger Sprints</a></li>
            </ul>
        </header>
    );
}