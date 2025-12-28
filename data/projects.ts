/**
 * Project data with fully typed structure.
 * Each project must have: id, title, problem, approach, outcome, and tags.
 */

export interface Project {
  id: string;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  /** Optional live link for external proof. */
  link?: string;
  /** Optional list of proof images served from /public for credibility. */
  proofImages?: string[];
}

export const projects: Project[] = [
  {
    id: 'breast-cancer-webapp',
    title: 'Breast Cancer Detection Web App',
    problem:
      'Clinicians need quick, reliable support to flag potential breast cancer cases from image inputs without heavy local compute.',
    approach:
      'Built an end-to-end ML + web app that serves a trained model for classifying breast cancer images. Implemented clean upload flow, server-side inference, and clear result messaging.',
    outcome:
      'Deployed a usable web experience that demonstrates the model in a real setting and validates the workflow for clinical decision support.',
    tags: ['ML', 'Web App', 'Python', 'React', 'Deployment'],
    link: 'https://cancer-detection-webapp.onrender.com/',
    proofImages: ['/cancer.png'],
  },
  {
    id: 'insurance-site',
    title: 'Insurance Website',
    problem: 'Prospective customers need to explore plans and request quotes without friction.',
    approach:
      'Built a responsive marketing site with clear plan highlights, quote request entry points, and trust-building layout choices. Kept navigation and CTAs straightforward for conversions.',
    outcome:
      'Live site that demonstrates the offering and collects leads reliably, showcasing full-stack delivery capability.',
    tags: ['Next.js', 'Tailwind', 'Frontend'],
    link: 'https://insurance-website-two.vercel.app/',
    proofImages: ['/insurance.png'],
  },
  {
    id: 'aarambh-gann',
    title: 'Aarambh Gann',
    problem: 'Traders need a reliable Gann-based system with accessible guidance and updates.',
    approach:
      'Delivered a production site explaining the Gann-based offering, with clear structure for resources and client-facing updates.',
    outcome:
      'Live website that anchors the brand online and provides immediate credibility for the trading system.',
    tags: ['Web', 'Trading', 'Production'],
    link: 'https://aarambhgann.com/',
    proofImages: ['/aarambh.png'],
  },
  {
    id: 'algo-trading-proof',
    title: 'Algorithmic Trading Strategies',
    problem: 'Retail traders need systematic entries/exits validated against market data instead of ad-hoc decisions.',
    approach:
      'Designed and tested rule-based TradingView strategies with disciplined entries, exits, and risk controls. Documented results with chart evidence to show robustness.',
    outcome:
      'Library of validated strategies with proof visuals that demonstrate discipline and repeatability for traders.',
    tags: ['TradingView', 'Pine Script', 'Backtesting'],
    proofImages: ['/algo1.jpg', '/algo2.jpg'],
  },
];
