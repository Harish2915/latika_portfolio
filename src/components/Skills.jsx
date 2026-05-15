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

import { FaFlutter } from "react-icons/fa6";
import { TbAutomation } from "react-icons/tb";
import { RiAiGenerate2 } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

import {
  SiFastapi,
  SiMysql,
  SiPostman,
  SiGraphql,
  SiSqlalchemy,
  SiSelenium,
  SiPycharm,
  SiXcode,
  SiAndroidstudio,
} from "react-icons/si";


import {
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineCloud,
  HiOutlineMagnifyingGlass,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
} from "react-icons/hi2";

import {
  IoGitPullRequestSharp
} from "react-icons/io5";

function Skills() {

  const skillGroups = [

    {
      title: "Programming Languages",
      icon: <HiOutlineGlobeAlt />,
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <FaJs />, name: "JavaScript" },
      ],
    },

    {
      title: "Mobile Development",
      icon: <FaReact />,
      skills: [
        { icon: <FaReact />, name: "React Native" },
        { icon: <FaFlutter />, name: "Flutter" },
        { icon: <HiOutlineCodeBracket />, name: "Dart" },
      ],
    },

    {
      title: "Backend Technologies",
      icon: <HiOutlineServerStack />,
      skills: [
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <HiOutlineServerStack />, name: "REST API" },
      ],
    },

    {
      title: "Automation",
      icon: <TbAutomation />,
      skills: [
        { icon: <HiOutlineMagnifyingGlass />, name: "BeautifulSoup" },
        { icon: <HiOutlineCloud />, name: "Apify API" },
        { icon: <IoGitPullRequestSharp />, name: "Requests" },
        { icon: <SiSelenium />, name: "Selenium" },
      ],
    },

    {
      title: "Generative AI",
      icon: <RiAiGenerate2 />,
      skills: [
        { icon: <HiOutlineCpuChip />, name: "LLMs" },
        { icon: <HiOutlineCircleStack />, name: "RAG" },
      ],
    },

    {
      title: "Tools",
      icon: <HiOutlineWrenchScrewdriver />,
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <VscVscode />, name: "VS Code" },
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiXcode />, name: "Xcode" },
        { icon: <SiPycharm />, name: "PyCharm" },
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