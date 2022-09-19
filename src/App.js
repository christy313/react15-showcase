import "./index.css";
import CardList from "./CardList";

const App = () => (
  <div className="tc">
    <div className="cover-image">
      <img src="./images/02-tours.gif" alt="cover" />
      <div className="intro">
        <h1>React projects</h1>
        <p>Projects are the best way to dive into the skills</p>
      </div>
    </div>
    <CardList />
  </div>
);

export default App;
