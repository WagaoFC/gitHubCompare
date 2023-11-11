import { PlusCircle } from 'lucide-react'

export function Users() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-row items-center justify-center gap-2'>
                <img
                    className='rounded-full w-10'
                    src='https://avatars.githubusercontent.com/u/48607604?v=4'
                />
                <section className='flex flex-col text-cyan-500'>
                    <span className='font-medium'>
                        WagaoFC
                    </span>
                    <span className='font-normal text-sm text-cyan-500/50'>
                        Front-end Developer
                    </span>
                </section>
            </div>
            <button className='rounded-lg px-3 py-2 text-cyan-500 hover:rotate-90 duration-300'>
                <PlusCircle />
            </button>
        </div>
    )
}