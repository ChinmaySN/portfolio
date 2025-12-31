/**
 * Skills data grouped by capability and purpose.
 * 
 * Grouping Strategy:
 * - "Build" → Core technical skills for creating systems
 * - "Analyze" → Data, ML, and analytical capabilities  
 * - "Trade" → Trading systems and market analysis
 * - "Automate" → Integration and workflow automation
 * 
 * Each group is intentionally curated for signal over quantity.
 * Proficiency is shown subtly (dot color) to avoid gamification.
 */

export interface SkillItem {
  name: string;
  proficiency: 'expert' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  category: string;
  description?: string; // Optional context for the capability
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Build',
    description: 'Web applications and backend systems',
    items: [
      { name: 'Python', proficiency: 'proficient' },
      { name: 'JavaScript / React', proficiency: 'proficient' },
      { name: 'Flask / Backend APIs', proficiency: 'proficient' },
      { name: 'SQL Databases', proficiency: 'proficient' },
      { name: 'HTML / CSS', proficiency: 'expert' },
    ],
  },
  {
    category: 'Analyze',
    description: 'Machine learning and data systems',
    items: [
      { name: 'Machine Learning', proficiency: 'proficient' },
      { name: 'Deep Learning (CNNs)', proficiency: 'proficient' },
      { name: 'Data Analysis', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Trade',
    description: 'Algorithmic trading and market analysis',
    items: [
      { name: 'Pine Script', proficiency: 'expert' },
      { name: 'Strategy Backtesting', proficiency: 'expert' },
      { name: 'Technical Analysis', proficiency: 'proficient' },
      { name: 'TradingView Platform', proficiency: 'expert' },
    ],
  },
  {
    category: 'Automate',
    description: 'Integrations and workflow automation',
    items: [
      { name: 'n8n Workflows', proficiency: 'proficient' },
      { name: 'API Integration', proficiency: 'proficient' },
      { name: 'WhatsApp Business API', proficiency: 'proficient' },
      { name: 'Git / GitHub', proficiency: 'proficient' },
    ],
  },
];
