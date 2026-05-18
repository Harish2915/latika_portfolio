// src/components/Experience.jsx

import "../styles/Experience.css";

function Experience() {

    return (

        <section
            className="experience-section"
            id="experience"
        >

            <div className="container">

                {/* TITLE */}

                <div
                    className="timeline-heading"
                    data-aos="fade-up"
                >

                    <h2 className="title">
                        Experience Timeline
                    </h2>

                    <p>
                        My professional journey so far
                    </p>

                </div>

                {/* TIMELINE */}

                <div className="timeline-wrapper">

                    <div
                        className="timeline-item"
                        data-aos="fade-up"
                    >

                        <div className="timeline-card glass">

                            {/* TOP */}

                            <div className="timeline-top">

                                <div>

                                    <h3>
                                        Mobile Application Developer
                                    </h3>

                                    <h4>
                                        Soft Suave Technologies
                                    </h4>

                                </div>

                                <span className="timeline-badge">
                                    8 Months
                                </span>

                            </div>

                            {/* DESCRIPTION */}

                            <p className="timeline-text">

                                Worked on full stack mobile
                                application development using
                                Flutter, React Native, and
                                FastAPI backend services for
                                scalable real-world
                                applications.

                            </p>

                            {/* CONTRIBUTIONS */}

                            <h5 className="timeline-subtitle">
                                Key Contributions
                            </h5>

                            <ul className="timeline-points">

                                <li>
                                    Developed responsive mobile
                                    interfaces using Flutter and
                                    React Native.
                                </li>

                                <li>
                                    Integrated REST APIs and
                                    FastAPI backend services.
                                </li>

                                <li>
                                    Improved application
                                    performance and debugging
                                    stability issues.
                                </li>

                                <li>
                                    Collaborated with backend
                                    teams to enhance product
                                    quality.
                                </li>

                            </ul>

                            {/* SKILLS */}

                            <div className="timeline-skills">

                                <span>Flutter</span>

                                <span>
                                    React Native
                                </span>

                                <span>FastAPI</span>

                                <span>REST API</span>

                                <span>Python</span>

                                <span>MySQL</span>

                            </div>

                            {/* BOTTOM TEXT */}

                            <p className="timeline-footer mt-4">

                                Gained hands-on experience in
                                building scalable mobile
                                applications and backend API
                                integration.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Experience;