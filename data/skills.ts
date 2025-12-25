/**
 * Skills data grouped by category.
 * Each category contains a list of skill items with proficiency indication.
 */

export interface SkillItem {
  name: string;
  proficiency: 'expert' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', proficiency: 'expert' },
      { name: 'CSS', proficiency: 'expert' },
      { name: 'JavaScript', proficiency: 'proficient' },
      { name: 'Flask', proficiency: 'proficient' },
      { name: 'React', proficiency: 'familiar' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', proficiency: 'proficient' },
      { name: 'Backend Development', proficiency: 'proficient' },
      { name: 'User Authentication & Forms', proficiency: 'proficient' },
      { name: 'SQL', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    items: [
      { name: 'Machine Learning', proficiency: 'proficient' },
      { name: 'Deep Learning (CNNs)', proficiency: 'proficient' },
      { name: 'Computer Vision', proficiency: 'proficient' },
      { name: 'Data Analysis', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Algorithmic Trading',
    items: [
      { name: 'Pine Script', proficiency: 'expert' },
      { name: 'Strategy Backtesting', proficiency: 'expert' },
      { name: 'Technical Analysis', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Automation & Integrations',
    items: [
      { name: 'n8n', proficiency: 'proficient' },
      { name: 'WhatsApp API Integration', proficiency: 'proficient' },
      { name: 'API Integration', proficiency: 'proficient' },
      { name: 'Map Integration', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', proficiency: 'proficient' },
      { name: 'Google Colab', proficiency: 'proficient' },
      { name: 'TradingView', proficiency: 'expert' },
      { name: 'VS Code', proficiency: 'expert' },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', proficiency: 'proficient' },
      { name: 'JavaScript', proficiency: 'proficient' },
      { name: 'SQL', proficiency: 'proficient' },
      { name: 'Pine Script', proficiency: 'expert' },
      { name: 'Java', proficiency: 'familiar' },
      { name: 'C', proficiency: 'familiar' },
      { name: 'C++', proficiency: 'familiar' },
    ],
  },
];
