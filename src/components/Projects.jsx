// src/components/Projects.jsx

function Projects() {

  const projects = [
    "Portfolio Website",
    "E-Commerce UI",
    "Weather App",
    "Task Manager"
  ];

  return (
    <section id="projects">
      <div className="container">

        <h1 className="title">
          Projects
        </h1>

        <div className="row">

          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>

              <div
                className="glass project-card"
                data-aos="zoom-in"
              >

                <h3>{project}</h3>

                <p className="mt-3">
                  Modern responsive project with smooth
                  UI animations and clean design.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;