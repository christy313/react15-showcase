import projects from "./projects";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default CardList;
