import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Springboot', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Kotlin', level: 70 },
];

const SkillsSection = () => {
  return (
    <div id="skills" className="py-40 bg-gray-200 h-screen">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <CircularProgressbar value={skill.level} text={`${skill.level}%`} className="w-24 h-24 mb-4" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
