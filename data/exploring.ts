/**
 * Currently exploring: topics, technologies, and areas of interest.
 */

export interface ExploringItem {
  label: string;
  description?: string;
}

export const exploring: ExploringItem[] = [
  {
    label: 'AI & Machine Learning',
    description:
      'Deepening understanding of model optimization, evaluation techniques, and applying ML to real-world problem statements beyond textbook datasets.',
  },
  {
    label: 'Algorithmic Trading Systems',
    description:
      'Exploring more advanced, rule-driven trading logic, multi-condition strategies, and improving robustness through better backtesting and execution logic.',
  },
  {
    label: 'Full-Stack Web Development',
    description:
      'Improving backend design patterns, cleaner API structures, and building more scalable, production-ready web applications using Flask.',
  },
  {
    label: 'Automation & No-Code Workflows',
    description:
      'Experimenting with more complex n8n workflows, triggers, and integrations to automate repetitive business processes.',
  },
  {
    label: 'System Design (Beginner Level)',
    description:
      'Learning how real-world systems are structured — APIs, databases, and flow between frontend, backend, and automation layers.',
  },
];
