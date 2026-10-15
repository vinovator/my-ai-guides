# Lesson 2: The Four Building Blocks

*Forwards, futures, options and swaps: what each one promises, the weakness each was invented to fix, and how every other product, from a contract for difference to a structured savings plan, is assembled from them.*

---

## Four shapes, endless combinations

The derivatives business has a reputation for bewildering complexity: swaptions, autocallables, quantos, turbos, total return swaps, credit-linked notes. It is mostly an illusion. Almost every derivative, however exotic its name, is built from just **four building blocks**, in the way that every word in this sentence is built from twenty-six letters.

<svg viewBox="0 0 680 420" width="100%" role="img" aria-label="Four small diagrams, one per building block. Forward: a straight line, gaining one for one above the agreed price and losing below it, settled once at the end. Future: the same deal, but gains and losses are paid in cash every day, shown as daily bars that add up to the same total. Option: a hockey stick, losing only the premium if the price ends below the strike and gaining above it. Swap: a series of net payments on set dates, some paid and some received, depending on where the floating rate sets each period." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The four building blocks at a glance</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">What the buyer gets from each one. Illustrative.</text>
<rect x="20" y="62" width="310" height="160" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="34" y="84" font-size="13" fill="currentColor" font-weight="600">Forward</text>
<text x="34" y="101" font-size="10.5" fill="currentColor" opacity="0.72">One settlement at the end, the full gain or loss</text>
<line x1="50" y1="158.5" x2="310" y2="158.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<polyline points="50,205 310,112" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="184" y="173.5" font-size="10" fill="currentColor" opacity="0.7">agreed price</text>
<text x="290.5" y="135.2" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">gain</text>
<text x="115" y="198" font-size="10" fill="currentColor" opacity="0.7">loss</text>
<rect x="350" y="62" width="310" height="160" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="364" y="84" font-size="13" fill="currentColor" font-weight="600">Future</text>
<text x="364" y="101" font-size="10.5" fill="currentColor" opacity="0.72">The same deal, settled in cash every day</text>
<line x1="380" y1="158" x2="640" y2="158" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<path d="M383,158 L383,147.4 Q383,145.4 385,145.4 L395,145.4 Q397,145.4 397,147.4 L397,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 1: received 3</title></path>
<path d="M404.7,158 L404.7,177 Q404.7,179 406.7,179 L416.7,179 Q418.7,179 418.7,177 L418.7,158 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Day 2: paid 5</title></path>
<path d="M426.3,158 L426.3,172.8 Q426.3,174.8 428.3,174.8 L438.3,174.8 Q440.3,174.8 440.3,172.8 L440.3,158 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Day 3: paid 4</title></path>
<path d="M448,158 L448,134.8 Q448,132.8 450,132.8 L460,132.8 Q462,132.8 462,134.8 L462,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 4: received 6</title></path>
<path d="M469.7,158 L469.7,151.6 Q469.7,149.6 471.7,149.6 L481.7,149.6 Q483.7,149.6 483.7,151.6 L483.7,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 5: received 2</title></path>
<path d="M491.3,158 L491.3,168.6 Q491.3,170.6 493.3,170.6 L503.3,170.6 Q505.3,170.6 505.3,168.6 L505.3,158 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Day 6: paid 3</title></path>
<path d="M513,158 L513,126.4 Q513,124.4 515,124.4 L525,124.4 Q527,124.4 527,126.4 L527,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 7: received 8</title></path>
<path d="M534.7,158 L534.7,143.2 Q534.7,141.2 536.7,141.2 L546.7,141.2 Q548.7,141.2 548.7,143.2 L548.7,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 8: received 4</title></path>
<path d="M556.3,158 L556.3,164.4 Q556.3,166.4 558.3,166.4 L568.3,166.4 Q570.3,166.4 570.3,164.4 L570.3,158 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Day 9: paid 2</title></path>
<path d="M578,158 L578,139 Q578,137 580,137 L590,137 Q592,137 592,139 L592,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 10: received 5</title></path>
<path d="M599.7,158 L599.7,147.4 Q599.7,145.4 601.7,145.4 L611.7,145.4 Q613.7,145.4 613.7,147.4 L613.7,158 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Day 11: received 3</title></path>
<path d="M621.3,158 L621.3,160.2 Q621.3,162.2 623.3,162.2 L633.3,162.2 Q635.3,162.2 635.3,160.2 L635.3,158 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Day 12: paid 1</title></path>
<text x="640" y="212" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">twelve days; net +16, the same as a forward</text>
<rect x="20" y="238" width="310" height="160" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="34" y="260" font-size="13" fill="currentColor" font-weight="600">Option</text>
<text x="34" y="277" font-size="10.5" fill="currentColor" opacity="0.72">A right, not an obligation, for a premium</text>
<line x1="50" y1="357.6" x2="310" y2="357.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<polyline points="50,371.2 180,371.2 310,303.5" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="180" y="352.6" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.7">strike</text>
<text x="56.5" y="386.2" font-size="10" fill="currentColor" opacity="0.7">lose only the premium</text>
<text x="290.5" y="334" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">gain</text>
<rect x="350" y="238" width="310" height="160" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="364" y="260" font-size="13" fill="currentColor" font-weight="600">Swap</text>
<text x="364" y="277" font-size="10.5" fill="currentColor" opacity="0.72">Streams of payments exchanged on set dates</text>
<line x1="380" y1="336" x2="640" y2="336" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<path d="M386,336 L386,355 Q386,357 388,357 L404,357 Q406,357 406,355 L406,336 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Payment date 1: net paid 4</title></path>
<path d="M418.5,336 L418.5,344.5 Q418.5,346.5 420.5,346.5 L436.5,346.5 Q438.5,346.5 438.5,344.5 L438.5,336 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Payment date 2: net paid 2</title></path>
<path d="M451,336 L451,332.8 Q451,330.8 453,330.8 L469,330.8 Q471,330.8 471,332.8 L471,336 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Payment date 3: net received 1</title></path>
<path d="M483.5,336 L483.5,322.2 Q483.5,320.2 485.5,320.2 L501.5,320.2 Q503.5,320.2 503.5,322.2 L503.5,336 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Payment date 4: net received 3</title></path>
<path d="M516,336 L516,339.2 Q516,341.2 518,341.2 L534,341.2 Q536,341.2 536,339.2 L536,336 Z" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>Payment date 5: net paid 1</title></path>
<path d="M548.5,336 L548.5,327.5 Q548.5,325.5 550.5,325.5 L566.5,325.5 Q568.5,325.5 568.5,327.5 L568.5,336 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Payment date 6: net received 2</title></path>
<path d="M581,336 L581,317 Q581,315 583,315 L599,315 Q601,315 601,317 L601,336 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Payment date 7: net received 4</title></path>
<path d="M613.5,336 L613.5,311.8 Q613.5,309.8 615.5,309.8 L631.5,309.8 Q633.5,309.8 633.5,311.8 L633.5,336 Z" class="vf1" fill="#2a78d6" fill-opacity="0.85"><title>Payment date 8: net received 5</title></path>
<text x="640" y="390" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">each date: only the net difference moves</text>
<rect x="20" y="402.8" width="11" height="11" rx="2" class="vf1" fill="#2a78d6"/>
<text x="36" y="412" font-size="11.5" fill="currentColor" opacity="0.85">Cash received</text>
<rect x="133" y="402.8" width="11" height="11" rx="2" class="vf2" fill="#eb6834"/>
<text x="149" y="412" font-size="11.5" fill="currentColor" opacity="0.85">Cash paid</text>
</svg>

Learn the four shapes and you can take apart anything you are ever sold. This lesson introduces each block through the problem it solves, then shows how they relate to each other, and finishes by dismantling a real retail product to see what is inside.

---

## 1. The forward: a private promise to trade later at a price fixed today

Think of ordering a made-to-measure suit. You agree the price today, then collect and pay for it in two months, whatever has happened to the price of cloth in the meantime. A **forward** works the same way. Two parties, usually a company and its bank, privately agree to trade a fixed amount of something on a future date at a price fixed now.

**A worked example.** A UK manufacturer has sold machinery to an American customer and will receive **$10 million in six months**. Its costs are in pounds, so what matters is how many pounds those dollars will buy. If sterling strengthens in the meantime, the dollars will be worth fewer pounds. The company asks its bank for a six-month forward and agrees to sell the $10 million at **$1.30 per pound**, which locks in $10m ÷ 1.30 = **£7.69 million**.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart of a currency forward hedge. A UK manufacturer will receive $10 million in six months and agrees a forward at $1.30 per pound, locking in £7.69 million whatever the exchange rate. Unhedged, the dollars would be worth £7.14 million if sterling rose to $1.40, so the forward protected about £549,000, and £8.33 million if sterling fell to $1.20, so the forward gave up about £641,000 of upside." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A forward swaps an unknown amount for a known one</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Sterling value of $10 million in six months, against the exchange rate on the day. Illustrative.</text>
<line x1="90" y1="270" x2="560" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£6.5m</text>
<line x1="90" y1="230" x2="560" y2="230" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="234" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£7.0m</text>
<line x1="90" y1="190" x2="560" y2="190" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="194" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£7.5m</text>
<line x1="90" y1="150" x2="560" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="154" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£8.0m</text>
<line x1="90" y1="110" x2="560" y2="110" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="114" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£8.5m</text>
<line x1="90" y1="70" x2="560" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£9.0m</text>
<text x="90" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.15</text>
<text x="168.3" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.20</text>
<text x="246.7" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.25</text>
<text x="325" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.30</text>
<text x="403.3" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.35</text>
<text x="481.7" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.40</text>
<text x="560" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$1.45</text>
<text x="325" y="306" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">dollars per pound on the settlement date (higher means a stronger pound)</text>
<polyline points="90,94.3 97.8,97.4 105.7,100.3 113.5,103.3 121.3,106.2 129.2,109.1 137,112 144.8,114.9 152.7,117.7 160.5,120.5 168.3,123.3 176.2,126.1 184,128.8 191.8,131.6 199.7,134.3 207.5,136.9 215.3,139.6 223.2,142.2 231,144.8 238.8,147.4 246.7,150 254.5,152.5 262.3,155.1 270.2,157.6 278,160.1 285.8,162.5 293.7,165 301.5,167.4 309.3,169.8 317.2,172.2 325,174.6 332.8,177 340.7,179.3 348.5,181.6 356.3,183.9 364.2,186.2 372,188.5 379.8,190.7 387.7,193 395.5,195.2 403.3,197.4 411.2,199.6 419,201.8 426.8,203.9 434.7,206.1 442.5,208.2 450.3,210.3 458.2,212.4 466,214.5 473.8,216.5 481.7,218.6 489.5,220.6 497.3,222.6 505.2,224.6 513,226.6 520.8,228.6 528.7,230.6 536.5,232.5 544.3,234.4 552.2,236.4 560,238.3" class="vs2" stroke="#eb6834" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="90" y1="174.6" x2="560" y2="174.6" class="vs1" stroke="#2a78d6" stroke-width="2.4"/>
<text x="568" y="178.6" font-size="11.5" fill="currentColor" font-weight="600">hedged: £7.69m</text>
<text x="568" y="242.3" font-size="11.5" fill="currentColor" font-weight="600">unhedged</text>
<line x1="481.7" y1="218.6" x2="481.7" y2="174.6" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.6"/>
<circle cx="481.7" cy="218.6" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>At $1.40: unhedged £7.14m</title></circle>
<text x="489.7" y="200.6" font-size="11" fill="currentColor" opacity="0.9">forward protected £549k</text>
<line x1="168.3" y1="123.3" x2="168.3" y2="174.6" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.6"/>
<circle cx="168.3" cy="123.3" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>At $1.20: unhedged £8.33m</title></circle>
<text x="176.3" y="192.6" font-size="11" fill="currentColor" opacity="0.9">forward gave up £641k</text>
<circle cx="325" cy="174.6" r="5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Forward rate $1.30: £7.69m</title></circle>
</svg>

Six months later, one of two things has happened.

- **Sterling has strengthened to $1.40.** Unhedged, the dollars would have bought only £7.14 million. The forward protected about **£549,000**.
- **Sterling has weakened to $1.20.** Unhedged, the dollars would have bought £8.33 million. The forward cost about **£641,000** of upside.

That is the bargain every hedger strikes: **certainty in exchange for giving up the lucky outcome**. The company is not trying to win on currencies; it is trying to make machines and know what it will be paid for them. The flat blue line is the whole point.

Forwards are endlessly flexible: any amount, any date, any underlying the two sides can agree on. They have two weaknesses, and the next block exists to fix them. The first is **counterparty risk**: if the bank fails before the settlement date, the promise may be worth nothing, and the company is unhedged at exactly the moment the hedge mattered. The second is that a forward is **hard to exit**: the only person who can release you from it is the one on the other side.

---

## 2. The future: a standardised forward with a guarantee

A **future** is the same promise, but standardised and traded on an exchange. Every contract specifies exactly what is traded, how much, of what quality, and on which dates. Because everyone trades the identical contract, strangers can deal with each other on a screen without negotiating anything except the price, and anyone can get out of a position at any moment by making the opposite trade.

| Contract | Exchange | One contract covers | Illustrative level | Value of one contract |
| --- | --- | ---: | ---: | ---: |
| FTSE 100 index | ICE Futures Europe | £10 per index point | 10,000 | £100,000 |
| S&P 500 index (E-mini) | CME | $50 per index point | 7,800 | $390,000 |
| Nifty 50 index | NSE | 65 units of the index | 22,500 | ₹14.6 lakh (₹1.46 million) |
| Brent crude oil | ICE Futures Europe | 1,000 barrels | $100 a barrel | $100,000 |

The last column is worth working out before trading anything: one FTSE contract is a £100,000 position in the British stock market.

The trick that makes futures safe is the **clearing house**. Once two traders are matched, the clearing house steps between them and becomes the buyer to every seller and the seller to every buyer. Neither side needs to trust the other, only the clearing house, so counterparty risk almost disappears.

The price of that guarantee is **daily settlement**. Every evening the clearing house revalues every position at that day's closing price and moves cash from the side that lost money that day to the side that gained, a process called **marking to market**. A forward settles once, at the end. A future settles a little every day, and the total is the same.

That solves the forward's problem and creates a new one. Losses can no longer pile up unseen, but **you must find cash every day**, even if you are certain you will be right in the end. Lesson 6 follows a futures account day by day and shows why this is the second big idea of the guide.

Most futures are closed before they expire, and only a small share ever ends in delivery of anything. Financial futures usually settle in cash; many commodity futures can end with a real cargo changing hands, which, as the [commodity guide](?slug=commodity-markets&lesson=lesson-03-physical-barrels-paper-contracts) explains, is what anchors the paper price to the physical one.

---

## 3. The option: the right, but not the obligation

An **option** gives its buyer the right to buy (a **call**) or to sell (a **put**) something at a fixed price, called the **strike**, on or before a set date. The buyer pays an upfront **premium** and then uses the right only if it pays to. If it does not, the buyer walks away, and the most they can lose is the premium.

The seller, also called the **writer**, keeps the premium whatever happens but carries the obligation. If the buyer exercises, the seller must deliver, and the cost can be many times the premium collected.

This lopsidedness is what makes options different from the other three blocks. A forward, a future and a swap are **symmetric**: you gain one for one when the price moves your way and lose one for one when it does not. An option is **asymmetric**, which is why its payoff, in the figure at the top of the lesson, bends like a hockey stick at the strike. Think of it as insurance: a car insurance policy is a put option on your car's value, paying out for any loss beyond the excess. Lessons 4 and 5 take options apart in detail.

---

## 4. The swap: exchanging one stream of payments for another

Imagine two neighbours. One has a variable-rate mortgage and lies awake worrying that rates will rise. The other has a fixed-rate mortgage and is convinced that rates will fall. They could agree to pay each other's interest bills: each would then have the exposure they wanted, without either of them going near their bank. That is an **interest rate swap**.

In practice only the **difference** between the two payments changes hands on each payment date, which is why the vast notional amounts of Lesson 1 never move. Swaps are the giants of the market: interest rate swaps alone had **$545 trillion** of notional outstanding at the end of 2025. Swaps also exist on currencies, on credit and on the total return of a share or a bond. Lesson 7 covers each of them.

---

## The hidden unity: how the blocks relate

The four blocks are not really four separate ideas. They are close relatives, and seeing the family resemblance is what lets you price them and take them apart.

**A future is a forward with a guarantee and daily cash settlement.** Same economics, different plumbing.

**A swap is a bundle of forwards**, one for each payment date, packaged into a single contract.

<svg viewBox="0 0 680 334" width="100%" role="img" aria-label="Bar chart of a five-year interest rate swap seen as five forwards. The company pays a fixed 3.8% and receives SONIA on £50 million. If SONIA sets at the market's expected path of 3.5%, 3.6%, 3.8%, 4.0%, 4.1% in years one to five, the expected net payments are pay £150k, pay £100k, nothing, receive £100k, receive £150k. Each year is in effect a separate forward contract on that year's rate; the fixed rate is set so that their values roughly balance." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A swap is a bundle of forwards</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Pay a fixed 3.8%, receive SONIA, on £50 million: expected net payment each year. Illustrative.</text>
<line x1="110" y1="270" x2="600" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£200k</text>
<line x1="110" y1="220" x2="600" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="224" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£100k</text>
<line x1="110" y1="170" x2="600" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="102" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="110" y1="120" x2="600" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£100k</text>
<line x1="110" y1="70" x2="600" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£200k</text>
<path d="M133,170 L133,242 Q133,245 136,245 L182,245 Q185,245 185,242 L185,170 Z" class="vf2" fill="#eb6834"><title>Year 1: SONIA expected 3.5%, net pay £150k</title></path>
<text x="159" y="261" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">−£150k</text>
<text x="159" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Year 1</text>
<text x="159" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">SONIA 3.5%</text>
<path d="M231,170 L231,217 Q231,220 234,220 L280,220 Q283,220 283,217 L283,170 Z" class="vf2" fill="#eb6834"><title>Year 2: SONIA expected 3.6%, net pay £100k</title></path>
<text x="257" y="236" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">−£100k</text>
<text x="257" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Year 2</text>
<text x="257" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">SONIA 3.6%</text>
<text x="355" y="162" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">nil</text>
<text x="355" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Year 3</text>
<text x="355" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">SONIA 3.8%</text>
<path d="M427,170 L427,123 Q427,120 430,120 L476,120 Q479,120 479,123 L479,170 Z" class="vf1" fill="#2a78d6"><title>Year 4: SONIA expected 4.0%, net receive £100k</title></path>
<text x="453" y="113" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">+£100k</text>
<text x="453" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Year 4</text>
<text x="453" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">SONIA 4.0%</text>
<path d="M525,170 L525,98 Q525,95 528,95 L574,95 Q577,95 577,98 L577,170 Z" class="vf1" fill="#2a78d6"><title>Year 5: SONIA expected 4.1%, net receive £150k</title></path>
<text x="551" y="88" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">+£150k</text>
<text x="551" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Year 5</text>
<text x="551" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">SONIA 4.1%</text>
<text x="110" y="326" font-size="10.5" fill="currentColor" opacity="0.6">Each bar is one forward on that year's rate. Discounting makes the early payments count slightly more.</text>
</svg>

A company that pays a fixed 3.8% and receives a floating rate on £50 million for five years has, in effect, signed five separate forward contracts, one on each year's floating rate. In the early years, when the market expects the floating rate to be below 3.8%, the company expects to pay; in the later years, when it expects the rate to be higher, it expects to receive. The fixed rate is set so that the values of the five forwards balance out, which is why a new swap costs nothing to enter.

**Options can be combined to recreate the other blocks.** Buy a call and sell a put at the same strike and expiry, and you have exactly the payoff of a forward at that strike: you gain one for one above the strike through the call, and lose one for one below it through the put you sold. This relationship is called **put-call parity**, and it is why option prices can never drift far from futures prices without someone pouncing on the gap. Lesson 3 proves it with numbers.

---

## The family tree

Put the blocks together and the whole family of products falls into place.

<svg viewBox="0 0 680 400" width="100%" role="img" aria-label="Family tree of derivatives. At the top, derivatives: contracts whose value depends on something else. Four building blocks below: Forwards (Private deal, one settlement at the end), for example Currency forwards, Rate forwards (FRAs), CFDs and spread bets; Futures (Standardised, cleared, settled every day), for example Equity index futures, Commodity futures, Rate and bond futures, Crypto perpetuals; Options (A right, not an obligation, for a fee), for example Calls and puts, Caps, floors, swaptions, Barrier, Asian, binary, Event contracts; Swaps (Exchange one stream of payments for another), for example Interest rate swaps, Currency and FX swaps, Credit default swaps, Total return swaps. Along the bottom, hybrids that combine several blocks: Structured products: a bond plus options; Convertible bonds: a bond plus a call; CDOs: slices of pooled credit risk; Leveraged ETFs: futures and swaps, reset daily." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Every derivative is assembled from four building blocks</text>
<rect x="120" y="46" width="440" height="34" rx="7" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="340" y="68" font-size="11.5" fill="currentColor" text-anchor="middle">Derivatives: contracts whose value depends on something else</text>
<line x1="340" y1="80" x2="340" y2="92" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<line x1="95" y1="92" x2="585" y2="92" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<line x1="96" y1="92" x2="96" y2="106" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="96,106 94,101.4 98,101.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="20" y="108" width="152" height="190" rx="8" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.55" class="vf1" fill="#2a78d6" fill-opacity="0.06"/>
<text x="32" y="130" font-size="14" fill="currentColor" font-weight="600">Forwards</text>
<text x="32" y="148" font-size="10.5" fill="currentColor" opacity="0.72">Private deal, one</text>
<text x="32" y="161.5" font-size="10.5" fill="currentColor" opacity="0.72">settlement at the end</text>
<line x1="32" y1="181" x2="160" y2="181" class="vs1" stroke="#2a78d6" stroke-width="1" stroke-opacity="0.5"/>
<text x="32" y="202" font-size="11.5" fill="currentColor" opacity="0.9">Currency forwards</text>
<text x="32" y="224" font-size="11.5" fill="currentColor" opacity="0.9">Rate forwards (FRAs)</text>
<text x="32" y="246" font-size="11.5" fill="currentColor" opacity="0.9">CFDs and spread bets</text>
<line x1="96" y1="300" x2="96" y2="316" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="96,316 94,311.4 98,311.4" fill="currentColor" fill-opacity="0.45"/>
<line x1="259" y1="92" x2="259" y2="106" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="259,106 257,101.4 261,101.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="183" y="108" width="152" height="190" rx="8" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.55" class="vf1" fill="#2a78d6" fill-opacity="0.06"/>
<text x="195" y="130" font-size="14" fill="currentColor" font-weight="600">Futures</text>
<text x="195" y="148" font-size="10.5" fill="currentColor" opacity="0.72">Standardised, cleared,</text>
<text x="195" y="161.5" font-size="10.5" fill="currentColor" opacity="0.72">settled every day</text>
<line x1="195" y1="181" x2="323" y2="181" class="vs1" stroke="#2a78d6" stroke-width="1" stroke-opacity="0.5"/>
<text x="195" y="202" font-size="11.5" fill="currentColor" opacity="0.9">Equity index futures</text>
<text x="195" y="224" font-size="11.5" fill="currentColor" opacity="0.9">Commodity futures</text>
<text x="195" y="246" font-size="11.5" fill="currentColor" opacity="0.9">Rate and bond futures</text>
<text x="195" y="268" font-size="11.5" fill="currentColor" opacity="0.9">Crypto perpetuals</text>
<line x1="259" y1="300" x2="259" y2="316" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="259,316 257,311.4 261,311.4" fill="currentColor" fill-opacity="0.45"/>
<line x1="422" y1="92" x2="422" y2="106" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="422,106 420,101.4 424,101.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="346" y="108" width="152" height="190" rx="8" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.55" class="vf1" fill="#2a78d6" fill-opacity="0.06"/>
<text x="358" y="130" font-size="14" fill="currentColor" font-weight="600">Options</text>
<text x="358" y="148" font-size="10.5" fill="currentColor" opacity="0.72">A right, not an</text>
<text x="358" y="161.5" font-size="10.5" fill="currentColor" opacity="0.72">obligation, for a fee</text>
<line x1="358" y1="181" x2="486" y2="181" class="vs1" stroke="#2a78d6" stroke-width="1" stroke-opacity="0.5"/>
<text x="358" y="202" font-size="11.5" fill="currentColor" opacity="0.9">Calls and puts</text>
<text x="358" y="224" font-size="11.5" fill="currentColor" opacity="0.9">Caps, floors, swaptions</text>
<text x="358" y="246" font-size="11.5" fill="currentColor" opacity="0.9">Barrier, Asian, binary</text>
<text x="358" y="268" font-size="11.5" fill="currentColor" opacity="0.9">Event contracts</text>
<line x1="422" y1="300" x2="422" y2="316" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="422,316 420,311.4 424,311.4" fill="currentColor" fill-opacity="0.45"/>
<line x1="585" y1="92" x2="585" y2="106" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="585,106 583,101.4 587,101.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="509" y="108" width="152" height="190" rx="8" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.55" class="vf1" fill="#2a78d6" fill-opacity="0.06"/>
<text x="521" y="130" font-size="14" fill="currentColor" font-weight="600">Swaps</text>
<text x="521" y="148" font-size="10.5" fill="currentColor" opacity="0.72">Exchange one stream</text>
<text x="521" y="161.5" font-size="10.5" fill="currentColor" opacity="0.72">of payments for another</text>
<line x1="521" y1="181" x2="649" y2="181" class="vs1" stroke="#2a78d6" stroke-width="1" stroke-opacity="0.5"/>
<text x="521" y="202" font-size="11.5" fill="currentColor" opacity="0.9">Interest rate swaps</text>
<text x="521" y="224" font-size="11.5" fill="currentColor" opacity="0.9">Currency and FX swaps</text>
<text x="521" y="246" font-size="11.5" fill="currentColor" opacity="0.9">Credit default swaps</text>
<text x="521" y="268" font-size="11.5" fill="currentColor" opacity="0.9">Total return swaps</text>
<line x1="585" y1="300" x2="585" y2="316" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="585,316 583,311.4 587,311.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="20" y="318" width="640" height="72" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" class="vf4" fill="#eda100" fill-opacity="0.08"/>
<text x="34" y="338" font-size="12.5" fill="currentColor" font-weight="600">Hybrids that combine several blocks</text>
<text x="34" y="360" font-size="11.5" fill="currentColor" opacity="0.88">Structured products: a bond plus options</text>
<text x="352" y="360" font-size="11.5" fill="currentColor" opacity="0.88">Convertible bonds: a bond plus a call</text>
<text x="34" y="380" font-size="11.5" fill="currentColor" opacity="0.88">CDOs: slices of pooled credit risk</text>
<text x="352" y="380" font-size="11.5" fill="currentColor" opacity="0.88">Leveraged ETFs: futures and swaps, reset daily</text>
</svg>

- **Contracts for difference (CFDs) and spread bets** are cash-settled forwards with a broker, rolled over each night for a financing charge. They are the main way individuals in the UK trade with leverage (Lesson 10).
- **Warrants and turbo certificates** are options, or knock-out products, listed on exchanges; they are popular with private investors in continental Europe.
- **Caps, floors and swaptions** are options on interest rates: a cap pays out if a floating rate rises above a ceiling, and a swaption is the right to enter a swap later.
- **Convertible bonds** are ordinary bonds with a call option on the company's shares attached, which is why they pay a lower coupon: the investor is paying for the option.
- **Leveraged and inverse exchange-traded funds** use futures and swaps to deliver a multiple of a market's *daily* move, a detail with surprising consequences (Lesson 10).
- **Credit derivatives** include credit default swaps and the collateralised debt obligations that sat at the heart of 2008.
- **Exotic options** change the payout rules: **barrier** options switch on or off when a price is touched, **Asian** options pay on an average price, and **binary** options pay a fixed sum or nothing.
- **Event contracts**, sold by prediction markets, are binary options on real-world outcomes such as elections or interest rate decisions.
- **Crypto perpetual futures** are futures that never expire, held near the underlying price by a payment between buyers and sellers every few hours (Lesson 10).

---

## Taking a product apart

Here is the payoff of a kind of product sold to UK savers for decades: a six-year **FTSE 100 kick-out plan**. Each year, if the index is at or above its starting level, the plan "kicks out", returning your money plus 8% for each year that has passed. If it never kicks out, what you get at the end depends on where the index finishes.

<svg viewBox="0 0 680 360" width="100%" role="img" aria-label="Payoff at maturity of an illustrative six-year FTSE 100 kick-out plan that has not kicked out early, against the index level at the end as a percentage of its starting level. At 100% or above it repays £148 per £100 invested. Between 60% and 100% it repays the £100 capital. Below 60% the capital falls one for one with the index, so an index at 50% repays £50. Taken apart, the plan is a bond that repays £100, plus a digital call that adds £48 if the index ends at or above its start, minus a put that the investor has sold, which only switches on if the index falls below 60%." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A structured product, taken apart</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A six-year FTSE 100 kick-out plan that never kicked out early: what £100 returns at maturity. Illustrative.</text>
<line x1="90" y1="290" x2="600" y2="290" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="294" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="90" y1="235" x2="600" y2="235" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="239" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£40</text>
<line x1="90" y1="180" x2="600" y2="180" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="184" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£80</text>
<line x1="90" y1="125" x2="600" y2="125" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="129" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£120</text>
<line x1="90" y1="70" x2="600" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£160</text>
<text x="90" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">30%</text>
<text x="229.1" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">60%</text>
<text x="321.8" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">80%</text>
<text x="414.5" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">100%</text>
<text x="507.3" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">120%</text>
<text x="600" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">140%</text>
<text x="345" y="326" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">FTSE 100 at maturity, as a percentage of its starting level</text>
<polyline points="90,248.8 229,207.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="229.1,152.5 414.5,152.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="414.5,86.5 600,86.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="229.1" y1="207.5" x2="229.1" y2="152.5" class="vs1" stroke="#2a78d6" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="414.5" y1="152.5" x2="414.5" y2="86.5" class="vs1" stroke="#2a78d6" stroke-width="1.2" stroke-dasharray="3 3"/>
<circle cx="229.1" cy="152.5" r="4" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"/>
<circle cx="414.5" cy="86.5" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<line x1="90" y1="248.8" x2="600" y2="97.5" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.4" stroke-dasharray="5 4"/>
<text x="535.1" y="127.8" font-size="10" fill="currentColor" opacity="0.65">the index itself</text>
<text x="423.8" y="76.5" font-size="11" fill="currentColor" font-weight="600">digital call: +£48 if at or above the start</text>
<text x="238.4" y="142.5" font-size="11" fill="currentColor" font-weight="600">bond: £100 back</text>
<text x="238.4" y="221.2" font-size="11" fill="currentColor" font-weight="600">sold put switches on</text>
<text x="238.4" y="236.2" font-size="10.5" fill="currentColor" opacity="0.8">below 60%: losses one for one</text>
<text x="20" y="350" font-size="10.5" fill="currentColor" opacity="0.6">If the index is at or above its start on any earlier anniversary, the plan ends early and pays 8% a year so far.</text>
</svg>

On the brochure this looks like a savings product with a generous return. Taken apart, it is three of our building blocks.

1. **A bond** that repays your £100. This is the flat middle section.
2. **A digital call option** that adds £48 if the index finishes at or above where it started. This is the step up on the right, and it is what you are paying for.
3. **A put option that you have sold**, which only switches on if the index finishes more than 40% below its starting level. This is the cliff on the left: below 60%, you lose one for one with the index, so a 50% fall returns £50.

The third piece is the one that matters most and is mentioned least. You are quietly selling insurance against a stock market crash, and the premium you earn for it is part of what pays for that attractive 8% a year. The plan can still be a perfectly reasonable thing to own. But you can only judge whether it is good value once you know what you have sold, and to whom.

> **Decompose before you judge.** Every product is built from forwards, futures, options and swaps. Break it into those pieces, and the hidden bets, and who is paid to take them, become visible.

---

## Check yourself

**1. The UK manufacturer agreed to sell its $10 million at $1.30. On the settlement date sterling is at $1.25. How many pounds does it receive, and how much better or worse off is it than if it had not hedged?**

<details>
<summary>Show the answer</summary>

The forward delivers $10m ÷ 1.30 = **£7.69 million** regardless. Unhedged, the dollars would have bought $10m ÷ 1.25 = £8.00 million, so the hedge **cost about £308,000** of upside this time. That is not a mistake: the company bought certainty, and sometimes certainty is the more expensive outcome.

</details>

**2. Which building block does each of these behave like? (a) A fixed-price energy tariff. (b) Car insurance with a £250 excess. (c) A bank that lends at fixed rates but pays its depositors floating rates, and wants to remove the mismatch. (d) Buying one FTSE 100 contract on ICE.**

<details>
<summary>Show the answer</summary>

(a) A **forward**: a price fixed today for future supply. (b) A **put option** on your car's value, struck £250 below it, with the annual premium as the option's price. (c) A **swap**: the bank pays fixed and receives floating to turn its fixed-rate income into floating. (d) A **future**: standardised, exchange-traded and settled daily.

</details>

**3. A company's convertible bond pays a 2% coupon, while its ordinary bonds of the same maturity pay 5%. Why would anyone accept the lower coupon?**

<details>
<summary>Show the answer</summary>

Because the convertible is a bond **plus a call option** on the company's shares. The investor gives up about 3 percentage points a year of coupon in exchange for the right to convert into shares if they rise. The gap in coupons is, in effect, the option premium paid in instalments.

</details>

**4. Why does a future carry almost no counterparty risk, and what risk does it introduce instead?**

<details>
<summary>Show the answer</summary>

The clearing house becomes the counterparty to both sides and settles gains and losses in cash every day, so a loser's debt can never build up for long. The new risk is **liquidity**: you must find cash for every day's losses, even when you are confident the position will come good, and if you cannot, it will be closed out at the worst moment.

</details>

---

## What to carry into Lesson 3

- There are **four building blocks**: forwards, futures, options and swaps. Almost everything else is one of them in disguise, or a bundle of several.
- A **forward** swaps an uncertain price for a certain one, at the cost of the lucky outcome and with counterparty risk.
- A **future** is a standardised forward with a clearing house guarantee, paid for by **daily cash settlement**.
- An **option** is a right, not an obligation: buyers can lose only the premium; sellers can lose far more.
- A **swap** exchanges streams of payments, and is a bundle of forwards. A call bought plus a put sold is a forward.
- **Decompose before you judge**: a kick-out plan is a bond, a digital call you bought and a crash put you sold.

All of this raises an obvious question. What *should* a forward price or an option premium be? The surprising answer, in Lesson 3, is that you can work it out without forecasting anything at all.

---

## Sources

- [BIS: OTC derivatives statistics, end-December 2025 (interest rate swaps notional)](https://data.bis.org/topics/OTC_DER)
- [ICE Futures Europe: FTSE 100 index future contract specifications](https://www.ice.com/products/38716764/FTSE-100-Index-Future)
- [CME Group: E-mini S&P 500 futures contract specifications](https://www.cmegroup.com/markets/equities/sp/e-mini-sandp500.contractSpecs.html)
- [NSE: revision in lot size of index derivative contracts (Nifty 50 to 65 units)](https://www.nseindia.com/resources/exchange-communication-circulars)
