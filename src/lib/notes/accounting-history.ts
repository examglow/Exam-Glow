import type { Chapter } from "./types";

const IMG = "/notes/accounting";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row; the artwork sits on the same cream it was
      // drawn on, so containing it loses nothing.
      const solo = items.length % 2 === 1 && i === items.length - 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${solo ? " sm:aspect-[2/1] sm:object-contain" : ""}" /></div>
        <figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${it.caption}</figcaption>
      </figure>`;
    })
    .join("");
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-4 py-5 sm:px-8 sm:py-8">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">${tiles}</div>
</div>
:::`;
}

const originsArt = artPanel([
  {
    src: "ac08-mesopotamia-clay-tablet.webp",
    alt: "A flat cartoon scribe pressing tally marks into a wet clay tablet on a low bench, with baskets of grain and a few sheep nearby",
    caption: "The first accounts were pressed into clay",
  },
  {
    src: "ac08-pacioli-summa-1494.webp",
    alt: "A flat cartoon Franciscan friar at a wooden desk with an open printed book, a quill and an open ledger of two matching columns",
    caption: "Pacioli printed the method in 1494",
  },
]);

const bubbleArt = artPanel([
  {
    src: "ac08-south-sea-bubble-1720.webp",
    alt: "A flat cartoon crowd waving paper share certificates beneath a huge glossy bubble that is beginning to crack, with sailing ships in the background",
    caption: "Speculation outran the accounts in 1720",
  },
  {
    src: "ac08-share-certificate-crowd.webp",
    alt: "A flat cartoon street of eighteenth-century investors trading paper certificates, some cheering and some looking worried",
    caption: "Shares sold the promise, not the figures",
  },
]);

const auditArt = artPanel([
  {
    src: "ac08-crash-1929-auditor.webp",
    alt: "A flat cartoon auditor with a magnifying glass checking a tall stack of ledgers beside a plunging line chart and a newspaper on a desk",
    caption: "After 1929, disclosure became law",
  },
  {
    src: "ac08-cloud-spreadsheet.webp",
    alt: "A flat cartoon laptop showing a grid of cells, linked to a small cloud and a locked folder above it",
    caption: "The ledger moved to the screen and the cloud",
  },
]);

const chapterEight: Chapter = {
  number: 8,
  title: "The Story Behind the Syllabus",
  intro: `Accounting looks like a modern invention: spreadsheets, audits, company reports.\n\nIts core idea is far older: write down what comes in, what goes out, and what is owed.\n\nThe double-entry method was printed in 1494, but the need behind it is ancient.\n\nEvery topic in this syllabus was shaped by a real problem somebody had to solve.\n\nThis chapter follows that idea from clay tablets to the cloud.`,
  subheadings: [
    {
      title: "Before Double Entry: Records on Clay",
      body: `### The Earliest Accounts

The oldest accounting records are clay tablets from ancient Mesopotamia.

Scribes pressed marks into wet clay to list grain, livestock and payments.

These were receipts and inventories, not yet a balanced system.

### One Side of the Story

Early records often captured only one side of a transaction.

A payment was noted, but the matching obligation could be missed.

This single-entry habit made theft and error hard to detect.

### Why Writing Came First

Trade needs proof, and memory fails across long journeys.

Writing gave merchants a lasting record both parties could trust.

Accounting and writing grew up together.`,
      figure: originsArt,
      groups: [
        {
          subTitle: "The Idea in the Syllabus",
          bullets: [
            "**Book-keeping** is recording transactions; **accounting** adds analysis and interpretation.",
            "Even a simple list of receipts and payments is accounting information for decisions.",
            "The **business entity** concept separates the owner's money from the shop's money.",
            "Recording exists so that progress can be **monitored**, not just remembered.",
          ],
        },
        {
          subTitle: "What Clay Records Already Did",
          bullets: [
            "They identified **who** owed or paid, and **what** was exchanged.",
            "They recorded **quantities** of grain, animals and goods.",
            "They created a **permanent** record that could be checked later.",
            "They supported trade between people who might never meet again.",
          ],
        },
        {
          subTitle: "The Missing Ingredient",
          bullets: [
            "There was no single rule that every account must balance.",
            "One-sided records can still hide a missing payment.",
            "The next step was to record **both** effects of every transaction.",
            "That step is the **duality** concept you meet in chapter 7.",
          ],
        },
      ],
      examinerTips: [
        "Link the history to the concept it explains; a date alone earns little.",
        "Say that book-keeping records while accounting interprets.",
        "Use the term business entity when describing separate records.",
        "Explain why a permanent record helps trade, not just that records are old.",
        "Keep answers short; each point should carry one clear idea.",
      ],
      commonMistakes: [
        "Claiming double entry was invented in ancient Mesopotamia; only simple records were kept there.",
        "Confusing book-keeping with accounting; the second includes analysis.",
        "Forgetting that a one-sided record can still be dishonest.",
        "Treating the history as trivia rather than evidence for a concept.",
        "Writing that clay tablets were balanced accounts; they were not.",
      ],
      recap: [
        "State one purpose of keeping accounting records that ancient traders also needed. [1]",
        "Explain why a single-sided record is easier to falsify. [2]",
        "Distinguish between book-keeping and accounting. [2]",
        "Name the concept that keeps the owner's private spending out of the business books. [1]",
        "Explain why writing and trade developed together. [2]",
      ],
    },
    {
      title: "Pacioli Prints the Method (1494)",
      body: `### A Friar and a Textbook

Luca Pacioli was an Italian mathematician and a Franciscan friar.

In 1494 he published the Summa de Arithmetica in Venice.

One section described the double-entry method used by Venetian merchants.

### What He Actually Did

Pacioli did not invent double entry; he described and organised it.

He set out debits and credits, the journal and the ledger.

The printed book spread the method across Europe.

### Why It Mattered

Printing made the technique repeatable and teachable.

A merchant in another city could follow the same rules.

Pacioli is often called the father of accounting for this reason.`,
      groups: [
        {
          subTitle: "The Method He Described",
          bullets: [
            "Every transaction is recorded **twice**, as a debit and a credit.",
            "Entries pass through the **journal** before reaching the **ledger**.",
            "The ledger keeps a separate account for each item, such as cash or a customer.",
            "The method is the **duality** concept in practice.",
          ],
        },
        {
          subTitle: "Why Printing Changed Things",
          bullets: [
            "A printed text could be copied exactly and used in many cities.",
            "Rules could be **taught** in a standard way rather than by apprenticeship alone.",
            "Merchants could check each other's books using a shared method.",
            "The **trial balance** later grew from this habit of matching totals.",
          ],
        },
        {
          subTitle: "Syllabus Links",
          bullets: [
            "**Double entry** is topic 2.1.",
            "The **journal** and **ledger** are the tools named in the syllabus.",
            "**Duality** appears again among the accounting concepts in 7.1.",
            "The idea of checking totals lead later to the **trial balance** in 3.1.",
          ],
        },
      ],
      examinerTips: [
        "Credit Pacioli with describing and spreading the method, not inventing it.",
        "Name the book, the Summa de Arithmetica, and the year, 1494.",
        "Use the word Venetian when describing the double-entry technique.",
        "Connect the printed book to consistency and teaching.",
        "State one clear reason printing mattered, then stop.",
      ],
      commonMistakes: [
        "Saying Pacioli invented double entry; he documented an existing method.",
        "Confusing the Summa with a modern textbook; it covered many mathematical topics.",
        "Giving the wrong year; the Summa appeared in 1494.",
        "Claiming the ledger alone balances; double entry is needed.",
        "Forgetting that the journal comes before the ledger in the recording process.",
      ],
      recap: [
        "Who published the first printed description of double entry, and in what year? [2]",
        "Explain one reason printing helped the method spread. [2]",
        "State the two effects recorded for every transaction. [2]",
        "Name the book of prime entry that comes before the ledger. [1]",
        "Explain why Pacioli is called the father of accounting. [2]",
      ],
    },
    {
      title: "Companies, Shares and the South Sea Bubble",
      body: `### A New Kind of Business

From the 1600s, joint-stock companies sold shares to many investors.

Owners were no longer the same people who ran the business.

Investors who never visit a shop still need accounts they can trust.

### The Bubble of 1720

The South Sea Company's share price rose far beyond its real value.

When confidence broke, the price collapsed and many investors lost heavily.

Britain passed the Bubble Act in 1720 to curb speculative company schemes.

### The Lesson

Markets learned that an exciting story is not an account.

Reliable reporting became a public interest, not a private habit.`,
      figure: bubbleArt,
      groups: [
        {
          subTitle: "Why Shared Ownership Needs Accounts",
          bullets: [
            "Owners are **separated** from managers, so they rely on reports.",
            "A share price depends on what investors believe the business is worth.",
            "**Comparable** accounts let an investor judge that belief against facts.",
            "The **business entity** concept keeps company money distinct from owners' money.",
          ],
        },
        {
          subTitle: "The Bubble in Simple Terms",
          bullets: [
            "Prices rose on **expectation** rather than on recorded profit.",
            "New buyers kept arriving, which pushed prices higher still.",
            "When buyers stopped, the price fell quickly.",
            "The collapse showed the danger of **unreliable information**.",
          ],
        },
        {
          subTitle: "The Response",
          bullets: [
            "The **Bubble Act 1720** restricted speculative joint-stock schemes.",
            "The episode strengthened the case for **honest** company reporting.",
            "Later company law returned to the same question: who checks the figures?",
            "That question leads directly to the **audit** in the next section.",
          ],
        },
      ],
      examinerTips: [
        "Use the phrase joint-stock company when explaining shared ownership.",
        "Give the year 1720 once, clearly, rather than several dates.",
        "Explain the lesson: investors need reliable, comparable information.",
        "Link the bubble to the need for audit rather than telling it as a story.",
        "Keep the cause and the consequence in separate sentences.",
      ],
      commonMistakes: [
        "Treating the bubble as proof that all companies are dishonest.",
        "Confusing the South Sea Bubble with a modern stock-market event.",
        "Omitting the link between separated ownership and reporting.",
        "Saying the Bubble Act created modern accounting standards; it did not.",
        "Describing the price rise without mentioning the collapse.",
      ],
      recap: [
        "Explain why shared ownership increases the need for reliable accounts. [2]",
        "State what happened to the South Sea Company's share price in 1720. [2]",
        "Name the Act passed in Britain in 1720 in response. [1]",
        "Suggest one way reliable accounts protect an investor. [2]",
        "Explain why a rising share price is not evidence of profit. [2]",
      ],
    },
    {
      title: "The Companies Act 1844",
      body: `### Accounts Become a Duty

Britain's Joint Stock Companies Act 1844 required registered companies to keep accounts.

It also required them to appoint auditors.

Company accounting moved from private habit to legal duty.

### Audit and Its Retreat

The 1856 Act dropped the compulsory audit requirement.

Later company law brought independent audit back.

The pattern stuck: shareholders need an independent check.

### Why Law, Not Just Manners

A rule that everyone follows creates a level playing field.

Investors can compare companies knowing the same duties apply.

Law also gives a remedy when reports are false.`,
      groups: [
        {
          subTitle: "What Changed in 1844",
          bullets: [
            "**Registration** of joint-stock companies became a formal process.",
            "Companies had to **keep** proper accounting records.",
            "**Auditors** were appointed to check the accounts.",
            "The state, not just the merchant, now cared about the books.",
          ],
        },
        {
          subTitle: "The Audit Idea",
          bullets: [
            "An audit is an **independent** check of the financial statements.",
            "It reduces the risk that reports are **misstated** or dishonest.",
            "It supports the **true and fair** view expected of statements.",
            "Independent checking remains a core safeguard today.",
          ],
        },
        {
          subTitle: "Syllabus Links",
          bullets: [
            "The **statement of financial position** is the modern version of the old balance sheet.",
            "**Verification** in chapter 3 is the same idea at a smaller scale.",
            "The **control accounts** of 3.4 also check that records agree.",
            "**Ethics** in 7.2 explains why independence matters.",
          ],
        },
      ],
      examinerTips: [
        "Name the Act and the year: Joint Stock Companies Act 1844.",
        "State the two duties: keep accounts and appoint auditors.",
        "Explain the audit as an independent check.",
        "Mention that later law restored compulsory audit.",
        "Link the Act to investor protection, not just to paperwork.",
      ],
      commonMistakes: [
        "Saying the 1844 Act invented double entry; it required records and audit.",
        "Claiming audit has always been compulsory since 1844; the 1856 Act removed it.",
        "Confusing an audit with book-keeping.",
        "Thinking auditors prepare the accounts; management does.",
        "Ignoring the reason for audit, which is independent verification.",
      ],
      recap: [
        "Name the British Act of 1844 and state one duty it placed on companies. [2]",
        "Explain what an auditor does. [2]",
        "Explain why an independent check is valuable to shareholders. [2]",
        "State what happened to compulsory audit in 1856. [1]",
        "Link the 1844 Act to one topic in this syllabus. [2]",
      ],
    },
    {
      title: "After the Crash of 1929",
      body: `### The Wall Street Crash

Share prices collapsed in 1929 and the Great Depression followed.

Many investors had relied on incomplete or misleading reports.

### Disclosure Becomes Law

The United States passed the Securities Act of 1933.

The Securities Exchange Act of 1934 created a regulator for the markets.

Companies selling shares had to disclose accurate financial information.

### The Audit Becomes Central

Independent auditors became a standard safeguard for investors.

The idea of presenting a true position traces to this period.`,
      figure: auditArt,
      groups: [
        {
          subTitle: "What the Crash Revealed",
          bullets: [
            "Investors had bought shares on **rumour** and thin disclosure.",
            "Some reports **omitted** debts or overstated assets.",
            "Without independent checks, errors and fraud went unnoticed.",
            "The damage spread from markets into the wider economy.",
          ],
        },
        {
          subTitle: "The Legal Response",
          bullets: [
            "The **Securities Act 1933** required honest disclosure to investors.",
            "The **Securities Exchange Act 1934** regulated trading and reporting.",
            "A regulator was created to enforce the rules.",
            "Audited statements became part of the **public** record.",
          ],
        },
        {
          subTitle: "Syllabus Links",
          bullets: [
            "**Prudence** in 7.1 guards against overstating assets or profit.",
            "The **going concern** idea assumes the business will continue.",
            "**Limitations of statements** in 6.5 include historic cost and policies.",
            "**Ethics** in 7.2 explains why disclosure must be honest.",
          ],
        },
      ],
      examinerTips: [
        "Give the year of the crash, 1929, and the years of the two US Acts.",
        "Explain the link: poor disclosure led to law requiring disclosure.",
        "State that auditors check, they do not guarantee profit.",
        "Use the phrase independent verification.",
        "Keep the economic cause and the legal response separate.",
      ],
      commonMistakes: [
        "Saying the crash caused double entry to be invented.",
        "Mixing up the 1933 and 1934 Acts.",
        "Claiming an audit guarantees that a business will not fail.",
        "Forgetting that disclosure protects future investors, not only current ones.",
        "Describing the crash without linking it to reporting rules.",
      ],
      recap: [
        "In which year did the Wall Street Crash occur? [1]",
        "State one reason poor reporting made the crash worse for investors. [2]",
        "Name one US law that followed the crash and what it required. [2]",
        "Explain why an audit does not guarantee future profits. [2]",
        "Link disclosure to one accounting concept. [2]",
      ],
    },
    {
      title: "One Global Language: IFRS",
      body: `### Why Standards Spread

Companies trade and raise money across borders.

Different national rules made statements hard to compare.

### The Standard Setters

The International Accounting Standards Committee was formed in 1973.

In 2001 it was replaced by the International Accounting Standards Board.

The IASB issues IFRS, used by many countries today.

### What Standards Do

They narrow the choices in how transactions are recorded.

That helps investors compare businesses in different countries.

### The Cost of Uniformity

Standards must suit very different economies and business sizes.

Applying them takes judgement, which is why ethics still matters.`,
      groups: [
        {
          subTitle: "The Timeline to Remember",
          bullets: [
            "**1973:** the International Accounting Standards Committee is formed.",
            "**2001:** the International Accounting Standards Board replaces it.",
            "**IFRS:** the standards issued by the IASB.",
            "**IAS:** earlier standards issued under the older committee.",
          ],
        },
        {
          subTitle: "Why Comparability Matters",
          bullets: [
            "Investors compare companies across **countries**.",
            "Shared rules reduce the chance of **hidden** differences.",
            "**Consistency** in 7.1 is the same idea within one business.",
            "Comparable accounts support **inter-business comparison** in 6.3.",
          ],
        },
        {
          subTitle: "Judgement Still Counts",
          bullets: [
            "Standards allow **estimates**, such as useful life for depreciation.",
            "Different estimates change reported profit.",
            "**Prudence** and **materiality** guide those choices.",
            "This is why the syllabus stresses **ethical** behaviour.",
          ],
        },
      ],
      examinerTips: [
        "Use the dates 1973 and 2001 correctly.",
        "Say IFRS are issued by the IASB.",
        "Explain comparability as the main benefit.",
        "Mention that standards still require judgement.",
        "Avoid claiming every country uses IFRS; say many do.",
      ],
      commonMistakes: [
        "Saying the IASB was formed in 1973; the committee was.",
        "Confusing IAS with IFRS as if they were the same issue date.",
        "Claiming standards remove all judgement from accounting.",
        "Saying all countries must use IFRS.",
        "Ignoring the link between standards and comparability.",
      ],
      recap: [
        "In which year was the International Accounting Standards Committee formed? [1]",
        "What body replaced it in 2001? [1]",
        "State the main benefit of global accounting standards. [2]",
        "Explain why standards still require professional judgement. [2]",
        "Link IFRS to the concept of consistency. [2]",
      ],
    },
    {
      title: "From Ledger to Cloud",
      body: `### The Spreadsheet

The spreadsheet arrived in the late 1970s.

It let one user recalculate a whole page of figures instantly.

Routine bookkeeping moved onto screens.

### Digital Records and Risk

Modern systems record sales, purchases and payments automatically.

Data must be stored safely or it can be lost or altered.

The syllabus' concern with safe, sustainable storage follows from this.

### What Has Not Changed

Double entry still balances debits and credits.

Concepts such as going concern and prudence still guide judgements.

The tools changed; the reasoning did not.`,
      groups: [
        {
          subTitle: "Storage Choices in 7.3",
          bullets: [
            "**Manual** records are simple but easy to lose or damage.",
            "**Devices** hold data locally but can fail or be stolen.",
            "**Cloud services** allow access anywhere but depend on the provider.",
            "Each choice trades **cost**, **access** and **security**.",
          ],
        },
        {
          subTitle: "Risks of Poor Storage",
          bullets: [
            "Data can be **lost** through failure or disaster.",
            "Data can be **altered** without a trace.",
            "Confidential information can be **exposed**.",
            "Poor records undermine every later statement and ratio.",
          ],
        },
        {
          subTitle: "Why the Old Rules Survive",
          bullets: [
            "Software still posts a **debit** and a **credit**.",
            "The **trial balance** still checks that totals agree.",
            "The **ledger** structure is still the same in principle.",
            "Understanding the manual method makes the software readable.",
          ],
        },
      ],
      examinerTips: [
        "Give advantages and disadvantages for each storage type.",
        "Link security to confidentiality in 7.2.",
        "State that software automates, but does not remove, double entry.",
        "Explain a risk in terms of loss, alteration or exposure.",
        "Keep the paragraph on what has not changed short and clear.",
      ],
      commonMistakes: [
        "Claiming cloud storage removes the need for backups.",
        "Saying digital records cannot be altered; they can.",
        "Forgetting that manual records have advantages too.",
        "Treating software as a substitute for understanding double entry.",
        "Ignoring confidentiality when discussing stored data.",
      ],
      recap: [
        "State one advantage and one disadvantage of cloud storage. [2]",
        "Explain one risk of storing accounting data unsafely. [2]",
        "Explain why software still uses double entry. [2]",
        "Link safe storage to the principle of confidentiality. [2]",
        "Describe one way digital records can still be wrong. [2]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_8: Chapter = chapterEight;
