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

const trialBalanceArt = artPanel([
  {
    src: "ac03-trial-balance-columns.webp",
    alt: "Flat cartoon of an accountant comparing two tall columns of figures on a trial balance sheet, with a green tick where the totals match",
    caption: "Two columns, one total",
  },
  {
    src: "ac03-hidden-error-magnifier.webp",
    alt: "Flat cartoon of a magnifying glass hovering over a ledger page and revealing a small reversed figure",
    caption: "Some errors never show",
  },
]);

const bankReconciliationArt = artPanel([
  {
    src: "ac03-bank-statement-reconcile.webp",
    alt: "Flat cartoon of a bank statement and a cash book lying side by side, joined by a curved arrow and a tick",
    caption: "Statement meets cash book",
  },
  {
    src: "ac03-unpresented-cheque.webp",
    alt: "Flat cartoon of a shopkeeper holding a cheque while a bank clerk waits beside an empty in-tray",
    caption: "Written, not yet presented",
  },
]);

const controlAccountArt = artPanel([
  {
    src: "ac03-sales-ledger-control.webp",
    alt: "Flat cartoon of one large summary account with arrows flowing into it from many small customer accounts",
    caption: "Many accounts, one total",
  },
  {
    src: "ac03-contra-entry.webp",
    alt: "Flat cartoon of two ledgers joined by a two-way arrow labelled contra, with a shop building and a delivery van beside them",
    caption: "Same firm, both ledgers",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Verification of Accounting Records",
  intro: `A trial balance proves only that debits equal credits, and nothing more.\n\n**Errors**, a **suspense account** and a **bank reconciliation** find the rest.\n\n**Control accounts** test whole ledgers against one summary total.\n\nEach tool checks a different part of the double entry.\n\nLearn the six hidden errors and the two-column layouts, and the exam questions become routine.`,
  subheadings: [
    {
      title: "The Trial Balance",
      body: `### What a Trial Balance Is

A trial balance lists every ledger balance at one date.

Debit balances go in the left column, credit balances in the right.

Both columns must total exactly the same amount.

That equality follows from double entry: every debit has an equal credit.

### Three Purposes

First, it checks the arithmetical accuracy of the double entry.

Second, it helps locate errors, because any difference points to a mistake.

Third, it supplies the figures for the income statement and statement of financial position.

### Balances That Are Debits

Assets and expenses normally carry debit balances.

Drawings carry a debit balance too.

Purchases, rent, wages, carriage inwards and sales returns are all debits.

### Balances That Are Credits

Liabilities, capital and income normally carry credit balances.

Sales, discount received, interest received and allowances are credits.

A bank overdraft is a credit balance, never a debit.

### Preparing the Trial Balance

Write each account name, then its balance in the correct column.

Add each column separately and compare the two totals.

Only when they agree are the financial statements prepared.

### Worked Example: A Full Trial Balance

Balances at 31 December 2025: machinery £12,000, inventory £3,400, trade receivables £5,600.

Also bank £1,250, cash £350, purchases £19,500, rent £2,000 and wages £4,000.

Credits: trade payables £4,100, loan £6,000, capital £10,000 and sales £28,000.

Debit column: 12,000 + 3,400 + 5,600 + 1,250 + 350 + 19,500 + 2,000 + 4,000 = £48,100.

Credit column: 4,100 + 6,000 + 10,000 + 28,000 = £48,100.

The totals agree, so the double entry is arithmetically sound.

### Amending a Trial Balance

Sometimes the totals differ because a balance was listed wrongly.

Find the difference first, then look for an item of that size or half of it.

A balance entered on the wrong side creates twice its value as a difference.

Worked example: debits £44,820 and credits £45,000, so credits exceed debits by £180.

A bank balance of £90 had been listed in the credit column instead of the debit column.

Move it: debits become 44,820 + 90 = £44,910 and credits become 45,000 − 90 = £44,910.

The corrected totals agree at £44,910.

### Limitations

Agreement proves only that the debits equal the credits.

It does not prove that entries reached the right accounts.

It does not prove that the amounts are correct, or that every transaction was recorded.

Six named errors leave the trial balance agreeing perfectly, and they are studied next.`,
      figure: trialBalanceArt,
      groups: [
        {
          subTitle: "Purposes and Limits",
          bullets: [
            "**Purpose one:** check that total debits equal total credits.",
            "**Purpose two:** locate errors, since a difference points to a fault.",
            "**Purpose three:** collect the balances needed for the financial statements.",
            "**Limit one:** a matching trial balance does not prove the entries are correct.",
            "**Limit two:** wrong accounts, wrong amounts and missing transactions all survive it.",
          ],
        },
        {
          subTitle: "Debit or Credit? A Quick Check",
          bullets: [
            "**Debit:** assets, expenses, purchases, sales returns, drawings.",
            "**Credit:** liabilities, capital, income, sales, purchases returns.",
            "**Bank:** a debit balance means money in the bank; a credit balance means an overdraft.",
            "**Inventory:** always a debit balance, as a current asset.",
            "**Loan:** always a credit balance, as a liability.",
            "**Carriage inwards:** a debit, because it is part of the cost of purchases.",
          ],
        },
        {
          subTitle: "Building and Amending",
          bullets: [
            "List every account once, with no account appearing twice.",
            "Total each column separately and write both totals on the same line.",
            "If the columns differ, divide the difference by two to find a wrongly sided item.",
            "Check for a missing balance, a transposed figure or a one-sided posting.",
            "Only listing errors are fixed on the trial balance; ledger errors need a journal.",
          ],
        },
      ],
      examinerTips: [
        "Write the two column totals clearly, because a trial balance that agrees earns the layout marks.",
        "Put a bank overdraft in the credit column and label it as an overdraft in brackets.",
        "When a trial balance fails to agree, divide the difference by two before searching.",
        "For a limitation question, name the error type and say why both totals still agree.",
        "Do not list closing inventory as a separate trial balance item; it is a year-end adjustment.",
      ],
      commonMistakes: [
        "Putting a bank overdraft in the debit column; an overdraft is a liability, so it is a credit.",
        "Listing sales returns as a credit; returns inwards reduce sales, so they are a debit.",
        "Entering drawings as a credit because the owner takes money out; drawings are a debit.",
        "Treating a matching trial balance as proof that the books are correct.",
        "Adding carriage outwards to purchases; it is a selling expense, not part of cost.",
      ],
      recap: [
        "State two purposes of preparing a trial balance. [2]",
        "Explain why a trial balance may agree even when errors exist. [2]",
        "A trial balance shows debits of £44,820 and credits of £45,000. A bank balance of £90 was listed in the credit column. Calculate the corrected totals. [3]",
        "Prepare the debit and credit columns for: machinery £12,000, inventory £3,400, trade receivables £5,600, bank £1,250, cash £350, purchases £19,500, rent £2,000, wages £4,000, trade payables £4,100, loan £6,000, capital £10,000, sales £28,000. [4]",
        "State one error that would cause a trial balance to disagree. [1]",
      ],
    },
    {
      title: "Errors That Do Not Affect the Trial Balance",
      body: `### Why Some Errors Hide

The trial balance only compares two totals.

If a mistake disturbs both sides equally, the totals still agree.

Six named errors behave in exactly that way.

### Error of Omission

A transaction is left out of the books completely.

Example: a credit sale of £300 is never recorded anywhere.

Both the debit and the credit are missing, so the totals still match.

### Error of Commission

The right class of account is used, but the wrong person's account.

Example: a sale to J. Smith is posted to the account of J. Smyth.

Total receivables is still correct, so the trial balance agrees.

### Error of Principle

An item is placed in the wrong class of account.

Example: machinery bought for £2,000 is debited to purchases.

A capital item has been treated as revenue expenditure, so two account types are confused.

### Error of Original Entry

The wrong amount is entered in the book of prime entry.

That same wrong figure is then posted to both accounts.

Example: an invoice for £540 is recorded as £450 in the sales day book and in the ledger.

### Error of Complete Reversal

The debit and the credit are swapped.

Example: a cash sale of £80 is debited to sales and credited to cash.

Both accounts are wrong, yet the two totals still agree.

### Compensating Errors

Two separate errors cancel each other out.

Example: purchases are overcast by £100 and sales are overcast by £100.

One error inflates debits, the other inflates credits, so the totals still match.

### Errors That Do Break the Agreement

A one-sided entry, such as a debit posted without its credit.

An addition error in one account only.

One amount entered in one account and a different amount in the other.

A balance carried down wrongly, or listed on the wrong side of the trial balance.

### Telling Them Apart in an Exam

Ask two questions: which accounts, and which class.

Wrong person, same class: commission.

Wrong class of account: principle.

Wrong figure in the prime entry: original entry.

Nothing recorded at all: omission.

Both sides swapped: complete reversal.

Two unrelated slips that cancel: compensating.`,
      groups: [
        {
          subTitle: "The Six Named Errors",
          bullets: [
            "**Commission:** correct accounts, wrong person's account in the same ledger.",
            "**Principle:** wrong class of account, such as capital treated as revenue.",
            "**Original entry:** wrong amount carried from the book of prime entry.",
            "**Omission:** the transaction is not recorded at all.",
            "**Complete reversal:** debit and credit entered the wrong way round.",
            "**Compensating:** two errors of equal size cancel each other.",
          ],
        },
        {
          subTitle: "Match the Example to the Name",
          bullets: [
            "Sale to J. Smith posted to J. Smyth: error of commission.",
            "Van repair debited to the motor vehicles account: error of principle.",
            "Invoice of £540 entered as £450 in both accounts: error of original entry.",
            "A credit purchase never entered anywhere: error of omission.",
            "Cash sale debited to sales and credited to cash: complete reversal.",
            "Purchases overcast £100 and sales overcast £100: compensating error.",
          ],
        },
        {
          subTitle: "Errors That Do Show Up",
          bullets: [
            "A debit posted without its credit, or the reverse.",
            "A casting error in one account only.",
            "A transposed figure posted to one account only, such as £63 for £36.",
            "A balance entered on the wrong side of the trial balance.",
            "Any of these changes one column only, so the totals disagree.",
          ],
        },
      ],
      examinerTips: [
        "Name the error precisely; a general answer such as posting error earns nothing.",
        "Say why the trial balance still agrees, because the reason carries the second mark.",
        "For commission, stress that the correct class of account was used, but the wrong person.",
        "For principle, identify the two classes confused, such as capital and revenue.",
        "Read the scenario twice: the number of entries affected decides the error type.",
      ],
      commonMistakes: [
        "Calling a wrong person's account an error of principle; it is an error of commission.",
        "Saying an error of omission is found by the trial balance; nothing was recorded at all.",
        "Confusing original entry with transposition; original entry starts in the prime entry book.",
        "Forgetting that a complete reversal needs both accounts to be wrong.",
        "Assuming any two errors cancel; only equal and opposite errors are compensating.",
      ],
      recap: [
        "Name the six errors that do not affect the trial balance. [6]",
        "A purchase of office equipment was debited to the purchases account. Name the error. [1]",
        "A sale to A. Brown was entered in the account of A. Browne. Name the error and explain why the trial balance still agrees. [2]",
        "Explain, with an example, what is meant by a compensating error. [3]",
        "State two errors that would cause a trial balance to disagree. [2]",
      ],
    },
    {
      title: "Correcting Errors and the Suspense Account",
      body: `### The Journal Corrects Errors

Every correction is recorded in the journal first.

The journal names the accounts, the amounts and a short narrative.

The narrative usually begins with the words being correction of.

The correction is then posted to the ledger accounts.

### Correcting a One-Sided Entry

A rent payment of £180 was entered in the cash book only.

The rent account was never debited.

Correction: debit rent £180, credit suspense £180.

### Correcting a Wrong Account

A sale to J. Smith was posted to J. Smyth.

Correction: debit J. Smith £300, credit J. Smyth £300.

No suspense entry is needed, because the totals already agree.

### Correcting an Error of Principle

Machinery of £2,000 was debited to purchases.

Correction: debit machinery £2,000, credit purchases £2,000.

Profit rises once the expense is removed from purchases.

### The Suspense Account

A suspense account is opened when the trial balance will not agree.

The difference is entered in the suspense account, on the side that makes the totals balance.

It is a temporary account, cleared as each error is found and corrected.

The account must have a nil balance when every error has been dealt with.

### Worked Example: Opening the Suspense Account

At 31 March the trial balance showed debits of £68,540 and credits of £68,290.

Debits exceed credits by £250, so a credit of £250 is entered in the suspense account.

Suspense account: credit balance b/d £250.

### Worked Example: Clearing the Suspense Account

Error one: a cheque of £180 from T. Ray was entered in the cash book but not in Ray's account.

Correction: debit suspense £180, credit T. Ray £180.

Error two: a £70 stationery payment was entered in the stationery account only.

Correction: debit suspense £70, credit bank £70.

Suspense account: debits 180 + 70 = £250, matching the credit balance b/d of £250.

The account now closes at nil.

### Reversing the Direction

Suppose debits are short by £120, so the suspense balance is a debit.

A cash sale of £120 was entered in the sales account only.

Correction: debit cash £120, credit suspense £120.

The suspense account then closes at nil.

### Adjusting Profit After Correction

Start from the draft profit and adjust for each correction.

Error one changed only a customer's account, so profit is untouched.

Error two added a £70 expense, so profit falls from £12,000 to £11,930.

An expense omitted raises profit when corrected; an income omitted lowers it.

An expense wrongly recorded twice lowers profit when corrected.

### Effect on the Statement of Financial Position

Machinery of £900 was debited to purchases, so non-current assets were understated.

Correcting it adds £900 to machinery, less depreciation of £180 at 20%.

Net book value rises by £720, and capital rises by the same £720.

The bank balance is unchanged, because the money had already been paid.

### Why the Suspense Account Matters

It lets the trial balance be completed before every error is found.

It keeps the double entry intact while the search continues.

It is a red flag: a balance in suspense means errors still exist.

It is never used to hide a difference permanently.`,
      groups: [
        {
          subTitle: "Journal Entries for Common Corrections",
          bullets: [
            "**One-sided debit:** debit the missing account, credit suspense.",
            "**One-sided credit:** debit suspense, credit the missing account.",
            "**Wrong person:** debit the account that should have been debited, credit the wrong one.",
            "**Wrong class:** debit the correct asset account, credit the expense account used.",
            "**Complete reversal:** reverse the original entry, then post it correctly.",
            "**Omission:** debit the account that should have been debited, credit the other.",
          ],
        },
        {
          subTitle: "How Suspense Works",
          bullets: [
            "Open it only when the trial balance totals disagree.",
            "Enter the difference on the side that makes the totals equal.",
            "Debits higher than credits means a credit balance in suspense.",
            "Each one-sided error is corrected through suspense, not through profit.",
            "Clear it to nil before preparing the financial statements.",
          ],
        },
        {
          subTitle: "Tracing the Effect on Profit",
          bullets: [
            "Expense omitted: profit was overstated, so the correction lowers profit.",
            "Income omitted: profit was understated, so the correction raises profit.",
            "Capital item treated as an expense: correcting it raises profit.",
            "Sale overcast: correcting it lowers profit and lowers receivables.",
            "Two-sided errors never touch suspense, but they often touch profit.",
          ],
        },
      ],
      examinerTips: [
        "Write journal entries in full: account, Dr or Cr, amount, then the narrative.",
        "Give the narrative as being correction of the error, because it earns a mark.",
        "State the effect on profit in money, not just as increase or decrease.",
        "When asked for the suspense balance, work out which side the difference falls on.",
        "Show the corrected figures, since a bare statement of the error rarely scores.",
      ],
      commonMistakes: [
        "Sending a two-sided correction through suspense, which leaves suspense unbalanced.",
        "Forgetting the narrative in a journal entry.",
        "Saying profit rises when an unrecorded expense is corrected; it falls.",
        "Leaving a balance in suspense and calling it a provision.",
        "Mixing the sides: a missing credit is corrected by debiting suspense.",
      ],
      recap: [
        "Explain the purpose of a suspense account. [2]",
        "A trial balance shows debits of £68,540 and credits of £68,290. Prepare the suspense account entry. [2]",
        "A cheque of £180 from T. Ray was entered in the cash book only. Give the journal entry to correct it. [3]",
        "Machinery of £900 was debited to purchases. Explain the effect on profit and on non-current assets, before depreciation. [4]",
        "Draft profit is £12,000. A stationery bill of £70 was unrecorded. Calculate the corrected profit. [2]",
      ],
    },
    {
      title: "The Bank Statement and the Cash Book",
      body: `### Two Records of One Account

The business records its bank transactions in the cash book.

The bank keeps its own record, called the bank statement.

Both describe the same money, so both should agree.

### Why They Differ

The bank records some items before the business does.

The business records some cheques before the bank does.

Timing and errors create the gap between the two balances.

### Reading the Statement

A credit entry on a bank statement means money paid into the account.

A debit entry means money paid out of the account.

This is the reverse of the cash book, where money in is a debit.

### Items Only the Bank Knows

Bank charges are deducted by the bank without asking.

Bank interest paid and interest received are added by the bank.

Standing orders and direct debits are paid by the bank on the business's behalf.

Credit transfers, such as a customer paying straight in, also appear first on the statement.

The cash book must be updated for every one of these items.

### Updating the Cash Book

Bank charges and interest paid: credit the cash book, debit the expense.

Interest received: debit the cash book, credit interest received.

Standing orders and direct debits: credit the cash book, debit the expense or the payable.

Credit transfers from customers: debit the cash book, credit the customer's account.

Errors in the cash book are corrected before any reconciliation begins.

A dishonoured cheque is reversed: credit the cash book, debit the customer.

### Worked Example: Updating the Cash Book

The cash book shows a debit balance of £1,850.

The statement reveals bank charges of £45 and interest received of £60.

A standing order of £120 for insurance has not been entered.

A cheque of £310 to a supplier was entered in the cash book as £130, an error of £180.

Updated balance = 1,850 − 45 + 60 − 120 − 180 = £1,565.

The £180 error reduces the cash book, because too little was recorded as paid.

### Why Reconcile at All

Reconciliation proves that both records are complete and correct.

It detects fraud, duplicate payments and unrecorded bank charges.

It provides the true bank balance for the statement of financial position.

It also explains any difference to an auditor or a lender.

### Purpose of the Bank Statement

It is independent evidence of every payment and receipt.

It is the source of items the business has not yet recorded.

It confirms the balance the business should be showing.

### Digital Banking

Statements now arrive as downloads or live feeds.

Card payments and transfers often clear within minutes.

Fewer cheques means fewer unpresented items.

Bank feeds still need checking, because charges and errors still appear.`,
      groups: [
        {
          subTitle: "Cash Book or Bank Statement?",
          bullets: [
            "**Money in:** debit in the cash book, credit on the bank statement.",
            "**Money out:** credit in the cash book, debit on the bank statement.",
            "**Bank charges:** credit the cash book, debit an expense.",
            "**Interest received:** debit the cash book, credit interest received.",
            "**Standing order:** credit the cash book, debit the expense it pays.",
            "**Credit transfer from a customer:** debit the cash book, credit receivables.",
          ],
        },
        {
          subTitle: "What the Business Must Add",
          bullets: [
            "Bank charges and bank interest paid.",
            "Standing orders and direct debits.",
            "Credit transfers and dividends paid straight into the account.",
            "Dishonoured cheques, which reverse an earlier receipt.",
            "Any error the bank has notified to the business.",
          ],
        },
        {
          subTitle: "Why the Balances Differ",
          bullets: [
            "Cheques issued but not yet presented for payment.",
            "Deposits paid in but not yet credited by the bank.",
            "Items entered by the bank but not yet by the business.",
            "Errors made by the business in its own cash book.",
            "Errors made by the bank on the statement.",
          ],
        },
      ],
      examinerTips: [
        "Update the cash book first, then reconcile; reversing the order loses marks.",
        "Remember the statement is written from the bank's point of view, so the sides are swapped.",
        "Label every adjustment with the item, such as bank charges, not just an amount.",
        "Deal with a cash book error before starting the reconciliation statement.",
        "State the purpose in terms of checking records, detecting fraud and finding the true balance.",
      ],
      commonMistakes: [
        "Debiting bank charges in the cash book instead of crediting them.",
        "Reconciling before adding the bank charges and standing orders to the cash book.",
        "Treating a credit balance on the statement as an overdraft; it means money in the bank.",
        "Forgetting that a dishonoured cheque must be reversed in the cash book.",
        "Adjusting the cash book for unpresented cheques, which belong in the reconciliation.",
      ],
      recap: [
        "State two reasons why a business prepares a bank reconciliation. [2]",
        "Explain why a credit entry on a bank statement means money received. [2]",
        "A cash book shows £1,850. Bank charges are £45, interest received £60, a standing order £120, and a £310 cheque was entered as £130. Calculate the updated balance. [4]",
        "Give the cash book entry needed for a direct debit of £95 paid by the bank. [2]",
        "Explain how faster electronic clearing affects bank reconciliation. [2]",
      ],
    },
    {
      title: "The Bank Reconciliation Statement",
      body: `### What It Reconciles

The statement starts from one balance and finishes at the other.

Most answers start with the bank statement balance and finish with the cash book.

Either direction is accepted, provided the working is clear.

### Unpresented Cheques

A cheque is written and entered in the cash book at once.

The bank only learns of it when the payee pays it in.

Until then the statement is higher than the cash book.

Add unpresented cheques to the statement balance.

### Uncredited Deposits

A deposit is entered in the cash book when it is paid in.

The bank may credit it a day or two later.

Until then the statement is lower than the cash book.

Deduct uncredited deposits from the statement balance.

### Bank Errors

The bank can make mistakes as well.

A wrong debit lowers the statement, so add it back.

A wrong credit raises the statement, so deduct it.

### Worked Example: The Statement

The updated cash book shows a debit balance of £1,565.

The bank statement shows a credit balance of £1,985.

Unpresented cheques total £870 and an uncredited deposit is £420.

The bank also debited £30 in error.

Statement 1,985 + uncredited deposit 420 + bank error 30 − unpresented cheques 870 = £1,565.

The reconciliation agrees exactly with the cash book.

### The Other Direction

Start with the cash book balance of £1,565 instead.

Add unpresented cheques of £870, giving £2,435.

Deduct the uncredited deposit of £420, giving £2,015.

Deduct the bank error of £30, giving £1,985, the statement balance.

Both routes describe the same facts.

### Overdrafts

A credit balance in the cash book means an overdraft.

Show overdraft figures in brackets and treat them as negative.

The same add and deduct rules apply with the signs watched.

### Items Never in the Reconciliation

Bank charges, interest and standing orders are already in the cash book.

They appear in the reconciliation only if the cash book has not been updated.

A reconciliation statement is not part of the double entry.

### Digital Transactions

Instant transfers mean fewer uncredited deposits and unpresented cheques.

Some differences now last minutes rather than days.

Cheque books are rare, so timing items are smaller.

Errors and unrecorded charges still need the same reconciliation.

Automated bank feeds reduce delay but never remove the need to check.`,
      figure: bankReconciliationArt,
      groups: [
        {
          subTitle: "The Two Adjustments",
          bullets: [
            "**Unpresented cheques:** add to the statement balance, or deduct from the cash book route.",
            "**Uncredited deposits:** deduct from the statement balance.",
            "**Bank wrong debit:** add back, because the statement is too low.",
            "**Bank wrong credit:** deduct, because the statement is too high.",
            "Cash book errors are fixed in the cash book, not in the statement.",
          ],
        },
        {
          subTitle: "Layout That Scores",
          bullets: [
            "Head the statement with the date it is prepared.",
            "Start with one balance and label whose balance it is.",
            "Write each adjustment on its own line with a short description.",
            "Finish with the other balance and state that it agrees.",
            "Show overdrafts in brackets throughout.",
          ],
        },
        {
          subTitle: "Reconciliation and Digital Banking",
          bullets: [
            "Faster clearing reduces the number of timing differences.",
            "Card and online receipts may appear on the statement the same day.",
            "Standing orders and direct debits are still unrecorded until the business updates.",
            "Bank errors and duplicate charges still occur.",
            "Regular reconciliation remains a control against fraud.",
          ],
        },
      ],
      examinerTips: [
        "Complete the cash book update first; the reconciliation uses that updated balance.",
        "Label each line, because unlabelled figures rarely earn full marks.",
        "Check that your final figure matches the other record, and say so.",
        "Add unpresented cheques and deduct uncredited deposits when starting from the statement.",
        "Use brackets for overdrafts and keep every sign consistent.",
      ],
      commonMistakes: [
        "Deducting unpresented cheques instead of adding them to the statement balance.",
        "Adding uncredited deposits instead of deducting them.",
        "Including bank charges in the statement after already updating the cash book.",
        "Forgetting to correct the cash book before reconciling.",
        "Mixing overdraft signs, which doubles the apparent difference.",
      ],
      recap: [
        "Explain what is meant by an unpresented cheque. [2]",
        "A bank statement shows £1,985. Unpresented cheques are £870, an uncredited deposit is £420, and the bank wrongly debited £30. Calculate the cash book balance. [4]",
        "State how an uncredited deposit is treated in a bank reconciliation statement. [1]",
        "Explain why bank charges are not shown in the reconciliation statement after the cash book is updated. [2]",
        "Discuss how digital banking has changed bank reconciliation. [4]",
      ],
    },
    {
      title: "Control Accounts",
      body: `### Two Summary Accounts

The sales ledger control account totals all trade receivables.

The purchases ledger control account totals all trade payables.

Each is one account summarising many individual ledger accounts.

It is a memorandum account, kept outside the double entry in most systems.

### Why Keep Them

They check the arithmetical accuracy of the ledgers.

They locate errors quickly, because the control total is built independently.

They deter fraud, since a false entry must be matched elsewhere.

They give the receivables and payables figures at once for the statement of financial position.

They allow the ledgers to be split between several clerks.

### Sources of the Entries

Credit sales come from the sales day book.

Credit purchases come from the purchases day book.

Receipts and payments come from the cash book.

Returns come from the returns day books.

Discounts, irrecoverable debts, interest and contras come from the journal.

### Sales Ledger Control Account

Debit: opening debit balances, credit sales, interest charged on overdue accounts.

Debit: dishonoured cheques, and refunds to credit customers.

Credit: receipts from customers, discount allowed, sales returns.

Credit: irrecoverable debts written off, and contra set-offs.

Credit: opening credit balances, then the closing balance carried down.

### Purchases Ledger Control Account

Credit: opening credit balances, credit purchases, interest charged by suppliers.

Debit: payments to suppliers, discount received, purchases returns.

Debit: refunds from suppliers and contra set-offs.

Debit: opening debit balances, then the closing balance carried down.

### Contra Entries

A contra entry sets off a balance between the two control accounts.

It arises when the same firm is both a customer and a supplier.

Debit the purchases ledger control, credit the sales ledger control.

### Worked Example: Sales Ledger

Opening debit balances £14,200; credit sales £86,400; receipts £72,600.

Discount allowed £1,850; sales returns £2,300; irrecoverable debts £640.

Interest charged £180; dishonoured cheque £320; contra £900; refund £150.

Debits: 14,200 + 86,400 + 180 + 320 + 150 = £101,250.

Credits: 72,600 + 1,850 + 2,300 + 640 + 900 = £78,290.

Closing debit balance = 101,250 − 78,290 = £22,960.

### Worked Example: Purchases Ledger

Opening credit balances £9,600; credit purchases £54,300; payments £47,800.

Discount received £1,240; returns £1,500; refund from a supplier £260; contra £900.

Interest charged by a supplier £140.

Credits: 9,600 + 54,300 + 140 = £64,040.

Debits: 47,800 + 1,240 + 1,500 + 260 + 900 = £51,700.

Closing credit balance = 64,040 − 51,700 = £12,340.

### Refunds and Dishonoured Cheques

A refund to a customer clears a credit balance, so it is a debit.

A refund from a supplier clears a debit balance, so it is a credit.

A dishonoured cheque from a customer puts the debt back, so it is a debit.

A cheque the business issued that bounces leaves the debt owing, a credit.

### Digital Recording

Accounting software updates control accounts automatically.

Every posted invoice changes the total at once.

Automatic addition removes casting errors but not wrong coding.

A control account still checks the ledgers; it does not replace them.

Software can also list receivables and payables by age in seconds.`,
      figure: controlAccountArt,
      groups: [
        {
          subTitle: "Sales Ledger Control: Sides",
          bullets: [
            "**Debit:** opening debit balances, credit sales, interest on overdue accounts.",
            "**Debit:** dishonoured cheques and refunds to credit customers.",
            "**Credit:** receipts, discount allowed, sales returns.",
            "**Credit:** irrecoverable debts and contra set-offs.",
            "**Credit then debit:** the closing balance is carried down on the credit side.",
          ],
        },
        {
          subTitle: "Purchases Ledger Control: Sides",
          bullets: [
            "**Credit:** opening credit balances, credit purchases, interest from suppliers.",
            "**Debit:** payments, discount received, purchases returns.",
            "**Debit:** refunds from suppliers and contra set-offs.",
            "**Debit then credit:** the closing balance is carried down on the debit side.",
            "Do not include cash purchases, which never touch the payables ledger.",
          ],
        },
        {
          subTitle: "Why Control Accounts Earn Their Place",
          bullets: [
            "They prove the ledgers add up to the general ledger totals.",
            "They narrow an error hunt to one ledger.",
            "They make fraud harder, because two records must agree.",
            "They give a single receivables or payables figure for the statements.",
            "They allow several clerks to work on one ledger without conflict.",
          ],
        },
      ],
      examinerTips: [
        "Open with the balance b/d, then list items in a logical order, and close with the balance c/d.",
        "Label each item, because an unlabelled figure rarely earns the mark.",
        "Remember receipts and payments from the cash book, and returns from the returns day books.",
        "Interest charged on overdue accounts is a debit in the sales ledger control.",
        "State that an allowance for irrecoverable debts is not entered in the control account.",
      ],
      commonMistakes: [
        "Putting discount allowed on the debit side; it reduces receivables, so it is a credit.",
        "Entering an irrecoverable debt on the debit side of the sales ledger control.",
        "Putting a contra entry on one side only, which leaves the two accounts unequal.",
        "Including cash sales in the sales ledger control account.",
        "Reconciling the control account with one customer's balance instead of the ledger total.",
      ],
      recap: [
        "State two purposes of preparing a sales ledger control account. [2]",
        "Explain the double entry for a contra entry between the two control accounts. [2]",
        "Opening receivables £14,200, credit sales £86,400, receipts £72,600, discount allowed £1,850, returns £2,300, irrecoverable debts £640, interest charged £180, dishonoured cheque £320, contra £900, refund £150. Calculate the closing balance. [5]",
        "State how a refund from a credit supplier is recorded in the purchases ledger control account. [2]",
        "Explain how accounting software has changed the preparation of control accounts. [3]",
      ],
    },
  ],
};

export const ACCOUNTING_CHAPTER_3: Chapter = chapterThree;
