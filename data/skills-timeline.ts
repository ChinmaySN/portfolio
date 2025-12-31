export interface Skill {
  name: string;
  proficiency: number; // 0-100
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
      { name: "Python", proficiency: 90, iconName: "Code", context: "ML pipelines, Flask APIs, data processing" },
      { name: "JavaScript / TypeScript", proficiency: 85, iconName: "Code", context: "React, Next.js, interactive UIs" },
      { name: "C++", proficiency: 75, iconName: "Code", context: "Performance-critical applications" },
      { name: "C", proficiency: 70, iconName: "Code", context: "Systems programming" },
      { name: "SQL", proficiency: 80, iconName: "Database", context: "Query optimization, database design" },
      { name: "Pine Script", proficiency: 95, iconName: "Code", context: "TradingView strategy development" },
      { name: "HTML / CSS", proficiency: 85, iconName: "Layout", context: "Modern responsive layouts" },
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "AI & data science",
    iconName: "Brain",
    color: "purple",
    skills: [
      { name: "Deep Learning", proficiency: 85, iconName: "Brain", context: "CNNs, model training, deployment" },
      { name: "Computer Vision", proficiency: 80, iconName: "Eye", context: "Image processing, object detection" },
      { name: "Model Training", proficiency: 85, iconName: "Zap", context: "Hyperparameter tuning, evaluation" },
      { name: "Data Analysis", proficiency: 85, iconName: "BarChart3", context: "Statistical insights, visualization" },
      { name: "PyTorch / TensorFlow", proficiency: 80, iconName: "Cpu", context: "Neural network frameworks" },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    description: "Full-stack development",
    iconName: "Globe",
    color: "green",
    skills: [
      { name: "React / Next.js", proficiency: 85, iconName: "Layers", context: "Server-side rendering, static sites" },
      { name: "Flask APIs", proficiency: 85, iconName: "Server", context: "RESTful services, microservices" },
      { name: "Tailwind CSS", proficiency: 90, iconName: "Palette", context: "Utility-first styling" },
      { name: "Database Design", proficiency: 80, iconName: "Database", context: "Schema optimization, indexing" },
    ],
  },
  {
    id: 4,
    title: "Trading",
    description: "Algorithmic trading & analysis",
    iconName: "TrendingUp",
    color: "orange",
    skills: [
      { name: "Pine Script", proficiency: 95, iconName: "Code", context: "Expert-level strategy development" },
      { name: "Backtesting", proficiency: 95, iconName: "LineChart", context: "Performance validation, optimization" },
      { name: "Technical Analysis", proficiency: 90, iconName: "TrendingUp", context: "Indicators, pattern recognition" },
      { name: "TradingView", proficiency: 95, iconName: "BarChart3", context: "Platform expertise, custom tools" },
      { name: "Strategy Development", proficiency: 90, iconName: "Target", context: "Algorithmic trading systems" },
    ],
  },
  {
    id: 5,
    title: "Automation",
    description: "Workflow automation & integration",
    iconName: "Workflow",
    color: "cyan",
    skills: [
      { name: "n8n Workflows", proficiency: 85, iconName: "Workflow", context: "Complex automation pipelines" },
      { name: "API Integration", proficiency: 85, iconName: "BotMessageSquare", context: "Third-party services, webhooks" },
      { name: "WhatsApp API", proficiency: 80, iconName: "MessageSquare", context: "Business messaging automation" },
      { name: "Webhooks", proficiency: 85, iconName: "Webhook", context: "Event-driven integrations" },
      { name: "Process Automation", proficiency: 80, iconName: "Cog", context: "Workflow optimization" },
    ],
  },
  {
    id: 6,
    title: "Tools & DevOps",
    description: "Development tools & practices",
    iconName: "Wrench",
    color: "gray",
    skills: [
      { name: "Git / GitHub", proficiency: 90, iconName: "GitBranch", context: "Version control, collaboration" },
      { name: "VS Code", proficiency: 90, iconName: "Code", context: "Development environment setup" },
    ],
  },
];
