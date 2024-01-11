import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Dictionary App</h1>

        <main>
          <Dictionary />
        </main>

        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/oriana-machado-771014130/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Oriana Machado{" "}
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/orianamachado66/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
