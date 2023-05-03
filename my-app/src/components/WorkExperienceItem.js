export default function WorkExperienceItem({ title, description, name, link }) {

  return (
    <div className="work-content">
      <p><span className="work-definition">Job title: </span>{title}<br/>
      <span className="work-definition">Name of employer: </span>{name}<br/>
      <span className="work-definition">Project/Role description: </span>{description}<br/>
      <a href={link}>{name}</a>
      </p>
    </div>
  );
}


