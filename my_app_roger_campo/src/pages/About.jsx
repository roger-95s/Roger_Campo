import React from 'react';
import NavBar from "../components/NavBar";
import Resume from "./Resume";

function About() {

    return (
        <>
            <div className="wrapper">
                <NavBar />
                <div className="container-fluid glass-container">
                    <div>
                        {/* Roger */}
                        <div>
                            <h2 className=" site-title">Roger Campo Cordova</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 p-about">
                                Cloud & software Engineer · Non Protfit Founder
                            </p>
                            <p className="text-md mb-4 leading-relaxed p-about">
                                I have built a distinctive and purpose-driven career path from working as a professional chef to founding a nonprofit in STEM education, and now transitioning fully into technology.
                                Each chapter has strengthened my adaptability, leadership, and analytical mindset, reinforcing my commitment to using technology to create secure, efficient, and innovative solutions.
                            </p>
                            <p className='p-about'>
                                I am a grauadte of the Per Scholas AWS re/Start program certified AWS Cloud Practitioner, HarvardX CS50W's Web Programming with Python and JavaScript, HarvardX CS50's Introduction to Computer Science.
                                Through rigorous training and hands-on projects, I have developed a strong foundation in cloud computing, networking, Linux, programming, and Web developed.
                            </p>
                            <p className='p-about'>
                                Core Skills
                                • Technical: Cloud (AWS), Networking, Linux, Python, JavaScript, C, Web Programming, IT Support, Cybersecurity Fundamentals
                                • Professional: Adaptability, Problem-Solving, Team Collaboration, Leadership, Continuous Learning
                            </p>
                            <p className='p-about'>
                                I am currently advancing my skills by studying for the AWS AI Practitioner certification while deepening my knowledge of algorithms, data structures and expanding into Java programming, with a continued focus on cybersecurity principles and best practices.
                                My short-term goal, it is to push my career in cybersecurity, IT, cloud, AI, or software and web development roles—such as Cloud Support Associate or Junior Cloud Engineer—where I can apply my training and continue gaining hands-on experience.
                                Long-term, I aim to become a Cloud Security Engineer, combining my interests in cloud architecture, cybersecurity, AI, and innovation to help organizations operate securely and at scale.
                            </p>

                            <p className='p-about'>
                                Outside of my technical career, I am the founder and director of Developing the Futute Foundation - a nonprofit organization that, over the past four years, has supported more than 100 underserved children in Ciudad Bolívar, Venezuela.
                                Our programs are designed to deliver STEM education and digital literacy to marginalized students who have fallen behind due to limited access to resources.
                                During this time, we have provided consistent support through food assistance as well as structured programs in mathematics, language and communication, science, and technology.
                                Our mission is to guide, inspire, and empower these children by strengthening their confidence, curiosity, and foundational skills, helping them build brighter and more sustainable futures.
                            </p>

                        </div>

                        {/* Closing Message */}
                        <p className="text-lg mt-4 p-about">
                            Thank you for taking the time to read my journey. I’m always open to connecting with professionals, mentors, and organizations where I can contribute, learn, and grow.
                        </p>
                        <br />

                        <div class="d-flex justify-content-around">
                            <a
                                href="https://www.linkedin.com/in/roger-campo-cordova/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                LinkedIn Profile →
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1EWspg0P0kEqyyRY66pKc0X51Ce6XwQAv/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                Roger Campo Resume →
                            </a>
                            <a
                                href="https://github.com/roger-95s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                GitHub Profile →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;