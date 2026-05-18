// src/components/Education.jsx

import "../styles/Education.css";

function Education() {

    return (

        <section
            className="education-section"
            id="education"
        >

            <div className="container">

                {/* TITLE */}

                <div
                    className="timeline-heading"
                    data-aos="fade-up"
                >

                    <h2 className="title">
                        Academic Journey
                    </h2>

                    <p className="timeline-subtext">
                        Building a strong foundation
                        through quality education
                    </p>

                </div>

                {/* TIMELINE */}

                <div className="timeline-wrapper">

                    {/* COLLEGE */}

                    <div
                        className="timeline-item"
                        data-aos="fade-up"
                    >

                        <div className="timeline-card education-card glass">

                            {/* YEAR */}

                            <div className="education-top">

                                <span className="timeline-badge">
                                    2022 - 2026
                                </span>

                            </div>

                            {/* CONTENT */}

                            <h3>
                                B.Tech Artificial Intelligence
                                and Data Science
                            </h3>

                            <h4>
                                Erode Sengunthar Engineering
                                College
                            </h4>

                            <p>
                                Erode, Tamil Nadu
                                <br />
                                CGPA : 8.2
                            </p>

                        </div>

                    </div>

                    {/* SCHOOL */}

                    <div
                        className="timeline-item"
                        data-aos="fade-up"
                    >

                        <div className="timeline-card education-card glass">

    {/* HSC */}

    <div className="education-box">

        <div className="education-top">

            <span className="timeline-badge">
                2021 - 2022
            </span>

        </div>

        <h3>
            HSC
        </h3>

        <h4>
            Vijayalakshmi Matriculation
            Higher Secondary School
        </h4>

        <p>
            Erode, Tamil Nadu
            <br />
            Percentage : 81.66%
        </p>

    </div>

    {/* DIVIDER */}

    <div className="education-divider"></div>

    {/* SSLC */}

    <div className="education-box">

        <div className="education-top">

            <span className="timeline-badge">
                2019 - 2020
            </span>

        </div>

        <h3>
            SSLC
        </h3>

        <h4>
            Vijayalakshmi Matriculation
            Higher Secondary School
        </h4>

        <p>
            Erode, Tamil Nadu
            <br />
            Percentage : 72.2%
        </p>

    </div>

</div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Education;