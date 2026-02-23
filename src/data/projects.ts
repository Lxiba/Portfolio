export interface Project {
  id: string;
  title: string;
  techLine: string;
  description: string;
  techUsage: string;
  color: string;
  image?: string;
  demoVideo?: string;
  deployUrl?: string;
}

export const projects: Project[] = [
  {
    id: "specisnap",
    title: "SpeciSnap",
    techLine: "React, Vite, Tailwind CSS, Python, FastAPI, Google Gemini AI, PWA",
    description:
      "An AI-powered species identification app that lets users upload or capture photos of any animal, plant, flower, or fungus to get instant identification with detailed information including scientific names, habitat, and fun facts.",
    techUsage:
      "Google Gemini Flash Vision API handles AI-powered species identification with structured prompt engineering. FastAPI serves the Python backend with async request handling. React with custom hooks manages the frontend — camera capture, drag-and-drop upload, and identification flow. Vite handles fast bundling. Tailwind CSS provides responsive styling. Built as a Progressive Web App with service workers for installable mobile experience.",
    color: "from-green-700 to-emerald-900",
    image: "/assets/Favicon-Snap.png",
    deployUrl: "https://specisnap.vercel.app/",
  },
  {
    id: "eunoia",
    title: "Eunoia",
    techLine: "Next.js, React, Tailwind CSS, Google Gemini AI",
    description:
      "An AI-powered mental health journal that helps users understand their emotional patterns. Write about your day, talk to a supportive AI companion, track mood trends over time, and receive weekly personalized reflections.",
    techUsage:
      "React and Next.js power the frontend with server-side API routes handling AI logic. Google Gemini AI drives sentiment analysis, empathetic chat, and weekly reflections. Tailwind CSS handles dark mode styling, and the Web Speech API enables voice journaling.",
    color: "from-emerald-500 to-teal-800",
    image: "/assets/Eunoia logo.png",
    deployUrl: "https://eunoia-ai.vercel.app/",
  },
  {
    id: "resumetruth-ai",
    title: "ResumeTruth AI",
    techLine: "Next.js, TypeScript, Tailwind CSS, Groq API, pdf-lib",
    description:
      "An AI-powered resume optimizer that analyzes your resume against any job description and gives you an honest assessment — with a hiring probability score, missing skills detection, full AI rewrite, annotated review mode, and cover letter generation.",
    techUsage:
      "Next.js App Router handles routing and server-side API logic. Groq API powers AI analysis, resume rewriting, and cover letter generation. Tailwind CSS and Shadcn UI provide the component library and responsive design.",
    color: "from-blue-600 to-purple-900",
    image: "/assets/ResumeTruth logo.png",
    deployUrl: "https://resumetruth-ai.vercel.app/",
  },
  {
    id: "lava-portfolio",
    title: "Lava Portfolio",
    techLine: "Next.js, React, TypeScript, Three.js, Tailwind CSS, Framer Motion",
    description:
      "A volcanic/lava-themed personal portfolio featuring 3D meteor particle effects, video backgrounds, scroll-triggered animations, and a fully responsive dark design.",
    techUsage:
      "Next.js handles routing and SSR. Three.js renders an instanced meteor shower particle system. Framer Motion powers scroll-triggered reveal animations. Tailwind CSS with custom theme tokens creates the lava color palette. Video backgrounds are layered with gradient fades for seamless transitions.",
    color: "from-orange-600 to-red-900",
    deployUrl: "current",
  },
  {
    id: "nebula-plan",
    title: "Nebula Plan",
    techLine: "React.js, Node.js, MySQL",
    description:
      "A platform for planning events, searching venues, and calculating finances using an integrated tool with real-time updates.",
    techUsage:
      "React.js handles the interactive frontend for event creation and venue search. Node.js powers the backend server for seamless front-end and server-side interactions. MySQL stores event data, venue information, and financial records with real-time query updates.",
    color: "from-violet-600 to-purple-900",
    demoVideo: "/assets/Nebula Demo.mp4",
  },
  {
    id: "bridger",
    title: "Bridger",
    techLine: "Django, Bootstrap, Python",
    description:
      "A community-focused web app aligned with AODA guidelines, helping users locate accessible venues with user authentication, location-based search, and a rewards point-tracking system.",
    techUsage:
      "Django powers the backend with user authentication and location-based venue search. Bootstrap provides a responsive, accessible frontend. Python handles the business logic for the rewards point-tracking system and AODA-compliant data processing.",
    color: "from-green-600 to-emerald-900",
    image: "/assets/Briger logo.png",
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline for Binary Calculator",
    techLine: "Jenkins, Helm, Kubernetes, GCP, GitHub, Maven",
    description:
      "A fully automated CI/CD pipeline that builds, tests, and deploys a binary calculator web app on Google Cloud Platform.",
    techUsage:
      "Jenkins orchestrates the pipeline stages. Helm manages Kubernetes deployments on GCP for container orchestration. GitHub webhooks trigger automated builds on each push. Maven handles dependency management, source tracking, and build automation.",
    color: "from-blue-600 to-indigo-900",
  },
  {
    id: "ml-evaluation",
    title: "Machine Learning Evaluation System",
    techLine: "Java, Python, NumPy, Pandas, Matplotlib, Maven, JUnit",
    description:
      "A program that evaluates machine learning models on CSV input data, calculating metrics such as MSE, MAE, AUC, F1-score, BCE, and Confusion Matrix.",
    techUsage:
      "Java handles the core evaluation logic and metric calculations. Python with NumPy and Pandas processes CSV data, while Matplotlib generates visualizations of model performance. Maven manages project dependencies, and JUnit provides unit testing for validation.",
    color: "from-rose-600 to-pink-900",
  },
  {
    id: "tasklet",
    title: "TaskLet",
    techLine: "HTML, CSS, JavaScript, MySQL, Bootstrap",
    description:
      "A dynamic web app that allows users to add, edit, delete, mark complete, and prioritize tasks with a responsive interface.",
    techUsage:
      "HTML and CSS structure the UI, with Bootstrap providing responsive design. JavaScript drives the interactive task management (add, edit, delete, prioritize, mark complete). MySQL handles persistent data storage for full-stack functionality.",
    color: "from-sky-600 to-blue-900",
    image: "/assets/TaskLet logo.png",
    demoVideo: "/assets/TaskLet Demo.mp4",
  },
];
