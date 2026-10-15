# Lesson 13: When the Plumbing Became the Story, 2008 to 2026

*Fifteen episodes from the financial crisis to the Hormuz shock. Since 2008 the big lessons have shifted from rogue traders towards plumbing: margin calls, clearing houses, benchmarks and the speed of modern markets.*

---

## A different kind of disaster

The disasters of Lesson 12 mostly had a villain or a genius at their centre: Leeson, Hunter, the Nobel laureates of LTCM. After 2008 the stories change shape. The protagonists are margin models, clearing houses, benchmarks, exchange-traded products and algorithms, and the damage spreads not because someone hid a position but because thousands of participants were forced to do the same thing at the same moment.

| # | Episode | Concept it isolates | What changed afterwards |
| --- | --- | --- | --- |
| 1 | AIG, Lehman and the CDS web, 2008 | Counterparty risk and opacity | G20 clearing, reporting and margin reforms |
| 2 | The Flash Crash, 2010 | Liquidity can vanish in seconds | Circuit breakers for single shares; spoofing prosecutions |
| 3 | The London Whale and LIBOR, 2012 | A hedge that grows into a bet; benchmark integrity | SONIA and SOFR |
| 4 | The Swiss franc, 2015 | Gap risk | Negative balance protection for retail traders |
| 5 | Volmageddon, 2018 | Selling volatility; products that feed the move | Short-volatility products shrank or closed |
| 6 | The dash for cash, March 2020 | Margin calls everywhere at once | Reviews of margin procyclicality; Treasury clearing |
| 7 | Negative oil, April 2020 | Physical delivery and storage | Retail access to expiring futures restricted |
| 8 | GameStop and Archegos, 2021 | Clearing margin under stress; hidden leverage | Faster settlement; scrutiny of swap disclosure |
| 9 | The LME nickel squeeze, 2022 | Exchange governance | New LME controls; an FCA fine |
| 10 | The UK pension crisis, 2022 | The margin spiral, with a central bank backstop | Bigger LDI buffers |
| 11 | Silicon Valley Bank, 2023 | The hedge you did not buy | Scrutiny of banks' rate risk |
| 12 | India's options frenzy, 2024 to 2026 | Retail speculation; regulation by product design | Lessons 10 and 11 |
| 13 | Tariff turmoil, April 2025 | When the usual hedges stop working together | Scrutiny of the basis trade |
| 14 | The crypto liquidation cascade, October 2025 | Leverage at machine speed | Questions about auto-deleveraging |
| 15 | The Hormuz shock, 2026 | The feared tail can be a spike | Still unfolding |

---

## 1. 2008: AIG, Lehman and the CDS web

**Concepts:** counterparty risk, opacity, too interconnected to fail

Credit default swaps had grown from a niche product into a giant in three years.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Line chart of credit default swaps outstanding worldwide, from BIS data. Notional amounts grew from $6.4 trillion at the end of 2004 to a peak of $61.2 trillion at the end of 2007, then shrank as offsetting trades were torn up and the market moved into clearing, to $11.0 trillion at the end of 2025." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The CDS web: from $6 trillion to $61 trillion in three years, and back</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Credit default swaps outstanding, notional, US$ trillions, 2004 to 2025</text>
<line x1="70" y1="250" x2="620" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="254" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="70" y1="198.6" x2="620" y2="198.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="202.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$20</text>
<line x1="70" y1="147.1" x2="620" y2="147.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="151.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$40</text>
<line x1="70" y1="95.7" x2="620" y2="95.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="99.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$60</text>
<polygon points="82.8,250 82.8,233.6 95.6,223.7 108.4,214.2 121.2,197.7 134,176.3 146.7,133.8 159.5,92.5 172.3,93.5 185.1,134.4 197.9,149.4 210.7,158 223.5,170.1 236.3,171 249.1,164.2 261.9,175.4 274.7,179.8 287.4,184.5 300.2,187.1 313,195.6 325.8,199.6 338.6,207.6 351.4,212.2 364.2,218.2 377,219.5 389.8,224.5 402.6,225 415.3,225.9 428.1,228.5 440.9,229.1 453.7,229.9 466.5,230.5 479.3,227.3 492.1,228.5 504.9,227.3 517.7,227.4 530.5,226 543.3,225 556,224.5 568.8,228 581.6,226.8 594.4,226.7 607.2,221.6 620,221.7 620,250" class="vf5" fill="#e87ba4" fill-opacity="0.1"/>
<polyline points="82.8,233.6 95.6,223.7 108.4,214.2 121.2,197.7 134,176.3 146.7,133.8 159.5,92.5 172.3,93.5 185.1,134.4 197.9,149.4 210.7,158 223.5,170.1 236.3,171 249.1,164.2 261.9,175.4 274.7,179.8 287.4,184.5 300.2,187.1 313,195.6 325.8,199.6 338.6,207.6 351.4,212.2 364.2,218.2 377,219.5 389.8,224.5 402.6,225 415.3,225.9 428.1,228.5 440.9,229.1 453.7,229.9 466.5,230.5 479.3,227.3 492.1,228.5 504.9,227.3 517.7,227.4 530.5,226 543.3,225 556,224.5 568.8,228 581.6,226.8 594.4,226.7 607.2,221.6 620,221.7" class="vs5" stroke="#e87ba4" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="159.5" cy="92.5" r="4.5" class="vf5 vring" fill="#e87ba4" stroke="#ffffff" stroke-width="2"><title>Peak: $61.2 trillion, end-2007</title></circle>
<text x="169.5" y="110.5" font-size="11" fill="currentColor" font-weight="600">$61tn, end-2007</text>
<circle cx="620" cy="221.7" r="4.5" class="vf5 vring" fill="#e87ba4" stroke="#ffffff" stroke-width="2"><title>End-2025: $11.0 trillion</title></circle>
<text x="614" y="211.7" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">$11tn</text>
<text x="82.8" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2005</text>
<text x="210.7" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2010</text>
<text x="338.6" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2015</text>
<text x="466.5" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2020</text>
<text x="594.4" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.6">Source: BIS OTC derivatives statistics.</text>
</svg>

When **Lehman Brothers** filed for bankruptcy on 15 September 2008, its counterparties scrambled to replace some 930,000 derivative contracts. The same week, **AIG**, which had sold protection on hundreds of billions of dollars of mortgage securities through a small unit in London, faced collateral calls it could not meet after its credit rating was cut. Because AIG's failure would have left its counterparties suddenly unprotected, the US government stepped in; its commitments eventually reached about **$182 billion**, all later repaid. Earlier that year, **Société Générale** had revealed **€4.9 billion** of losses from one trader's hidden futures positions, a reminder that the old patterns had not gone away.

Nobody could see who owed what to whom, so everyone assumed the worst about everyone. That opacity, as much as the losses, froze the system.

> **The lesson:** Counterparty risk and opacity turn one failure into a panic. The G20's 2009 reforms (central clearing, trade reporting and margin for uncleared trades, Lesson 8) set out to make the next one visible and contained. Lehman's cleared swaps at LCH, unwound within its own margin, were the proof of concept.

---

## 2. 2010: The Flash Crash

**Concepts:** liquidity can vanish, electronic market structure, spoofing

On the afternoon of 6 May 2010, in an already nervous market, a fund began selling a very large number of S&P 500 E-mini futures through an algorithm that paid no attention to price. High-frequency market makers absorbed the selling at first and then, as prices fell, stepped back. The Dow fell nearly **1,000 points**, about 9%, within minutes, some shares traded for a penny and others for $100,000, and then most of the fall reversed within the hour.

Years later, a trader working from his parents' home in Hounslow, west London, **Navinder Sarao**, pleaded guilty in the US to spoofing, placing large orders he never meant to execute, which regulators said had contributed to the conditions that day.

> **The lesson:** In electronic markets, **liquidity can vanish in seconds**, because the firms that provide it are not obliged to. Exchanges introduced circuit breakers for individual shares, and regulators began prosecuting spoofing as a crime.

---

## 3. 2012: The London Whale and LIBOR

**Concepts:** a hedge that grows into a bet, benchmark integrity

JPMorgan's Chief Investment Office in London was meant to hedge the bank's credit risk. Instead it built positions in credit derivative indices so large that the trader behind them was nicknamed the **London Whale**, and other traders bet against him because his positions were moving the market. When the positions turned, the bank lost about **$6.2 billion**, and paid around a billion dollars more in fines for weak controls and misleading statements.

The same summer, **Barclays** was fined for attempting to rig **LIBOR**, the benchmark interest rate that set payments on hundreds of trillions of dollars of contracts. LIBOR was based on what banks *said* they could borrow at, not on actual trades, which made it easy to nudge. Other banks were fined in turn, and the scandal began the long road to SONIA in sterling and SOFR in dollars: rates calculated from real transactions (Lesson 11).

> **The lesson:** A hedge that grows bigger than the risk it hedges is a bet. And **benchmarks must rest on real transactions**, because a number that can be reported can be manipulated.

---

## 4. 2015: The Swiss franc shock

**Concepts:** gap risk, model risk, negative balance protection

Lesson 9 told the story: on 15 January 2015 the Swiss National Bank abandoned, without warning, the cap it had held on the franc for three years, and within minutes the euro fell from 1.20 francs to below 0.90. Stop-loss orders could not execute anywhere near their triggers. Retail traders using leveraged currency accounts ended up owing more than their deposits; the UK broker **Alpari** went into insolvency, and the US broker FXCM needed an emergency $300 million loan.

> **The lesson:** Prices can gap, and when they do, stops and models fail together. European regulators responded with **negative balance protection** for retail clients, now part of the FCA's rules (Lesson 10).

---

## 5. 2018: Volmageddon

**Concepts:** selling volatility, crowded trades, products whose hedging feeds the move

By early 2018 a popular way to make money had been to bet against volatility, through exchange-traded products that paid investors the *opposite* of the daily move in VIX futures. Calm markets made them steadily profitable, and money poured in.

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Line chart of the VIX, daily closes, January and February 2018. It closed at 9.15 early in January, near record lows, and at 17.31 on Friday 2 February. On Monday 5 February it closed at 37.32, up 116% in a day, its biggest one-day rise. Products that had paid investors for calm markets had to buy volatility at the close, and one lost more than 90% of its value overnight." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Volmageddon: the VIX more than doubled in a day</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">VIX, daily closes, January and February 2018</text>
<line x1="70" y1="240" x2="620" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="244" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="70" y1="197.5" x2="620" y2="197.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="201.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">10</text>
<line x1="70" y1="155" x2="620" y2="155" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="159" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">20</text>
<line x1="70" y1="112.5" x2="620" y2="112.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="116.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">30</text>
<line x1="70" y1="70" x2="620" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">40</text>
<polyline points="70,198.5 79.5,201.1 89,200.8 98.4,200.8 126.9,199.5 136.4,197.2 145.9,198.3 155.3,198 164.8,196.8 202.8,190.4 212.2,189.4 221.7,188.1 231.2,192.1 259.7,193.1 269.1,192.8 278.6,191.3 288.1,190.8 297.6,192.9 326,181.2 335.5,177.1 345,182.5 354.5,182.8 364,166.4 392.4,81.4 401.9,112.6 411.4,122.1 420.9,97.8 430.3,116.5 458.8,131.2 468.3,133.9 477.8,158.1 487.2,158.7 496.7,157.3 534.7,152.4 544.1,154.9 553.6,160.4 563.1,169.9 591.6,172.8 601,161 610.5,155.6 620,144.5" class="vs7" stroke="#4a3aa7" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="364" cy="166.4" r="4.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>2018-02-02: 17.31</title></circle>
<text x="372" y="184.4" font-size="11" fill="currentColor" font-weight="600">2 Feb: 17.31</text>
<circle cx="392.4" cy="81.4" r="4.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>2018-02-05: 37.32</title></circle>
<text x="400.4" y="71.4" font-size="11" fill="currentColor" font-weight="600">5 Feb: 37.32</text>
<text x="70" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2 Jan</text>
<text x="193.3" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">15 Jan</text>
<text x="354.5" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Feb</text>
<text x="487.2" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">15 Feb</text>
<text x="620" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Mar</text>
<text x="20" y="282" font-size="10.5" fill="currentColor" opacity="0.6">Source: Cboe via FRED (VIXCLS).</text>
</svg>

On **5 February 2018** the VIX more than doubled in a day. To rebalance, the inverse products had to **buy** volatility futures at the end of the day, in size, which pushed volatility higher still. The best known, a note called XIV, lost more than 90% of its value overnight and was closed down by its issuer.

> **The lesson:** Selling volatility is selling insurance (Lessons 5 and 9). And a product whose own hedging buys what is already rising becomes part of the shock it was meant to be paid for absorbing.

---

## 6. March 2020: The dash for cash

**Concepts:** margin procyclicality, the basis trade, the central bank as backstop

As Covid-19 spread, stock markets fell at a speed not seen since 1987. The VIX hit a record close of **82.69** on 16 March. And then something stranger happened: even US Treasuries, the safest and most liquid assets in the world, became hard to sell, as everyone tried to raise cash at once.

<svg viewBox="0 0 680 250" width="100%" role="img" aria-label="Bar chart of the scale of March 2020's dash for cash, in billions of US dollars: initial margin requirements at clearing houses worldwide rose by about $300 billion; variation margin calls on the busiest day, 9 March, peaked at about $140 billion; and the Federal Reserve's holdings of Treasuries rose by about $1,111 billion in the four weeks from 11 March to 8 April as it bought to restore order." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">March 2020: the dash for cash in three numbers</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">US$ billions</text>
<line x1="300" y1="56" x2="300" y2="196" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="300" y="212" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<line x1="406.7" y1="56" x2="406.7" y2="196" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="406.7" y="212" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">400</text>
<line x1="513.3" y1="56" x2="513.3" y2="196" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="513.3" y="212" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">800</text>
<line x1="620" y1="56" x2="620" y2="196" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="620" y="212" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1,200</text>
<text x="290" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Rise in initial margin at clearing houses</text>
<text x="290" y="88" font-size="10" fill="currentColor" text-anchor="end" opacity="0.6">March 2020</text>
<path d="M300,62 L377,62 Q380,62 380,65 L380,85 Q380,88 377,88 L300,88 Z" class="vf2" fill="#eb6834"><title>Rise in initial margin at clearing houses: $300bn</title></path>
<text x="388" y="79.5" font-size="12" fill="currentColor" font-weight="600">$300bn</text>
<text x="290" y="120" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Largest single day of variation margin calls</text>
<text x="290" y="134" font-size="10" fill="currentColor" text-anchor="end" opacity="0.6">9 March 2020</text>
<path d="M300,108 L334.3,108 Q337.3,108 337.3,111 L337.3,131 Q337.3,134 334.3,134 L300,134 Z" class="vf2" fill="#eb6834"><title>Largest single day of variation margin calls: $140bn</title></path>
<text x="345.3" y="125.5" font-size="12" fill="currentColor" font-weight="600">$140bn</text>
<text x="290" y="166" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Fed purchases of Treasuries in four weeks</text>
<text x="290" y="180" font-size="10" fill="currentColor" text-anchor="end" opacity="0.6">11 March to 8 April</text>
<path d="M300,154 L593.3,154 Q596.3,154 596.3,157 L596.3,177 Q596.3,180 593.3,180 L300,180 Z" class="vf1" fill="#2a78d6"><title>Fed purchases of Treasuries in four weeks: $1,111bn</title></path>
<text x="604.3" y="171.5" font-size="12" fill="currentColor" font-weight="600">$1,111bn</text>
<text x="20" y="242" font-size="10.5" fill="currentColor" opacity="0.6">Sources: BCBS-CPMI-IOSCO review of margining practices (2022); Federal Reserve H.4.1 via FRED (TREAST).</text>
</svg>

Derivatives plumbing was at the centre. Clearing houses' margin models responded to the surge in volatility by raising requirements: initial margin worldwide rose by about **$300 billion** in March, and on the busiest day, 9 March, variation margin calls reached about **$140 billion**. Hedge funds running the Treasury basis trade (Lesson 6) faced higher futures margins and nervous repo lenders and unwound, selling Treasuries into a market that could not absorb them. The Federal Reserve bought more than **$1.1 trillion** of Treasuries in four weeks to restore order.

> **The lesson:** Margin makes each trade safer and the system jumpier. When margin calls rise for everyone at once, they become the shock (Lesson 8). International regulators spent two years reviewing how margin models amplify stress, and the US mandate to clear Treasury trades owes much to that March.

---

## 7. April 2020: Negative oil

**Concepts:** physical delivery, storage, reading the contract

On **20 April 2020**, the day before it expired, the May contract for West Texas Intermediate crude oil settled at **minus $37.63** a barrel. Lockdowns had crushed demand, and storage at Cushing, Oklahoma, the delivery point for the contract, was nearly full. Anyone still holding the contract at expiry had to take delivery of oil they had nowhere to put, so they paid others to take it off their hands.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Line chart of the WTI crude oil spot price at Cushing, Oklahoma, daily, from mid-March to mid-May 2020. It fell from about $29 to $18.31 on Friday 17 April and to minus $36.98 on Monday 20 April, the day before the May futures contract expired, when the May future itself settled at minus $37.63. It was back to $8.91 the next day." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Negative oil: on 20 April 2020 you were paid to take a barrel away</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">WTI crude oil, spot price at Cushing, dollars a barrel, daily</text>
<line x1="80" y1="238.8" x2="620" y2="238.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="242.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−$40</text>
<line x1="80" y1="193.8" x2="620" y2="193.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="197.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−$20</text>
<line x1="80" y1="148.8" x2="620" y2="148.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="152.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="80" y1="103.8" x2="620" y2="103.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="107.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$20</text>
<polyline points="80,83.6 89,88.1 98,102.7 107,92.3 116,104.9 143,96.3 152,101.4 161,102.1 170,111.4 179,113.9 206,117 215,102.6 224,103.1 233,92.1 242,84.9 269,89.8 278,95.8 287,92.6 296,97.2 332,98.4 341,103.4 350,103.8 359,104.2 368,107.6 395,232 404,128.7 413,118.1 422,114.9 431,112.8 458,121.4 467,120.8 476,114.9 485,105.5 494,104.4 521,102.7 530,93.5 539,95 548,95.5 557,93.1 584,94.7 593,90.8 602,91.7 611,87.1 620,82.5" class="vs2" stroke="#eb6834" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="395" cy="232" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>20 April 2020: -36.98</title></circle>
<text x="405" y="228" font-size="11" fill="currentColor" font-weight="600">20 Apr: −$36.98 spot</text>
<text x="405" y="243" font-size="10.5" fill="currentColor" opacity="0.85">May futures settled at −$37.63</text>
<text x="80" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">16 Mar</text>
<text x="224" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Apr</text>
<text x="350" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">15 Apr</text>
<text x="494" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 May</text>
<text x="620" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">15 May</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.6">Source: EIA via FRED (DCOILWTICO). The futures settlement is from CME.</text>
</svg>

Among those caught were Chinese retail investors in a Bank of China product linked to the WTI contract, who lost their deposits and more. The [commodity guide](?slug=commodity-markets&lesson=lesson-11-the-new-fault-lines) tells the physical side of the story.

> **The lesson:** A future is a contract for delivery until the day it is not. Read the contract: its **settlement method and expiry** matter, and a price that "cannot go below zero" can, when the thing itself becomes a liability.

---

## 8. 2021: GameStop and Archegos

**Concepts:** clearing margin under stress, gamma squeezes, hidden leverage through swaps

In January 2021, retail traders coordinated online piled into **GameStop** shares and call options, squeezing hedge funds that had bet against the company. The share price rose about twentyfold in a month. Dealers who had sold the calls bought shares to hedge, adding fuel (Lesson 9), although how much remains debated. On 28 January the broker **Robinhood** restricted buying, not on a regulator's orders but because its clearing house demanded billions of dollars of extra collateral overnight to cover the surge in risky, unsettled trades.

Two months later, **Archegos**, the family office of Bill Hwang, collapsed. It had built enormous, concentrated positions in a handful of shares through total return swaps with several banks (Lesson 7), each of which saw only its own slice. When one of its shares fell sharply, Archegos could not meet margin calls, and the banks raced to sell.

<svg viewBox="0 0 680 260" width="100%" role="img" aria-label="Bar chart of banks' reported losses from the collapse of Archegos Capital Management in March 2021, in billions of US dollars: Credit Suisse 5.5, Nomura 2.85, Morgan Stanley 0.91, UBS 0.86, MUFG 0.3; about $10.4 billion in all. Banks that sold quickly, such as Goldman Sachs and Deutsche Bank, reported little or no loss." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Archegos: more than $10 billion lost by the banks that sold last</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Reported losses from Archegos Capital Management, US$ billions, 2021</text>
<line x1="160" y1="58" x2="160" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="160" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<line x1="233.3" y1="58" x2="233.3" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="233.3" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$1bn</text>
<line x1="306.7" y1="58" x2="306.7" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="306.7" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$2bn</text>
<line x1="380" y1="58" x2="380" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="380" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$3bn</text>
<line x1="453.3" y1="58" x2="453.3" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="453.3" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$4bn</text>
<line x1="526.7" y1="58" x2="526.7" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="526.7" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$5bn</text>
<line x1="600" y1="58" x2="600" y2="218" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="600" y="234" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$6bn</text>
<text x="150" y="79" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.9">Credit Suisse</text>
<path d="M160,64 L560.3,64 Q563.3,64 563.3,67 L563.3,82 Q563.3,85 560.3,85 L160,85 Z" class="vf2" fill="#eb6834"><title>Credit Suisse: $5.5bn</title></path>
<text x="571.3" y="79.5" font-size="11.5" fill="currentColor" font-weight="600">$5.5bn</text>
<text x="150" y="110" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.9">Nomura</text>
<path d="M160,95 L366,95 Q369,95 369,98 L369,113 Q369,116 366,116 L160,116 Z" class="vf2" fill="#eb6834"><title>Nomura: $2.85bn</title></path>
<text x="377" y="110.5" font-size="11.5" fill="currentColor" font-weight="600">$2.85bn</text>
<text x="150" y="141" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.9">Morgan Stanley</text>
<path d="M160,126 L223.7,126 Q226.7,126 226.7,129 L226.7,144 Q226.7,147 223.7,147 L160,147 Z" class="vf2" fill="#eb6834"><title>Morgan Stanley: $0.91bn</title></path>
<text x="234.7" y="141.5" font-size="11.5" fill="currentColor" font-weight="600">$0.91bn</text>
<text x="150" y="172" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.9">UBS</text>
<path d="M160,157 L220.1,157 Q223.1,157 223.1,160 L223.1,175 Q223.1,178 220.1,178 L160,178 Z" class="vf2" fill="#eb6834"><title>UBS: $0.86bn</title></path>
<text x="231.1" y="172.5" font-size="11.5" fill="currentColor" font-weight="600">$0.86bn</text>
<text x="150" y="203" font-size="11.5" fill="currentColor" text-anchor="end" opacity="0.9">MUFG</text>
<path d="M160,188 L179,188 Q182,188 182,191 L182,206 Q182,209 179,209 L160,209 Z" class="vf2" fill="#eb6834"><title>MUFG: $0.3bn</title></path>
<text x="190" y="203.5" font-size="11.5" fill="currentColor" font-weight="600">$0.30bn</text>
<text x="20" y="252" font-size="10.5" fill="currentColor" opacity="0.6">Sources: bank disclosures, 2021 (UBS includes a later $87m charge). Goldman Sachs and Deutsche Bank sold early.</text>
</svg>

The banks that sold first lost little; those that sold last lost most. Credit Suisse alone lost **$5.5 billion**, and the episode contributed to its collapse two years later. Hwang was convicted of fraud and sentenced to 18 years in prison in 2024.

> **The lesson:** Clearing margin protects the clearing house, and can force a broker to stop its customers trading (Lesson 8). And leverage hidden in swaps is still leverage: it shows up all at once, at the worst moment.

---

## 9. March 2022: The LME nickel squeeze

**Concepts:** exchange governance, squeezes, who bears the loss

In the days after Russia invaded Ukraine, nickel prices surged, and a Chinese producer, Tsingshan, which had a huge short position, faced ruinous margin calls.

<svg viewBox="0 0 680 280" width="100%" role="img" aria-label="Bar chart of the London Metal Exchange three-month nickel price in early 2022: about $20,000 a tonne at the start of the year, about $29,000 on 4 March, $48,078 at the close on 7 March and $101,365 in early trading on 8 March, when the exchange suspended trading and cancelled the day's trades, worth about $3.9 billion." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Nickel: from $29,000 to $101,365 a tonne in two trading days</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">LME three-month nickel, US$ a tonne, 2022</text>
<line x1="90" y1="230" x2="620" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="234" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="90" y1="192.7" x2="620" y2="192.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="196.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$25,000</text>
<line x1="90" y1="155.5" x2="620" y2="155.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="159.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$50,000</text>
<line x1="90" y1="118.2" x2="620" y2="118.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="122.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$75,000</text>
<line x1="90" y1="80.9" x2="620" y2="80.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="84.9" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$100,000</text>
<path d="M122.2,230 L122.2,203.2 Q122.2,200.2 125.2,200.2 L187.2,200.2 Q190.2,200.2 190.2,203.2 L190.2,230 Z" class="vf1" fill="#2a78d6"><title>start of 2022: about $20,000</title></path>
<text x="156.2" y="192.2" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">about $20,000</text>
<text x="156.2" y="248" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.78">start of 2022</text>
<path d="M254.8,230 L254.8,189.8 Q254.8,186.8 257.8,186.8 L319.8,186.8 Q322.8,186.8 322.8,189.8 L322.8,230 Z" class="vf1" fill="#2a78d6"><title>4 March: about $29,000</title></path>
<text x="288.8" y="178.8" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">about $29,000</text>
<text x="288.8" y="248" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.78">4 March</text>
<path d="M387.2,230 L387.2,161.3 Q387.2,158.3 390.2,158.3 L452.2,158.3 Q455.2,158.3 455.2,161.3 L455.2,230 Z" class="vf1" fill="#2a78d6"><title>7 March close: $48,078</title></path>
<text x="421.2" y="150.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$48,078</text>
<text x="421.2" y="248" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.78">7 March close</text>
<path d="M519.8,230 L519.8,81.9 Q519.8,78.9 522.8,78.9 L584.8,78.9 Q587.8,78.9 587.8,81.9 L587.8,230 Z" class="vf8" fill="#e34948"><title>8 March, early: $101,365</title></path>
<text x="553.8" y="70.9" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$101,365</text>
<text x="553.8" y="248" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.78">8 March, early</text>
<text x="553.8" y="262" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">(trades cancelled)</text>
<text x="20" y="272" font-size="10.5" fill="currentColor" opacity="0.6">Sources: LME; S&amp;P Global. The 8 March trades, about $3.9 billion, were cancelled by the exchange.</text>
</svg>

On the morning of 8 March 2022 the price more than doubled within hours to above **$100,000** a tonne. The **London Metal Exchange** suspended trading for a week and cancelled about **$3.9 billion** of trades done that morning, arguing that otherwise margin calls of nearly $20 billion would have bankrupted several of its members and created systemic risk. Traders who had bought at the high prices, and had their profits cancelled, sued. The English High Court upheld the exchange's decision, but traders still argue about it, and the FCA later fined the LME for failings in its handling of the market.

> **The lesson:** An exchange is not a neutral machine; it has to make judgement calls under pressure, and someone always bears the loss. **Exchange governance** is part of the plumbing.

---

## 10. September 2022: The UK pension crisis

**Concepts:** the margin spiral, swap DV01, the central bank as backstop

The government's mini-budget of 23 September 2022 promised large unfunded tax cuts, and gilt yields soared. UK pension funds using liability-driven investment held long receive-fixed swaps and repo-funded gilts, whose value fell as yields rose, so they faced enormous collateral calls (Lesson 7 showed the arithmetic: about £22 million for every £100 million of 30-year swaps on a 1.5-point move). To raise cash they sold gilts, which pushed yields higher still.

By the evening of 27 September, the Bank of England was told that several LDI funds were likely to fall into negative net asset value and begin winding up the next morning. On **28 September** it announced emergency purchases of long-dated gilts. The 30-year yield fell by more than a full percentage point that day, the largest fall on record, and the spiral stopped. The [bond guide](?slug=global-bond-markets&lesson=lesson-06-eight-headlines-eight-lessons) tells the story from the gilt market's side.

> **The lesson:** The margin spiral (Lesson 9) can strike assets thought to be the safest, held by investors thought to be the most conservative. The hedge worked; the cash ran out. LDI funds now must hold buffers to survive a 2.5-point rise in yields.

---

## 11. March 2023: Silicon Valley Bank, the swap that wasn't

**Concepts:** unhedged interest rate risk, duration, bank runs

Silicon Valley Bank had taken in a flood of deposits from technology companies during the pandemic and invested much of it in long-dated government and mortgage bonds. In 2022, as rates rose, it largely removed the interest rate swaps that had hedged part of that risk.

<svg viewBox="0 0 680 270" width="100%" role="img" aria-label="Bar chart of Silicon Valley Bank's position, in billions of US dollars. At the end of 2022 its equity was $16.3 billion while unrealised losses on its held-to-maturity bonds were $15.1 billion, almost as large. On 9 March 2023 depositors withdrew $42 billion, and requests for about $100 billion more were queued for the next morning, when the bank was closed." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">SVB: the hedge it did not hold</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Silicon Valley Bank, US$ billions</text>
<line x1="320" y1="58" x2="320" y2="226" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="320" y="242" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<line x1="392.5" y1="58" x2="392.5" y2="226" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="392.5" y="242" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$25bn</text>
<line x1="465" y1="58" x2="465" y2="226" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="465" y="242" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$50bn</text>
<line x1="537.5" y1="58" x2="537.5" y2="226" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="537.5" y="242" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$75bn</text>
<line x1="610" y1="58" x2="610" y2="226" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="610" y="242" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$100bn</text>
<text x="310" y="81" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Equity capital, end-2022</text>
<path d="M320,64 L364.3,64 Q367.3,64 367.3,67 L367.3,87 Q367.3,90 364.3,90 L320,90 Z" class="vf1" fill="#2a78d6"><title>Equity capital, end-2022: $16.3bn</title></path>
<text x="375.3" y="81.5" font-size="12" fill="currentColor" font-weight="600">$16.3bn</text>
<text x="310" y="122" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Unrealised losses on held-to-maturity bonds</text>
<path d="M320,105 L360.8,105 Q363.8,105 363.8,108 L363.8,128 Q363.8,131 360.8,131 L320,131 Z" class="vf2" fill="#eb6834"><title>Unrealised losses on held-to-maturity bonds: $15.1bn</title></path>
<text x="371.8" y="122.5" font-size="12" fill="currentColor" font-weight="600">$15.1bn</text>
<text x="310" y="163" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Deposits withdrawn on 9 March 2023</text>
<path d="M320,146 L438.8,146 Q441.8,146 441.8,149 L441.8,169 Q441.8,172 438.8,172 L320,172 Z" class="vf8" fill="#e34948"><title>Deposits withdrawn on 9 March 2023: $42bn</title></path>
<text x="449.8" y="163.5" font-size="12" fill="currentColor" font-weight="600">$42bn</text>
<text x="310" y="204" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">Further withdrawals queued for 10 March</text>
<path d="M320,187 L607,187 Q610,187 610,190 L610,210 Q610,213 607,213 L320,213 Z" class="vf8" fill="#e34948"><title>Further withdrawals queued for 10 March: $100bn</title></path>
<text x="618" y="204.5" font-size="12" fill="currentColor" font-weight="600">$100bn</text>
<text x="20" y="262" font-size="10.5" fill="currentColor" opacity="0.6">Sources: SVB Financial Group 2022 annual report; Federal Reserve review of SVB (28 April 2023).</text>
</svg>

By the end of 2022, unrealised losses on its held-to-maturity bonds were **$15.1 billion**, almost as large as its **$16.3 billion** of equity. When it announced a loss-making sale of other bonds and a plan to raise capital in March 2023, its well-connected depositors ran: **$42 billion** left on 9 March, and about **$100 billion** more was queued for the next morning. Regulators closed the bank on 10 March.

> **The lesson:** Sometimes the derivative that matters is the one you did not buy. Rate risk does not disappear because accounting rules let you ignore it; a pay-fixed swap, or simply shorter bonds, would have limited the damage.

---

## 12. 2024 to 2026: India's options frenzy and the crackdown

**Concepts:** retail speculation, regulation through product design

Lessons 10 and 11 told this story in full. SEBI found that roughly nine in ten individual traders were losing money on cheap, short-dated index options, and rather than rely on warnings it changed the product itself: contract sizes, expiries, margins and taxes. Its July 2025 case against Jane Street, still under appeal, turned the debate to expiry-day manipulation.

> **The lesson:** Where disclosure fails, regulators can **redesign the product**. The base rate of losers barely moved, but the number of people exposed to it fell sharply.

---

## 13. April 2025: Tariff turmoil

**Concepts:** when hedges stop working together, leverage tested

Sweeping US tariff announcements on 2 April 2025 set off a sell-off in shares, Treasuries and the dollar at the same time: an unusual combination, because Treasuries normally rally when shares fall.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Two line charts from mid-March to mid-May 2025. Left, the VIX: about 22 on 2 April, when sweeping US tariffs were announced, then 52.33 at the close on 8 April, its highest close since 2020, before the 90-day pause announced on 9 April. Right, the ten-year Treasury yield: 4.01% on 4 April, rising to 4.48% on 11 April, its biggest weekly rise since 2001, even as shares fell, so that the usual hedge failed." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">April 2025: shares fell and Treasury yields rose at the same time</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Left: VIX. Right: ten-year Treasury yield, %. Daily, mid-March to mid-May 2025.</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">VIX</text>
<line x1="60" y1="240" x2="320" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="244" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0</text>
<line x1="60" y1="186.7" x2="320" y2="186.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="190.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">20</text>
<line x1="60" y1="133.3" x2="320" y2="133.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="137.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">40</text>
<line x1="60" y1="80" x2="320" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">60</text>
<polyline points="60,185.3 64.3,182.1 68.7,186.9 73,187.2 77.3,188.6 90.3,193.4 94.7,194.3 99,191.1 103.3,190.2 107.7,182.3 120.7,180.6 125,181.9 129.3,182.6 133.7,159.9 138,119.2 151,114.7 155.3,100.5 159.7,150.3 164,131.4 168.3,139.8 181.3,157.6 185.7,159.7 190,153 194.3,160.9 211.7,149.8 216,158.5 220.3,164.1 224.7,169.4 229,173.8 242,172.9 246.3,175.5 250.7,174.1 255,174.4 259.3,179.5 272.3,177 276.7,174 281,177.2 285.3,180.1 289.7,181.6 302.7,191 307,191.4 311.3,190.3 315.7,192.5 320,194" class="vs7" stroke="#4a3aa7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="129.3" y1="80" x2="129.3" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="4 3"/>
<line x1="159.7" y1="80" x2="159.7" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="4 3"/>
<text x="125" y="258" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">1 Apr</text>
<text x="255" y="258" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">1 May</text>
<circle cx="155.3" cy="100.5" r="4.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>8 April: 52.33</title></circle>
<text x="163.3" y="104.5" font-size="11" fill="currentColor" font-weight="600">52.3</text>
<text x="360" y="66" font-size="12" fill="currentColor" font-weight="600">Ten-year Treasury yield</text>
<line x1="400" y1="240" x2="660" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="244" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">3.8%</text>
<line x1="400" y1="186.7" x2="660" y2="186.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="190.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">4.1%</text>
<line x1="400" y1="133.3" x2="660" y2="133.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="137.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">4.4%</text>
<line x1="400" y1="80" x2="660" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">4.7%</text>
<polyline points="400,149.3 404.3,152.9 408.7,160 413,161.8 417.3,160 430.3,144 434.7,149.3 439,142.2 443.3,136.9 447.7,156.4 460.7,163.6 465,174.2 469.3,168.9 473.7,193.8 478,202.7 491,177.8 495.3,158.2 499.7,144 504,133.3 508.3,119.1 521.3,136.9 525.7,142.2 530,152.9 534.3,144 551.7,129.8 556,131.6 560.3,133.3 564.7,147.6 569,152.9 582,163.6 586.3,170.7 590.7,174.2 595,160 599.3,145.8 612.3,140.4 616.7,151.1 621,158.2 625.3,138.7 629.7,138.7 642.7,124.4 647,117.3 651.3,110.2 655.7,124.4 660,128" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="469.3" y1="80" x2="469.3" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="4 3"/>
<line x1="499.7" y1="80" x2="499.7" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="4 3"/>
<text x="465" y="258" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">1 Apr</text>
<text x="595" y="258" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">1 May</text>
<circle cx="508.3" cy="119.1" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>11 April: 4.48%</title></circle>
<text x="516.3" y="113.1" font-size="11" fill="currentColor" font-weight="600">4.48%</text>
<text x="20" y="280" font-size="10.5" fill="currentColor" opacity="0.65">Dashed lines: 2 April, tariffs announced; 9 April, 90-day pause. Source: FRED (VIXCLS, DGS10).</text>
</svg>

The VIX closed at **52.33** on 8 April, its highest close since the pandemic. Ten-year Treasury yields rose by about half a percentage point in a week, the most since 2001. Leveraged basis trades and swap positions came under strain as funds that had relied on Treasuries to offset equity losses found both moving against them, until a 90-day pause in the tariffs, announced on 9 April, calmed markets. The [bond guide's "Sell America" episode](?slug=global-bond-markets&lesson=lesson-06-eight-headlines-eight-lessons) tells the bond market's side.

> **The lesson:** When the usual hedges stop working together, leverage gets tested. A hedge is a correlation, and correlations can change in a day.

---

## 14. October 2025: The crypto liquidation cascade

**Concepts:** leverage at machine speed, automatic liquidation, 24-hour markets

On Friday 10 October 2025, after a renewed threat of 100% US tariffs on Chinese imports, crypto markets fell sharply, at a time when traditional markets were about to close for the weekend and crypto was the only large market still open. Leveraged positions in perpetual futures (Lesson 10) began hitting their liquidation levels, and the exchanges' engines sold them automatically, which pushed prices lower and triggered the next wave.

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Line chart of the bitcoin price on Coinbase, daily, from September to November 2025. It reached a record $124,720 on 2025-10-05 and was $110,769 at the daily fixing on 10 October, when an escalation in US-China tariff threats set off more than $19 billion of forced liquidations of leveraged crypto positions in about a day, the largest such event on record. Intraday falls were far larger than the daily prices show." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">October 2025: the largest liquidation in crypto's history</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Bitcoin, US dollars, daily (Coinbase), September to November 2025</text>
<line x1="90" y1="224.5" x2="620" y2="224.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="228.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$80k</text>
<line x1="90" y1="162.7" x2="620" y2="162.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="166.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$100k</text>
<line x1="90" y1="100.9" x2="620" y2="100.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="104.9" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$120k</text>
<polyline points="90,128 95.9,126.4 101.8,129.6 107.7,129.7 113.6,131.2 119.4,128.3 125.3,125.4 131.2,127 137.1,119.5 143,114.7 148.9,112.9 154.8,113.4 160.7,115.4 166.6,115.2 172.4,110.7 178.3,111.8 184.2,109.8 190.1,114.2 196,114 201.9,115.5 207.8,123.4 213.7,125.6 219.6,121.5 225.4,134.8 231.3,132.8 237.2,132.8 243.1,125 249,118.3 254.9,119.2 260.8,105.1 266.7,99 272.6,93.7 278.4,93.3 284.3,90 290.2,86.3 296.1,96.6 302,90.6 307.9,95.6 313.8,122.6 319.7,129.4 325.6,116.2 331.4,115.5 337.3,122.3 343.2,129.3 349.1,137.4 355,142.7 360.9,140.4 366.8,135.9 372.7,130.1 378.6,136.9 384.4,139.3 390.3,131.5 396.2,128.6 402.1,126.7 408,117.8 413.9,119.2 419.8,122.8 425.7,131.7 431.6,137 437.4,133.2 443.3,131.7 449.2,130.2 455.1,142.5 461,158.2 466.9,161.8 472.8,152 478.7,158.3 484.6,153.8 490.4,157 496.3,142.6 502.2,144 508.1,154.3 514,156.7 519.9,166.1 525.8,178.7 531.7,177.9 537.6,177.6 543.4,187.9 549.3,186.9 555.2,188.1 561.1,202.2 567,209.6 572.9,208.7 578.8,204.5 584.7,199.9 590.6,201.8 596.4,191.7 602.3,190.3 608.2,190.8 614.1,190.7 620,201.5" class="vs4" stroke="#eda100" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="290.2" cy="86.3" r="4.5" class="vf4 vring" fill="#eda100" stroke="#ffffff" stroke-width="2"><title>Record: $124,720 on 2025-10-05</title></circle>
<text x="282.2" y="78.3" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">record $125k</text>
<circle cx="319.7" cy="129.4" r="4.5" class="vf8 vring" fill="#e34948" stroke="#ffffff" stroke-width="2"><title>10 October 2025: $110,769</title></circle>
<text x="327.7" y="177.4" font-size="11" fill="currentColor" font-weight="600">10 Oct: $19bn+ liquidated</text>
<line x1="319.7" y1="134.4" x2="325.7" y2="166.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<text x="90" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Sep</text>
<text x="266.7" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Oct</text>
<text x="449.2" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1 Nov</text>
<text x="620" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">30 Nov</text>
<text x="20" y="282" font-size="10.5" fill="currentColor" opacity="0.6">Source: Coinbase via FRED (CBBTCUSD). Liquidation totals from exchange data compiled by industry trackers.</text>
</svg>

In about a day, more than **$19 billion** of leveraged positions belonging to some 1.6 million traders were liquidated, the largest such event on record, and most of them were bets on rising prices. On some exchanges, when liquidations could not be completed at any price, profitable traders on the other side had their positions automatically reduced to cover the gap, a mechanism called **auto-deleveraging**.

> **The lesson:** This was the margin spiral of Lesson 9 with the humans removed: no margin calls to answer, no time to find cash, just automatic selling at machine speed, around the clock. **Leverage of 100 times leaves no room for a bad hour.**

---

## 15. 2026: The Hormuz oil shock

**Concepts:** the skew, tail hedging, volatility as a price

After war with Iran began on 28 February 2026, traffic through the Strait of Hormuz collapsed and Brent futures rose almost 50% within a month (the [commodity guide](?slug=commodity-markets&lesson=lesson-11-the-new-fault-lines) tells the physical story). The derivatives story was in the options market.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart of the Brent crude oil spot price, daily, from January to early October 2026, from EIA data. About $71 before the war began on 28 February; $113 on 26 March, when open interest in call options paying out above $150 had risen almost tenfold; a peak of $138 in this series on 2026-04-07; $122 after the ceasefire on 8 April; about $69 by 1 July; and above $120 again by early October after the truce collapsed on 8 July." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The Hormuz shock: the market feared a spike, and paid for calls</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Brent crude oil, spot price, dollars a barrel, daily, January to October 2026</text>
<line x1="70" y1="260" x2="620" y2="260" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="264" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$50</text>
<line x1="70" y1="212.5" x2="620" y2="212.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="216.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$75</text>
<line x1="70" y1="165" x2="620" y2="165" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="169" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$100</text>
<line x1="70" y1="117.5" x2="620" y2="117.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="121.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$125</text>
<line x1="70" y1="70" x2="620" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$150</text>
<line x1="70" y1="70" x2="620" y2="70" class="vs8" stroke="#e34948" stroke-width="1.2" stroke-dasharray="5 4"/>
<text x="616" y="84" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.8">the $150 strike</text>
<polyline points="71.9,237.2 77.7,235.3 79.6,237 81.5,238.9 83.4,234.7 85.3,231.3 91.1,230.7 93,226.6 94.9,224.1 96.8,229.3 98.7,227.8 104.5,227.9 106.4,226.4 108.3,228.2 110.2,230.6 112.2,225.5 117.9,226.4 119.8,221.5 121.7,220.3 123.7,220.1 125.6,217.7 131.3,226.3 133.2,222 135.2,219.8 137.1,222.2 139,221.1 144.7,219.7 146.7,220.1 148.6,219.1 150.5,222.4 152.4,222.1 158.2,220.5 160.1,222.4 162,218.6 163.9,216 165.8,216.8 171.6,218.4 173.5,219.7 175.4,220.7 177.3,218.8 179.2,219.5 185,208.2 186.9,196.8 188.8,200 190.7,186.7 192.6,173.1 198.4,175.7 200.3,184.3 202.2,182.1 204.1,160.5 206.1,158.9 211.8,163 213.7,149.1 215.6,130.6 217.6,144 219.5,130 225.2,157.8 227.1,149 229.1,147.6 231,139.6 232.9,124.2 238.6,123.4 240.6,114.3 242.5,127.8 244.4,112.5 254,92.4 255.9,123 257.8,128.8 259.7,128.8 265.5,120.8 267.4,129.5 269.3,136.6 271.2,133.4 273.1,167.6 278.9,158.5 280.8,153.3 282.7,139.5 284.6,139.8 286.6,142.5 292.3,138.6 294.2,131.5 296.1,119.1 298,118.9 300,130.3 307.6,137.4 309.5,158 311.5,161.5 313.4,158.4 319.1,153.4 321,143.4 323,145.5 324.9,144.3 326.8,138.5 332.5,133.2 334.5,137.2 336.4,148 338.3,153.9 340.2,151.9 347.9,159.8 349.8,170.5 351.7,173.6 353.6,178.5 359.4,168.2 361.3,167.9 363.2,161.8 365.1,166.9 367,170.1 372.8,169.8 374.7,176.1 376.6,173.1 378.5,178.6 380.5,186.6 386.2,194.7 388.1,202.1 390,202.4 392,204.2 393.9,202.1 399.6,209.7 401.5,211.2 403.4,218 405.4,214.9 407.3,221.7 413,219 414.9,221.1 416.9,223.4 418.8,224.8 420.7,224.5 426.4,222.8 428.4,218.6 430.3,209.7 432.2,213.5 434.1,213.8 439.9,199.9 441.8,196 443.7,197.1 445.6,200.7 447.5,193.5 453.3,189.7 455.2,176.7 457.1,176.2 459,154.9 460.9,164.4 466.7,180.5 468.6,192.5 470.5,180.3 472.4,180.4 474.4,170.8 480.1,186.1 482,190.7 483.9,190.4 485.9,184.7 487.8,188.5 493.5,178.8 495.4,177.8 497.4,179.2 499.3,180.1 501.2,180.2 506.9,179.4 508.9,173.9 510.8,179.5 512.7,176.4 514.6,170.9 520.3,178.9 522.3,187.3 524.2,188.2 526.1,183.7 528,184.5 535.7,172.6 537.6,169.6 539.5,164 541.4,160.7 547.2,156.5 549.1,153.4 551,146.9 552.9,125.1 554.8,130.7 560.6,124.6 562.5,106.5 564.4,112.1 566.3,124.8 568.3,127.6 574,134.3 575.9,136.7 577.8,131.8 579.8,125.3 581.7,134.6 587.4,127.1 589.3,138.5 591.3,134.8 593.2,136.8 595.1,97.5 600.8,116.5 602.8,116.7" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="179.2" y1="241" x2="179.2" y2="224.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="179.2" cy="219.5" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>war begins 28 Feb: $71.32</title></circle>
<text x="175.2" y="248.6" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">war begins 28 Feb</text>
<line x1="255.9" y1="241" x2="255.9" y2="128" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="255.9" cy="123" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>ceasefire 8 Apr: $122.11</title></circle>
<text x="259.9" y="248.6" font-size="10.5" fill="currentColor" font-weight="600">ceasefire 8 Apr</text>
<line x1="430.3" y1="241" x2="430.3" y2="214.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="430.3" cy="209.7" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>truce collapses 8 Jul: $76.50</title></circle>
<text x="430.3" y="248.6" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">truce collapses 8 Jul</text>
<circle cx="231" cy="139.6" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>26 March: $113.39; $150 calls up almost tenfold</title></circle>
<line x1="231" y1="134.6" x2="231" y2="87.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<text x="227" y="83.3" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">26 Mar: $150 calls up tenfold</text>
<circle cx="254" cy="92.4" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Peak in this series: $138.21 on 2026-04-07</title></circle>
<text x="260" y="86.4" font-size="10.5" fill="currentColor" font-weight="600">$138, 7 Apr</text>
<text x="70" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Jan</text>
<text x="129.4" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Feb</text>
<text x="183.1" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Mar</text>
<text x="242.5" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Apr</text>
<text x="300" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">May</text>
<text x="359.4" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Jun</text>
<text x="416.9" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Jul</text>
<text x="476.3" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Aug</text>
<text x="535.7" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Sep</text>
<text x="593.2" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Oct</text>
<text x="20" y="312" font-size="10.5" fill="currentColor" opacity="0.6">Source: EIA via FRED (DCOILBRENTEU). Platts' Dated Brent assessment hit a record $144.42 on 7 April.</text>
</svg>

By 26 March, open interest in Brent call options that would pay out if oil topped **$150** by the end of April had risen almost **tenfold** in a month, and calls struck at $160 had gone from nothing to the equivalent of about $1.5 billion of crude. Traders were buying insurance against a spike, so upside protection became the expensive kind: the oil-market version of the skew in Lesson 4. Volatility itself became the story: in April and May the average daily swing in Brent was about **$4** a barrel, against about **$1** a year earlier. Producers and consumers who hedged with futures faced the cash demands of Lesson 6 every day.

> **The lesson:** In commodities, the feared tail is often a **spike rather than a crash**, so calls rather than puts carry the premium. The price of an option is the market's price for the storm it fears.

---

## What the twenty-four have in common

Look back across Lessons 12 and 13 and four threads run through almost every episode.

1. **Leverage meets a cash squeeze.** Metallgesellschaft, LTCM, Amaranth, March 2020, the UK pensions, April 2025 and October 2025: positions that might have been right in the end, killed by the timing of cash.
2. **Hidden risks and weak controls.** Barings, Enron, the credit crunch, AIG, the London Whale, Archegos, SVB: risk that nobody, or nobody independent, could see.
3. **Feedback loops and vanishing liquidity.** Black Monday, the Flash Crash, the Swiss franc, Volmageddon, nickel: protection and hedging that pushed prices further in the direction everyone feared.
4. **Pricing, products and rules.** The first listed options, 1994's complex swaps, negative oil, India's options, the Hormuz skew: the contract's design, and how it is priced, shaping who gets hurt.

---

## Check yourself

**1. Why did the Robinhood restrictions of January 2021 come from the clearing house rather than from a regulator?**

<details>
<summary>Show the answer</summary>

Because trades take time to settle, a clearing house collects margin from brokers to cover the risk that customers' trades fail in the meantime, and that margin rises with volatility and concentration. When GameStop trading exploded, the clearing house demanded billions of dollars more from Robinhood overnight. Limiting new buying was the broker's way of capping the margin it had to post: **clearing margin under stress** (Lesson 8).

</details>

**2. A pension fund has £300 million of 30-year receive-fixed swaps. Yields rise 1.5 percentage points in a week. Using the figure from Lesson 7, roughly how much collateral must it find?**

<details>
<summary>Show the answer</summary>

About £22 million per £100 million, so about **£66 million**, in cash or eligible collateral, within days. If it raises that by selling gilts into a falling market, it adds to the spiral.

</details>

**3. On 20 April 2020, why would anyone pay $37.63 a barrel to get rid of oil, and who was glad to take it?**

<details>
<summary>Show the answer</summary>

Because someone holding an expiring physically settled contract had to take delivery at Cushing and had nowhere to store the oil, so they paid others to take the obligation off their hands. A buyer with storage could be paid to receive oil and sell it later, when prices recovered.

</details>

**4. In March 2026, $150 Brent calls were in heavy demand. In March 2020, S&P 500 puts were. Which part of the skew was dear in each case, and why?**

<details>
<summary>Show the answer</summary>

In oil, the **calls** (upside) were dear, because the feared outcome was a supply-driven price spike. In equities, the **puts** (downside) were dear, because the feared outcome was a crash. The skew always points towards the tail the market fears most (Lesson 4).

</details>

---

## What to carry into Lesson 14

- After 2008 the dangers moved into the **plumbing**: margin, clearing, benchmarks and speed.
- **Counterparty risk and opacity** made 2008 a panic; the reforms made trades **cleared, reported and margined**.
- **Margin procyclicality** turned March 2020 and September 2022 into cash crises, with central banks as the backstop.
- **Products whose hedging feeds the move** (Volmageddon) and **leverage at machine speed** (October 2025) are the modern feedback loops.
- **Read the contract** (negative oil), **watch for hidden leverage** (Archegos) and **remember the hedge you did not buy** (SVB).
- The **skew points at the feared tail**: puts for stocks, calls for oil in a supply shock.

Lesson 14 turns from crises to everyday work: how banks, insurers, energy companies and manufacturers use derivatives, and where technology helps.

---

## Sources

- [BIS: OTC derivatives statistics, credit default swaps (2004 to 2025)](https://data.bis.org/topics/OTC_DER)
- [US Treasury: final sale of AIG stock, the $182.3 billion commitment fully recovered](https://home.treasury.gov/news/press-releases/tg1805)
- [SEC and CFTC: findings regarding the market events of May 6, 2010](https://www.sec.gov/news/studies/2010/marketevents-report.pdf)
- [BCBS, CPMI and IOSCO: Review of margining practices (2022)](https://www.bis.org/bcbs/publ/d526.htm)
- [Bank of England: letter from Jon Cunliffe on LDI and the gilt market, 5 October 2022](https://www.bankofengland.co.uk/-/media/boe/files/letter/2022/october/letter-from-jon-cunliffe-ldi-5-october-2022)
- [Federal Reserve: results of the review of the supervision and regulation of Silicon Valley Bank (28 April 2023)](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20230428a.htm)
- [21Shares: record crypto liquidations amid tariff shock (October 2025)](https://www.21shares.com/research/record-crypto-liquidations-amid-tariff-shock)
- [BNN Bloomberg (Reuters): with Hormuz still shut, options market signals rising risk of $150 oil (26 March 2026)](https://www.bnnbloomberg.ca/business/2026/03/26/with-strait-of-hormuz-still-shut-options-market-signals-rising-risk-of-us150-oil/)
- [EIA: Today in Energy, Brent price volatility in the second quarter of 2026](https://www.eia.gov/todayinenergy/detail.php?id=67865)
