export type TestimonialType = {
  id: number;
  img: string;
  name: string;
  company: string;
  testimony: string;
};

export type CourseType = {
  id: number;
  img: string;
  category: string;
  title: string;
  slug: string;
  course: number;
  duration: string;
  fee: number;
};

export type TeamType = {
  id: number;
  img: string;
  socials: {
    url: string;
    socialMedia: string;
  }[];
  name: string;
  role: string;
  course: number;
  students: number;
  slug: string;
};

export type PricingType = {
  id: number;
  plan: string;
  price: number;
  features: string[];
  best?: boolean;
};

export type FaqType = {
  id: number;
  question: string;
  answer: string;
};

export type BlogType = {
  id: number;
  img: string;
  date: string;
  category: string;
  title: string;
  slug: string;
};
