export interface Project {
  id: string;
  title: string;
  techLine: string;
  description: string;
  techUsage: string;
  color: string; // gradient placeholder color
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "CloudSync Dashboard",
    techLine: "React, TypeScript, Node.js, PostgreSQL, WebSocket, Docker",
    description:
      "A full-stack dashboard for monitoring cloud infrastructure in real time with live metrics, alerting, and interactive visualizations across multiple regions.",
    techUsage:
      "React and TypeScript power the interactive frontend with real-time charts. Node.js with WebSocket handles live data streaming, PostgreSQL stores historical metrics, and Docker containerizes all services.",
    color: "from-orange-600 to-red-800",
  },
  {
    id: "project-2",
    title: "EcoTrack",
    techLine: "Next.js, Tailwind CSS, Python, FastAPI, MongoDB",
    description:
      "A mobile-first web app that helps users track and reduce their carbon footprint by integrating with transportation and utility APIs.",
    techUsage:
      "Next.js provides SSR for fast page loads, styled with Tailwind CSS. FastAPI (Python) handles backend logic and API aggregation, with MongoDB for flexible document storage of user data.",
    color: "from-emerald-600 to-teal-900",
  },
  {
    id: "project-3",
    title: "DevCollab",
    techLine: "React, TypeScript, Express, Redis, Socket.io",
    description:
      "A collaborative code editor supporting real-time multi-user editing with syntax highlighting, live cursors, and integrated chat.",
    techUsage:
      "React with TypeScript drives the editor UI. Express and Socket.io handle real-time collaboration via operational transformation, and Redis manages session state and pub/sub between instances.",
    color: "from-violet-600 to-purple-900",
  },
  {
    id: "project-4",
    title: "HealthPulse API",
    techLine: "Go, gRPC, PostgreSQL, Kubernetes, Terraform",
    description:
      "A RESTful API platform that aggregates and normalizes healthcare data from multiple sources with FHIR compliance and role-based access control.",
    techUsage:
      "Go provides high-performance API handling with gRPC for inter-service communication. PostgreSQL stores normalized data, Kubernetes orchestrates microservices, and Terraform manages infrastructure as code.",
    color: "from-blue-600 to-indigo-900",
  },
  {
    id: "project-5",
    title: "PixelForge",
    techLine: "Python, PyTorch, FastAPI, AWS Lambda, S3, Docker",
    description:
      "An image processing pipeline leveraging ML models for automatic enhancement, background removal, and style transfer at scale.",
    techUsage:
      "PyTorch handles ML inference for image processing. FastAPI serves the API layer, AWS Lambda enables serverless scaling, S3 stores processed images, and Docker packages the ML models for deployment.",
    color: "from-amber-500 to-orange-900",
  },
];
