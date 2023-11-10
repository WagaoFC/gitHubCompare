import { Mic, Search } from 'lucide-react'
import { Chart } from './components/Chart'
import { Users } from './components/Users'

export function App() {
  return (
    <div className='bg-background h-screen'>
      <header className='bg-current-line p-4'>
        header
      </header>
      <main className='p-4 space-y-6'>
        <div className='flex gap-2 w-full items-center justify-center'>
          <div className='flex w-full max-w-xs items-center gap-2 rounded-lg border border-current-line px-3 py-2 shadow-sm'>
            <Search className='h-5 w-5 text-current-line' />
            <input
              className='flex-1 border-0 bg-transparent p-0 text-current-line placeholder-current-line focus:outline-none'
              placeholder='username'
            />
          </div>
          <button className='bg-transparent text-current-line border border-current-line rounded-lg px-3 py-2 shadow-sm'>
            <Mic />
          </button>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-2'>
            <Chart />
          </div>
          <div className='p-4 space-y-6 bg-current-line rounded-lg'>
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
