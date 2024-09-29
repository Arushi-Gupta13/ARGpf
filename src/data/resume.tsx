import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Arushi Gupta",
  url: "https://web.whatsapp.com/",
  initials: "ARG",

  location: "Ludhiana, Punjab, India",
  locationLink: "https://maps.app.goo.gl/ZSaDPMwTpKWRjdZeA",
  description: "A Software Engineer (in the making)",
  summary:
    "Ever since I was a kid, I have been fascinated by the world where Finance and Technology meet, which naturally led me to pursue my undergrad in Tech at NIT Jalandhar. I started off as a UI/UX designer, then made the leap into frontend development, and now I am fully embracing the challenge of becoming a full stack developer. I am passionate about turning ideas into real-world projects, one line of code at a time. My love for exploring new things even pushed me to dive into Machine Learning for a project (because who can resist a good challenge, right?). When I am not coding, you will prolly find me lifting weights to balance out my cheesecake addiction. Life is all about finding that perfect mix of code, carbs, and creativity!",
  avatarUrl: "/image.png",

  skills: [
    "React",
    "Next.js",
    "Typescript",
   
    "Python",
  
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rushiegupta@gmail.com",
    tel: "+91 7087082443",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Arushi-Gupta13",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arushi-gupta1344/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/arushigarg1344",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ByetOski Developers OPC Pvt Ltd.",
      badges: [],
      href: "",
      location: "Remote",
      title: "SWE Intern",
      logoUrl: "/image copy 2.png",
      start: "January 2024",
      end: "March 2024",
      description:
        "Key roles in development of User Interfaces. Worked on AI Chatbot and a platform which helps users find professionals based on their location and requirements.",
    },
    {
      company: "Tootler.ai",
      href: "https://tootler.ai/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/image copy.png",
      start: "Sep 2022",
      end: "May 2023",
      description:
        "Designed multiple user dashboards and developed those in Next.JS and Tailwind CSS.",
    },
  ],

  education: [
    {
      school: "Dr BR Ambedkar National Institute of Technology, Jalandhar",
      href: "https://www.nitj.ac.in/",
      degree: "Bachelors of Technology in Instrumentation and Control Engineering",
      logoUrl: "/image copy 3.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "BCM Arya Model Sr Sec School, Ludhiana, Punjab",
      href: "https://www.bcmeducation.org/",
      degree: "Schooling",
      logoUrl: "https://www.bcmeducation.org/images/logo.png",
      start: "",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "E2ACON 2025",
      href: "https://e2acon25.vercel.app/",
      dates: "Aug 2024- Sep 2024",
      active: true,
      description:
        "Lead a team of 3 to design and develop Conference Website of ICE Department, NITJ. The website is yet to be deployed on NITJ sub-domain. ",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://e2acon25.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jasminekaur02/e2aconference",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Screenshot 2024-09-29 at 11.57.35.png",
     
    },
   
    {
      title: "Extractopus",
      href: "https://extractopus.com/",
      dates: "Jan 2024- March 2024",
      active: true,
      description:
        "A platform to help users find professionals based on their location and requirements.",
      technologies: [
        "Frontend",
        "Next.js",
        "Typescript",
       
       
        "TailwindCSS",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://extractopus.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Byteoski-Developers/extractopus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Screenshot 2024-09-29 at 11.58.22.png",
    
    },
  ],

  hackathons: [
    {
      title: "Hackmol 4.0",
      dates: "Feb, 2023",
      location: "Jalandhar, Punjab",
      description:
        "AyurBuddy- Developed a chatbot trained on Ayurvedic ancient text- Charak Samhita to deliver responses related to health and over well-being",
      image:
        "",
      win: "Finalist",
     
      links: [
       
        {
          title: "source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Arushi-Gupta13/AyurBuddy",
        },
      ],
    },
    {
      title: "MLH Open Source Hackfest",
      dates: "Oct, 2023",
      location: "Online",
      description:
        "OpenMatch- Developed a tool that helps user find open source projects based on past GitHub profile.",
      image:
        "",
      win: "2nd Runners Up",
     
      links: [
       
        {
          title: "source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/You-now-Who/Openmatch",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/openmatch",
        },
      ],
    },
  ],
};
