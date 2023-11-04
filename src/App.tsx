import { useEffect, useState } from "react";
import { Chart } from "./components/Chart";

export function App() {
  interface IRepos {
    name: string;
  }

  interface ILanguages {
    [key: string]: number;
  }

  const [username, setUsername] = useState("");
  const [languageCollection, setLanguageCollection] = useState<ILanguages[]>([]);
  const [finalLanguages, setFinalLanguages] = useState<string[]>([]);
  const [finalBytes, setFinalBytes] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    listTechs();
    listQuantity();
  }, [languageCollection]);

  function listTechs() {
    const allLanguages = languageCollection.reduce<string[]>((result, obj) => {
      const keys = Object.keys(obj);
      return result.concat(keys);
    }, []);

    setFinalLanguages(allLanguages.filter((value, index, array) => array.indexOf(value) === index));
  }

  function listQuantity() {
    const sumProperties: { [key: string]: number } = {};

    for (const obj of languageCollection) {
      for (const properties in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, properties)) {
          sumProperties[properties] = (sumProperties[properties] || 0) + obj[properties]
        }
      }
    }

    const bytes = Object.values(sumProperties)
    setFinalBytes(bytes)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const repos = await res.json();
      const nameRepos = repos.map((m: IRepos) => m.name);

      for (const repo of nameRepos) {
        const res = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`);
        const languages = await res.json();

        setLanguageCollection(previous => [...previous, languages]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      <Chart username={username} nameTech={finalLanguages} totalBytes={finalBytes} />
    </>
  );
}
