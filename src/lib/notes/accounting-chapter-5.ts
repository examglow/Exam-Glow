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

const adjustmentArt = artPanel([
  {
    src: "ac05-accruals-and-prepayments.webp",
    alt: "Flat cartoon of an accountant marking a wall calendar, one bill stamped paid in advance and another stamped still owing",
    caption: "Paid early, paid late, recorded right",
  },
  {
    src: "ac05-irrecoverable-debts.webp",
    alt: "Flat cartoon of a shopkeeper crossing out an unpaid invoice beside a dial set to five per cent above a stack of invoices",
    caption: "Write off, then allow for the rest",
  },
]);

const partnershipArt = artPanel([
  {
    src: "ac05-appropriation-account.webp",
    alt: "Flat cartoon of two partners dividing a pile of coins on a desk while an accountant writes up the appropriation account",
    caption: "Profit split by the agreement",
  },
  {
    src: "ac05-partners-current-accounts.webp",
    alt: "Flat cartoon of two open ledgers side by side, one partner's page showing a credit balance and the other a debit balance",
    caption: "Current accounts can go either way",
  },
]);

const manufacturingArt = artPanel([
  {
    src: "ac05-factory-cost-of-production.webp",
    alt: "Flat cartoon of a factory line turning timber into chairs, with arrows from materials, labour and overheads meeting on a cost sheet",
    caption: "Prime cost plus factory overheads",
  },
  {
    src: "ac05-work-in-progress.webp",
    alt: "Flat cartoon of half-finished chairs stacked on a factory floor while a supervisor counts them at the year end",
    caption: "Partly made, counted and adjusted",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Preparation of Financial Statements",
  intro: `Six kinds of business, one set of statements.\n\nA **sole trader**, a **partnership**, a **limited company**, a **manufacturer**, a **club** and a business with **incomplete records** all end in the same two statements.\n\nThe **statement of profit or loss** measures performance over a period.\n\nThe **statement of financial position** is a snapshot of assets, liabilities and capital on one date.\n\nEvery adjustment in this chapter exists to put the right amount in the right year.`,
  subheadings: [
    {
      title: "Sole Traders and the Purpose of the Statements",
      body: `### One Owner, All the Decisions

A **sole trader** is one person who owns and runs the business.

Advantages include keeping all the profit and deciding quickly without consulting anyone.

The owner deals personally with customers and keeps information private.

Set-up costs are low and there are few legal formalities.

Disadvantages include **unlimited liability** for the debts of the business.

Capital is limited to the owner's savings and borrowings.

Illness or a holiday stops the business, and the owner carries every task.

### Four Ways of Trading

A **trading** business buys goods and resells them without changing them.

A **service** business sells work, such as a garage, a salon or an accountancy practice.

A **manufacturing** business buys raw materials and converts them into finished goods.

Many businesses combine these, for example a bakery that makes and sells cakes.

The type of business decides which ledger accounts and statements are needed.

### Why Prepare Both Statements

The **statement of profit or loss** shows whether the year produced a profit.

It matches revenue earned against the expenses used to earn it.

The **statement of financial position** shows assets, liabilities and capital on one date.

The owner uses both to judge performance and to plan the next year.

A bank uses them to decide whether to lend, and the tax office to assess tax.

### What the Statement of Financial Position Contains

**Non-current assets** are held for use, not resale, for more than one year.

**Intangible assets** have no physical form, such as goodwill, patents and trademarks.

**Current assets** are cash, or will become cash within a year: inventory, receivables, bank.

**Current liabilities** are due within one year: payables, overdraft and accruals.

**Non-current liabilities** are due after more than one year, such as a long-term loan.

**Capital** is the owner's stake, calculated as assets minus liabilities.

### One Balance Always Moves Another

The statement stays balanced, so every change touches at least two figures.

Buy machinery on credit and non-current assets rise while current liabilities rise.

Pay a supplier by cheque and current assets fall while current liabilities fall.

The owner pays a private bill from business cash, so current assets and capital both fall.

Profit raises capital, and drawings lower it.

### Worked Example: One Transaction, Two Changes

A shop has non-current assets of £80,000 and current assets of £30,000.

Its current liabilities are £18,000 and its non-current liabilities £20,000.

Capital = £110,000 − £38,000 = **£72,000**.

It then buys equipment for £6,000 on credit.

Non-current assets become £86,000 and current liabilities £24,000.

Assets £116,000 − liabilities £44,000 still gives capital of **£72,000**.`,
      groups: [
        {
          subTitle: "Advantages and Disadvantages for a Sole Trader",
          bullets: [
            "**Advantages:** all profit kept, full control, quick decisions, privacy, low set-up cost.",
            "**Disadvantages:** unlimited liability, limited capital, limited skills, heavy workload.",
            "**Continuity:** the business ends when the owner retires, dies or is too ill to work.",
            "**Finance:** lenders see one person's savings as the only safety net.",
            "**Decision making:** one owner can act at once but has nobody to challenge a poor idea.",
          ],
        },
        {
          subTitle: "Recognising the Business Type",
          bullets: [
            "**Trading:** buys finished goods and resells them, as a clothes shop does.",
            "**Service:** sells skill or time, so there is no inventory of goods for resale.",
            "**Manufacturing:** holds raw materials, work in progress and finished goods.",
            "**Combination:** may trade and manufacture, such as a bakery with a cafe.",
            "The title of the inventory accounts reveals which type is being examined.",
          ],
        },
        {
          subTitle: "How the Two Statements Differ",
          bullets: [
            "**Profit or loss:** for a period, showing revenue and expenses.",
            "**Financial position:** at a date, showing balances carried forward.",
            "Profit for the year is added to capital in the position statement.",
            "Drawings are deducted from capital and never treated as an expense.",
            "Both statements are prepared from the same trial balance.",
          ],
        },
      ],
      examinerTips: [
        "Give two advantages and two disadvantages with a reason each, not just labels.",
        "When asked why statements are prepared, name the user and what that user learns.",
        "Classify assets by purpose and by time, never by size or by cost.",
        "For a change in one balance, always name the second account it must affect.",
        "Define capital as assets minus liabilities, not as money held in the bank.",
      ],
      commonMistakes: [
        "Calling a delivery van a current asset because it will be sold one day.",
        "Treating an intangible asset as a liability because it cannot be seen.",
        "Claiming limited liability protects a sole trader; it does not.",
        "Listing a bank overdraft as a non-current liability.",
        "Forgetting that profit raises capital while drawings reduce it.",
      ],
      recap: [
        "State two advantages and two disadvantages of operating as a sole trader. [4]",
        "Explain the difference between the statement of profit or loss and the statement of financial position. [3]",
        "A sole trader has non-current assets £64,000, current assets £21,000 and current liabilities £13,000. Calculate capital. [2]",
        "The trader then pays a £3,000 payable by cheque. State the effect on current assets, current liabilities and capital. [3]",
        "Define intangible assets and give one example. [2]",
      ],
    },
    {
      title: "Adjusting the Statement of Financial Position",
      body: `### Accrued Expenses Are Owed, Not Paid

An **accrual** is an expense used this year but not yet paid.

Add the closing accrual to the expense and carry it as a current liability.

Rent paid was £9,000, with an opening accrual of £500 and a closing accrual of £800.

Expense = 9,000 − 500 + 800 = **£9,300**.

The £800 appears under current liabilities in the statement of financial position.

### Prepaid Expenses Are Paid, Not Used

A **prepayment** is an expense paid this year but belonging to next year.

Deduct it from the expense and carry it as a current asset.

Insurance paid was £2,400, of which £300 covers next year.

Expense = 2,400 − 300 = **£2,100**, with £300 as a current asset.

### Accrued and Prepaid Income

**Accrued income** is income earned but not yet received, so it is added to income.

It sits as a current asset, for example rent receivable of £500.

**Income received in advance** is deducted from income and shown as a current liability.

Rent received of £6,000 plus £500 accrued gives income of **£6,500**.

### Depreciation by Straight Line

**Depreciation** spreads the cost of a non-current asset over its useful life.

Straight line charges the same amount every year.

**Annual depreciation = (cost − residual value) ÷ useful life.**

A machine costing £12,000 with residual value £2,000 over five years loses £2,000 a year.

After three years accumulated depreciation is £6,000, so net book value is £6,000.

### Depreciation by Reducing Balance

Reducing balance charges a fixed percentage of the **net book value**.

A £10,000 machine at 20% gives £2,000 in year one, leaving £8,000.

Year two gives 20% × 8,000 = £1,600, leaving £6,400.

Accumulated depreciation is then £3,600 and the annual charge falls.

### Revaluation of a Non-Current Asset

**Revaluation** restates an asset at its current value.

An asset with cost £40,000 and accumulated depreciation £12,000 has net book value £28,000.

Revalued to £45,000, the increase is 45,000 − 28,000 = **£17,000**.

The increase goes to a **revaluation reserve** inside capital, not to profit.

Later depreciation is charged on the new £45,000.

### Irrecoverable Debts and the Allowance

An **irrecoverable debt** is a receivable that will never be paid.

Write it off by debiting irrecoverable debts expense and crediting trade receivables.

Receivables of £18,000 less an £800 write-off leave £17,200.

An **allowance** of 5% gives 5% × 17,200 = **£860**.

If the old allowance was £700, the £160 increase is this year's expense.

### Drawings of Goods, Assets and Private Expenses

**Drawings** are the owner's withdrawals from the business.

Goods taken for personal use: debit drawings, credit purchases at cost.

An asset taken: debit drawings, credit the asset account at net book value.

A private bill paid by the business: debit drawings, credit bank.

Drawings never enter the statement of profit or loss; they reduce capital.

### Double Entry for Every Adjustment

Accrued expense: debit the expense, credit accrued expenses.

Prepaid expense: debit the prepayment, credit the expense.

Depreciation: debit depreciation expense, credit accumulated depreciation.

Irrecoverable debt: debit the expense, credit trade receivables.

Allowance increase: debit the expense, credit the allowance account.

Drawings of goods: debit drawings, credit purchases.`,
      figure: adjustmentArt,
      groups: [
        {
          subTitle: "Where Each Adjustment Appears",
          bullets: [
            "**Accrued expense:** added to the expense, shown as a current liability.",
            "**Prepaid expense:** deducted from the expense, shown as a current asset.",
            "**Accrued income:** added to income, shown as a current asset.",
            "**Income in advance:** deducted from income, shown as a current liability.",
            "**Allowance:** deducted from trade receivables; the net balance stays a current asset.",
          ],
        },
        {
          subTitle: "Depreciation Methods Compared",
          bullets: [
            "**Straight line:** equal charge each year, suited to assets used evenly.",
            "**Reducing balance:** charge falls each year, suited to vehicles and computers.",
            "Both credit **accumulated depreciation**, never the asset account itself.",
            "Net book value = cost − accumulated depreciation.",
            "A revaluation gain is a reserve movement, not income.",
          ],
        },
        {
          subTitle: "Getting Drawings Right",
          bullets: [
            "Goods taken at cost reduce **purchases**, not sales.",
            "A private expense paid by the business is a drawing, not a business expense.",
            "Drawings are deducted from capital in the position statement.",
            "A loan taken by the owner is a drawing only if the business repays it.",
            "Total drawings include cash, goods, assets and private bills paid.",
          ],
        },
      ],
      examinerTips: [
        "Read the wording: paid, owing and prepaid each signal a different adjustment.",
        "Build the expense account: opening balance, cash paid, closing balance, missing figure.",
        "State the double entry before calculating; the accounts keep the signs correct.",
        "For reducing balance apply the percentage to net book value, never to cost.",
        "Show the allowance brought forward before calculating the movement for the year.",
      ],
      commonMistakes: [
        "Adding the closing accrual to the amount paid, giving £9,800 instead of £9,300.",
        "Applying reducing balance to cost each year, so the charge never falls.",
        "Writing off a debt and then including it again in the allowance calculation.",
        "Debiting drawings as an expense in the statement of profit or loss.",
        "Crediting a whole revaluation gain to the statement of profit or loss.",
      ],
      recap: [
        "Rent paid £7,200, opening accrual £400, closing accrual £650. Calculate the rent expense and state where the closing accrual appears. [3]",
        "A machine costs £18,000 with residual value £3,000 over five years. Calculate the straight-line charge and net book value after two years. [3]",
        "A vehicle costs £20,000 and is depreciated at 20% reducing balance. Calculate the charge in years one and two. [3]",
        "Trade receivables are £24,000, a £1,000 debt is written off, and the allowance is 5%. Calculate the allowance. [2]",
        "State the double entry for goods taken by the owner for personal use. [2]",
      ],
    },
    {
      title: "Partnerships: The Agreement and Appropriation",
      body: `### More Owners, More Capital

A **partnership** is owned by two or more partners, usually between two and twenty.

Advantages include extra capital, shared skills and a shared workload.

Losses and responsibilities are also shared.

Disadvantages include **unlimited liability** for ordinary partners.

Profits must be divided, and disagreements can slow every decision.

Each partner can bind the business by their own actions.

### The Partnership Agreement

The **partnership agreement** sets out the rules the partners have chosen.

It states the capital each partner contributes.

It states the **profit-sharing ratio**, such as 3:2.

It covers interest on capital, interest on drawings and partners' salaries.

It records the interest payable on a partner's loan.

Without an agreement, profits are shared equally.

### Why an Appropriation Account

The statement of profit or loss ends with profit for the year.

That figure belongs to the partners together, not to one of them.

The **appropriation account** shows how the profit is divided.

It is not an expense account and it does not change total profit.

### Interest on Capital and Drawings

**Interest on capital** rewards a partner for contributing more capital.

It is calculated on capital, for example 5% × £60,000 = £3,000.

It is a debit in the appropriation account and a credit in the partner's current account.

**Interest on drawings** penalises heavy withdrawals.

It is a credit in the appropriation account and a debit in the current account.

Neither appears in the statement of profit or loss.

### Salaries and Loan Interest

A **partner's salary** is paid for work done, not for capital contributed.

It is deducted in the appropriation account.

**Interest on a partner's loan** is different, because the loan is a business liability.

So loan interest is an expense in the statement of profit or loss.

A £20,000 loan at 6% costs 20,000 × 6% = **£1,200** a year.

### Worked Example: Dividing the Profit

Partners P and Q share profits 3:2, with capital of £60,000 and £40,000.

Interest on capital is 5%, Q receives a salary of £8,000.

Interest on drawings is P £300 and Q £200, and profit for the year is £30,000.

The appropriation starts at 30,000 + 500 = **£30,500**.

Less interest on capital £5,000 and salary £8,000 leaves **£17,500**.

P takes 3/5 × 17,500 = **£10,500** and Q takes 2/5 × 17,500 = **£7,000**.`,
      figure: partnershipArt,
      groups: [
        {
          subTitle: "What Goes in the Agreement",
          bullets: [
            "**Capital:** the amount each partner contributes and keeps in the business.",
            "**Ratio:** how residual profit and loss are shared, for example 3:2.",
            "**Interest on capital:** the percentage credited for each partner's investment.",
            "**Salaries:** fixed sums for partners who do more of the daily work.",
            "**Drawings:** the limit allowed, and interest charged on excess withdrawals.",
            "**Loan interest:** the rate paid on money lent by a partner.",
          ],
        },
        {
          subTitle: "Appropriation or Expense?",
          bullets: [
            "**Appropriation:** interest on capital, partners' salaries, interest on drawings, profit shares.",
            "**Expense:** interest on a partner's loan, because the loan is a liability.",
            "Interest on drawings is added to the profit available for appropriation.",
            "Interest on capital and salaries are deducted before the ratio is applied.",
            "A loss is shared in the same ratio after the same deductions.",
          ],
        },
      ],
      examinerTips: [
        "State clearly that interest on capital and salaries are appropriations, not expenses.",
        "Add interest on drawings to profit, then deduct interest on capital and salaries.",
        "Apply the profit-sharing ratio only to the residual figure, never to the original profit.",
        "Present the appropriation account separately, directly below profit for the year.",
        "Quote the clause of the agreement you are applying when explaining a treatment.",
      ],
      commonMistakes: [
        "Deducting partners' salaries as an expense in the statement of profit or loss.",
        "Sharing the original profit by the ratio before deducting interest and salaries.",
        "Treating interest on a partner's loan as an appropriation.",
        "Forgetting to add interest on drawings back to the profit available.",
        "Splitting the residual profit equally when the agreement states 3:2.",
      ],
      recap: [
        "State four matters normally included in a partnership agreement. [4]",
        "Explain why interest on a partner's loan is treated differently from interest on capital. [3]",
        "Profit for the year is £40,000, interest on capital £6,000, a partner's salary £9,500 and interest on drawings £1,000. Calculate the residual profit. [2]",
        "The partners share profits 2:1. Calculate each partner's share of the £25,500 residual profit. [2]",
        "Distinguish between a partner's capital account and a partner's current account. [3]",
      ],
    },
    {
      title: "Partners' Capital and Current Accounts",
      body: `### Capital Accounts Hold the Permanent Stake

Each partner has a **capital account** for capital introduced and permanently withdrawn.

With the fixed capital method it does not change from year to year.

All the routine adjustments pass through the **current account** instead.

### Credits into the Current Account

Interest on capital is credited.

A partner's salary is credited.

The share of the remaining profit is credited.

A credit balance means the business owes money to the partner.

### Debits out of the Current Account

Drawings of cash or goods are debited.

Interest on drawings is debited.

A share of any loss is debited.

A debit balance means the partner owes money to the business.

### Ledger Form

The current account is written as a normal ledger account with two sides.

Debit drawings, drawings interest and any loss share.

Credit interest on capital, salary and the profit share.

Balance the account, then bring the balance down on the opposite side.

### Worked Example: Continuing P and Q

P's current account is credited with £3,000 and £10,500, and debited with £300.

Balance = 3,000 + 10,500 − 300 = **£13,200 credit**.

Q's account is 2,000 + 8,000 + 7,000 − 200 = **£16,800 credit**.

The two balances total £30,000, matching the profit appropriated.

### A Debit Balance on a Current Account

Partner R has an opening credit balance of £1,200.

Interest on capital is £1,000, salary £4,000 and the loss share £2,500.

Drawings are £6,000 and interest on drawings £200.

Balance = 1,200 + 1,000 + 4,000 − 2,500 − 6,000 − 200 = **−£2,500**.

A debit balance is deducted from capital in the statement of financial position.

### Inside the Statement of Financial Position

Show each capital account and total them.

Add credit current account balances and deduct any debit balances.

The result is **total partners' funds**, which is the partnership's capital.

A partner's loan is a liability, listed separately from capital.`,
      groups: [
        {
          subTitle: "Current Account: Credits and Debits",
          bullets: [
            "**Credit:** interest on capital, salary and share of profit.",
            "**Debit:** drawings, interest on drawings and share of loss.",
            "A credit balance is added to capital; a debit balance is deducted.",
            "Drawings are never an expense, so they never enter the profit statement.",
            "The account is balanced at each year end and the balance carried down.",
          ],
        },
        {
          subTitle: "Presenting Partners' Finance",
          bullets: [
            "List capital accounts first, then add or deduct current account balances.",
            "Label a debit balance clearly as a deduction, not as a negative asset.",
            "Show a partner's loan under non-current liabilities.",
            "Total partners' funds plus the loan equals the finance raised from partners.",
            "Check that profit shares add back to the residual profit.",
          ],
        },
      ],
      examinerTips: [
        "Draw the current account with debit and credit columns before entering figures.",
        "Bring the balance down on the opposite side, exactly as in any ledger account.",
        "Label a debit balance as a deduction when presenting partners' funds.",
        "Total partners' funds before adding the loan, which is a liability.",
        "Check that the sum of profit shares equals the residual profit exactly.",
      ],
      commonMistakes: [
        "Crediting drawings, which would wrongly increase the partner's balance.",
        "Placing a partner's loan inside the capital section.",
        "Entering the profit share net of drawings and losing the audit trail.",
        "Adding a debit balance instead of deducting it.",
        "Recording interest on capital in the statement of profit or loss.",
      ],
      recap: [
        "State three items credited to a partner's current account. [3]",
        "A current account has an opening credit balance of £1,500, interest on capital £900, salary £5,000, profit share £4,200, drawings £7,000 and drawings interest £150. Calculate the closing balance. [3]",
        "Explain how a debit balance on a current account is shown in the statement of financial position. [2]",
        "A partner lends the firm £15,000 at 4%. Calculate the annual interest and state where it is recorded. [3]",
        "Explain one reason for keeping partners' capital accounts fixed. [2]",
      ],
    },
    {
      title: "Limited Companies: Capital Structure and Equity",
      body: `### A Company Is a Separate Legal Person

A **limited company** is owned by shareholders and is separate from them in law.

The company owns the assets, signs contracts and can be sued.

**Limited liability** means a shareholder can lose only the money invested or promised.

Private companies end in Ltd, and public companies end in plc.

### Advantages and Disadvantages

Advantages include limited liability, more capital and easier expansion.

Shares can be sold, and the company continues when a shareholder dies.

Specialist directors can be appointed to run the business.

Disadvantages include legal formalities and published accounts.

Setting up costs more, and control is shared with other shareholders.

Profits are also taxed through corporation tax.

### Equity Is the Owners' Stake

**Equity** is the shareholders' claim on the company.

Equity = assets − liabilities, exactly like capital in a sole trader.

It contains share capital plus reserves.

Reserves belong to the shareholders; they are not a separate pot of cash.

### Ordinary and Preference Shares

**Ordinary shares** carry votes at general meetings.

Their dividend varies with profit and is paid last.

They gain most in a good year and lose most in a bad one.

**Preference shares** receive a fixed dividend, such as 5% of nominal value.

That dividend is paid before ordinary dividends, but votes are usually withheld.

### Reserves and Retained Earnings

A **general reserve** is profit set aside for a stated purpose.

It is still equity, because the money stays inside the business.

**Retained earnings** are accumulated profits not yet distributed.

They are the main internal source of finance for growth.

### Loan Capital: Debentures

**Debentures** are long-term loans raised by a company.

They carry a fixed rate of interest, paid whether or not a profit is made.

Debenture interest is a **finance cost** in the statement of profit or loss.

Debentures are a liability, never part of equity.

They are repaid on a stated date.

### Issued, Called-Up and Paid-Up Capital

**Issued capital** is the nominal value of the shares allotted to shareholders.

**Called-up capital** is the part of that value the company has asked for.

**Paid-up capital** is the amount actually received.

A company issues 200,000 £1 ordinary shares and calls up £0.80 on each.

Called-up capital = 200,000 × £0.80 = **£160,000**.

It has received £0.60 per share, so paid-up capital = 200,000 × £0.60 = **£120,000**.

The unpaid £0.20 per share, **£40,000**, is called **calls in arrears**.`,
      groups: [
        {
          subTitle: "Share Capital Vocabulary",
          bullets: [
            "**Nominal value:** the fixed face value of one share, such as £1.",
            "**Issued:** shares allotted to shareholders at nominal value.",
            "**Called-up:** the part of issued capital the company has demanded.",
            "**Paid-up:** the money actually received from shareholders.",
            "**Calls in arrears:** called-up money still owed by shareholders.",
          ],
        },
        {
          subTitle: "Equity or Liability?",
          bullets: [
            "**Equity:** ordinary shares, preference shares, general reserve, retained earnings.",
            "**Liability:** debentures and long-term bank loans.",
            "Debenture interest is an expense; a dividend is a distribution of profit.",
            "Preference dividends are fixed on nominal value, not on the share price.",
            "Equity plus liabilities always equals total assets.",
          ],
        },
      ],
      examinerTips: [
        "Define limited liability through the amount a shareholder can lose.",
        "Separate equity from loan capital by ownership and by the payment due.",
        "Use nominal value when calculating called-up and paid-up amounts.",
        "Name the reserve a transfer came from and the reserve it went to.",
        "State that preference dividends are fixed and are paid first.",
      ],
      commonMistakes: [
        "Treating debentures as equity because holders receive a regular payment.",
        "Calculating the preference dividend on the market price instead of nominal value.",
        "Adding called-up capital and paid-up capital together.",
        "Saying limited liability means the company cannot make a loss.",
        "Describing a general reserve as cash set aside in a bank account.",
      ],
      recap: [
        "Explain the meaning of limited liability. [2]",
        "Distinguish between ordinary shares and preference shares. [4]",
        "A company issues 150,000 £1 ordinary shares and calls up £0.75 per share. Calculate called-up capital. [2]",
        "It has received £0.50 per share. Calculate paid-up capital and calls in arrears. [3]",
        "Explain why debentures are a liability while ordinary shares are equity. [3]",
      ],
    },
    {
      title: "Limited Companies: The Three Statements",
      body: `### The Statement of Profit or Loss for a Company

The trading and profit sections work exactly as for a sole trader.

**Operating profit** is gross profit minus expenses.

**Finance costs**, such as debenture interest, are deducted next.

**Taxation** is deducted to reach profit for the year.

### Worked Example: Profit for the Year

Revenue £240,000 less cost of sales £150,000 gives gross profit of £90,000.

Expenses of £30,000 leave operating profit of £60,000.

Debenture interest of £4,000 leaves profit before tax of £56,000.

Tax of £14,000 leaves **profit for the year of £42,000**.

### The Statement of Changes in Equity

This statement explains every movement in equity during the year.

Columns show each share class, each reserve and retained earnings.

The rows start with the opening balance.

They continue with shares issued, profit for the year, dividends and reserve transfers.

The final row is the closing balance, which appears in the position statement.

### Worked Example: A Year of Changes

Opening balances are ordinary shares £200,000, preference shares £40,000, general reserve £10,000 and retained earnings £24,000.

During the year 50,000 £1 ordinary shares are issued for cash.

Profit for the year is £42,000 and dividends paid are £12,000.

A transfer of £6,000 is made to the general reserve.

Ordinary shares close at 200,000 + 50,000 = **£250,000**.

General reserve closes at 10,000 + 6,000 = **£16,000**.

Retained earnings close at 24,000 + 42,000 − 12,000 − 6,000 = **£48,000**.

Total equity = 250,000 + 40,000 + 16,000 + 48,000 = **£354,000**.

### The Statement of Financial Position for a Company

Non-current assets appear at net book value, with intangibles listed first.

Current assets and current liabilities follow in the usual order.

Non-current liabilities show debentures and long-term loans.

The equity section replaces capital and shows each share class and reserve.

**Equity plus liabilities must equal total assets.**

### Dividends Are Not an Expense

A **dividend** is a distribution of profit to shareholders.

It is shown in the statement of changes in equity, not in the profit statement.

Only the dividend actually paid affects cash and equity.

### The Adjustments Still Apply

Accruals and prepayments are adjusted exactly as for a sole trader.

Depreciation follows the same three methods.

Irrecoverable debts and the allowance are treated in the same way.

A company has no drawings; directors' salaries are an expense instead.`,
      groups: [
        {
          subTitle: "Three Statements, Three Jobs",
          bullets: [
            "**Profit or loss:** performance for the period, ending in profit for the year.",
            "**Changes in equity:** how each component of equity moved during the year.",
            "**Financial position:** assets, liabilities and equity at the year end.",
            "Profit for the year links the first statement to the second.",
            "Closing equity links the second statement to the third.",
          ],
        },
        {
          subTitle: "Order of Deductions in the Profit Statement",
          bullets: [
            "Revenue − cost of sales = **gross profit**.",
            "Gross profit − expenses = **operating profit**.",
            "Operating profit − finance costs = **profit before tax**.",
            "Profit before tax − taxation = **profit for the year**.",
            "Dividends are never deducted anywhere in this statement.",
          ],
        },
      ],
      examinerTips: [
        "Follow the order: gross profit, operating profit, finance costs, tax, profit for the year.",
        "Keep dividends out of the statement of profit or loss entirely.",
        "Use one column per component of equity in the statement of changes in equity.",
        "Check that closing equity equals assets minus liabilities.",
        "Label the period for the profit statement and the date for the position statement.",
      ],
      commonMistakes: [
        "Deducting debenture interest after tax instead of before it.",
        "Showing dividends as an expense and so understating profit.",
        "Forgetting the transfer to reserve, which overstates retained earnings.",
        "Omitting the opening balance from the statement of changes in equity.",
        "Presenting directors' salaries as drawings.",
      ],
      recap: [
        "Operating profit is £75,000, debenture interest £5,000 and tax £18,000. Calculate profit for the year. [2]",
        "Retained earnings open at £30,000, profit for the year is £52,000, dividends £15,000 and a transfer to reserve £7,000. Calculate closing retained earnings. [2]",
        "State three differences between the statement of financial position of a company and that of a sole trader. [3]",
        "Explain why a dividend is not shown in the statement of profit or loss. [2]",
        "A company has equity £250,000, non-current liabilities £80,000 and current liabilities £45,000. Calculate total assets. [2]",
      ],
    },
    {
      title: "Manufacturing Accounts",
      body: `### Making Goods, Not Just Selling Them

A **manufacturing** business buys raw materials and converts them into finished goods.

It may also trade, provide a service, or do both.

The manufacturing account finds the **factory cost of production**.

That cost then becomes the cost of the goods available for sale.

### Direct Costs Build the Prime Cost

**Direct material** is the raw material that becomes part of the product.

**Direct labour** is the pay of the workers who make the product.

**Direct expenses** are costs of the product itself, such as royalties.

**Prime cost = direct material + direct labour + direct expenses.**

Material used = opening material + purchases − closing material.

### Indirect Costs Are Factory Overheads

**Factory overheads** are factory costs that cannot be traced to one unit.

Examples include factory rent, factory power and factory insurance.

Depreciation of plant and the supervisor's wages also belong here.

Office salaries, selling costs and administration stay in the profit statement.

### Work in Progress

**Work in progress** is partly finished production at the year end.

Opening work in progress was started last year, so it is added.

Closing work in progress belongs to next year, so it is deducted.

### The Factory Cost of Production

**Factory cost of production = prime cost + factory overheads + opening work in progress − closing work in progress.**

This figure is carried to the statement of profit or loss.

It is added to opening finished goods to give goods available for sale.

### Worked Example: Cost of Production

Opening raw materials are £6,000, purchases £54,000 and closing raw materials £8,000.

Direct material used = 6,000 + 54,000 − 8,000 = **£52,000**.

Direct labour is £30,000 and direct expenses are £2,000.

Prime cost = 52,000 + 30,000 + 2,000 = **£84,000**.

Factory overheads are rent £9,000, power £4,000 and plant depreciation £3,000, totalling **£16,000**.

Opening work in progress is £5,000 and closing work in progress £7,000.

Cost of production = 84,000 + 16,000 + 5,000 − 7,000 = **£98,000**.

### Worked Example: Through to Gross Profit

Opening finished goods are £12,000 and closing finished goods are £14,000.

Cost of sales = 12,000 + 98,000 − 14,000 = **£96,000**.

Revenue is £140,000, so gross profit = 140,000 − 96,000 = **£44,000**.

The position statement shows raw materials, work in progress and finished goods as inventory.`,
      figure: manufacturingArt,
      groups: [
        {
          subTitle: "Prime Cost or Overhead?",
          bullets: [
            "**Direct material:** timber, fabric or metal that forms the product.",
            "**Direct labour:** machine operators and assemblers paid for production.",
            "**Direct expenses:** royalties, or hire of equipment used only for one job.",
            "**Factory overheads:** factory rent, power, insurance, supervision, plant depreciation.",
            "**Neither:** office salaries, advertising and delivery to customers belong in the profit statement.",
          ],
        },
        {
          subTitle: "From Material to Gross Profit",
          bullets: [
            "Material used = opening material + purchases − closing material.",
            "Prime cost = direct material + direct labour + direct expenses.",
            "Cost of production = prime cost + factory overheads + opening WIP − closing WIP.",
            "Cost of sales = opening finished goods + cost of production − closing finished goods.",
            "Gross profit = revenue − cost of sales.",
          ],
        },
      ],
      examinerTips: [
        "Separate factory costs from office and selling costs before you begin.",
        "Calculate material used first; purchases alone are not direct material.",
        "Add opening work in progress and deduct closing work in progress.",
        "End the manufacturing account at cost of production, not at gross profit.",
        "Carry the cost of production into the trading section as goods produced.",
      ],
      commonMistakes: [
        "Using purchases instead of material consumed.",
        "Including office salaries in factory overheads.",
        "Deducting opening work in progress and adding closing work in progress.",
        "Adding factory overheads after the cost of production has been found.",
        "Counting finished goods inventory twice, in production and in cost of sales.",
      ],
      recap: [
        "Define prime cost and state its three components. [4]",
        "Opening material is £4,000, purchases £40,000 and closing material £5,000. Calculate material used. [2]",
        "Direct labour is £25,000, direct expenses £1,000, factory overheads £12,000, opening WIP £3,000 and closing WIP £4,000. Using your answer to Question 2, calculate the factory cost of production. [3]",
        "Explain why closing work in progress is deducted. [2]",
        "State two factory overheads and two expenses that stay out of the manufacturing account. [4]",
      ],
    },
    {
      title: "Clubs and Societies",
      body: `### A Club Exists for Its Members

A **club or society** provides facilities for members and is not run to make a profit.

Any surplus is kept to improve those facilities.

Members pay **subscriptions**, usually every year.

The club still needs accounts, and the same adjustments still apply.

### Receipts and Payments: Cash Only

A **receipts and payments account** lists cash received and cash paid.

It is a summary of the cash book for the period.

It mixes capital and revenue items and ignores accruals.

Its closing balance is the cash and bank held at the end.

It shows cash flow, not whether the club did well.

Opening cash £1,200 plus receipts £14,500 less payments £13,900 leaves **£1,800**.

### Income and Expenditure: Matched to the Year

An **income and expenditure account** is the club's version of the profit statement.

Income earned is matched with expenditure incurred for the same period.

Depreciation, accruals and prepayments are included.

A surplus increases the accumulated fund; a deficit reduces it.

### Subscriptions Must Be Adjusted

Subscriptions received in cash rarely equal subscriptions earned.

Subscriptions in arrears are owed by members, so the closing figure is added.

Subscriptions in advance relate to next year, so they are deducted.

Receipts are £8,000, opening arrears £600 and closing arrears £750.

Opening advance is £300 and closing advance is £400.

Income = 8,000 − 600 + 750 + 300 − 400 = **£8,050**.

### Trading Activities Such as Refreshments

A club may run a refreshment stall or a small shop.

Prepare a separate **trading account** for that activity.

Sales £4,800, opening inventory £220, purchases £3,100 and closing inventory £280.

Cost of sales = 220 + 3,100 − 280 = **£3,040**.

Profit = 4,800 − 3,040 = **£1,760**, transferred to the income and expenditure account.

### The Accumulated Fund

The **accumulated fund** is a club's capital.

**Accumulated fund = total assets − total liabilities** on the first day.

Equipment £9,000, cash £1,200 and arrears £600 give assets of £10,800.

Subscriptions in advance £300 and a loan £2,000 give liabilities of £2,300.

Accumulated fund = 10,800 − 2,300 = **£8,500**.

### Preparing the Statement of Financial Position

List non-current assets at net book value, then current assets.

Deduct current liabilities, then non-current liabilities such as the loan.

The balance is the accumulated fund plus any surplus for the year.

A deficit is deducted instead of added.

Income £12,000 less expenditure £9,500 gives a surplus of £2,500.

The accumulated fund becomes 8,500 + 2,500 = **£11,000**.`,
      groups: [
        {
          subTitle: "Which Account Do I Prepare?",
          bullets: [
            "**Receipts and payments:** cash book summary, for the year, no adjustments.",
            "**Income and expenditure:** accruals basis, showing a surplus or deficit.",
            "**Trading account:** one revenue activity, such as refreshments or a shop.",
            "**Statement of financial position:** assets, liabilities and accumulated fund.",
            "A receipts and payments account is never a substitute for the income account.",
          ],
        },
        {
          subTitle: "Club Balances to Carry Forward",
          bullets: [
            "Subscriptions in arrears are a current asset.",
            "Subscriptions in advance are a current liability.",
            "The refreshments inventory at the year end is a current asset.",
            "A loan to build an extension is a non-current liability.",
            "The accumulated fund replaces capital in the position statement.",
          ],
        },
      ],
      examinerTips: [
        "Decide first whether the question asks for cash figures or accruals figures.",
        "Adjust subscriptions with a ledger, never by guessing the direction.",
        "Keep the refreshments trading account separate, then transfer only its profit.",
        "Show the accumulated fund as the club's capital, not as a reserve.",
        "State that a surplus is not called profit, because a club is not trading.",
      ],
      commonMistakes: [
        "Adding closing subscriptions in advance instead of deducting them.",
        "Putting the purchase of equipment in the income and expenditure account.",
        "Calling the receipts and payments balance a surplus.",
        "Omitting depreciation because no cash was paid during the year.",
        "Forgetting to add the surplus to the accumulated fund.",
      ],
      recap: [
        "Distinguish between a receipts and payments account and an income and expenditure account. [4]",
        "Subscriptions received £12,000, opening arrears £800, closing arrears £950, opening advance £500 and closing advance £600. Calculate the subscriptions income. [3]",
        "A club has assets of £26,000 and liabilities of £7,000. Calculate the accumulated fund. [2]",
        "Refreshments sales £6,000, opening inventory £250, purchases £3,800 and closing inventory £300. Calculate the profit. [3]",
        "Explain why depreciation appears in the income and expenditure account but not in the receipts and payments account. [3]",
      ],
    },
    {
      title: "Incomplete Records",
      body: `### Why Records Stay Incomplete

Some owners keep only a cash book and a bank statement.

They record cash received and cash paid, but not the double entry.

Reasons include cost, lack of training and the belief that full records are unnecessary.

A very small business may feel it has too few transactions to justify a bookkeeper.

### Advantages and Disadvantages of Incomplete Records

Advantages are low cost and speed.

No bookkeeper is needed and the owner stays in full control.

Disadvantages are serious, because there is no arithmetical check on accuracy.

Profit is unknown, errors and theft are hidden, and lenders distrust the figures.

Decisions are then made without reliable information.

### The Statement of Affairs

A **statement of affairs** lists every asset and liability on one date.

**Capital = total assets − total liabilities.**

Prepared at the start of the year it gives **opening capital**.

Prepared at the end it gives **closing capital**.

### Profit from the Change in Capital

**Profit = closing capital + drawings − capital introduced − opening capital.**

Drawings are added back because they reduced capital.

Capital introduced is deducted because it raised capital without trading.

A rise in capital therefore does not always mean trading profit.

### Worked Example: Profit from Capital

Opening assets £30,000 and liabilities £12,000 give opening capital of **£18,000**.

Closing assets £41,000 and liabilities £14,000 give closing capital of **£27,000**.

Drawings are £9,000 and the owner introduced £4,000.

Profit = 27,000 + 9,000 − 4,000 − 18,000 = **£14,000**.

### Mark-Up and Margin

**Mark-up = gross profit ÷ cost of sales × 100.**

**Margin = gross profit ÷ revenue × 100.**

Revenue £60,000 with a mark-up of 25% gives cost of sales 60,000 ÷ 1.25 = **£48,000**.

Gross profit = 60,000 − 48,000 = **£12,000**.

Revenue £80,000 at a margin of 20% gives gross profit £16,000 and cost of sales £64,000.

A mark-up of 25% equals a margin of 20%, since 25 ÷ 125 × 100 = 20.

### Finding Sales, Purchases and Balances

Credit sales = cash received from receivables + closing receivables − opening receivables.

Received £52,000 with opening receivables £6,000 and closing £7,500 gives **£53,500**.

Credit purchases = payments to payables + closing payables − opening payables.

Paid £31,000 with opening payables £4,000 and closing £5,500 gives **£32,500**.

Add cash sales to credit sales to find total revenue.

### Inventory Turnover and Missing Cash

**Inventory turnover = cost of sales ÷ average inventory.**

Average inventory = (opening inventory + closing inventory) ÷ 2.

Cost of sales £96,000 with average inventory £12,000 gives **8 times** a year.

A cash account reveals missing cash: opening cash + receipts − payments − closing cash.

### Building the Statements from Scratch

Start with opening capital from the statement of affairs.

Find missing figures with the mark-up, the receivables and the payables.

Draft the statement of profit or loss.

Then draft the statement of financial position, using closing capital as the check.`,
      groups: [
        {
          subTitle: "Which Formula Finds What",
          bullets: [
            "**Opening or closing capital:** total assets − total liabilities.",
            "**Profit:** closing capital + drawings − capital introduced − opening capital.",
            "**Credit sales:** receipts from receivables + closing receivables − opening receivables.",
            "**Credit purchases:** payments to payables + closing payables − opening payables.",
            "**Inventory turnover:** cost of sales ÷ average inventory.",
          ],
        },
        {
          subTitle: "Mark-Up Against Margin",
          bullets: [
            "**Mark-up** compares gross profit with cost of sales.",
            "**Margin** compares gross profit with revenue.",
            "Cost of sales = revenue ÷ (1 + mark-up as a decimal).",
            "Gross profit = revenue × margin as a decimal.",
            "Mark-up 25% is the same as margin 20%, because 25 ÷ 125 = 20%.",
          ],
        },
        {
          subTitle: "Checking Your Answer",
          bullets: [
            "Compare the finished position statement with the closing capital.",
            "Add the profit figure back to opening capital and deduct drawings.",
            "Check that total assets less liabilities equals the same capital.",
            "Look for a suspense figure if the two sides disagree.",
            "Treat stolen cash as an expense only after the cash account is balanced.",
          ],
        },
      ],
      examinerTips: [
        "Draw up statements of affairs for both dates before calculating profit.",
        "Add drawings and deduct capital introduced in the profit formula.",
        "Convert mark-up to cost of sales by dividing by 100% plus the mark-up.",
        "Use a payables or receivables account to find the missing figure.",
        "Check the finished position statement against closing capital.",
      ],
      commonMistakes: [
        "Subtracting drawings instead of adding them back.",
        "Treating capital introduced as trading profit.",
        "Applying a mark-up percentage to revenue.",
        "Using closing inventory alone as average inventory.",
        "Ignoring stolen cash, so the missing figure is never found.",
      ],
      recap: [
        "State two reasons why a business might not keep full double-entry records. [2]",
        "Opening capital £22,000, closing capital £31,000, drawings £8,000 and capital introduced £5,000. Calculate profit. [3]",
        "Revenue is £72,000 and the mark-up is 20%. Calculate cost of sales and gross profit. [3]",
        "Revenue is £90,000 and the margin is 30%. Calculate gross profit. [2]",
        "Payments to payables £28,000, opening payables £3,500 and closing payables £4,500. Calculate credit purchases. [2]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_5: Chapter = chapterFive;
