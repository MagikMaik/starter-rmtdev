export type JobItem = {
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
};

export type JobItemExtended = JobItem & {
  description: string;
  qualifications: string[];
  reviews: number[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};
