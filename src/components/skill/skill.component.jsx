import "./skill.styles.css";

export default Skill = (props) => {
  const { id, src, name } = props;

  return (
    <div className="skill">
      <img src={src} alt={name} />
      <span style={{ padding: 0, margin: "5px" }}>{name}</span>
    </div>
  );
};
