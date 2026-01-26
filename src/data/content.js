import { Github, Linkedin, Mail, FileText } from "lucide-react";
import leetCodeIcon from "../assets/favicon_LC.jpg";


export const content = {
    hero: {
        headline: "Java & Spring Boot Developer | MS CS Candidate at UNC Chapel Hill",
        // subheadline: "I am a Full-Stack Java Developer with a background in building scalable systems for both product and service-based companies. Currently pursuing my MS in Computer Science at UNC Chapel Hill (graduating May 2026), I combine years of industry experience with advanced academic research in algorithms and distributed systems",
        subheadline: "I am a Full-Stack Java Developer with professional experience in agile environments. Currently an MS CS student at UNC Chapel Hill (Class of '26). Passionate about Backend Architecture, Cloud Computing and GenAI. Actively seeking full-time opportunities.",
        ctaText: "Download Resume",
        // ctaLink: "/Kunal_Krishna_Java_Backend_UNC_2026.pdf",
        ctaLink: "https://www.dropbox.com/scl/fi/vunj4cgyncfezvynxiww6/KK-SDE-Resume-v2.0-MASTER.pdf?rlkey=qj4d6rq5zfpwi11rvsh8tx12n&st=0bor6sq0&dl=0",
        visa: {
            category: "F1-STEM OPT",
            expiry: "Valid till June 2029"
        },
        socials: [
            {
                name: "GitHub",
                icon: Github,
                url: "https://github.com/KunalKrishna",
            },
            {
                name: "LinkedIn",
                icon: Linkedin,
                url: "https://www.linkedin.com/in/krish85",
            },
            {
                name: "LeetCode",
                icon: leetCodeIcon,
                url: "https://leetcode.com/u/tHeVaGaBonD85/",
            },
            {
                name: "Email",
                icon: Mail,
                url: "mailto:kk85@unc.edu",
            }
        ]
    },
    techStack: {
        categories: [
            {
                name: "Languages",
                skills: [
                    "Java (8/11/17+)",
                    "Python",
                    "SQL",
                    "JavaScript"
                ]
            },
            {
                name: "Backend & Frameworks",
                skills: [
                    "Spring Boot (MVC, JPA, Security, AI)",
                    "Hibernate / ORM",
                    "REST APIs",
                    "Node.js",
                    "J2EE"
                ]
            },
            {
                name: "Cloud (AWS)",
                skills: [
                    "Lambda & API Gateway",
                    "EC2 & S3",
                    "RDS & DynamoDB",
                    "IAM & CloudWatch",
                    "Transcribe"
                ]
            },
            {
                name: "Generative AI",
                skills: [
                    "RAG Architecture",
                    "LLM Integration",
                    "Vector Databases (Pinecone)",
                    "Prompt Engineering"
                ]
            },
            {
                name: "Databases",
                skills: [
                    "MySQL",
                    "MongoDB",
                    "DynamoDB",
                    "Pinecone"
                ]
            },
            {
                name: "DevOps & Tools",
                skills: [
                    "Docker",
                    "Kubernetes(basic)",
                    "CI/CD (Jenkins, GitHub Actions)",
                    "Git & GitHub",
                    "Maven & Gradle"
                ]
            },
            {
                name: "Frontend",
                skills: [
                    "React.js",
                    "Angular",
                    "HTML5 & CSS3",
                    "JSON/XML"
                ]
            }
        ]
    },
    // 7-line :
    // Languages: Java (8/11/17+), Python, SQL, JavaScript 
    // Backend & Frameworks: Spring Boot (MVC, JPA, Security, AI), Hibernate / ORM, REST APIs, Node.js, J2EE 
    // Cloud (AWS): Lambda & API Gateway, EC2 & S3, RDS & DynamoDB, IAM & CloudWatch, Transcribe 
    // Generative AI: RAG Architecture, LLM Integration, Vector Databases (Pinecone), Prompt Engineering 
    // Databases: MySQL, MongoDB, DynamoDB, Pinecone  
    // DevOps & Tools: Docker, Kubernetes(basic), CI/CD (Jenkins, GitHub Actions), Git, Maven & Gradle 
    // Frontend: React.js, Angular, HTML5 & CSS3, JSON/XML

    // 6-line
    // Languages: Java (8/11/17+), Python, SQL, JavaScript 
    // Backend & Frameworks: Spring Boot (MVC, JPA, Security, AI), Hibernate / ORM, REST APIs, Node.js, J2EE 
    // Cloud (AWS) & DevOps: AWS (Lambda, API Gateway, EC2, S3, IAM), Docker, Kubernetes, CI/CD, Git 
    // Generative AI: RAG Architecture, LLM Integration, Vector Databases (Pinecone), Prompt Engineering 
    // Databases: MySQL, MongoDB, DynamoDB, Pinecone  
    // Frontend: React.js, Angular, HTML5 & CSS3, JSON/XML 
    projects: [
        {
            title: "MatchWise – Intelligent & stable TA/RA allocation system for students & professors",
            problem: "Helped Associate Chairs for Academic Affairs to automate the painstaking task of mathcing professors to students based on thier respective preferences.",
            tech: ["Python", "PuLP", "Firebase", "Firestore", "Authentication", "Cloud Functions", "Flutter"],
            features: [
                "Dashboard for Admin, Professors and Students.",
                "Admin can generate matches once professors and students have submitted their preferences.",
                "Utilized Integer Linear Programming (ILP) to generate stable matches."
            ],
            contributions: [
                "Requirements Elicitation, Algorithm Design and Coding.",
                "Built an algorithm matching students to professors for TA/RA positions by preference.",
                "Achieved fully stable matches in all test runs, reducing manual matching time by 90%.",
                "Technology: Python (PuLP library), Firebase (Authentication, Firestore, Cloud Functions), Flutter."
            ],
            links: {
                repo: "https://github.com/KunalKrishna/RA-Faculty-Matching",
                demo: "https://github.com/yashas-hm-unc/matchwise", // Live or Swagger
            }
        },
        {
            title: "BookSwap (SpringBoot + Angular)",
            problem: "An application to manage book exchange between students.",
            tech: ["Java", "Spring Boot", "Spring Security", "Angular", "MySQL"],
            features: [
                "User(Donor and Lender) Registration and Login.",
                "User can add, update, delete and search books to exchange.",
                "Used Spring transactions to ensure data consistency.",
                "User can rate and review books [future feature]."
            ],
            links: {
                repo: "https://github.com/KunalKrishna/BookSwap-SpringBootApp",
                demo: "#"
            }
        }
    ],
    experience: [
        {
            role: "SDE-1",
            company: "Redyhire, Bangalore, IND",
            dates: "January 2023 - February 2024",
            descriptions: [
                "Key responsibilities: backend development, REST API design, & implementation.",
                "Engineered a YAML-based Question Uploader module, boosting content update efficiency by over 70% through optimized database population and selective update logic.",
                "Architected a serverless backend by implementing Java-based AWS Lambda functions with API Gateway, creating a scalable and efficient solution for request handling"
            ]
        },
        {
            role: "Junior Associate, Technology",
            company: "Nagarro Software Pvt. Ltd., Gurugram, IND",
            dates: "Septempber 2014 - March 2016",
            descriptions: [
                "Improved the retry logic for wallet integration, increasing withdraw and deposit API success by 20%",
                "Built e-retail websites for clients using the Hybris framework."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of North Carolina at Chapel Hill",
            dates: "Aug 2024 - Expected May 2026",
            transcript: "#"
        },
        {
            degree: "Bachelor of Technology(B.Tech) in Information Technology",
            institution: "Indian Institute of Information Technology, Allahabad, IND",
            dates: "July 2010 - June 2014",
            transcript: "https://drive.google.com/file/d/1meWHA6XI4TfXxUWJXRgZRaBGnjcNr0d7/view?usp=sharing"
        }
    ],
    blog: [
        {
            title: "Comparison in Java : Comparator vs Comparable",
            url: "https://compator-vs-comparable.hashnode.dev/comparison-in-java-comparator-vs-comparable",
            date: "2026-01-2",
            description: "Explaining why Java's comarision framework is so powerful and how to use it. Also shared TRiCK to memorize for beginners.",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1769346120093/7a847e43-e9cc-4153-9dbb-6af816d92760.png"
        },
        {
            title: "Leetcode 5 — Longetst Palindromic Substring",
            url: "https://medium.com/@kunalkrishna85/leetcode-5-longetst-palindromic-substring-2d1c3408a162",
            date: "2025-12-31",
            description: "Discussed a bottom-up dynamic programming solution to popular string problem.",
            image: "https://miro.medium.com/v2/resize:fit:464/format:webp/1*e_TlGhPex_1zyi9VvWTjsg.png"
        },
        {
            title: "Directed Acyclic Graph : A unique perspective",
            url: "https://bloom-jackfruit-f8f.notion.site/DAG-Directed-Acyclic-Graph-1d8d32fa6ba880e7aea2d3eb59ad46e1?pvs=74",
            date: "2025-04-26",
            description: "A mutually unreachable pair (s,t) can exist if and only if there exists at least one topological level with at least two nodes.",
            // image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
            image: "https://bloom-jackfruit-f8f.notion.site/image/attachment%3A7ac72fa4-f55b-45d0-9d3d-192141b79d32%3Ae315f81b-1adf-43ca-910a-51211cd2f2ef.png?table=block&id=1d9d32fa-6ba8-8093-bdaf-c70654d06570&spaceId=e99e98da-0823-44b6-92d3-ebb3213c4efd&width=860&userId=&cache=v2"
        },
        {
            title: "Mastering Power Set Generation: A Deep Dive into Recursion",
            url: "https://bloom-jackfruit-f8f.notion.site/Mastering-Power-Set-Generation-A-Deep-Dive-into-Recursion-from-a-Java-programmer-s-perspective-18dd32fa6ba88004ab0fea0d1d989fed?pvs=74",
            date: "2025-02-19",
            description: "Exploring two prominent ways of generating power set using recursion in Java.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
        },
        {
            title: "Creating Immutable Custom Class in Java",
            url: "https://abitmanipulator.blogspot.com/2023/11/creating-immutable-custom-class-in-java.html",
            date: "2023-11-28",
            description: "A key requirement for thread safety and immutability.",
            image: "https://blogger.googleusercontent.com/img/a/AVvXsEgCd3RlsgPQ8d0-ool94O1dUC0w-xBziSy5teBzbcrbxtoaVqEsvqVnOTZ7yXSa7m5BOL01MHb6C3qmNoq1esOnCAu4gWZAxy3BfF5BbEyDtpj48j4S1L5Viqi4FWyvyk8wYZGOUcm2UCw7y7ID5_Ymt6V9PMMvPZhDTaANXoDgvCPnZiErF0rPLnujuHw"
        }
    ],
    contact: {
        title: "Get In Touch",
        email: "kk85@cs.unc.edu",
        location: "Chapel Hill, NC (Open to Relocation)",
        socials: [
            {
                name: "LinkedIn",
                icon: Linkedin,
                url: "https://www.linkedin.com/in/krish85",
            },
            {
                name: "GitHub",
                icon: Github,
                url: "https://github.com/KunalKrishna",
            },
            {
                name: "LeetCode",
                icon: leetCodeIcon,
                url: "https://leetcode.com/u/tHeVaGaBonD85/",
            }
        ]
    }
};
