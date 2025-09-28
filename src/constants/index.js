import project1 from "../assets/Subject.png";
import project2 from "../assets/Subject2.png";

export const HERO_CONTENT_EN = `I’m an Industrial Engineering student at ÉTS (B.Eng) with a DEC in Computer Science — a hybrid profile that helps me connect systems thinking, process modeling, and continuous improvement (Lean / Kaizen-style thinking) with strong software, automation, and data-engineering skills. Over 4+ years as a developer and system designer I’ve built ETL pipelines, KPI systems, and cloud-deployed services that turn operational data into decisions. I’m now focused on roles in continuous improvement, operations engineering, and process optimization where I can design and deploy KPI-driven improvements, automate manual workflows, and lead data-backed change.`;

export const HERO_CONTENT_FR = `Étudiant en génie industriel à l'ÉTS (B.Eng) avec un DEC en informatique — un profil hybride qui me permet de relier la pensée systémique, la modélisation des processus et l’amélioration continue (approche Lean / Kaizen) à des compétences en développement logiciel, automatisation et ingénierie des données. Fort de plus de 4 ans d’expérience en développement et conception de systèmes, j’ai construit des pipelines ETL, des systèmes de KPI et des services Cloud qui transforment des données opérationnelles en décisions. Je vise désormais des postes en amélioration continue, ingénierie des opérations et optimisation des processus pour concevoir et déployer des améliorations pilotées par les KPI, automatiser les tâches manuelles et conduire le changement basé sur les données.`;

export const EXPERIENCES_EN = [
  {
    year: "July 2025 – Present",
    role: "Operations Manager",
    company: "Harbor.ca",
    description: `Led operations and data engineering for a lead-generation / analytics platform. Designed and deployed a Dockerized C# ETL microservice that extracts data from MongoDB and Google Analytics, transforms it into business KPIs (LTV, CAC, etc.), and continuously updates a KPI cluster for dashboarding and decision-making. Built the operational playbook (financial runway, month-by-month cashflow, marketing structure) and introduced recurring coordination processes (Notion knowledge base, centralized team workspace) to scale launch operations. Acted as liaison between executive leadership and technical delivery to prioritize improvements and ensure reliability.`,
    technologies: ["C#", "Docker", "MongoDB", "Google Analytics", "KPI pipelines", "Azure"],
    // Source: CV (Harbor - operations, ETL & KPI work). :contentReference[oaicite:1]{index=1}
  },
  {
    year: "May 2025 - July 2025",
    role: "Software Engineer Intern",
    company: "Localiser",
    description:
        "A self-initiated product project to help users scan product barcodes and discover origin/manufacturer location insights. I coordinated with GS1 to secure a database hub license and API access (global barcode standard), then architected and developed the iOS app (Swift) and backend (ASP.NET + MongoDB) that resolve GS1 product/company location data and show provenance insights. This project demonstrates product validation, external stakeholder coordination, API integration, and full-stack delivery.",
    technologies: ["Swift", "ASP.NET", "MongoDB", "GS1 DataHub API"],
    // Source: Localiser / GS1 license & app details from CV. :contentReference[oaicite:5]{index=5}
  },
  {
    year: "April 2023 – March 2024",
    role: "Web Consultant",
    company: "VotreSite.ca",
    description: `Translated client needs into technical requirements, resolved web and infra issues (DNS, SSL, domains, server redirects), and occasionally supported sales for add-on services. This role trained me in client-driven problem definition and pragmatic fixes that reduce operational friction.`,
    technologies: ["DNS", "SSL", "HTML", "CSS", "PHP"],
  },
  {
    year: "Dec 2020 – Jan 2023",
    role: "Developer",
    company: "HSE Capital Management Inc.",
    description: `Built and optimized high-throughput systems and ETL pipelines to ingest real-time market data (IBKR → MongoDB). Maintained CI/CD and cloud infrastructure (Azure) and implemented performance monitoring and automation to keep systems reliable during market hours — experience directly transferable to industrial process monitoring and continuous improvement programs.`,
    technologies: ["C#", "MongoDB", "Azure", "CI/CD", "Kubernetes"],
    // Source: HSE experience details from CV. :contentReference[oaicite:2]{index=2}
  },
];

export const EXPERIENCES_FR = [
  {
    year: "Juillet 2025 – Présent",
    role: "Responsable des opérations",
    company: "Harbor.ca",
    description: `Responsable des opérations et de l'ingénierie des données pour une plateforme de génération de leads et d'analytique. Conception et déploiement d'un microservice ETL C# containerisé (Docker) qui extrait des données depuis MongoDB et Google Analytics, les transforme en KPI métier (LTV, CAC...) et met à jour en continu une base KPI pour l'exploitation décisionnelle. Rédaction d'un playbook opérationnel (flux de trésorerie mensuel, stratégie marketing) et mise en place d'outils/processus (Notion, espace centralisé) pour structurer le lancement. Intermédiaire entre la direction et l'équipe technique pour prioriser les améliorations et garantir la fiabilité.`,
    technologies: ["C#", "Docker", "MongoDB", "Google Analytics", "KPI", "Azure"],
    // Source: CV (Harbor). :contentReference[oaicite:3]{index=3}
  },
  {
    year: "Mai 2025 - Juillet 2025",
    role: "Stagiaire en génie logiciel",
    company: "Localiser",
    description:
        "Projet auto-initié permettant de scanner des codes-barres et d’obtenir des informations sur l’origine et le siège des fournisseurs. J’ai obtenu une licence GS1 (hub et API), puis conçu et développé l’application iOS (Swift) et le backend (ASP.NET + MongoDB) pour interroger les données GS1 et afficher des informations de provenance. Montre la validation produit, la coordination externe, l’intégration d’API et la livraison full-stack.",
    technologies: ["Swift", "ASP.NET", "MongoDB", "API GS1"],
    // Source: Localiser / licence GS1 dans le CV. :contentReference[oaicite:7]{index=7}
  },
  {
    year: "Avril 2023 – Mars 2024",
    role: "Consultant Web",
    company: "VotreSite.ca",
    description: `Compréhension des besoins clients, traduction en exigences techniques, et résolution de problèmes web/infra (DNS, SSL, domaines, redirections).`,
    technologies: ["DNS", "SSL", "HTML", "CSS", "PHP"],
  },
  {
    year: "Déc 2020 – Jan 2023",
    role: "Développeur",
    company: "HSE Capital Management Inc.",
    description: `Développement et optimisation de systèmes à haut débit et pipelines ETL pour structurer des flux de données temps réel (IBKR → MongoDB). Maintenance d'infrastructure Cloud (Azure) et pipelines CI/CD, applicables à la surveillance de processus et à l'amélioration continue.`,
    technologies: ["C#", "MongoDB", "Azure", "CI/CD", "Kubernetes"],
    // Source: HSE (CV). :contentReference[oaicite:4]{index=4}
  },
];

export const PROJECTS_EN = [
  {
    title: "Localiser — Self-initiated (iOS & Backend)",
    image: project1,
    description:
        "A self-initiated product project to help users scan product barcodes and discover origin/manufacturer location insights. I coordinated with GS1 to secure a database hub license and API access (global barcode standard), then architected and developed the iOS app (Swift) and backend (ASP.NET + MongoDB) that resolve GS1 product/company location data and show provenance insights. This project demonstrates product validation, external stakeholder coordination, API integration, and full-stack delivery.",
    technologies: ["Swift", "ASP.NET", "MongoDB", "GS1 API"],
    // Source: Localiser / GS1 license & app details from CV. :contentReference[oaicite:5]{index=5}
  },
  {
    title: "Harbor — KPI & ETL Platform",
    image: project2,
    description:
        "Delivery of a production-grade ETL microservice that extracts analytics + product data, transforms it into KPIs (LTV, CAC) and updates a KPI cluster continuously for dashboards and tactical decisions. Includes Dockerized cloud deployment, KPI model design, and operational playbook for launch — an example of using data engineering to drive continuous improvement and product decisions.",
    technologies: ["C#", "Docker", "MongoDB", "Google Analytics", "KPI pipelines"],
    // Source: Harbor ETL + KPI work from CV. :contentReference[oaicite:6]{index=6}
  },
  {
    title: "System Design & Design Pattern Projects",
    image: project1,
    description:
        "A portfolio of system-design projects (Aircraft Simulator, Snake Game, Cinema) on GitHub showcasing applied design patterns, UML-driven architecture, and maintainable code. Each repo includes draw.io diagrams and READMEs that explain architecture choices and trade-offs — useful when designing robust, scalable systems for industrial process control or tooling.",
    technologies: ["Java", "Design Patterns", "System Design"],
  },
];

export const PROJECTS_FR = [
  {
    title: "Localiser — Projet auto-initié (iOS & Backend)",
    image: project1,
    description:
        "Projet auto-initié permettant de scanner des codes-barres et d’obtenir des informations sur l’origine et le siège des fournisseurs. J’ai obtenu une licence GS1 (hub et API), puis conçu et développé l’application iOS (Swift) et le backend (ASP.NET + MongoDB) pour interroger les données GS1 et afficher des informations de provenance. Montre la validation produit, la coordination externe, l’intégration d’API et la livraison full-stack.",
    technologies: ["Swift", "ASP.NET", "MongoDB", "API GS1"],
    // Source: Localiser / licence GS1 dans le CV. :contentReference[oaicite:7]{index=7}
  },
  {
    title: "Harbor — Plateforme ETL et KPI",
    image: project2,
    description:
        "Déploiement d’un microservice ETL production qui extrait des données analytiques et produit des KPI (LTV, CAC), et met à jour en continu un cluster KPI pour tableau de bord et décisions tactiques. Déploiement Dockerisé, conception de modèles KPI et playbook opérationnel pour le lancement — un cas concret d’ingénierie des données au service de l’amélioration continue.",
    technologies: ["C#", "Docker", "MongoDB", "Google Analytics", "KPI"],
    // Source: Harbour (CV). :contentReference[oaicite:8]{index=8}
  },
  {
    title: "Projets de Conception de Systèmes et Modèles",
    image: project1,
    description:
        "Série de projets (Simulateur d’avion, Jeu du serpent, Cinéma) sur GitHub montrant l’application de modèles de conception, d’UML et d’architectures maintenables. Chaque dépôt contient draw.io et README expliquant les choix architecturaux — utile pour concevoir des systèmes industriels ou des outils internes.",
    technologies: ["Java", "Modèles de conception", "Architecture"],
  },
];

export const CONTACT_EN = {
  address: "Montreal, Quebec, Canada",
  phoneNo: "+1 (514) 793-6551",
  email: "jonasshoukri@gmail.com",
};

export const CONTACT_FR = {
  address: "Montréal, Québec, Canada",
  phoneNo: "+1 (514) 793-6551",
  email: "jonasshoukri@gmail.com",
};

export const EDUCATION_EN = [
  {
    year: "2025 – Present",
    role: "ÉTS (École de technologie supérieure)",
    company: "B.Eng. in Industrial Engineering",
  },
  {
    year: "2022 – 2025",
    role: "LaSalle College",
    company: "DEC in Computer Science",
  },
  // Source: Education + dates from CV. :contentReference[oaicite:9]{index=9}
];

export const EDUCATION_FR = [
  {
    year: "2025 – Présent",
    role: "ÉTS (École de technologie supérieure)",
    company: "Baccalauréat en génie industriel",
  },
  {
    year: "2022 – 2025",
    role: "Collège LaSalle",
    company: "DEC en informatique",
  },
  // Source: CV education section. :contentReference[oaicite:10]{index=10}
];
