import type { SubjectNotes } from "./types";

export const ACCOUNTING: SubjectNotes = {
  id: "accounting",
  name: "Accounting",
  code: "0452",
  color: "bg-emerald-600",
  chapters: [
    {
      number: 1,
      title: "The Accounting System",
      intro: "Accounting is the process of recording, classifying, summarising, and interpreting financial transactions to help decision-makers. The double-entry bookkeeping system records every transaction in two accounts — a debit in one account and a credit in another of equal value — ensuring the accounting equation always balances: Assets = Liabilities + Capital. Understanding this fundamental principle, the nature of accounts, and the distinction between different types of assets and liabilities is the foundation of all further accounting study.",
      subheadings: [
        {
          title: "The Accounting Equation and Double-Entry Bookkeeping",
          body: "The accounting equation Assets = Liabilities + Capital (Owner's Equity) must always hold true. Assets are resources owned or controlled by the business that will generate future economic benefit: non-current assets (used in the business for more than one year — land, buildings, machinery, vehicles) and current assets (expected to be converted into cash within one year — inventory/stock, trade receivables/debtors, cash and bank balances). Liabilities are amounts owed by the business to external parties: non-current liabilities (due for repayment after more than one year — long-term loans, mortgages) and current liabilities (due within one year — trade payables/creditors, bank overdraft, accruals). Capital is the owner's investment in the business — it increases with profits and additional capital introduced, and decreases with drawings (the owner taking money out) and losses. Every transaction affects at least two accounts. Double-entry bookkeeping records the dual effect: every debit has an equal and opposite credit. Debits increase asset and expense accounts; credits increase liability, capital, and income accounts. The rules are summarised: Debit the account that receives value; Credit the account that gives value.",
          groups: [
            {
              subTitle: "Debits and credits — the rules",
              bullets: [
                "**Assets**: Debit to increase, credit to decrease. Example: when cash is received from a customer, debit Cash (asset increases).",
                "**Liabilities**: Credit to increase, debit to decrease. Example: when a bank loan is taken out, credit Loan (liability increases); debit Bank (asset increases).",
                "**Capital**: Credit to increase, debit to decrease. Profits added to capital at year-end (credit Capital); drawings reduce capital (debit Capital/Drawings).",
                "**Revenue/Income**: Credit to increase. When a sale is made on credit: debit Trade Receivables (asset increases); credit Sales Revenue (income increases).",
                "**Expenses**: Debit to increase. When rent is paid: debit Rent Expense; credit Bank (asset decreases)."
              ]
            }
          ],
          recap: [
            "State the accounting equation and explain each of its three components. [3]",
            "Explain the double-entry for the following transaction: a business buys machinery for £5,000 by bank transfer. [2]",
            "Distinguish between current assets and non-current assets, giving one example of each. [3]",
            "A business has assets of £120,000 and liabilities of £45,000. Calculate the owner's capital. [2]"
          ]
        },
        {
          title: "Financial Statements: Income Statement and Balance Sheet",
          body: "The income statement (profit and loss account) shows a business's financial performance over an accounting period (usually one year). It calculates: Gross Profit = Revenue - Cost of Sales. Cost of Sales = Opening Inventory + Purchases - Closing Inventory. Profit for the Period (Net Profit) = Gross Profit - Expenses. Expenses include rent, wages, insurance, depreciation, and interest payments. Depreciation is the systematic allocation of the cost of a non-current asset over its useful life, reflecting the reduction in value due to wear, age, or obsolescence. The straight-line method charges equal depreciation each year: annual depreciation = (cost - residual value) / useful life. The reducing balance method charges a fixed percentage of the net book value each year, giving higher charges in early years. The balance sheet (statement of financial position) shows the financial position at a specific date: it lists assets, liabilities, and capital. The balance sheet must balance: Assets = Liabilities + Capital. Non-current assets are shown at net book value (cost minus accumulated depreciation). Working capital (net current assets) = current assets - current liabilities — it measures the business's ability to meet short-term obligations. Adequate working capital is essential for day-to-day operations; insufficient working capital leads to liquidity problems.",
          groups: [
            {
              subTitle: "Depreciation calculations",
              bullets: [
                "**Straight-line method**: Machine costs £20,000, residual value £2,000, useful life 9 years. Annual depreciation = (20,000 - 2,000) / 9 = £2,000 per year. Net book value after 3 years = 20,000 - (3 × 2,000) = £14,000.",
                "**Reducing balance method**: Machine costs £10,000, depreciation rate 20% per year. Year 1: 20% × 10,000 = £2,000 depreciation; NBV = £8,000. Year 2: 20% × 8,000 = £1,600; NBV = £6,400. Year 3: 20% × 6,400 = £1,280; NBV = £5,120.",
                "**Why depreciate**: The matching principle requires expenses to be matched against the revenue they help generate. A machine used for 5 years helps generate revenue for 5 years — its cost should be spread over those 5 years, not charged entirely in year 1.",
                "**Working capital management**: Too little working capital: cannot pay suppliers or wages on time — leads to insolvency. Too much: cash tied up in inventory or receivables earning no return. The goal is optimal working capital — enough to operate efficiently without excessive idle resources."
              ]
            }
          ],
          recap: [
            "Calculate the gross profit and net profit from the following data: Revenue £80,000; Opening inventory £5,000; Purchases £45,000; Closing inventory £8,000; Wages £12,000; Rent £4,000. [4]",
            "A vehicle costs £18,000 and is depreciated using the straight-line method over 6 years with a residual value of £3,000. Calculate the annual depreciation charge and the net book value at the end of year 4. [3]",
            "Explain the purpose of a balance sheet and state the accounting equation it must satisfy. [3]",
            "Explain why a business with high profits might still face cash flow problems. [3]"
          ]
        }
      ]
    }
  ]
};
