/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Awais Ahmad",
  title: "Hi all, I'm Awais",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in backend development, AWS cloud services, and building applications using Python, C#, JavaScript, and various other technologies."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1WlzGwDgHl9uY7v9BqF8J4ISp8NP_qSsu", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/muhammadawa242",
  linkedin: "https://linkedin.com/in/muhammad-awais-ahmad-2915a2229",
  gmail: "muhammadawa242@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  leetcode: "https://leetcode.com/MAwaiz",
  cses: "https://cses.fi/user/249536",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER & CLOUD ENGINEER WITH EXPERTISE IN SCALABLE ARCHITECTURES",
  skills: [
    emoji(
      "⚡ Build scalable, serverless architectures, APIs, and cloud solutions to power IoT, ML, and real-time applications"
    ),
    emoji("⚡ Design and deploy custom software solutions, including gaming simulators, surveillance systems, and interactive platforms"),
    emoji(
      "⚡ Craft backend systems, optimize real-time performance, and integrate machine learning models for impactful applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Science and Technology",
      logo: "https://images.seeklogo.com/logo-png/23/1/nust-logo-png_seeklogo-234117.png",
      subHeader: "BS Software Engineering",
      duration: "November 2021 - May 2025",
      desc: "Completed Bachelor's degree in Software Engineering with focus on backend development, cloud services, and full-stack development.",
      descBullets: [
        "Specialized in backend development and cloud architecture",
        "Completed projects in MERN stack, Python game development, and AWS services"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS Cloud Services",
      progressPercentage: "80%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "NIWNET",
      companylogo: "",
      date: "February 2025 – June 2025",
      desc: "Designed scalable backend architecture for IoT solutions using AWS Lambda, API Gateway, and DynamoDB.",
      descBullets: [
        "Developed RESTful APIs and implemented serverless workflows",
        "Integrated cloud infrastructure using IAM, CloudWatch, and S3",
        "Deployed production-ready features using CI/CD pipelines"
      ]
    },
    {
      role: "C# Developer (Freelance Project)",
      company: "R&D Wing NUST",
      companylogo: "",
      date: "June 2024",
      desc: "Developed Unity-based training simulator using C# for real-time radio signal simulation and game mechanics."
    },
    {
      role: "Backend & DevOps Engineer (Freelance Project)",
      company: "Pulsse",
      companylogo: "",
      date: "May 2024",
      desc: "Deployed and scaled ML-based video detection service on AWS EC2 GPU, resolving stream latency bottlenecks.",
      descBullets: [
        "Automated deployment using shell scripting and configured Nginx as reverse proxy"
      ]
    },
    {
      role: "Software Developer (Freelance Project)",
      company: "Upwork Contract",
      companylogo: "",
      date: "August 2023 – December 2023",
      desc: "Engineered backend logic and frontend components for a real-time 2D slot game using Python and Pygame.",
      descBullets: [
        "Designed client-server interactions for gameplay mechanics and server-driven animations"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Secure",
      companylogo: "",
      date: "May 2023 – August 2023",
      desc: "Built and deployed anomaly detection model using TensorFlow for accident detection from audio data.",
      descBullets: [
        "Trained time-series model and converted to TensorFlow Lite for Android deployment",
        "Integrated model with mobile app using RESTful services"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT PROJECTS AND APPLICATIONS",
  projects: [
    {
      image: "https://imagizer.imageshack.com/img923/7348/pLMzyI.png",
      projectName: "Dentosis",
      projectDesc: "A dental disease prediction and treatment suggestion based web application developed for dental clinics to help with patient treatment and planning (Final Year Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242"
        }
      ]
    },
    {
      image: "https://i.imgur.com/ApmCDlC.png",
      projectName: "3D Crafting Game",
      projectDesc: "Created a 3D game in python using Panda3d game engine. Features FPS camera movement, WASD controls, item crafting system, and bullet physics for movement and collision detection. (CS50P Final Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/cs50p_3d_game"
        }
      ]
    },
    {
      image: "https://i.imgur.com/pQM7ssM.png",
      projectName: "Social Media Website",
      projectDesc: "Spearheaded the development of a social media platform (MERN stack, AWS S3) as a team lead, managing a team of 5 developers. Contributed to backend development and cloud API integration. (Junior Year Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/SWC_semester_project"
        }
      ]
    },
    {
      image: "https://imagizer.imageshack.com/img923/4148/YEhVJu.png",
      projectName: "TaskHub",
      projectDesc: "Collaborated in a team to build a web application using Django and MSSQL for task management among university students. (Sophomore Year Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/taskhub_dbs_project"
        }
      ]
    },
    {
      image: "https://i.imgur.com/tzODqUq.png",
      projectName: "Library Management System",
      projectDesc: "Developed a multi-page library management application using JavaFX for UI and an SQLite database for data storage. (Freshman Year Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/Library_Management_System"
        }
      ]
    },
    {
      image: "https://imagizer.imageshack.com/img923/1604/rmvzfO.jpg",
      projectName: "Todo List App",
      projectDesc: "Built a Java application with SQLite integration to create, manage, and store tasks. (Freshman Year Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242"
        }
      ]
    },
    {
      image: "https://i.imgur.com/CRVtMlG.png",
      projectName: "Space Invaders Game",
      projectDesc: "Created a 2D game in python using Pygame for graphics and animation. Features graphics, sound, and user interaction. Available on itch.io for play. (CS50X Final Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/CS50_Game_project"
        },
        {
          name: "Play Game",
          url: "https://mawaiz.itch.io/peaky-invaders-2d-game"
        }
      ]
    },
    {
      image: "https://i.imgur.com/xQ9XUAr.png",
      projectName: "Finance Web App",
      projectDesc: "Built a dynamic web application using Flask to retrieve and display financial data. Features stock price tracking, portfolio management, and simulated stock trading. (CS50X Finance Project)",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/muhammadawa242/last_week"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Skills 🏆 "),
  subtitle:
    "My certifications and technical skills that showcase my expertise in various technologies.",

  achievementsCards: [
    {
      title: "CS50X - Introduction to Computer Science",
      subtitle:
        "Completed Harvard's CS50X course covering fundamentals of computer science and programming.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "CS50X Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://certificates.cs50.io/27d1b753-25d3-42c4-a6e2-3955a2b5f965.png?size=letter"
        }
      ]
    },
    {
      title: "CS50P - Introduction to Programming with Python",
      subtitle:
        "Completed Harvard's CS50P course focusing on Python programming and software development.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "CS50P Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://certificates.cs50.io/a795e819-0156-4b9f-b057-3f130338ee50.pdf?size=letter"
        }
      ]
    },
    {
      title: "Foundations of Project Management",
      subtitle:
        "Completed Google's introductory course on project management principles and practices via Coursera.",
      image: require("./assets/images/google.jpeg"),
      imageAlt: "Project Management Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/ZR4LES7CGDHC"
        }
      ]
    },
    {
      title: "SQL Certificate",
      subtitle:
        "Earned a certificate from HackerRank for demonstrating proficiency in basic SQL skills.",
      image: require("./assets/images/hackerrank.webp"),
      imageAlt: "SQL Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/863c36886e5f"
        }
      ]
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle:
        "Part of the Deep Learning Specialization by deeplearning.ai, covering the foundations of neural networks.",
      image: require("./assets/images/deeplearn.png"),
      imageAlt: "Neural Networks Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/8RJ4XKLAUZLK"
        }
      ]
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle:
        "Part of the Deep Learning Specialization, focusing on hyperparameter tuning, regularization, and optimization.",
      image: require("./assets/images/deeplearn.png"),
      imageAlt: "Deep Learning Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/verify/H3QQC3XFB737"
        }
      ]
    },
    {
      title: "MS Word(2016)",
      subtitle:
        "Achieved Microsoft Office Specialist certification for advanced proficiency in Microsoft Word 2016.",
      image: require("./assets/images/ms.png"),
      imageAlt: "MS Word Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/5a2466dd-7591-49a8-abf8-975788650f9a?source=linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "muhammadawa242@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
