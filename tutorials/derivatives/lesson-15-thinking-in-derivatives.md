# Lesson 15: Thinking in Derivatives

*The practical closer: ten mental models that carry you through most derivatives headlines, ten mistakes that account for most beginners' losses, a decoder for the news, what to read and follow, and a routine for staying current.*

---

## From knowing to reading

You now know how derivatives work, how they are priced, who uses them and how they fail. The last step is to make that knowledge quick: to read a headline about a "record options frenzy", a "derivatives loss" or "markets pricing two rate cuts" and know, within a minute, what question to ask.

This lesson compresses the guide into tools you can carry around: ten mental models, ten mistakes, a headline decoder, and a short routine. None of it requires a terminal or a trading account.

---

## Ten mental models

<svg viewBox="0 0 680 400" width="100%" role="img" aria-label="Ten cards, one per mental model: 1. Follow the risk: Who holds it now, and can they afford it?; 2. Notional is not money: Ask for market value and net exposure; 3. Decompose before you judge: Forwards, futures, options and swaps; 4. Options are insurance: Who is the insurer, at what premium?; 5. Volatility is a price: Implied is what you pay; realised is what you get; 6. Cash before correctness: Right later is wrong if the cash runs out now; 7. Liquidity is fair-weather: Assume no exit at the screen price in a crisis; 8. Certainty has a price: A premium, or the upside you give away; 9. Hedging can move markets: 1987, 2018 and every gamma squeeze; 10. Respect the base rate: Most retail traders lose; assume you are average." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Ten mental models for reading any derivatives story</text>
<rect x="20" y="48" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="48" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="71" font-size="12.5" fill="currentColor" font-weight="600">1. Follow the risk</text>
<text x="36" y="91" font-size="10.5" fill="currentColor" opacity="0.8">Who holds it now, and can they afford it?</text>
<rect x="344" y="48" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="344" y="48" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="360" y="71" font-size="12.5" fill="currentColor" font-weight="600">2. Notional is not money</text>
<text x="360" y="91" font-size="10.5" fill="currentColor" opacity="0.8">Ask for market value and net exposure</text>
<rect x="20" y="118" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="118" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="141" font-size="12.5" fill="currentColor" font-weight="600">3. Decompose before you judge</text>
<text x="36" y="161" font-size="10.5" fill="currentColor" opacity="0.8">Forwards, futures, options and swaps</text>
<rect x="344" y="118" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="344" y="118" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="360" y="141" font-size="12.5" fill="currentColor" font-weight="600">4. Options are insurance</text>
<text x="360" y="161" font-size="10.5" fill="currentColor" opacity="0.8">Who is the insurer, at what premium?</text>
<rect x="20" y="188" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="188" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="211" font-size="12.5" fill="currentColor" font-weight="600">5. Volatility is a price</text>
<text x="36" y="231" font-size="10.5" fill="currentColor" opacity="0.8">Implied is what you pay; realised is what you get</text>
<rect x="344" y="188" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="344" y="188" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="360" y="211" font-size="12.5" fill="currentColor" font-weight="600">6. Cash before correctness</text>
<text x="360" y="231" font-size="10.5" fill="currentColor" opacity="0.8">Right later is wrong if the cash runs out now</text>
<rect x="20" y="258" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="258" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="281" font-size="12.5" fill="currentColor" font-weight="600">7. Liquidity is fair-weather</text>
<text x="36" y="301" font-size="10.5" fill="currentColor" opacity="0.8">Assume no exit at the screen price in a crisis</text>
<rect x="344" y="258" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="344" y="258" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="360" y="281" font-size="12.5" fill="currentColor" font-weight="600">8. Certainty has a price</text>
<text x="360" y="301" font-size="10.5" fill="currentColor" opacity="0.8">A premium, or the upside you give away</text>
<rect x="20" y="328" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="328" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="351" font-size="12.5" fill="currentColor" font-weight="600">9. Hedging can move markets</text>
<text x="36" y="371" font-size="10.5" fill="currentColor" opacity="0.8">1987, 2018 and every gamma squeeze</text>
<rect x="344" y="328" width="316" height="62" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="344" y="328" width="4" height="62" rx="2" class="vf1" fill="#2a78d6"/>
<text x="360" y="351" font-size="12.5" fill="currentColor" font-weight="600">10. Respect the base rate</text>
<text x="360" y="371" font-size="10.5" fill="currentColor" opacity="0.8">Most retail traders lose; assume you are average</text>
</svg>

1. **Follow the risk.** After any trade, ask who now holds the risk and whether they can afford it. That one question explains 2008, Archegos and the UK pension crisis (Lessons 1 and 13).
2. **Notional is not money.** When you see a giant number, ask for market value and net exposure. The $845 trillion market puts about $3.4 trillion at risk, before collateral (Lesson 1).
3. **Decompose before you judge.** Every product is built from forwards, futures, options and swaps. Break it into those pieces and the hidden bets become visible, like the crash put inside a kick-out plan (Lesson 2).
4. **Options are insurance.** Ask who is the insurer, what premium is being paid and whether it is fair for the risk (Lesson 4).
5. **Volatility is a price.** Implied volatility is what you pay; realised volatility is what you get. Trading options is trading the gap between them (Lesson 5).
6. **Cash before correctness.** A position that is right in the end but needs cash you do not have tomorrow is a losing position (Lesson 6 and Metallgesellschaft).
7. **Liquidity is a fair-weather friend.** Assume you cannot exit at the screen price in a crisis, because everyone else will be trying to exit too (Lessons 9 and 13).
8. **Certainty has a price.** A hedge costs either a premium or the upside you give away. A hedge that seems free usually hides a risk somewhere else (Lessons 2 and 7).
9. **Hedging can move the market.** Portfolio insurance in 1987, volatility products in 2018 and dealer gamma hedging all show that protecting yourself can push prices against everyone (Lesson 9).
10. **Respect the base rate.** In the UK, CFD providers report that about half to three-quarters of retail accounts lose money; in India, SEBI finds that close to nine in ten individual traders do. Assume you are average until you have proof otherwise (Lesson 10).

---

## Ten common beginner mistakes

1. **Reading a futures price as a forecast.** It mostly reflects the cost of carrying the underlying until expiry (Lesson 3).
2. **Buying options because they are cheap.** Far out-of-the-money options are cheap because they rarely pay out.
3. **Ignoring time decay and the volatility crush.** You can be right about the direction and still lose if the move comes too late, or after the uncertainty premium drains away (Lesson 4).
4. **Treating option premium as income.** When you sell options, the premium is closer to an insurance reserve for the bad day that will eventually come (Lesson 5).
5. **Sizing on the deposit, not the exposure.** A £200 CFD deposit on £1,000 of shares carries £1,000 of risk.
6. **Forgetting the costs.** Spreads, commissions, overnight financing, taxes and transaction levies compound against frequent traders (Lesson 10).
7. **Assuming a hedge is perfect.** Timing mismatches, basis differences and cash-flow gaps can make a hedge hurt (Lessons 6 and 12).
8. **Trusting stop-losses in a gap.** When a market jumps, as the Swiss franc did in 2015, a stop-loss fills at the next available price, not your chosen one.
9. **Not reading the contract.** Settlement method, expiry time, exercise style and contract size all matter, as negative oil showed (Lesson 13).
10. **Selling insurance you cannot cover.** Naked short options can lose many times the premium collected, and the losses arrive all at once.

---

## Decoding derivatives headlines

Most derivatives stories fall into a handful of types. Each has one question that unlocks it.

| The headline says | Ask | Where to look |
| --- | --- | --- |
| "Derivatives market tops $800 trillion" | What is the market value, and the exposure after netting and collateral? | BIS statistics; Lesson 1 |
| "Options trading hits a record" | How much is same-day, retail, or on one index? Who is selling? | Exchange volume reports; Lessons 9 and 10 |
| "Markets now price two rate cuts" | Which futures, which dates, and is there a risk premium in the price? | SONIA and SOFR futures; Lesson 6 |
| "The VIX jumps to 40" | Is it implied or realised volatility? What is being insured against? | Lesson 4 |
| "CDS on Bank X blow out" | What default probability does the spread imply, and who sold the protection? | The credit triangle; Lesson 7 |
| "Fund loses billions on derivatives" | Which of the six patterns: cash, counterparty, hedging flows, short volatility, model or concentration? | Lesson 9 |
| "Margin calls hit…" | Who must find cash, how fast, and what will they sell to raise it? | Lessons 8 and 13 |
| "Regulator curbs retail trading" | What exactly changed: leverage, contract size, expiries, tax? | Lessons 10 and 11 |

### Try it on a real one

In March 2026 the headline was: *"With Hormuz still shut, options market signals rising risk of $150 oil."* Run it through the tools. **Options are insurance** (model 4): traders are buying protection against a spike, so the insurers, the call sellers, demand more, which is why upside volatility is dear: the skew (Lesson 4). **Follow the risk** (model 1): the buyers are refiners, airlines and funds that are short oil if prices spike; the sellers are mostly dealers, who hedge by buying futures as prices rise, which can add to the move (model 9). **Cash before correctness** (model 6): every hedger in futures faces daily margin calls as prices swing by several dollars a day. And **the base rate** (model 10) reminds you that the market's fear of $150 is a price, not a prediction: in the event, Brent did not reach it.

---

## What to read and follow

Start with one textbook and one story, then add a few regular sources that track the data and the scandals.

### Books: understand the instruments

1. **John Hull, *Fundamentals of Futures and Options Markets*.** The gentler version of Hull's standard textbook, *Options, Futures, and Other Derivatives*, which most professionals learned from.
2. **Sheldon Natenberg, *Option Volatility and Pricing*.** The trader's classic on volatility, the Greeks and strategies, written with very little mathematics.
3. **Euan Sinclair, *Volatility Trading*.** The next step once Natenberg makes sense, focused on implied against realised volatility.

### Books: understand the people and the disasters

- **Roger Lowenstein, *When Genius Failed*.** The rise and fall of LTCM.
- **Gillian Tett, *Fool's Gold*.** How a JPMorgan team helped invent the credit default swap and how it escaped into the 2008 crisis.
- **Michael Lewis, *The Big Short*.** The investors who used CDS to bet against subprime mortgages.
- **Bethany McLean and Peter Elkind, *The Smartest Guys in the Room*.** Enron, its energy trading and its accounting.
- **Nick Leeson, *Rogue Trader*.** The Barings collapse in the words of the man who caused it.
- **Satyajit Das, *Traders, Guns and Money*.** An insider's tour of how derivatives are sold, priced and sometimes misused.
- **Peter Bernstein, *Against the Gods*.** How humans learned to measure, and trade, risk.

### Free courses and explainers

- **CME Group Education** and **Cboe's Options Institute** for futures and options basics, with interactive examples.
- **Zerodha Varsity**, free modules on futures and options written for Indian markets.
- **Kris Abdelmessih's Moontower** newsletter, which teaches options intuition through practical puzzles.

### News and data to follow

- **Matt Levine's *Money Stuff*** (Bloomberg Opinion, free newsletter): the most entertaining guide to derivatives scandals and market structure.
- **FT Alphaville** and **Risk.net** for market plumbing, banks and regulation.
- **ISDA's research** for swaps and margin data, and the **FIA's** monthly volume reports for exchange-traded markets.
- The **BIS's** half-yearly OTC derivatives statistics and the **Bank of England's** *Financial Stability Report* for the system-wide view.
- **SEBI's** F&O studies and circulars for India, and **FCA** statements for UK retail products.
- **Clarus Financial Technology's** blog for clearing house market shares and swap volumes.

---

## A routine for staying current

- **Daily, ten minutes:** skim *Money Stuff* or FT Alphaville and glance at the VIX, India VIX and Brent.
- **Weekly:** read one longer piece on a market you do not know well, such as power, credit or volatility.
- **Monthly:** check the FIA's volume report and any new SEBI or FCA announcements on derivatives.
- **Twice a year:** read the BIS OTC statistics and the Bank of England's *Financial Stability Report* alongside each other.

---

## Learn by doing, without risking money

- **Build a Black-Scholes calculator in a spreadsheet** and reproduce Lessons 3 to 5: the £3.00 premium, the £6.96 put, the Greeks and the time decay.
- **Paper-trade one option position for a month** and record each day how theta and vega change its value, before you ever use real money.
- **Pick one episode from Lessons 12 and 13 each month** and trace exactly who held the risk, where the cash came from and what broke first.

<details>
<summary>For the curious: Black-Scholes in five spreadsheet cells</summary>

Put the inputs in cells B1 to B5: share price 100, strike 105, years to expiry 0.25, interest rate 0.04 and volatility 0.232. Then:

```
B6  d1    =(LN(B1/B2)+(B4+B5^2/2)*B3)/(B5*SQRT(B3))
B7  d2    =B6-B5*SQRT(B3)
B8  call  =B1*NORM.S.DIST(B6,TRUE)-B2*EXP(-B4*B3)*NORM.S.DIST(B7,TRUE)
B9  put   =B8-B1+B2*EXP(-B4*B3)
B10 delta =NORM.S.DIST(B6,TRUE)
```

B8 should show 3.00, B9 6.96 and B10 0.39. Change B5 to 0.20 and 0.30 and the call should become 2.39 and 4.32, as in Lesson 4.

</details>

---

## Check yourself

**1. A headline says a bank has "$50 trillion of derivatives". What two questions turn that into something meaningful?**

<details>
<summary>Show the answer</summary>

**What is the market value** of those contracts (what would it cost to replace them), and **what is the exposure after netting and collateral**? Notional measures the size of what the contracts refer to, not the money at risk (Lesson 1).

</details>

**2. Which mental model does each mistake break? (a) Selling naked puts every month for the "income". (b) Reading a forward rate as the market's prediction. (c) Holding a leveraged position you are sure is right, with no spare cash.**

<details>
<summary>Show the answer</summary>

(a) **Options are insurance** and **volatility is a price**: the premium is payment for a risk that will eventually arrive. (b) **Decompose before you judge**: a forward rate breaks down into today's rate adjusted for the interest-rate gap between the two currencies (Lesson 3), so it is arithmetic, not a forecast. It is also mistake 1 on the list above. (c) **Cash before correctness**: being right later does not help if a margin call closes you out today.

</details>

**3. A friend shows you a structured product paying 9% a year as long as the FTSE 100 does not fall more than 35% over five years. Decompose it.**

<details>
<summary>Show the answer</summary>

A **bond** that repays your capital, plus a **digital or autocall payoff** that pays the 9% coupons, financed by a **put you have sold** that switches on below 65% of the starting level. The attractive coupon is largely the premium for that crash insurance, which you are providing (Lesson 2).

</details>

---

## What to carry into Lesson 16

- **Ten mental models**: follow the risk; notional is not money; decompose; options are insurance; volatility is a price; cash before correctness; liquidity is fair-weather; certainty has a price; hedging moves markets; respect the base rate.
- **Ten mistakes**, most of them about timing, cost and reading the contract.
- A **decoder**: every derivatives headline has one question that unlocks it.
- A routine and a reading list to keep the knowledge current.

Lesson 16 restates the whole guide as a sequence of pictures, for revision and for flicking through before you next read a derivatives headline.

---

## Sources

- [Reuters via BNN Bloomberg: with Hormuz still shut, options market signals rising risk of $150 oil (26 March 2026)](https://www.bnnbloomberg.ca/business/2026/03/26/with-strait-of-hormuz-still-shut-options-market-signals-rising-risk-of-us150-oil/)
- [Cboe Options Institute](https://www.cboe.com/optionsinstitute/)
- [Zerodha Varsity](https://zerodha.com/varsity/)
- [BIS: OTC derivatives statistics](https://data.bis.org/topics/OTC_DER)
