interface SurveyQuestion {
  question: string;
  type: string;
  id: string;
  placeholder: string;
  options?: string[]; // options are only required for select inputs
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    question: "What is the size of your company?",
    type: "select",
    id: "company",
    placeholder: "Choose your company size",
    options: [
      "1-10 employees",
      "11-50 employees",
      "51-200 employees",
      "> 200 employees",
    ],
  },
  {
    question: "What industry does your company operate in?",
    type: "select",
    id: "industry",
    placeholder: "Choose your company industry",
    options: [
      "Technology",
      "Retail",
      "Healthcare",
      "Finance",
      "Education",
      "Manufacturing",
      "Real Estate",
      "Non-Profit",
    ],
  },
  {
    question: "What is your role in the company?",
    type: "select",
    id: "role",
    placeholder: "Choose your role in the company",
    options: [
      "Founder / CEO",
      "CTO / Technical Lead",
      "Product Manager",
      "Marketing / Sales",
      "Customer Support Manager",
      "IT / Systems Administrator",
      "Other (please specify)",
    ],
  },
  {
    question: "What is your primary objective for using a chatbot?",
    type: "select",
    id: "objective",
    placeholder: "Choose your objective for using a chatbot",
    options: [
      "Improve customer support",
      "Automate lead generation and sales",
      "Provide information and FAQs to customers",
      "Handle internal team communication",
      "Other (please specify)",
    ],
  },
  {
    question: "How did you hear about Deskbox?",
    type: "select",
    id: "about",
    placeholder: "Choose how you heard about Deskbox",
    options: ["X (Twitter)", "LinkedIn", "Google", "Referral", "Reddit"],
  },
];
