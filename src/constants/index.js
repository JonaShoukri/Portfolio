import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";

export const HERO_CONTENT_EN = `I am a passionate developer with a focus on crafting robust and scalable multi-tier systems. While the term "full-stack developer" is often used, my real passion lies in system design, conception, and implementation. With 3 years of hands-on experience, I've honed my skills in project planning and execution, using front-end technologies like React and Next.js, alongside back-end tools such as C#, Java, .NET, MongoDB, Docker, and Kubernetes. My goal is to leverage this expertise to create innovative, multi-layered solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT_FR = `Je suis un développeur passionné, spécialisé dans la création de systèmes robustes et évolutifs à plusieurs niveaux. Bien que le terme "développeur full-stack" soit souvent utilisé, ma véritable passion réside dans la conception, la planification et la mise en œuvre de systèmes. Avec 3 ans d'expérience pratique, j'ai perfectionné mes compétences en planification et exécution de projets, en utilisant des technologies front-end comme React et Next.js, ainsi que des outils back-end tels que C#, Java, .NET, MongoDB, Docker et Kubernetes. Mon objectif est de tirer parti de cette expertise pour créer des solutions innovantes et multi-niveaux qui favorisent la croissance des entreprises et offrent des expériences utilisateurs exceptionnelles.`;

export const EXPERIENCES_EN = [
  {
    year: "April 2024 – Present",
    role: "Full-Stack Software Developer & Team Lead",
    company: "PropChase.ca",
    description: `I was responsible for conceptualizing and outlining the entire project, then managing a small team of student developers from the LaSalle ELITE computer science club to bring the vision to life. The project features a .NET/C# web scraper backend that aggregates real estate listings from the greater Montreal area into a MongoDB database. We then placed this data behind a paywall by creating an ASP.NET Web API, allowing other developers to access the database directly. Additionally, we developed a React-based website with a listings page (displaying the aggregated data), an API page (where users can purchase API keys and access the documentation), and a data page (offering pre-packaged insights, such as trending neighborhoods and historical average house prices by location).`,
    technologies: ["DotNet", "MongoDB", "React", "Azure"],
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
    description: `I conceptualized and implemented a complex trading system capable of interpreting C# scripts and executing them on a server continuously throughout the trading week (24/5). Initially, I was responsible for outlining the project and its architecture through UML diagrams and a whitepaper. I then implemented the design using the .NET Framework and MongoDB. Additionally, I was tasked with ensuring the system's reliability and stability during market open and close by leveraging Kubernetes for orchestration.`,
    technologies: ["C#", "Kubernetes", "MongoDB", "IBKR API"],
  },
];
export const EXPERIENCES_FR = [
  {
    year: "Avril 2024 – Présent",
    role: "Développeur Logiciel Full-Stack & Chef d'Équipe",
    company: "PropChase.ca",
    description: `J'étais responsable de la conceptualisation et de la planification du projet, puis de la gestion d'une petite équipe de développeurs étudiants du club d'informatique ELITE de LaSalle pour donner vie à la vision. Le projet comprend un backend de web scraper en .NET/C# qui agrège des annonces immobilières de la grande région de Montréal dans une base de données MongoDB. Nous avons ensuite placé ces données derrière un mur payant en créant une API Web ASP.NET, permettant à d'autres développeurs d'accéder directement à la base de données. De plus, nous avons développé un site Web basé sur React avec une page de listes (affichant les données agrégées), une page API (où les utilisateurs peuvent acheter des clés API et accéder à la documentation), et une page de données (offrant des analyses préemballées, telles que les quartiers en vogue et les prix moyens historiques des maisons par emplacement).`,
    technologies: ["DotNet", "MongoDB", "React", "Azure"],
  },
  {
    year: "Avril 2023 – Mars 2024",
    role: "Consultant Web",
    company: "VotreSite.ca",
    description: `Chargé de comprendre les besoins des clients et de transmettre l'information à l'équipe de développement de manière claire et concise en utilisant des termes techniques. Responsable de résoudre les problèmes web de bas et moyen niveau rencontrés par les clients sur leurs sites.`,
    technologies: ["DNS", "SSL", "HTML", "CSS", "PHP", "Domaines"],
  },
  {
    year: "Février 2020 - Avril 2023",
    role: "Concepteur de Systèmes",
    company: "HSE Capital Management Inc.",
    description: `J'ai conceptualisé et mis en œuvre un système de trading complexe capable d'interpréter des scripts C# et de les exécuter sur un serveur en continu pendant la semaine de trading (24/5). Initialement, j'étais responsable de l'élaboration du projet et de son architecture via des diagrammes UML et un livre blanc. J'ai ensuite mis en œuvre la conception en utilisant le framework .NET et MongoDB. De plus, j'étais chargé d'assurer la fiabilité et la stabilité du système pendant l'ouverture et la fermeture du marché en utilisant Kubernetes pour l'orchestration.`,
    technologies: ["C#", "Kubernetes", "MongoDB", "IBKR API"],
  },
];

export const PROJECTS_EN = [
  {
    title: "System Design & Design Pattern Projects",
    image: project1,
    description:
      "This is a series of projects (Aircraft Simulator, Snake Game, and Cinema) that I have pinned at the top of my GitHub account. These repositories showcase my skills in design patterns and system architecture. Each project includes a draw.io file and a detailed README that explains the project and provides insights into the patterns and techniques used. I was responsible for designing and documenting the systems (using UML diagrams and README files) based on specific guidelines. Additionally, I was tasked with enhancing the maintainability and scalability of these projects through improved system design. Lastly, I implemented my designs, programming each system from scratch and applying over 20 design patterns, guided by the approved UMLs and documentation.",
    technologies: ["Java", "Design Patterns", "System Design"],
  },
  {
    title: "PropChase",
    image: project2,
    description:
      "I was responsible for conceptualizing and outlining the entire project, and subsequently managing a small team of student developers from the LaSalle ELITE computer science club to implement the vision. The project utilizes a .NET/C# web scraper backend that aggregates real estate listings from the greater Montreal area into a MongoDB database. We placed this data behind a paywall by developing an ASP.NET Web API, enabling other developers to access the database directly. Additionally, we built a React website featuring a listings page (showcasing the aggregated data), an API page (where users can purchase API keys and view documentation), and a data page (offering pre-packaged insights, such as trending neighborhoods and historical average house prices by location).",
    technologies: ["DotNet", "MongoDB", "React", "Azure"],
  },
];
export const PROJECTS_FR = [
  {
    title: "Projets de Conception de Systèmes et de Modèles de Conception",
    image: project1,
    description:
        "Il s'agit d'une série de projets (Simulateur d'Avion, Jeu du Serpent, et Cinéma) que j'ai épinglés en haut de mon compte GitHub. Ces dépôts mettent en avant mes compétences en modèles de conception et en architecture de systèmes. Chaque projet comprend un fichier draw.io et un README détaillé qui explique le projet et donne des informations sur les modèles et techniques utilisés. J'étais responsable de la conception et de la documentation des systèmes (en utilisant des diagrammes UML et des fichiers README) selon des directives spécifiques. De plus, j'avais pour mission d'améliorer la maintenabilité et l'évolutivité de ces projets grâce à une meilleure conception du système. Enfin, j'ai implémenté mes conceptions, programmant chaque système de zéro et appliquant plus de 20 modèles de conception, guidé par les UML et la documentation approuvés.",
    technologies: ["Java", "Modèles de Conception", "Architecture"],
  },
  {
    title: "PropChase",
    image: project2,
    description:
        "J'étais responsable de la conceptualisation et de la planification du projet, puis de la gestion d'une petite équipe de développeurs étudiants du club d'informatique ELITE de LaSalle pour mettre en œuvre la vision. Le projet utilise un backend de web scraper en .NET/C# qui agrège des annonces immobilières de la grande région de Montréal dans une base de données MongoDB. Nous avons placé ces données derrière un mur payant en développant une API Web ASP.NET, permettant à d'autres développeurs d'accéder directement à la base de données. De plus, nous avons créé un site Web React comprenant une page de listes (montrant les données agrégées), une page API (où les utilisateurs peuvent acheter des clés API et consulter la documentation), et une page de données (offrant des analyses préemballées, telles que les quartiers en vogue et les prix moyens historiques des maisons par emplacement).",
    technologies: ["DotNet", "C#", "ASP", "MongoDB", "React", "GitHub", "Azure"],
  },
];


export const CONTACT_EN = {
  address: "Montreal, Quebec, Canada",
  phoneNo: "+1 (514) 793-6551",
  email: "jonasshoukri@gmail.com",
};
export const CONTACT_FR = {
  address: "Montreal, Quebec, Canada",
  phoneNo: "+1 (514) 793-6551",
  email: "jonasshoukri@gmail.com",
};

export const EDUCATION_EN = [

  {
    year: "2022 – 2025",
    role: "LaSalle College",
    company: "DEC in Computer Science",
  },
  {
    year: "2025 – Present",
    role: "ÉTS (École de Technologie Supérieure)",
    company: "Bachelors Software Engineering",
  },
];
export const EDUCATION_FR = [

  {
    year: "2022 – 2025",
    role: "Collège LaSalle",
    company: "DEC en Informatique",
  },
  {
    year: "2025 – Présent",
    role: "ÉTS (École de Technologie Supérieure)",
    company: "Baccalauréat en génie logiciel",
  },
];


