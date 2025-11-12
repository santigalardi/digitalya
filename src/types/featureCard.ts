import { IconType } from 'react-icons';

export interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  link?: string;
  tag?: string;
  hideButton?: boolean;
}
