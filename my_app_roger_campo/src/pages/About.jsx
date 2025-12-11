import Header from "../componets/Header"

function About() {

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-[#0a0f1a] text-gray-900 dark:text-gray-100 transition-colors duration-500 homepage">
                < Header />

                <div className="container mx-auto p-5 max-w-4xl wrapper">

                    {/* CARD GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Roger */}
                        <div className="bg-white/60 dark:bg-[#101726] border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
                            <h2 className="text-xl font-semibold mb-1 site-title">Roger Campo Cordova</h2>
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
                            <a
                                href="https://www.linkedin.com/in/roger-campo-cordova/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                LinkedIn Profile →
                            </a>
                        </div>
                    </div>

                    {/* Closing Message */}
                    <p className="text-center text-lg mt-10">
                        Thank you for taking the time to read my journey. I’m always open to connecting with professionals, mentors, and organizations where I can contribute, learn, and grow.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;