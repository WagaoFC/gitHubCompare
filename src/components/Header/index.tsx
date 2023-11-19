import { Sun, Github } from "lucide-react";

export function Header() {
    return (
        <header className='flex items-center justify-end px-4 py-2 gap-4 text-cyan-500/20 animate-fade-up'>
            <Sun size={20} className='hover:cursor-not-allowed' />
            <a
                href='https://github.com/WagaoFC/gitHubCompare'
                target='_blank'
                className='p-1 border border-transparent hover:bg-cyan-500/20 rounded hover:text-cyan-500 hover:duration-500 focus:border-cyan-500 focus:outline-none'
            >
                <Github size={20} />
            </a>
        </header>
    )
}