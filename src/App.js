import "./index.css";
import CardList from "./CardList";

const App = () => (
  <main className="tc">
    <div className="cover-image">
      <img
        src="https://christy313.github.io/react15-showcase/images/react-logo.jpg"
        alt="cover"
      />
      <div className="intro">
        <h1>React projects</h1>
        <p>Projects are the best way to dive into the skills</p>
      </div>
    </div>
    <CardList />
  </main>
);

export default App;
