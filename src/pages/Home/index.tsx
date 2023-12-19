import { useCallback, useState } from 'react'
import { api } from '../../lib/axios'
import { SearchForm } from '../../components/SearchForm'
import { Chart } from '../../components/Chart'
import { Users } from '../../components/Users'
import { FollowerCard } from '../../components/FollowerCard'
import { Header } from '../../components/Header'

export interface IUser {
    id: number,
    login: string,
    avatar_url: string,
    name: string,
    bio: string | null
}

export interface IAllRepos {
    name: string
}

export function Home() {
    const [users, setUsers] = useState<IUser[]>([])
    const [allRepos, setAllRepos] = useState<IAllRepos[]>([])
    const [test, setTest] = useState<any>([])

    const getFollowers = useCallback(async (userName: string) => {
        try {
            const response = await api.get(`/users/${userName}/followers`)
            const data = await response.data
            const randomFollowers = data.map((m: any) => m.login).sort(() => Math.random() - 0.5).slice(0, 7)

            if (users.length) {
                setUsers([])
            }

            for (let follower of randomFollowers) {
                let response = await api.get(`/users/${follower}`)
                let userData = await response.data

                setUsers(prevUsers => [
                    ...prevUsers,
                    {
                        id: userData.id,
                        login: userData.login,
                        avatar_url: userData.avatar_url,
                        name: userData.name,
                        bio: userData.bio
                    }
                ])
            }

            await getAllRepos(userName)
            console.log(allRepos)

            let countLanguage: any = {}

            for (let repo of allRepos) {
                let res = await api.get(`/repos/${userName}/${repo.name}/languages`)
                let languages = res.data

                for (let language in languages) {
                    if (countLanguage[language]) {
                        countLanguage[language] += languages[language]
                    } else {
                        countLanguage[language] = languages[language]
                    }
                }
            }

            let arrayLanguages = Object.keys(countLanguage).map(language => ({
                language: language,
                total: countLanguage[language]
            }))

            if (arrayLanguages.length > 0) {
                setTest(arrayLanguages)
            }

            console.log(arrayLanguages);
        } finally {
            console.log('finally')
        }
    }, [users, allRepos])

    const getAllRepos = async (userName: string) => {
        const repos: IAllRepos[] = []

        const getReposPage = async (page: number) => {
            const response = await api.get(`/users/${userName}/repos?page=${page}`)
            const reposPage = response.data.map((repo: any) => ({ name: repo.name }))
            repos.push(...reposPage)

            if (repos.length === 30) {
                await getReposPage(page + 1)
            }
        };

        await getReposPage(1)
        setAllRepos(repos)
    }

    return (
        <div className='bg-slate-900 h-screen'>
            <Header />
            <main className='px-4 space-y-6'>
                <SearchForm getFollowers={getFollowers} />
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3'>
                        <Chart techs={test} />
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