import { Chart } from "./components/Chart";

export function App() {
  return (
    <div className="bg-slate-700">
      <form>
        <input
          type="text"
        />
        <button type="submit">
          Search
        </button>
      </form>
      <Chart />
    </div>
  );
}
