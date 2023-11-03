import { useEffect, useState } from "react"

export function App() {
  interface IRepos {
    name: string,
  }

  interface ILanguages {
    tech: string,
  }

  const [username, setUsername] = useState('')
  const [languageCollection, setLanguageCollection] = useState<ILanguages[]>([])

  useEffect(() => {
    console.log(languageCollection)
  }, [languageCollection])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      const repos = await res.json()
      const nameRepos = repos.map((m: IRepos) => m.name)

      for (const repo of nameRepos) {
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`)
        const languages = await res.json()
  
        setLanguageCollection(previous => [...previous, languages])
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">
          Search
        </button>
      </form>
    </>
  )
}