import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amit Chaurasiya",
  initials: "AC",
  url: "https://github.com/AmitChaursiya",
  resumeUrl: "/Resume_nj.pdf",
  location: "Lucknow, UP",
  locationLink: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh",
  title: "Aspiring Software Developer",
  description:
    "Aspiring Software Developer with a solid foundation in computer science principles, Core Java, and web technologies.",
  summary:
    "Highly motivated and detail-oriented aspiring Software Developer with a solid foundation in computer science principles, including OOP, Data structures, and algorithms. Proficient in Core Java and web technologies like HTML, CSS, JavaScript, React.js. Strong problem-Solving skills, quick learning ability, and adaptability to dynamic environments. Eager to contribute to innovative projects and Grow within a collaborative development team.",
  avatarUrl: "/Profile.png",
  skills: [
    "Core Java",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "SQL",
    "VS Code",
    "IntelliJ IDEA",
    "GitHub",
    "Eclipse IDE",
    "Selenium",
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/blog", icon: "notebook", label: "Blog" },
  ],
  contact: {
    email: "jichaurasiya45@gmail.com",
    tel: "+91 9140423206",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmitChaursiya",
        icon: "github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-chaurasiya-68b294257/",
        icon: "linkedin",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jichaurasiya45@gmail.com",
        icon: "email",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IKIGAI School of AI",
      href: "#",
      badges: [{ text: "Offline", color: "bg-blue-500/20 text-blue-700 dark:text-blue-400" }],
      location: "Offline",
      title: "Industrial Training Program",
      logoUrl: "/ikigai.svg",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Completed a 2-month offline Industrial Training Program focused on Core Java & DSA. Emphasized Object-Oriented Programming (OOP) concepts, data structures, algorithms, and practical problem-solving during the training period.",
    },
  ],
  education: [
    {
      school: "Babu Banarasi Das University",
      href: "https://bbdu.ac.in",
      degree: "Bachelor of Engineering in Computer Science — CGPA: 7.57/10",
      logoUrl: "/bbdu_logo.webp",
      start: "Aug 2021",
      end: "2025",
    },
    {
      school: "Sri Ayodhya Singh Memorial Inter College",
      href: "#",
      degree: "Senior Secondary (XII) — Percentage: 62.6%",
      logoUrl: "/school.svg",
      start: "2017",
      end: "2018",
    },
    {
      school: "Sri Ayodhya Singh Memorial Inter College",
      href: "#",
      degree: "High School (X) — Percentage: 79%",
      logoUrl: "/school.svg",
      start: "2015",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "TRIPS RIDE MANAGEMENT SYSTEM",
      href: "https://github.com/AmitChaursiya",
      dates: "March 2025",
      active: true,
      description:
        "Developed Trips Ride, a full-stack web app enabling users to share trips and minimize travel costs. Built a responsive frontend with React.js integrated to backend APIs for ride booking and sharing. Integrated authentication, database, and trip-sharing for a secure ride experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "SQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmitChaursiya",
          iconName: "github",
        },
      ],
      image: "/trips_ride.jpg",
      video: "",
    },
    {
      title: "WEATHER INFORMATION APP",
      href: "https://github.com/AmitChaursiya",
      dates: "April 2024",
      active: true,
      description:
        "Developed a Weather Information App with HTML, CSS, JavaScript, and React.js for real-time Updates. Integrated API calls for fetching live weather data such as temperature, humidity, and conditions. Implemented a responsive UI with React components for a smooth user experience across Devices.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmitChaursiya",
          iconName: "github",
        },
      ],
      image: "/weather_app.jpg",
      video: "",
    },
    {
      title: "CURRENCY CONVERTER",
      href: "https://github.com/AmitChaursiya",
      dates: "September 2024",
      active: true,
      description:
        "Built a real-time currency converter using HTML, CSS, and JavaScript. Integrated a live exchange rate API to fetch and display accurate conversion rates. Used fetch() for asynchronous API calls and implemented responsive UI updates.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmitChaursiya",
          iconName: "github",
        },
      ],
      image: "/currency_converter.svg",
      video: "",
    },
  ],
  clientProjects: [] as Array<{
    title: string;
    href?: string;
    dates: string;
    active?: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly any[];
    image?: string;
    video?: string;
  }>,
  hackathons: [
    {
      title: "Certification on Core Java & DSA",
      dates: "June 2024",
      location: "IKIGAI School of AI",
      description:
        "Earned professional certification in Core Java and Data Structures & Algorithms, with deep focus on OOP concepts, algorithmic problem solving, and software engineering foundations.",
      image: "/ikigai.svg",
      links: [],
    },
    {
      title: "Presentation on ATM Machine Project Using OOPS in Java",
      dates: "Academic",
      location: "BBD University",
      description:
        "Demonstrated OOP principles in Java. Applied encapsulation to secure user data (like PIN and balance) within classes such as BankAccount, exposing access only through public methods like withdraw(), deposit(), or checkBalance().",
      image: "/bbdu_logo.webp",
      links: [],
    },
    {
      title: "Presentation on Artificial Intelligence (AI)",
      dates: "Academic",
      location: "BBD University",
      description:
        "Delivered a technical presentation on Artificial Intelligence (AI), explaining key concepts, modern architectures, and real-world applications.",
      image: "/bbdu_logo.webp",
      links: [],
    },
  ],
  certifications: [
    {
      title: "Certification from IKIGAI School of AI",
      issuer: "IKIGAI School of AI",
      description: "Core Java & DSA certification during offline industrial training.",
    },
  ],
} as const;
