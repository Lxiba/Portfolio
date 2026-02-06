export interface Skill {
  name: string;
  icon: string; // Devicon class name
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "Go", icon: "devicon-go-original-wordmark colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "Three.js", icon: "devicon-threejs-original" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ],
  },
];
