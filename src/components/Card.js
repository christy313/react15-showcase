import "../index.css";

const Card = ({ name, image, desc, demoLink, codeLink }) => (
  <div className="card tc pa3 ma2 bw5 br4 shadow-5 dib">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <h5>{desc}</h5>
    <a
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      href={demoLink}
    >
      demo
    </a>
    <a
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      href={codeLink}
    >
      code
    </a>
  </div>
);

export default Card;
