const Card = ({ name, image, desc, demo_link, code_link }) => (
  <div className="tc pa3 ma2 bw5 br4 shadow-5 dib">
    <img src={image} alt="" />
    <h3>{name}</h3>
    <h5>{desc}</h5>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={demo_link}
      style={{ textDecoration: "none", padding: "10px" }}
    >
      demo
    </a>
    <a
      href={code_link}
      target="_blank"
      rel="noopener noreferrer"
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
