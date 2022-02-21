import React from 'react';
import './WorkExperience.css';
import ExperienceCard from '../../components/experienceCard/ExperienceCard';
import { workExperiences } from '../../portfolio';

export default function Education() {
   if(workExperiences.display){
    return (
      <div className="education-section" id="experience">
          <h1 className="education-heading">Experience</h1>
          <div className="education-card-container">
            {workExperiences.schools.map((school) => (
              <ExperienceCard school={school} />
            ))}
          </div>
      </div>
    );
  }
  return null;
}