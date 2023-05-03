export default function WorkExperienceItem({ title, description, name, link }) {

  return (
    <div className="work-content">
      <h3>{title}</h3>
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={link}>{name}</a>
    </div>
  );
}


