import { Profile } from "./profile";

export type QuestionOption = {

  id: string;

  label: string;

  profile?: Partial<Profile>;

};

export type CompanyQuestion = {

  id: string;

  question: string;

  options: QuestionOption[];

};
