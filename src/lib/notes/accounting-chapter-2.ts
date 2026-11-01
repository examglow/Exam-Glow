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

const doubleEntryArt = artPanel([
  {
    src: "ac02-double-entry-ledger.webp",
    alt: "A flat-cartoon ledger page split into a debit column on the left and a credit column on the right, both holding equal amounts",
    caption: "One debit, one credit",
  },
  {
    src: "ac02-three-column-balance.webp",
    alt: "A flat-cartoon accountant running a finger down a ledger with debit, credit and running balance columns",
    caption: "Every entry moves the balance",
  },
]);

const documentsArt = artPanel([
  {
    src: "ac02-invoice-and-credit-note.webp",
    alt: "A flat-cartoon seller handing an invoice to a buyer while a credit note lies beside the goods on the counter",
    caption: "Invoice out, credit note back",
  },
  {
    src: "ac02-payment-documents.webp",
    alt: "A flat-cartoon desk with a cheque book counterfoil, a paying-in slip, a receipt and a bank statement fanned out",
    caption: "Paper proof for every payment",
  },
]);

const cashArt = artPanel([
  {
    src: "ac02-cash-book-columns.webp",
    alt: "A flat-cartoon cash book open at a page with cash and bank columns and a posted total at the foot",
    caption: "One book, two jobs",
  },
  {
    src: "ac02-petty-cash-imprest.webp",
    alt: "A flat-cartoon petty cashier counting vouchers into a small tin while a fixed float of notes sits beside it",
    caption: "Spend the float, restore the float",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Sources and Recording of Data",
  intro: `Every figure in accounting begins with a document and a decision.\n\nA **source document** proves the transaction; a **book of prime entry** records it first.\n\nThe **double entry** then spreads it into the ledger, where balances build up.\n\nGet the routine right and the financial statements almost write themselves.\n\nAccuracy at this stage is not tidiness; it is the difference between usable accounts and guesswork.`,
  subheadings: [
    {
      title: "The Double Entry System",
      body: `### Two Sides to Every Transaction

Every transaction gives and receives equal value.

**Double entry** records a **debit** in one account and an equal **credit** in another, so the ledger stays in balance.

### Which Account Increases?

**Assets and expenses** are debited to increase them.

**Liabilities, capital and income** are credited to increase them.

To reduce any account, make the opposite entry.

### A Reliable Routine

Read the source document, name the two accounts and decide whether each rises or falls.

Apply the rules, then write the debit, the equal credit and a short narration.

### Worked Example: Owner's Investment

The owner pays £5,000 into the business bank account.

Bank and capital both rise: **debit Bank £5,000; credit Capital £5,000**.

### Worked Example: Buying a Vehicle

A van bought for £8,000 by cheque: **debit Motor vehicles £8,000; credit Bank £8,000**.

### Worked Example: Credit Sale and Credit Purchase

Goods sold on credit to R Patel for £600: **debit R Patel (trade receivable) £600; credit Sales £600**.

Goods bought on credit from S Khan for £450: **debit Purchases £450; credit S Khan (trade payable) £450**.

### Worked Example: Expenses and Loans

Wages of £900 paid in cash: **debit Wages £900; credit Cash £900**.

A bank loan of £4,000 received: **debit Bank £4,000; credit Bank loan £4,000**.`,
      figure: doubleEntryArt,
      groups: [
        {
          subTitle: "The Rules in One Place",
          bullets: [
            "**Assets:** debit to increase, credit to decrease.",
            "**Expenses:** debit to increase, credit to decrease.",
            "**Liabilities:** credit to increase, debit to decrease.",
            "**Capital:** credit to increase, debit to decrease.",
            "**Income:** credit to increase, debit to decrease.",
            "Every debit has an equal credit, so total debits equal total credits.",
          ],
        },
        {
          subTitle: "Reading an Entry",
          bullets: [
            "The account name comes first, then the amount, then Dr or Cr.",
            "A narration explains the entry in a few words.",
            "The account that receives the value is debited; the one that gives it is credited.",
            "Never record two debits for one ordinary transaction.",
            "The same transaction appears once on each side of the ledger.",
          ],
        },
      ],
      examinerTips: [
        "Name both accounts before writing any figures; the choice earns the method mark.",
        "Write Dr in front of the debit and Cr in front of the credit, not after the amount.",
        "State the reason in a short phrase, such as asset increased.",
        "For a sale or purchase, say whether it was for cash or on credit.",
        "Keep the two lines level so a marker can see that the amounts match.",
      ],
      commonMistakes: [
        "Debiting sales when goods are sold; income is credited.",
        "Crediting an expense when it is paid; expenses are debited when they increase.",
        "Recording a credit sale as a debit to Sales and a credit to the customer.",
        "Writing two debits for a purchase paid by cheque.",
        "Forgetting that a loan received increases both bank and a liability.",
      ],
      recap: [
        "State the double entry rule for increasing an asset and an income account. [2]",
        "Record the double entry for goods sold on credit to A Lim for £850. [2]",
        "Record the double entry for rent of £1,200 paid by cheque. [2]",
        "Record the double entry for a £6,000 bank loan received. [2]",
        "Explain why every transaction needs two entries of equal value. [3]",
      ],
    },
    {
      title: "Ledger Accounts and Balances",
      body: `### The Ledger Account

A ledger account collects every entry affecting one item.

The left side is the **debit** side; the right side is the **credit** side.

Each entry shows the date, the other account and the amount.

### Balancing an Account

Add each column separately; the difference between the totals is the **balance**.

Enter it on the smaller side as **balance c/d**, then bring it down as **balance b/d**.

### Which Side Is the Balance?

Assets and expenses normally carry debit balances.

Liabilities, capital and income normally carry credit balances.

The balance gives both the amount and its nature at that date.

### The Three-Column Running Balance

The format uses date, details, debit, credit and **balance** columns, updated after every entry.

A single column records whether the balance is **Dr** or **Cr**.

### Worked Example: A T-Account

The cash account receives capital of £5,000 and a cash sale of £800.

It pays purchases of £600 and rent of £400.

Debit total = 5,000 + 800 = £5,800.

Credit total = 600 + 400 = £1,000, plus balance c/d of £4,800.

Check: 1,000 + 4,800 = £5,800, so the balance is £4,800 debit, an asset.

### Worked Example: The Running Balance

The same account begins at £5,000 Dr; the sale of £800 gives £5,800 Dr.

Purchases of £600 give £5,200 Dr.

Rent of £400 gives £4,800 Dr.

Check: 5,000 + 800 − 600 − 400 = £4,800.

### Transfers to the Financial Statements

Income and expense balances go to the **income statement**.

Asset, liability and capital balances go to the **statement of financial position**.

### Interpreting a Balance

On a customer's account, a debit balance means money is owed to the business.

A credit balance there means an overpayment or a refund is due.

A debit balance on a supplier's account means the supplier owes the business.`,
      groups: [
        {
          subTitle: "Balancing Step by Step",
          bullets: [
            "Add both columns separately and compare the totals.",
            "Enter the difference on the smaller side as balance c/d.",
            "Total both sides; they must now agree.",
            "Bring the same figure down on the opposite side as balance b/d.",
            "State the balance as Dr or Cr, not just as a number.",
          ],
        },
        {
          subTitle: "Where Each Balance Goes",
          bullets: [
            "**Income and expenses** transfer to the income statement.",
            "**Assets and liabilities** transfer to the statement of financial position.",
            "**Capital** transfers to the statement of financial position.",
            "The balance is the figure used, not the total of either column.",
            "Running balances show the position after every single entry.",
          ],
        },
        {
          subTitle: "Reading a Balance Correctly",
          bullets: [
            "Customer debit balance: money owed to the business.",
            "Customer credit balance: an overpayment or a refund due.",
            "Supplier credit balance: money the business owes.",
            "Supplier debit balance: an overpayment or returned goods.",
            "Cash and bank accounts should not carry credit balances except an overdraft.",
          ],
        },
      ],
      examinerTips: [
        "Write balance c/d on the smaller side and balance b/d on the opposite side.",
        "Show the two column totals even when they agree; the proof earns marks.",
        "Label every running balance as Dr or Cr.",
        "Take the period-end date for the balance, not the date of the last entry.",
        "When interpreting, say who owes whom before quoting the amount.",
      ],
      commonMistakes: [
        "Writing balance c/d on the larger side of the account.",
        "Quoting the column total as the balance.",
        "Forgetting to bring the balance down as balance b/d.",
        "Leaving a running balance unlabelled as Dr or Cr.",
        "Assuming every credit balance on a customer account is an error.",
      ],
      recap: [
        "Explain how a ledger account is balanced at the end of a period. [3]",
        "A cash account has debits of £7,400 and credits of £2,900. State its balance and its nature. [2]",
        "Describe the three-column running balance format. [3]",
        "State where income, expense, asset and liability balances are transferred. [4]",
        "A customer's account shows a credit balance of £45. Suggest one reason. [2]",
      ],
    },
    {
      title: "Division of the Ledger",
      body: `### The Three Ledgers

The **sales ledger** holds the accounts of credit customers, the trade receivables.

The **purchases ledger** holds the accounts of credit suppliers, the trade payables.

The **nominal ledger**, also called the general ledger, holds everything else.

### What the Nominal Ledger Holds

It contains income accounts such as sales, and expense accounts such as wages and rent.

It also holds asset, liability and capital accounts outside the personal ledgers.

### Why Divide the Ledger?

One clerk can manage customers while another manages suppliers.

Errors are easier to trace inside a smaller section.

A manager can read the total owed by customers without opening every account.

### Digital Ledger Records

Accounting software keeps the same three ledgers in a database.

Each invoice is entered once and the double entry posts automatically.

Balances update at once, reports cover any date, and access rights control who may change a record.

Backups and an audit trail protect those records.

### Worked Example: Where Each Account Lives

R Patel buys on credit, so her account sits in the **sales ledger**.

S Khan supplies on credit, so his account sits in the **purchases ledger**.

Wages, sales, bank, motor vehicles and capital sit in the **nominal ledger**.

The sales ledger total should equal the trade receivables balance.`,
      groups: [
        {
          subTitle: "Ledger Contents",
          bullets: [
            "**Sales ledger:** accounts of credit customers only.",
            "**Purchases ledger:** accounts of credit suppliers only.",
            "**Nominal ledger:** income, expenses, assets, liabilities and capital.",
            "Cash and bank are kept in the cash book, which is also a ledger account.",
            "A customer who also supplies goods may appear in both personal ledgers.",
          ],
        },
        {
          subTitle: "Digital Ledger Strengths",
          bullets: [
            "Automatic double entry reduces posting errors.",
            "Balances and reports update instantly.",
            "Records are searchable and easy to back up.",
            "Access levels protect sensitive information.",
            "An audit trail records who changed what, and when.",
          ],
        },
      ],
      examinerTips: [
        "Name the ledger and the reason, for example sales ledger because she is a credit customer.",
        "Do not call the nominal ledger the general journal; they are different records.",
        "Remember that the sales ledger is not the sales account.",
        "For digital records, mention both the benefit and the control needed.",
        "Keep personal accounts out of the nominal ledger in your answers.",
      ],
      commonMistakes: [
        "Placing the sales account in the sales ledger.",
        "Putting a supplier's account in the sales ledger.",
        "Calling the purchases ledger the purchases account.",
        "Assuming digital records remove the need for source documents.",
        "Forgetting that cash and bank are recorded in the cash book.",
      ],
      recap: [
        "State the purpose of the sales ledger and the purchases ledger. [2]",
        "Name the ledger containing wages, sales, bank and capital. [1]",
        "Explain two reasons for dividing the ledger into sections. [4]",
        "State two advantages of keeping ledger records digitally. [2]",
        "Explain why a supplier's account is not kept in the sales ledger. [2]",
      ],
    },
    {
      title: "Business Documents",
      body: `### Documents Prove the Transaction

A **business document**, on paper or in a file, is the **source document** for the ledger entry.

Documents are produced and stored manually or digitally.

### Invoice

The seller sends an **invoice** after a credit sale.

It lists the goods, quantities, unit prices, trade discount, total due and credit terms such as 30 days.

It feeds the seller's sales journal and the buyer's purchases journal.

### Debit Note and Credit Note

A buyer sends a **debit note** to ask for a reduction, usually for faulty goods.

The seller replies with a **credit note**, reducing the amount owed.

The credit note feeds the seller's sales returns journal; the buyer uses the purchases returns journal.

### Cheque Counterfoil

A **cheque counterfoil** is the stub kept by the person who wrote the cheque.

It records the date, payee, amount and number, and feeds the payments side of the cash book.

### Paying-In Slip

A **paying-in slip** lists the cash and cheques paid into the bank.

Its counterfoil proves the deposit, and it feeds the receipts side of the cash book.

### Receipt

A **receipt** shows the date, payer and amount, and supports the cash book entry.

### Bank Statement and Statement of Account

A **bank statement** is the bank's own record of receipts, payments and the balance.

It is used to check the cash book.

A seller sends a monthly **statement of account** listing invoices, credit notes, payments and the balance owed.

### Worked Example: Choosing the Document

A customer returns faulty goods worth £120.

The buyer issues a **debit note**; the seller issues a **credit note**.

The seller records £120 in the **sales returns journal**.

The buyer records £120 in the **purchases returns journal**.`,
      figure: documentsArt,
      groups: [
        {
          subTitle: "Document to Book",
          bullets: [
            "**Invoice issued:** sales journal; **invoice received:** purchases journal.",
            "**Credit note issued:** sales returns journal; **credit note received:** purchases returns journal.",
            "**Cheque counterfoil:** payments side of the cash book.",
            "**Paying-in slip:** receipts side of the cash book.",
            "**Bank statement:** checks the bank column of the cash book.",
            "**Statement of account:** checks what a credit customer still owes.",
          ],
        },
        {
          subTitle: "Details to Expect on a Document",
          bullets: [
            "Names and addresses of both parties.",
            "Date and a unique document number.",
            "Description, quantity and unit price of the goods.",
            "Trade discount, net total and credit terms on an invoice.",
            "The reason for a reduction on a credit note.",
          ],
        },
      ],
      examinerTips: [
        "Name the document, who issues it and which book it feeds; three facts, three marks.",
        "Use credit note for a reduction and debit note for the buyer's request.",
        "Say that documents may be paper or digital, since both are acceptable.",
        "For a bank statement, stress that it is the bank's record, not the firm's.",
        "Link each document to a book of prime entry rather than to the ledger directly.",
      ],
      commonMistakes: [
        "Saying the seller issues a debit note; the buyer does.",
        "Recording a credit note in the purchases journal.",
        "Confusing a statement of account with a bank statement.",
        "Treating a receipt as proof of a credit sale.",
        "Forgetting that a cheque counterfoil records a payment, not a receipt.",
      ],
      recap: [
        "State three items found on an invoice. [3]",
        "Explain the difference between a debit note and a credit note. [3]",
        "Name the source document for a payment made by cheque. [1]",
        "State the book of prime entry fed by a paying-in slip. [1]",
        "Explain how a statement of account helps a credit customer. [3]",
      ],
    },
    {
      title: "Books of Prime Entry",
      body: `### The First Record

A **book of prime entry** is where a transaction is first recorded.

The entry is made from the source document, not from memory.

Posting to the ledger happens later, often monthly in total.

### The Seven Books

The **cash book** records all receipts and payments of cash and bank.

The **petty cash book** records small payments, kept by the petty cashier.

The **sales journal** records credit sales, from invoices issued.

The **purchases journal** records credit purchases, from invoices received.

The **sales returns journal** records goods returned by customers, from credit notes issued.

The **purchases returns journal** records goods returned to suppliers, from credit notes received.

The **general journal** records corrections, opening entries and other transfers.

### Posting From the Sales Journal

Each invoice goes to the customer's account in the sales ledger.

The month's total is posted once: **debit Trade receivables, credit Sales**.

### Worked Example: Sales Journal Total

Three credit sales are made: £600 to R Patel, £900 to A Lim and £700 to J Obi.

Total = 600 + 900 + 700 = £2,200, posted as **debit Trade receivables £2,200; credit Sales £2,200**.

Individual debits: R Patel £600, A Lim £900, J Obi £700.

### Worked Example: Purchases Journal Total

Two credit purchases are made: £300 from S Khan and £250 from T Ali.

Total = 300 + 250 = £550, posted as **debit Purchases £550; credit Trade payables £550**.

### Worked Example: Returns Journal Total

Credit notes issued to customers total £260, posted as **debit Sales returns; credit Trade receivables**.

Credit notes received from suppliers total £90, posted as **debit Trade payables; credit Purchases returns**.

### The General Journal

It records corrections, opening balances and other odd items, each with a narration.

### Why Use Books of Prime Entry?

They group similar transactions, so posting is quicker and the ledger stays tidy.`,
      groups: [
        {
          subTitle: "Book and Its Job",
          bullets: [
            "**Sales journal:** credit sales, posted in total to Sales.",
            "**Purchases journal:** credit purchases, posted in total to Purchases.",
            "**Sales returns journal:** returns inwards, posted to Sales returns.",
            "**Purchases returns journal:** returns outwards, posted to Purchases returns.",
            "**Cash book:** receipts and payments, and the cash and bank accounts.",
            "**General journal:** corrections, opening entries and other transfers.",
          ],
        },
        {
          subTitle: "The Posting Pattern",
          bullets: [
            "Individual items go to the personal ledger accounts.",
            "The period total goes to the nominal ledger account.",
            "Debit the receiver and credit the giver, in total or one by one.",
            "Post the total once, never daily, to avoid duplication.",
            "A narration is needed in the general journal, not in the other books.",
          ],
        },
      ],
      examinerTips: [
        "Learn which book feeds which account; that single link answers most questions.",
        "Say credit sales go to the sales journal, because cash sales go to the cash book.",
        "Show the total posting and one individual posting to prove you understand both.",
        "Use the terms returns inwards and returns outwards alongside the journal names.",
        "For the general journal, always include a narration.",
      ],
      commonMistakes: [
        "Recording cash sales in the sales journal.",
        "Posting each invoice to the sales account as well as the total.",
        "Putting a credit note received in the sales returns journal.",
        "Using the general journal for ordinary credit purchases.",
        "Forgetting to post the individual amounts to the personal ledgers.",
      ],
      recap: [
        "Define a book of prime entry. [2]",
        "State the book of prime entry for credit purchases and for goods returned by customers. [2]",
        "Credit sales for the month total £4,600. Show the total posting. [2]",
        "Explain why the sales journal total is posted once rather than daily. [2]",
        "State two transactions recorded in the general journal. [2]",
      ],
    },
    {
      title: "Discounts, the Cash Book and Petty Cash",
      body: `### Trade Discount

**Trade discount** is a reduction from the list price.

It is given for bulk or trade orders, deducted on the invoice and never posted separately.

Only the net amount enters the ledger.

### Cash Discount

**Cash discount** is a reduction for paying within an agreed time.

**Discount allowed** to a customer is an expense; **discount received** from a supplier is income.

Both are recorded in the cash book when payment is made.

### Worked Example: Both Discounts

The list price of goods is £800 with trade discount of 20%.

Invoice value = 800 × 80% = £640.

The terms allow 5% for payment within 10 days: cash paid = 640 × 95% = £608.

Discount allowed = 640 − 608 = £32.

### Worked Example: Discount Received

A supplier's invoice is £900, with 2.5% discount for early payment.

Discount = 900 × 2.5% = £22.50, so cash paid = £877.50.

The buyer records £877.50 in the bank column and £22.50 as discount received.

### The Cash Book Has Two Jobs

It is a **book of prime entry** and also the **ledger account** for cash and bank.

So the cash and bank balances are read straight from the cash book.

### Receipts and Payments in Any Form

**Cash** payments are recorded in the cash column.

**Cheques** and **debit cards** reduce the bank balance at once; **credit cards** settle later.

**Online and bank transfers** enter the bank column when confirmed.

### Petty Cash and the Imprest System

The **petty cash book** records small payments such as postage and stationery.

Under the **imprest system** the petty cashier starts with a fixed float.

At the period end the vouchers are totalled and reimbursed exactly, restoring the float.

### Worked Example: Restoring the Imprest

The imprest is £100; vouchers are postage £12, stationery £18, cleaning £25 and travel £15.

Total paid = 12 + 18 + 25 + 15 = £70.

Cash remaining = 100 − 70 = £30.

Reimbursement = £70, so the float returns to £100.`,
      figure: cashArt,
      groups: [
        {
          subTitle: "Trade Against Cash Discount",
          bullets: [
            "**Trade discount:** deducted on the invoice, never posted separately.",
            "**Cash discount:** allowed for prompt payment, recorded in the cash book.",
            "**Discount allowed:** an expense of the seller.",
            "**Discount received:** income of the buyer.",
            "Only the net amount after trade discount enters the ledger.",
          ],
        },
        {
          subTitle: "The Cash Book Does Two Jobs",
          bullets: [
            "As a book of prime entry, it records each receipt and payment first.",
            "As a ledger account, it holds the cash and bank balances.",
            "Receipts are debits; payments are credits.",
            "Cash and bank have separate columns but one book.",
            "Card, online and transfer payments all end in the bank column.",
          ],
        },
        {
          subTitle: "Running the Imprest",
          bullets: [
            "Fix the float, for example £100, at the start of each period.",
            "Pay small expenses and keep a voucher for every one.",
            "Total the vouchers at the end of the period.",
            "Reimburse exactly the total spent, so the float is restored.",
            "The petty cashier never holds more than the agreed float.",
          ],
        },
      ],
      examinerTips: [
        "Say trade discount is deducted before recording and cash discount is recorded separately.",
        "Show both discount calculations in the working, not just the final cash figure.",
        "Explain the dual function of the cash book in two clear sentences.",
        "For the imprest, state float, total vouchers, reimbursement and restored float.",
        "Name the method of payment, since cash, card and transfer are recorded differently.",
      ],
      commonMistakes: [
        "Opening a separate ledger account for trade discount.",
        "Treating discount allowed as income; it is an expense.",
        "Calculating cash discount on the list price instead of the invoiced price.",
        "Reimbursing the cash remaining rather than the vouchers paid.",
        "Recording credit card receipts before the provider settles them.",
      ],
      recap: [
        "Distinguish between trade discount and cash discount. [4]",
        "Goods list at £500 less 10% trade discount, with 4% cash discount for early payment. Calculate the cash paid. [4]",
        "Explain the dual function of the cash book. [3]",
        "A petty cash imprest is £120 and vouchers total £86. State the reimbursement and the cash remaining. [2]",
        "State how a debit card payment and a bank transfer are recorded in the cash book. [2]",
      ],
    },
    {
      title: "Cash Security and Record Keeping",
      body: `### Cash at the Business Property

Cash on the premises gives instant access and avoids a bank trip for minor expenses.

Some customers still prefer to pay in cash.

### The Risks of Holding Cash

Cash is easy to steal and hard to trace, so it must be insured and locked away.

Cash should be counted by two people; it earns no interest and loses value with inflation.

### Manual Original Entry

Paper books are cheap, simple and need no electricity.

But they are slow, bulky and easily damaged or lost.

Totals must be calculated by hand, so arithmetic errors are common.

### Digital Original Entry

Software calculates totals, balances and reports automatically.

Records can be searched and backed up, with access limited and changes logged.

But systems cost money to buy, run and learn.

Power failure or a corrupted file can halt recording.

### Worked Example: Choosing a System

A market stall taking 40 small cash payments a week needs only a paper cash book.

A chain of five shops handles thousands of card receipts.

A digital system with automatic posting and daily backups repays its cost.

### Judging the Trade-Off

Small, simple businesses gain little from expensive software.

Large, busy businesses lose more from slow manual totals and posting errors.

Whatever the system, documents must be kept and entries must be checked.`,
      groups: [
        {
          subTitle: "Cash on the Premises",
          bullets: [
            "**Benefit:** immediate access for wages, postage and small purchases.",
            "**Benefit:** no delay waiting for a bank to open.",
            "**Limitation:** high risk of theft or loss.",
            "**Limitation:** insurance and secure storage add cost.",
            "**Limitation:** idle cash earns no interest.",
          ],
        },
        {
          subTitle: "Manual Against Digital",
          bullets: [
            "**Manual:** cheap, simple and independent of power.",
            "**Manual:** slow, bulky and prone to arithmetic error.",
            "**Digital:** fast, automatic totals, easy to search and back up.",
            "**Digital:** needs training, security controls and reliable power.",
            "Both rely on accurate source documents for correct entries.",
          ],
        },
      ],
      examinerTips: [
        "Answer a benefit and limitation question in matched pairs, one of each.",
        "Link each point to the size or type of the business.",
        "For digital systems, mention backup and access control as safeguards.",
        "Do not claim digital records remove the need for documents.",
        "Use the word risk when describing cash kept on the premises.",
      ],
      commonMistakes: [
        "Listing only benefits when the question asks for both sides.",
        "Saying digital records cannot contain errors; input errors still occur.",
        "Claiming cash is safe because it is locked in a drawer.",
        "Ignoring the cost of training when praising software.",
        "Forgetting that manual records still need a safe storage place.",
      ],
      recap: [
        "State two benefits and two limitations of keeping cash at the business property. [4]",
        "State two advantages of a digital book of prime entry. [2]",
        "State two disadvantages of manual original entry. [2]",
        "Explain why a small market stall may prefer a manual cash book. [3]",
        "Explain how a business can reduce the risk of loss from cash held on the premises. [3]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_2: Chapter = chapterTwo;
