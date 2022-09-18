import "../index.css";
import CardList from "../components/CardList";

const App = () => (
  <div className="tc">
    <div className="cover-image">
      <img src="/images/cover.jpg" alt="cover" />
      <div className="intro">
        <h1>React projects</h1>
        <p>Projects are the best way to dive into the skills</p>
      </div>
    </div>
    <CardList />
  </div>
);

export default App;
