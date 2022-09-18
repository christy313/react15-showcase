import projects from "./projects";
import Card from "./Card";

const CardList = () => (
  <>
    {projects.map((project) => (
      <Card key={project.id} {...project} />
    ))}
  </>
);

export default CardList;
