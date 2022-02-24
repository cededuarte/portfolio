/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Cedric Angelo Eduarte',
  title: "Hi, I'm Ced",

  subTitle: emoji("🚀 Service Delivery Officer | Sr Logistics Lead "),
  subTitle1: emoji("🚀 Freelance Full Stack Web Developer"),
  subTitle2: emoji("🚀 Project Coordinator"),
  
  resumeLink:
  'https://drive.google.com/file/d/1ri53blMbCWS0lKLoL6-ce6eLM5C1S3Q1/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gitlab: "https://gitlab.com/eduarte.cedric",
  github: "https://github.com/cededuarte",
  linkedin: "https://www.linkedin.com/in/cedriceduarte/",
  gmail: "eduarte.cedric@gmail.com",
  facebook: "https://www.facebook.com/cededuarte/",
  stackoverflow: "https://stackoverflow.com/users/13984812/ced",
  instagram: "https://www.instagram.com/nuffffced/",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [

    emoji("🚀 AS A SERVICE DELIVERY OFFICER | SENIOR  LOGISTICS ASSOCIATE: "),
    emoji("⚡ Oversee personnels' day to day schedule and tasks "),
    emoji("⚡ Assign duties, responsibilities, and spans of authority to project personnel"),
    emoji("⚡ Manage project execution to ensure adherence to schedule, and scope"),
    emoji("⚡ Facilitate adherence to complex Service Level Agreement(SLA) with operators"),
    emoji("⚡ Manage conflicts, and ensuring the team's processes and tasks are carried out efficiently"),
    emoji("⚡ Responsible for product creations and delivery"),
    emoji("🚀 AS A FREELANCE FULL STACK WEB DEVELOPER: "),
    emoji("⚡ Develops highly interactive Front end / User Interfaces for web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Automating data collection through scripts"),
    emoji("🚀 AS A JUNIOR PROJECT MANAGER | PROJECT COORDINATOR: "),
    emoji("⚡ Participate in project design, scheduling and coordinate with all  the team members"),
    emoji("⚡ Manage project-related works by ensuring all project materials are documented and available"),
    emoji("⚡ Communicate with clients to identify project requrirements, scope and objectives"),
    emoji("⚡ Monitor or track project milestones and deliverables"),
    
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "mdb",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fa-solid fa-flask"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Zuitt Web Development Bootcamp',
      
      subHeader: 'Full Stack Web Development',
      duration: 'June 2019 - December 2019',
    },
    {
      schoolName: 'San Beda University, Manila',
      subHeader: 'Bachelor of Laws',
      duration: 'July 2015 - July 2017',
    },
    {
      schoolName: "Gold's Fitness Institute",
      subHeader: 'Fitness Instructor Course',
      duration: 'May 2014 - July 2014',
    },
    {
      schoolName: 'Rizal Technological University, Mandaluyong City',
      subHeader: 'Bachelor of Arts in Political Science',
      duration: 'June 2009 - April 2013',

    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [

    {
      Stack: "Ability to Multitask",
      progressPercentage: "100%"
    },
    {
      Stack: "Adaptability",
      progressPercentage: "100%"
    },
    {
      Stack: "Leadership and Teamwork",
      progressPercentage: "100%"
    },
    {
      Stack: "Interpersonal Communication",
      progressPercentage: "90%"
    },
    {
      Stack: "Front End Development",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Back End Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Management",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  schools: [
    {
      schoolName: 'Service Delivery Officer | Logistics Lead',
      subHeader: 'Kambi Philippines Inc., Makati City',
      duration: 'July 2016 - Present',
      descBullets: [
      
      ]
    },
    {
      schoolName: 'Project Coordinator | Quality Controller',
      subHeader: 'Tokyo University in collaboration with Zuitt, Makati City',
      duration: 'February 2020 - November 2020',
      descBullets: [

      ]
    },
    // {
    //   schoolName: "Digitizer/Quality Controller",
    //   subHeader: 'Zuitt/Tokyo University, Makati City',
    //   duration: 'February 2020 - April 2020',
    // },
    {
      schoolName: 'Second Line Support Officer - Sports Operations',
      subHeader: ' Everlounge Inc., Makati City',
      duration: 'Jan 2016 - Jul 2016',

    },
    {
      schoolName: 'Assistant Bookmaker / Sports Analyst',
      subHeader: 'Yew Tree Services Inc., Makati City',
      duration: 'May 2013 - January 2016',
      descBullets: [

      ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saadpasta', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'false', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+63 917 508 0756',
  emailAddress: 'eduarte.cedric@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};
