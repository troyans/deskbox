export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  paymentProvider: string;
  lemonSqueezy?: {
    buyLink?: string;
  };
  stripe?: {
    lineItems?: {
      price: string;
      quantity: number;
    }[];
  };
}
