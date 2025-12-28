import CCP_Exam_Pre from "../assets/CCP_Exam_Pre.jpg";
import CyberMagImg from "../assets/cybermag.jpg"; // add an image for CyberMag
import Carousel from 'react-bootstrap/Carousel';


const projectCards = [
    {
        title: "CCP_EXAM_PRE",
        time: "2 months ago",
        desc: `AWS Certified Cloud Practitioner exam preparation project with real world questions that will help you
        prepare for the AWS Certified Cloud Practitioner (CCP) exam. It includes practice questions, answers, explanations, and more. 
        
        Open Source Certification Practice Community

        Free, open-source exam practice for IT and cloud certifications.

        This project is an open-source initiative designed to help those from low-income backgrounds—prepare for technology certifications without paying for expensive exam-prep subscriptions. 
        The platform provides practice questions, explanations, references, and an exam-like experience directly in the browser. The MVP is delivered as a static web application hosted on GitHub Pages.
        , practice material, and study resources.`,
        link: "https://roger-95s.github.io/CCP_EXAM_PRE-/",
        sub: "AWS Certification Prep",
        image: CCP_Exam_Pre,
        interval: 8000,
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
        sub: "Cybersecurity Platform",
        image: CyberMagImg,
        interval: 12000,
    },
];

function CurrentWorks() {
    return (
        <Carousel fade pause="hover">
            {projectCards.map((project) => (
                <Carousel.Item
                    key={project.title}
                    interval={project.interval}
                >
                    <img
                        className=""
                        src={project.image}
                        alt={project.title}
                    />
                    <Carousel.Caption className="">
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CurrentWorks;

