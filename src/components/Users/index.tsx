import { PlusCircle } from "lucide-react";

export function Users() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-row items-center justify-center gap-2'>
                <img
                    className='rounded-full w-10'
                    src='https://avatars.githubusercontent.com/u/48607604?v=4'
                />
                <section className='flex flex-col'>
                <span className='font-medium'>
                        WagaoFC
                    </span>
                    <span className='font-light text-sm'>
                        Front-end Developer
                    </span>
                </section>
            </div>
            <button className='border-background rounded-lg px-3 py-2 shadow-lg'>
                <PlusCircle />
            </button>
        </div>
    )
}