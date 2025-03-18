import React, { useState } from 'react';
import '../Projects.css';

function MachineLearning() {
  const GitHubLink = "https://github.com/aymane-03-cs";

  // Machine Learning Projects  
  const ProjectsList = [
    {
      title: 'Binary Classification Neural Network',
      description: "Implemented a custom neural network from scratch for binary classification, including architecture design, training, and model evaluation (accuracy, precision, recall) with different architecture parameters (Hidden layers, Number of N-N per layer).",
      tools: ["Python", "NumPy", "scikit-learn"],
      link: GitHubLink
    }, 
    {
      title: "Convolutional Neural Network for Image Classification",
      description: "Developed a CNN using PyTorch for classifying CIFAR-10 images. The project includes data preprocessing, training/testing loops, and real-time inference. The architecture features convolutional layers, dropout, and fully connected layers for optimal accuracy.",
      tools: ["Python", "PyTorch", "Torchvision", "Matplotlib"],
      link: GitHubLink
    },
    {
      title: "Image processing: Superpixel Segmentation Benchmark",
      description: "Conducted research on a novel differentiable superpixel segmentation method using neural networks. Evaluated the proposed SNN-based approach against existing algorithms across various metrics using BSDS as a test dataset, including ASA and GR.",
      tools: ["Python", "PyTorch", "Torchvision", "Matplotlib"],
      link: GitHubLink
    }
    
  ];

  // State pour gérer l'affichage des projets
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h3 className="project-category">Machine Learning Projects</h3>
      <div className="category-context">
        I completed these side projects during my self-learning journey.
      </div>
      <div className="projects-container">
        {(showMore ? ProjectsList : ProjectsList.slice(0, 3)).map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tools">
              {project.tools.map((tool, i) => (
                <li key={i} className="project-tool">{tool}</li>
              ))}
            </ul>
            <a href={project.link} className="project-link code" target="_blank" rel="noopener noreferrer">
              View More
            </a>
          </div>
        ))}
      </div>
      {ProjectsList.length > 3 && (
        <button className="see-more-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? "See Less" : "See More"}
        </button>
      )}
    </>
  );
}

export default MachineLearning;
