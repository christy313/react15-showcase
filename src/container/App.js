import { FaReact } from "react-icons/fa";
import "../index.css";
import CardList from "../components/CardList";

const App = () => (
  <main className="tc">
    <div className="cover">
      <FaReact className="react-icon" />
      <div className="intro">
        <h1>React projects</h1>
        <p>Projects are the best way to dive into the skills</p>
      </div>
    </div>
    <CardList />
  </main>
);

export default App;
