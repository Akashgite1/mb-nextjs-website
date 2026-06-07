export interface PricingPlan {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  featured?: boolean;
}