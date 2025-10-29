import { z } from "zod";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  passportNo?: string;
}

export interface Summary {
  headline: string;
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  client: string;
  concern: string;
  environment: string[];
  teamSize: number;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  location?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: Summary;
  workHistory: WorkExperience[];
  projects: Project[];
  skills: SkillCategory[];
  professionalQualifications: Education[];
  academicQualifications: Education[];
  strengths: string[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Bimal Srivastava",
    email: "Bimal.srivastava@outlook.com",
    phone: "+91-9899294919",
    passportNo: "J0125451"
  },
  summary: {
    headline: "Experienced Software Engineer with 9+ years of expertise in Microsoft Technologies",
    highlights: [
      "9+ years of experience in C#, .NET Framework, and enterprise application development",
      "Proven track record managing and mentoring software engineering teams",
      "Extensive experience with major clients including IKEA, HCL, and Autodesk",
      "Strong expertise in full-stack development with ASP.NET, MVC, jQuery, and SQL Server",
      "Specialized in legacy system migration and RPA automation"
    ]
  },
  workHistory: [
    {
      company: "HCL Technologies",
      role: "Software Engineer",
      location: "India",
      period: "July 2011 - March 2018"
    },
    {
      company: "BOSS Computec",
      role: "Lead Software Engineer",
      location: "NOIDA",
      period: "September 2010 - July 2011"
    },
    {
      company: "Interactive Education Ltd",
      role: "Lead Software Engineer",
      location: "Gurgaon",
      period: "May 2008 - August 2010"
    },
    {
      company: "Trans Silicon Networks",
      role: "Software Programmer",
      location: "Ghaziabad",
      period: "August 2007 - April 2008"
    },
    {
      company: "Freelance",
      role: "Software Developer",
      location: "India",
      period: "October 2006 - April 2007"
    },
    {
      company: "Disha Computers",
      role: "Software Developer",
      location: "Lucknow",
      period: "October 2003 - September 2004"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Digital Prizm",
      client: "HCL",
      concern: "HCL Technologies",
      environment: ["Windows 10/Server 2012", "C#", "SQL Server", "jQuery", "ASP.Net"],
      teamSize: 5,
      period: "May 2014 - March 2018",
      description: "An enterprise application and framework of technologies and applications for analysing migration from legacy to modern technologies.",
      responsibilities: [
        "Managing and mentoring a team of software engineers",
        "Design and development of the architecture/framework for an application capable of analysing the migration capabilities of legacy applications and technologies",
        "Automation of the application with Blue Prism (RPA)"
      ]
    },
    {
      id: 2,
      title: "Cost Simulation",
      client: "IKEA",
      concern: "HCL Technologies",
      environment: ["Windows XP/7/Server 2008", "C#", "Oracle", "jQuery", "MVC 3", "Excel"],
      teamSize: 6,
      period: "July 2013 - April 2014",
      description: "A business application of IKEA allowing the users to simulate the cost of an item based on supplier and the store. It enables the user to take business decisions about new products.",
      responsibilities: [
        "Development and maintenance of Web based parts in MVC and client modules of the application, which is in Excel",
        "On-site coordinator in Almhult, interacted with the clients as well as users"
      ]
    },
    {
      id: 3,
      title: "WebECIS",
      client: "IKEA",
      concern: "HCL Technologies",
      environment: ["Windows XP/7/Server 2008", "C#", "Oracle", "jQuery", "ASP.Net"],
      teamSize: 12,
      period: "July 2012 - June 2013",
      description: "A business application of IKEA to manage the E-Commerce for IKEA suppliers. WebECIS is the Web-based version of previous desktop client made in VB 6.0",
      responsibilities: [
        "Development and maintenance of parts and modules of the application",
        "Created the complete framework for the application development for the team including Multi-Column dropdown control using jQuery and HTML"
      ]
    },
    {
      id: 4,
      title: "GPS-Migration",
      client: "IKEA",
      concern: "HCL Technologies",
      environment: ["Windows XP/7/Server 2008", "VB.Net", "Oracle"],
      teamSize: 22,
      period: "July 2011 - May 2012",
      description: "A critical business application of IKEA to manage the complete purchasing/supplying mechanism of IKEA products from the supplier to the end-user. It is the central order handling system for IKEA.",
      responsibilities: [
        "Migration, development and maintenance of critical as well as some major parts and modules of the application"
      ]
    },
    {
      id: 5,
      title: "StormNET/Storm and Sanitary Analysis & WaterNET",
      client: "Autodesk",
      concern: "BOSS Computec",
      environment: ["Windows XP/Vista/7", "C#.Net", "Delphi"],
      teamSize: 8,
      period: "September 2010 - July 2011",
      description: "A desktop application to create and analyse storm water and domestic water supply networks according to the specifications provided by EPA.",
      responsibilities: [
        "Design, development and maintenance of the parts of the product",
        "Complete management of deployment and distribution of the application"
      ]
    },
    {
      id: 6,
      title: "ClassComm.Net",
      client: "In-House Product",
      concern: "Interactive Education Ltd",
      environment: ["Windows XP/Vista", "C#.Net", "VB.Net"],
      teamSize: 10,
      period: "May 2008 - August 2010",
      description: "This project is interactive software for education industry mainly to be used by educational institutions. It provides interactive learning for the students using MS-PowerPoint.",
      responsibilities: [
        "Management of UI and interaction with supporting modules"
      ]
    },
    {
      id: 7,
      title: "CenS-US",
      client: "In-House Product",
      concern: "Interactive Education Ltd",
      environment: ["Windows XP/Vista", "C#.Net", "VB.Net"],
      teamSize: 2,
      period: "May 2008 - August 2010",
      description: "This project is interactive software to be used everywhere where there is need of taking opinion based on questionnaires/spontaneous questions.",
      responsibilities: [
        "Analysis of requirements",
        "Design of the software, Database and reports",
        "Maintenance of the software"
      ]
    },
    {
      id: 8,
      title: "Slide Mapper Plug-in for MS-PowerPoint",
      client: "In-House Product",
      concern: "Interactive Education Ltd",
      environment: ["Windows XP/Vista", "C#.Net", "VB.Net", "MS-PowerPoint 2003/2007"],
      teamSize: 1,
      period: "May 2008 - August 2010",
      description: "This project is designed for designing of the questionnaires using MS-PowerPoint. These questionnaires are used with ClassComm.Net",
      responsibilities: [
        "Complete design and maintenance of the product"
      ]
    },
    {
      id: 9,
      title: "GwComm",
      client: "In-House Product",
      concern: "Interactive Education Ltd",
      environment: ["Windows XP", "C#.Net", "VB.Net"],
      teamSize: 2,
      period: "May 2008 - August 2010",
      description: "This project was a support product for the other products of the company. It was designed for managing communication with the hardware manufactured by the company.",
      responsibilities: [
        "Design and complete maintenance of the module",
        "Testing of new hardware to ensure that they are working properly"
      ]
    },
    {
      id: 10,
      title: "GwOfficeManager",
      client: "In-House Product",
      concern: "Interactive Education Ltd",
      environment: ["Windows XP", "C#.Net", "VB.Net"],
      teamSize: 1,
      period: "May 2008 - August 2010",
      description: "This project was a support product for the other products of the company. It is designed for managing communication with the hardware manufactured by the company.",
      responsibilities: [
        "Design and complete maintenance of the module",
        "Testing of new hardware to ensure that they are working properly"
      ]
    },
    {
      id: 11,
      title: "CyberDon",
      client: "Binaca Cybercafé",
      concern: "Freelance Project",
      environment: ["Windows XP", "VB.Net", "MS SQL Server 2005 Express"],
      teamSize: 1,
      period: "February 2007 - July 2007",
      description: "Cybercafé management software for Binaca Cybercafé.",
      responsibilities: [
        "Complete design, development and deployment of the application"
      ]
    },
    {
      id: 12,
      title: "Seva Chikan Manager",
      client: "Seva Chikan",
      concern: "Disha Computers",
      environment: ["Windows 98", "VB 6.0", "MS Access"],
      teamSize: 4,
      period: "May 2003 - December 2003",
      description: "Business management software for Seva Chikan.",
      responsibilities: [
        "Development and maintenance of the application"
      ]
    },
    {
      id: 13,
      title: "Shikhaum",
      client: "Aristo Pharmacals",
      concern: "Disha Computers",
      environment: ["Windows 98", "VB 6.0", "MS Access"],
      teamSize: 2,
      period: "May 2003 - October 2003",
      description: "Pharmacy management software for Aristo Pharmacals.",
      responsibilities: [
        "Development and maintenance of the application"
      ]
    }
  ],
  skills: [
    {
      category: "Operating Systems",
      skills: ["Windows 7", "Windows 8.1", "Windows 10", "Windows Server"]
    },
    {
      category: "Programming Languages",
      skills: ["VB 6.0", ".NET Framework", "VB.NET", "C#.Net", "MONO framework"]
    },
    {
      category: "Web Technologies",
      skills: ["jQuery", "ASP.Net", "MVC 4.0"]
    },
    {
      category: "Databases",
      skills: ["MS-Access", "SQL Server", "Oracle"]
    },
    {
      category: "Development Tools",
      skills: ["DevExpress Controls", "Infragistics Controls", "Blue Prism"]
    },
    {
      category: "Source Control",
      skills: ["ClearCase", "ClearQuest", "VSS", "TFS", "GIT"]
    }
  ],
  professionalQualifications: [
    {
      degree: "'A' Level",
      institution: "DOEACC, New Delhi",
      year: "2004"
    },
    {
      degree: "PGDCA (Post Graduate Diploma in Computer Applications)",
      institution: "IGNOU, New Delhi",
      year: "2006"
    },
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "IGNOU, New Delhi",
      year: "2008"
    }
  ],
  academicQualifications: [
    {
      degree: "Intermediate",
      institution: "CBSE, New Delhi",
      year: "1997"
    },
    {
      degree: "Bachelor in Science (Zoology)",
      institution: "J.P. University, Chhapara",
      year: "2003"
    }
  ],
  strengths: [
    "Qualitative Attitude",
    "Learning Attitude",
    "Team Player",
    "Client Communication"
  ]
};
