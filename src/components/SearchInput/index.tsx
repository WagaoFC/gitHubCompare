import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

interface FollowerInfo {
    avatar_url: string,
    name: string,
    bio: string | null
}

export function SearchInput() {
    const [userName, setUserName] = useState<string>('')
    const [followers, setFollowers] = useState<string[]>([])

    useEffect(() => {
        fetchData()        
    }, [followers])

    async function fetchData() {
        if (followers.length > 0) {
          await getProfile(followers)
        }
    }
    
    function handleChange(e: any) {
        setUserName(e)
    }

    async function sendUsername(e: any) {
        e.preventDefault()
        await getFollowers()
    }

    async function getFollowers() {
        const response = await fetch(`https://api.github.com/users/${userName}/followers`)
        const data = await response.json()
        const followers = data.map((m: any) => m.login).sort(() => Math.random() - 0.5).slice(0, 5)

        setFollowers(followers)
    }

    async function getProfile(followers: string[]) {
        let info: FollowerInfo[] = []

        for (let follower of followers) {
            let response = await fetch(`https://api.github.com/users/${follower}`)
            let { avatar_url, name, bio } = await response.json()

            info.push({ avatar_url, name, bio })
        }
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