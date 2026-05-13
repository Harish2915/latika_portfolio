// src/components/Skills.jsx

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs
} from "react-icons/fa";

function Skills() {

  const skills = [
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    }
  ];

  return (
    <section id="skills">
      <div className="container">

        <h1 className="title">
          Skills
        </h1>

        <div className="row">

          {skills.map((skill, index) => (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>

              <div
                className="glass skill-card"
                data-aos="fade-up"
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h4>{skill.name}</h4>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;