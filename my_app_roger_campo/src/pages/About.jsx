import Header from "../componets/Header"

function About() {

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div className="homepage">
                < Header />
                <div className="wrapper container-fluid">

                    {/* CARD GRID */}
                    <div>

                        {/* Roger */}
                        <div className="">
                            <h2 className=" site-title">Roger Campo Cordova</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                Software & AI/Cloud Engineer · Co-Founder
                            </p>
                            <p className="text-md mb-4 leading-relaxed">
                                I have built a distinctive and purpose-driven career path—from working as a professional chef to founding a nonprofit in STEM education, and now transitioning fully into technology and cybersecurity.
                                Each chapter has strengthened my adaptability, leadership, and analytical mindset, reinforcing my commitment to using technology to create secure, efficient, and innovative solutions.
                            </p>
                            <p>
                                I am currently advancing my skills through Per Scholas while preparing for my AWS Cloud Practitioner certification.
                                Through rigorous training and hands-on projects, I’ve developed a solid foundation in cloud computing, networking, Linux, Python, JavaScript, C, and web development, with a growing focus on cybersecurity principles and best practices.
                            </p>

                            <p>
                                🔑 Core Skills
                                • Technical: Cloud (AWS), Networking, Linux, Python, JavaScript, C, Web Programming, IT Support, Cybersecurity Fundamentals
                                • Professional: Adaptability, Problem-Solving, Team Collaboration, Leadership, Continuous Learning
                            </p>
                            <p>
                                Short-term, goal is to push my career in cybersecurity, IT support, cloud, AI, or software and web development roles—such as Cloud Support Associate or Junior Cloud Engineer—where I can apply my training and continue gaining hands-on experience.
                                Long-term, I aim to become a Cloud/AI Security Engineer, combining my interests in cloud architecture, cybersecurity, AI, and innovation to help organizations operate securely and at scale.
                            </p>

                        </div>

                        {/* Closing Message */}
                        <p className="text-lg mt-4">
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