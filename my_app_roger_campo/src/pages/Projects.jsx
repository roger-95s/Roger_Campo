// Define your data here (or move to a separate file later)
const ProjectList = [
    {
        title: "Web50/roger-95s",
        time: "2 years ago",
        desc: "Harvard CS50 Web Programming coursework repository covering foundational web development concepts.",
        link: "https://github.com/me50/roger-95s",
        sub: "CS50 Web"
    },
    {
        title: "code50/roger-95s",
        time: "2 years ago",
        desc: "CS50 programming problem sets and exercises focused on core computer science principles.",
        link: "https://github.com/code50/94102997",
        sub: "CS50 Core"
    },
    {
        title: "CCP_EXAM_PRE-",
        time: "2 months ago",
        desc: `AWS Certified Cloud Practitioner exam preparation project with real world questions that will help you
        prepare for the AWS Certified Cloud Practitioner (CCP) exam. It includes practice questions, answers, explanations, and more. 
        
        Open Source Certification Practice Community

        Free, open-source exam practice for IT and cloud certifications.

        This project is an open-source initiative designed to help those from low-income backgrounds—prepare for technology certifications without paying for expensive exam-prep subscriptions. 
        The platform provides practice questions, explanations, references, and an exam-like experience directly in the browser. The MVP is delivered as a static web application hosted on GitHub Pages.
        , practice material, and study resources.`,
        link: "https://github.com/roger-95s/CCP_EXAM_PRE-",
        sub: "AWS Certification Prep"
    },
    {
        title: "DFF-WebSite",
        time: "3 weeks ago",
        desc: "Developing the Future is a non-profit initiative launched on February 22, 2022. The project focuses on mentoring and inspiring marginalized children in Ciudad Bolívar through STEM education.",
        link: "https://github.com/roger-95s/DFF-WebSite",
        sub: "Non-profit Initiative"
    },
    {
        title: "CyberMag",
        time: "6 months ago",
        desc: `"An AI-powered cybersecurity magazine project that aggregates, analyzes, and reports on cyber threats and incidents."
                About CyberMag

                CyberMag is a next-generation cybersecurity intelligence platform powered entirely by open-source AI technologies. Our mission is to make cybersecurity insights accessible, transparent, and AI-driven. 
                Using modern models such as Gemma 3, Llama 3.2, and DeepSeek-R1 through the Ollama framework.
                CyberMag was created to demonstrate what’s possible when innovation, open-source tools, and modern engineering come together. 
                The project showcases real full-stack development using two of the most influential languages in the industry today: Python and JavaScript.
                Our platform is built by a team of cybersecurity learners, seasoned engineers, and technology enthusiasts. 
                We are united by the belief that education, transparency, and community-driven knowledge can empower the next generation of cybersecurity professionals.
                CyberMag is still evolving. Features may be experimental, and some AI-generated content may include inaccuracies or limitations. 
                All information should be used for educational and informational purposes only. We encourage users to validate findings and explore responsibly.
                As we continue to grow, our focus remains on improving the platform, refining AI tools, and expanding our intelligence coverage. 
                We welcome feedback, collaboration, and innovation from our community.    
        `,
        link: "https://github.com/roger-95s/CyberMag",
        sub: "Cybersecurity Platform"
    },
    {
        title: "Finance-Manager",
        time: "2 years ago",
        desc: "A Django-based web application designed to help users track income, expenses, and overall financial health through an intuitive interface.",
        link: "https://github.com/roger-95s/Finance-Manager",
        sub: "Django Web App"
    },
    {
        title: "Command-Line-Password-Manager",
        time: "7 months ago",
        desc: "A C-based command-line password manager that allows users to securely store, retrieve, and delete credentials using basic XOR encryption.",
        link: "https://github.com/roger-95s/Command-Line-Password-Manager",
        sub: "Systems Programming"
    },
    {
        title: "PerScholasRTT40",
        time: "3 days ago",
        desc: "A storytelling and documentation project capturing my journey through the Per Scholas RTT40 Amazon AWS Practitioner program.",
        link: "https://github.com/roger-95s/PerScholasRTT40",
        sub: "AWS Journey"
    },
    {
        title: "mindtrack",
        time: "3 months ago",
        desc: "An early-stage project exploring mental health tracking concepts and personal productivity insights.",
        link: "https://github.com/ziggity/mindtrack",
        sub: "Concept Project"
    }

];


function Projects() {
    return (
        <section className="hero">
            <div className="container">
                {ProjectList.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        className="mb-3 container-fluid glass-container"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="project-header">
                            <h2>{project.title}</h2>
                            <small>{project.time}</small>
                            <p>{project.desc}</p>
                            <small>{project.sub}</small>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
