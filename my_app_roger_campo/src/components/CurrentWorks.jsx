import CCP_Exam_Pre from "../assets/CCP_Exam_Pre.jpg";
import CyberMagImg from "../assets/cybermag.jpg"; // add an image for CyberMag
import Carousel from 'react-bootstrap/Carousel';


const projectCards = [
    {
        title: "CCP_EXAM_PRE",
        time: "2 months ago",
        desc: `Free, open-source exam practice for the AWS Certified Cloud Practitioner exam preparation project with real world questions that will help you
        prepare for the AWS Certified Cloud Practitioner (CCP) exam. It includes practice questions, answers, explanations, and more. 
        
        Click here and learn more! 
        `,
        link: "https://roger-95s.github.io/CCP_EXAM_PRE-/",
        sub: "AWS Certification Prep",
        image: CCP_Exam_Pre,
        interval: 8000,
    },
    {
        title: "CyberMag",
        time: "6 months ago",
        desc: `"An AI-powered cybersecurity magazine project that aggregates, analyzes, and reports on cyber threats and incidents." 
        
        Click here and learn more! 
        `,
        link: "https://github.com/roger-95s/CyberMag",
        sub: "Cybersecurity Platform",
        image: CyberMagImg,
        interval: 12000,
    },
];

function CurrentWorks() {
    return (
        <Carousel
            fade
            pause="hover"
            indicators={true}
            controls={true}
        >
            {projectCards.map((project, index) => (
                <Carousel.Item
                    key={project.title}
                    interval={project.interval}
                >
                    {/* Image as main content */}
                    <img
                        className="d-block w-100"
                        src={project.image}
                        alt={project.title}
                        style={{
                            maxHeight: '5000px',
                            objectFit: 'cover'
                        }}
                    />

                    {/* Caption overlay */}
                    <Carousel.Caption>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                            <h2 className="display-1"><b>{project.title}</b></h2>
                            <p className="h3 "><b>{project.desc}</b></p>
                            View Project
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CurrentWorks;

