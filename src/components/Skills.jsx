import React from "react";
import { FaCode, FaDatabase, FaCogs, FaLaptopCode } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import { BiData, BiAnalyse } from "react-icons/bi";
import { GiMechanicalArm } from "react-icons/gi";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-[var(--secondary)] h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProfessionalSkillCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card p-6 relative overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="mb-4 h-40 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Error loading image: ${imageUrl}`);
              e.target.src = 'https://via.placeholder.com/300x200?text=Skill+Image';
            }}
          />
        </div>
        <h3 className="text-xl font-bold mb-2 text-[var(--accent)]">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon }) => {
  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-xl font-bold ml-2 text-[var(--accent)]">{title}</h4>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            skill={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const webDevSkills = [
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "React & Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 92 },
    { name: "Vite", percentage: 80 },
    { name: "WordPress", percentage: 75 },
  ];

  const dataSkills = [
    { name: "Machine Learning", percentage: 80 },
    { name: "Data Analysis", percentage: 85 },
    { name: "Python", percentage: 82 },
    { name: "Data Visualization", percentage: 78 },
  ];

  const engineeringSkills = [
    { name: "SolidWorks", percentage: 88 },
    { name: "AutoCAD", percentage: 85 },
    { name: "3D Modeling", percentage: 90 },
    { name: "Engineering Design", percentage: 82 },
  ];

  const professionalSkills = [
    {
      title: "Public Speaking",
      description: "Experienced in delivering clear and engaging presentations to diverse audiences.",
      imageUrl: "https://i.pinimg.com/736x/7f/46/be/7f46bed5eb700f5e15ee4c62f9ffe160.jpg"
    },
    {
      title: "Problem Solving",
      description: "Analytical thinker with a knack for breaking down complex problems.",
      imageUrl: "https://i.pinimg.com/736x/3f/1e/77/3f1e771cec6f1f5a6b6f8dbe9c7abfb6.jpg"
    },
    {
      title: "Fast Learner",
      description: "Quickly adapt to new technologies and methodologies, continuously expanding my skill set.",
      imageUrl: "https://i.pinimg.com/736x/d7/71/96/d7719677d51632b69df72e11f10c225c.jpg"
    },
    {
      title: "Team Collaboration",
      description: "Thrive in collaborative environments, effectively contributing to team success.",
      imageUrl: "https://i.pinimg.com/736x/b5/c9/fa/b5c9fa7fec919e0068b1f71a41fef22f.jpg"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--dark-bg)]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
              Technical Skills
            </h3>
            <SkillCategory
              title="Web Development"
              skills={webDevSkills}
              icon={<FaLaptopCode className="text-[var(--accent)] text-xl" />}
            />
            <SkillCategory
              title="Data Science"
              skills={dataSkills}
              icon={<BiData className="text-[var(--accent)] text-xl" />}
            />
            <SkillCategory
              title="Engineering"
              skills={engineeringSkills}
              icon={
                <GiMechanicalArm className="text-[var(--accent)] text-xl" />
              }
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <ProfessionalSkillCard 
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  imageUrl={skill.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
