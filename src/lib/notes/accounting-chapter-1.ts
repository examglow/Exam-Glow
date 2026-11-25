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

const rolesArt = artPanel([
  {
    src: "ac01-bookkeeping-vs-accounting.webp",
    alt: "A flat-cartoon clerk writing entries in a large ledger beside an accountant presenting a summary chart",
    caption: "Recording first, interpreting second",
  },
  {
    src: "ac01-accounting-report-meeting.webp",
    alt: "A flat-cartoon business owner and an accountant reading a printed financial report across a desk",
    caption: "Accounts become advice",
  },
]);

const informationArt = artPanel([
  {
    src: "ac01-owner-decisions.webp",
    alt: "A flat-cartoon shop owner comparing two profit figures on a clipboard before ticking a decision",
    caption: "Figures guide the next move",
  },
  {
    src: "ac01-progress-monitoring.webp",
    alt: "A flat-cartoon trader pointing at a rising bar chart pinned beside a cash book and a calculator",
    caption: "Compare the periods",
  },
]);

const equationArt = artPanel([
  {
    src: "ac01-assets-liabilities-equation.webp",
    alt: "A flat-cartoon balanced scale holding a building and a van on one side and coins and a loan note on the other",
    caption: "Both sides tell one story",
  },
  {
    src: "ac01-balanced-transaction.webp",
    alt: "A flat-cartoon shopkeeper handing over cash while two matching arrows show one asset falling and another rising",
    caption: "Two effects, one value",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "The Fundamentals of Accounting",
  intro: `Accounting is the language a business uses to describe itself.\n\n**Book-keeping** records the transactions; **accounting** explains what the records mean.\n\nAt the centre sits one equation: **Assets = Liabilities + Owner's equity**.\n\nEvery transaction, however small, leaves that equation balanced.\n\nMaster the vocabulary of **assets**, **liabilities** and **capital**, and the rest of the course follows.`,
  subheadings: [
    {
      title: "Book-Keeping and Accounting",
      body: `### Two Connected Roles

**Book-keeping** is the routine recording of financial transactions, in date order.

It is clerical work: read the document, choose the accounts, then make the double entry.

**Accounting** is the wider process of recording, classifying, summarising, interpreting and communicating financial information.

Book-keeping is therefore one stage inside accounting, not a rival activity.

### What Book-Keeping Gives the Business

It produces a complete and accurate record of every sale, purchase, receipt and payment.

Complete means no transaction is missed; accurate means every figure can be trusted.

The records are kept in a logical order, so any entry can be traced to its document.

Systematic records also let the owner check the bank balance against the bank statement.

### What Accounting Adds

Accounting classifies the records, then summarises them in the **income statement** and **statement of financial position**.

It interprets the results by comparing this year with last year, or with a rival business.

It communicates those results to the owner, managers, lenders, suppliers and the tax authority.

Judgement is needed, because the accountant chooses policies and explains what the figures mean.

### Telling the Roles Apart

The book-keeper asks whether the entry was posted to the correct accounts.

The accountant asks what the totals mean and what the owner should do next.

In a small business one person may do both, but the tasks stay distinct.

### Worked Example: One Sale, Two Tasks

A shop sells goods on credit for £600 and records the invoice.

Posting that invoice to the ledger accounts is **book-keeping**.

At the year end the accountant totals income of £84,000 and expenses of £61,000.

**Profit = £84,000 − £61,000 = £23,000**, and explaining that figure is accounting.`,
      figure: rolesArt,
      groups: [
        {
          subTitle: "Book-Keeping in One Line",
          bullets: [
            "**Book-keeping:** the routine recording of transactions, in date order, from source documents.",
            "It must be **complete**, **accurate** and **systematic** to be useful.",
            "The output is a set of ledger accounts, a cash book and a list of balances.",
            "The skill is clerical: the rules are fixed and the work is largely mechanical.",
            "It answers one question: what happened, and where was it recorded?",
          ],
        },
        {
          subTitle: "Accounting Goes Further",
          bullets: [
            "**Accounting** covers recording, classifying, summarising, interpreting and communicating.",
            "It prepares the **income statement** and the **statement of financial position**.",
            "It compares results over time and against other businesses.",
            "It supplies information to owners, managers, lenders and the tax authority.",
            "It answers a second question: what does this mean, and what should we do?",
          ],
        },
      ],
      examinerTips: [
        "Define book-keeping by its recording role and accounting by its interpreting role.",
        "Say that book-keeping is part of accounting, never the other way round.",
        "Use the phrase financial information, not just money, in the definition of accounting.",
        "For a compare question, give one point for each side as a matched pair.",
        "Keep definitions to a single sentence; extra words rarely earn extra marks.",
      ],
      commonMistakes: [
        "Treating accounting and book-keeping as the same thing; accounting includes interpretation.",
        "Saying the accountant only records transactions; recording belongs to the book-keeper.",
        "Describing book-keeping as optional for a small business; records are still essential.",
        "Confusing the income statement with the bank statement.",
        "Writing that accounting exists only for tax; owners and lenders use it too.",
      ],
      recap: [
        "Define book-keeping. [2]",
        "Explain two ways in which accounting differs from book-keeping. [4]",
        "State three reasons why a business keeps accurate book-keeping records. [3]",
        "Explain why a small business still needs both book-keeping and accounting. [3]",
        "Identify the task in each case: posting an invoice, and calculating profit for the year. [2]",
      ],
    },
    {
      title: "Measuring Profit and Loss",
      body: `### Profit Rewards the Owner

**Profit** is the surplus of income over expenditure for a period.

A **loss** arises when expenditure is greater than income.

Both are measured for a defined period, usually a year, and matched to that period.

### The Profit Formula

**Profit = total income − total expenses.**

Income comes from sales and other earnings; expenses are the costs of running the business.

Only the expenses of the period are matched against its income.

### Why Profit Must Be Measured

Profit shows whether the business is viable and worth continuing.

It measures the return the owner earns on the capital invested.

It shows progress when compared with earlier years or with a rival.

Lenders ask for profit figures before granting a loan.

The tax authority also needs the figure to assess tax on the profit.

### Profit Is Not the Same as Cash

A credit sale is income when the goods are delivered, even before the customer pays.

So a profitable business can still run short of cash.

A cash sale gives both income and cash at the same moment.

### Worked Example: Profit for the Year

A trader has sales of £48,000 for the year.

Expenses are wages £19,000, rent £7,000, utilities £3,000 and other costs £4,000.

Total expenses = 19,000 + 7,000 + 3,000 + 4,000 = £33,000.

**Profit = £48,000 − £33,000 = £15,000.**

### Worked Example: A Loss

Another trader has income of £26,000 and expenses of £31,500.

**Loss = £31,500 − £26,000 = £5,500.**

The loss reduces the owner's capital by £5,500.

### Worked Example: Profit and Capital

Capital at the start of the year is £40,000.

Profit for the year is £15,000 and drawings are £6,000.

Capital at the end = 40,000 + 15,000 − 6,000 = £49,000.`,
      groups: [
        {
          subTitle: "Measuring Profit Correctly",
          bullets: [
            "**Profit = income − expenses** for the same accounting period.",
            "Match expenses to the period whose income they helped to earn.",
            "A **loss** is a negative profit, and it reduces capital.",
            "Profit is a measurement, not a pile of money sitting in the bank.",
            "Drawings are not an expense; they reduce capital instead.",
          ],
        },
        {
          subTitle: "Who Needs the Profit Figure",
          bullets: [
            "**The owner:** whether the capital is earning a fair return.",
            "**Managers:** which products or departments earn the most.",
            "**Lenders:** whether the business can repay interest and loans.",
            "**Suppliers:** whether it is safe to offer credit terms.",
            "**The tax authority:** how much tax is due on the profit.",
          ],
        },
      ],
      examinerTips: [
        "State the period first: profit is always for a period, never at a date.",
        "Use the words income and expenses, not money in and money out.",
        "Show the subtraction line, because the method can earn a mark on its own.",
        "For a loss, write the answer as a loss or as a bracketed negative figure.",
        "When asked why profit matters, name a user and say what the figure tells them.",
      ],
      commonMistakes: [
        "Treating drawings as an expense; they are a reduction of capital.",
        "Counting a credit sale as income only when the cash arrives.",
        "Adding expenses to income instead of subtracting them.",
        "Mixing periods, such as matching last year's rent with this year's sales.",
        "Calling a loss negative capital; it is a fall in capital, not capital itself.",
      ],
      recap: [
        "Define profit. [2]",
        "A business has income of £72,000 and expenses of £58,500. Calculate its profit. [2]",
        "Explain why a profitable business may still have a bank overdraft. [2]",
        "Capital is £25,000, profit is £9,000 and drawings are £4,500. Calculate closing capital. [3]",
        "Explain two reasons why an owner needs to measure profit each year. [4]",
      ],
    },
    {
      title: "Accounting Information for Decisions",
      body: `### Information, Not Just Records

Accounting turns transactions into **financial information** that people can act on.

The information must be relevant to the decision and reliable enough to trust.

It must also arrive in time to be useful.

### Monitoring Progress

Comparing this year's figures with last year's shows whether the business is improving.

The owner watches **income**, **expenses** and **profit** from one period to the next.

The cash book shows whether receipts are keeping up with payments.

A falling profit or a shrinking bank balance is an early warning.

### Supporting Decisions

Managers use cost information to set selling prices.

They compare the profit of different products before expanding one line.

The owner decides whether to buy a non-current asset or to take on a loan.

Lenders decide whether to grant credit, using profit and asset figures.

### The Limits of the Information

Accounts are historical: they describe what has already happened.

Some figures rest on estimates, such as the useful life of machinery.

So accounting information supports a decision but never makes it alone.

### Worked Example: Monitoring Progress

Last year a shop earned income of £60,000 and made a profit of £9,000.

This year income is £66,000 but profit is only £7,500.

Income rose by £6,000, yet profit fell by £1,500.

The owner should investigate expenses, because they have grown faster than income.

### Worked Example: A Decision

A trader can open a second stall, which needs £5,000 of equipment.

Last year's profit was £12,000 and drawings were £7,000.

Retained profit = 12,000 − 7,000 = £5,000.

The figures show the plan is just affordable, but it uses all spare funds.`,
      figure: informationArt,
      groups: [
        {
          subTitle: "Users and Their Questions",
          bullets: [
            "**Owner:** is the capital earning a fair return?",
            "**Manager:** which product or branch earns the most profit?",
            "**Bank:** can this business repay a loan and its interest?",
            "**Supplier:** is it safe to sell to this business on credit?",
            "**Tax authority:** what profit has been earned, and what tax is due?",
          ],
        },
        {
          subTitle: "Useful Information Must Be",
          bullets: [
            "**Relevant** to the decision being made.",
            "**Reliable**, built on documents rather than guesses.",
            "**Timely**, ready before the decision is taken.",
            "**Comparable**, prepared on the same basis each year.",
            "**Understandable** to the person who has to use it.",
          ],
        },
      ],
      examinerTips: [
        "Name the user, then the decision, then the figure used; that order earns all the marks.",
        "For monitoring progress, compare two periods and state the direction of change.",
        "Avoid vague answers such as helps the owner; say what the owner decides.",
        "Remember that accounts are historical, so present them as a guide, not a forecast.",
        "Use the words relevant, reliable and timely when discussing useful information.",
      ],
      commonMistakes: [
        "Listing users without saying what each one decides.",
        "Claiming accounts predict the future; they record the past.",
        "Ignoring non-financial factors such as staff morale or competition.",
        "Treating a rise in income as a rise in profit without checking expenses.",
        "Using the bank balance as the only measure of success.",
      ],
      recap: [
        "State four users of accounting information and one decision each makes. [4]",
        "Explain how comparing two years' accounts helps an owner monitor progress. [3]",
        "A business earns income of £90,000 with profit of £6,000; last year profit was £11,000. Comment on its progress. [3]",
        "Explain why accounting information alone cannot make a decision. [2]",
        "State three qualities of useful accounting information. [3]",
      ],
    },
    {
      title: "Assets, Liabilities and Owner's Equity",
      body: `### Assets Are Resources

An **asset** is a resource owned or controlled by the business that will bring future benefit.

Assets appear in the **statement of financial position**.

They are grouped as non-current and current.

### Non-Current Assets

**Non-current assets** are kept for use in the business for more than one year.

Examples are premises, machinery, vehicles, fixtures and equipment.

They are not bought in order to be resold at a profit.

### Current Assets

**Current assets** are expected to be used or turned into cash within one year.

Examples are inventory, trade receivables, cash and bank balances.

Inventory is stock held for resale.

Trade receivables are customers who owe money for goods sold on credit.

### Liabilities Are Debts

A **liability** is an amount the business owes to an outside party.

**Non-current liabilities** fall due after more than one year, such as a long-term loan.

**Current liabilities** fall due within one year, such as trade payables and an overdraft.

Trade payables are suppliers owed money for goods bought on credit.

### Owner's Equity Is the Owner's Stake

**Owner's equity**, also called **capital**, is what the business owes to its owner.

It equals the assets left over after every liability is settled.

Capital rises with profit and with new money introduced by the owner.

Capital falls with losses and with **drawings**, the owner's withdrawals for personal use.

### Worked Example: Classifying Items

A shop owns premises worth £120,000 and a delivery van worth £14,000.

It holds inventory of £9,000 and is owed £3,500 by credit customers.

Its bank balance is £2,800, and it owes suppliers £6,300.

It also has a five-year bank loan of £25,000.

Non-current assets = 120,000 + 14,000 = £134,000.

Current assets = 9,000 + 3,500 + 2,800 = £15,300.

Current liabilities = £6,300; non-current liabilities = £25,000.

Capital = total assets − total liabilities = 149,300 − 31,300 = £118,000.`,
      groups: [
        {
          subTitle: "Sorting the Statement of Financial Position",
          bullets: [
            "**Non-current assets:** premises, machinery, vehicles, fixtures; kept over a year.",
            "**Current assets:** inventory, trade receivables, cash, bank; used within a year.",
            "**Non-current liabilities:** long-term loans and mortgages; due after a year.",
            "**Current liabilities:** trade payables and bank overdraft; due within a year.",
            "**Owner's equity:** capital, increased by profit and reduced by drawings.",
          ],
        },
        {
          subTitle: "Words That Earn Marks",
          bullets: [
            "An asset brings future benefit; it is not simply something the business owns.",
            "A liability is owed to an outside party, never to the owner.",
            "Capital is the owner's claim, so it sits with liabilities in the equation.",
            "Inventory is a current asset; a delivery van is a non-current asset.",
            "A bank overdraft is a current liability, not a negative asset.",
          ],
        },
      ],
      examinerTips: [
        "Define an asset by future benefit, not by possession alone.",
        "Sort every item into one of the five groups before writing a total.",
        "Remember that capital is a claim of the owner, so it is not a liability to outsiders.",
        "For a classification question, give the group and one reason for each item.",
        "Check that current assets and current liabilities are listed in the right section.",
      ],
      commonMistakes: [
        "Calling inventory a non-current asset; it is held for resale within a year.",
        "Classifying a bank overdraft as a non-current liability.",
        "Listing capital as an asset because the owner owns it.",
        "Treating a long-term loan as a current liability.",
        "Forgetting that drawings reduce capital rather than expenses.",
      ],
      recap: [
        "Define an asset and a liability. [4]",
        "Distinguish between current and non-current assets, with one example of each. [4]",
        "A business has assets of £88,000 and liabilities of £31,000. Calculate its capital. [2]",
        "Classify each item: inventory, bank loan repayable in five years, trade payables, premises. [4]",
        "Explain why capital is described as the owner's claim on the business. [2]",
      ],
    },
    {
      title: "The Accounting Equation",
      body: `### The Equation

**Assets = Liabilities + Owner's equity.**

The two sides are always equal, because both describe the same business.

Assets are what it has; liabilities and capital are who financed them.

### Rearranging It

**Owner's equity = Assets − Liabilities.**

**Liabilities = Assets − Owner's equity.**

Choose the form that leaves the unknown on its own.

### Why It Balances

Every asset must be financed, either by borrowing or by the owner.

A bank loan buys a van: the asset and the liability rise together.

Owner's money buys inventory: the asset and the capital rise together.

### Worked Example: Finding Capital

A business has assets of £75,000 and liabilities of £28,000.

**Capital = 75,000 − 28,000 = £47,000.**

### Worked Example: Finding Liabilities

Assets are £64,000 and capital is £41,500.

**Liabilities = 64,000 − 41,500 = £22,500.**

### Worked Example: Finding Assets

Liabilities are £19,000 and capital is £36,000.

**Assets = 19,000 + 36,000 = £55,000.**

### Worked Example: A Full Statement

A trader lists premises of £90,000, inventory of £12,000 and bank of £4,000.

She owes suppliers £8,000 and has a loan of £20,000.

Assets = 90,000 + 12,000 + 4,000 = £106,000.

Liabilities = 8,000 + 20,000 = £28,000.

Capital = 106,000 − 28,000 = £78,000.`,
      figure: equationArt,
      groups: [
        {
          subTitle: "The Three Forms",
          bullets: [
            "**Assets = Liabilities + Owner's equity**, the master equation.",
            "**Owner's equity = Assets − Liabilities**, used to find capital.",
            "**Liabilities = Assets − Owner's equity**, used to find total debts.",
            "Capital is also called owner's equity or net assets.",
            "Net assets means total assets minus total liabilities.",
          ],
        },
        {
          subTitle: "What Counts as Each",
          bullets: [
            "**Assets:** premises, vehicles, inventory, trade receivables, bank, cash.",
            "**Liabilities:** trade payables, bank overdraft, loans, mortgages.",
            "**Owner's equity:** capital introduced, plus profit, minus drawings and losses.",
            "A loan is never added to capital; it is owed to an outside party.",
            "Cash withdrawn by the owner reduces capital, not liabilities.",
          ],
        },
      ],
      examinerTips: [
        "Write the equation at the top of the page before you start any calculation.",
        "Label each figure as an asset, a liability or capital before substituting.",
        "Show the rearranged equation, then the substitution, then the answer.",
        "Use £ signs throughout and keep thousands separators consistent.",
        "Check your answer by putting all three figures back into the equation.",
      ],
      commonMistakes: [
        "Adding liabilities to assets instead of subtracting them to find capital.",
        "Treating a bank overdraft as capital because it is a bank balance.",
        "Forgetting that drawings reduce capital in the equation.",
        "Ignoring part of the information, such as a loan listed separately.",
        "Quoting capital as a negative number when assets exceed liabilities.",
      ],
      recap: [
        "State the accounting equation. [1]",
        "A business has assets of £96,000 and capital of £58,000. Calculate its liabilities. [2]",
        "Liabilities are £17,500 and capital is £42,500. Calculate the assets. [2]",
        "A trader has premises £150,000, inventory £18,000, bank £6,000 and a loan of £40,000. Calculate capital. [4]",
        "Explain why the accounting equation always balances after every transaction. [2]",
      ],
    },
    {
      title: "Keeping the Equation Balanced",
      body: `### Every Transaction Has Two Effects

A transaction changes at least two items in the equation.

The changes are always equal in value.

So the two sides stay equal after every transaction.

### The Patterns to Recognise

An asset up and another asset down leaves total assets unchanged.

An asset up and a liability up makes both sides rise.

An asset down and a liability down makes both sides fall.

An asset up and capital up makes both sides rise.

An asset down and capital down makes both sides fall.

### Worked Example: A Sequence of Transactions

Start: assets £50,000, liabilities £18,000, capital £32,000.

(1) The owner pays £10,000 into the bank.

Bank rises by £10,000; capital rises by £10,000.

Now assets £60,000 = liabilities £18,000 + capital £42,000.

(2) Equipment of £4,000 is bought on credit.

Equipment rises by £4,000; trade payables rise by £4,000.

Now assets £64,000 = liabilities £22,000 + capital £42,000.

(3) £2,000 is paid to a supplier by bank transfer.

Bank falls by £2,000; trade payables fall by £2,000.

Now assets £62,000 = liabilities £20,000 + capital £42,000.

(4) A credit customer pays £1,500 into the bank.

Bank rises by £1,500; trade receivables fall by £1,500.

Now assets stay £62,000 = liabilities £20,000 + capital £42,000.

(5) The owner withdraws £800 cash for personal use.

Cash falls by £800; capital falls by £800.

Now assets £61,200 = liabilities £20,000 + capital £41,200.

### Worked Example: Profit Inside the Equation

The business then earns profit of £3,000, received in cash.

Cash rises by £3,000; capital rises by £3,000.

Assets £64,200 = liabilities £20,000 + capital £44,200.`,
      groups: [
        {
          subTitle: "The Effects in Words",
          bullets: [
            "**Asset up, asset down:** total assets are unchanged.",
            "**Asset up, liability up:** buying on credit grows the business.",
            "**Asset down, liability down:** paying a supplier shrinks it.",
            "**Asset up, capital up:** owner investment or profit.",
            "**Asset down, capital down:** drawings or a loss.",
          ],
        },
        {
          subTitle: "Checks Before You Move On",
          bullets: [
            "Write the equation across the top before listing the transactions.",
            "Show each change with a plus or minus beside the item affected.",
            "Re-add both sides after every transaction, not only at the end.",
            "Remember that profit raises capital and drawings lower it.",
            "Keep one consistent layout so a marker can follow your working.",
          ],
        },
      ],
      examinerTips: [
        "Show both effects of every transaction, even when one side does not change.",
        "Write the equation, then the two changes, then the new totals on separate lines.",
        "When asked why the equation balances, say the two effects are equal in value.",
        "Use the words increase and decrease rather than vague arrows alone.",
        "Check your final line by adding liabilities and capital to match assets.",
      ],
      commonMistakes: [
        "Recording only one effect of a transaction.",
        "Treating drawings as an expense that reduces profit.",
        "Adding a loan to capital instead of to liabilities.",
        "Assuming assets must change when a customer pays a debt; only their make-up changes.",
        "Confusing profit earned with cash received.",
      ],
      recap: [
        "Explain why every transaction keeps the accounting equation balanced. [2]",
        "A business has assets of £40,000 and capital of £25,000. It borrows £6,000 from the bank. State the new figures. [3]",
        "The owner pays a supplier £3,000 by cheque. State the effect on assets, liabilities and capital. [3]",
        "Show the effect of a £2,000 credit purchase of inventory on the equation. [2]",
        "An owner withdraws £1,200 cash. Explain the effect on capital and on assets. [2]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_1: Chapter = chapterOne;
