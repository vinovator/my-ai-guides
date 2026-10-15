# Lesson 1: What a Derivative Is

*A contract about something, rather than the thing itself: why such contracts exist, the four jobs they do, why the market's famous headline size misleads, and a history far older than the stock market.*

---

## The philosopher and the olive presses

Around 600 BC, the philosopher Thales of Miletus was mocked for being poor. If philosophy was so useful, his neighbours asked, why was he not rich? Aristotle tells what happened next. Thales read the signs of a bumper olive harvest months before it came, and in the depths of winter, when nobody else wanted them, he paid small deposits for the right to use every olive press in Miletus and on the nearby island of Chios. When the harvest arrived and everyone needed a press at once, he rented them out at whatever price he liked, and made a fortune.

Thales never owned a press. He owned a **right to use** one, at a price fixed in advance, and when the season turned that right was worth far more than he had paid for it. That right was a derivative: a contract whose value comes from something else. Twenty-six centuries later the same idea fixes the price of your gas and electricity, sets the rate on your mortgage, keeps airlines flying when oil spikes, and occasionally brings down a bank.

This lesson builds the idea from the ground up. By the end you will know what a derivative is, why anyone wants one, and why the most quoted number about the market is also the most misleading.

---

## A contract about something, not the thing itself

When you buy a share, you own a piece of a company. When you buy a derivative on that share, you own a **promise about the share**: to buy it later at a price fixed today, to have the right to buy or sell it, or simply to pay or receive the difference if its price moves. The thing the promise refers to is called the **underlying**.

Almost anything with a measurable value can be an underlying: shares and stock indices, interest rates, currencies, barrels of oil and tonnes of wheat, a company's chances of going bust, the temperature in Chicago next January, even the result of an election. What makes all of these contracts derivatives is that their value is **derived** from something else, which is where the name comes from.

You probably live with three of them already.

<svg viewBox="0 0 680 270" width="100%" role="img" aria-label="Three everyday contracts that behave like derivatives. A fixed-price energy tariff is like a forward: you pay the same price whatever happens to wholesale gas and power. Travel insurance is like an option: you pay a small premium and receive a payout only if something goes wrong. A fixed-rate mortgage is usually hedged by the lender with an interest rate swap, which turns the floating rate it pays for funding into the fixed rate it receives from you." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">You probably live with three derivatives already</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Each everyday contract on top, the building block it behaves like underneath</text>
<rect x="20" y="62" width="206" height="190" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="34" y="86" font-size="13" fill="currentColor" font-weight="600">Fixed-price energy tariff</text>
<text x="34" y="104" font-size="11.5" fill="currentColor" opacity="0.75" font-style="italic">behaves like a forward</text>
<text x="34" y="230" font-size="10.5" fill="currentColor" opacity="0.75">Price fixed today for a</text>
<text x="34" y="244" font-size="10.5" fill="currentColor" opacity="0.75">year of future supply</text>
<rect x="247" y="62" width="206" height="190" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="261" y="86" font-size="13" fill="currentColor" font-weight="600">Travel insurance</text>
<text x="261" y="104" font-size="11.5" fill="currentColor" opacity="0.75" font-style="italic">behaves like an option</text>
<text x="261" y="230" font-size="10.5" fill="currentColor" opacity="0.75">Small premium now, a payout</text>
<text x="261" y="244" font-size="10.5" fill="currentColor" opacity="0.75">only if things go wrong</text>
<rect x="474" y="62" width="206" height="190" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="488" y="86" font-size="13" fill="currentColor" font-weight="600">Fixed-rate mortgage</text>
<text x="488" y="104" font-size="11.5" fill="currentColor" opacity="0.75" font-style="italic">hedged with a swap</text>
<text x="488" y="230" font-size="10.5" fill="currentColor" opacity="0.75">Your fixed rate, funded at a</text>
<text x="488" y="244" font-size="10.5" fill="currentColor" opacity="0.75">floating rate, swapped by the bank</text>
<polyline points="40,162 56.6,152.9 73.2,159 89.8,146.8 106.4,153.6 123,168.1 139.6,172.6 156.2,162 172.8,149.8 189.4,142.2 206,148.3" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="40" y1="159" x2="206" y2="159" class="vs1" stroke="#2a78d6" stroke-width="2.2"/>
<text x="206" y="173" font-size="10" fill="currentColor" text-anchor="end" opacity="0.85">your price</text>
<text x="43.3" y="140.2" font-size="10" fill="currentColor" opacity="0.85">wholesale price</text>
<line x1="267" y1="184.8" x2="433" y2="184.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<polyline points="267,192.4 333.4,192.4 433,146.8" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="267" y="185.4" font-size="10" fill="currentColor" opacity="0.85">premium paid</text>
<text x="433" y="138.8" font-size="10" fill="currentColor" text-anchor="end" opacity="0.85">payout</text>
<text x="433" y="206.4" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.6">size of the mishap</text>
<rect x="494" y="128" width="64" height="34" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="526" y="149" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">Lender</text>
<rect x="604" y="128" width="56" height="34" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="632" y="149" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">Swap</text>
<line x1="560" y1="136" x2="602" y2="136" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="602,136 595.6,138.9 595.6,133.1" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="581" y="126" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.8">fixed</text>
<line x1="602" y1="156" x2="560" y2="156" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="560,156 566.4,153.1 566.4,158.9" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="581" y="172" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.8">floating</text>
<text x="526" y="196" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.8">You pay fixed;</text>
<text x="526" y="209" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.8">it funds at floating</text>
</svg>

A fixed-price energy tariff is a forward contract on gas and power in all but name: you agree today what you will pay for a year of future supply, and you win or lose against the wholesale price without ever trading it. Travel insurance behaves like an option: you pay a small premium for a payout that arrives only if something goes wrong. And the fixed-rate mortgage on many British homes is quietly hedged by the lender with an **interest rate swap**, because the lender funds itself at rates that float while you pay it a rate that does not. Lesson 7 shows exactly how.

---

## Two sides, one risk

Every derivative has two sides, and before costs one side's gain is exactly the other side's loss. That sounds like a bet, and sometimes it is. But usually the two sides want different things, and that is the whole point.

Take a farmer who will harvest wheat in September and a baker who will need wheat in September. The farmer fears that prices will fall before harvest; the baker fears that they will rise. In spring they agree a **forward**: the farmer will sell and the baker will buy 1,000 tonnes in September at £200 a tonne, whatever the market price is then.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two charts of a wheat forward at £200 a tonne between a farmer, who sells, and a baker, who buys. Left: the contract alone. At a harvest price of £150 the farmer gains £50 a tonne and the baker loses £50; at £250 the baker gains £50 and the farmer loses £50; the two lines mirror each other and always sum to zero. Right: each side including its real business. The farmer always ends up with £200 a tonne and the baker always pays £200, whatever the harvest price." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The contract is zero-sum; the outcome is not a bet</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A wheat forward at £200 a tonne. Illustrative.</text>
<text x="30" y="66" font-size="11.5" fill="currentColor" font-weight="600">The contract alone: one side's gain is the other's loss</text>
<text x="370" y="66" font-size="11.5" fill="currentColor" font-weight="600">With the real business: both have a fixed price</text>
<line x1="70" y1="246" x2="300" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="250" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£50</text>
<line x1="70" y1="176" x2="300" y2="176" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="64" y="180" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="70" y1="106" x2="300" y2="106" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="110" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£50</text>
<text x="70" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£150</text>
<text x="185" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£200</text>
<text x="300" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£250</text>
<polyline points="70,106 300,246" class="vs2" stroke="#eb6834" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="70,246 300,106" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="74.6" y="98" font-size="10.5" fill="currentColor" font-weight="600">farmer (sold)</text>
<text x="295.4" y="98" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">baker (bought)</text>
<text x="185" y="300" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">harvest price, £ a tonne</text>
<line x1="410" y1="246" x2="640" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="250" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£150</text>
<text x="410" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£150</text>
<line x1="410" y1="176" x2="640" y2="176" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="180" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£200</text>
<text x="525" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£200</text>
<line x1="410" y1="106" x2="640" y2="106" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="110" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£250</text>
<text x="640" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£250</text>
<line x1="410" y1="246" x2="640" y2="106" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.45" stroke-dasharray="5 4"/>
<text x="626.2" y="100" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">market price</text>
<line x1="410" y1="174.5" x2="640" y2="174.5" class="vs2" stroke="#eb6834" stroke-width="2.4"/>
<line x1="410" y1="177.5" x2="640" y2="177.5" class="vs1" stroke="#2a78d6" stroke-width="2.4"/>
<text x="414.6" y="166" font-size="10.5" fill="currentColor" font-weight="600">farmer receives £200</text>
<text x="640" y="196" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">baker pays £200</text>
<text x="525" y="300" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">harvest price, £ a tonne</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Gains and losses on the contract cancel exactly; each side has swapped an uncertain price for a certain one.</text>
</svg>

On the left, the contract on its own looks like a pure wager. If the harvest price is £150, the farmer gains £50 a tonne on the contract and the baker loses £50; at £250 it is the other way round. The two lines are mirror images and always add up to zero.

On the right is what actually matters. The farmer still sells real wheat at the market price, and the gain or loss on the contract tops that up or trims it to exactly £200. The baker still buys real wheat at the market price, and the contract evens it out to exactly £200. Neither has bet on anything. Each has swapped an uncertain price for a certain one, and both can plan, borrow and sleep better for it.

> **The first big idea.** Derivatives move risk around; they do not create or destroy it. So the most useful question to ask about any derivative is: **who now holds the risk, and can they afford it?** Most derivative disasters happen when risk lands with someone who cannot carry it, or when nobody can see where it went.

The [commodity guide](?slug=commodity-markets&lesson=lesson-04-hedging-speculation-and-arbitrage) works through a wheat farmer's hedge in full, including the two wrinkles that make real hedges imperfect. This guide takes the same machinery and applies it to everything else.

---

## The four jobs derivatives do

Strip away the jargon and derivatives do four jobs.

| Job | What it means | An example |
| --- | --- | --- |
| **Hedging** | Shedding a risk you do not want | An airline fixes next year's jet fuel price; an exporter fixes the exchange rate on future sales; a pension fund protects itself against falling interest rates |
| **Speculation** | Taking a view with less capital | A trader who expects the FTSE 100 to rise buys one index future rather than a basket of a hundred shares |
| **Arbitrage** | Keeping related prices consistent | If a future drifts away from the price of the underlying plus the cost of holding it, traders buy the cheap one and sell the dear one until the gap closes |
| **Price discovery and access** | Revealing what the market expects, and giving cheap exposure | Futures prices show the path markets expect for oil or for Bank of England rates; one contract buys exposure to a whole market |

Speculators are not the villains of this story. A hedger can only shed a risk if somebody takes it on, and speculators are usually the ones who absorb it, in return for the chance of a profit. When they become dangerous, as Lessons 9, 12 and 13 show, it is almost always because of leverage and cash, not because speculation is wicked in itself.

---

## How big is the market? Notional versus money at risk

Headlines love one number. At the end of 2025 the over-the-counter derivatives market (contracts agreed privately between two firms rather than on an exchange) had **$844.6 trillion** outstanding, according to the Bank for International Settlements. The world's entire economic output that year was about $117 trillion, so the market looks seven times bigger than the planet.

It is not, because that number measures the wrong thing. It is the **notional amount**: the size of the thing each contract refers to, not the money that changes hands. If two banks swap fixed for floating interest on £100 million, the £100 million is never paid by anyone. Each period, only the difference between the two interest payments moves, perhaps a few hundred thousand pounds a year. Add up every contract's reference amount and you get a vast number that nobody owes anybody.

So what *is* at risk? Strip the headline down in two steps.

<svg viewBox="0 0 680 360" width="100%" role="img" aria-label="Three squares drawn with areas to scale. Notional amount of over-the-counter derivatives outstanding at the end of 2025: $844.6 trillion, the face value of all contracts, most of which never changes hands. Gross market value, the cost of replacing every contract at current prices: $22.8 trillion. Gross credit exposure after legal netting between each pair of firms: $3.35 trillion, before any collateral is counted." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Only about $3.4 trillion of the $845 trillion is really at risk</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Over-the-counter derivatives at the end of 2025, US dollars. Square areas drawn to scale.</text>
<rect x="30" y="70" width="250" height="250" rx="2" class="vf1 vs1" fill="#2a78d6" stroke="#2a78d6" stroke-width="1.2" fill-opacity="0.08"><title>Notional outstanding: $844.6 trillion</title></rect>
<text x="46" y="104" font-size="22" fill="currentColor" font-weight="600">$844.6 trillion</text>
<text x="46" y="126" font-size="12.5" fill="currentColor" font-weight="600">Notional outstanding</text>
<text x="46" y="146" font-size="11.5" fill="currentColor" opacity="0.75">Face value of every contract;</text>
<text x="46" y="161" font-size="11.5" fill="currentColor" opacity="0.75">most of it never changes hands</text>
<rect x="360" y="90" width="41.1" height="41.1" rx="2" class="vf1" fill="#2a78d6" fill-opacity="0.3"><title>Gross market value: $22.8 trillion</title></rect>
<line x1="288" y1="110.5" x2="352" y2="110.5" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="352,110.5 345.6,113.4 345.6,107.7" fill="currentColor" fill-opacity="0.5"/>
<text x="417.1" y="106" font-size="17" fill="currentColor" font-weight="600">$22.8 trillion</text>
<text x="417.1" y="124" font-size="12" fill="currentColor" font-weight="600">Gross market value</text>
<text x="417.1" y="142" font-size="11" fill="currentColor" opacity="0.75">What it would cost to replace</text>
<text x="417.1" y="156" font-size="11" fill="currentColor" opacity="0.75">every contract at today's prices</text>
<line x1="380.5" y1="137.1" x2="380.5" y2="240" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="380.5,240 377.7,233.6 383.4,233.6" fill="currentColor" fill-opacity="0.5"/>
<text x="390.5" y="205" font-size="10.5" fill="currentColor" opacity="0.7">net what each pair of firms owes</text>
<rect x="372.7" y="248" width="15.7" height="15.7" rx="2" class="vf1" fill="#2a78d6"><title>Gross credit exposure after netting: $3.35 trillion</title></rect>
<text x="417.1" y="254" font-size="17" fill="currentColor" font-weight="600">$3.35 trillion</text>
<text x="417.1" y="272" font-size="12" fill="currentColor" font-weight="600">Credit exposure after netting</text>
<text x="417.1" y="290" font-size="11" fill="currentColor" opacity="0.75">What firms could lose if others failed,</text>
<text x="417.1" y="304" font-size="11" fill="currentColor" opacity="0.75">before counting any collateral</text>
<text x="20" y="350" font-size="10.5" fill="currentColor" opacity="0.6">Collateral posted against these exposures shrinks the money at risk further. Source: BIS OTC derivatives statistics.</text>
</svg>

The first step asks what it would cost to replace every contract at today's prices. That is the **gross market value**, $22.8 trillion. The second step recognises that most firms trade with each other in both directions, and that their contracts allow everything they owe each other to be offset into a single net amount if one of them fails (Lesson 8 explains the legal machinery). After that netting, the **credit exposure** is about **$3.35 trillion**: what firms could actually lose if their counterparties failed, before counting the collateral they have already collected, which shrinks it further still.

That is still a lot of money. But it is about one two-hundred-and-fiftieth of the headline, and it is smaller today than it was in 2008, even though the headline has since climbed to a record.

<svg viewBox="0 0 680 480" width="100%" role="img" aria-label="Two line charts of over-the-counter derivatives from mid-1998 to the end of 2025, from BIS data. Top: notional amount outstanding rose from $72 trillion to $710 trillion at the end of 2013, fell to $482 trillion in 2016 as banks compressed offsetting trades, and climbed to a record $846 trillion in mid-2025, ending 2025 at $845 trillion. Bottom: gross market value peaked at $35 trillion at the end of 2008 and was $22.8 trillion at the end of 2025, while credit exposure after netting stayed between about $1 trillion and $5 trillion throughout." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The headline soared; the money at risk stayed small</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Over-the-counter derivatives outstanding, US$ trillions, every half-year from 1998 to 2025</text>
<text x="20" y="76" font-size="12" fill="currentColor" font-weight="600">Notional amount</text>
<line x1="70" y1="240" x2="640" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="244" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="70" y1="190.7" x2="640" y2="190.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="194.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$300</text>
<line x1="70" y1="141.3" x2="640" y2="141.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="145.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$600</text>
<line x1="70" y1="92" x2="640" y2="92" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="96" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$900</text>
<polyline points="70,228.1 80.4,226.8 90.7,226.6 101.1,225.5 111.5,224.5 121.8,224.4 132.2,223.6 142.5,221.7 152.9,219.1 163.3,216.7 173.6,212.1 184,207.6 194.4,203.8 204.7,197.5 215.1,193.5 225.5,190.8 235.8,178.7 246.2,171.2 256.5,156.5 266.9,143.6 277.3,129.4 287.6,141.6 298,142.2 308.4,140.7 318.7,144.2 329.1,141.2 339.5,123.8 349.8,135.7 360.2,136.7 370.5,137.7 380.9,125.6 391.3,123.2 401.6,126.4 412,136.8 422.4,149.3 432.7,159 443.1,149.1 453.5,160.7 463.8,150.8 474.2,152.5 484.5,142.2 494.9,150.5 505.3,134.7 515.6,148.2 526,140.2 536.4,144.3 546.7,139.7 557.1,141.6 567.5,136 577.8,138.4 588.2,122.8 598.5,130.3 608.9,120 619.3,125 629.6,100.9 640,101.1" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="391.3" cy="123.2" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>End-2013: $710.1 trillion</title></circle>
<text x="391.3" y="113.2" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">$710tn, end-2013</text>
<circle cx="453.5" cy="160.7" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Low after compression: $482.4 trillion, 2016-S2</title></circle>
<text x="453.5" y="180.7" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.85">$482tn: offsetting trades compressed</text>
<circle cx="640" cy="101.1" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>End-2025: $844.6 trillion</title></circle>
<text x="632" y="95.1" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">$845tn</text>
<text x="20" y="280" font-size="12" fill="currentColor" font-weight="600">Gross market value and credit exposure after netting</text>
<line x1="70" y1="420" x2="640" y2="420" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="424" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="70" y1="389" x2="640" y2="389" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="393" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$10</text>
<line x1="70" y1="358" x2="640" y2="358" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="362" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$20</text>
<line x1="70" y1="327" x2="640" y2="327" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="331" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$30</text>
<line x1="70" y1="296" x2="640" y2="296" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="300" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$40</text>
<polyline points="70,412.1 80.4,410.1 90.7,411.9 101.1,411.3 111.5,412.1 121.8,410.2 132.2,410.6 142.5,408.3 152.9,406.2 163.3,400.3 173.6,395.5 184,398.4 194.4,400.3 204.7,391 215.1,387.1 225.5,389.7 235.8,389.1 246.2,389.8 256.5,385.9 266.9,371.5 277.3,357.5 287.6,311.7 298,342.3 308.4,353.9 318.7,343.4 329.1,354 339.5,359.5 349.8,335.4 360.2,340.9 370.5,342.6 380.9,357.3 391.3,361.7 401.6,366 412,355.4 422.4,372 432.7,375.1 443.1,354.5 453.5,373.7 463.8,380.7 474.2,386 484.5,388 494.9,390 505.3,382.6 515.6,384 526,372 536.4,371.1 546.7,380.9 557.1,381.4 567.5,363.1 577.8,355.7 588.2,358.5 598.5,363.8 608.9,367.8 619.3,365.4 629.6,352.4 640,349.3" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="70,416.3 80.4,415.9 90.7,416.5 101.1,416.8 111.5,417.1 121.8,416.7 132.2,416.8 142.5,416.4 152.9,415.9 163.3,415.3 173.6,414.6 184,413.9 194.4,415.4 204.7,413.6 215.1,414.1 225.5,414.1 235.8,413.7 246.2,413.7 256.5,411.7 266.9,409.9 277.3,408 287.6,404.5 298,408.4 308.4,409.1 318.7,408.9 329.1,409.2 339.5,410.8 349.8,407.8 360.2,408.6 370.5,408.8 380.9,408.3 391.3,410.6 401.6,411.2 412,409.6 422.4,411.1 432.7,411.1 443.1,408.5 453.5,409.8 463.8,411.4 474.2,411.7 484.5,412 494.9,413 505.3,411.7 515.6,412.7 526,410.1 536.4,409.6 546.7,411.6 557.1,412.1 567.5,410 577.8,409 588.2,409 598.5,410.6 608.9,411.3 619.3,410.8 629.6,410.8 640,409.6" class="vs7" stroke="#4a3aa7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="287.6" cy="311.7" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Gross market value peak: $34.9 trillion, end-2008</title></circle>
<text x="295.6" y="315.7" font-size="10.5" fill="currentColor" font-weight="600">$35tn, end-2008</text>
<text x="636" y="341.3" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">$22.8tn</text>
<text x="636" y="402.6" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">$3.35tn</text>
<text x="101.1" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2000</text>
<text x="204.7" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2005</text>
<text x="308.4" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2010</text>
<text x="412" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2015</text>
<text x="515.6" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2020</text>
<text x="619.3" y="438" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<line x1="70" y1="454" x2="88" y2="454" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="94" y="458" font-size="11.5" fill="currentColor" opacity="0.85">Gross market value</text>
<line x1="219.4" y1="454" x2="237.4" y2="454" class="vs7" stroke="#4a3aa7" stroke-width="2.5" stroke-linecap="round"/>
<text x="243.4" y="458" font-size="11.5" fill="currentColor" opacity="0.85">Credit exposure after netting</text>
<text x="20" y="474" font-size="10.5" fill="currentColor" opacity="0.6">Source: BIS OTC derivatives statistics.</text>
</svg>

The headline fell for a few years after 2013, not because derivatives went out of fashion but because banks used **compression**: identifying chains of trades that cancel each other out and tearing them up. It has since climbed to a record, as uncertainty about trade, interest rates and geopolitics in 2025 drove a surge in hedging. Gross market value, the better measure of what is at stake, peaked during the financial crisis of 2008, when prices moved violently enough to make old contracts very valuable to one side.

What are all these contracts about? Overwhelmingly, interest rates.

<svg viewBox="0 0 680 260" width="100%" role="img" aria-label="Bar chart of over-the-counter derivatives notional outstanding by underlying risk at the end of 2025, from BIS data: Interest rates $669.5 trillion (79.3%); Currencies (incl. gold) $149.8 trillion (17.7%); Equities $11.9 trillion (1.4%); Credit $11.3 trillion (1.3%); Commodities $2.8 trillion (0.3%). Interest rate contracts are about four-fifths of the total." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Four-fifths of the market is about interest rates</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Over-the-counter notional outstanding by underlying, end of 2025, US$ trillions</text>
<line x1="210" y1="60" x2="210" y2="222" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="210" y="238" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="307.8" y1="60" x2="307.8" y2="222" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="307.8" y="238" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">200</text>
<line x1="405.6" y1="60" x2="405.6" y2="222" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="405.6" y="238" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">400</text>
<line x1="503.3" y1="60" x2="503.3" y2="222" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="503.3" y="238" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">600</text>
<line x1="601.1" y1="60" x2="601.1" y2="222" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="601.1" y="238" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">800</text>
<text x="200" y="81" font-size="12" fill="currentColor" text-anchor="end" opacity="0.9">Interest rates</text>
<path d="M210,66 L534.3,66 Q537.3,66 537.3,69 L537.3,84 Q537.3,87 534.3,87 L210,87 Z" class="vf1" fill="#2a78d6"><title>Interest rates: $669.5 trillion</title></path>
<text x="545.3" y="81.5" font-size="11.5" fill="currentColor" font-weight="600">$669.5tn (79%)</text>
<text x="200" y="112" font-size="12" fill="currentColor" text-anchor="end" opacity="0.9">Currencies (incl. gold)</text>
<path d="M210,97 L280.2,97 Q283.2,97 283.2,100 L283.2,115 Q283.2,118 280.2,118 L210,118 Z" class="vf1" fill="#2a78d6"><title>Currencies (incl. gold): $149.8 trillion</title></path>
<text x="291.2" y="112.5" font-size="11.5" fill="currentColor" font-weight="600">$149.8tn (18%)</text>
<text x="200" y="143" font-size="12" fill="currentColor" text-anchor="end" opacity="0.9">Equities</text>
<path d="M210,128 L212.8,128 Q215.8,128 215.8,131 L215.8,146 Q215.8,149 212.8,149 L210,149 Z" class="vf1" fill="#2a78d6"><title>Equities: $11.9 trillion</title></path>
<text x="223.8" y="143.5" font-size="11.5" fill="currentColor" font-weight="600">$11.9tn (1%)</text>
<text x="200" y="174" font-size="12" fill="currentColor" text-anchor="end" opacity="0.9">Credit</text>
<path d="M210,159 L212.5,159 Q215.5,159 215.5,162 L215.5,177 Q215.5,180 212.5,180 L210,180 Z" class="vf1" fill="#2a78d6"><title>Credit: $11.3 trillion</title></path>
<text x="223.5" y="174.5" font-size="11.5" fill="currentColor" font-weight="600">$11.3tn (1%)</text>
<text x="200" y="205" font-size="12" fill="currentColor" text-anchor="end" opacity="0.9">Commodities</text>
<path d="M210,190 L210,190 Q211.4,190 211.4,191.4 L211.4,209.6 Q211.4,211 210,211 L210,211 Z" class="vf1" fill="#2a78d6"><title>Commodities: $2.8 trillion</title></path>
<text x="219.4" y="205.5" font-size="11.5" fill="currentColor" font-weight="600">$2.8tn</text>
<text x="20" y="254" font-size="10.5" fill="currentColor" opacity="0.6">Source: BIS OTC derivatives statistics. Exchange-traded contracts are counted separately.</text>
</svg>

Interest rate contracts make up about four-fifths of the total, and interest rate swaps alone account for **$545 trillion**. Currencies come a distant second. Equity, credit and commodity derivatives, which generate most of the headlines, are small by comparison.

### Exchange-traded derivatives are counted differently

Exchanges count contracts rather than dollars. In 2025 the world traded **119.3 billion** futures and options contracts, according to the Futures Industry Association: down 42% from a record of about 206 billion in 2024. The fall came almost entirely from one place. India's regulator curbed speculation in cheap, short-dated index options, and the number of options traded worldwide halved, while futures volumes actually rose. Lessons 10 and 11 tell that story.

> **Notional is not money.** When you see a giant number, ask two questions: what is it worth at today's prices, and what is left after netting and collateral? A $845 trillion market puts about $3.4 trillion genuinely at risk.

---

## Older than you think

Derivatives are often described as a modern invention, cooked up by mathematicians in the 1980s. In fact they are older than coins.

<svg viewBox="0 0 680 560" width="100%" role="img" aria-label="Timeline of ten milestones in the history of derivatives: c. 1750 BC, Mesopotamia: Clay tablets record promises to deliver grain later at a price fixed today; c. 600 BC, Miletus: Thales buys the right to rent olive presses before a bumper harvest; 1730, Osaka: The shogunate recognises rice futures on the Dojima exchange; 1848 and 1865, Chicago: The Board of Trade opens, then standardises its grain futures; 1972, Chicago: Currency futures arrive as fixed exchange rates break down; 1973, Chicago: The first options exchange opens; Black and Scholes publish their formula; 1981, New York: IBM and the World Bank sign a landmark currency swap; 1985, New York: Dealers found ISDA to standardise swap contracts; 1994, London and New York: A JPMorgan team arranges an early credit default swap; 2009, Pittsburgh: The G20 orders standard swaps to be centrally cleared and reported." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Four thousand years of promises about the future</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Ten milestones; spacing is by event, not by date</text>
<rect x="20" y="68" width="4" height="86" rx="2" class="vf4" fill="#eda100"/>
<text x="32" y="82" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">Ancient</text>
<rect x="20" y="162" width="4" height="86" rx="2" class="vf3" fill="#1baf7a"/>
<text x="32" y="176" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">Organised</text>
<text x="32" y="190" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">futures</text>
<rect x="20" y="256" width="4" height="86" rx="2" class="vf1" fill="#2a78d6"/>
<text x="32" y="270" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">The 1970s</text>
<text x="32" y="284" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">revolution</text>
<rect x="20" y="350" width="4" height="133" rx="2" class="vf7" fill="#4a3aa7"/>
<text x="32" y="364" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">The swap</text>
<text x="32" y="378" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">era</text>
<rect x="20" y="491" width="4" height="39" rx="2" class="vf2" fill="#eb6834"/>
<text x="32" y="505" font-size="11" fill="currentColor" font-weight="600" opacity="0.65">After 2008</text>
<line x1="150" y1="80" x2="150" y2="503" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
<circle cx="150" cy="82" r="5" class="vf4 vring" fill="#eda100" stroke="#ffffff" stroke-width="2"><title>c. 1750 BC, Mesopotamia</title></circle>
<text x="166" y="86" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">c. 1750 BC</text>
<text x="240.8" y="86" font-size="11" fill="currentColor" opacity="0.6">Mesopotamia</text>
<text x="166" y="103" font-size="12" fill="currentColor" opacity="0.9">Clay tablets record promises to deliver grain later at a price fixed today</text>
<circle cx="150" cy="129" r="5" class="vf4 vring" fill="#eda100" stroke="#ffffff" stroke-width="2"><title>c. 600 BC, Miletus</title></circle>
<text x="166" y="133" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">c. 600 BC</text>
<text x="233.5" y="133" font-size="11" fill="currentColor" opacity="0.6">Miletus</text>
<text x="166" y="150" font-size="12" fill="currentColor" opacity="0.9">Thales buys the right to rent olive presses before a bumper harvest</text>
<circle cx="150" cy="176" r="5" class="vf3 vring" fill="#1baf7a" stroke="#ffffff" stroke-width="2"><title>1730, Osaka</title></circle>
<text x="166" y="180" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1730</text>
<text x="205" y="180" font-size="11" fill="currentColor" opacity="0.6">Osaka</text>
<text x="166" y="197" font-size="12" fill="currentColor" opacity="0.9">The shogunate recognises rice futures on the Dojima exchange</text>
<circle cx="150" cy="223" r="5" class="vf3 vring" fill="#1baf7a" stroke="#ffffff" stroke-width="2"><title>1848 and 1865, Chicago</title></circle>
<text x="166" y="227" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1848 and 1865</text>
<text x="263.2" y="227" font-size="11" fill="currentColor" opacity="0.6">Chicago</text>
<text x="166" y="244" font-size="12" fill="currentColor" opacity="0.9">The Board of Trade opens, then standardises its grain futures</text>
<circle cx="150" cy="270" r="5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>1972, Chicago</title></circle>
<text x="166" y="274" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1972</text>
<text x="205" y="274" font-size="11" fill="currentColor" opacity="0.6">Chicago</text>
<text x="166" y="291" font-size="12" fill="currentColor" opacity="0.9">Currency futures arrive as fixed exchange rates break down</text>
<circle cx="150" cy="317" r="5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>1973, Chicago</title></circle>
<text x="166" y="321" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1973</text>
<text x="205" y="321" font-size="11" fill="currentColor" opacity="0.6">Chicago</text>
<text x="166" y="338" font-size="12" fill="currentColor" opacity="0.9">The first options exchange opens; Black and Scholes publish their formula</text>
<circle cx="150" cy="364" r="5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>1981, New York</title></circle>
<text x="166" y="368" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1981</text>
<text x="205" y="368" font-size="11" fill="currentColor" opacity="0.6">New York</text>
<text x="166" y="385" font-size="12" fill="currentColor" opacity="0.9">IBM and the World Bank sign a landmark currency swap</text>
<circle cx="150" cy="411" r="5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>1985, New York</title></circle>
<text x="166" y="415" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1985</text>
<text x="205" y="415" font-size="11" fill="currentColor" opacity="0.6">New York</text>
<text x="166" y="432" font-size="12" fill="currentColor" opacity="0.9">Dealers found ISDA to standardise swap contracts</text>
<circle cx="150" cy="458" r="5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>1994, London and New York</title></circle>
<text x="166" y="462" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1994</text>
<text x="205" y="462" font-size="11" fill="currentColor" opacity="0.6">London and New York</text>
<text x="166" y="479" font-size="12" fill="currentColor" opacity="0.9">A JPMorgan team arranges an early credit default swap</text>
<circle cx="150" cy="505" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2009, Pittsburgh</title></circle>
<text x="166" y="509" font-size="12.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">2009</text>
<text x="205" y="509" font-size="11" fill="currentColor" opacity="0.6">Pittsburgh</text>
<text x="166" y="526" font-size="12" fill="currentColor" opacity="0.9">The G20 orders standard swaps to be centrally cleared and reported</text>
<text x="20" y="550" font-size="10.5" fill="currentColor" opacity="0.6">Sources: Swan, Building the Global Market; Aristotle, Politics; CME Group; ISDA; G20 Pittsburgh statement.</text>
</svg>

Clay tablets from ancient Mesopotamia, nearly four thousand years old, record promises to deliver grain at a future date for a price agreed in advance. Thales's olive presses were the first recorded option. In 1730 Japan's shogunate officially recognised the Dojima Rice Exchange in Osaka, where merchants traded standardised contracts for future delivery of rice: the first organised futures market. The Chicago Board of Trade opened in 1848 and in 1865 standardised its grain contracts, fixing the quality, the quantity and the delivery terms, which is the definition of a future that still holds today.

The modern market was born in the 1970s, out of chaos. The system of fixed exchange rates set up after the Second World War collapsed between 1971 and 1973, oil prices quadrupled and inflation surged. Prices that had been stable for a generation began to swing, and businesses needed ways to protect themselves. Chicago launched **currency futures** in 1972. The Chicago Board Options Exchange opened in April 1973, the same year that Fischer Black and Myron Scholes published the formula that finally put a price on an option (Lesson 3 explains the idea behind it).

Swaps followed. In 1981 IBM and the World Bank signed a landmark **currency swap**, and in 1985 dealers founded the International Swap Dealers Association, now ISDA, to standardise the contracts. In the 1990s a team at JPMorgan helped invent the **credit default swap**, a contract that pays out if a borrower defaults; within fifteen years it would sit at the heart of the 2008 crisis. In 2009, in the aftermath, the leaders of the G20 agreed that standard over-the-counter derivatives should be centrally cleared and reported to regulators, rebuilding the plumbing that Lesson 8 describes.

---

## The three ideas that unlock everything else

Three ideas explain most of what you will meet in this guide. You have just met the first; every later lesson leans on all three.

> 1. **Derivatives move risk around; they do not create or destroy it.** Ask who now holds the risk, and whether they can afford it.
> 2. **Leverage turns small price moves into large cash demands.** Most derivatives let you control a large exposure with a small deposit, called margin. That magnifies gains and losses, but the less obvious effect is timing: losses are collected in cash, often every day. Many famous blow-ups were not about being wrong for ever; they were about running out of cash before being proved right.
> 3. **Options put a price on uncertainty.** Futures and swaps lock in a price; options sell you a choice. A choice is worth more when the future is more uncertain, so an option's price is really a price for volatility. Think of options as insurance whose premium rises with the storm forecast.

---

## Check yourself

**1. The farmer and the baker agree their forward at £200 a tonne for 1,000 tonnes. The harvest price turns out to be £230. Who pays whom on the contract, how much, and what price does each end up with?**

<details>
<summary>Show the answer</summary>

The market is £30 above the contract price, so the farmer, who agreed to sell at £200, pays the baker £30 × 1,000 = **£30,000**. The farmer sells the real wheat at £230 a tonne and hands £30 of it to the baker, ending with **£200 a tonne**. The baker buys at £230 and receives £30 back, so pays **£200 a tonne** all in. The contract was zero-sum; both outcomes were fixed.

</details>

**2. Two banks swap fixed for floating interest on £100 million. This year the fixed rate is 4.0% and the floating rate averages 3.5%. How much money changes hands, and in which direction?**

<details>
<summary>Show the answer</summary>

The fixed payer owes 4.0% × £100m = £4.0m and the floating payer owes 3.5% × £100m = £3.5m. Only the difference moves: the fixed payer pays **£500,000** to the floating payer. The £100 million notional never changes hands, which is why notional figures overstate the money at risk.

</details>

**3. If gross market value is $22.8 trillion and netting removes 85.3% of it, how much credit exposure is left? What is that as a share of the $844.6 trillion notional?**

<details>
<summary>Show the answer</summary>

$22.8tn × (1 − 0.853) = **$3.35 trillion**, about **0.4%** of the notional amount. And that is before collateral, which covers much of what remains.

</details>

**4. Which of the four jobs is each of these doing? (a) A UK pension fund buys swaps that gain value if long-term interest rates fall. (b) A hedge fund buys FTSE 100 futures because it expects a rally. (c) A trader buys a basket of shares and sells the matching index future because the future is priced £15 too high.**

<details>
<summary>Show the answer</summary>

(a) **Hedging**: the fund's promises to pensioners become more expensive when rates fall, so the swaps offset a risk it already has. (b) **Speculation**: taking a view with less capital than buying the shares. (c) **Arbitrage**: buying the cheap thing and selling the dear one until the prices line up again.

</details>

---

## What to carry into Lesson 2

- A derivative is a **contract whose value depends on something else**, the underlying. Almost anything measurable can be one.
- Every derivative is **zero-sum between its two sides**, but the sides usually want different things: one sheds a risk and the other takes it on. Always ask **who holds the risk, and can they afford it**.
- Derivatives do four jobs: **hedging, speculation, arbitrage, and price discovery and access**.
- **Notional is not money.** The $844.6 trillion headline shrinks to $22.8 trillion of market value and about $3.4 trillion of exposure after netting, before collateral.
- The idea is ancient; the modern market was born in the volatile 1970s, and rebuilt after 2008.

Lesson 2 opens the toolbox. Almost every derivative, however exotic, is assembled from just four building blocks, and once you can recognise them you can take apart anything.

---

## Sources

- [BIS: OTC derivatives statistics (data portal), end-December 2025](https://data.bis.org/topics/OTC_DER)
- [ISDA: Key trends in the size and composition of OTC derivatives markets in the second half of 2025](https://www.isda.org/2026/07/09/key-trends-in-the-size-and-composition-of-otc-derivatives-markets-in-the-second-half-of-2025/)
- [FIA MarketVoice: Global ETD trading fell in 2025 as India crackdown hits options volume](https://www.fia.org/marketvoice/articles/global-etd-trading-fell-2025-india-crackdown-hits-options-volume)
- [IMF: World Economic Outlook databases (October 2025 edition)](https://www.imf.org/en/Publications/SPROLLS/world-economic-outlook-databases)
- [Aristotle, Politics, Book I, on Thales and the olive presses (Perseus Digital Library)](http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0058%3Abook%3D1%3Asection%3D1259a)
- [CME Group Education: Midwest grain trade and the history of futures exchanges](https://www.cmegroup.com/education/courses/introduction-to-futures/midwest-grain-trade-history-of-futures-exchanges)
