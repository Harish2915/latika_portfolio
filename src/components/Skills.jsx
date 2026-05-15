// src/components/Skills.jsx

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiPostman,
  SiGraphql,
  SiSqlalchemy,
} from "react-icons/si";


import {
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

function Skills() {

  const skillGroups = [

    {
      title: "Languages",
      icon: <HiOutlineGlobeAlt />,
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaDatabase />, name: "SQL" },
      ],
    },

    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },

    {
      title: "Backend",
      icon: <HiOutlineServerStack />,
      skills: [
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <HiOutlineCodeBracket />, name: "REST APIs" },
        { icon: <SiGraphql />, name: "GraphQL" },
        { icon: <SiSqlalchemy />, name: "SQLAlchemy" },
      ],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
      ],
    },

    {
      title: "Tools",
      icon: <HiOutlineWrenchScrewdriver />,
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiMysql />, name: "Workbench" },
      ],
    },

  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <h1 className="skills-title">
            Skills & <span>Tech</span>
          </h1>

          <p className="skills-subtitle">
            Technologies I work with to build modern applications
          </p>

        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">

          {skillGroups.map((group, index) => (

            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              key={index}
            >

              <div
                className="skill-group-card"
                data-aos="fade-up"
              >

                {/* Header */}
                <div className="skill-group-header">

                  <div className="skill-group-icon">
                    {group.icon}
                  </div>

                  <h3>
                    {group.title}
                  </h3>

                </div>

                {/* Skill Tags */}
                <div className="skill-tags">

                  {group.skills.map((skill, i) => (

                    <div
                      className="skill-tag"
                      key={i}
                    >

                      <span className="tag-icon">
                        {skill.icon}
                      </span>

                      {skill.name}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;