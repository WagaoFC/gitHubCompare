import { Github, Mic, Search, Sun } from 'lucide-react'
import { Chart } from './components/Chart'
import { Users } from './components/Users'

export function App() {
  return (
    <div className='bg-background h-screen'>
      <header className='flex items-center justify-end px-4 py-2 gap-4 text-primary'>
        <Sun />
        <Github />
      </header>
      <main className='px-4 space-y-6'>
        <div className='flex gap-2 w-full items-center justify-center'>
          <div className='flex w-full max-w-xs items-center gap-2 rounded-lg border border-primary px-3 py-2 shadow-sm'>
            <Search className='h-5 w-5 text-primary' />
            <input
              className='flex-1 border-0 bg-transparent p-0 text-primary placeholder-primary focus:outline-none'
              placeholder='username'
            />
          </div>
          <button className='bg-transparent text-primary border border-primary rounded-lg px-3 py-2 shadow-sm'>
            <Mic />
          </button>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-2'>
            <Chart />
          </div>
          <div className='p-4 space-y-6 bg-primary rounded-lg shadow-sm'>
            <Users />
            <Users />
            <Users />
            <Users />
          </div>
        </div>
      </main>
    </div>
  )
}
