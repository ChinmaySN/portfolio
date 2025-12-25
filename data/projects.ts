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
}

export const projects: Project[] = [
  {
    id: 'breast-cancer-cnn',
    title: 'Breast Cancer Classification using CNN',
    problem:
      'Manual examination of histopathology images is time-consuming and prone to human error, especially when identifying early-stage breast cancer.',
    approach:
      'Built a Convolutional Neural Network (CNN) to classify breast cancer histology images as benign or malignant. Used the IDC_regular_ps50_idx5 dataset, organized by patient folders with labeled classes. Handled preprocessing, normalization, train–test split, and model evaluation using accuracy and loss metrics.',
    outcome:
      'Achieved strong classification accuracy and a reliable model capable of automatically detecting cancerous patterns from medical images. Strengthened understanding of deep learning, image-based classification, and real-world ML pipelines.',
    tags: ['Python', 'CNN', 'Deep Learning', 'TensorFlow', 'Keras', 'scikit-learn'],
  },
  {
    id: 'insurance-prediction',
    title: 'Customer Insurance Purchase Prediction',
    problem:
      'Insurance companies struggle to identify which customers are most likely to purchase insurance, leading to inefficient marketing efforts.',
    approach:
      'Performed exploratory data analysis and built multiple classification models to predict insurance purchase behavior. Compared algorithms such as Logistic Regression, Decision Trees, and other classifiers to evaluate performance and suitability.',
    outcome:
      'Developed a comparative analysis highlighting the most effective model for prediction. Demonstrated how data-driven decisions can improve customer targeting and conversion rates.',
    tags: [
      'Python',
      'Machine Learning',
      'Classification',
      'Pandas',
      'Scikit-learn',
      'Data Analysis',
    ],
  },
  {
    id: 'trading-strategies',
    title: 'Algorithmic Trading Strategies on TradingView',
    problem:
      'Retail traders often rely on emotional decision-making and inconsistent rule-based trading.',
    approach:
      'Designed and implemented 50+ trading strategies using Pine Script on TradingView. Strategies include rule-based entries, exits, stop-losses, trailing stops, Gann levels, and multi-condition logic. Focused on flexibility, parameterization, and backtesting for real-market scenarios.',
    outcome:
      'Created a reusable strategy library that supports systematic trading and backtesting. Significantly improved skills in market logic, scripting, and strategy optimization.',
    tags: [
      'Pine Script',
      'TradingView',
      'Algorithmic Trading',
      'Technical Analysis',
      'Backtesting',
    ],
  },
  {
    id: 'aarambhgann-website',
    title: 'AarambhGann.com – Client Website with Automation & WhatsApp Integration',
    problem:
      'Client needed a professional public-facing website to promote courses, collect user details, and handle monthly content updates, while keeping user communication fast and frictionless.',
    approach:
      'Built the website end-to-end covering frontend, backend, and integrations. Implemented user registration forms, WhatsApp API integration for instant communication, and map integration for location clarity. Set up n8n automation to update monthly transit-related content automatically.',
    outcome:
      "Delivered a fully functional live website acting as the client's primary online presence. Enabled seamless user registration, faster user communication via WhatsApp, and automated monthly updates. Solution improved operational efficiency while providing a scalable foundation for future features.",
    tags: [
      'Web Development',
      'HTML',
      'CSS',
      'JavaScript',
      'Backend',
      'Database',
      'n8n',
      'Automation',
      'WhatsApp API',
      'Map Integration',
    ],
  },
];
