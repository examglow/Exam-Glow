export type BulletGroup = {
  subTitle?: string;
  bullets: string[];
};

export type SubHeading = {
  title: string;
  body: string;
  groups: BulletGroup[];
  examinerTips?: string[]; // how to approach questions, structure answers, what examiners look for
  commonMistakes?: string[]; // frequent errors, why students make them, how to avoid them
  recap?: string[]; // Cambridge-style exam questions for this section
};

export type Chapter = {
  number: number;
  title: string;
  intro: string;
  subheadings: SubHeading[];
};

export type SubjectNotes = {
  id: string;
  name: string;
  code: string;
  color: string;
  chapters: Chapter[];
};
