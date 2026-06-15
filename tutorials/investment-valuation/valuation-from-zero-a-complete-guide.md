# Valuation From Zero: Accounting, DCF, and Relative Valuation

*A complete, self-contained guide for the curious beginner who wants to understand valuation deeply enough to do it independently.*

---

## How to use this guide

This guide assumes you know almost nothing about accounting and builds every concept from the ground up. It is written to be read in order, because each idea rests on the one before it.

Two things make it different from a textbook chapter:

1. **One continuous case study.** Almost every worked number belongs to a single fictional company, **Northwind Manufacturing Ltd**. You will meet Northwind in the accounting section, learn to read its statements, then value it two completely different ways. By the end you will have valued one real-feeling business from first principles.
2. **History woven through.** You asked where these ideas came from. Valuation was not handed down complete; it was assembled over five centuries by merchants, mathematicians, and economists. Knowing the lineage makes the formulas feel inevitable rather than arbitrary.

A suggestion: do not rush the accounting section. Most people who find valuation confusing are not confused about valuation. They are confused about accounting, and the valuation simply inherits that fog. Clear the fog first and the rest becomes almost easy.

### What you will be able to do at the end

- Read an income statement, balance sheet, and cash flow statement, and explain how they connect.
- Discount any stream of future cash to a value today, and explain why that is the correct thing to do.
- Build a discounted cash flow (DCF) valuation of a company from its financials.
- Value the same company using market multiples, and understand why the two methods are secretly the same idea.
- Form a defensible view on whether a company is cheap or expensive.

---

## Table of contents

1. The big picture: what valuation actually is
2. Accounting foundations, from zero
3. The time value of money: the engine
4. Intrinsic valuation: the discounted cash flow (DCF)
5. Relative valuation: multiples
6. Bringing it together
7. Glossary
8. Where to go next

---

# Part 1: The big picture

## 1.1 The one sentence that contains everything

Here is the entire subject in a single sentence. Read it slowly:

> **An asset is worth the cash it will put in your pocket over its lifetime, adjusted for when you receive that cash and how certain you are of receiving it.**

Every technique in this guide is a way of making that sentence precise. Notice it has three parts:

- **How much** cash (the amounts).
- **When** you get it (timing, because money has a time value).
- **How certain** you are (risk, because a promise is worth less than a certainty).

If you ever feel lost later, return to this sentence. The DCF method is the literal, line by line execution of it. Relative valuation is a clever shortcut to the same answer.

## 1.2 Two roads to a value: intrinsic and relative

Imagine you want to value a house.

**Road one (intrinsic).** You ask: how much rent will this house generate over the years I own it, and what could I sell it for at the end? You add up all that future cash, adjust it for timing and risk, and arrive at a number built purely from the property's own economics. This is **intrinsic valuation**. For a company, the cash is the profit it throws off, and the tool is the **discounted cash flow (DCF)**.

**Road two (relative).** You ask: what did the three similar houses on this street sell for last month, per square metre? You take that price and apply it to your house. You have not analysed the rent at all; you have simply priced your house by comparison to others. This is **relative valuation**. For a company, the comparison is to similar companies trading in the market, and the tool is **multiples** (such as the price to earnings ratio).

Both roads are legitimate, and a good appraiser uses both, then sees whether they agree.

| | Intrinsic (DCF) | Relative (Multiples) |
|---|---|---|
| **Core question** | What is this worth on its own merits? | What are people paying for things like this? |
| **Built from** | The asset's own future cash flows | Prices of comparable assets |
| **Strength** | Grounded in fundamentals; forces you to state your assumptions | Fast; anchored to real market prices |
| **Weakness** | Very sensitive to assumptions you cannot fully verify | Inherits the market's mistakes; assumes peers are priced correctly |
| **Best when** | You have a clear view of long term cash flows | You need speed, or a market reference point |

The deep punchline, which we will prove in Part 5: these two roads are not really separate. A multiple is just a compressed DCF. Understanding that connection is the moment valuation clicks.

## 1.3 A brief history: where these ideas came from

Valuation as we practise it is an assembly of ideas from very different centuries. A short timeline for orientation:

| Year | Milestone | Why it matters |
|---|---|---|
| ~1202 | Fibonacci, *Liber Abaci* | Among the first written present value calculations, comparing cash at different dates |
| 1494 | Luca Pacioli, *Summa de Arithmetica* | First printed description of double entry bookkeeping, the basis of all financial statements |
| 1930 | Irving Fisher, *The Theory of Interest* | The modern theory of why future money is worth less than money today |
| 1934 | Graham and Dodd, *Security Analysis* | Introduced disciplined intrinsic value and the "margin of safety" |
| 1938 | John Burr Williams, *The Theory of Investment Value* | Stated that a security is worth the present value of its future cash, the intellectual birth of the DCF |
| 1952 to 1964 | Markowitz, then Sharpe | Portfolio theory and the Capital Asset Pricing Model gave a principled way to set the discount rate |
| 1958 | Modigliani and Miller | Formal theory of capital structure, the foundation under the weighted average cost of capital |
| 1986 | Alfred Rappaport, *Creating Shareholder Value* | Brought free cash flow and the DCF into mainstream corporate strategy |
| 1990s onward | McKinsey's *Valuation*, and Aswath Damodaran (NYU) | Systematised valuation into the modern professional discipline |

We will revisit each figure at the moment their idea becomes useful. Now we lay the foundation: accounting.

---

# Part 2: Accounting foundations, from zero

You cannot value a business without reading its financial statements, and you cannot read them without understanding a handful of core ideas. This part builds those ideas slowly. It is the longest part of the guide on purpose.

## 2.1 Why accounting exists at all

In fifteenth century Venice, merchants ran complex trading ventures: borrow money, buy goods, ship them, sell them, repay lenders, split profits. They needed to answer two questions reliably:

1. **Am I making money?**
2. **What do I own, and what do I owe?**

The solution that spread across Europe was **double entry bookkeeping**, first printed by the friar and mathematician Luca Pacioli in 1494 (the merchants had used it for some time already). Its central trick is that **every transaction is recorded twice**, once as where value came from and once as where it went. Because the two sides must always match, the books check themselves. If they do not balance, you made an error.

That single idea, every transaction has two equal and opposite sides, is why the balance sheet always balances. Hold on to it.

Modern accounting produces three reports, called the **financial statements**. They are three camera angles on the same business.

## 2.2 The three statements and the three questions

| Statement | The question it answers | What kind of thing it is |
|---|---|---|
| **Income statement** (also called the profit and loss, or P&L) | Did the business make a profit over a period of time? | A **movie**: it covers a span (a quarter, a year) |
| **Balance sheet** | What does the business own and owe at a single moment? | A **photograph**: a snapshot at one instant |
| **Cash flow statement** | Where did the cash actually come from and go over a period? | A **movie**: it follows the money across a span |

The photograph versus movie distinction is worth fixing in your mind. The balance sheet is dated "as at 31 December". The income statement and cash flow statement are dated "for the year ended 31 December". Two of them describe a journey; one describes a position at the end of it.

## 2.3 The income statement: did we make a profit?

The income statement starts with sales at the top and subtracts costs in layers until it reaches profit at the bottom. This is why sales are called the **top line** and profit the **bottom line**. Reading top to bottom:

```
Revenue (sales)                           the value of everything you sold
  minus  Cost of Goods Sold (COGS)        the direct cost of making those goods
= Gross Profit                            what is left to run the business
  minus  Operating Expenses (SG&A, R&D)   salaries, marketing, rent, research
= Operating Profit (EBIT)                 profit from core operations
  minus  Interest                         the cost of borrowed money
= Pre-tax Profit                          profit before the tax authority
  minus  Tax                              corporation tax
= Net Income (net profit)                 the bottom line, what owners keep
```

Three terms you will use constantly:

- **EBIT** means Earnings Before Interest and Tax. It is the profit the operating business produces, before we account for how it is financed (interest) or taxed. It is the purest measure of operating performance, which is why valuation leans on it heavily.
- **EBITDA** means Earnings Before Interest, Tax, Depreciation, and Amortisation. You take EBIT and add back depreciation and amortisation (explained in 2.8). EBITDA is a rough proxy for operating cash generation. Professionals love it; sceptics warn that it ignores the real cost of wearing out equipment. Both views are correct, which is why we will use it carefully.
- **Margins.** A margin is a profit line divided by revenue. Gross margin equals gross profit divided by revenue. Operating margin equals EBIT divided by revenue. Net margin equals net income divided by revenue. Margins let you compare a small company with a giant, because they are percentages.

## 2.4 The balance sheet and the one equation that rules it

The balance sheet rests on a single equation, and once you truly understand it, the whole statement becomes obvious:

> **Assets = Liabilities + Equity**

Read it as a plain English sentence: **everything the business owns (assets) was paid for with money from one of two sources, either money it borrowed (liabilities) or money the owners put in or left in (equity).**

That is the whole idea. The left side lists what the company controls. The right side lists who has a claim on it. It balances by construction, because every pound of assets had to be financed by somebody, and that somebody is either a lender or an owner.

**Assets** (what the company owns), split by how quickly they turn into cash:

- *Current assets*: cash, accounts receivable (money customers owe you), inventory (unsold goods). These are expected to become cash within a year.
- *Non-current assets*: property, plant and equipment (PP&E, the factories and machines), and intangibles such as patents, software, and goodwill. These are held for the long term.

**Liabilities** (what the company owes):

- *Current liabilities*: accounts payable (money you owe suppliers), short term debt. Due within a year.
- *Non-current liabilities*: long term debt, such as bonds and bank loans.

**Equity** (the owners' stake):

- *Share capital*: money raised by issuing shares.
- *Retained earnings*: all the profit the company has ever made and chosen to keep rather than pay out. This line is the bridge to the income statement, as you will see in 2.6.

A useful instinct: a lender's claim ranks ahead of an owner's claim. If the company is wound up, lenders are paid first, and owners receive whatever is left. This ranking is why, later, we will subtract debt to get to the value that belongs to shareholders.

## 2.5 The cash flow statement: profit is an opinion, cash is a fact

Here is a fact that surprises every beginner: **a profitable company can run out of cash, and a cash rich company can report a loss.** Profit and cash are not the same thing. The cash flow statement exists to track cash specifically, because cash is what pays the bills and what investors ultimately receive.

The statement has three sections:

- **Cash from Operating Activities (CFO)**: cash generated by running the business day to day.
- **Cash from Investing Activities (CFI)**: cash spent on or received from long term assets, most importantly capital expenditure (buying machines, building factories).
- **Cash from Financing Activities (CFF)**: cash from raising or repaying debt, issuing shares, or paying dividends.

The operating section usually starts from net income and then adjusts it back into actual cash by reversing the accounting effects that did not involve cash. The two big adjustments:

1. **Add back depreciation.** Depreciation reduced profit on the income statement, but no cash actually left the building (the cash left years ago when the asset was bought). So we add it back.
2. **Adjust for changes in working capital.** If customers owe you more than before, you earned revenue but have not collected the cash yet, so you subtract that increase. We will make this concrete next.

## 2.6 How the three statements connect (the single most important idea in accounting)

This is the concept that separates people who "know the statements" from people who actually understand them. The three statements are not independent. They are three views of one reality, and they are stitched together by specific links:

1. **Net income** (bottom of the income statement) flows into two places: it is the starting line of the cash flow statement, and it increases **retained earnings** on the balance sheet.
2. **Depreciation** reduces profit on the income statement, reduces the value of assets on the balance sheet, and is added back on the cash flow statement (because it used no cash).
3. The **ending cash** calculated on the cash flow statement becomes the **cash** line on the balance sheet.

Picture it as a circuit. The income statement measures performance over the year. That performance feeds the balance sheet (through retained earnings) and the cash flow statement (through net income). The cash flow statement then resolves how much actual cash the company holds, which lands back on the balance sheet. Because of these links, the balance sheet balances. The double entry trick from 1494 is what guarantees it.

If you remember only one thing from this part, remember that these three statements lock together. When you later build a DCF, you are essentially forecasting this circuit into the future.

## 2.7 Accrual versus cash: a worked micro example

The reason profit and cash differ is **accrual accounting**, the rule that you record revenue when it is *earned* and costs when they are *incurred*, not when the cash actually moves. This gives a truer picture of performance in a period, but it pulls profit and cash apart in time.

Consider a small consultancy:

- In **December**, it completes a project and sends the client an invoice for £100,000. The work is done, so under accrual rules the £100,000 counts as December revenue. But the client pays in **February**.
- In **January**, it pays £30,000 to a subcontractor who worked on the project.

Look at December under each lens:

| | Accrual view (income statement) | Cash view (bank account) |
|---|---|---|
| December revenue | £100,000 (earned) | £0 (not yet paid) |
| December profit | high | the bank balance did not move |

In December the consultancy looks very profitable, yet not a single pound has arrived. The cash shows up in February. This gap, between earning and collecting, is exactly what the cash flow statement and the working capital adjustment exist to capture. A growing business often shows healthy profit while its bank balance is tight, precisely because of this timing.

## 2.8 The two ideas that trip everyone up: depreciation and working capital

**Depreciation** is how accounting spreads the cost of a long lived asset across the years it is used, instead of recording the whole cost in the year of purchase.

Suppose Northwind buys a machine for £100,000 that will last ten years. It would be misleading to record a £100,000 cost in year one and nothing afterwards, because the machine helps produce goods for a decade. So accounting records a £10,000 cost each year for ten years. That annual £10,000 is **depreciation**. (The same idea applied to intangible assets such as patents is called **amortisation**.)

The crucial point for valuation: depreciation is a **non-cash expense**. It lowers reported profit, but in the year it is charged, no cash leaves the company (the cash left back when the machine was bought). This is why the cash flow statement adds it back, and why valuation treats it carefully.

**Working capital** is the cash tied up in the everyday operating cycle of the business. The working definition:

> Net Working Capital = Accounts Receivable + Inventory − Accounts Payable

Think of it as **cash caught in the pipes**. To make a sale you often must first buy and hold inventory (cash goes out), then let the customer pay you 30 or 60 days later through receivables (cash comes in late). Suppliers extend you the same courtesy through payables (which delays your cash going out, helping you). The net of these is working capital.

Why it matters for valuation: when a company **grows**, it usually has to fund more inventory and more receivables before collecting, so growth **consumes cash**. An **increase** in net working capital is therefore a real outflow of cash, and we will subtract it when we calculate free cash flow. This is one of the most commonly missed cash effects, so flag it in your memory now.

## 2.9 Meet Northwind Manufacturing, our case company

Here are the most recent year (call it Year 0) figures for Northwind, the company we will value. The numbers are deliberately clean so the arithmetic stays followable. All figures are in millions of pounds unless stated.

**Income statement summary (Year 0):**

| Line | Value (£m) | Note |
|---|---|---|
| Revenue | 500 | |
| EBIT (operating profit) | 75 | a 15% operating margin |
| Interest | 9 | 5% on £180m of debt |
| Pre-tax profit | 66 | |
| Tax (at 25%) | 16.5 | |
| **Net income** | **49.5** | |

**Other key facts (Year 0):**

| Item | Value (£m) |
|---|---|
| Depreciation and amortisation (D&A) | 30 |
| Capital expenditure (capex) | 40 |
| Increase in net working capital | 10 |
| Total debt | 180 |
| Cash | 30 |
| Net debt (debt minus cash) | 150 |
| Shares outstanding (millions) | 100 |
| Tax rate | 25% |

From these we can already read Northwind's story: a solid, profitable manufacturer earning a 15% operating margin, carrying a moderate amount of debt, reinvesting heavily (capex of £40m exceeds depreciation of £30m, which tells us it is still growing its asset base rather than just maintaining it). We will value it in Part 4. First, we need the engine that powers all intrinsic valuation: the time value of money.

---

# Part 3: The time value of money, the engine

Every DCF runs on one idea: money has a time value. This part builds that idea and the small set of formulas that flow from it. These formulas are the machinery; the rest of valuation is judgement about what to feed into them.

## 3.1 The core intuition, and its history

> **A pound today is worth more than a pound a year from now.**

Why? Three reasons, and they map exactly onto the three parts of our one sentence from Part 1:

1. **Opportunity cost.** A pound today can be invested to earn a return, so it grows. A pound next year has missed that chance.
2. **Inflation.** Prices tend to rise, so a future pound buys less than a present pound.
3. **Uncertainty.** A pound promised next year might not arrive. The promise carries risk.

The mathematics of this is old. Fibonacci's *Liber Abaci* of 1202 already contained calculations comparing sums of money available at different dates. The idea was formalised into a complete economic theory by Irving Fisher in *The Theory of Interest* (1930). The mechanism that converts future money into present money is called **discounting**, and the rate we use is the **discount rate**, written as *r*. The discount rate is simply the return you require to part with your money, given the risk.

## 3.2 Future value: compounding forward

If you invest an amount today and let it earn a return each year, it grows. The formula:

```
FV = PV × (1 + r)^n
```

Where:
- **PV** is the present value (the amount today)
- **FV** is the future value (the amount later)
- **r** is the rate of return per period
- **n** is the number of periods

**Worked example.** Invest £1,000 today at 8% for 3 years:

```
FV = 1,000 × (1.08)^3 = 1,000 × 1.259712 = £1,259.71
```

The power of this is **compounding**: you earn return not only on your original money but also on the return already accumulated. In year two you earn 8% on more than £1,000, because the first year's interest is now also earning. Over long horizons this snowballs dramatically, which is why compounding is often called the most powerful force in finance.

## 3.3 Present value: discounting backward

Valuation runs the formula in reverse. We know (or estimate) a future cash flow and want to know what it is worth **today**. We simply rearrange:

```
PV = FV / (1 + r)^n
```

The term 1 / (1 + r)^n is called the **discount factor**. It is always less than one (for a positive rate), which is the mathematical expression of "future money is worth less today".

**Worked example.** What is £1,259.71, received in 3 years, worth today at 8%?

```
PV = 1,259.71 / (1.08)^3 = 1,259.71 / 1.259712 = £1,000.00
```

Notice this is the exact inverse of 3.2. Discounting and compounding are the same operation seen from opposite ends. Compounding pushes money into the future; discounting pulls it back to the present.

The higher the discount rate, the more harshly future cash is reduced. This is intuitive: if you demand a high return (because the cash is risky or far away), then a distant promise is worth little to you today. **Risk enters valuation through the discount rate.** A riskier company has a higher *r*, which lowers the present value of its future cash. Keep this connection in mind; it is how risk gets priced.

## 3.4 Discounting a stream of cash flows

A real asset does not pay once; it pays a stream of cash over many years. To value the whole stream, you discount each year's cash flow back to today and add them up:

```
PV = CF_1/(1+r)^1 + CF_2/(1+r)^2 + CF_3/(1+r)^3 + ... + CF_n/(1+r)^n
```

Where CF_t is the cash flow in year *t*. That is the entire DCF formula. Everything still to come (free cash flow, terminal value, the cost of capital) is just careful work on what the CF values are, how long the stream runs, and what *r* should be.

**Worked example.** A small project pays £100 at the end of year 1, £200 at the end of year 2, and £300 at the end of year 3. The discount rate is 10%.

| Year | Cash flow (£) | Discount factor at 10% | Present value (£) |
|---|---|---|---|
| 1 | 100 | 1/1.10 = 0.9091 | 90.91 |
| 2 | 200 | 1/1.21 = 0.8264 | 165.29 |
| 3 | 300 | 1/1.331 = 0.7513 | 225.39 |
| | | **Total PV** | **481.59** |

So that future stream is worth £481.59 today. A rational buyer would pay no more than that (and would want to pay less, to earn a profit). You have just performed a complete, if tiny, discounted cash flow valuation.

## 3.5 Perpetuities and the Gordon growth model

A **perpetuity** is a stream that pays a fixed amount forever. It sounds exotic, but it is the key to valuing a company, because a healthy business is expected to generate cash indefinitely. Remarkably, an infinite stream has a finite value, because distant cash flows discount almost to nothing. The formula is beautifully simple:

```
PV of a perpetuity = CF / r
```

**Intuition for why.** Ask: how much must I deposit at interest rate *r* so I can withdraw CF every year forever without ever touching the principal? If I deposit CF / r, then each year it earns r × (CF / r) = CF, exactly the amount I withdraw, leaving the principal intact. So CF / r is what the perpetuity is worth.

**Worked example.** A perpetuity paying £50 per year, discounted at 10%:

```
PV = 50 / 0.10 = £500
```

Most businesses do not pay a flat amount forever; they grow. The **growing perpetuity**, where the cash flow grows at a constant rate *g* each year forever, is given by the **Gordon growth model** (named after Myron Gordon, who popularised it in the late 1950s):

```
PV = CF_1 / (r − g)
```

Where CF_1 is the cash flow **one year from now** (next year's, not this year's), and *g* is the constant perpetual growth rate. The model only works when r is greater than g (otherwise the maths breaks and gives a meaningless answer, which itself carries a lesson: nothing can grow faster than its discount rate forever).

**Worked example.** A stream paying £50 next year, growing 2% forever, discounted at 10%:

```
PV = 50 / (0.10 − 0.02) = 50 / 0.08 = £625
```

Commit this formula to memory, because it is the single most important equation in the DCF. It is exactly how we will value all of Northwind's cash flows beyond the forecast horizon, a quantity called the **terminal value**. When you see terminal value in Part 4, you are seeing the Gordon growth model again.

## 3.6 Annuities (a brief, useful aside)

An **annuity** pays a fixed amount for a fixed number of periods (not forever). Mortgages, car loans, and bonds work this way. The present value formula:

```
PV of an annuity = CF × [1 − (1 + r)^(−n)] / r
```

**Worked example.** £1,000 per year for 5 years at 8%:

```
PV = 1,000 × [1 − (1.08)^(−5)] / 0.08
   = 1,000 × [1 − 0.6806] / 0.08
   = 1,000 × 3.9927
   = £3,992.71
```

You will not need annuities for the core DCF, but they appear constantly in finance (every loan repayment schedule is one), so it is worth recognising the shape.

You now own the complete engine. We can build the car.

---

# Part 4: Intrinsic valuation, the discounted cash flow (DCF)

This is the heart of the guide. We will state the philosophy, define the right measure of cash, choose the right discount rate, handle the problem of forecasting forever, and then value Northwind end to end.

## 4.1 The philosophy and its history

In 1938, an economist named **John Burr Williams** wrote a sentence that founded modern valuation. He argued that the value of a security is simply the present value of all the cash it will ever pay its owner, "no more, no less". Strip away the jargon and he is restating our one sentence from Part 1. A business is worth the cash it will hand to its owners over its entire life, discounted to today.

Four years earlier, in 1934, **Benjamin Graham and David Dodd** had published *Security Analysis*, which gave investing its discipline. They insisted that a security has an **intrinsic value** independent of its fluctuating market price, and that a careful analyst could estimate it. They also gave us the **margin of safety**: only buy when the price is comfortably below your estimate of intrinsic value, so that even if you are somewhat wrong, you are protected. Graham was Warren Buffett's teacher, and this idea runs straight through to today.

Later thinkers made the method practical. **Alfred Rappaport** (*Creating Shareholder Value*, 1986) brought free cash flow and the DCF into corporate strategy. McKinsey's *Valuation* and the NYU professor **Aswath Damodaran** turned it into the systematic professional craft it is now.

The logic of a DCF in four steps:

1. Forecast the company's **free cash flow** for an explicit period (say the next five years).
2. Estimate a **terminal value** to capture all the cash beyond that period.
3. **Discount** every one of those amounts back to today using an appropriate rate.
4. **Add them up**, then adjust from the value of the whole business to the value of one share.

## 4.2 Free cash flow: the right measure of cash

Why not just discount net income? Because net income is an accounting figure, not a cash figure. It includes non cash charges (depreciation), and it ignores two real cash demands: the capital expenditure needed to keep the business running, and the cash swallowed by growth in working capital. We want the genuine, spendable cash the business produces. That measure is **free cash flow**.

There are two versions, and the difference is simply *whose* cash it is.

**Free Cash Flow to the Firm (FCFF)** is the cash available to **everyone** who funded the business, both lenders and owners, before any financing decisions. It is the cash the operating business generates. The formula:

```
FCFF = EBIT × (1 − tax rate)
       + Depreciation and Amortisation
       − Capital Expenditure
       − Increase in Net Working Capital
```

Walking through each term, because understanding why each is here is what lets you apply this independently:

- **EBIT × (1 − tax rate).** Start from operating profit (EBIT), then remove the tax that would be due on it. The result is called **NOPAT** (Net Operating Profit After Tax). We use EBIT, not net income, because FCFF is the cash for *all* investors, so we measure profit *before* subtracting interest (interest is a payment to one group of investors, the lenders, and we do not want to remove it yet).
- **Plus D&A.** Depreciation and amortisation were subtracted to get EBIT, but they used no cash (see 2.8). So we add them back to return to a cash basis.
- **Minus capex.** Buying and replacing equipment is a genuine cash outflow that keeps the business alive and growing. It must come out.
- **Minus the increase in working capital.** Growth ties up cash in inventory and receivables (see 2.8). That cash is not available to investors, so we subtract the increase.

**Free Cash Flow to Equity (FCFE)** is the narrower measure: the cash left for **shareholders only**, after lenders have been paid. Roughly:

```
FCFE = FCFF − Interest × (1 − tax rate) + Net new borrowing
```

For most company valuations we use **FCFF**, because it is cleaner and pairs naturally with the blended cost of capital we are about to define. We will use FCFF for Northwind.

**Northwind's Year 0 free cash flow.** Let us compute it from the figures in 2.9:

| Step | Calculation | Value (£m) |
|---|---|---|
| EBIT | given | 75.00 |
| NOPAT = EBIT × (1 − 0.25) | 75 × 0.75 | 56.25 |
| Add D&A | + 30 | 86.25 |
| Subtract capex | − 40 | 46.25 |
| Subtract increase in working capital | − 10 | 36.25 |
| **FCFF (Year 0)** | | **36.25** |

So Northwind threw off £36.25m of genuinely free cash last year. This is the foundation we will forecast forward.

## 4.3 The discount rate: the weighted average cost of capital

We now need the *r* in our discounting formula. For FCFF, which belongs to both lenders and owners, the correct rate is the **Weighted Average Cost of Capital (WACC)**: the blended return required by all the providers of the company's money, weighted by how much each provides.

```
WACC = (E / V) × Re + (D / V) × Rd × (1 − tax rate)
```

Where:
- **E** is the market value of equity, **D** the market value of debt, and **V = E + D** the total
- **Re** is the cost of equity (the return shareholders require)
- **Rd** is the cost of debt (the interest rate on borrowing)
- The **(1 − tax rate)** on the debt term reflects that interest is tax deductible, which makes debt cheaper than it first appears (this tax shield idea traces to Modigliani and Miller, 1958)

Read WACC as a **hurdle rate**: the minimum return the business must earn on its operations to satisfy everyone who funded it. It is also, equivalently, the **opportunity cost** of investing in this business rather than in something of similar risk. A higher WACC means investors demand more, which discounts future cash more harshly and lowers the valuation.

**The cost of debt (Rd)** is the easy piece: roughly the interest rate the company pays on its borrowing. For Northwind, that is 5% (£9m interest on £180m of debt).

**The cost of equity (Re)** is harder, because shareholders are not promised a fixed return. The standard tool is the **Capital Asset Pricing Model (CAPM)**, developed by William Sharpe in the 1960s building on Harry Markowitz's portfolio theory:

```
Re = Rf + β × (Equity Risk Premium)
```

Where:
- **Rf** is the risk free rate (the return on safe government bonds)
- **β** (beta) measures how much the stock amplifies the market's movements; a beta of 1 moves with the market, above 1 is more volatile, below 1 is less
- the **Equity Risk Premium** is the extra return investors demand for holding risky stocks over safe bonds (historically around 4% to 6%)

The intuition is clean: start from the safe rate, then add a premium for risk, scaled by how risky this particular stock is. A volatile stock (high beta) gets a higher required return, hence a higher discount rate, hence a lower valuation. Risk lowers value, exactly as Part 1 promised.

For Northwind we will simply use a **WACC of 9%**, a realistic figure for a stable mid sized manufacturer, rather than rebuild every input. In a real exercise you would assemble it from the pieces above.

## 4.4 The two stage model and the terminal value

We cannot forecast cash flow year by year to infinity; our crystal ball is cloudy beyond a handful of years. So a DCF splits the future into two stages:

- **Stage 1, the explicit forecast.** Project free cash flow individually for a defined window, commonly 5 to 10 years. This is where you express your specific view of the company (growth, margins, investment).
- **Stage 2, the terminal value.** Capture *all* the cash flows beyond the forecast window in a single number, the **terminal value**, calculated as of the final forecast year. This handles infinity in one stroke.

Two standard methods for the terminal value:

**Method A, perpetuity growth (Gordon growth).** Assume that after the forecast period, free cash flow grows forever at a modest constant rate *g*. Then apply the Gordon growth model from 3.5:

```
Terminal Value (at year n) = FCFF_(n+1) / (WACC − g)
```

The growth rate *g* must be modest, no greater than the long run growth rate of the whole economy (think 2% to 3%), because no company can outgrow the economy forever, or it would eventually become the economy.

**Method B, exit multiple.** Assume the business is notionally sold in the final year at a market multiple, for example a certain EV/EBITDA multiple (the bridge to Part 5):

```
Terminal Value (at year n) = EBITDA_n × (assumed EV/EBITDA multiple)
```

A vital warning, which you must internalise: the terminal value typically accounts for **60% to 80%** of a DCF's total value, because it contains all the years from the forecast horizon to infinity. This means your two terminal assumptions, *g* and WACC, dominate the entire valuation. Small changes there move the answer enormously, as we will demonstrate in 4.7. Treat them with respect.

## 4.5 From enterprise value to value per share

Discounting FCFF at WACC gives the value of the **whole operating business** to **all** capital providers. This is the **Enterprise Value (EV)**. But you, as a potential shareholder, only own the equity. So we walk from enterprise value down to the value of one share:

```
Enterprise Value
  minus Net Debt (debt minus cash)
= Equity Value
  divided by Shares Outstanding
= Intrinsic Value per Share
```

Why subtract net debt? Because lenders have the first claim on the business (recall the ranking in 2.4). The enterprise value belongs to lenders and owners together; to find what belongs to owners alone, you remove what is owed to lenders. We subtract **net** debt (debt minus cash) because the company's cash could be used to pay down that debt, so only the debt net of cash is a true claim against the owners.

Then divide by the number of shares to get a per share figure you can compare directly with the market price.

## 4.6 Full worked example: valuing Northwind end to end

Now we assemble everything. Our assumptions, all stated explicitly (a good DCF always shows its assumptions):

| Assumption | Value |
|---|---|
| Starting FCFF (Year 0) | £36.25m |
| Revenue and FCFF growth, Years 1 to 5 | 6% per year |
| Terminal growth rate (g) | 2.5% |
| WACC | 9% |
| Net debt | £150m |
| Shares outstanding | 100m |

A note on method: in a full professional model you would forecast each driver separately (revenue, then margin to get EBIT, then D&A, capex, and working capital). To show that this is what is happening, here is **Year 1 built from its drivers**:

| Year 1 driver | Calculation | Value (£m) |
|---|---|---|
| Revenue | 500 × 1.06 | 530.0 |
| EBIT (15% margin) | 530 × 0.15 | 79.5 |
| NOPAT | 79.5 × 0.75 | 59.625 |
| Plus D&A (6% of revenue) | + 31.8 | 91.425 |
| Minus capex (8% of revenue) | − 42.4 | 49.025 |
| Minus increase in working capital (2% of revenue) | − 10.6 | 38.425 |
| **FCFF Year 1** | | **38.43** |

Because every component scales with revenue at constant percentages, FCFF grows at the same 6% as revenue. (Confirm it: £36.25m × 1.06 = £38.43m. It matches.) So we can roll the series forward at 6%:

| Year | FCFF (£m) | Discount factor at 9% | Present value (£m) |
|---|---|---|---|
| 1 | 38.43 | 0.9174 | 35.26 |
| 2 | 40.73 | 0.8417 | 34.28 |
| 3 | 43.17 | 0.7722 | 33.34 |
| 4 | 45.76 | 0.7084 | 32.42 |
| 5 | 48.51 | 0.6499 | 31.53 |
| | | **Sum of PV (explicit)** | **166.83** |

Now the **terminal value**, using the Gordon growth model as of the end of Year 5:

```
FCFF in Year 6 = 48.51 × 1.025 = 49.72
Terminal Value (at Year 5) = 49.72 / (0.09 − 0.025) = 49.72 / 0.065 = 764.92
```

This terminal value sits at the end of Year 5, so we discount it back five years using the Year 5 discount factor:

```
PV of Terminal Value = 764.92 × 0.6499 = 497.15
```

Assemble the enterprise value and walk down to the share price:

| Step | Value (£m) |
|---|---|
| PV of explicit free cash flows (Years 1 to 5) | 166.83 |
| PV of terminal value | 497.15 |
| **Enterprise Value** | **663.98** |
| Minus net debt | (150.00) |
| **Equity Value** | **513.98** |
| Divided by 100m shares | |
| **Intrinsic value per share** | **£5.14** |

There is the result. Northwind's intrinsic value, on these assumptions, is about **£5.14 per share**.

Two observations to carry forward. First, notice that the terminal value (£497m) is **75%** of the total enterprise value (£664m). The bulk of the company's worth lies beyond the five year forecast, which is normal, and is exactly why the terminal assumptions matter so much. Second, suppose Northwind currently trades at **£4.50** in the market. The DCF suggests it is worth £5.14, implying it is **undervalued by roughly 14%**. That gap is where an investor's interest begins.

## 4.7 Sensitivity, and the honest limits of the DCF

A DCF produces a precise looking number, and that precision is seductive and dangerous. The output is only as good as the inputs, and the inputs are forecasts. There is an old phrase for this: garbage in, garbage out. The disciplined response is to test how the answer moves when you flex the key assumptions. This is called **sensitivity analysis**, and it is not optional; it is how you tell an honest valuation from a falsely confident one.

Holding the forecast the same but flexing only the two terminal assumptions, here is what happens to Northwind's value per share:

| Scenario | WACC | Terminal growth (g) | Value per share |
|---|---|---|---|
| Conservative | 10% | 2.0% | £3.96 |
| **Base case** | **9%** | **2.5%** | **£5.14** |
| Optimistic | 8% | 3.0% | £7.01 |

Look at that range: from **£3.96 to £7.01**, nearly a doubling, produced by moving WACC by one percentage point and growth by half a point. This is the single most important practical lesson about the DCF. It is a tool for **disciplined thinking**, not a machine for producing the truth. Its real value is that it forces you to state, explicitly and in numbers, what you believe about a company's growth, profitability, reinvestment, and risk. The output should be read as a **range** that depends on a worldview, never as a single fact.

This is also precisely why we need a second, independent method to cross check the answer. We turn to it now.

---

# Part 5: Relative valuation, multiples

The DCF builds value from the ground up, from a company's own cash flows. Relative valuation does something completely different: it prices a company by **comparison** to others. It is faster, it is anchored to real market prices, and it is the most widely used method in practice. It is also where we will discover that the two roads were secretly one all along.

## 5.1 The philosophy and its history

The idea is the one from the house analogy in Part 1. You may not be able to compute a property's intrinsic worth from first principles, but you can observe what similar properties just sold for and reason from there. Applied to companies: find businesses similar to your target, see what the market is paying for each pound of their earnings (or sales, or assets), and apply that same rate to your target.

Multiples are as old as markets, but the modern earnings based approach owes much to **Benjamin Graham**, who in the mid twentieth century popularised the **price to earnings ratio** as a quick gauge of how richly a stock is valued. The "method of comparable companies" became the standard workhorse of investment banking, used in everything from listing a company to negotiating a takeover, precisely because it is quick and grounded in observable prices.

## 5.2 The main multiples, and the one rule that prevents errors

A **multiple** is a ratio: a measure of value (in the numerator) divided by a measure of performance (in the denominator). The common ones:

| Multiple | Formula | Reads as | Best used for |
|---|---|---|---|
| **P/E** (price to earnings) | Price per share / Earnings per share, or Market Cap / Net Income | Pounds paid per pound of annual profit | Profitable, stable companies |
| **EV/EBITDA** | Enterprise Value / EBITDA | Enterprise value per pound of operating cash proxy | Comparing firms with different debt levels (the professional default) |
| **EV/Sales** | Enterprise Value / Revenue | Enterprise value per pound of sales | Early stage or loss making firms with no profit yet |
| **P/B** (price to book) | Market Cap / Book Equity | Price per pound of accounting net worth | Banks and asset heavy businesses |
| **PEG** | P/E / earnings growth rate | P/E adjusted for growth | Comparing growth companies fairly |

**The one rule you must never break: keep the numerator and denominator consistent.** Equity measures pair with equity measures; whole company measures pair with whole company measures.

- **Equity multiples** put **equity value** on top (such as price or market capitalisation) and must use an **after interest** performance measure on the bottom (such as net income or earnings per share), because those profits belong to shareholders only. P/E and P/B are equity multiples.
- **Enterprise multiples** put **enterprise value** on top and must use a **before interest** performance measure on the bottom (such as EBIT, EBITDA, or revenue), because enterprise value belongs to lenders and owners together. EV/EBITDA and EV/Sales are enterprise multiples.

Mixing them, for example dividing enterprise value by net income, is a common beginner error that produces a meaningless number. If you remember the claim ranking from Part 2 (lenders before owners), the consistency rule follows naturally: match the value measure to the group of investors whose profit you are dividing by.

Why professionals favour **EV/EBITDA** over **P/E**: it is neutral to how a company is financed. Two identical businesses, one with lots of debt and one with none, will have very different P/E ratios (because interest distorts net income) but similar EV/EBITDA ratios (because both EV and EBITDA sit above the financing line). That makes EV/EBITDA better for comparing companies with different capital structures.

## 5.3 Every multiple is a compressed DCF (the bridge)

Here is the idea that unifies the whole guide, and it is genuinely elegant. A multiple is not an arbitrary number plucked from the market. **It is a discounted cash flow, compressed into a single ratio.** A high multiple is the market's way of saying a company has strong growth, low risk, or high cash conversion. A low multiple says the opposite. The multiple *encodes the same drivers as a DCF*.

We can prove it from the Gordon growth model. Start with the value of a share as a growing perpetuity of dividends (which is just a DCF):

```
Price = Dividend_next year / (Re − g)
```

Now divide both sides by earnings per share, and use the fact that the dividend equals earnings times the payout ratio:

```
Price / Earnings = Payout ratio / (Re − g)
```

So the **justified price to earnings ratio** depends on exactly three fundamentals: how much profit the company pays out, the return investors require (Re, which is risk), and the growth rate g. Plug in numbers: a company paying out 50% of earnings, with a cost of equity of 9% and growth of 3%, deserves:

```
Justified P/E = 0.50 / (0.09 − 0.03) = 0.50 / 0.06 = 8.3 times
```

This is the bridge between Part 4 and Part 5. When you see a company trading at 25 times earnings and another at 8 times, the difference is not random; it reflects differences in their growth, risk, and cash payout, the very same things a DCF discounts. Multiples and DCFs are two languages describing one underlying reality. Once you see this, you can use each to sanity check the other, which is exactly what we will do.

## 5.4 Building a comparable set: the practical method

The whole approach lives or dies on the quality of your comparison group. The steps:

1. **Select genuine comparables.** Companies in the same industry, of similar size, growth, profitability, and risk, ideally in the same geography. The closer the match, the more reliable the result. Poorly chosen "comparables" are the main way this method goes wrong.
2. **Compute the chosen multiple for each peer** from market data.
3. **Take a central value, and prefer the median over the mean.** The median (the middle value) is more robust because it is not dragged around by a single extreme outlier the way an average is.
4. **Apply that multiple to your target's matching metric** to get an implied value.
5. **Adjust for differences.** If your target grows faster or earns higher margins than the peer group, it deserves a premium above the median multiple, and vice versa. This judgement step is where skill shows.

## 5.5 Worked example: valuing Northwind with multiples

We now value Northwind a second time, using EV/EBITDA, so we can compare against the £5.14 from our DCF. Suppose we identify five comparable manufacturers and observe their EV/EBITDA multiples:

| Peer | EV/EBITDA |
|---|---|
| Peer A | 6.0× |
| Peer B | 6.5× |
| Peer C | 7.0× |
| Peer D | 7.5× |
| Peer E | 8.0× |
| **Median** | **7.0×** |

Recall Northwind's EBITDA in Year 0 is EBIT (£75m) plus D&A (£30m), which equals **£105m**. Apply the peer median multiple:

| Step | Calculation | Value (£m) |
|---|---|---|
| Implied Enterprise Value | 7.0 × 105 | 735.0 |
| Minus net debt | − 150 | 585.0 |
| **Equity Value** | | **585.0** |
| Divided by 100m shares | | |
| **Value per share** | | **£5.85** |

So the multiples method values Northwind at about **£5.85 per share**.

A quick cross check with **P/E**, just to see consistency. Northwind's net income is £49.5m, so earnings per share is £0.495. If the sector trades at a median P/E of about 12×, the implied price is 12 × £0.495, which is about **£5.94 per share**, comfortably in the same neighbourhood as the EV/EBITDA result. When two different multiples agree, you can hold the result with more confidence.

## 5.6 The pitfalls of multiples

Relative valuation is fast and intuitive, but it carries specific risks you must guard against:

- **It assumes the peers are correctly priced.** If the entire sector is in a bubble, every peer multiple is inflated, and your "comparison" will value your target at bubble prices too. Relative valuation tells you what a company is worth *relative to others*, not whether the whole group is sensibly priced. This is its deepest limitation, and the reason a DCF cross check matters.
- **Comparability is never perfect.** No two companies are identical in growth, margins, or risk, so every comparison requires the judgement adjustments in step 5.
- **Accounting differences distort the denominators.** Different depreciation policies, one off gains or charges, and different accounting standards can make reported earnings or EBITDA not truly comparable across companies. Clean the figures before comparing.
- **Backward looking metrics miss the future.** A multiple on last year's earnings says nothing about a company whose prospects are changing. This is why forward (next year's expected) multiples are often preferred.

---

# Part 6: Bringing it together

You have now valued Northwind two independent ways. The final part is about judgement: how to combine the methods, how to protect yourself from being wrong, and how to actually do this on a real company.

## 6.1 Triangulation: reading the two answers together

Lay the results side by side:

| Method | Value per share |
|---|---|
| Current market price | £4.50 |
| Intrinsic (DCF) | £5.14 |
| Relative (EV/EBITDA comparables) | £5.85 |
| Relative (P/E cross check) | £5.94 |

This is **triangulation**, and it is how professionals actually work. No single method is treated as the truth. Instead you ask what the spread of estimates tells you. Here, both independent methods land in a range of roughly **£5.14 to £5.94**, and both sit **above** the current market price of £4.50. The two roads, built from completely different inputs, agree that Northwind looks undervalued. That agreement is far more persuasive than either number alone would be.

When the methods **disagree** sharply, that is not a failure; it is a signal worth investigating. If your DCF says a company is worth far more than its peers' multiples imply, either you are more optimistic about its specific future than the market is (and you should be able to say exactly why), or your forecast is too rosy. The disagreement points you to the precise question you need to answer.

## 6.2 Margin of safety

Recall Graham and Dodd's principle from 1934. Your valuation is an estimate built on uncertain assumptions, so you should never pay your full estimate of value. The **margin of safety** is the cushion between the price you pay and the value you estimate, and it protects you when (not if) some of your assumptions turn out wrong.

For Northwind, the price is £4.50 and the triangulated value is roughly £5.14 to £5.94. The gap, very roughly 15% to 25%, is the margin of safety. A disciplined investor buys when that cushion is comfortably wide and passes when the price approaches or exceeds the estimate of value, no matter how attractive the company seems. The cushion, not the forecast, is what keeps you safe.

## 6.3 The valuer's mindset

A few principles that separate someone who can operate a valuation model from someone who genuinely understands valuation:

- **A valuation is a model, not a fact.** Its output is exactly as reliable as its inputs, and the inputs are judgements. Aswath Damodaran frames a valuation as a bridge between **story and numbers**: a good valuation tells a coherent story about a business *and* expresses that story in disciplined figures, with each side checking the other. A spreadsheet without a story is false precision; a story without numbers is just opinion.
- **Show your assumptions, always.** The discipline of stating, in numbers, what you believe about growth, margins, reinvestment, and risk is itself most of the value of the exercise. It converts a vague feeling that a company is "good" into a testable claim.
- **Present ranges, not points.** As the sensitivity table in 4.7 showed, the honest output of a valuation is a range. Anyone who quotes a target value to the penny with full confidence has misunderstood the tool.
- **Be most careful where the value concentrates.** In a DCF, that means the terminal value and its two assumptions. In a multiples valuation, it means the choice of comparable companies. Spend your scrutiny where it changes the answer most.

## 6.4 A practical workflow for valuing a real company

To apply all of this independently, here is a concrete sequence you can follow on any listed company:

1. **Get the financial statements.** A listed company publishes an annual report (in the United States, the form is called a 10-K; in the United Kingdom, the Annual Report and Accounts). Inside you will find the three statements from Part 2. You can also use financial data websites that compile them.
2. **Read the story first.** Before any maths, understand what the company does, how it makes money, who its competitors are, and where it is in its life cycle (growing fast, mature, declining). This story will discipline your assumptions.
3. **Pull the inputs for free cash flow.** From the statements, find EBIT, the tax rate, depreciation and amortisation, capital expenditure, and the change in working capital. Compute FCFF as in 4.2.
4. **Set your forecast assumptions.** Decide on a revenue growth path, an operating margin, and reinvestment needs for the explicit period, each justified by the company's history and the story.
5. **Choose a discount rate.** Estimate the WACC using the pieces in 4.3, or use a sensible sector figure to start.
6. **Build the DCF.** Forecast FCFF, compute a terminal value, discount everything, and walk from enterprise value to value per share, as in 4.6.
7. **Run the sensitivity.** Flex WACC and terminal growth to produce a range, as in 4.7.
8. **Cross check with multiples.** Build a comparable set and value the company on EV/EBITDA and P/E, as in 5.5.
9. **Triangulate and conclude.** Place all the estimates beside the market price, form a view, and define the margin of safety you would require.

Do this two or three times on companies you find interesting, and the mechanics will become second nature. The judgement, the part that actually matters, deepens for the rest of your life.

## 6.5 A common pitfalls checklist

Keep this nearby when you build your first few valuations:

- Did I confuse profit with cash? (Cash is what gets discounted, not accounting profit.)
- Did I remember that an **increase** in working capital is a cash **outflow**?
- Did I keep my multiples consistent (equity value with after interest profit; enterprise value with before interest profit)?
- Is my terminal growth rate modest (no greater than long run economic growth, roughly 2% to 3%)?
- Did I notice how much of my DCF value sits in the terminal value, and stress test those assumptions?
- Are my "comparable" companies genuinely comparable in growth, margins, and risk?
- Did I present a range rather than a single false point estimate?
- Did I build in a margin of safety between price and value before concluding anything?

---

# Part 7: Glossary

**Accrual accounting** Recording revenue when earned and costs when incurred, regardless of when cash moves.

**Amortisation** Spreading the cost of an intangible asset (such as a patent) over its useful life. The intangible cousin of depreciation.

**Beta (β)** A measure of how much a stock's returns move relative to the overall market.

**Capital expenditure (capex)** Cash spent buying or upgrading long term physical assets such as machinery and buildings.

**CAPM (Capital Asset Pricing Model)** A model for the cost of equity: the risk free rate plus beta times the equity risk premium.

**Cost of capital** The return required by those who fund a company. See WACC, cost of equity, cost of debt.

**Depreciation** Spreading the cost of a long lived physical asset over the years it is used. A non cash expense.

**Discount rate (r)** The rate used to convert future cash into present value. Reflects the required return, given risk.

**EBIT** Earnings Before Interest and Tax. Operating profit.

**EBITDA** Earnings Before Interest, Tax, Depreciation, and Amortisation. A rough proxy for operating cash generation.

**Enterprise Value (EV)** The value of the whole operating business, to both lenders and owners. Equals equity value plus net debt.

**Equity Value** The value belonging to shareholders. Equals enterprise value minus net debt.

**Free Cash Flow to the Firm (FCFF)** Cash generated by operations available to all investors, before financing.

**Free Cash Flow to Equity (FCFE)** Cash available to shareholders after lenders are paid.

**Gordon growth model** Values a cash flow growing forever at constant rate g: CF_next / (r − g).

**Intrinsic value** A company's value derived from its own fundamentals, independent of its market price.

**Margin of safety** The cushion between the price paid and the estimated value, protecting against error.

**Multiple** A ratio of value to a performance measure, such as price to earnings, used in relative valuation.

**Net debt** Total debt minus cash.

**NOPAT** Net Operating Profit After Tax. EBIT times (1 minus the tax rate).

**Perpetuity** A stream of cash that pays forever. Present value equals CF divided by r.

**Present value (PV)** The value today of cash to be received in the future.

**Terminal value** The value, as of the final forecast year, of all cash flows beyond the explicit forecast period.

**Time value of money** The principle that money available today is worth more than the same amount in the future.

**WACC (Weighted Average Cost of Capital)** The blended required return of all a company's investors, used to discount FCFF.

**Working capital** Cash tied up in day to day operations: receivables plus inventory minus payables.

---

# Part 8: Where to go next

You now have the complete conceptual and practical foundation. To deepen it, three directions, with classic and modern sources you can pursue (read them; this guide deliberately gives you the ideas in its own words so you can then go to the originals):

**For the discipline and mindset of intrinsic value**
- *The Intelligent Investor* by Benjamin Graham, the accessible distillation of the margin of safety philosophy.
- *Security Analysis* by Graham and Dodd, the rigorous original from 1934.

**For the modern professional craft of valuation**
- The freely available teaching materials, lecture videos, and spreadsheets of Professor Aswath Damodaran of NYU Stern, widely regarded as the most generous and complete resource in the field.
- *Valuation: Measuring and Managing the Value of Companies* by McKinsey's Tim Koller and co authors, the standard practitioner reference.

**For the intellectual history**
- *The Theory of Investment Value* by John Burr Williams (1938), the founding text of the DCF, for those who enjoy reading primary sources.
- *Capital Ideas* by Peter Bernstein, a readable history of how modern finance theory (including CAPM and the discount rate) was built.

**And then, the only thing that truly teaches you**

Pick a company you find genuinely interesting. Download its annual report. Work through the nine step workflow in section 6.4. Build the DCF, run the sensitivity, gather the comparables, triangulate, and write down a one paragraph conclusion about whether it is cheap or expensive and why. Then do it again with another company. The formulas in this guide will carry you the first mile; the judgement that makes a valuer is built one company at a time.

---

*End of guide.*
