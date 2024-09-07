import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable
 multi-tier systems. I'm not a fan of that term "full-stack developer" however since my true passion is system design, 
 conception and implementation. With 3 years of hands-on experience, I have honed my skills in project conception and 
 planning, front-end technologies like React and Next.js, as well as back-end technologies like c#, java, 
 .Net, MongoDB, Docker and Kubernetes. My goal is to leverage my expertise to create innovative multi-layered solutions 
 that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating 
efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of 
technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began 
with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and 
adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver 
high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to 
open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2024 – Present",
    role: "Full-Stack Software Developer & Team Lead",
    company: "PropChase.ca",
    description: `Tasked with conceptualising and lining-out the entire project and subsequently managing a small team 
    of students developers from the LaSalle ELITE computer science club in order to implement the vision. This project 
    utilises a web-scarper backend (DotNet / c#) that aggregates all real estate listings in the greater Montreal area 
    into a Mongo DB. We then put this data base behind a pay-wall by creating an ASP.Net web API. This allows other 
    developers to benefit from the database directly. Furthermore, we created a React website with a listings page 
    (displaying the aggregated listings), an API page (where users can purchase an API key and see the documentation) 
    and a data page (where users can see more data that we pre packaged for them, like neighbourhood on the rise or 
    historical average house prices per location)`,
    technologies: ["DotNet", "c#", "ASP", "MongoDB", "React", "GitHub", "Azure"],
  },
  {
    year: "April 2023 – March 2024",
    role: "Web Consultant",
    company: "VotreSite.ca",
    description: `Tasked with understanding clients needs and relaying the information to the development team in a 
    clear and concise manner using technical terms. Responsible for fixing low and medium-end web problems clients have 
    experienced on their sites.`,
    technologies: ["DNS", "SSL", "HTML", "CSS", "PHP", "Domains"],
  },
  {
    year: "February 2020 - April 2023",
    role: "System Designer",
    company: "HSE Capital Management Inc.",
    description: `Conceptualised and implemented a complex trading system capable of interpreting given c# scripts and
    running them on a server 24/5. I was first tasked with outlining the project and design through UML and white-paper
    and was subsequently asked to implement the design using the DotNet Framework and MongoDB. I was also tasked with 
    assuring the reliability and predictability of the system during market open and close using Kubernetes.`,
    technologies: ["C#", "Kubernetes", "MongoDB", "IBKR API"],
  },
];

export const PROJECTS = [
  {
    title: "System Design & Design Pattern Projects",
    image: project1,
    description:
      "This is a series of projects (Aircraft simulator, snake game and cinema) that I have pinned to the top of my GitHub account. These repositories demonstrate my design pattern and system design capabilities. They each contain a draw.io file and ReadMe describing the projects and giving insight on the patterns and techniques used.\n" +
        "I was tasked with designing and documenting (UML + ReadMe) my own systems based on certain given guidelines.\n" +
        "I was also charged with improving the maintainability and scalability of these projects though system design and, lastly, tasked with programming my systems and implementing 20+ design patterns from scratch using my approved UMLs and ReadMe files for guidance.",
    technologies: ["Java", "Draw.IO", "Github", "Design Patterns", "System Design"],
  },
  {
    title: "PropChase",
    image: project2,
    description:
      "Tasked with conceptualising and lining-out the entire project and subsequently managing a small team of students " +
        "developers from the LaSalle ELITE computer science club in order to implement the vision. This project " +
        "utilises a web-scarper backend (DotNet / c#) that aggregates all real estate listings in the greater Montreal " +
        "area into a Mongo DB. We then put this data base behind a pay-wall by creating an ASP.Net web API. This " +
        "allows other developers to benefit from the database directly. Furthermore, we created a React website with a " +
        "listings page (displaying the aggregated listings), an API page (where users can purchase an API key and see " +
        "the documentation) and a data page (where users can see more data that we pre packaged for them, like " +
        "neighbourhood on the rise or historical average house prices per location)",
    technologies: ["DotNet", "c#", "ASP", "MongoDB", "React", "GitHub", "Azure"],
  },
];

export const CONTACT = {
  address: "Montreal, Quebec, Canada",
  phoneNo: "+1 (514) 793-6551",
  email: "jonasshoukri@gmail.com",
};

export const EDUCATION = [

  {
    year: "2022 – 2025",
    role: "LaSalle College",
    company: "DEC in Computer Science",
  },
  {
    year: "2025 – Present",
    role: "ETS (Ecole de technologie superieure)",
    company: "Bachelors Software Engineering",
  },
];
