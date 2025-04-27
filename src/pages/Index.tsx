
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const skillsData = [
  { name: "HTML", icon: "/skills/html5.svg" },
  { name: "CSS", icon: "/skills/css3.svg" },
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "React.js", icon: "/skills/react.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" }, // White background
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "GitHub", icon: "/skills/github.svg" }, // White background
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "REST API", icon: "/skills/restapi.svg" }, // Working link
  { name: "Tailwind", icon: "/skills/tailwindcss.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }, 
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" }, // Postman logo
  // Working link
];


const journeyData = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    organization: 'Obox Tech',
    date: 'June 2023- July 2023',
    description: ' Developed responsive and interactive UI components using React.js.',
    type: 'work',
  },
  {
    id: 2,
    title: 'UI/UX Intern',
    organization: 'Markex Media',
    date: 'June 2024 - August 2024',
    description: 'Designed engaging user interfaces for websites and applications using Figma and Adobe XD.',
    type: 'work',
  },
];

const projectsData = [
  {
    id: 1,
    title: 'Product Scraper',
    description: 'A Product Scraper app that extracts product details from websites and provides structured data through an API.',
    image: 'public/scraper.jpg',
    tags: ['React', 'Node.js', 'API', 'Express'],
    githubUrl: 'https://github.com/Chavandeep/smarttv-scraper-owl', 
    liveUrl: 'https://smarttv-scraper-owl.vercel.app/',
  },
  {
    id: 2,
    title: 'Movie Recommendation System',
    description: 'A Movie Recommendation System that suggests similar movies based on user input using machine learning and Streamlit.',
    image: 'public/mrs.jpg',
    tags: ['Python1'],
    githubUrl: 'https://github.com/Chavandeep/Movie-Recommendation-System',
    liveUrl: 'https://movie-recommendation-system-krbuctupapfpf7rtq9dyz7.streamlit.app/',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard with location search and 7-day forecasts.',
    image: '/projects/project3.jpg',
    tags: ['JavaScript', 'API Integration', 'CSS3'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.example.com',
  },
];

const Index = () => {
  // Logic to reveal elements on scroll
  useEffect(() => {
    const handleRevealElements = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleRevealElements);
    // Initial check on page load
    handleRevealElements();

    return () => {
      window.removeEventListener('scroll', handleRevealElements);
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-hidden">
      <Navbar name="Deep Chavan" />
      
      <Hero 
        name="Deep Chavan"
        title="Frontend Developer & UI/UX Enthusiast"
        description="I build exceptional digital experiences that bring your ideas to life. Specializing in modern web technologies and responsive design patterns."
        imagePath="/developer.png" // This will be replaced with the actual image provided
      />
      
      <Skills skills={skillsData} />
      <Journey items={journeyData} />
      <Projects projects={projectsData} />
      <Contact />
      <Footer name="Deep Chavan" />
    </div>
  );
};

export default Index;
