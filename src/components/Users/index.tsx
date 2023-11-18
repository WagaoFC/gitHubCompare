import { PlusCircle } from 'lucide-react'
import { IUser } from '../../pages/Home'

interface UserProps {
    user: IUser
}

export function Users({ user }: UserProps) {
    return (
        <div className='flex items-center justify-between animate-fade-left'>
            <div className='flex flex-row items-center justify-center gap-2'>
                <img
                    className='rounded-full w-10'
                    src={user.avatar_url}
                />
                <section className='flex flex-col text-cyan-500'>
                    <span className='font-medium overflow-hidden line-clamp-1'>
                        {user.name}
                    </span>
                    <span className='font-normal text-sm text-cyan-500/50 overflow-hidden line-clamp-1'>
                        {user.bio}
                    </span>
                </section>
            </div>
            <button className='rounded-lg px-3 py-2 text-cyan-500 hover:rotate-90 duration-300 focus:border-cyan-500 focus:outline-none'>
                <PlusCircle />
            </button>
        </div>
    )
}