import projects from "../projects";
import Card from "./Card";
import "../index.css";

const CardList = () => (
  <div className="card-list">
    {projects.map((project) => (
      <Card key={project.id} {...project} />
    ))}
  </div>
);

export default CardList;
