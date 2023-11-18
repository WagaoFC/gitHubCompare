import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchFormProps {
    getFollowers: (userName: string) => Promise<void>
}

export function SearchForm({ getFollowers }: SearchFormProps) {
    const [userName, setUserName] = useState('')

    function handleChange(e: any) {
        setUserName(e)
    }

    async function sendUsername(e: any) {
        e.preventDefault()
        await getFollowers(userName)
    }

    return (
        <div className='flex gap-2 w-full items-center justify-center'>
            <form className='flex gap-2' onSubmit={sendUsername}>
                <div className='flex w-full max-w-xs items-center gap-2 rounded-lg border-2 border-cyan-500/20 hover:border-cyan-500 px-3 py-2 shadow-lg shadow-cyan-500/20'>
                    <Search className='text-cyan-500' size={20} />
                    <input
                        className='flex-1 border-0 bg-transparent p-0 text-cyan-500 placeholder-cyan-500 focus:outline-none'
                        placeholder='username'
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
                <button className='flex items-center gap-2 text-cyan-500 rounded-lg border-2 border-cyan-500/20 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none px-3 py-2 shadow-lg shadow-cyan-500/20'>
                    Submit
                </button>
            </form>
        </div>
    )
}