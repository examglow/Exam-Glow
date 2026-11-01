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

const capitalRevenueArt = artPanel([
  {
    src: "ac04-capital-expenditure.webp",
    alt: "Flat cartoon of workers installing a new machine in a factory while an invoice marked capital sits on a desk",
    caption: "Buying capacity, not running costs",
  },
  {
    src: "ac04-revenue-expenditure.webp",
    alt: "Flat cartoon of a mechanic servicing a delivery van with an oil can, a spanner and a repair bill",
    caption: "Keeping the asset working",
  },
]);

const depreciationArt = artPanel([
  {
    src: "ac04-straight-line-depreciation.webp",
    alt: "Flat cartoon of a delivery van above two graphs, one a falling straight line and one a steeply curving line",
    caption: "Two ways to spread the cost",
  },
  {
    src: "ac04-disposal-account.webp",
    alt: "Flat cartoon of an old machine being loaded onto a lorry while an accountant writes up the disposal account",
    caption: "Cost out, proceeds in",
  },
]);

const badDebtArt = artPanel([
  {
    src: "ac04-bad-debt-write-off.webp",
    alt: "Flat cartoon of a shopkeeper crossing out an unpaid invoice while a customer walks away with empty pockets",
    caption: "Money that will never arrive",
  },
  {
    src: "ac04-allowance-adjustment.webp",
    alt: "Flat cartoon of an accountant turning a percentage dial beside a stack of customer invoices",
    caption: "An estimate, not a write-off",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Accounting Procedures",
  intro: `Not every payment is an expense, and not every receipt is income.\n\n**Capital** spending buys assets; **revenue** spending runs the business.\n\n**Depreciation**, **accruals** and **allowances** match costs to the year that earned them.\n\n**Inventory** is valued prudently at the lower of cost and net realisable value.\n\nGet these five procedures right and the financial statements fall into place.`,
  subheadings: [
    {
      title: "Capital and Revenue Expenditure and Receipts",
      body: `### Two Kinds of Payment

Capital expenditure buys or improves a non-current asset.

Revenue expenditure runs the business day to day.

The label decides whether a cost sits in the asset section or the income statement.

### Capital Expenditure

The purchase price of machinery, vehicles, buildings or equipment.

Delivery, installation and legal fees needed to bring the asset into use.

An improvement that raises earning capacity, such as extending a shop.

### Revenue Expenditure

Repairs, servicing and repainting that keep an asset working.

Rent, wages, insurance, stationery and carriage outwards.

Any cost whose benefit is used up within the year.

### Capital Receipts

Money from selling a non-current asset is a capital receipt.

A loan received is a capital receipt.

Capital introduced by the owner is a capital receipt.

None of these is revenue, so none is recorded as sales.

### Revenue Receipts

Sales of goods or services are revenue receipts.

Interest received, rent received and discount received are revenue receipts.

They appear in the income statement for the period.

### Accounting for Each

Capital expenditure: debit the non-current asset account.

Revenue expenditure: debit the expense account.

Capital receipts: credit the loan account or the disposal account.

Revenue receipts: credit the income account.

Sale proceeds go to the disposal account, never to the sales account.

### Worked Example: Cost Wrongly Expensed

A business buys a machine for £8,000 and debits purchases.

Depreciation of 10% a year should be charged, which is £800.

The wrong entry cut profit by £8,000; the correct charge is £800.

Profit is therefore understated by 8,000 − 800 = £7,200.

Non-current assets are also understated by £7,200, at net book value.

Capital is understated by the same £7,200.

### Worked Example: Cost Wrongly Capitalised

A van repair of £1,200 is debited to the motor vehicles account.

Profit is overstated by £1,200, because the expense was missed.

Non-current assets are overstated by £1,200 before depreciation.

With depreciation at 25%, the charge is 1,200 × 25% = £300.

Profit and assets are then each overstated by 1,200 − 300 = £900.

### Effect on Asset Valuation

Wrongly expensed capital spending leaves assets too low.

Wrongly capitalised revenue spending leaves assets too high.

Depreciation on the wrong figure repeats the error every year.

### Why the Distinction Matters

It changes profit, asset values and the owner's capital.

It affects the reliability of the statement of financial position.

It also affects tax, because capital costs are treated differently.`,
      figure: capitalRevenueArt,
      groups: [
        {
          subTitle: "Capital Expenditure",
          bullets: [
            "**Purchase:** buying a non-current asset outright or on credit.",
            "**Bringing into use:** delivery, installation, testing and legal fees.",
            "**Improvement:** an extension or upgrade that raises earning capacity.",
            "**Not repairs:** routine servicing is revenue, however large the bill.",
            "**Result:** debited to the asset account, then depreciated over its life.",
          ],
        },
        {
          subTitle: "Revenue Expenditure",
          bullets: [
            "Repairs, servicing, repainting and replacement of small parts.",
            "Rent, rates, insurance, wages, stationery and advertising.",
            "Carriage outwards, which is a selling cost, not part of purchases.",
            "Any cost whose benefit is consumed within the accounting year.",
            "**Result:** debited to an expense account in the income statement.",
          ],
        },
        {
          subTitle: "Capital and Revenue Receipts",
          bullets: [
            "**Capital receipts:** sale of a non-current asset, a loan, capital introduced.",
            "**Revenue receipts:** sales, interest received, rent received, discount received.",
            "Capital receipts never appear as sales revenue.",
            "Sale proceeds are credited to the disposal account.",
            "A loan is credited to the loan account, a liability.",
          ],
        },
      ],
      examinerTips: [
        "Ask whether the spending creates or improves an asset, or simply keeps it running.",
        "Add delivery and installation costs to the asset account, not to expenses.",
        "State the effect on profit first, then on assets, then on capital.",
        "Use the words understated and overstated with a figure, because both earn marks.",
        "Remember depreciation on a wrongly capitalised item, which reduces the final error.",
      ],
      commonMistakes: [
        "Treating a large repair bill as capital expenditure because the amount is large.",
        "Adding carriage outwards to the cost of purchases; it is a selling expense.",
        "Recording loan money as sales revenue.",
        "Forgetting that a wrongly expensed asset also needs depreciation in later years.",
        "Giving the effect on profit without the effect on assets and capital.",
      ],
      recap: [
        "Distinguish between capital expenditure and revenue expenditure. [2]",
        "Classify each item: factory extension, van service, installation of a machine, office rent. [4]",
        "A machine costing £8,000 was debited to purchases. Depreciation is 10% a year. Explain the effect on profit and on non-current assets. [5]",
        "Explain why the proceeds of selling a vehicle are not recorded as sales revenue. [2]",
        "State two examples of capital receipts. [2]",
      ],
    },
    {
      title: "Depreciation and Disposal of Non-Current Assets",
      body: `### What Depreciation Means

Depreciation spreads the cost of a non-current asset over its useful life.

It matches the expense with the revenue the asset helps earn.

It is not a fund of cash, and it is not the market value of the asset.

### Why It Must Be Charged

Assets wear out through use.

They become obsolete as technology moves on.

Without depreciation, profit and assets would both be overstated.

The charge also spreads a large cost fairly across the years that benefit.

### Straight-Line Method

Charge the same amount every year.

**Annual depreciation = (cost − residual value) ÷ useful life.**

Example: cost £24,000, residual value £4,000, useful life five years.

Charge = (24,000 − 4,000) ÷ 5 = 20,000 ÷ 5 = £4,000 each year.

After three years, accumulated depreciation is £12,000 and net book value is £12,000.

### Reducing Balance Method

Charge a fixed percentage of the net book value each year.

Year 1: 20% × £24,000 = £4,800, leaving £19,200.

Year 2: 20% × £19,200 = £3,840, leaving £15,360.

Year 3: 20% × £15,360 = £3,072, leaving £12,288.

The charge falls each year, which suits assets that lose value quickly.

### Revaluation Method

Revalue the asset at the end of each year.

**Depreciation = opening valuation + purchases − closing valuation.**

Example: loose tools valued at £4,200 at the start, £1,300 bought, £4,750 at the end.

Depreciation = 4,200 + 1,300 − 4,750 = £750.

### Choosing a Method

Straight line suits buildings and machinery used evenly.

Reducing balance suits computers and vehicles that lose value fast.

Revaluation suits small items such as loose tools and crockery.

The method must be applied consistently once chosen.

### Recording Depreciation

Journal: debit depreciation expense, credit provision for depreciation.

The asset account stays at cost throughout.

The provision account gathers every yearly charge.

Net book value = cost − provision for depreciation.

### Buying an Asset

Journal: debit the asset account, credit the payable or the bank.

Delivery and installation costs are added to the asset account.

The asset is then depreciated from the date it is brought into use.

### Selling an Asset

Three steps, always in the same order.

Transfer the cost: debit disposal, credit the asset account.

Transfer the accumulated depreciation: debit provision, credit disposal.

Record the proceeds: debit bank, credit disposal.

The remaining balance on the disposal account is a profit or a loss.

### Profit or Loss on Disposal

**Profit or loss = proceeds − net book value.**

Example: cost £12,000, accumulated depreciation £7,500, proceeds £5,200.

Net book value = 12,000 − 7,500 = £4,500.

Profit = 5,200 − 4,500 = £700.

Journal: debit disposal £700, credit income statement £700.

### Worked Example: Loss on Disposal

Cost £18,000, accumulated depreciation £11,000, proceeds £6,500.

Net book value = 18,000 − 11,000 = £7,000.

Loss = 7,000 − 6,500 = £500.

Journal: debit income statement £500, credit disposal £500.

### Part Exchange

The trade-in value is treated as the proceeds.

The new asset is debited at its full price.

The old asset still passes through the disposal account.`,
      figure: depreciationArt,
      groups: [
        {
          subTitle: "The Three Methods",
          bullets: [
            "**Straight line:** (cost − residual value) ÷ useful life, equal every year.",
            "**Reducing balance:** a fixed percentage of the net book value each year.",
            "**Revaluation:** opening valuation + purchases − closing valuation.",
            "Straight line suits buildings and steadily used machinery.",
            "Reducing balance suits computers and vehicles losing value fast.",
            "Revaluation suits loose tools and small equipment.",
          ],
        },
        {
          subTitle: "Journals You Must Know",
          bullets: [
            "**Buy an asset:** debit asset, credit payable or bank.",
            "**Depreciation:** debit depreciation expense, credit provision for depreciation.",
            "**Transfer cost on sale:** debit disposal, credit asset account.",
            "**Transfer depreciation on sale:** debit provision, credit disposal.",
            "**Record proceeds:** debit bank, credit disposal.",
            "**Profit:** debit disposal, credit income statement; a loss reverses this.",
          ],
        },
        {
          subTitle: "What Depreciation Is Not",
          bullets: [
            "It is not money set aside; no cash is saved by charging it.",
            "It is not the market value of the asset.",
            "It is not a payment to anyone.",
            "It is an allocation of cost, matched to the years that benefit.",
          ],
        },
      ],
      examinerTips: [
        "Write the formula, then the substitution, then the answer for the method mark.",
        "Work out net book value before comparing with the proceeds.",
        "Keep the cost in the asset account and gather charges in the provision account.",
        "State the disposal journal in three clear stages, because examiners look for the order.",
        "Say clearly whether the balance on the disposal account is a profit or a loss.",
      ],
      commonMistakes: [
        "Charging reducing balance on cost rather than on net book value.",
        "Forgetting to deduct the residual value in the straight-line formula.",
        "Crediting sale proceeds to the asset account instead of the disposal account.",
        "Reporting a profit when the proceeds are below net book value.",
        "Treating depreciation as a cash fund set aside for replacement.",
      ],
      recap: [
        "Define depreciation and explain why it is charged. [3]",
        "A machine costs £24,000 with a residual value of £4,000 and a life of five years. Calculate the annual straight-line charge. [2]",
        "Equipment costs £10,000 and is depreciated at 20% reducing balance. Calculate the charge for each of the first three years. [3]",
        "A vehicle costing £18,000 with accumulated depreciation of £11,000 is sold for £6,500. Calculate the profit or loss on disposal. [3]",
        "Give the journal entries to record the sale of a non-current asset for cash. [4]",
      ],
    },
    {
      title: "Other Payables and Other Receivables",
      body: `### Matching Costs with Revenue

The matching principle charges a cost to the period it helped earn revenue.

Accruals accounting records income when earned and expenses when incurred.

Cash paid or received is not always the expense or income of the year.

### Four Adjustments

Accrued expense: incurred but not yet paid.

Prepaid expense: paid but not yet used.

Accrued income: earned but not yet received.

Income received in advance: received but not yet earned.

### Accrued Expenses

Add the accrual to the expense for the year.

It is a current liability, shown under other payables.

Journal: debit the expense, credit accrued expenses.

### Prepaid Expenses

Deduct the prepayment from the expense for the year.

It is a current asset, shown under other receivables.

Journal: debit prepaid expenses, credit the expense.

### Accrued Income

Add it to the income for the year.

It is a current asset, shown under other receivables.

Journal: debit accrued income, credit the income account.

### Income Received in Advance

Deduct it from the income for the year.

It is a current liability, shown under other payables.

Journal: debit the income account, credit income received in advance.

### Working the Figures

Expense for the year = paid + closing accrual − opening accrual + opening prepayment − closing prepayment.

Income for the year = received + closing accrued income − opening accrued income.

Then deduct closing income in advance and add back opening income in advance.

The opening figure from last year always reverses the earlier adjustment.

### Worked Example: Accrued Expense

Rent paid during the year was £9,600 and £800 was owing at the year end.

Nothing was owing at the start of the year.

Charge for the year = 9,600 + 800 = £10,400.

Journal: debit rent £800, credit accrued expenses £800.

The statement of financial position shows a current liability of £800.

### Worked Example: Prepaid Expense

Insurance of £2,400 was paid on 1 April for twelve months.

The year ends on 31 December, so nine months have expired.

Expense = 2,400 × 9/12 = £1,800.

Prepayment = 2,400 × 3/12 = £600.

Journal: debit prepaid expenses £600, credit insurance £600.

### Worked Example: Accrued Income

Commission received in cash during the year was £4,500.

A further £400 had been earned but not received.

Income for the year = 4,500 + 400 = £4,900.

Journal: debit accrued income £400, credit commission received £400.

### Worked Example: Income in Advance

Rent received was £6,000, including £500 relating to next year.

Income for the year = 6,000 − 500 = £5,500.

Journal: debit rent received £500, credit income received in advance £500.

### Next Year Reverses

An opening accrual is a credit balance in the expense account.

An opening prepayment is a debit balance in the expense account.

Reversing them stops the same amount being charged twice.

### Ledger Effect

In an expense account, the accrual is debited and the prepayment credited.

In an income account, the accrual is credited and the advance debited.

The balance sent to the income statement is the true figure for the year.`,
      groups: [
        {
          subTitle: "Which Adjustment, Which Side",
          bullets: [
            "**Accrued expense:** debit expense, credit other payables.",
            "**Prepaid expense:** debit other receivables, credit expense.",
            "**Accrued income:** debit other receivables, credit income.",
            "**Income in advance:** debit income, credit other payables.",
            "Accrued items are owed to or by the business at the year end.",
            "Prepaid and advance items are the reverse, paid or received early.",
          ],
        },
        {
          subTitle: "Where They Appear",
          bullets: [
            "Accrued expenses and income in advance are current liabilities.",
            "Prepaid expenses and accrued income are current assets.",
            "All four are grouped as other payables or other receivables.",
            "They never appear inside the trade receivables or trade payables figures.",
            "Each one reverses automatically in the following year.",
          ],
        },
        {
          subTitle: "Checking Your Answer",
          bullets: [
            "Compare the figure with cash paid or received; it should differ by the adjustments.",
            "Check that the journal debits equal the credits.",
            "Check that the balance sheet effect matches the profit effect.",
            "For part-years, convert months into a fraction of the annual amount.",
          ],
        },
      ],
      examinerTips: [
        "Write the journal entry before the figures, because the entry earns separate marks.",
        "State whether each balance is a current asset or a current liability.",
        "For part-year prepayments, count the months expired and the months remaining.",
        "Show the calculation of the year's charge as paid plus accrual, or paid less prepayment.",
        "Remember that opening adjustments reverse the previous year's closing adjustment.",
      ],
      commonMistakes: [
        "Adding a prepayment to the expense instead of deducting it.",
        "Treating accrued income as a liability; it is a current asset.",
        "Ignoring the opening accrual, which double counts the expense.",
        "Recording an accrual by crediting the bank, which has not changed.",
        "Putting other payables inside trade payables in the statement of financial position.",
      ],
      recap: [
        "Explain the matching principle and why accruals are needed. [3]",
        "Rent paid is £9,600 and £800 is owing at the year end. Calculate the charge for the year and state the journal entry. [4]",
        "Insurance of £2,400 is paid on 1 April for twelve months; the year ends on 31 December. Calculate the expense and the prepayment. [3]",
        "Commission received is £4,500 and £400 is still owing. Calculate the income for the year and state where the £400 appears. [3]",
        "Rent received of £6,000 includes £500 for next year. Calculate the income for the year and state its journal entry. [4]",
      ],
    },
    {
      title: "Irrecoverable Debts and the Allowance",
      body: `### Irrecoverable Debts

An irrecoverable debt is money owed that will never be collected.

It may arise from insolvency, a dispute or a customer who cannot be traced.

The debt is removed from receivables and charged as an expense.

### Writing Off a Debt

Journal: debit irrecoverable debts, credit the customer's account.

The customer's account is then closed.

Profit falls by the amount written off.

### Recovering a Written-Off Debt

First restore the debt: debit the customer's account, credit irrecoverable debts recovered.

Then record the cash: debit bank, credit the customer's account.

The recovery is income of the period in which it is received.

### Why an Allowance Is Needed

Some debts are doubtful rather than certainly bad.

Prudence requires an estimate in the same period as the sales.

The allowance reduces receivables to a realistic figure.

It is shown as a deduction from trade receivables, not as a liability.

### Creating the Allowance

Estimate a percentage of trade receivables.

Journal: debit irrecoverable debts expense, credit allowance for irrecoverable debts.

The allowance is a credit balance in the ledger.

No individual customer's account is changed.

### Adjusting the Allowance

Increase: debit the expense, credit the allowance.

Decrease: debit the allowance, credit the expense.

Only the change is charged or credited, never the whole balance.

### Worked Example: Creating the Allowance

Trade receivables are £48,000 and the allowance is set at 5%.

Allowance = 48,000 × 5% = £2,400.

Journal: debit irrecoverable debts £2,400, credit allowance £2,400.

Receivables in the statement of financial position = 48,000 − 2,400 = £45,600.

### Worked Example: Adjusting the Allowance

Next year receivables are £52,000, so the allowance needed is £2,600.

Increase required = 2,600 − 2,400 = £200.

Journal: debit irrecoverable debts £200, credit allowance £200.

### Worked Example: Write-Off Plus Allowance

Receivables are £40,000 and £1,200 is written off as irrecoverable.

Remaining receivables = 40,000 − 1,200 = £38,800.

Allowance at 5% = £1,940, against £2,000 last year.

The allowance falls by 2,000 − 1,940 = £60.

Journal: debit allowance £60, credit irrecoverable debts £60.

### Effect on Profit

A write-off reduces profit.

An increase in the allowance reduces profit.

A decrease in the allowance increases profit.

A recovery of a bad debt increases profit.

### Digital Records

Software flags overdue accounts and ageing balances.

A write-off is still a journal, approved and dated.

An allowance is still an estimate, reviewed each year end.`,
      figure: badDebtArt,
      groups: [
        {
          subTitle: "Write-Off and Recovery",
          bullets: [
            "**Write off:** debit irrecoverable debts, credit the customer.",
            "**Recovery, step one:** debit the customer, credit irrecoverable debts recovered.",
            "**Recovery, step two:** debit bank, credit the customer.",
            "Both steps are needed, so the ledger shows the debt was once owed.",
            "Recovered debts are income, not a reduction in an expense.",
          ],
        },
        {
          subTitle: "Allowance Mechanics",
          bullets: [
            "It is an estimate of doubtful debts, not a list of named bad debts.",
            "It is a credit balance, deducted from trade receivables.",
            "Create it by debiting the expense and crediting the allowance.",
            "Increase it with a further debit to the expense.",
            "Reduce it by debiting the allowance and crediting the expense.",
            "Never enter it in a control account.",
          ],
        },
        {
          subTitle: "Profit Effects",
          bullets: [
            "Writing off a debt is an expense, so profit falls.",
            "Raising the allowance is an expense, so profit falls.",
            "Lowering the allowance is income, so profit rises.",
            "Recovering a written-off debt is income, so profit rises.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish clearly between an irrecoverable debt and an allowance for doubtful debts.",
        "Use two entries for a recovery, because examiners award a mark for each.",
        "Calculate the allowance on receivables after any write-offs.",
        "Give the change in the allowance, not the full balance, in the income statement.",
        "State that the allowance is deducted from receivables in the statement of financial position.",
      ],
      commonMistakes: [
        "Crediting irrecoverable debts recovered when the cash arrives, and skipping the reinstatement.",
        "Charging the whole new allowance to the income statement every year.",
        "Calculating the allowance before deducting a written-off debt.",
        "Showing the allowance as a current liability instead of a deduction from receivables.",
        "Debiting the allowance when it should be credited.",
      ],
      recap: [
        "Distinguish between an irrecoverable debt and an allowance for irrecoverable debts. [2]",
        "A debt of £350 written off last year is now recovered. Give both journal entries. [4]",
        "Trade receivables are £48,000 and the allowance is 5%. Calculate the allowance and the receivables figure shown in the statement of financial position. [3]",
        "Receivables are £52,000 and the allowance needed is £2,600, against £2,400 last year. Calculate and explain the charge for the year. [3]",
        "Receivables are £40,000, £1,200 is written off, and the allowance is 5%. Calculate the new allowance and the fall from last year's £2,000. [4]",
      ],
    },
    {
      title: "Valuation of Inventory",
      body: `### The Rule

Inventory is valued at the lower of cost and net realisable value.

This is the prudence concept in action.

It stops assets and profit from being overstated.

### What Cost Includes

The purchase price of the goods.

Carriage inwards, the cost of bringing goods to the business.

Conversion costs for goods the business manufactures.

It excludes carriage outwards and every selling cost.

Trade discount is deducted; settlement discount is ignored.

### Net Realisable Value

**NRV = expected selling price − costs to complete − selling costs.**

Example: an item costing £20 can be sold for £22.

Selling costs are £3, so NRV = 22 − 3 = £19.

It is valued at £19, because that is the lower figure.

### Valuing Item by Item

Apply the rule to each item, not to the total.

One profitable line cannot hide a loss-making line.

Add the lower figure for each item to reach the total.

### Worked Example: Three Items

Item A: cost £12, NRV £15, so value £12.

Item B: cost £20, NRV £17, so value £17.

Item C: cost £8, NRV £8, so value £8.

Total inventory = 12 + 17 + 8 = £37.

Using cost alone would have given £40, overstating inventory by £3.

### Worked Example: Damaged Goods

100 units cost £22 each, so total cost is £2,200.

They sell for £25 each, after repair costing £6 each and selling costs of £1 each.

NRV per unit = 25 − 6 − 1 = £18.

Value = 100 × 18 = £1,800, which is the lower figure.

### Effect of Overvaluation

Closing inventory overstated by £1,200.

Cost of sales is understated, so gross profit is overstated by £1,200.

Profit for the year is overstated by £1,200.

Current assets and equity are both overstated by £1,200.

Next year the opening inventory is overstated, so that year's gross profit is understated.

### Effect of Undervaluation

Closing inventory understated by £900.

Cost of sales is overstated, so gross profit is understated by £900.

Profit for the year, current assets and equity are each understated by £900.

### Worked Example: Correcting an Error

Inventory was valued at £19,600 but should have been £18,400.

The closing inventory is overstated by 19,600 − 18,400 = £1,200.

Correct profit = draft profit − 1,200.

If the draft profit was £26,000, the corrected profit is £24,800.

### Why the Figure Matters

Closing inventory feeds cost of sales, so it changes gross profit.

It is a current asset, so it changes working capital.

It appears in the statement of financial position at the year end only.`,
      groups: [
        {
          subTitle: "The Valuation Rule",
          bullets: [
            "Value at the lower of cost and net realisable value.",
            "Apply the rule to each item separately, then add.",
            "Prudence prevents overstated profit and overstated assets.",
            "Inventory is a current asset in the statement of financial position.",
            "The closing figure becomes next year's opening inventory.",
          ],
        },
        {
          subTitle: "Cost or NRV?",
          bullets: [
            "**Cost:** purchase price plus carriage inwards and conversion costs.",
            "**Exclude:** carriage outwards, selling costs and administration costs.",
            "**NRV:** selling price less costs to complete and costs to sell.",
            "Damaged, obsolete or slow-moving goods usually fall to NRV.",
            "A rise in market price never pushes inventory above cost.",
          ],
        },
        {
          subTitle: "Tracing an Error Through",
          bullets: [
            "Closing inventory too high means cost of sales too low and profit too high.",
            "Closing inventory too low means cost of sales too high and profit too low.",
            "The error reverses next year through opening inventory.",
            "Current assets and equity move with the profit figure.",
            "Always state the direction and the amount of each effect.",
          ],
        },
      ],
      examinerTips: [
        "Calculate NRV item by item and compare with cost before choosing a figure.",
        "Show the comparison, because the choice of figure carries the mark.",
        "For error questions, work through cost of sales to reach gross profit.",
        "State that the effect reverses in the following year through opening inventory.",
        "Remember that inventory is a current asset, so equity changes with profit.",
      ],
      commonMistakes: [
        "Valuing the whole total at the lower of total cost and total NRV.",
        "Including carriage outwards in the cost of inventory.",
        "Adding selling costs to NRV instead of deducting them.",
        "Forgetting that a closing inventory error reverses next year.",
        "Changing the inventory figure without adjusting cost of sales and profit.",
      ],
      recap: [
        "State the rule for valuing inventory and explain why it is used. [3]",
        "Item A costs £12 with NRV £15; item B costs £20 with NRV £17; item C costs £8 with NRV £8. Calculate the inventory value. [3]",
        "100 units cost £22 each and sell for £25 each after repair of £6 and selling costs of £1 per unit. Calculate the value. [4]",
        "Closing inventory was valued at £19,600 instead of £18,400. Explain the effect on gross profit, profit for the year and current assets. [4]",
        "Draft profit is £26,000 and closing inventory is overstated by £1,200. Calculate the corrected profit. [2]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_4: Chapter = chapterFour;
