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

const conceptsArt = artPanel([
  {
    src: "ac07-business-entity.webp",
    alt: "Flat cartoon of a shopkeeper stepping between a personal shopping bag and a business till, separated by a painted dividing line",
    caption: "The owner and the business are separate",
  },
  {
    src: "ac07-going-concern.webp",
    alt: "Flat cartoon of a factory with machines still running while a large calendar turns behind the roof",
    caption: "Trading on into the future",
  },
]);

const ethicsArt = artPanel([
  {
    src: "ac07-ethics-principles.webp",
    alt: "Flat cartoon of five accountants standing in a row beneath five labelled shields in a bright office",
    caption: "Five principles, one standard",
  },
  {
    src: "ac07-confidentiality.webp",
    alt: "Flat cartoon of an accountant locking a document folder into a cabinet while a colleague tries to peek",
    caption: "Client information stays private",
  },
]);

const storageArt = artPanel([
  {
    src: "ac07-cloud-storage.webp",
    alt: "Flat cartoon of ledger pages floating from a desk up into a cloud, with a padlock fixed to the cloud",
    caption: "Records kept off site",
  },
  {
    src: "ac07-data-backup.webp",
    alt: "Flat cartoon of an accountant holding a hard drive beside a paper ledger and a small backup server",
    caption: "Always keep a second copy",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Accounting Concepts and Modern Practice",
  intro: `Rules come before numbers.\n\n**Accounting concepts** decide what is recorded, when, and at what value.\n\n**Ethics** decides whether those rules are applied honestly.\n\n**Technology** decides how the records are kept, and how safely.\n\nTogether they explain why accounts can be trusted, and where that trust can fail.`,
  subheadings: [
    {
      title: "Concepts That Define the Business",
      body: `### Why Concepts Matter

Accounting follows agreed rules so that statements can be trusted.

These rules are called **accounting concepts**, or principles.

They make figures consistent, comparable and understandable.

### Business Entity

The business is treated as completely separate from its owner.

The owner's private spending is **drawings**, not a business expense.

Application: a shopkeeper's personal fuel bill is never charged to the shop.

### Consistency

The same method is used from one period to the next.

A change of method must be disclosed, with its effect explained.

Application: depreciation stays on the same basis each year.

### Duality

Every transaction has two effects of equal value.

One account is debited and another account is credited.

Application: stock bought on credit debits purchases and credits trade payables.

### Going Concern

The business is assumed to keep trading for the foreseeable future.

Assets are therefore valued for use rather than for break-up.

Application: machinery is depreciated over its life, not written off at once.

### Money Measurement

Only items that can be measured reliably in money are recorded.

Application: a loyal workforce is valuable but never appears as an asset.

### Worked Example: The Owner's Private Spending

An owner pays £18,000 of business cash for a family holiday.

The payment is recorded as **drawings**, not as an expense.

Profit for the year is therefore unchanged.

Cash falls by £18,000 and capital falls by £18,000.

### Worked Example: Going Concern and Asset Values

A machine cost £40,000 and has accumulated depreciation of £24,000.

Its net book value is 40,000 − 24,000 = £16,000.

On a break-up it might raise only £5,000.

The going concern basis keeps £16,000 in the statement.

### Worked Example: Duality in One Transaction

A business buys a van for £12,000 on credit.

Motor vehicles increase by £12,000.

Trade payables also increase by £12,000.

The statement of financial position stays in balance.`,
      figure: conceptsArt,
      groups: [
        {
          subTitle: "Concepts and Their Meaning",
          bullets: [
            "**Business entity:** the business is separate from its owner.",
            "**Consistency:** the same methods are used each period.",
            "**Duality:** every transaction has two equal effects.",
            "**Going concern:** the business will continue trading.",
            "**Money measurement:** only money values are recorded.",
          ],
        },
        {
          subTitle: "One-Line Applications",
          bullets: [
            "**Entity:** private spending goes to drawings, not expenses.",
            "**Consistency:** keep the same depreciation method each year.",
            "**Duality:** debit one account and credit another for the same amount.",
            "**Going concern:** depreciate assets instead of writing them off.",
            "**Money measurement:** omit the value of staff training from assets.",
          ],
        },
        {
          subTitle: "Why Each One Matters",
          bullets: [
            "The entity concept stops private costs distorting profit.",
            "Consistency makes one year comparable with the next.",
            "Duality keeps the ledger, and so the statements, in balance.",
            "Going concern justifies spreading cost over an asset's life.",
            "Money measurement keeps the accounts objective and checkable.",
          ],
        },
      ],
      examinerTips: [
        "Name the concept first, then give its meaning, then the application.",
        "Learn one clear example for each concept, such as drawings for the entity concept.",
        "Use the exact term; owners' private spending is drawings, not a cost.",
        "Explain why the concept matters, since application marks usually follow definition marks.",
        "Keep the definition to one sentence and spend the rest on the example.",
      ],
      commonMistakes: [
        "Treating the owner's private spending as a business expense.",
        "Confusing the entity concept with the going concern concept.",
        "Changing a depreciation method without disclosing it.",
        "Assuming the business's cash belongs to the owner personally.",
        "Writing off an asset in its first year instead of depreciating it.",
      ],
      recap: [
        "Explain the business entity concept. [2]",
        "State the duality concept and give one example of it. [2]",
        "Explain why a vehicle is depreciated rather than written off when bought. [3]",
        "A machine cost £30,000 with accumulated depreciation of £18,000. State its net book value. [2]",
        "Give one item that cannot be recorded because of the money measurement concept. [1]",
      ],
    },
    {
      title: "Concepts That Guide Measurement",
      body: `### Historic Cost

Assets are recorded at the price originally paid for them.

Application: a building bought for £200,000 stays at cost less depreciation.

### Matching, or Accruals

Income and expenses are matched to the period they belong to.

Cash paid in a different period is adjusted by an accrual or a prepayment.

Application: an electricity bill received after the year end is still accrued.

### Prudence

Do not overstate assets or income, and do not understate liabilities or expenses.

Application: inventory is valued at the lower of cost and net realisable value.

### Realisation

Revenue is recognised when the sale is made, not when cash is received.

Application: a credit sale invoiced in December belongs to this year's revenue.

### Materiality

Only items large enough to influence a decision need separate treatment.

Application: a £12 stapler is expensed rather than depreciated over years.

### Worked Example: Accruals and Prepayments

Harlow Traders has a profit of £20,000 before year-end adjustments.

Insurance of £2,400 was paid for twelve months on 1 July.

The year ends on 31 December, so half the cover, £1,200, is prepaid.

Profit rises by £1,200 because that cost belongs to next year.

Wages of £800 for December are unpaid, so an accrual is needed.

Profit falls by £800 because the expense belongs to this year.

Adjusted profit = 20,000 + 1,200 − 800 = **£20,400**.

### Worked Example: Prudence and Realisation

Inventory costing £5,000 can now be sold for only £4,200.

Prudence values it at £4,200, recognising a loss of £800.

A credit sale of £3,000 is invoiced on 28 December.

Realisation records it in this year, though the cash arrives in January.

### Worked Example: Materiality

A business buys a stapler for £12 and a printer for £600.

The stapler is treated as an expense in the year of purchase.

The printer is capitalised and depreciated over several years.

The stapler's cost is too small to change any decision.`,
      groups: [
        {
          subTitle: "The Measurement Concepts",
          bullets: [
            "**Historic cost:** assets are held at the price paid.",
            "**Matching (accruals):** costs follow the income they helped earn.",
            "**Prudence:** caution when judging gains and asset values.",
            "**Realisation:** revenue is recognised when the sale is made.",
            "**Materiality:** only significant items need separate treatment.",
          ],
        },
        {
          subTitle: "Adjustments in Practice",
          bullets: [
            "A prepayment is an expense paid in advance, so profit rises.",
            "An accrual is an expense still owed, so profit falls.",
            "Inventory is written down to net realisable value when that is lower.",
            "Credit sales belong to the period of the invoice, not of the cash.",
            "Small items are expensed at once for simplicity.",
          ],
        },
        {
          subTitle: "Prudence Without Distortion",
          bullets: [
            "Prudence anticipates losses, but never invents profits.",
            "It does not permit deliberate understatement of assets.",
            "Value inventory at cost or net realisable value, whichever is lower.",
            "Create an allowance only where a debt is genuinely doubtful.",
          ],
        },
      ],
      examinerTips: [
        "For accruals, work out the portion of the period that falls in this year.",
        "State whether profit rises or falls before giving the adjusted figure.",
        "Quote realisation precisely: revenue at the point of sale, not of cash.",
        "Link prudence to a named adjustment, such as writing inventory down.",
        "Use materiality to justify expensing a small item rather than depreciating it.",
      ],
      commonMistakes: [
        "Treating a prepayment as an expense of the current year.",
        "Adding an accrual to profit when it should be deducted.",
        "Recording revenue when an order is placed rather than when goods are sold.",
        "Using prudence to justify hidden reserves or deliberate understatement.",
        "Capitalising a £12 stapler and depreciating it over five years.",
      ],
      recap: [
        "Explain the matching concept. [2]",
        "Insurance of £3,600 is paid on 1 April for twelve months; the year ends 31 December. Calculate the prepayment. [3]",
        "State the prudence concept and give one application of it. [3]",
        "Explain when revenue is recognised under the realisation concept. [2]",
        "Why may a £20 stapler be treated as an expense rather than an asset? [2]",
      ],
    },
    {
      title: "Ethics and the Five Fundamental Principles",
      body: `### Why Accounting Needs an Ethical Framework

Accountants handle other people's money and private information.

An **ethical framework** sets standards of behaviour beyond the legal minimum.

It builds the trust on which every financial decision depends.

### Integrity

Be straightforward and honest in all professional and business relationships.

Application: never record a transaction you know to be false.

### Objectivity

Do not let bias, conflict of interest or undue influence override judgement.

Application: disclose a family interest before advising on that supplier.

### Professional Competence and Due Care

Keep knowledge up to date and work carefully within your competence.

Application: decline work you are not trained for, or call in an expert.

### Confidentiality

Do not disclose information without proper authority.

Disclosure is allowed only where there is a legal or professional duty.

Application: never discuss a client's figures on social media.

### Professional Behaviour

Comply with the law and avoid conduct that discredits the profession.

Application: refuse to falsify a tax return, however valuable the client.

### Worked Example: Pressure to Misstate

A manager asks an accountant to leave out £15,000 of unpaid supplier invoices.

Recording them would reduce profit, and so reduce the manager's bonus.

Omitting them breaches **integrity**, **objectivity** and **professional behaviour**.

The accountant should record the liability and report the pressure.`,
      figure: ethicsArt,
      groups: [
        {
          subTitle: "The Five Principles",
          bullets: [
            "**Integrity:** be straightforward and honest.",
            "**Objectivity:** let neither bias nor interest sway judgement.",
            "**Professional competence and due care:** stay skilled and work carefully.",
            "**Confidentiality:** keep client information private.",
            "**Professional behaviour:** obey the law and protect the profession's reputation.",
          ],
        },
        {
          subTitle: "Why a Framework Is Needed",
          bullets: [
            "Users cannot check the figures for themselves.",
            "Accountants hold money, records and confidential information.",
            "Legal rules alone cannot cover every ethical dilemma.",
            "A shared framework gives clear guidance when pressure arises.",
            "It supports the reputation on which the profession depends.",
          ],
        },
        {
          subTitle: "Ethics in Everyday Work",
          bullets: [
            "Declare any interest before advising a client.",
            "Refuse to backdate an invoice or alter a ledger entry.",
            "Keep working papers private and securely stored.",
            "Refer work beyond your competence to a specialist.",
            "Report suspected fraud through the proper channel.",
          ],
        },
      ],
      examinerTips: [
        "Learn all five principles by name, since a five-mark question may ask for them.",
        "Link each principle to a short, concrete example.",
        "For a scenario, name the principle breached and say why.",
        "Recommend the correct action, not only the fault.",
        "Use the phrase professional competence and due care in full.",
      ],
      commonMistakes: [
        "Naming four principles and inventing a fifth.",
        "Confusing integrity with objectivity.",
        "Treating confidentiality as absolute; the law can require disclosure.",
        "Describing the dilemma without naming the principle breached.",
        "Ignoring the pressure from a manager instead of reporting it.",
      ],
      recap: [
        "State the five fundamental principles of professional ethics. [5]",
        "Explain why an accountant should not disclose a client's information. [2]",
        "Describe how an accountant should respond to pressure to overstate profit. [3]",
        "Explain the difference between integrity and objectivity. [2]",
        "Why does a professional accountant need to keep skills up to date? [2]",
      ],
    },
    {
      title: "Why Ethics Matter to Stakeholders and Society",
      body: `### Trust Makes Markets Work

Investors risk money because they trust the reported figures.

Banks lend because they trust the numbers behind a plan.

Suppliers extend credit on the same basis.

### Owners and Investors

Reliable accounts allow fair decisions about buying, holding or selling.

Concealment transfers wealth from the uninformed to the dishonest.

### Employees and Customers

Employees rely on honest reporting for wages, pensions and job security.

Customers rely on it when a supplier claims to be financially sound.

### Governments and the Wider Public

Tax authorities need accurate profit figures to collect the right tax.

Governments use the same figures for statistics and policy.

Society gains when markets are fair and capital is allocated honestly.

Environmental bodies depend on truthful disclosure of impacts.

### The Cost of Unethical Practice

False reporting misleads decisions and can bring a business down.

It leads to fines, loss of professional licence and criminal liability.

It damages the reputation of every accountant, not only the guilty one.

### Worked Example: Concealment and Its Consequences

A business hides a £2 million loan from its published statements.

A bank lends £500,000 believing the borrowing is modest.

When the loan emerges, the bank withdraws the facility.

The business fails, employees lose jobs and suppliers lose unpaid debts.

### Why Society Needs the Framework

Honest accounts direct savings towards productive businesses.

Dishonest accounts waste those savings and weaken public confidence.

A strong ethical framework protects both.`,
      groups: [
        {
          subTitle: "Stakeholders Who Gain",
          bullets: [
            "**Investors:** fair information for buy, hold or sell decisions.",
            "**Banks and lenders:** confidence that risk is disclosed.",
            "**Employees:** secure wages, pensions and jobs.",
            "**Suppliers:** reliable evidence of ability to pay.",
            "**Customers:** confidence that guarantees will be honoured.",
          ],
        },
        {
          subTitle: "Society as a Whole",
          bullets: [
            "Tax is collected on true profits.",
            "Savings flow to well-run businesses.",
            "Markets keep the confidence of ordinary savers.",
            "Fraud is detected earlier and punished.",
            "Environmental and social impacts are reported truthfully.",
          ],
        },
        {
          subTitle: "Consequences of Dishonesty",
          bullets: [
            "Fines, prosecution and loss of licence.",
            "Collapse of the business and lost jobs.",
            "Loss of savings for investors and lenders.",
            "Damage to the reputation of the profession.",
            "Weaker public trust in financial markets.",
          ],
        },
      ],
      examinerTips: [
        "Name the stakeholder group and the harm or benefit to that group.",
        "Use the chain: dishonest figure, wrong decision, real loss.",
        "Mention both the business and the wider profession when discussing reputation.",
        "For society, refer to fair markets and the allocation of savings.",
        "Support each point with a consequence, not a slogan.",
      ],
      commonMistakes: [
        "Saying only that fraud is wrong, without naming who is harmed.",
        "Treating shareholders and banks as having identical interests.",
        "Forgetting employees when listing stakeholders.",
        "Ignoring the effect on tax revenue.",
        "Assuming a fine is the only consequence of unethical reporting.",
      ],
      recap: [
        "Explain how ethical reporting benefits investors. [2]",
        "Explain how unethical reporting can harm employees. [2]",
        "Why do tax authorities depend on honest accounting? [2]",
        "State two consequences of unethical accounting for a business. [2]",
        "Explain the benefit of an ethical framework to society as a whole. [2]",
      ],
    },
    {
      title: "Digital Accounting Records",
      body: `### From Paper to Software

Accounting records were once kept entirely in bound ledgers.

Software now records transactions and produces reports automatically.

Some businesses digitise everything; others keep part of the records manually.

### Where Digital Applications Are Used

Bookkeeping and ledgers, with automatic double entry.

Sales and purchases, through e-invoicing and electronic tills.

Bank records, through automated bank feeds and online statements.

Payroll, inventory and reports, all produced from the same data.

### Advantages of Digital Records

Faster processing, with fewer copying and adding errors.

Reports and ratios are available instantly.

Data can be reached remotely and backed up automatically.

Less paper means less filing space and easier searching.

### Disadvantages of Digital Records

Set-up costs, subscription fees and staff training.

Dependence on electricity, internet access and reliable hardware.

Risk of cyber attack, fraud and data loss.

Errors can spread quickly through linked records.

### Choosing What to Computerise

Start with high-volume work such as sales and purchases.

Keep paper evidence where the law or an auditor requires it.

Check that the system produces the reports the business actually needs.

Train staff before the changeover, not after it.

### Worked Example: A Small Shop Goes Digital

A shop replaces a paper cash book and paper invoices with software.

Monthly sales of £40,000 now post automatically from the till.

Bank feeds match receipts, so reconciliation takes minutes instead of hours.

The owner pays £30 a month for the software and £400 once for training.

The time saved can be spent on buying and selling instead.`,
      groups: [
        {
          subTitle: "What Can Be Digital",
          bullets: [
            "Ledgers, journals and the trial balance.",
            "Sales invoices, purchase invoices and receipts.",
            "Bank statements, through automated feeds.",
            "Payroll and inventory records.",
            "Reports, ratios and management information.",
          ],
        },
        {
          subTitle: "Advantages",
          bullets: [
            "Speed of processing and reporting.",
            "Fewer arithmetic and posting errors.",
            "Remote access for owners and advisers.",
            "Automatic backup and easy searching.",
            "Less paper, storage and postage.",
          ],
        },
        {
          subTitle: "Disadvantages",
          bullets: [
            "Cost of software, hardware and training.",
            "Dependence on power and internet access.",
            "Exposure to hacking and data theft.",
            "Loss of records if backups fail.",
            "Less visible audit trail for a novice user.",
          ],
        },
      ],
      examinerTips: [
        "Give balanced answers: one advantage and one disadvantage for each point.",
        "Link each benefit to a named task, such as bank reconciliation.",
        "Mention cost, training and security when evaluating a system.",
        "Do not name commercial software; describe the function instead.",
        "For an evaluation question, finish with a justified recommendation.",
      ],
      commonMistakes: [
        "Claiming software removes all errors; wrong data still produces wrong reports.",
        "Ignoring the cost of training and conversion.",
        "Assuming cloud records cannot be lost.",
        "Listing features instead of advantages.",
        "Forgetting that paper evidence may still be legally required.",
      ],
      recap: [
        "State three ways a business can keep its accounting records digitally. [3]",
        "Give two advantages of computerised accounting records. [2]",
        "Give two disadvantages of computerised accounting records. [2]",
        "Explain why a business should keep a backup of its accounting data. [2]",
        "Explain how digital records can reduce a business's environmental impact. [2]",
      ],
    },
    {
      title: "Storing Accounting Data Safely and Sustainably",
      body: `### Four Ways to Store Records

**Manual storage:** paper ledgers, invoices and files in cabinets.

**Data storage devices:** hard drives, USB sticks, servers and discs.

**Cloud services:** data held on remote servers and reached online.

**Other digital services:** e-invoicing portals, email archives and accountant-hosted systems.

### Manual Storage

Advantages: no power or internet needed, simple to use, and paper is visible.

Disadvantages: bulky, easily lost, damaged by fire or flood, and slow to search.

### Data Storage Devices

Advantages: cheap, portable and under the business's own control.

Disadvantages: can fail, be stolen or be lost, and viruses can spread.

### Cloud Services

Advantages: automatic backup, remote access and predictable subscription costs.

Disadvantages: needs internet access, and data is held by a third party.

### Other Digital Services

Advantages: specialist systems handle invoices, payroll or tax filing.

Disadvantages: data may sit in several places, and formats may not transfer.

### Why Safe Storage Matters

Records must be complete, accurate and available whenever they are needed.

Tax, audit and legal requirements can demand them years later.

Accounts also support decisions, so lost data means lost evidence.

### Risks of Unsafe Storage

Lost records mean tax returns cannot be completed, and fines may follow.

Stolen data exposes customers and breaches data protection law.

Corrupted files destroy the audit trail and weaken decisions.

Fire, flood or theft can end a business that kept only one copy.

### Risks of Unsustainable Storage

Paper decays, and old devices and formats become unreadable.

Keeping everything forever raises cost, energy use and legal risk.

Poor disposal of devices leaks data that should have been destroyed.

### Storing Well

Use passwords, access levels and a record of every change.

Back up regularly and keep a copy off site or in the cloud.

Set a retention policy, then destroy records securely when it ends.

Choose formats that will stay readable, and migrate old files.

### Worked Example: One Copy Is Not a Backup

A garage keeps its only sales ledger on one laptop.

The laptop is stolen, and the records are lost with it.

Without a backup, the year's sales cannot be proved to the tax authority.

A monthly cloud backup would have restored every entry.`,
      figure: storageArt,
      groups: [
        {
          subTitle: "Storage Types",
          bullets: [
            "**Manual:** paper files in cabinets; simple but fragile.",
            "**Devices:** hard drives and USB sticks; portable but easy to lose.",
            "**Cloud:** remote servers; automatic backup but needs internet.",
            "**Other services:** portals and accountant systems; specialist but fragmented.",
          ],
        },
        {
          subTitle: "Advantages and Disadvantages",
          bullets: [
            "Manual: no power needed, but bulky and easily damaged.",
            "Devices: cheap and controlled, but can fail or be stolen.",
            "Cloud: backed up and remote, but dependent on a provider.",
            "Other services: efficient for one task, but data may be split.",
          ],
        },
        {
          subTitle: "Safe and Sustainable Practice",
          bullets: [
            "Back up daily and keep at least one copy off site.",
            "Restrict access and keep an audit trail of changes.",
            "Encrypt personal data and dispose of devices securely.",
            "Keep records only as long as the law requires.",
            "Migrate old formats before they become unreadable.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish safe storage from sustainable storage; the question may ask for both.",
        "Give a risk and its consequence, such as theft leading to a data breach.",
        "Compare storage types on cost, security, access and durability.",
        "Mention data protection law when personal data is stored.",
        "For sustainability, refer to paper use, energy and long-term readability.",
      ],
      commonMistakes: [
        "Calling a single USB stick a backup.",
        "Assuming cloud storage removes the need for access controls.",
        "Ignoring the cost of migration to new formats.",
        "Keeping every record indefinitely instead of following a retention policy.",
        "Deleting old devices without wiping the data first.",
      ],
      recap: [
        "State two advantages and two disadvantages of manual accounting records. [4]",
        "State two advantages of cloud storage for accounting data. [2]",
        "Explain two risks of storing accounting data on a single USB stick. [4]",
        "Explain why accounting records should not be kept forever. [2]",
        "Suggest two ways a business can dispose of old records securely. [2]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_7: Chapter = chapterSeven;
