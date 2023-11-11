import { Search } from 'lucide-react'

export function SearchInput() {
    return (
        <div className='flex gap-2 w-full items-center justify-center'>
            <div className='flex w-full max-w-xs items-center gap-2 rounded-lg border-2 border-cyan-500/20 hover:border-cyan-500 px-3 py-2 shadow-lg shadow-cyan-500/20'>
                <Search className='h-5 w-5 text-cyan-500' />
                <input
                    className='flex-1 border-0 bg-transparent p-0 text-cyan-500 placeholder-cyan-500 focus:outline-none'
                    placeholder='username'
                />
          </div>
        </div>
    )
}