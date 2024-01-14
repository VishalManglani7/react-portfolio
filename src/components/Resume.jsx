import React from 'react';

function Resume() {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
  ];


  return (
    <div className="ResumeClass" id="Resume">
      <h2 className="title">
        Resume
      </h2>
      <div className="resume-content">
        <p>Download my Resume - Resume to be added soon: <a href="../assets/projects/resume.html" download>Resume.html</a></p>
        <h3>Coding Proficiencies:</h3>
        <ul className="proficiency-list">
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume