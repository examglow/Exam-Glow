import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelFinance = imagePanel(IMG, [
  {
    src: "bus5-bank-loan-meeting.webp",
    alt: "A small business owner seated across from a bank manager at a desk covered with printed accounts and a signed loan form, a handshake half-formed between them",
    caption: "External finance: borrowed, repaid with interest",
  },
  {
    src: "bus5-crowdfunding-screen.webp",
    alt: "A laptop showing a crowdfunding campaign page with a progress bar partway filled, several small payment icons and a comment thread beside it",
    caption: "New sources: many small contributions, public visibility",
  },
]);

const panelCashFlow = imagePanel(IMG, [
  {
    src: "bus5-cashflow-sheet.webp",
    alt: "A printed three-month cash flow forecast spread across a desk, columns for inflow, outflow, net cash flow and closing balance, with a red pen circling one negative figure",
    caption: "Closing balance = opening balance + net cash flow",
  },
  {
    src: "bus5-overdraft-warning.webp",
    alt: "A mobile banking app screen showing an agreed overdraft limit bar almost used up and a warning message, a shop owner staring at it behind a counter",
    caption: "A forecast shows the shortfall a month before it arrives",
  },
]);

const panelAccounts = imagePanel(IMG, [
  {
    src: "bus5-balance-sheet-paper.webp",
    alt: "A printed statement of financial position with two clearly ruled columns of figures, headings written at the top of each, a calculator and highlighter resting on the page",
    caption: "Assets on one side, liabilities and capital on the other",
  },
  {
    src: "bus5-ratio-dashboard.webp",
    alt: "An office wall chart of four gauges labelled with financial ratios, needles pointing to different bands of green and amber, a manager comparing two printed years of figures below",
    caption: "Ratios turn raw figures into a comparison",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Financial Information and Decisions",
  intro: `Every year Paper 1 contains a finance question with numbers in it, and the marks are all-or-nothing: **right method, right answer, right unit**.\n\nYou are **not** asked to construct a cash flow forecast, a statement of profit or loss or a statement of financial position. You **are** asked to **complete, amend, read and calculate from** one — which is why every worked figure below matters.`,
  subheadings: [
    {
      title: "5.1 Business finance",
      body: `### Why Money Is Needed, and Where It Comes From

Businesses need finance for five reasons: **start-up capital** before any revenue exists, **capital for expansion or growth**, **replacing existing non-current assets** that are worn out, **investing in new technology**, and **working capital** to keep day-to-day trading going.

A **short-term** need lasts under a year — covering a slow month, a large supplier order, or a seasonal build-up of stock. A **long-term** need lasts several years — a new factory, machinery, or buying another business.`,
      figure: panelFinance,
      groups: [
        {
          subTitle: "Working capital",
          bullets: [
            "**Working capital = current assets − current liabilities.** It is the money tied up in **stock, cash and money owed to the business**, after deducting **money the business owes within the year**.",
            "Current assets **9,000 dollars** minus current liabilities **5,000 dollars** gives working capital of **4,000 dollars**. A **rise** means more stock or cash available; a **fall or negative figure** means bills may not be paid on time.",
            "**Why it is important**: it pays **wages, suppliers and rent between one sale and the next**. A profitable business can still fail because its cash is locked in unsold stock or unpaid customer invoices — the difference between **profit and cash** is the most-tested idea in this topic.",
          ],
        },
        {
          subTitle: "Sources of finance — internal first",
          bullets: [
            "**Owners' investment** — the founder's own savings. Immediate, no interest and no repayment, and it shows commitment to lenders; but **limited by personal wealth** and the owner risks losing it.",
            "**Retained profit** — profit kept back instead of paid as dividends. **Cheap** (no interest), available again each profitable year, and no loss of control; but only possible if the business **has made a profit**, and shareholders wanting dividends may object.",
            "**Sale of unwanted assets** — selling spare land, machinery or vehicles. Raises cash at once and cuts storage and maintenance; but the business **loses the asset**, sale takes time, and the price realised may disappoint.",
            "**Working capital released** — cutting stock levels, chasing receivables or agreeing better terms frees cash already inside the business.",
          ],
        },
        {
          subTitle: "Sources of finance — external",
          bullets: [
            "**Issuing shares** (a plc, or privately for a Ltd) raises large permanent capital with **no repayment or interest**, but **dilutes ownership and control** and dividends are expected; only limited companies may do it, and a plc must publish accounts.",
            "**Venture capital** — a firm investing in a **risky, high-growth business** for a share of ownership plus advice and contacts. Brings money the bank would not lend; but it is **expensive in equity**, demands rapid growth, and usually wants a seat on the board.",
            "**Bank overdraft** — borrowing up to a limit when the account goes negative. **Flexible and instant** for short-term swings; but **high interest and fees**, repayable **on demand**, and a longer overdraft signals trouble.",
            "**Bank loan** — a fixed sum repaid over an agreed term with interest. Predictable, keeps **ownership**, suits medium and long-term purchases; but requires a **business plan and often security**, interest is a cost, and repayment starts whether or not the money is being earned.",
            "**Leasing** — renting an asset for a set period. **No large outlay**, includes maintenance, and the asset can be upgraded; but **total cost over time is higher**, the firm **owns nothing** at the end, and breaking the contract is costly.",
            "**Hire purchase** — paying in instalments to **own** the asset at the end. Ownership eventually and fixed payments; but interest makes it dearer than cash, and **missed payments can mean the asset is repossessed**.",
            "**Trade credit** — a supplier letting the business **pay 30 to 90 days later**. Effectively free short-term finance and it eases working capital; but **late payment loses discounts and the relationship**, and it is not available to a firm with poor credit.",
            "**Government grants** — money from a public authority, often for start-ups or deprived areas. **No repayment** and often comes with advice; but **limited, competitive, conditional and slow**, and rules change with policy.",
            "**Crowdfunding** — many small contributions from the public through a platform, sometimes with the product as the reward. Raises cash **and tests demand and publicity** at once; but campaigns **often fall short**, platforms take a fee, ideas are exposed publicly, and rewards must still be delivered.",
          ],
        },
        {
          subTitle: "Choosing a source — the seven factors",
          bullets: [
            "**Size of the business** — a sole trader cannot issue shares; a plc can. **Legal form** decides what is even possible. **Amount required** — small needs suit overdraft or trade credit, huge needs suit shares or a loan. **Length of time** — match the term of the finance to the life of what it buys. **Existing loans** — more debt raises interest burden and refusal risk. **Cost** — compare interest, fees, dividends given up and maintenance. **Purpose** — buying a van is a loan or lease; covering a slow month is an overdraft; funding a risky expansion is venture capital or retained profit.",
            "**Recommend a source** by stating the **purpose, the amount and the term from the case**, then justify against cost, availability to that **legal form**, and the effect on **control**.",
          ],
        },
      ],
    },
    {
      title: "5.2 Cash flow forecast",
      body: `### Timing, Not Profit

**Cash** is needed to pay suppliers, wages, rent, interest and tax **on the day they fall due**. A business can be **profitable on paper and still fail** because the cash has not arrived yet.

A **cash flow forecast** is a **plan of the expected cash inflows and outflows of a business over a future period**, usually month by month.`,
      figure: panelCashFlow,
      groups: [
        {
          subTitle: "The five features, and how the arithmetic runs",
          bullets: [
            "**Cash inflow** — money coming **in**: mainly **sales revenue**, plus cash from debtors paying, asset sales and loans received. **Cash outflow** — money going **out**: suppliers, wages, rent, utilities, loan repayments, interest, tax and purchases of assets.",
            "**Net cash flow = cash inflow − cash outflow** for the period. It can be negative. **Closing balance = opening balance + net cash flow**, and the closing balance becomes **next month's opening balance**.",
            "A three-month forecast, in dollars: January opens at **1,000**, inflows **8,000**, outflows **8,600**, so net **−600** and closing **400**. February opens at **400**, inflows **9,500**, outflows **8,900**, net **+600**, closing **1,000**. March opens at **1,000**, inflows **7,000**, outflows **9,200**, net **−2,200**, closing **−1,200**.",
            "**Interpret that result**: the business is **profitable on average but runs out of cash in March** — a forecast value below zero means an overdraft or delayed payments. **To complete or amend** a forecast, fill only the missing cell with the same two formulas, then re-read the closing balances.",
            "**Why the forecast is important**: it **predicts a shortfall before it happens**, so action can be prepared; it shows when **surplus cash** can be used or invested; it is what **banks and investors ask for**; and it supports decisions on **prices, credit terms, hiring and stock**.",
          ],
        },
        {
          subTitle: "Fixing a short-term cash flow problem",
          bullets: [
            "**Arrange or extend a bank overdraft** — quick cover, but interest and fees, and the bank may withdraw it.",
            "**Delay paying suppliers** (use longer trade credit) — keeps cash inside; risks **discounts, supplies and the relationship**.",
            "**Ask customers to pay more quickly** — discounts for early payment, invoices sent immediately, tighter credit terms; risks **losing customers to slower-invoicing rivals**.",
            "**Delay the purchase of non-current assets** — the largest saving with the least pain, but growth and efficiency wait.",
            "**Other moves**: reduce stock held, **lease instead of buy**, offer **cash-on-delivery** terms, delay hiring, and chase overdue receivables.",
            "**Trap:** do not answer a cash-flow question by talking about **profit margins, advertising or price rises alone**. Every fix must change the **timing of a cash inflow or outflow**.",
          ],
        },
      ],
    },
    {
      title: "5.3 Profit and loss",
      body: `### What Profit Is and Why It Is Needed

**Profit** is what is left when **all costs have been paid from revenue**: **profit = total revenue − total costs**, or **profit = gross profit − expenses**. It is **not** the same as revenue, and **not** the same as cash.

**Gross profit = revenue − cost of sales**, where **cost of sales** is the direct cost of producing the goods sold (materials and direct labour). **Expenses** are the running costs below that line — rent, wages of staff not producing, utilities, advertising, insurance, interest.`,
      groups: [
        {
          subTitle: "Why profit matters to a private-sector business",
          bullets: [
            "**Reward for risk-taking** — the entrepreneur's return for putting capital and time at risk; no profit means the risk was not worth taking.",
            "**Source of finance** — retained profit funds growth **without interest and without giving up shares**, making it the cheapest finance available.",
            "**Measure of success** — profit and profit growth tell owners, managers and staff **whether the business is working**, and allow comparison with earlier years and with rivals.",
            "**Attract investors** — a record of profit makes banks willing to lend and investors willing to buy shares; it also supports the **share price and dividend**.",
            "Work the statement: **10,000 units** sold at **4 dollars** gives revenue **40,000 dollars**; cost of sales **24,000** gives **gross profit 16,000**; expenses **9,000** give **profit 7,000**. A decision from those figures — for example gross profit fell while revenue rose, so **cost of sales per unit has increased** and price or supplier terms must change.",
            "**Trap:** profit is a **flow over a period** and is calculated **after depreciation and expenses**; cash is a **balance at a date** and ignores when the money was earned.",
          ],
        },
      ],
    },
    {
      title: "5.4 Statement of financial position",
      body: `### What the Business Owns and Owes

The **statement of financial position (balance sheet)** lists, **at a date**, what the business owns and what it owes. It is a snapshot, not a video.

| Heading | Examples | Time to convert or repay |
| --- | --- | --- |
| **Non-current assets** | property, land and buildings, machinery, vehicles, equipment | used over **more than one year** |
| **Current assets** | inventory (stock), **trade receivables** (customers who owe money), cash and bank balances | within **one year** |
| **Non-current liabilities** | long-term **bank loans**, mortgages | repaid **after more than one year** |
| **Current liabilities** | **trade payables** (suppliers owed), **bank overdraft**, tax due, wages due | paid within **one year** |`,
      figure: panelAccounts,
      groups: [
        {
          subTitle: "The calculations examined here",
          bullets: [
            "**Total assets = non-current assets + current assets.** **Total liabilities = non-current liabilities + current liabilities.** **Working capital = current assets − current liabilities.**",
            "**Capital employed** is the **total long-term funds** financing the business — usually **total assets minus current liabilities**, or the owner's investment plus retained profit plus long-term loans. It is the denominator of ROCE in 5.5.",
            "Work it, in dollars: non-current assets **26,000**, inventory **4,000**, trade receivables **3,000**, cash **2,000**, so **total assets = 36,000**. Trade payables **5,000** and a long-term bank loan **15,000** give **total liabilities = 20,000**; **working capital = 9,000 − 5,000 = 4,000**; **capital employed = 36,000 − 5,000 = 31,000**.",
            "**Decisions from a statement of financial position**: whether the business can **pay its debts** (compare current assets with current liabilities), whether it is **over-trading** with too little long-term finance behind its assets, whether non-current assets need **replacing or expanding**, and whether **receivables or inventory are too high**, which is trapped cash.",
            "**Trap:** an **overdraft is a current liability**, not an asset, and **inventory is a current asset** even if it never sells. Misplacing either line ruins every ratio in 5.5.",
          ],
        },
      ],
    },
    {
      title: "5.5 Analysis of accounts",
      body: `### Ratios: Profitability and Liquidity

**Profitability** is the ability to earn **profit** relative to revenue or capital. **Liquidity** is the ability to pay **short-term debts as they fall due**. Ratios make two businesses comparable by removing the scale from the numbers.`,
      groups: [
        {
          subTitle: "Three profitability ratios",
          bullets: [
            "**Gross profit margin = (gross profit / revenue) x 100.** On gross profit **16,000** and revenue **40,000** it is **40%**. It measures how much of each sale is left after **cost of sales**; it falls when **input prices rise** or selling price is cut.",
            "**Profit margin = (profit / revenue) x 100.** On profit **7,000** and revenue **40,000** it is **17.5%**. It measures what survives after **all** expenses; a healthy gross margin with a weak profit margin points at **overheads**.",
            "**Return on capital employed (ROCE) = (profit / capital employed) x 100.** On profit **7,000** and capital employed **31,000** it is **22.6%**. It is the test investors use: **is the business earning more than the money could earn elsewhere?**",
            "**Interpretation always runs three ways**: state the figure, say **whether it rose or fell**, and give a **reason and a consequence** for the business named. A ratio in isolation proves nothing.",
          ],
        },
        {
          subTitle: "Two liquidity ratios",
          bullets: [
            "**Current ratio = current assets : current liabilities** (or current assets / current liabilities), shown as **2.1 : 1** or as **2.1**. On current assets **9,000** and current liabilities **5,000** it is **1.8 : 1**. A round **2 : 1** is conventionally safe: enough cover, without cash idling.",
            "**Acid test ratio = (current assets − inventory) : current liabilities.** On the same figures with inventory **4,000** it is **5,000 : 5,000 = 1 : 1**. It removes inventory because stock may not **sell or convert to cash in time**.",
            "**The two together diagnose the problem**: a **good current ratio with a weak acid test** means the business is **covered only by unsold stock**; both weak means it may **fail to pay suppliers**; both very high can mean cash and stock are **wasted instead of invested**.",
          ],
        },
        {
          subTitle: "Users of accounts, and the limits of ratios",
          bullets: [
            "**Internal users** — **owners and shareholders** judge return, growth and whether to keep or sell; **managers** compare departments and years and set targets; **employees** look at job security, pay prospects and whether the firm can afford wage rises.",
            "**External users** — **suppliers** decide whether to extend trade credit; **banks and lenders** decide on loans and interest using liquidity and gearing; **government and tax authorities** check tax due and policy compliance; **investors and customers** and the wider community judge survival and reliability.",
            "**Limitations of accounts and ratio analysis**: figures are **historic**, so they describe last year, not next; a statement is a **snapshot at one date** and can be flattered by **window dressing** just before it; **inflation** distorts asset values and comparison over time; **different accounting policies** (depreciation, inventory valuation) make firms incomparable; accounts **ignore quality, brand, staff morale and the environment**; **estimates and errors** are built in; and **industry averages differ**, so 2 : 1 is safe in one trade and wasteful in another.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_5 = chapterFive;
