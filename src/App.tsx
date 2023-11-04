import { useEffect, useState } from "react"
import { Chart } from "./components/Chart"

export function App() {
  interface IRepos {
    name: string,
  }

  interface ILanguages {
    tech: string,
  }

  const [username, setUsername] = useState('')
  const [languageCollection, setLanguageCollection] = useState<ILanguages[]>([])
  const [finalLanguages, setFinalLanguages] = useState<string[]>([])

  useEffect(() => {
    const allLanguages = languageCollection.reduce<string[]>((result, obj) => {
      const keys = Object.keys(obj);
      return result.concat(keys);
    }, []);

    setFinalLanguages(allLanguages.filter((valor, indice, array) => array.indexOf(valor) === indice))
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
      <Chart name={finalLanguages} />
    </>
  )
}