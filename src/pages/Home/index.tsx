import { useCallback, useState } from 'react'
import { Github, Sun } from 'lucide-react'
import { api } from '../../lib/axios'
import { SearchForm } from '../../components/SearchForm'
import { Chart } from '../../components/Chart'
import { Users } from '../../components/Users'

export interface IUser {
    id: number,
    avatar_url: string,
    name: string,
    bio: string | null
}

export function Home() {
    const [followers, setFollowers] = useState<string[]>([])
    const [users, setUsers] = useState<IUser[]>([])

    const getFollowers = useCallback(async (userName: string) => {
        try {
            const response = await api.get(`/users/${userName}/followers`)
            const data = await response.data
            const followers = data.map((m: any) => m.login).sort(() => Math.random() - 0.5).slice(0, 5)

            setFollowers(followers)

            for (let follower of followers) {
                let response = await api.get(`/users/${follower}`)
                let userData = await response.data

                setUsers(prevUsers => [
                    ...prevUsers,
                    {
                        id: userData.id,
                        avatar_url: userData.avatar_url,
                        name: userData.name,
                        bio: userData.bio
                    }
                ])
            }
        } finally {
            console.log('finally')
        }
    }, [followers])

    return (
        <div className='bg-slate-900 h-screen'>
            <header className='flex items-center justify-end px-4 py-2 gap-4 text-cyan-500'>
                <Sun size={20} />
                <Github size={20} />
            </header>
            <main className='px-4 space-y-6'>
                <SearchForm getFollowers={getFollowers} />
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3'>
                        <Chart />
                    </div>
                    <div className='p-4 space-y-6 border-l-2 border-cyan-500/20 shadow-sm'>
                        {users.map((user) => (
                            <Users key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}