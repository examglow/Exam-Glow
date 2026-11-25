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

const profitabilityArt = artPanel([
  {
    src: "ac06-gross-profit-margin.webp",
    alt: "Flat cartoon of a market stallholder weighing coins against a price tag, with a large percentage sign above the stall",
    caption: "Profit measured against sales",
  },
  {
    src: "ac06-roce-formula.webp",
    alt: "Flat cartoon of an accountant pointing at a large circular gauge beside a factory and a bank building",
    caption: "Return on the money invested",
  },
]);

const liquidityArt = artPanel([
  {
    src: "ac06-current-ratio.webp",
    alt: "Flat cartoon of a shopkeeper balancing scales, with coins on one pan and a pile of unpaid bills on the other",
    caption: "Can the bills be paid?",
  },
  {
    src: "ac06-inventory-turnover.webp",
    alt: "Flat cartoon of boxes moving along a conveyor belt in a stockroom while a wall calendar flips over",
    caption: "How fast stock moves",
  },
]);

const usersArt = artPanel([
  {
    src: "ac06-bank-loan-meeting.webp",
    alt: "Flat cartoon of a bank manager reading a financial report across a desk while a business owner waits",
    caption: "Lenders read the liquidity first",
  },
  {
    src: "ac06-investor-comparison.webp",
    alt: "Flat cartoon of an investor comparing two folders of accounts, one marked with a rising arrow",
    caption: "Investors compare before they commit",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Analysis and Interpretation",
  intro: `A set of figures says little on its own.\n\n**Ratios** turn those figures into comparisons of profit, liquidity and efficiency.\n\nThey let a business track its own progress and judge itself against rivals.\n\nEvery ratio needs interpretation, because a number without a comment earns few marks.\n\nRemember too that **accounting statements** are historic, and they leave out much that matters.`,
  subheadings: [
    {
      title: "Profitability Ratios",
      body: `### Ratios Turn Figures into Comparisons

A single profit figure tells you little without something to compare it with.

**Ratios** express one figure as a percentage or a proportion of another.

They allow comparison over time, between products and between businesses.

### Gross Profit Margin

**Gross profit margin** compares gross profit with revenue.

Use **gross profit margin = (gross profit ÷ revenue) × 100**.

It answers one question: how much of every £1 of sales survives after cost of sales?

### Mark-up

**Mark-up** compares gross profit with cost of sales instead.

Use **mark-up = (gross profit ÷ cost of sales) × 100**.

It shows the percentage added to cost in order to set the selling price.

### Profit Margin

**Profit margin** uses the profit for the year, after every expense.

Use **profit margin = (profit for the year ÷ revenue) × 100**.

It measures what the business actually keeps from its sales.

### Return on Capital Employed

**ROCE** compares operating profit with the money invested in the business.

Use **ROCE = (profit for the year before interest ÷ capital employed) × 100**.

**Capital employed = issued shares + reserves + non-current liabilities**.

Interest is added back because the finance it rewards is inside capital employed.

### Worked Example: Harlow Traders

Harlow Traders reports revenue of £240,000 and cost of sales of £150,000.

Gross profit = 240,000 − 150,000 = £90,000.

Expenses are £54,000, so profit for the year = 90,000 − 54,000 = £36,000.

Gross profit margin = (90,000 ÷ 240,000) × 100 = **37.5%**.

Mark-up = (90,000 ÷ 150,000) × 100 = **60%**.

Profit margin = (36,000 ÷ 240,000) × 100 = **15%**.

### Worked Example: Return on Capital Employed

Harlow Traders has issued shares of £150,000 and reserves of £90,000.

It also carries non-current liabilities of £60,000.

Capital employed = 150,000 + 90,000 + 60,000 = £300,000.

Profit before interest is £40,000, because interest of £4,000 leaves £36,000.

ROCE = (40,000 ÷ 300,000) × 100 = **13.3%**.

### Linking Mark-up and Margin

Mark-up and margin describe the same profit from opposite ends.

A mark-up of 60% gives a margin of 60 ÷ 160 × 100 = **37.5%**.

A mark-up of 25% gives a margin of 25 ÷ 125 × 100 = **20%**.

Mark-up is always the larger percentage whenever both are positive.`,
      figure: profitabilityArt,
      groups: [
        {
          subTitle: "The Four Profitability Ratios",
          bullets: [
            "**Gross profit margin:** (gross profit ÷ revenue) × 100.",
            "**Mark-up:** (gross profit ÷ cost of sales) × 100.",
            "**Profit margin:** (profit for the year ÷ revenue) × 100.",
            "**ROCE:** (profit before interest ÷ capital employed) × 100.",
            "**Capital employed:** issued shares + reserves + non-current liabilities.",
          ],
        },
        {
          subTitle: "What a Change Suggests",
          bullets: [
            "A rising **gross margin** points to higher prices or cheaper purchases.",
            "A falling **mark-up** with steady revenue suggests costs rising faster than prices.",
            "A **profit margin** well below the gross margin shows heavy expenses.",
            "**ROCE** must beat the cost of borrowing for finance to pay its way.",
            "Compare each ratio with last year and with a similar business.",
          ],
        },
        {
          subTitle: "Handling the Numbers",
          bullets: [
            "Keep revenue and cost of sales from the same trading period.",
            "Show the formula, the substitution and the percentage, in that order.",
            "Round percentages to one decimal place and state the rounding.",
            "Add interest back for ROCE only; the profit margin uses profit after interest.",
          ],
        },
      ],
      examinerTips: [
        "Write the formula before substituting, because the method mark is separate from the answer.",
        "Divide by revenue for the gross profit margin, never by cost of sales.",
        "Divide by cost of sales for the mark-up; mixing the two denominators is the commonest error.",
        "For ROCE add interest back to profit and include non-current liabilities in capital employed.",
        "Always comment on the result; a bare percentage earns the calculation mark but not interpretation.",
      ],
      commonMistakes: [
        "Dividing gross profit by cost of sales and calling the answer the gross profit margin.",
        "Using profit after interest in ROCE when the formula asks for profit before interest.",
        "Leaving non-current liabilities out of capital employed.",
        "Reporting 0.375 as the margin instead of multiplying by 100 to give 37.5%.",
        "Comparing a ratio with another business without checking size and accounting policies.",
      ],
      recap: [
        "State the formula for the gross profit margin. [1]",
        "Revenue is £180,000, cost of sales £108,000 and expenses £45,000. Calculate the gross profit margin, the mark-up and the profit margin. [6]",
        "Profit before interest is £48,000 and capital employed is £320,000. Calculate ROCE. [2]",
        "A trader marks up goods by 40%. Calculate the gross profit margin. [2]",
        "Suggest two reasons why a business's gross profit margin may rise. [2]",
      ],
    },
    {
      title: "Liquidity and Efficiency Ratios",
      body: `### Liquidity Is About Timing

Profit does not guarantee that bills can be paid on the day they fall due.

**Liquidity** is the ability to meet short-term debts as they arise.

### Current Ratio

Use **current ratio = current assets ÷ current liabilities**.

The answer is written as a ratio, such as 2.0 : 1.

A result below 1 : 1 means current liabilities exceed current assets.

### Acid Test

Inventory may take months to sell, so the acid test removes it.

Use **acid test = (current assets − inventory) ÷ current liabilities**.

A result near 1 : 1 is usually considered safe.

### Rate of Inventory Turnover

This measures how many times inventory is sold and replaced in a year.

Use **rate of inventory turnover = cost of sales ÷ average inventory**.

**Average inventory = (opening inventory + closing inventory) ÷ 2**.

### Inventory Turnover in Days

The rate can be converted into the average number of days stock is held.

Use **inventory turnover = (average inventory ÷ cost of sales) × 365**.

A shorter period means stock is moving faster.

### Trade Receivables and Payables Days

**Trade receivables turnover = (trade receivables ÷ credit sales) × 365**.

It shows the average number of days customers take to pay.

**Trade payables turnover = (trade payables ÷ credit purchases) × 365**.

It shows the average number of days the business takes to pay suppliers.

### Worked Example: Liquidity at Harlow Traders

Current assets are £96,000, including inventory of £36,000.

Current liabilities are £48,000.

Current ratio = 96,000 ÷ 48,000 = **2.0 : 1**.

Acid test = (96,000 − 36,000) ÷ 48,000 = 60,000 ÷ 48,000 = **1.25 : 1**.

Both results suggest the business can pay its short-term debts.

### Worked Example: Efficiency at Harlow Traders

Opening inventory was £30,000 and closing inventory is £36,000.

Average inventory = (30,000 + 36,000) ÷ 2 = £33,000.

Rate of turnover = 150,000 ÷ 33,000 = **4.55 times**.

Days = (33,000 ÷ 150,000) × 365 = **80.3 days**.

As a check, 365 ÷ 4.55 also gives about 80 days.

### Worked Example: Receivables and Payables

Credit sales are £192,000 and trade receivables are £32,000.

Receivables days = (32,000 ÷ 192,000) × 365 = **60.8 days**.

Credit purchases are £120,000 and trade payables are £25,000.

Payables days = (25,000 ÷ 120,000) × 365 = **76.0 days**.

The business collects in about 61 days but pays in about 76 days.

### Reading the Days Together

Slow receivables and fast payments squeeze cash.

Harlow Traders is the other way round, so suppliers help fund its stock.

Long payables days may risk losing early settlement discounts.`,
      figure: liquidityArt,
      groups: [
        {
          subTitle: "Liquidity Ratios",
          bullets: [
            "**Current ratio:** current assets ÷ current liabilities, often near 2 : 1.",
            "**Acid test:** (current assets − inventory) ÷ current liabilities, often near 1 : 1.",
            "Inventory is excluded because it may take months to convert into cash.",
            "A ratio below 1 : 1 signals possible difficulty in paying debts.",
            "A very high current ratio may mean idle cash or slow-moving stock.",
          ],
        },
        {
          subTitle: "Efficiency Ratios",
          bullets: [
            "**Inventory turnover:** cost of sales ÷ average inventory, in times.",
            "**Inventory days:** (average inventory ÷ cost of sales) × 365.",
            "**Receivables days:** (trade receivables ÷ credit sales) × 365.",
            "**Payables days:** (trade payables ÷ credit purchases) × 365.",
            "Use credit sales and credit purchases, not total revenue and total purchases.",
          ],
        },
        {
          subTitle: "Reading the Days",
          bullets: [
            "Falling inventory days mean stock is selling faster.",
            "Rising receivables days mean credit control is weakening.",
            "Rising payables days help cash but may cost settlement discounts.",
            "Compare the days with the credit terms the business actually offers.",
          ],
        },
      ],
      examinerTips: [
        "Write a liquidity answer as x : 1, never as a percentage or a plain decimal.",
        "Use average inventory for the turnover ratios and closing figures for the liquidity ratios.",
        "Check whether the question gives credit sales and credit purchases before calculating days.",
        "Show the subtraction in the acid test, because the working itself carries a mark.",
        "State whether each result is a strength or a weakness for this particular business.",
      ],
      commonMistakes: [
        "Using closing inventory alone in the turnover calculation.",
        "Dividing current liabilities by current assets; the order in the formula is fixed.",
        "Multiplying by 100 for a ratio that should read 2.0 : 1.",
        "Using total sales for receivables days when only credit sales are owed.",
        "Treating a high current ratio as automatically good, though idle stock earns nothing.",
      ],
      recap: [
        "State the formula for the acid test ratio. [1]",
        "Current assets are £84,000, inventory £30,000 and current liabilities £42,000. Calculate both liquidity ratios. [4]",
        "Cost of sales is £180,000, opening inventory £22,000 and closing inventory £26,000. Calculate the rate of inventory turnover. [3]",
        "Trade receivables are £45,000 and credit sales £270,000. Calculate the receivables turnover in days. [2]",
        "Explain why a business may fail despite making a profit. [3]",
      ],
    },
    {
      title: "Interpreting Results Across Years",
      body: `### Statements That Compare Years

A comparison statement places two or more years side by side.

Add the change in money terms and as a percentage.

**Percentage change = (change ÷ earlier figure) × 100**.

### Harlow Traders: Two Years

Year 1 revenue was £200,000; Year 2 revenue is £240,000, a rise of 20.0%.

Cost of sales rose from £130,000 to £150,000, up 15.4%.

Gross profit rose from £70,000 to £90,000, up 28.6%.

Expenses rose from £44,000 to £54,000, up 22.7%.

Profit for the year rose from £26,000 to £36,000, up 38.5%.

### Commenting on Profitability

Gross profit grew faster than revenue, so the gross margin improved.

It rose from 35.0% to 37.5%, suggesting better prices or cheaper purchases.

Profit grew fastest of all, because expenses grew more slowly than gross profit.

The profit margin improved from 13.0% to 15.0%.

### Commenting on Liquidity

Harlow's current ratio of 2.0 : 1 and acid test of 1.25 : 1 look comfortable.

Inventory days of 80.3 and receivables days of 60.8 still tie up cash.

Payables days of 76.0 mean suppliers finance part of the stock.

### Improving Profitability

Raise selling prices where customers will accept them.

Negotiate cheaper purchases or better discounts without losing quality.

Cut expenses that add no value, such as unused subscriptions.

Concentrate on the products with the highest gross margin.

Increase sales volume so fixed costs are spread over more units.

### Improving Liquidity and Working Capital

Reduce inventory by ordering more often in smaller quantities.

Chase overdue receivables and tighten credit checks on new customers.

Offer a small settlement discount to speed up payment.

Use a bank overdraft for short-term gaps, not for long-term spending.

Sell surplus non-current assets and lease them back if still needed.

### What Changes Gross Profit

**Inventory valuation:** a higher closing inventory figure lowers cost of sales.

**Sales quantity:** selling more units raises total gross profit.

**Selling price:** a higher price lifts gross profit on each unit.

**Purchasing price:** a lower cost per unit widens the margin.

### What Changes Profit for the Year

**Gross profit** is the starting point, so any change in it flows straight through.

**Other income**, such as rent received, adds to the profit for the year.

**Expenses**, such as wages, rent and depreciation, reduce it.

A rise in expenses can wipe out a rise in gross profit.

### Worked Example: Closing Inventory Overstated

Closing inventory is overstated by £2,000.

Cost of sales falls by £2,000, so gross profit rises by £2,000.

Gross profit becomes £92,000 instead of £90,000.

The gross margin becomes (92,000 ÷ 240,000) × 100 = **38.3%**.

The same error overstates profit and current assets by £2,000.

### Worked Example: Price Changes

A unit costs £12 and sells for £20, giving gross profit of £8.

Gross margin = (8 ÷ 20) × 100 = 40.0%; mark-up = (8 ÷ 12) × 100 = 66.7%.

Raise the selling price to £21 and gross profit is £9.

The margin becomes **42.9%** and the mark-up **75.0%**.

Cut the cost to £11 instead, keeping the price at £20.

The margin becomes **45.0%** and the mark-up **81.8%**.

### Worked Example: Other Income and Expenses

Profit for the year is £36,000.

Other income falls by £1,500 and expenses rise by £2,500.

Profit falls by 1,500 + 2,500 = £4,000.

New profit for the year = 36,000 − 4,000 = **£32,000**.`,
      groups: [
        {
          subTitle: "Presenting a Comparison",
          bullets: [
            "Place the years side by side, with the latest year on the right.",
            "Show the change in money terms and as a percentage.",
            "Use **percentage change = (change ÷ earlier figure) × 100**.",
            "Comment on each line, not only on the final profit.",
            "End with a judgement, not a list of numbers.",
          ],
        },
        {
          subTitle: "Suggestions for Improvement",
          bullets: [
            "Raise prices where demand is not sensitive to them.",
            "Negotiate purchase discounts or a cheaper supplier.",
            "Cut waste and expenses that add no value.",
            "Promote the lines with the highest gross margin.",
            "Reduce stock levels and chase overdue receivables.",
            "Arrange short-term finance for seasonal cash gaps.",
          ],
        },
        {
          subTitle: "Reading the Changes",
          bullets: [
            "Gross profit rising faster than revenue means the margin improved.",
            "Profit rising faster than gross profit means expenses were controlled.",
            "A higher closing inventory raises profit and current assets together.",
            "A price rise lifts both the margin and the mark-up.",
            "Other income and expenses explain the gap between gross and net profit.",
          ],
        },
      ],
      examinerTips: [
        "Quote the actual figures and percentages in your comment; vague praise earns nothing.",
        "Explain why a figure moved, using the trading story the question supplies.",
        "Link each recommendation to a ratio you have just calculated.",
        "Distinguish gross profit from profit for the year when explaining changes.",
        "Finish with a recommendation for the owner, since interpretation questions ask for advice.",
      ],
      commonMistakes: [
        "Calculating a percentage change as change ÷ new figure.",
        "Saying profit rose without giving the amount or the percentage.",
        "Confusing a rise in the margin with a rise in the money amount of profit.",
        "Forgetting that a higher closing inventory also overstates current assets.",
        "Recommending higher prices without considering demand.",
      ],
      recap: [
        "State two reasons why gross profit may rise from one year to the next. [2]",
        "Revenue is £200,000, cost of sales £130,000 and expenses £44,000. Calculate the gross profit margin and the profit margin. [4]",
        "Closing inventory is overstated by £1,500. Explain the effect on gross profit and on profit for the year. [3]",
        "A product costs £15 and sells for £25. Calculate the mark-up and the gross profit margin. [4]",
        "Suggest three ways a business could improve its liquidity. [3]",
      ],
    },
    {
      title: "Cash and Profit",
      body: `### Profit and Cash Answer Different Questions

**Profit** is revenue minus the expenses of earning it.

**Cash** is the money in the bank at a single moment.

A profitable business can still run out of cash.

### Why the Two Diverge

Sales on credit raise profit before any cash arrives.

Buying a non-current asset uses cash but is not an expense.

Loan repayments and dividends use cash but do not reduce profit.

Depreciation reduces profit but involves no cash at all.

### Timing Differences

Rising inventory uses cash before the expense is recognised.

Rising trade receivables mean cash is owed, not received.

Rising trade payables delay payment and so help cash.

Paying suppliers early reduces cash without changing profit.

### Worked Example: Profit but a Falling Bank Balance

Harlow Traders earns a profit for the year of £36,000.

Depreciation of £12,000 is added back, giving £48,000.

Inventory rises by £6,000 and receivables by £7,000, using £13,000.

Payables rise by £4,000, releasing £4,000 of cash.

Cash from operations is therefore 48,000 − 13,000 + 4,000 = £39,000.

Equipment costing £25,000 is bought for cash.

A loan of £10,000 is repaid and dividends of £8,000 are paid.

Net cash movement = 39,000 − 25,000 − 10,000 − 8,000 = **−£4,000**.

So a £36,000 profit sits beside a £4,000 fall in the bank balance.

### Why the Difference Matters

A business plans its cash flow separately from its profit.

Cash shortages force borrowing and can cause failure.

Profit remains the better measure of long-term performance.

### Worked Example: Cash Without Profit

A bank loan of £30,000 is received in December.

Cash rises by £30,000, but profit does not change at all.

The loan is a liability, not income.`,
      groups: [
        {
          subTitle: "Profit Is Not Cash",
          bullets: [
            "Profit measures performance over a period; cash is a balance at a date.",
            "Credit sales count as revenue before the cash arrives.",
            "Depreciation is an expense with no cash payment.",
            "Asset purchases and loan repayments are cash movements outside profit.",
            "A cash flow statement explains the movement in the bank balance.",
          ],
        },
        {
          subTitle: "Cash Movements Outside Profit",
          bullets: [
            "Buying or selling non-current assets.",
            "Raising or repaying a loan.",
            "Paying dividends or taking drawings.",
            "Receiving capital from the owner.",
          ],
        },
        {
          subTitle: "Improving Cash Without Cutting Profit",
          bullets: [
            "Collect receivables faster by tightening credit control.",
            "Hold less inventory and order more frequently.",
            "Negotiate longer credit from suppliers.",
            "Delay non-essential capital spending.",
            "Use an overdraft to cover seasonal gaps.",
          ],
        },
      ],
      examinerTips: [
        "Answer a why profit differs question with named items, not with a definition of profit.",
        "Add depreciation back when starting from profit to find cash.",
        "Treat a rise in inventory or receivables as a use of cash.",
        "Treat a rise in payables as a source of cash.",
        "Conclude with the closing bank balance, so the reconciliation proves itself.",
      ],
      commonMistakes: [
        "Assuming profit and the bank balance should be equal.",
        "Subtracting depreciation when working from profit to cash.",
        "Adding a rise in inventory as if it released cash.",
        "Ignoring dividends or drawings, which reduce cash but not profit.",
        "Calling a loan received income; it is a liability.",
      ],
      recap: [
        "Explain why profit and cash are not the same. [2]",
        "A business makes a profit of £24,000. Depreciation is £6,000 and inventory rises by £5,000. Calculate the cash from operations. [3]",
        "State two payments that reduce cash but not profit. [2]",
        "State two items that reduce profit but involve no cash payment. [2]",
        "Explain why a business with a £50,000 profit may still need an overdraft. [3]",
      ],
    },
    {
      title: "Comparing One Business with Another",
      body: `### Ratios Are Meant to Be Compared

A ratio gains meaning when it is set against another figure.

Compare with last year, with a budget, or with a similar business.

### Factors That Affect the Ratios

**Size:** larger businesses buy in bulk and may earn higher margins.

**Industry:** supermarkets run low margins with high turnover; jewellers the reverse.

**Accounting policies:** inventory valuation and depreciation methods change the figures.

**Age of assets:** older assets carry less depreciation, which flatters profit.

**Finance:** heavy borrowing raises capital employed and lowers ROCE.

**Customer base:** cash customers shorten receivables days.

### Problems of Inter-Business Comparison

Businesses may apply different accounting policies to the same items.

Year ends may fall in different seasons, so the figures are not like for like.

Firms may classify expenses differently, which changes the profit margin.

Statements give no detail on product mix, location or workforce skill.

Ratios may be calculated on different bases, such as opening or closing capital.

A single strong or weak year distorts the comparison.

### Making the Comparison Fairer

Check the accounting policies before comparing two sets of accounts.

Use several years of figures rather than one.

Compare businesses of similar size selling similar products.

Read the ratios alongside cash flow and current market conditions.

### Worked Example: Same Profit, Different Structure

Business A sells £500,000 with a gross margin of 20%.

Business B sells £200,000 with a gross margin of 50%.

A's gross profit is £100,000; B's is also £100,000.

Their margins differ because their markets and pricing differ.

Comparing the margins alone would misjudge both businesses.`,
      groups: [
        {
          subTitle: "Factors Behind the Ratios",
          bullets: [
            "Size and buying power.",
            "Industry norms and product mix.",
            "Accounting policies for inventory and depreciation.",
            "Age and condition of non-current assets.",
            "Capital structure and the level of borrowing.",
            "Customer base and credit terms offered.",
          ],
        },
        {
          subTitle: "Problems of Comparison",
          bullets: [
            "Different policies make identical events look different.",
            "Different year ends compare different seasons.",
            "Different expense classification changes the profit margin.",
            "Published statements omit internal detail.",
            "Different ratio bases, such as opening or closing capital.",
            "One unusual year can distort every ratio.",
          ],
        },
        {
          subTitle: "Comparing Well",
          bullets: [
            "Read the accounting policies before the ratios.",
            "Use a series of years, not a single pair.",
            "Match businesses by size, sector and market.",
            "Set ratios beside cash flow and economic conditions.",
          ],
        },
      ],
      examinerTips: [
        "Name the factor and explain its effect on the ratio, not just the factor alone.",
        "Use words such as may and probably, since published data is incomplete.",
        "Compare like with like before drawing any conclusion.",
        "Mention accounting policies whenever the profits of two firms are compared.",
        "Recommend what further information you would need.",
      ],
      commonMistakes: [
        "Concluding that one business is better from a single ratio.",
        "Ignoring the different sizes of the two businesses.",
        "Forgetting that depreciation policy affects profit and asset values.",
        "Assuming a lower gross margin always means poorer management.",
        "Comparing a December year end with a March year end without comment.",
      ],
      recap: [
        "State three factors that may cause two similar businesses to report different gross profit margins. [3]",
        "Explain why a difference in depreciation policy makes comparison difficult. [2]",
        "Give two reasons why figures from different year ends may mislead. [2]",
        "Explain why a supermarket's gross margin is usually lower than a jeweller's. [3]",
        "State two limitations of comparing ratios between businesses. [2]",
      ],
    },
    {
      title: "Interested Parties",
      body: `### One Set of Statements, Many Readers

Different users ask different questions of the same figures.

Each needs information that is relevant, reliable and comparable.

### Owners

Owners judge whether the business is worth continuing or selling.

They watch profit, ROCE and the return on their investment.

### Managers

Managers use the figures to plan, control and make decisions.

Ratios show which products, branches or costs need attention.

### Employees

Employees want confidence in job security and future pay.

They may use reported profits to support a claim for higher wages.

### Banks

Banks decide whether to lend and at what rate of interest.

They check liquidity, cash flow and the ability to repay.

### Investors and Lenders

Investors compare ROCE with returns available elsewhere.

Lenders check borrowing levels and the security offered for a loan.

### Suppliers

Suppliers decide whether to offer credit, and how much.

They look at liquidity and the record of paying on time.

### Customers

Customers want a supplier who will survive and honour guarantees.

They may also judge whether the prices charged are fair.

### Governments and Tax Authorities

Tax authorities calculate the tax due from the reported profit.

Governments use the figures for statistics and economic policy.

### Club Members and the Public

Club members check that subscriptions are spent on the club.

The public and environmental bodies ask about safety, jobs and environmental impact.`,
      figure: usersArt,
      groups: [
        {
          subTitle: "Inside the Business",
          bullets: [
            "**Owners:** is the business profitable enough to keep?",
            "**Managers:** which costs, products or branches need action?",
            "**Employees:** are jobs secure, and can pay rise?",
            "All three rely on the same internal management accounts.",
          ],
        },
        {
          subTitle: "Outside the Business",
          bullets: [
            "**Banks:** can the loan and its interest be repaid?",
            "**Investors and lenders:** is the return worth the risk?",
            "**Suppliers:** will they be paid, and on time?",
            "**Customers:** will the supplier still be trading next year?",
          ],
        },
        {
          subTitle: "Wider Society",
          bullets: [
            "**Tax authorities:** is the reported profit correct?",
            "**Governments:** what do the figures imply for policy?",
            "**Club members:** is the money spent as promised?",
            "**Public and environmental bodies:** what is the wider impact?",
          ],
        },
      ],
      examinerTips: [
        "Name the user, then state the decision they face, then the figure they need.",
        "Link each user to a specific ratio rather than a general interest in profit.",
        "Distinguish investors, who own shares, from lenders, who are owed money.",
        "For employees, mention pay, job security and pension obligations.",
        "For tax authorities, mention the calculation of taxable profit.",
      ],
      commonMistakes: [
        "Describing what a user is instead of what they want to know.",
        "Giving the same answer for every user.",
        "Confusing an investor with a lender.",
        "Forgetting that suppliers care about liquidity and payment history.",
        "Ignoring non-financial users such as environmental bodies.",
      ],
      recap: [
        "Identify two interested parties who use financial statements and state what each wants to know. [4]",
        "Explain why a bank would study the acid test before granting an overdraft. [3]",
        "Explain how employees might use accounting information. [2]",
        "Why do tax authorities need reliable accounting records? [2]",
        "State two ways a club's members use its accounts. [2]",
      ],
    },
    {
      title: "Limitations of Accounting Statements",
      body: `### Statements Look Backwards

Accounting statements report what has already happened.

They are a record of the past, not a forecast of the future.

### Historic Cost

Assets are recorded at the price originally paid.

Over years of inflation that cost may be far below market value.

A building bought for £200,000 may now be worth £600,000.

Profit also reflects historic costs, so it can overstate real gains.

### Accounting Policies

Businesses choose policies within the rules, such as a depreciation method.

Different choices give different profit figures for the same events.

A change of policy can flatter one year at the expense of another.

Comparability therefore depends on disclosure of the policies used.

### Non-Financial Aspects

Statements say nothing about the skill of the workforce.

They ignore the location of the business and the quality of its management.

They cannot measure customer loyalty or the strength of a brand.

The economic climate also shapes results beyond the figures shown.

### What Is Left Out

Staff morale, staff training and staff turnover do not appear.

Environmental damage and social impact are rarely quantified.

Future orders, new competitors and legal cases sit outside the accounts.

### Using the Statements Wisely

Read the statements as one source of evidence, not the only one.

Combine them with cash flow, market knowledge and non-financial information.

### Worked Example: Historic Cost and Profit

A business bought land for £100,000 ten years ago.

It now sells the land for £250,000.

The gain of £150,000 appears only when the sale happens.

Until then the statement shows the historic cost of £100,000.`,
      groups: [
        {
          subTitle: "The Main Limitations",
          bullets: [
            "**Historic cost:** assets are shown at past prices, not current values.",
            "**Accounting policies:** choices and changes distort comparison.",
            "**Non-financial aspects:** skills, location and reputation are invisible.",
            "**Effect together:** readers see the past, measured through chosen policies.",
          ],
        },
        {
          subTitle: "Non-Financial Matters",
          bullets: [
            "Skill and loyalty of the workforce.",
            "Location, footfall and local competition.",
            "Management quality and staff morale.",
            "Economic climate and interest rates.",
            "Brand strength and customer goodwill.",
          ],
        },
        {
          subTitle: "Reading with Care",
          bullets: [
            "Check which policies produced the figures.",
            "Treat the statements as history, not forecast.",
            "Look at several years before judging a trend.",
            "Ask for non-financial evidence alongside the numbers.",
          ],
        },
      ],
      examinerTips: [
        "Name the limitation, then explain its effect on the figures.",
        "Use the phrase historic cost precisely, meaning the original price paid.",
        "Give a non-financial example and say why it matters to a decision.",
        "Link limitations to the user, such as an investor judging future prospects.",
        "Suggest what extra information would improve the decision.",
      ],
      commonMistakes: [
        "Claiming the statements show the market value of assets.",
        "Treating a policy change as a real change in performance.",
        "Listing limitations without explaining their effect.",
        "Forgetting that non-financial factors can decide a business's future.",
        "Assuming the latest year alone reveals a trend.",
      ],
      recap: [
        "Explain why historic cost can make a statement of financial position misleading. [2]",
        "State two non-financial factors that may matter to an investor. [2]",
        "Explain how a change in accounting policy can affect comparison. [2]",
        "Give two examples of information that accounting statements do not show. [2]",
        "Explain why two businesses with identical profit may not be equally valuable. [3]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_6: Chapter = chapterSix;
