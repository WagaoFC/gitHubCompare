import { useCallback, useState } from 'react'
import { api } from '../../lib/axios'
import { SearchForm } from '../../components/SearchForm'
import { Chart } from '../../components/Chart'
import { Users } from '../../components/Users'
import { FollowerCard } from '../../components/FollowerCard'
import { Header } from '../../components/Header'

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
            const followers = data.map((m: any) => m.login).sort(() => Math.random() - 0.5).slice(0, 6)

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
            <Header />
            <main className='px-4 space-y-6'>
                <SearchForm getFollowers={getFollowers} />
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3'>
                        <Chart />
                    </div>
                    <div className='p-4 space-y-6 border-l border-cyan-500/20 shadow-sm animate-fade-up'>
                        <span className='text-cyan-500'>
                            Add some followers
                        </span>
                        {
                            users.length > 0 ?
                                users.map((user) => (
                                    <Users key={user.id} user={user} />
                                ))
                                :
                                <FollowerCard />
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}