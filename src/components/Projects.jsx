import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Safari Travels",
      category: "Web App",
      description:
        "A responsive portfolio website built with React, Tailwind CSS, and Vite to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveLink: "https://safari-travels.vercel.app/",
      githubLink: "https://github.com/enoveri/SafariTravels",
      imageUrl:
        "https://i.pinimg.com/736x/48/3a/25/483a2574daba5cc1e9d300cf681c0ee4.jpg",
    },
    {
      title: "Waste Classification Deep Learning Model",
      category: "Machine Learning",
      description:
        "A machine learning model that classifies waste into different categories based on the image of the waste.",
      technologies: [
        "Python",
        "Pytorch",
        "Pandas",
        "numpy",
        "matplotlib",
        "seaborn",
        "scikit-learn",
        "scipy",
      ],
      liveLink: "#",
      githubLink:
        "https://github.com/enoveri/Waste-Classification-Deep-Learning-Model",
      imageUrl:
        "https://i.pinimg.com/736x/11/b8/46/11b8468e6bd30ae5d064d7ca279db698.jpg",
    },
    {
      title: "Recipe Traffic Prediction Model",
      category: "Data Science",
      description:
        "A machine learning model that predicts the traffic of a recipe based on the ingredients and the reviews.",
      technologies: ["Python", "Pandas", "sklearn", "numpy"],
      liveLink: "#",
      githubLink:
        "https://www.datacamp.com/datalab/w/ec4a19e3-ed70-4170-9281-b32f239dca59/edit#a3d4387f-fa24-4a80-906b-4cca195b6736",
      imageUrl:
        "https://i.pinimg.com/474x/14/0c/8f/140c8fa77d2334faddd9c6d6332192c4.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--primary)]">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
