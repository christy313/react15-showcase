import "./index.css";
import cover from "./images/cover.jpg";
import CardList from "./components/CardList";

const App = () => (
  <div className="tc">
    <div className="cover-image">
      <img src={cover} alt="cover" />
      <div className="intro">
        <h1>React projects</h1>
        <p>Projects are the best way to dive into the skills</p>
      </div>
    </div>
    <CardList />
  </div>
);

export default App;
