const Card = ({ name, image, desc, demoLink, codeLink }) => (
  <div className="tc pa3 ma2 bw5 br4 shadow-5 dib">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <h5>{desc}</h5>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={demoLink}
      style={{ textDecoration: "none", padding: "10px" }}
    >
      demo
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={codeLink}
      style={{
        textDecoration: "none",
        padding: "10px",
      }}
    >
      code
    </a>
  </div>
);

export default Card;
