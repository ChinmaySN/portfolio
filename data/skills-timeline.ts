export interface Skill {
  name: string;
  proficiency: "Expert" | "Proficient" | "Intermediate";
  iconName: string;
  context?: string; // Optional short context for recruiter clarity
}

export interface CategoryItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
  color: string; // For visual distinction
}

/**
 * Primary stack summary - visible without interaction
 * Critical for recruiters scanning quickly
 */
export const primaryStack = [
  "Python",
  "React/Next.js", 
  "Flask",
  "Deep Learning",
  "Pine Script",
  "n8n",
  "Git"
];

/**
 * Skills organized by category for cleaner orbital visualization
 */
export const skillCategories: CategoryItem[] = [
  {
    id: 1,
    title: "Languages",
    description: "Programming languages & frameworks",
    iconName: "Code",
    color: "blue",
    skills: [
      { name: "Python", proficiency: "Expert", iconName: "Code", context: "ML pipelines, Flask APIs, data processing" },
      { name: "JavaScript / TypeScript", proficiency: "Proficient", iconName: "Code", context: "React, Next.js, interactive UIs" },
      { name: "C++", proficiency: "Proficient", iconName: "Code", context: "Performance-critical applications" },
      { name: "C", proficiency: "Intermediate", iconName: "Code", context: "Systems programming" },
      { name: "SQL", proficiency: "Proficient", iconName: "Database", context: "Query optimization, database design" },
      { name: "HTML / CSS", proficiency: "Proficient", iconName: "Layout", context: "Modern responsive layouts" },
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "AI & data science",
    iconName: "Brain",
    color: "purple",
    skills: [
      { name: "Deep Learning", proficiency: "Proficient", iconName: "Brain", context: "CNNs, model training, deployment" },
      { name: "Model Training", proficiency: "Proficient", iconName: "Zap", context: "Hyperparameter tuning, evaluation" },
      { name: "Data Analysis", proficiency: "Proficient", iconName: "BarChart3", context: "Statistical insights, visualization" },
      { name: "PyTorch / TensorFlow", proficiency: "Proficient", iconName: "Cpu", context: "Neural network frameworks" },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    description: "Full-stack development",
    iconName: "Globe",
    color: "green",
    skills: [
      { name: "React / Next.js", proficiency: "Proficient", iconName: "Layers", context: "Server-side rendering, static sites" },
      { name: "Flask APIs", proficiency: "Proficient", iconName: "Server", context: "RESTful services, microservices" },
      { name: "Tailwind CSS", proficiency: "Expert", iconName: "Palette", context: "Utility-first styling" },
      { name: "Database Design", proficiency: "Proficient", iconName: "Database", context: "Schema optimization, indexing" },
    ],
  },
  {
    id: 4,
    title: "Trading",
    description: "Algorithmic trading & analysis",
    iconName: "TrendingUp",
    color: "orange",
    skills: [
      { name: "Pine Script", proficiency: "Expert", iconName: "Code", context: "Expert-level strategy development" },
      { name: "Backtesting", proficiency: "Expert", iconName: "LineChart", context: "Performance validation, optimization" },
      { name: "Technical Analysis", proficiency: "Expert", iconName: "TrendingUp", context: "Indicators, pattern recognition" },
      { name: "TradingView", proficiency: "Expert", iconName: "BarChart3", context: "Platform expertise, custom tools" },
      { name: "Strategy Development", proficiency: "Expert", iconName: "Target", context: "Algorithmic trading systems" },
    ],
  },
  {
    id: 5,
    title: "Automation",
    description: "Workflow automation & integration",
    iconName: "Workflow",
    color: "cyan",
    skills: [
      { name: "n8n Workflows", proficiency: "Proficient", iconName: "Workflow", context: "Complex automation pipelines" },
      { name: "API Integration", proficiency: "Proficient", iconName: "BotMessageSquare", context: "Third-party services, webhooks" },
      { name: "WhatsApp API", proficiency: "Proficient", iconName: "MessageSquare", context: "Business messaging automation" },
      { name: "Webhooks", proficiency: "Proficient", iconName: "Webhook", context: "Event-driven integrations" },
      { name: "Process Automation", proficiency: "Proficient", iconName: "Cog", context: "Workflow optimization" },
    ],
  },
  {
    id: 6,
    title: "Tools & DevOps",
    description: "Development tools & practices",
    iconName: "Wrench",
    color: "gray",
    skills: [
      { name: "Git / GitHub", proficiency: "Expert", iconName: "GitBranch", context: "Version control, collaboration" },
      { name: "VS Code", proficiency: "Expert", iconName: "Code", context: "Development environment setup" },
    ],
  },
];
