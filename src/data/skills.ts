export interface Skill {
  name: string;
  icon: string;
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
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
      { name: "Bash", icon: "devicon-bash-plain" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Django", icon: "devicon-django-plain" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
      { name: "Three.js", icon: "devicon-threejs-original" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
      { name: "JUnit", icon: "devicon-junit-plain colored" },
      { name: "Maven", icon: "devicon-maven-plain colored" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Ubuntu", icon: "devicon-ubuntu-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
    ],
  },
];
