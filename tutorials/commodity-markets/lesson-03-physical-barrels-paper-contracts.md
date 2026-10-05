# Lesson 3: Physical Barrels, Paper Contracts

*The two layers of the market, how physical deals are priced, and the four features that make futures work: clearing, margin, leverage and liquidity.*

---

## Two markets, one price

Every trading day, the crude oil that changes hands as Brent futures contracts in London adds up to about fourteen times all the oil the world actually burns.

<svg viewBox="0 0 680 210" width="100%" role="img" aria-label="Bar chart comparing world oil consumption in 2025, about 104 million barrels a day, with the volume traded in ICE Brent futures alone, an average of 1.5 million contracts or 1.5 billion barrels a day: about fourteen times as much." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The paper market dwarfs the physical one</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Million barrels a day, 2025</text>
<line x1="230" y1="64" x2="230" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="230" y="166" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="335" y1="64" x2="335" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="335" y="166" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">400</text>
<line x1="440" y1="64" x2="440" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="440" y="166" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">800</text>
<line x1="545" y1="64" x2="545" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="545" y="166" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">1,200</text>
<line x1="650" y1="64" x2="650" y2="150" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="650" y="166" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">1,600</text>
<text x="220" y="93" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.9">World oil consumption</text>
<path d="M230,78 L254.3,78 Q257.3,78 257.3,81 L257.3,97 Q257.3,100 254.3,100 L230,100 Z" class="vf2" fill="#eb6834"><title>World oil consumption: about 104 million barrels a day</title></path>
<text x="265.3" y="93.5" font-size="12.5" fill="currentColor" font-weight="600">about 104</text>
<text x="220" y="129" font-size="12.5" fill="currentColor" text-anchor="end" opacity="0.9">Brent futures traded</text>
<path d="M230,114 L620.8,114 Q623.8,114 623.8,117 L623.8,133 Q623.8,136 620.8,136 L230,136 Z" class="vf1" fill="#2a78d6"><title>Brent futures traded: 1,500 million barrels a day</title></path>
<text x="631.8" y="129.5" font-size="12.5" fill="currentColor" font-weight="600">1,500</text>
<text x="20" y="196" font-size="10.5" fill="currentColor" opacity="0.6">One Brent contract covers 1,000 barrels. Sources: IEA and EIA estimates of 2025 oil demand; ICE 2025 volumes.</text>
</svg>

That is not a sign that something has gone wrong. Commodities trade in two connected layers. The **physical market** is where real barrels, tonnes and bushels change hands. The **derivatives market**, often called the **paper market**, is where contracts linked to those goods are bought and sold, to manage risk or to speculate. Almost none of that paper ends in a delivery. Yet the two layers cannot drift apart, for two reasons this lesson explains: some contracts *can* end in delivery, and traders hunting for mispricing pounce the moment they do drift.

---

## The physical market: a benchmark plus a differential

The **spot market** is for immediate or near-term delivery, and most physical deals are private contracts between producers, merchants and consumers. Rather than haggle over a full price, buyers and sellers usually agree a **formula**: a benchmark price plus or minus a **differential** for quality, location and timing.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="How a physical oil cargo is priced. Five daily Dated Brent assessments around the loading date, of $90.40, $91.10, $90.80, $89.90 and $90.30, average $90.50 a barrel. Adding a quality differential of 80 cents gives $91.30 a barrel, so a 600,000-barrel cargo is invoiced at $54.78 million." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A physical cargo: benchmark plus a differential</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A North Sea cargo priced off Dated Brent around its loading date. Illustrative.</text>
<line x1="50" y1="236" x2="390" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="44" y="239.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$89.50</text>
<line x1="50" y1="196" x2="390" y2="196" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="44" y="199.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$90.00</text>
<line x1="50" y1="156" x2="390" y2="156" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="44" y="159.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$90.50</text>
<line x1="50" y1="116" x2="390" y2="116" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="44" y="119.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$91.00</text>
<line x1="50" y1="76" x2="390" y2="76" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="44" y="79.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$91.50</text>
<line x1="50" y1="156" x2="390" y2="156" class="vs1" stroke="#2a78d6" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="392" y="160" font-size="11" fill="currentColor" opacity="0.85">average</text>
<circle cx="70" cy="164" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Dated Brent, 2 days before: $90.40</title></circle>
<text x="70" y="184" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$90.40</text>
<text x="70" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2</text>
<text x="70" y="270" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">days before</text>
<circle cx="145" cy="108" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Dated Brent, 1 day before: $91.10</title></circle>
<text x="145" y="97" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$91.10</text>
<text x="145" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1</text>
<text x="145" y="270" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">day before</text>
<circle cx="220" cy="132" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Dated Brent, Loading day: $90.80</title></circle>
<text x="220" y="121" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$90.80</text>
<text x="220" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Loading</text>
<text x="220" y="270" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">day</text>
<circle cx="295" cy="204" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Dated Brent, 1 day after: $89.90</title></circle>
<text x="295" y="224" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$89.90</text>
<text x="295" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1</text>
<text x="295" y="270" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">day after</text>
<circle cx="370" cy="172" r="5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Dated Brent, 2 days after: $90.30</title></circle>
<text x="370" y="192" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$90.30</text>
<text x="370" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2</text>
<text x="370" y="270" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">days after</text>
<text x="470" y="108" font-size="11.5" fill="currentColor" opacity="0.85">Average of the five quotes</text>
<text x="660" y="126" font-size="13" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">$90.50</text>
<text x="470" y="154" font-size="11.5" fill="currentColor" opacity="0.85">Quality differential</text>
<text x="660" y="172" font-size="13" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">+ $0.80</text>
<line x1="470" y1="184" x2="660" y2="184" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="470" y="200" font-size="11.5" fill="currentColor" opacity="0.85">Price per barrel</text>
<text x="660" y="218" font-size="14" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">$91.30</text>
<text x="470" y="246" font-size="11.5" fill="currentColor" opacity="0.85">Cargo of 600,000 barrels</text>
<text x="660" y="264" font-size="14" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">$54.78m</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.6">Dots: daily Dated Brent assessments. Real contracts vary the number of pricing days.</text>
</svg>

The formula travels well. An Indian refiner buying Gulf crude typically pays a price linked to the Dubai and Oman benchmarks. A copper smelter buying ore concentrate pays the London Metal Exchange price, minus charges for turning the concentrate into metal. A North Sea cargo might be priced at Dated Brent plus 80 cents, averaged over the days around loading, exactly as above.

This is why benchmarks matter so much. If the benchmark moves by a dollar, billions of dollars of physical contracts move with it, which is also why their integrity is policed so closely (Lesson 10 tells the story of the London gold fix).

---

## Forwards: the original risk tool

A **forward** is a private agreement to buy or sell a set quantity at a fixed price on a future date. A farmer agrees in May to sell a miller 5,000 bushels of wheat in September at $6.00. A forward can be tailored to any need, which is its strength.

It has two weaknesses. The first is **counterparty risk**: you depend on the other party being willing and able to pay or deliver when the day comes. If wheat soars to $8, the farmer has a strong reason to find an excuse not to deliver at $6. The second is that a forward is **hard to exit**. If the farmer's crop fails, there is no easy way out of the contract except to negotiate with the one person who holds the other side.

## Futures: forwards made standard, tradable and safe

A **futures contract** is a standardised forward traded on an exchange. Every contract defines the commodity and its grade, the quantity, the delivery months, the delivery location and the smallest price step. Because everyone trades the same thing, nobody needs to negotiate anything except the price.

| Contract | Exchange | One contract covers | Illustrative price | Value of one contract |
| --- | --- | ---: | ---: | ---: |
| WTI crude oil | NYMEX (CME Group) | 1,000 barrels | $90 a barrel | $90,000 |
| Wheat | CBOT (CME Group) | 5,000 bushels | $6.00 a bushel | $30,000 |
| Gold | COMEX (CME Group) | 100 troy ounces | $4,300 an ounce | $430,000 |
| Copper | London Metal Exchange | 25 tonnes | $14,000 a tonne | $350,000 |
| Gold | MCX (India) | 1 kilogram | ₹150,000 per 10 grams | ₹15 million |

The quantity one contract covers is called its **lot size**. The last column is just the lot size times the price, and it is worth computing before trading anything: a single gold contract controls nearly half a million dollars of metal. The smallest price step matters too. WTI is quoted to the cent, so a one-cent move changes the value of one contract by 1,000 × $0.01 = $10. For Indian readers, ₹15 million is ₹1.5 crore.

Four features make futures powerful.

### 1. Clearing

Once two traders are matched, a **clearing house** steps in. It becomes the buyer to every seller and the seller to every buyer, so neither side needs to trust the stranger on the other side, only the clearing house.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Diagram of how a futures trade is cleared. A seller, such as a farmer hedging a harvest, sends a sell order and a buyer, such as a miller or a fund, sends a buy order to the exchange, which matches them. The trade is registered with the clearing house, which becomes buyer to every seller and seller to every buyer, collecting margin and settling gains and losses with both sides every day. The clearing house is backed by margin, a default fund and member capital." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The clearing house stands between every buyer and seller</text>
<rect x="20" y="64" width="170" height="78" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="105" y="90" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Seller</text>
<text x="105" y="109" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">farmer hedging</text>
<text x="105" y="125" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">next harvest</text>
<rect x="255" y="64" width="170" height="78" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="340" y="90" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Exchange</text>
<text x="340" y="109" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">matches buyers</text>
<text x="340" y="125" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">and sellers</text>
<rect x="490" y="64" width="170" height="78" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="575" y="90" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Buyer</text>
<text x="575" y="109" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">miller locking in</text>
<text x="575" y="125" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">a cost, or a fund</text>
<line x1="192" y1="96" x2="252" y2="96" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
<polygon points="252,96 245.6,98.9 245.6,93.1" fill="currentColor" fill-opacity="0.6"/>
<text x="222" y="88" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">sell order</text>
<line x1="488" y1="96" x2="428" y2="96" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
<polygon points="428,96 434.4,93.1 434.4,98.9" fill="currentColor" fill-opacity="0.6"/>
<text x="458" y="88" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">buy order</text>
<line x1="340" y1="144" x2="340" y2="196" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
<polygon points="340,196 337.1,189.6 342.9,189.6" fill="currentColor" fill-opacity="0.6"/>
<text x="348" y="175" font-size="11" fill="currentColor" opacity="0.7">trade registered</text>
<rect x="190" y="198" width="300" height="80" rx="8" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="340" y="224" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Clearing house</text>
<text x="340" y="243" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">buyer to every seller and</text>
<text x="340" y="259" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">seller to every buyer</text>
<path d="M105,144 L105,238 L186,238" stroke="currentColor" stroke-width="1.3" fill="none" stroke-opacity="0.5" stroke-linejoin="round"/>
<line x1="170" y1="238" x2="188" y2="238" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="188,238 182.5,240.4 182.5,235.6" fill="currentColor" fill-opacity="0.5"/>
<line x1="105" y1="160" x2="105" y2="146" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="105,146 107.4,151.5 102.6,151.5" fill="currentColor" fill-opacity="0.5"/>
<path d="M575,144 L575,238 L494,238" stroke="currentColor" stroke-width="1.3" fill="none" stroke-opacity="0.5" stroke-linejoin="round"/>
<line x1="510" y1="238" x2="492" y2="238" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="492,238 497.5,235.6 497.5,240.4" fill="currentColor" fill-opacity="0.5"/>
<line x1="575" y1="160" x2="575" y2="146" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="575,146 577.4,151.5 572.6,151.5" fill="currentColor" fill-opacity="0.5"/>
<text x="30" y="262" font-size="11" fill="currentColor" opacity="0.7">margin and</text>
<text x="30" y="277" font-size="11" fill="currentColor" opacity="0.7">daily settlement</text>
<text x="650" y="262" font-size="11" fill="currentColor" text-anchor="end" opacity="0.7">margin and</text>
<text x="650" y="277" font-size="11" fill="currentColor" text-anchor="end" opacity="0.7">daily settlement</text>
<text x="340" y="306" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">Backed by margin, a default fund and the capital of its members</text>
</svg>

### 2. Margin and mark-to-market

To trade, you post **initial margin**: a deposit typically worth around 5% to 15% of the contract's value, and more in volatile markets. Then, every day, the clearing house revalues every position at that day's settlement price and moves cash: winners are paid, losers pay. This daily settlement is called **variation margin**, and it means losses can never quietly pile up. If your balance falls below a **maintenance** level, you must top it back up, which is a **margin call**.

Here is a margin account over a week. A trader buys one WTI contract at $80.00, posting $8,000 of initial margin, with a maintenance level of $7,000.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart of a futures margin account over five trading days. A trader buys one WTI contract at $80 with $8,000 initial margin and a $7,000 maintenance level. Daily settlements take the balance to $9,200, $7,500 and then $6,100, below maintenance, which triggers a margin call of $1,900 to restore $8,000. The balance then moves to $8,800 and $7,300." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A margin account, day by day</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">One WTI contract (1,000 barrels) bought at $80.00. Illustrative.</text>
<line x1="100" y1="243.2" x2="560" y2="243.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="92" y="247.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$6,000</text>
<line x1="100" y1="193.8" x2="560" y2="193.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="92" y="197.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$7,000</text>
<line x1="100" y1="144.2" x2="560" y2="144.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="92" y="148.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$8,000</text>
<line x1="100" y1="94.8" x2="560" y2="94.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="92" y="98.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$9,000</text>
<text x="100" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 0</text>
<text x="100" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$80.00</text>
<text x="188" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 1</text>
<text x="188" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$81.20</text>
<text x="276" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 2</text>
<text x="276" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$79.50</text>
<text x="364" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 3</text>
<text x="364" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$78.10</text>
<text x="452" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 4</text>
<text x="452" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$78.90</text>
<text x="540" y="290" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Day 5</text>
<text x="540" y="305" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6" style="font-variant-numeric:tabular-nums">$77.40</text>
<line x1="100" y1="193.8" x2="560" y2="193.8" class="vs8" stroke="#e34948" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="568" y="197.8" font-size="11" fill="currentColor" opacity="0.85">maintenance</text>
<text x="568" y="148.2" font-size="11" fill="currentColor" opacity="0.85">initial margin</text>
<polyline points="100,144.2 188,84.8 276,169 364,238.3 364,144.2 452,104.6 540,178.9" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="100" cy="144.2" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 0: balance $8,000</title></circle>
<text x="100" y="134.2" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$8,000</text>
<circle cx="188" cy="84.8" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 1: balance $9,200</title></circle>
<text x="188" y="74.8" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$9,200</text>
<circle cx="276" cy="169" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 2: balance $7,500</title></circle>
<text x="285" y="173" font-size="11.5" fill="currentColor" font-weight="600">$7,500</text>
<circle cx="364" cy="238.3" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 3: balance $6,100</title></circle>
<text x="364" y="258.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$6,100</text>
<circle cx="452" cy="104.6" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 4: balance $8,800</title></circle>
<text x="452" y="94.6" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$8,800</text>
<circle cx="540" cy="178.9" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Day 5: balance $7,300</title></circle>
<text x="549" y="182.9" font-size="11.5" fill="currentColor" font-weight="600">$7,300</text>
<circle cx="364" cy="144.2" r="4.5" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"/>
<text x="376" y="242.3" font-size="11" fill="currentColor" font-weight="600" opacity="0.85">margin call: pay $1,900</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Gains and losses settle in cash every day; a balance below maintenance must be topped back up.</text>
</svg>

| Day | Settlement price | Gain or loss | Balance after settlement | Cash paid in |
| --- | ---: | ---: | ---: | ---: |
| 0 | $80.00 | | $8,000 | $8,000 |
| 1 | $81.20 | +$1,200 | $9,200 | |
| 2 | $79.50 | −$1,700 | $7,500 | |
| 3 | $78.10 | −$1,400 | $6,100 | $1,900 (margin call) |
| 4 | $78.90 | +$800 | $8,800 | |
| 5 | $77.40 | −$1,500 | $7,300 | |

Each day's gain or loss is the change in price times 1,000 barrels. You can check the whole week in one line: the trader has paid in $9,900 and holds $7,300, a loss of $2,600, which is exactly ($77.40 − $80.00) × 1,000.

### 3. Leverage

Because you post only a fraction of the contract's value, small price moves produce large gains or losses relative to your deposit. In the week above, a price fall of 3.25% cost the trader $2,600, almost a third of the $8,000 deposit. With 10% margin, a 10% move against you wipes out the entire deposit.

> Leverage cuts both ways, and the margin call arrives in cash, today, whatever you believe about tomorrow. Lesson 4 shows how that can sink a business whose positions are entirely sensible.

### 4. Liquidity

Because everyone trades the same standard contract, you can exit at any moment by taking the opposite position: a trader who bought one contract simply sells one. The number of contracts still open at the end of a day is called **open interest**, and it is a useful gauge of how many people are participating.

---

## Settlement: delivery, cash and rolling

**Physically settled** contracts end in real delivery if held to expiry. WTI is delivered by pipeline at Cushing, Oklahoma, and metal on the London Metal Exchange changes hands through **warehouse warrants**, documents of title to metal sitting in an approved warehouse. **Cash-settled** contracts simply pay the difference against a reference price. Brent futures settle against an index, and MCX crude oil futures in India settle against the NYMEX WTI price converted into rupees.

Only a small fraction of futures ever end in delivery. Most positions are closed before expiry, or **rolled**: sold in the expiring month and bought again in a later one. Yet the *possibility* of delivery is what anchors the whole paper market to the physical one.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Illustrative line chart of a futures price and the spot price over the last sixty days of a contract. Both wander, but the gap between them narrows steadily and closes at expiry, because if it did not, traders could buy the cheaper one and deliver against the dearer one." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Paper and physical meet at expiry</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A futures contract in its final 60 days. Illustrative.</text>
<line x1="90" y1="220" x2="620" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="224" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$78</text>
<line x1="90" y1="190" x2="620" y2="190" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="194" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$80</text>
<line x1="90" y1="160" x2="620" y2="160" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="164" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$82</text>
<line x1="90" y1="130" x2="620" y2="130" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="134" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$84</text>
<line x1="90" y1="100" x2="620" y2="100" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="104" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$86</text>
<polyline points="90,156.7 98.5,156.4 107,154.7 115.5,152.4 124,150.3 132.5,149.1 141,149.3 149.5,150.9 158,153.8 166.5,157.3 175,160.8 183.5,163.4 192,164.5 200.5,163.5 209,160.4 217.5,155.4 226,149 234.5,142 243,135.5 251.5,130.1 260,126.6 268.5,125.4 277,126.3 285.5,129 294,132.8 302.5,136.9 311,140.6 319.5,143.3 328,144.5 336.5,144.3 345,143 353.5,141.2 362,139.8 370.5,139.5 379,141 387.5,144.6 396,150.3 404.5,157.8 413,166.5 421.5,175.4 430,183.7 438.5,190.6 447,195.5 455.5,198.1 464,198.7 472.5,197.7 481,195.8 489.5,193.8 498,192.6 506.5,192.5 515,193.9 523.5,196.7 532,200.4 540.5,204.2 549,207.5 557.5,209.4 566,209.3 574.5,207.1 583,202.8 591.5,196.8 600,190" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="90,216.7 98.5,215.4 107,212.7 115.5,209.4 124,206.3 132.5,204.1 141,203.3 149.5,203.9 158,205.8 166.5,208.3 175,210.8 183.5,212.4 192,212.5 200.5,210.5 209,206.4 217.5,200.4 226,193 234.5,185 243,177.5 251.5,171.1 260,166.6 268.5,164.4 277,164.3 285.5,166 294,168.8 302.5,171.9 311,174.6 319.5,176.3 328,176.5 336.5,175.3 345,173 353.5,170.2 362,167.8 370.5,166.5 379,167 387.5,169.6 396,174.3 404.5,180.8 413,188.5 421.5,196.4 430,203.7 438.5,209.6 447,213.5 455.5,215.1 464,214.7 472.5,212.7 481,209.8 489.5,206.8 498,204.6 506.5,203.5 515,203.9 523.5,205.7 532,208.4 540.5,211.2 549,213.5 557.5,214.4 566,213.3 574.5,210.1 583,204.8 591.5,197.8 600,190" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="90" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">-60 days</text>
<text x="217.5" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">-45 days</text>
<text x="345" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">-30 days</text>
<text x="472.5" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">-15 days</text>
<text x="600" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">expiry</text>
<line x1="600" y1="64" x2="600" y2="252" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="600" cy="190" r="5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<line x1="100" y1="156.7" x2="100" y2="216.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="106" y="238.7" font-size="11" fill="currentColor" opacity="0.8">gap of $4.00 sixty days out</text>
<line x1="110" y1="288" x2="128" y2="288" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="134" y="292" font-size="11.5" fill="currentColor" opacity="0.85">Futures price</text>
<line x1="226.8" y1="288" x2="244.8" y2="288" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="250.8" y="292" font-size="11.5" fill="currentColor" opacity="0.85">Spot (physical) price</text>
</svg>

As expiry approaches, the futures price must converge with the physical price. If futures were dearer than physical oil on the last day, a trader could buy the physical oil, sell a futures contract and deliver the oil against it, pocketing the difference. If futures were cheaper, the trade would run the other way. Each round of that trade pushes the two prices together, so by expiry the gap is gone.

---

## Options and swaps

### Options: insurance with a premium

An **option** gives the right, but not the obligation, to buy (a **call**) or to sell (a **put**) at a set price, called the **strike**, in exchange for an upfront payment called the **premium**. The holder uses the right only if it pays to.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two charts of hedging with options. Left: an airline buys a call option with a strike of $100 for a $6 premium. Its effective fuel cost rises with the market but is capped at $106, and is $6 above the market when prices are low. Right: an oil producer buys a put with a $70 strike for $4. Its effective selling price falls with the market but never below $66, and is $4 below the market when prices are high." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Options set a cap or a floor, for a price</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Dollars per barrel. Illustrative.</text>
<text x="40" y="70" font-size="12.5" fill="currentColor" font-weight="600">Airline buys a call: a cap</text>
<line x1="80" y1="80" x2="80" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="80" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$50</text>
<line x1="200" y1="80" x2="200" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="200" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$100</text>
<line x1="320" y1="80" x2="320" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="320" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$150</text>
<line x1="80" y1="254.2" x2="320" y2="254.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="74" y="258.2" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$50</text>
<line x1="80" y1="175" x2="320" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="74" y="179" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$100</text>
<line x1="80" y1="95.8" x2="320" y2="95.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="74" y="99.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$150</text>
<line x1="80" y1="254.2" x2="320" y2="95.8" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="5 4"/>
<polyline points="80,244.7 82.4,243.1 84.8,241.5 87.2,239.9 89.6,238.3 92,236.8 94.4,235.2 96.8,233.6 99.2,232 101.6,230.4 104,228.8 106.4,227.2 108.8,225.7 111.2,224.1 113.6,222.5 116,220.9 118.4,219.3 120.8,217.8 123.2,216.2 125.6,214.6 128,213 130.4,211.4 132.8,209.8 135.2,208.2 137.6,206.7 140,205.1 142.4,203.5 144.8,201.9 147.2,200.3 149.6,198.8 152,197.2 154.4,195.6 156.8,194 159.2,192.4 161.6,190.8 164,189.2 166.4,187.7 168.8,186.1 171.2,184.5 173.6,182.9 176,181.3 178.4,179.8 180.8,178.2 183.2,176.6 185.6,175 188,173.4 190.4,171.8 192.8,170.2 195.2,168.7 197.6,167.1 200,165.5 202.4,165.5 204.8,165.5 207.2,165.5 209.6,165.5 212,165.5 214.4,165.5 216.8,165.5 219.2,165.5 221.6,165.5 224,165.5 226.4,165.5 228.8,165.5 231.2,165.5 233.6,165.5 236,165.5 238.4,165.5 240.8,165.5 243.2,165.5 245.6,165.5 248,165.5 250.4,165.5 252.8,165.5 255.2,165.5 257.6,165.5 260,165.5 262.4,165.5 264.8,165.5 267.2,165.5 269.6,165.5 272,165.5 274.4,165.5 276.8,165.5 279.2,165.5 281.6,165.5 284,165.5 286.4,165.5 288.8,165.5 291.2,165.5 293.6,165.5 296,165.5 298.4,165.5 300.8,165.5 303.2,165.5 305.6,165.5 308,165.5 310.4,165.5 312.8,165.5 315.2,165.5 317.6,165.5 320,165.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="320" y="300" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.65">market price</text>
<text x="243.2" y="157.5" font-size="11" fill="currentColor" font-weight="600">capped at $106</text>
<text x="118.4" y="251" font-size="10.5" fill="currentColor" opacity="0.75">$6 premium above</text>
<text x="118.4" y="264" font-size="10.5" fill="currentColor" opacity="0.75">market when low</text>
<text x="370" y="70" font-size="12.5" fill="currentColor" font-weight="600">Producer buys a put: a floor</text>
<line x1="410" y1="80" x2="410" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="410" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$50</text>
<line x1="530" y1="80" x2="530" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="530" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$100</text>
<line x1="650" y1="80" x2="650" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="650" y="287" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">$150</text>
<line x1="410" y1="254.2" x2="650" y2="254.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="258.2" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$50</text>
<line x1="410" y1="175" x2="650" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="179" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$100</text>
<line x1="410" y1="95.8" x2="650" y2="95.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="99.8" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$150</text>
<line x1="410" y1="254.2" x2="650" y2="95.8" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="5 4"/>
<polyline points="410,228.8 412.4,228.8 414.8,228.8 417.2,228.8 419.6,228.8 422,228.8 424.4,228.8 426.8,228.8 429.2,228.8 431.6,228.8 434,228.8 436.4,228.8 438.8,228.8 441.2,228.8 443.6,228.8 446,228.8 448.4,228.8 450.8,228.8 453.2,228.8 455.6,228.8 458,228.8 460.4,227.2 462.8,225.7 465.2,224.1 467.6,222.5 470,220.9 472.4,219.3 474.8,217.8 477.2,216.2 479.6,214.6 482,213 484.4,211.4 486.8,209.8 489.2,208.2 491.6,206.7 494,205.1 496.4,203.5 498.8,201.9 501.2,200.3 503.6,198.8 506,197.2 508.4,195.6 510.8,194 513.2,192.4 515.6,190.8 518,189.2 520.4,187.7 522.8,186.1 525.2,184.5 527.6,182.9 530,181.3 532.4,179.8 534.8,178.2 537.2,176.6 539.6,175 542,173.4 544.4,171.8 546.8,170.2 549.2,168.7 551.6,167.1 554,165.5 556.4,163.9 558.8,162.3 561.2,160.8 563.6,159.2 566,157.6 568.4,156 570.8,154.4 573.2,152.8 575.6,151.2 578,149.7 580.4,148.1 582.8,146.5 585.2,144.9 587.6,143.3 590,141.8 592.4,140.2 594.8,138.6 597.2,137 599.6,135.4 602,133.8 604.4,132.2 606.8,130.7 609.2,129.1 611.6,127.5 614,125.9 616.4,124.3 618.8,122.8 621.2,121.2 623.6,119.6 626,118 628.4,116.4 630.8,114.8 633.2,113.2 635.6,111.7 638,110.1 640.4,108.5 642.8,106.9 645.2,105.3 647.6,103.8 650,102.2" class="vs2" stroke="#eb6834" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="650" y="300" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.65">market price</text>
<text x="412.4" y="220.8" font-size="11" fill="currentColor" font-weight="600">floor at $66</text>
<text x="558.8" y="187.7" font-size="10.5" fill="currentColor" opacity="0.75">$4 premium below</text>
<text x="558.8" y="200.7" font-size="10.5" fill="currentColor" opacity="0.75">market when high</text>
<line x1="40" y1="318" x2="58" y2="318" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="64" y="322" font-size="11.5" fill="currentColor" opacity="0.85">Airline, with the call</text>
<line x1="194.2" y1="318" x2="212.2" y2="318" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="218.2" y="322" font-size="11.5" fill="currentColor" opacity="0.85">Producer, with the put</text>
<line x1="440" y1="318" x2="458" y2="318" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="5 4"/>
<text x="464" y="322" font-size="11.5" fill="currentColor" opacity="0.85">No hedge (pay or receive the market)</text>
</svg>

An airline can buy call options to cap its fuel bill while still benefiting if prices fall. An oil producer can buy puts to set a floor under its revenue while keeping the upside. Both pay the premium whatever happens, which is why each line in the figure sits a little worse than the market when the insurance is not needed. Some oil-exporting governments do this at national scale: Mexico has bought put options for years to protect its budget against a collapse in the oil price.

### Swaps: fixing a floating price

A **swap** exchanges a floating price for a fixed one over a period, settled in cash, usually each month. Airlines, shipping lines and manufacturers use swaps with banks to fix fuel or metal costs.

<svg viewBox="0 0 680 270" width="100%" role="img" aria-label="Diagram of a fuel swap. An airline pays a bank a fixed $95 a barrel and receives the floating market price, while buying its fuel at the market price. If the market is $110, the bank pays the airline $15; if it is $85, the airline pays the bank $10. Either way the airline's net cost is $95." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A swap turns a floating price into a fixed one</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">An airline fixes its fuel cost at $95 a barrel. Illustrative.</text>
<rect x="30" y="70" width="170" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="115" y="100" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Airline</text>
<text x="115" y="119" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">buys fuel at market</text>
<rect x="480" y="70" width="170" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="565" y="100" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<text x="565" y="119" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">swap dealer</text>
<line x1="204" y1="92" x2="476" y2="92" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.65"/>
<polygon points="476,92 469.6,94.9 469.6,89.1" fill="currentColor" fill-opacity="0.65"/>
<text x="340" y="84" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.85">pays fixed $95 a barrel</text>
<line x1="476" y1="120" x2="204" y2="120" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.65"/>
<polygon points="204,120 210.4,117.1 210.4,122.9" fill="currentColor" fill-opacity="0.65"/>
<text x="340" y="137" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.85">pays the floating market price</text>
<text x="30" y="180" font-size="11.5" fill="currentColor" font-weight="600" opacity="0.8">Market price</text>
<text x="260" y="180" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" opacity="0.8">Fuel bill</text>
<text x="390" y="180" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" opacity="0.8">Swap pays airline</text>
<text x="530" y="180" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" opacity="0.8">Net cost</text>
<line x1="30" y1="188" x2="650" y2="188" stroke="currentColor" stroke-width="1" stroke-opacity="0.3"/>
<text x="30" y="208" font-size="12" fill="currentColor" style="font-variant-numeric:tabular-nums">$110</text>
<text x="260" y="208" font-size="12" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">−$110</text>
<text x="390" y="208" font-size="12" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">+$15</text>
<text x="530" y="208" font-size="12" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">$95</text>
<text x="30" y="230" font-size="12" fill="currentColor" style="font-variant-numeric:tabular-nums">$85</text>
<text x="260" y="230" font-size="12" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">−$85</text>
<text x="390" y="230" font-size="12" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">−$10</text>
<text x="530" y="230" font-size="12" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">$95</text>
</svg>

Swaps are usually traded **over the counter** (OTC), meaning privately between two parties rather than on an exchange, though reforms after 2008 pushed much of this business into central clearing and trade reporting (Lesson 10).

| Feature | Exchange-traded (futures, listed options) | Over the counter (forwards, swaps, bespoke options) |
| --- | --- | --- |
| **Terms** | Standardised | Tailored to the client |
| **Counterparty risk** | Guaranteed by a clearing house | Bilateral, unless voluntarily cleared |
| **Price transparency** | Public, real-time prices | Private, negotiated prices |
| **Collateral** | Daily margin set by the clearing house | Negotiated collateral agreements |
| **Typical users** | Everyone, from funds to farmers | Corporates, banks, merchants |

---

## Check yourself

**1. You buy one COMEX gold contract at $4,300 an ounce, posting $43,000 of initial margin. Gold falls 5% to $4,085. What has happened to your deposit?**

<details>
<summary>Show the answer</summary>

The contract covers 100 ounces, so the loss is ($4,085 − $4,300) × 100 = **−$21,500**: half your $43,000 deposit, from a 5% move. Your margin was 10% of the contract's $430,000 value, so every 1% move in gold is 10% of your deposit. That is what tenfold leverage means.

</details>

**2. On the last day of trading, a futures contract is $1 above the price of the physical commodity at its delivery point. What would a trader do, and what happens to the gap?**

<details>
<summary>Show the answer</summary>

Buy the physical commodity, sell the futures contract and deliver against it, earning $1 a unit (less delivery costs). Traders keep doing this, buying physical and selling futures, until the two prices meet. That is why futures and physical prices converge at expiry.

</details>

**3. An airline buys a call option on jet fuel with a $100 strike for a $6 premium. What is its effective cost if fuel ends at $120? And at $80?**

<details>
<summary>Show the answer</summary>

At $120 it pays $120 for fuel but the call pays out $120 − $100 = $20, so its net cost is $120 − $20 + $6 premium = **$106**. At $80 the call is worthless and it simply pays $80 plus the $6 premium, **$86**. The option caps the cost at $106 and keeps most of the benefit of a fall, at the price of the premium.

</details>

---

## What to carry into Lesson 4

- The market has two layers: **physical** and **paper**. The paper market is far larger, and the possibility of delivery plus arbitrage keeps the two tied together.
- Physical deals are priced as a **benchmark plus a differential**, so benchmarks move billions of dollars of contracts.
- **Futures** fix the weaknesses of forwards through **clearing, margin, leverage and liquidity**. Margin is settled in cash every day, and leverage magnifies every move.
- Futures and physical prices **converge at expiry**. **Options** set caps and floors for a premium; **swaps** turn a floating price into a fixed one.

Lesson 3 described the tools. Lesson 4 puts them in a farmer's hands, works through a hedge to the last dollar, and shows the two ways a perfectly sensible hedge can still go wrong.

---

## Sources

- [ICE: record trading volumes in 2025, with Brent futures averaging 1.5 million contracts a day (Markets Media report)](https://www.marketsmedia.com/ice-reports-record-trading-volumes/)
- [CME Group: NYMEX WTI crude oil contract specifications](https://www.cmegroup.com/markets/energy/crude-oil/light-sweet-crude.contractSpecs.html)
