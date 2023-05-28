import React, { useState } from "react";
import  WorkExperienceItem from "./WorkExperienceItem";

 export function Experience() {
  const [workExperience, setWorkExperience] = useState([
    {
      title: "Senior Cabin Crew",
      name: "Ukraine International Airlines",
      description:
        "Provide safety and comfort of guests on board, ensure that all crew members are providing the highest standard of safety and service on board, responsible for the procurement and management of air food and cabin supplies.",
      link: "https://www.flyuia.com/ua/en/home",
    },
    {
      title: "Patient service department manager",
      name: "American Medical Centers",
      description:
        "Provide customers the information of the medical services cost, billing service, scheduling appointments.",
      link: "https://amcenters.com/",
    },
    {
      title: "Reservation manager",
      name: "Hotel Lybid Kyiv",
      description:
        "Providing travel information, availabilities of hotel accomodations and prices, handling customer complaints or concerns, making reservations and sending out confirmation notices.",
      link: "https://lybid-hotel.phnr.com/",
    },
  ]);

  return (
    <div className="work">
      <h2 className="title">Work experience</h2>
      <div className="container">
        <div className="work-content">
        {workExperience.map((item, index) => (
          <WorkExperienceItem
            key={index}
            title={item.title}
            name={item.name}
            description={item.description}
            link={item.link}
          />
        ))}
        </div>
      </div>
    </div>
  );
}


