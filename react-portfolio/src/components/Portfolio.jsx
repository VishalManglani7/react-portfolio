import Project from "./Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "Fitness App",
      description: "HTML/JS/CSS",
      link: "https://fitnessap-e27a7406884a.herokuapp.com/",
      repo: "https://github.com/VishalManglani7/FitnessApp",
      image: "cat",
    },
    {
      name: "Front End Movie App",
      description: "Front End",
      link: "https://heroku.com/",
      repo: "https://vishalmanglani7.github.io/project-1-front-end/",
      image: "cat",
    },
    {
      name: "Weather App",
      description: "JS",
      link: "https://vishalmanglani7.github.io/weather-app/",
      repo: "https://github.com/VishalManglani7/weather-app",
      image: "cat",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;