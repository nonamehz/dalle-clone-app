import { Link } from 'react-router-dom';
import { CodeIcon } from './';


export const Navbar = () => {
    return (
        <header className="w-full px-5 mb-8 bg-white border border-gray-100 h-[80px] md:h-[100px]">
            <div className="flex items-center h-full mx-auto text-xl max-w-7xl">
                <Link
                    to="/"
                    className="flex items-center flex-1 gap-1 font-semibold"
                >
                    <CodeIcon strokeWidth={3} /> <span>DALL-E</span>
                </Link>
                <Link
                    to="/post"
                    className="px-3 py-2 text-sm font-medium text-white uppercase bg-black rounded-md"
                >
                    Create
                </Link>
            </div>
        </header>
    )
}