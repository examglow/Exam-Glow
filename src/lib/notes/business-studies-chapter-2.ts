import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelHiring = imagePanel(IMG, [
  {
    src: "bus2-interview-panel.webp",
    alt: "Two managers seated behind a table with printed application forms and notebooks, interviewing a nervous young applicant in a chair on the other side of a bright meeting room",
    caption: "Selection: shortlist, interview, check references, appoint",
  },
  {
    src: "bus2-induction-training.webp",
    alt: "A new employee in a clean uniform being shown the controls of a machine by an experienced worker beside her, both looking at the panel in a well-lit workshop",
    caption: "Induction and on-the-job training cost little in classroom time",
  },
]);

const panelStructure = imagePanel(IMG, [
  {
    src: "bus2-org-chart-tall-flat.webp",
    alt: "A whiteboard with two hand-drawn organisation charts side by side, the left one a narrow tall pyramid of many boxes and the right one a wide flat shape of few boxes, marker pens resting on the tray",
    caption: "Tall: many levels, short span. Flat: few levels, wide span",
  },
  {
    src: "bus2-span-of-control.webp",
    alt: "A supervisor on a warehouse walkway holding a clipboard while addressing a long line of eight workers at their stations below, forks trucks parked alongside",
    caption: "Span of control is how many staff one manager directs",
  },
]);

const panelMotivation = imagePanel(IMG, [
  {
    src: "bus2-maslow-pyramid.webp",
    alt: "A five-tier pyramid hand-drawn in coloured pencils on a training-room wall chart, each tier labelled in neat handwriting, with a manager pointing to the middle band",
    caption: "Maslow: lower needs must be met before higher ones motivate",
  },
  {
    src: "bus2-piece-rate-board.webp",
    alt: "A factory time-and-rate board beside a machine showing units produced and pay earned, with a worker clipping a tally card to the frame",
    caption: "Pay systems trade security against effort",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "People in Business",
  intro: `Human resource questions are the friendliest marks in Paper 1, because almost every one asks for an **advantage**, a **disadvantage**, and a **recommendation for the business named**.\n\nThe recommendation is where students lose marks. Choose one answer, justify it with a fact from the case, and say who it affects.`,
  subheadings: [
    {
      title: "2.1 Human resource management (HRM)",
      body: `### Getting the Right Person into the Right Job

**Human resource management (HRM)** is the process of **recruiting, selecting, training, appraising and motivating** the workforce a business needs.

The recruitment process runs in order: a **job description** (the title, duties, tasks, pay and reporting line of the **job**), then a **person specification** (the skills, qualifications, experience and personal qualities of the **person**), then the **job advertisement**.`,
      figure: panelHiring,
      groups: [
        {
          subTitle: "Where to advertise and how to choose",
          bullets: [
            "**Advertising channels**: the firm's own website and noticeboard, **online job sites and recruitment apps**, national and local newspapers, and **employment agencies** that supply workers for a fee.",
            "**Selection methods**: **CV or resumé** (past jobs, skills and education), **application form** (same answers from everyone, easy to compare), **references** (a former employer confirms reliability), **testing and assessment centres** (practical or psychometric tasks under observation), and **interviews** (face-to-face judgement of personality and suitability).",
            "**Internal recruitment** — filling the vacancy from existing staff. Advantages: **fast and cheap**, the candidate is **already known and trained**, raises morale and loyalty, no induction needed. Disadvantages: **limits fresh ideas**, causes **resentment** among those turned down, may leave the old post vacant, and internal candidates may need training anyway.",
            "**External recruitment** — advertising outside the business. Advantages: a **wider choice** and new skills or experience, and no gap left elsewhere in the firm. Disadvantages: **expensive advertising and agency fees**, **induction and training time**, unknown ability, and existing staff may feel **blocked from promotion**.",
            "**Recommend who to employ**: pick the candidate whose **stated strengths match the person specification**, cite one **weakness of the other**, and add a consequence for the business, such as less training time or lower risk to sales.",
          ],
        },
        {
          subTitle: "Contracts and legal controls",
          bullets: [
            "The **main contents of an employment contract**: **duties and responsibilities**, **working hours**, **holiday entitlement**, and **sick pay** — plus pay rate, notice period and place of work.",
            "**Benefits of a written contract**: the employer gets **clear expectations and legal protection**, the employee gets **security and known terms**, and **disputes are easier to settle** because the agreement exists in writing.",
            "**Legal controls over employment**: laws on **unfair dismissal** (a worker cannot be sacked without a valid reason and a fair process), **discrimination** (equal treatment regardless of age, gender, race, religion, disability or sexuality), **health and safety** (safe machines, training, protective equipment), and the **legal minimum wage**.",
            "**Effects on employers**: higher **costs** for equipment, training and pay, **paperwork and procedures**, possible **fines or compensation** if breached — but also fewer accidents and better reputation. **Effects on employees**: **job security**, **protection from bias**, **guaranteed minimum pay**, and safer working conditions.",
          ],
        },
        {
          subTitle: "Training — three types, three trade-offs",
          bullets: [
            "**Training** is teaching workers the skills they need. It matters to the business through **higher productivity and quality, fewer accidents and wastage, less supervision, and lower labour turnover**, and to employees through **confidence, job satisfaction and promotion prospects**.",
            "**Induction training** — at the start of the job: layout, rules, safety, colleagues and paperwork. Quick to arrange and makes a new worker useful early, but takes time from experienced staff and information is **easily forgotten**.",
            "**On-the-job training** — learning while working, at the real workplace, using real machines. **Cheapest** (no course fees), job-relevant and productive from day one; but it **disrupts output**, passes on **bad habits** from the trainer, and quality may suffer while learning.",
            "**Off-the-job training** — a college or external course away from work. **Fresh expertise**, no disruption to the line and time to think; but **fees, travel and lost working hours**, and skills may not transfer back to the shop floor.",
          ],
        },
      ],
    },
    {
      title: "2.2 Organisation and management",
      body: `### Functions, Levels and Commands

The **main functional areas** of a business are **operations** (making the product), **marketing** (research, price, promotion, sales), **finance** (cash, records, payroll) and **human resources** (recruiting, training, pay and conditions).

**Chain of command** is the line of authority along which instructions pass from the top to the bottom. **Span of control** is the number of subordinates one manager is responsible for.`,
      figure: panelStructure,
      groups: [
        {
          subTitle: "Tall, flat, and the way work is arranged",
          bullets: [
            "A **tall structure** has **many levels of hierarchy**, a **long chain of command** and a **narrow span of control**. Advantages: close supervision, clear promotion paths, and each manager handles few staff. Disadvantages: **slow communication**, many **expensive managers**, decisions stuck at the top, and junior staff feel distant from leadership.",
            "A **flat structure** has **few levels**, a **short chain of command** and a **wide span of control**. Advantages: **faster communication**, staff initiative, cheaper because fewer managers. Disadvantages: managers can be **overloaded**, promotion opportunities are few, and mistakes are more likely without close supervision.",
            "**Reading an organisational chart**: boxes are jobs, lines are authority. Count the **levels** for hierarchy, count the boxes **under one manager** for span of control, and follow the **top-to-bottom route** for the chain of command.",
            "**Flexible working** includes **home working** and **flexible hours** (choosing start and finish times). It cuts travel and premises costs and helps staff balance home life, but weakens supervision, team contact and sometimes the boundary between work and rest. **Part-time** staff cost less and cover peaks; **full-time** staff give continuity, more training value and loyalty, but a fixed wage bill.",
          ],
        },
        {
          subTitle: "The five functions of management, and delegation",
          bullets: [
            "**Planning** — setting objectives and deciding how to reach them. **Organising** — arranging resources and people to do the work. **Coordinating** — making the functions and teams work together. **Commanding** — leading and instructing employees. **Controlling** — measuring performance against plan and correcting it.",
            "**Delegation** is giving a subordinate **the authority and responsibility** to complete a task, while the manager stays answerable for the result.",
            "**Advantages of delegation**: the manager is **free to concentrate on bigger decisions**, work gets done faster, staff gain **skills, confidence and motivation**, and the business can grow. **Disadvantages**: staff may feel **overloaded or set up to fail**, work may be done **less well**, poor delegation is resented as **dumping**, and the manager **loses direct control**.",
          ],
        },
        {
          subTitle: "Leadership styles",
          bullets: [
            "**Autocratic** — the leader **makes all decisions** and issues instructions. Works in a **crisis, with unskilled or new staff, or when speed matters**. Brings quick decisions and clear control, but **low morale, no new ideas from below, resentment**, and the business stalls when the leader is absent.",
            "**Democratic** — the leader **consults the team** before deciding. Produces **committed, motivated staff and better ideas**, and suits skilled workers; it is **slower** and can look like indecision, and staff may feel consulted but ignored.",
            "**Laissez-faire** — the leader gives **full freedom** and steps back. Excellent with **experts and creative teams** who need independence; with anyone else it causes **no direction, missed deadlines, poor discipline** and a blame culture.",
            "**Recommend a style** from three facts in the case: the **skill and experience of the staff**, the **time available** to decide, and the **type of business or crisis**. Say why the other styles fit worse.",
          ],
        },
        {
          subTitle: "Downsizing, redundancy and trade unions",
          bullets: [
            "**Downsizing** is a deliberate reduction in the size of the workforce or the number of management levels, to **cut costs and improve efficiency**.",
            "**Reasons for reducing the workforce**: **automation and new technology** replacing manual tasks, **reduced demand** for the product, a **need to lower costs** to stay competitive, a **recession**, **closure of a site or department**, outsourcing, or a **merger** where two firms employ the same roles once.",
            "**Redundancy** is when a job **no longer exists** — the employee loses the work, not the fault. **Effects**: higher **severance pay** and possible **tribunal claims**, lower morale and higher stress for those who stay, loss of skills and experience, but **lower wage costs** and a leaner structure. Remaining staff often take on more work, so productivity per head may rise.",
            "**A trade union** is an **association of employees** that acts together to protect and improve its members' pay, conditions and job security. **Benefits to members**: **stronger bargaining power** than any individual, representation in disputes, protection against **unfair treatment and dismissal**, and help with training and safety.",
          ],
        },
      ],
    },
    {
      title: "2.3 Methods of communication",
      body: `### Passing the Message — and Where It Goes Wrong

**Communication** is the transmission of information, instructions or ideas between people. A business cannot plan, coordinate, motivate or sell without it, so failure here shows up as **wasted stock, missed deadlines, complaints and accidents**.

Communication runs **internal** (between employees, managers and owners) and **external** (with customers, suppliers, banks, government and the community).`,
      groups: [
        {
          subTitle: "Choose the method from the message",
          bullets: [
            "**Face-to-face or virtual meetings** — best for discussion, complex or sensitive issues; instant feedback, but time-consuming and hard to record precisely.",
            "**Email** — fast, cheap, written record, can reach many people at once; but no tone, risk of being unread or misinterpreted, and overload.",
            "**Text messages** — instant and short for operational updates; unsuitable for detail, easily ignored, and informal for serious matters.",
            "**Social media** — excellent for reaching customers and building a brand quickly and cheaply; but messages become **public**, can be misread, and negative replies spread fast.",
            "**Phone or mobile calls** — instant, personal, allows questions and tone; no written record and expensive across countries.",
            "**Letters** — formal, legal evidence, personal for complaints or offers; **slow** and costly to send.",
            "**Posters and noticeboards** — free, one-to-many, good for staff notices in one site; only seen by people who walk past, no feedback, and easily out of date.",
            "**Recommend a method** by matching four tests: how **urgent**, how **long or complex**, whether a **record is needed**, and whether the readers are **internal or external and where they are**.",
          ],
        },
        {
          subTitle: "Barriers — causes, problems and cures",
          bullets: [
            "**Examples of barriers**: **noise** on a factory floor, **language differences**, **technical jargon**, **distance between sites**, **information overload**, **poor listening**, **emotion or stress**, **fear of a manager**, **cultural differences**, a **long chain of command** filtering the message, and **technology failure** or illegible handwriting.",
            "**Why barriers arise**: the sender is **unclear, rushed or assumes shared knowledge**; the receiver is **distracted, uninterested or lacks the background**; the **channel is wrong** for the message; and there is **no feedback** to catch the mistake.",
            "**Problems caused**: orders made wrong, **accidents and safety risks**, duplicated or delayed work, staff anxiety and rumours, **customer complaints**, and lost sales.",
            "**How to reduce or remove them**: use **simple, short, jargon-free language**, **confirm understanding and ask for feedback**, choose a **quieter or better channel**, **repeat important instructions in writing**, translate or use pictures, keep the **chain of command short**, train staff in listening, and **talk face-to-face for sensitive news**.",
          ],
        },
      ],
    },
    {
      title: "2.4 Motivating employees",
      body: `### Why People Work and What Keeps Them Working

**Motivation** is the **willingness to work towards goals**, and a motivated workforce works **harder, better and for longer**.

People work for **money**, of course, but also for **survival and security, to meet social needs, for status and recognition, for satisfaction from the work itself, and to achieve something**.`,
      figure: panelMotivation,
      groups: [
        {
          subTitle: "The benefits examiners want listed",
          bullets: [
            "**Improved labour productivity** — each worker produces more per hour, so unit costs fall.",
            "**Reduced absenteeism** — fewer days lost, so output and cover planning become reliable.",
            "**Lower labour turnover** — fewer leavers, so recruitment, induction and training costs fall and experience stays in the firm.",
            "**Greater willingness to accept change** and new methods of working, which makes new technology and restructuring actually work.",
            "Other consequences: better quality and customer service, fewer accidents, and less supervision needed.",
          ],
        },
        {
          subTitle: "Three theories, one sentence each — then apply",
          bullets: [
            "**Maslow** — needs are arranged in a **hierarchy**: **physiological** (pay, food, rest), **safety and security** (job security, safe conditions), **social** (belonging to a team), **esteem** (respect and recognition), and **self-actualisation** (achieving your potential). Lower needs must be met before a higher need can motivate, so a bonus will not fix an unsafe workplace.",
            "**Taylor** — workers are mainly motivated by **money**; therefore measure the **one best way** to do a job, pay a fair day's wage for a fair day's output, and reward extra output. It explains piece rates and bonuses, but ignores social and psychological needs.",
            "**Herzberg** — two separate sets of factors. **Hygiene factors** (pay, conditions, job security, company policy) **prevent dissatisfaction but do not motivate**. **Motivators** (achievement, recognition, the work itself, responsibility, advancement) **produce satisfaction and effort**. Paying more alone buys peace, not drive.",
            "**Application pattern**: name the theory, state **which need or factor is unmet** in the case, then choose a method that targets exactly that need and explain why.",
          ],
        },
        {
          subTitle: "Financial methods of motivation",
          bullets: [
            "**Time-based pay** — an amount per hour or day. Simple, predictable and secure, but **no reward for working faster** and it needs supervision.",
            "**Piece rate** — pay per unit produced. Strong incentive and higher output, but **quality and safety can fall**, machinery is pushed hard, and earnings vary when materials are short.",
            "**Salary** — a fixed annual amount paid monthly. Gives security and status, aids retention, but does not reward extra effort on its own.",
            "**Bonus** — extra pay for meeting a target, individual or team-wide. Focuses effort on what the firm values, but **can be divisive** and expensive in good years.",
            "**Commission** — a percentage of the **sales value** a person achieves. Powerful for selling, but encourages pushing unwanted products and **undermines teamwork**.",
            "**Profit-related pay / profit sharing** — a share of the firm's profit. Links effort to business success and builds loyalty; but profit depends on factors staff **cannot control**, and the reward feels distant.",
            "**Fringe benefits** — non-cash rewards such as a **company car, private health insurance, free meals, gym use or extra holiday**. Valued and loyalising, sometimes tax-efficient; but **costly, easily taken for granted**, and hard to withdraw later.",
          ],
        },
        {
          subTitle: "Non-financial methods, and how to choose",
          bullets: [
            "**Job enrichment** — giving a job **more responsibility, variety and challenge**. Attacks boredom at source; needs trust and training.",
            "**Job rotation** — moving employees **between tasks at the same level** (usually every few weeks). Reduces monotony and builds **multi-skilling** useful for cover; but each move costs training time and output dips while people adjust.",
            "**Training** — signals investment in the person and raises capability, though it costs time and money.",
            "**Opportunities for promotion** — a career path keeps ambition inside the firm; needs posts to exist.",
            "**Praise, recognition and employee of the month** — almost **free**, fast, and satisfying of esteem needs; can seem unfair if criteria are unclear or the same person always wins.",
            "**Choose the method from the case**: bored assembly workers get **rotation or enrichment**; a demoralised sales team gets **commission plus recognition**; staff worried about job security need **security and consultation before any bonus**; and where pay is already fair, non-financial methods are cheaper and often stronger.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_2 = chapterTwo;
