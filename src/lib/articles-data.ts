export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  snippet: string;
  body: string;
};

export const STUDY_ARTICLES: Article[] = [
  {
    id: "study-guide-1",
    slug: "effective-active-recall",
    title: "Active Recall Strategies for Examination Preparation",
    category: "Revision Strategy",
    readTime: "4 min",
    snippet: "Techniques for testing yourself with closed-book summaries and flashcard practice.",
    body: "Active recall is the process of retrieving information from memory without looking at notes. Research shows that testing yourself produces significantly stronger long-term retention than passive reading. Try writing out formulas or concept summaries from memory, then checking against your notes to highlight knowledge gaps."
  },
  {
    id: "study-guide-2",
    slug: "time-management-strategy",
    title: "Pacing and Time Management During Written Papers",
    category: "Exam Technique",
    readTime: "3 min",
    snippet: "How to allocate minutes per mark and avoid running out of time on calculation questions.",
    body: "Divide the total examination minutes by the total available marks to establish your baseline pace. For example, in an 80-mark, 75-minute paper, aim for slightly under one minute per mark. Do not spend excessive time on single-mark recall questions; star difficult problems and return to them during your final review."
  },
  {
    id: "study-guide-3",
    slug: "command-words-breakdown",
    title: "Understanding Directives: State, Describe, and Explain",
    category: "Mark Scheme Tips",
    readTime: "4 min",
    snippet: "How examiners allocate marks based on specific directive words.",
    body: "Directive words signal what examiners expect. 'State' requires a brief, factual answer without reasoning. 'Describe' asks for the characteristics or sequence of events. 'Explain' requires the underlying scientific or mathematical reason, typically linking causes to effects using connective phrases."
  },
  {
    id: "study-guide-4",
    slug: "numerical-error-prevention",
    title: "Avoiding Common Numerical and Unit Conversion Traps",
    category: "Problem Solving",
    readTime: "3 min",
    snippet: "Checklist for standard units, rounding rules, and showing intermediate working.",
    body: "Always verify your units before calculating. Ensure quantities are converted to standard units (such as seconds, meters, or kilograms) when substituting into formulas. Write each algebraic transformation clearly so partial credit can be awarded even if an arithmetic calculation error occurs."
  }
];
