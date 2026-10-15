# Lesson 6: Futures: Living With Daily Settlement

*How the evening settlement turns a futures position into a stream of cash, what leverage really means, how interest rate futures reveal the path the market expects for central bank rates, and how a hedge fund trade linking bond futures to the repo market became a source of systemic risk.*

---

## Right, and still wiped out

Here is a futures position that makes money. You buy one FTSE 100 future, the index rises 50 points over three days, and you finish £500 ahead. Here is the same position as you would actually live it: on the second evening your broker demands **£2,000 of fresh cash** by the next morning, at the exact moment you are losing money, and if you cannot find it your position is closed at the bottom and you never see the recovery.

That gap, between being right and surviving long enough to be proved right, is the second big idea of this guide. Futures settle their gains and losses in cash every single evening. That makes them the safest way for strangers to trade with each other, and a trap for anyone whose cash runs out before their conviction does.

> **The second big idea.** Leverage turns small price moves into large cash demands, and the cash is collected every day. Many famous blow-ups were not about being wrong for ever; they were about running out of cash before being proved right.

---

## A margin account, evening by evening

A FTSE 100 future is worth **£10 for every index point**. Suppose the index stands at **10,000**, so one contract controls **£100,000** of exposure to the British stock market. Your broker asks for **£5,000** of **initial margin**, a deposit against losses, and will call for a top-up if your account falls below a **maintenance** level of **£4,000**. These amounts are illustrative, but the mechanics are exactly how futures work.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart of a futures margin account over three days. One FTSE 100 future is bought at 10,000 with £5,000 of initial margin and a £4,000 maintenance level. Day 1: index down 80 points, pay £800, balance £4,200; Day 2: index down 120 points, pay £1,200, balance £3,000; Day 3: index up 250 points, receive £2,500, balance £7,500. The fall to £3,000 on day 2 is below maintenance, so £2,000 must be paid in to restore £5,000. Over the three days the index rose 50 points and the trader made £500, but needed £2,000 of fresh cash at the worst moment." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Right in the end, but first you must find £2,000</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">One FTSE 100 future bought at 10,000: £10 a point, £5,000 initial margin, £4,000 maintenance. Illustrative.</text>
<line x1="110" y1="270" x2="560" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£2,000</text>
<line x1="110" y1="203.3" x2="560" y2="203.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="207.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£4,000</text>
<line x1="110" y1="136.7" x2="560" y2="136.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="140.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£6,000</text>
<line x1="110" y1="70" x2="560" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£8,000</text>
<line x1="110" y1="203.3" x2="560" y2="203.3" class="vs8" stroke="#e34948" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="568" y="207.3" font-size="11" fill="currentColor" opacity="0.85">maintenance</text>
<line x1="110" y1="170" x2="560" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<text x="568" y="174" font-size="11" fill="currentColor" opacity="0.85">initial margin</text>
<polyline points="110,170 246.7,196.7 383.3,236.7 383.3,170 520,86.7" class="vs1" stroke="#2a78d6" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="110" cy="170" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 0: balance £5,000</title></circle>
<text x="110" y="160" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£5,000</text>
<text x="110" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Start</text>
<text x="110" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">10,000</text>
<circle cx="246.7" cy="196.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 1: balance £4,200</title></circle>
<text x="246.7" y="186.7" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£4,200</text>
<text x="246.7" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Day 1</text>
<text x="246.7" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">−80 pts</text>
<circle cx="383.3" cy="236.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 2: balance £3,000</title></circle>
<text x="383.3" y="256.7" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£3,000</text>
<text x="383.3" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Day 2</text>
<text x="383.3" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">−120 pts</text>
<circle cx="383.3" cy="170" r="4.5" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"/>
<text x="393.3" y="240.7" font-size="11" fill="currentColor" font-weight="600">margin call: pay in £2,000</text>
<circle cx="520" cy="86.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 3: balance £7,500</title></circle>
<text x="520" y="76.7" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£7,500</text>
<text x="520" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Day 3</text>
<text x="520" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">+250 pts</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Paid in £7,000 in total; the account ends at £7,500, a £500 profit, and the £2,500 above initial margin can be withdrawn.</text>
</svg>

| Day | Index move | Cash moved that evening | Your account | What happens |
| --- | --- | ---: | ---: | --- |
| Start | Buy at 10,000 | Deposit £5,000 | £5,000 | Position opened |
| 1 | Down 80 points | Pay £800 | £4,200 | Still above £4,000 |
| 2 | Down 120 points | Pay £1,200 | £3,000 | Margin call: pay in £2,000 to get back to £5,000 |
| 3 | Up 250 points | Receive £2,500 | £7,500 | £2,500 above initial margin can be withdrawn |

Every evening the clearing house revalues every position at the day's settlement price and moves the difference in cash, from losers to winners. This is **variation margin**. Over the three days the index rose 50 points and you made £500: you paid in £7,000 and hold £7,500. But on day 2 you had to find £2,000 at a moment of losses. If you could not, the broker would have closed your position at the low, turning a temporary £2,000 paper loss into a permanent one, and you would have missed the 250-point recovery entirely.

Notice who is protected by this. Your counterparty, whoever it was, never had to worry whether you could pay: the clearing house collected your losses in cash each evening, before they could grow. The daily settlement transfers the anxiety from the clearing house to you.

---

## What leverage really means

The £5,000 deposit controls £100,000 of exposure, so the position is **20 times leveraged**.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart comparing two ways to take £100,000 of exposure to the FTSE 100. Buying the shares outright: a 1% move in the index changes the money invested by 1%. Buying one future with £5,000 of margin: the same 1% move changes the deposit by 20%, and a 5% fall wipes the deposit out entirely. The future is 20 times leveraged." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">£5,000 of margin, £100,000 of exposure: 20 times the swing</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Gain or loss on the money you put in, against the move in the index</text>
<line x1="90" y1="253.3" x2="600" y2="253.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="257.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-100%</text>
<line x1="90" y1="211.7" x2="600" y2="211.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="215.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-50%</text>
<line x1="90" y1="170" x2="600" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="90" y1="128.3" x2="600" y2="128.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="132.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+50%</text>
<line x1="90" y1="86.7" x2="600" y2="86.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="90.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+100%</text>
<text x="90" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-6%</text>
<text x="175" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-4%</text>
<text x="260" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-2%</text>
<text x="345" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<text x="430" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+2%</text>
<text x="515" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+4%</text>
<text x="600" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+6%</text>
<text x="345" y="306" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">move in the FTSE 100</text>
<line x1="90" y1="175" x2="600" y2="165" class="vs3" stroke="#1baf7a" stroke-width="2.2"/>
<line x1="90" y1="270" x2="600" y2="70" class="vs1" stroke="#2a78d6" stroke-width="2.4"/>
<circle cx="132.5" cy="253.3" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>A 5% fall wipes out the £5,000 deposit</title></circle>
<text x="142.5" y="257.3" font-size="11" fill="currentColor" font-weight="600">a 5% fall: deposit gone</text>
<circle cx="387.5" cy="153.3" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>A 1% rise: +20% on the deposit</title></circle>
<text x="379.5" y="145.3" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">+1%: +20%</text>
<text x="608" y="80" font-size="11.5" fill="currentColor" font-weight="600">future</text>
<text x="608" y="169" font-size="11.5" fill="currentColor" font-weight="600">shares</text>
</svg>

A 1% rise in the index, 100 points, makes you £1,000: a **20% return** on your deposit. A 1% fall loses the same. A **5% fall wipes out the deposit entirely**, and the FTSE 100 has fallen more than 5% in a day several times in its history. Leverage does not change the odds of the index moving; it changes how much of *your money* each move represents, and therefore how quickly a normal move becomes a margin call.

This is also why clearing houses raise margin when markets turn volatile. A deposit that covered a typical bad day in a calm market does not cover one in a storm, so the requirement goes up, precisely when traders are losing money and cash is hardest to find. Lesson 9 shows how that turns a fall into a spiral.

---

## Pricing, settlement and rolling

Lesson 3 showed that a future's fair price is not a forecast: it is the spot price plus the cost of carrying the underlying to expiry, interest minus dividends for an index, plus storage for a commodity. The gap, the **basis**, shrinks to nothing at expiry.

**Financial futures usually settle in cash.** On the expiry day, a FTSE 100 future pays the difference between the price you bought at and a final settlement value calculated from the index, and nothing else changes hands. **Many commodity futures can end in physical delivery** of real barrels or bushels, which is what anchors their price to the physical market (the [commodity guide](?slug=commodity-markets&lesson=lesson-03-physical-barrels-paper-contracts) follows a cargo all the way through).

Most traders never get that far. They close their positions before expiry, or **roll** them: sell the expiring contract and buy the next one, keeping the exposure going. The number of contracts still open at the end of a day is called **open interest**; the number traded during the day is **volume**. A rally on rising open interest means new money is arriving; a rally on falling open interest often means shorts are being forced out.

---

## Interest rate futures: the market's forecast, in prices

One family of futures does something remarkable: it lets you read what the market expects central banks to do.

A **three-month SONIA future**, traded on ICE Futures Europe, settles on the average SONIA rate over a particular quarter. SONIA, the Sterling Overnight Index Average, is the rate banks pay to borrow overnight, and it tracks the Bank of England's Bank Rate closely. The quirk is in how the price is quoted: **price = 100 minus the rate**. A contract trading at 96.40 implies an average rate of 3.60% for that quarter. (Quoting it this way means the price rises when rates fall, like a bond.)

Line up the contracts for successive quarters, called the **strip**, and you can read off the path of interest rates the market is pricing.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Chart of the interest rate path implied by an illustrative strip of three-month SONIA futures. Each price is 100 minus the average rate expected over that quarter: Dec 2026 at 96.27, implying 3.73%; Mar 2027 at 96.40, implying 3.60%; Jun 2027 at 96.52, implying 3.48%; Sep 2027 at 96.60, implying 3.40%; Dec 2027 at 96.63, implying 3.37%; Mar 2028 at 96.62, implying 3.38%. With Bank Rate at 3.75%, the strip implies about 1.5 quarter-point cuts by the end of 2027." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Reading the market's rate forecast from futures prices</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Three-month SONIA futures: implied rate = 100 − price. Illustrative prices.</text>
<line x1="90" y1="237.9" x2="610" y2="237.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="241.8" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">3.25%</text>
<line x1="90" y1="177.1" x2="610" y2="177.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="181.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">3.50%</text>
<line x1="90" y1="116.4" x2="610" y2="116.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="120.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">3.75%</text>
<line x1="90" y1="116.4" x2="610" y2="116.4" class="vs2" stroke="#eb6834" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="96" y="109.4" font-size="11" fill="currentColor" opacity="0.85">Bank Rate today, 3.75%</text>
<line x1="99.3" y1="121.3" x2="167.3" y2="121.3" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="133.3" cy="121.3" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Dec 2026: price 96.27, implied rate 3.73%</title></circle>
<text x="133.3" y="139.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.73%</text>
<text x="133.3" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Dec 2026</text>
<text x="133.3" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.27</text>
<line x1="186" y1="152.9" x2="254" y2="152.9" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="220" cy="152.9" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Mar 2027: price 96.40, implied rate 3.60%</title></circle>
<text x="220" y="170.9" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.60%</text>
<text x="220" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Mar 2027</text>
<text x="220" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.40</text>
<line x1="272.7" y1="182" x2="340.7" y2="182" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="306.7" cy="182" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Jun 2027: price 96.52, implied rate 3.48%</title></circle>
<text x="306.7" y="200" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.48%</text>
<text x="306.7" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Jun 2027</text>
<text x="306.7" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.52</text>
<line x1="359.3" y1="201.4" x2="427.3" y2="201.4" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="393.3" cy="201.4" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Sep 2027: price 96.60, implied rate 3.40%</title></circle>
<text x="393.3" y="219.4" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.40%</text>
<text x="393.3" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Sep 2027</text>
<text x="393.3" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.60</text>
<line x1="446" y1="208.7" x2="514" y2="208.7" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="480" cy="208.7" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Dec 2027: price 96.63, implied rate 3.37%</title></circle>
<text x="480" y="226.7" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.37%</text>
<text x="480" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Dec 2027</text>
<text x="480" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.63</text>
<line x1="532.7" y1="206.3" x2="600.7" y2="206.3" class="vs1" stroke="#2a78d6" stroke-width="3" stroke-linecap="round"/>
<circle cx="566.7" cy="206.3" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Mar 2028: price 96.62, implied rate 3.38%</title></circle>
<text x="566.7" y="224.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">3.38%</text>
<text x="566.7" y="270" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Mar 2028</text>
<text x="566.7" y="286" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">price 96.62</text>
<text x="20" y="318" font-size="10.5" fill="currentColor" opacity="0.6">One contract covers £25 per 0.01 point: the interest on £1 million for three months.</text>
</svg>

In this illustrative strip, with Bank Rate at 3.75%, the market is pricing a gradual easing to about 3.4% by late 2027: roughly one or two quarter-point cuts. When a speech by the Governor or an inflation figure surprises the market, these prices move within seconds, and financial journalists' phrases such as "markets now price two cuts this year" come straight from this arithmetic. The US equivalent, **SOFR futures** on CME, does the same for the Federal Reserve, and averaged **5.4 million** contracts a day with SOFR options in 2025.

Two caveats keep you honest. The implied rates include a small **risk premium**, because lenders want compensation for locking in, so they are not a pure forecast. And they change constantly; they are the market's best guess today, not a promise.

The same contracts are also hedging tools. Each one is worth **£25 for every 0.01 point**, the interest on £1 million for three months. A company with a £10 million floating-rate loan that resets in June can lock in the rate for that quarter by **selling ten June contracts**. If rates rise, the futures price falls and the company's gain on the contracts offsets its higher interest bill. If rates fall, it loses on the futures and pays less interest. Either way its cost for the quarter is fixed.

---

## Bond futures and the basis trade

Futures on government bonds work a little differently. A US Treasury future can be settled by delivering any of a basket of eligible bonds, with conversion factors to make them comparable, and the seller naturally delivers whichever is **cheapest to deliver**. That detail aside, a bond future behaves like a forward on a bond, priced by carry.

Asset managers love Treasury futures: they offer exposure to long-term interest rates for a small margin deposit, leaving the rest of the fund's cash free. That demand tends to push futures slightly above the price of the bonds they deliver. Hedge funds close the gap with the **basis trade**.

<svg viewBox="0 0 680 372" width="100%" role="img" aria-label="Diagram of the Treasury cash-futures basis trade. Asset managers buy Treasury futures because they give cheap exposure, which pushes futures slightly above the price of the bonds they deliver. A hedge fund sells those futures and buys the matching Treasury bonds, borrowing almost all the money through repo: it lends the bonds to a bank or money market fund as collateral for cash. When the futures expire it delivers the bonds and pockets the small gap. The trade is very safe while funding lasts, and very dangerous if repo lenders or the futures clearing house suddenly demand more cash." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The basis trade: a tiny gap, enormous leverage</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">How hedge funds link Treasury futures to the bond market and the repo market</text>
<rect x="20" y="70" width="180" height="74" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none"/>
<text x="110" y="94" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Asset managers</text>
<text x="110" y="112" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">want cheap exposure:</text>
<text x="110" y="127" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">buy Treasury futures</text>
<rect x="250" y="150" width="180" height="92" rx="8" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.6" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="340" y="174" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Hedge fund</text>
<text x="340" y="192" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">sells futures, buys the</text>
<text x="340" y="207" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">matching bonds, borrows</text>
<text x="340" y="222" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">the cash to pay</text>
<rect x="480" y="70" width="180" height="74" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none"/>
<text x="570" y="94" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Bond market</text>
<text x="570" y="112" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">sells the Treasuries</text>
<text x="570" y="127" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">the futures deliver</text>
<rect x="480" y="250" width="180" height="74" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none"/>
<text x="570" y="274" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Repo lenders</text>
<text x="570" y="292" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">banks and money market</text>
<text x="570" y="307" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">funds lend cash</text>
<rect x="20" y="250" width="180" height="74" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none"/>
<text x="110" y="274" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Clearing house</text>
<text x="110" y="292" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">collects margin on</text>
<text x="110" y="307" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">the futures every day</text>
<line x1="200" y1="120" x2="262" y2="150" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.6"/>
<polygon points="262,150 255,149.8 257.5,144.6" fill="currentColor" fill-opacity="0.6"/>
<text x="236" y="126" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">futures</text>
<line x1="480" y1="108" x2="430" y2="150" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.6"/>
<polygon points="430,150 433.1,143.7 436.7,148.1" fill="currentColor" fill-opacity="0.6"/>
<text x="440" y="116" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.75">bonds</text>
<line x1="480" y1="278" x2="432" y2="230" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.6"/>
<polygon points="432,230 438.5,232.5 434.5,236.5" fill="currentColor" fill-opacity="0.6"/>
<text x="446" y="266" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.75">cash for bonds</text>
<line x1="250" y1="226" x2="200" y2="268" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.6"/>
<polygon points="200,268 203.1,261.7 206.7,266.1" fill="currentColor" fill-opacity="0.6"/>
<text x="234" y="264" font-size="10.5" fill="currentColor" opacity="0.75">margin</text>
<text x="340" y="300" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">profit: the small gap between</text>
<text x="340" y="315" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">futures and bonds, times leverage</text>
<text x="340" y="358" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">If margin jumps or repo dries up, thousands of funds must sell the same bonds at once.</text>
</svg>

The hedge fund sells the futures and buys the matching bonds, borrowing almost all of the purchase price in the **repo market**: it hands the bonds to a lender, typically a bank or a money market fund, as collateral for a short-term cash loan. At expiry it delivers the bonds against the futures and keeps the gap. The gap is tiny, often a small fraction of a percent, so the trade only pays with enormous leverage. Futures margin is typically just 1% to 3% of the contract's value, and repo lending against Treasuries can be close to 100% of the bonds' value. The Chicago Fed estimates that the trade exceeded **$1 trillion** of notional value by May 2025.

On paper it is nearly riskless: the bonds and the futures move together. In practice it depends on two things staying calm, the futures margin and the repo funding, and both can lurch at the same moment. In March 2020, as investors around the world dashed for cash, Treasury prices became disorderly, margin requirements jumped and funds unwound basis trades together, selling the very bonds everyone else was trying to sell, until the Federal Reserve bought more than a trillion dollars of Treasuries in four weeks. In April 2025, during the tariff turmoil, fears of the same unwind contributed to the biggest weekly jump in ten-year Treasury yields since 2001. The [bond guide's "Sell America" episode](?slug=global-bond-markets&lesson=lesson-06-eight-headlines-eight-lessons) tells that story from the bond market's side.

> **A hedge is only as safe as its funding.** The basis trade is perfectly hedged against prices and completely exposed to cash. When thousands of leveraged funds must raise cash at once, they all sell the same thing, and the hedge becomes the shock.

---

## Basis risk: when the hedge is not quite the thing

Futures exist for only a few hundred standardised underlyings, and real exposures rarely match them exactly. An airline buys jet fuel, but the most liquid futures are on crude oil and heating oil. A British farmer sells wheat in Lincolnshire, but the benchmark contract is priced elsewhere. A fund owns a portfolio that resembles, but is not, the FTSE 100.

Hedging with the nearest available contract is called a **cross hedge**, and it leaves **basis risk**: the risk that the hedge and the thing hedged move by different amounts. If jet fuel rises much more than crude oil, which happens when refineries are short of capacity, the airline's crude hedge pays out less than its fuel bill rises. The [commodity guide's hedging lesson](?slug=commodity-markets&lesson=lesson-04-hedging-speculation-and-arbitrage) works a basis-risk example through to the last cent. The lesson for every hedger is the same: a hedge removes the risk you can trade, and leaves the risk you cannot.

---

## Check yourself

**1. The E-mini S&P 500 future is worth $50 per index point. With the index at 7,800, what exposure does one contract give? What is the gain or loss on a 2% move?**

<details>
<summary>Show the answer</summary>

$50 × 7,800 = **$390,000** of exposure. A 2% move is 156 points, so **$7,800** up or down per contract, settled in cash that evening.

</details>

**2. A three-month SONIA future trades at 96.25. What average rate is it pricing? If it rises to 96.50, what has the market done?**

<details>
<summary>Show the answer</summary>

100 − 96.25 = **3.75%**. At 96.50 the implied rate is 3.50%: the market now expects rates **a quarter point lower** for that quarter, and each contract has gained 25 × £25 = **£625**.

</details>

**3. In the FTSE example, suppose day 2 had been a fall of 200 points rather than 120. What would the account show, and how big would the margin call be?**

<details>
<summary>Show the answer</summary>

Day 1 leaves £4,200. A 200-point fall costs £2,000, leaving **£2,200**, below maintenance, so the call is £5,000 − £2,200 = **£2,800**.

</details>

**4. A company will pay floating interest on £20 million for the September quarter and wants to fix it now. Roughly how many September SONIA contracts should it trade, and in which direction?**

<details>
<summary>Show the answer</summary>

Each contract covers the interest on £1 million for three months, so about **20 contracts**. It should **sell** them: if rates rise, the futures price falls and the short futures gain, offsetting the higher interest.

</details>

---

## What to carry into Lesson 7

- Futures settle gains and losses in cash **every evening**. That protects the clearing house and puts the cash burden on you: **being right is not enough; you must survive the path**.
- Leverage is exposure divided by deposit. At **20 times**, a 1% move is 20% of your money and a 5% move is all of it. Margin requirements rise when markets turn volatile.
- Financial futures mostly **settle in cash**; most positions are **closed or rolled** before expiry.
- **Interest rate futures** are quoted as 100 minus the rate, so a strip of them shows the **path of rates the market is pricing**, and lets borrowers lock in rates.
- The **basis trade** links Treasury futures, bonds and repo with leverage of up to 100 times, and turns funding stress into forced selling.
- A hedge with a related contract leaves **basis risk**.

Lesson 7 turns to the instrument that dwarfs everything else in the market: the swap.

---

## Sources

- [ICE Futures Europe: FTSE 100 index future contract specifications](https://www.ice.com/products/38716764/FTSE-100-Index-Future)
- [ICE Futures Europe: three-month SONIA index futures contract specifications](https://www.ice.com/products/68361266)
- [CME Group: record annual average daily volume in 2025, including SOFR futures and options (Markets Media)](https://www.marketsmedia.com/cme-reports-record-annual-adv-3)
- [Chicago Fed Letter No. 516 (2026): the Treasury cash-futures basis trade](https://www.chicagofed.org/publications/chicago-fed-letter/2026/516)
