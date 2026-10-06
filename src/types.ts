export type RoutePath = 'home' | 'features' | 'compatibility' | 'faq' | 'privacy' | 'terms';

export type Language = 'en' | 'es';

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'kodi' | 'playstore' | 'legal';
}
