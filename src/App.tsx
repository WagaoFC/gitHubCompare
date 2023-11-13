import { Github, Sun } from 'lucide-react'
import { Chart } from './components/Chart'
import { Users } from './components/Users'
import { SearchInput } from './components/SearchInput'

export function App() {
  return (
    <div className='bg-slate-900 h-screen'>
      <header className='flex items-center justify-end px-4 py-2 gap-4 text-cyan-500'>
        <Sun size={20} />
        <Github size={20} />
      </header>
      <main className='px-4 space-y-6'>
        <SearchInput />
        <div className='grid grid-cols-4 gap-2'>
          <div className='col-span-3'>
            <Chart />
          </div>
          <div className='p-4 space-y-6 border-l-2 border-cyan-500/20 shadow-sm'>
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
