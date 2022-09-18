import "./index.css";
import CardList from "./CardList";

const App = () => (
  <div className="tc ma5">
    <img className="cover-image" src="/images/cover.jpg" alt="" />
    <h1 className="">
      This is the showcase of react projects. It's a good way to learn React
      with doing plenty projects.
    </h1>
    <CardList />
  </div>
);

export default App;
