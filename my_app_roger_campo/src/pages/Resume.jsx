const ResumeList = [
    {
        "personal_info": {
            "name": "Roger Campo Cordova",
            "location": "Seattle, WA",
            "phone": "206-851-0586",
            "email": "rogeresleitercc@gmail.com",
            "linkedin": "LinkedIn Roger Campo",
            "github": "https://github.com/roger-95s"
        },
        "summary": "Software and Cloud Compute Engineer with IT support, troubleshooting, and system administration experience. Skilled in AWS, Python, JavaScript, C, and SQL with certifications in Computer Science, Web Programming, and AWS Cloud (pursuing AWS AI Practitioner). Strong communicator with nonprofit leadership experience, passionate about developing secure, high-quality software in collaborative, innovative environments.",
        "technical_skills": {
            "programming_and_development": [
                "Python",
                "JavaScript",
                "C",
                "SQL",
                "Bash",
                "Data Structures & Algorithms (CS50-based)",
                "Software troubleshooting and debugging",
                "Version control (Git, GitHub)",
                "Secure coding fundamentals",
                "Automation basics"
            ],
            "web_and_application_development": [
                "Flask",
                "Django",
                "React",
                "REST APIs",
                "Authentication systems",
                "Database modeling",
                "CI/CD pipelines (GitHub Actions)",
                "Testing workflows"
            ],
            "cloud_and_infrastructure": {
                "certification_level": "AWS Cloud Practitioner",
                "compute": [
                    "EC2",
                    "Elastic Load Balancing (ELB)",
                    "Auto Scaling"
                ],
                "storage": [
                    "Amazon S3",
                    "S3 Glacier",
                    "EBS",
                    "EFS",
                    "AWS Storage Gateway"
                ],
                "networking_and_cdn": [
                    "Amazon VPC",
                    "Route 53",
                    "CloudFront",
                    "AWS Client VPN",
                    "AWS Transit Gateway",
                    "Direct Connect"
                ],
                "databases": [
                    "DynamoDB",
                    "Amazon RDS"
                ]
            },
            "networking_and_it_foundations": [
                "TCP/IP",
                "DHCP",
                "DNS",
                "IPv4",
                "VLANs",
                "Network segmentation",
                "Windows/Linux OS troubleshooting",
                "Hardware and software setup",
                "Remote support"
            ],
            "tools_and_platforms": [
                "Ollama (Gemma3, Llama3, Deepseek-r1)",
                "VS Code",
                "Trello",
                "Microsoft 365",
                "GitHub Actions",
                "JSON",
                "BeautifulSoup",
                "SQLAlchemy ORM",
                "Accessibility and user-centered design"
            ],
            "additional_skills": [
                "Cybersecurity fundamentals",
                "Problem-solving",
                "Customer service",
                "Strong communication",
                "Bilingual (English/Spanish)"
            ]
        },
        "projects": [
            {
                "name": "Cybersecurity Magazine Web Application",
                "stack": ["Flask", "React", "Python"],
                "type": "Full-Stack",
                "description": [
                    "Built a web platform to scrape, analyze, and display cybersecurity news using Python and BeautifulSoup.",
                    "Integrated multiple AI models (LLaMA, Gemma) for automated article analysis, summarization, and risk scoring.",
                    "Implemented CI/CD pipelines using GitHub Actions to improve reliability and workflow.",
                    "Demonstrated API design, automation, and cloud-ready architecture.",
                    "Led a small engineering team using Agile-style workflows."
                ]
            },
            {
                "name": "Command-Line Password Manager",
                "stack": ["C"],
                "type": "Systems Programming",
                "description": [
                    "Designed and implemented a secure CLI tool to store, retrieve, and delete credentials.",
                    "Built XOR-based encryption with custom file handling.",
                    "Strengthened low-level programming, memory management, and secure coding practices."
                ]
            },
            {
                "name": "Finance Manager Web App",
                "stack": ["Django", "Python"],
                "type": "Backend / Web Application",
                "description": [
                    "Developed a financial tracking system with authentication and recurring transactions.",
                    "Implemented pagination, secure form handling, and category-based analytics.",
                    "Reinforced scalable backend design and data security concepts."
                ]
            }
        ],
        "professional_experience": [
            {
                "role": "Founder & Director",
                "organization": "Developing the Future Foundation",
                "location": "Ciudad Bolívar / Remote",
                "start_date": "February 2022",
                "end_date": "August 2025",
                "responsibilities": [
                    "Founded and led a nonprofit delivering weekly STEM and digital literacy programs to 100+ youth.",
                    "Managed 18 volunteers using Agile-lite workflows and digital coordination tools.",
                    "Resolved technical issues involving devices, accounts, and connectivity.",
                    "Designed hands-on STEM learning experiences using Khan Academy and NASA SpacePlace.",
                    "Built organizational systems with Trello, spreadsheets, and digital tracking tools."
                ]
            },
            {
                "role": "Business Owner / Cleaning Technician",
                "organization": "Independent",
                "start_date": "January 2022",
                "end_date": "August 2025",
                "responsibilities": [
                    "Managed scheduling, communication, and quality control for 13 recurring clients.",
                    "Increased retention to 85% and maintained a 99% rebook rate.",
                    "Implemented standardized workflows reducing job time by 1–3 hours.",
                    "Demonstrated reliability, time management, and process optimization."
                ]
            }
        ],
        "education_and_certifications": [
            "AWS re/Start – Cloud Practitioner Program (Per Scholas)",
            "Harvard CS50: Introduction to Computer Science",
            "Harvard CS50: Web Programming with Python & JavaScript",
            "In Progress: AWS AI Practitioner",
            "High School Diploma – El Colegio"
        ],
        "leadership_and_strengths": [
            "Founded and scaled a nonprofit STEM program with measurable community impact.",
            "Strong collaborator across diverse teams and stakeholders.",
            "Experienced in high-accountability troubleshooting and problem-solving.",
            "Bilingual communicator supporting diverse users and teams."
        ]
    }

];

function Resume() {
    return (
        <div>
            <div>
                {ResumeList}

            </div>
        </div>
    );
};

export default Resume;