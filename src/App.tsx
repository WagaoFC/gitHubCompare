import { Chart } from "./components/Chart";

export function App() {
  return (
    <div className="bg-background">
      <header className="bg-current-line p-4">
        header
      </header>
      <main className="p-4">
        <form className="flex justify-center items-center">
          <input
            type="text"
          />
          <button type="submit">
            Search
          </button>
        </form>
        <div className="max-w-4xl">
          <Chart />
        </div>
      </main>
    </div>
  );
}
