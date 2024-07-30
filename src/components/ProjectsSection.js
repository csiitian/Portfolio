import React from 'react';

const projects = [
  {
    title: 'Meetup App',
    description: 'Chat Application with functionality to add friends and chat with people of the same interest.',
    link: 'https://github.com/CS-IITIAN/MeetUp-Backend',
  },
  {
    title: 'Coding App',
    description: 'Highlighted Code for 100+ Problems in C, Java and Python.',
    link: 'https://github.com/CS-IITIAN/CodingApp-BackEnd',
  },
  {
    title: 'Relax Launcher',
    description: 'Built Android Home Screen Launcher App based on minimalist design to reduce screen time usage.',
    link: 'https://github.com/csiitian/RelaxLauncher',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Online Tic Tac Toe Game with multiplayer feature.',
    link: 'https://github.com/csiitian/tic-tac-toe',
  },
  {
    title: 'Live Code Collaboration',
    description: 'Notepad where many users can see live data and update.',
    link: 'https://github.com/csiitian/live-code-collaboration',
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="py-40 bg-gray-900 h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">Source Code</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
