# Lesson 16: Derivatives in Pictures

*The guide restated as twenty-eight figures, one per idea, each captioned with what to notice and linked back to the lesson that taught it.*

---

## How to use this

Nothing here is new. It is the same arc you have just read, drawn rather than argued, which makes it useful twice over: as revision once you have finished the lessons, and as something to flick through before you next read a derivatives headline.

The order follows the guide. Read a caption, look at the figure, and if the idea does not land, follow the link back to the lesson that builds it properly.

---

## Part 1: The system on one page

### 1. The whole system

<svg viewBox="0 0 680 440" width="100%" role="img" aria-label="One-page map of the derivatives system. On the left, underlyings: interest rates, currencies, shares, credit, commodities and events. In the middle, the four building blocks, forwards, futures, options and swaps, priced by no-arbitrage from carry, put-call parity and copying, with volatility the one unknown input. On the right, the users: hedgers who shed risk, dealers and market makers who intermediate it, and speculators who take it on. Underneath, the plumbing: exchanges, clearing houses, ISDA contracts and netting, margin and reporting. Along the bottom, the six ways it breaks: the margin spiral, counterparty risk, dealer hedging flows, selling volatility, model risk and hidden concentration." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The whole system on one page</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">What they are written on, what they are, how they are priced, who uses them, and how it breaks</text>
<rect x="20" y="62" width="150" height="196" rx="8" class="vf3" fill="#1baf7a" fill-opacity="0.1"/>
<text x="34" y="84" font-size="13" fill="currentColor" font-weight="600">Underlyings</text>
<text x="160" y="84" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L1</text>
<text x="34" y="108" font-size="11.5" fill="currentColor" opacity="0.9">Interest rates</text>
<text x="34" y="132" font-size="11.5" fill="currentColor" opacity="0.9">Currencies</text>
<text x="34" y="156" font-size="11.5" fill="currentColor" opacity="0.9">Shares and indices</text>
<text x="34" y="180" font-size="11.5" fill="currentColor" opacity="0.9">Credit</text>
<text x="34" y="204" font-size="11.5" fill="currentColor" opacity="0.9">Commodities</text>
<text x="34" y="228" font-size="11.5" fill="currentColor" opacity="0.9">Events</text>
<rect x="200" y="62" width="270" height="120" rx="10" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.6" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="335" y="84" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Four building blocks</text>
<text x="460" y="84" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L2</text>
<text x="214" y="108" font-size="12" fill="currentColor" font-weight="600">Forward</text>
<text x="214" y="123" font-size="10" fill="currentColor" opacity="0.75">private, settled once</text>
<text x="346" y="108" font-size="12" fill="currentColor" font-weight="600">Future</text>
<text x="346" y="123" font-size="10" fill="currentColor" opacity="0.75">cleared, settled daily</text>
<text x="214" y="146" font-size="12" fill="currentColor" font-weight="600">Option</text>
<text x="214" y="161" font-size="10" fill="currentColor" opacity="0.75">a right, for a premium</text>
<text x="346" y="146" font-size="12" fill="currentColor" font-weight="600">Swap</text>
<text x="346" y="161" font-size="10" fill="currentColor" opacity="0.75">streams of payments</text>
<rect x="200" y="194" width="270" height="64" rx="8" class="vf7" fill="#4a3aa7" fill-opacity="0.1"/>
<text x="214" y="214" font-size="12" fill="currentColor" font-weight="600">Priced without forecasting</text>
<text x="214" y="232" font-size="10.5" fill="currentColor" opacity="0.8">carry, parity, copying; only volatility</text>
<text x="214" y="247" font-size="10.5" fill="currentColor" opacity="0.8">is unknown, so options trade it</text>
<text x="460" y="214" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L3 to 5</text>
<line x1="172" y1="150" x2="198" y2="150" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5"/>
<polygon points="198,150 191.6,152.9 191.6,147.1" fill="currentColor" fill-opacity="0.5"/>
<rect x="500" y="62" width="160" height="196" rx="8" class="vf4" fill="#eda100" fill-opacity="0.1"/>
<text x="514" y="84" font-size="13" fill="currentColor" font-weight="600">Users</text>
<text x="650" y="84" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L8, L10, L14</text>
<text x="514" y="110" font-size="12" fill="currentColor" font-weight="600">Hedgers</text>
<text x="514" y="125" font-size="10.5" fill="currentColor" opacity="0.75">shed risk</text>
<text x="514" y="148" font-size="12" fill="currentColor" font-weight="600">Dealers</text>
<text x="514" y="163" font-size="10.5" fill="currentColor" opacity="0.75">intermediate it</text>
<text x="514" y="186" font-size="12" fill="currentColor" font-weight="600">Market makers</text>
<text x="514" y="201" font-size="10.5" fill="currentColor" opacity="0.75">quote all day</text>
<text x="514" y="224" font-size="12" fill="currentColor" font-weight="600">Speculators</text>
<text x="514" y="239" font-size="10.5" fill="currentColor" opacity="0.75">take it on</text>
<line x1="472" y1="150" x2="498" y2="150" stroke="currentColor" stroke-width="1.4" stroke-opacity="0.5"/>
<polygon points="498,150 491.6,152.9 491.6,147.1" fill="currentColor" fill-opacity="0.5"/>
<rect x="20" y="272" width="640" height="64" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="34" y="294" font-size="13" fill="currentColor" font-weight="600">The plumbing</text>
<text x="650" y="294" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L6 to 8, L11</text>
<text x="34" y="318" font-size="11" fill="currentColor" opacity="0.85">Exchanges · clearing houses and the default waterfall · ISDA netting · initial and variation margin · reporting</text>
<rect x="20" y="350" width="640" height="76" rx="8" class="vf8" fill="#e34948" fill-opacity="0.08"/>
<text x="34" y="372" font-size="13" fill="currentColor" font-weight="600">How it breaks</text>
<text x="650" y="372" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.55">L9, L12, L13</text>
<text x="34" y="396" font-size="11" fill="currentColor" opacity="0.85">Margin spiral · counterparty risk · dealer hedging flows · selling volatility</text>
<text x="34" y="414" font-size="11" fill="currentColor" opacity="0.85">Model risk · hidden concentration</text>
</svg>

Derivatives are written on rates, currencies, shares, credit, commodities and events. They come in four building blocks, priced by what it costs to copy them. Hedgers, dealers, market makers and speculators pass risk between them, the plumbing holds it together, and six recurring patterns describe how it breaks.

---

## Part 2: What a derivative is

*Taught in [Lesson 1](?slug=derivatives&lesson=lesson-01-what-a-derivative-is)*

### 2. The contract is zero-sum; the outcome is not a bet

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

The farmer's gain on the contract is the baker's loss, pound for pound. But each has swapped an uncertain price for a certain one. Always ask who holds the risk, and whether they can afford it.

### 3. Notional is not money

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

$844.6 trillion of contracts refer to underlyings worth that much; replacing them all would cost $22.8 trillion; after netting, about $3.35 trillion is genuinely at risk, before collateral.

---

## Part 3: The building blocks

*Taught in [Lesson 2](?slug=derivatives&lesson=lesson-02-the-four-building-blocks)*

### 4. Four shapes

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

A forward and a future share a straight-line payoff and differ in when the cash moves. An option bends at the strike. A swap is a series of net payments on set dates.

### 5. The family tree

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

Almost everything else, from CFDs to convertibles to crypto perpetuals, is one block in disguise or a bundle of several.

### 6. Decompose before you judge

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

A kick-out plan is a bond, a digital call you bought and a crash put you sold. The cliff on the left is the insurance you are providing.

---

## Part 4: Pricing without forecasting

*Taught in [Lesson 3](?slug=derivatives&lesson=lesson-03-the-price-nobody-forecasts)*

### 7. The forward price is the cost of carry

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Waterfall chart of the fair one-year forward price of a share. Start with the share at £100. Add £4 of interest, the cost of borrowing the money to buy it today, and subtract the £2 dividend that the owner receives during the year, giving a forward price of £102. If a dealer quoted £105, a trader could buy the share, sell the forward and lock in £3; if a dealer quoted £99, the trade would run the other way." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The forward price is the cost of buying now and holding</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Fair one-year forward on a £100 share, 4% interest, £2 dividend. Illustrative.</text>
<line x1="60" y1="280" x2="420" y2="280" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="284" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£90</text>
<line x1="60" y1="227.5" x2="420" y2="227.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="231.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£95</text>
<line x1="60" y1="175" x2="420" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="179" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£100</text>
<line x1="60" y1="122.5" x2="420" y2="122.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="126.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£105</text>
<line x1="60" y1="70" x2="420" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£110</text>
<path d="M75,280 L75,178 Q75,175 78,175 L132,175 Q135,175 135,178 L135,280 Z" class="vf1" fill="#2a78d6"><title>Share today: £100</title></path>
<text x="105" y="167" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">£100</text>
<text x="105" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Share today</text>
<rect x="165" y="133" width="60" height="42" rx="2" class="vf2" fill="#eb6834"><title>+ interest: £4</title></rect>
<text x="195" y="125" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">+£4</text>
<line x1="135" y1="175" x2="165" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.45" stroke-dasharray="3 3"/>
<text x="195" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">+ interest</text>
<rect x="255" y="133" width="60" height="21" rx="2" class="vf3" fill="#1baf7a"><title>− dividend: £2</title></rect>
<text x="285" y="125" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">−£2</text>
<line x1="225" y1="133" x2="255" y2="133" stroke="currentColor" stroke-width="1" stroke-opacity="0.45" stroke-dasharray="3 3"/>
<text x="285" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">− dividend</text>
<path d="M345,280 L345,157 Q345,154 348,154 L402,154 Q405,154 405,157 L405,280 Z" class="vf1" fill="#2a78d6"><title>Forward price: £102</title></path>
<text x="375" y="146" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">£102</text>
<text x="375" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Forward price</text>
<text x="60" y="316" font-size="10.5" fill="currentColor" opacity="0.6">The bars start at £90 to make the steps visible.</text>
<line x1="450" y1="64" x2="450" y2="296" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<text x="468" y="84" font-size="12" fill="currentColor" font-weight="600">If a dealer quotes £105</text>
<text x="468" y="102" font-size="11" fill="currentColor" opacity="0.82">Borrow £100, buy the share,</text>
<text x="468" y="117" font-size="11" fill="currentColor" opacity="0.82">sell the forward at £105.</text>
<text x="468" y="132" font-size="11" fill="currentColor" opacity="0.82">Next year: deliver the share,</text>
<text x="468" y="147" font-size="11" fill="currentColor" opacity="0.82">keep the £2 dividend, repay £104.</text>
<text x="468" y="162" font-size="11" fill="currentColor" opacity="0.82">Locked-in profit: £3.</text>
<text x="468" y="206" font-size="12" fill="currentColor" font-weight="600">If a dealer quotes £99</text>
<text x="468" y="224" font-size="11" fill="currentColor" opacity="0.82">Borrow the share and sell it,</text>
<text x="468" y="239" font-size="11" fill="currentColor" opacity="0.82">lend the £100, buy the forward.</text>
<text x="468" y="254" font-size="11" fill="currentColor" opacity="0.82">The same £3, the other way round.</text>
</svg>

Spot plus interest minus income. Any other price hands someone a riskless profit, which is why a forward is arithmetic, not a forecast.

### 8. Price an option by copying it

<svg viewBox="0 0 680 380" width="100%" role="img" aria-label="One-step tree for pricing a call option by copying it. A share at £100 will be worth either £120 or £80 in a year, and interest is 5%. A call with a £100 strike will pay £20 or nothing. The same payoffs come from buying half a share for £50 and borrowing £38.10, which must be repaid as £40: in the up state half a share is worth £60, minus £40, which is £20; in the down state it is worth £40, minus £40, which is nothing. So the call is worth what the copy costs: £50 minus £38.10, or £11.90, whatever the chances of the up move." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Price an option by building a copy of it</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A share that will be £120 or £80 in a year; a call struck at £100; 5% interest</text>
<rect x="32" y="164" width="116" height="52" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="90" y="185" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Share £100</text>
<text x="90" y="204" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">call: ?</text>
<rect x="232" y="84" width="116" height="52" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="290" y="105" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Share £120</text>
<text x="290" y="124" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">call pays £20</text>
<rect x="232" y="244" width="116" height="52" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="290" y="265" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Share £80</text>
<text x="290" y="284" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">call pays £0</text>
<line x1="150" y1="178" x2="230" y2="126" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
<polygon points="230,126 226.2,131.9 223.1,127.1" fill="currentColor" fill-opacity="0.6"/>
<line x1="150" y1="202" x2="230" y2="254" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>
<polygon points="230,254 223.1,252.9 226.2,248.1" fill="currentColor" fill-opacity="0.6"/>
<text x="176" y="140" font-size="11" fill="currentColor" opacity="0.7">up</text>
<text x="176" y="250" font-size="11" fill="currentColor" opacity="0.7">down</text>
<text x="90" y="236" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.6">today</text>
<text x="290" y="316" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.6">in one year</text>
<line x1="372" y1="64" x2="372" y2="340" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<text x="392" y="76" font-size="12.5" fill="currentColor" font-weight="600">The copy: buy ½ share, borrow £38.10</text>
<text x="392" y="104" font-size="11.5" fill="currentColor" font-weight="600" opacity="0.85"></text>
<text x="560" y="104" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">Up</text>
<text x="640" y="104" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">Down</text>
<text x="392" y="130" font-size="11.5" fill="currentColor" opacity="0.85">½ share worth</text>
<text x="560" y="130" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">£60</text>
<text x="640" y="130" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">£40</text>
<text x="392" y="156" font-size="11.5" fill="currentColor" opacity="0.85">repay the loan</text>
<text x="560" y="156" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">−£40</text>
<text x="640" y="156" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">−£40</text>
<text x="392" y="182" font-size="11.5" fill="currentColor" font-weight="600" opacity="0.85">copy pays</text>
<text x="560" y="182" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">£20</text>
<text x="640" y="182" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="392" y1="165" x2="640" y2="165" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<text x="392" y="208" font-size="11.5" fill="currentColor" font-weight="600" opacity="0.85">call pays</text>
<text x="560" y="208" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">£20</text>
<text x="640" y="208" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">£0</text>
<rect x="392" y="232" width="248" height="74" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="404" y="254" font-size="11.5" fill="currentColor" opacity="0.85">Cost of the copy today</text>
<text x="404" y="276" font-size="15" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">£50.00 − £38.10 = £11.90</text>
<text x="404" y="296" font-size="11" fill="currentColor" opacity="0.75">so that is what the call must cost</text>
<text x="392" y="330" font-size="10.5" fill="currentColor" opacity="0.65">£38.10 borrowed today grows to £40.00 at 5%.</text>
<text x="392" y="344" font-size="10.5" fill="currentColor" opacity="0.65">The odds of up or down never appear.</text>
</svg>

Half a share and a loan reproduce the call in every outcome, so the call costs what the copy costs, whatever the odds. What matters is how far the price might move.

---

## Part 5: Options

*Taught in [Lesson 4](?slug=derivatives&lesson=lesson-04-options-paying-for-uncertainty) and [Lesson 5](?slug=derivatives&lesson=lesson-05-the-greeks-hedging-and-strategies)*

### 9. Buyers lose the premium; sellers can lose far more

<svg viewBox="0 0 680 470" width="100%" role="img" aria-label="Four payoff diagrams showing profit at expiry per share against the share price at expiry, from £80 to £130. Buy a call struck at £105 for £3.00: the loss is capped at the premium and the profit grows above the breakeven of £108.00. Sell that call: keep the £3.00 premium below £105, but the loss keeps growing as the share rises. Buy a put struck at £95 for £2.13: the loss is capped at the premium and the profit grows as the share falls below £92.87. Sell that put: keep the premium above £95, but lose heavily if the share collapses." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Option buyers can only lose the premium; sellers can lose far more</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Profit at expiry per share. Calls struck at £105 (premium £3.00), puts at £95 (premium £2.13).</text>
<rect x="20" y="64" width="310" height="186" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="34" y="86" font-size="13" fill="currentColor" font-weight="600">Buy a call</text>
<text x="34" y="103" font-size="10.5" fill="currentColor" opacity="0.72">Pay a premium for the right to buy</text>
<line x1="70" y1="218.8" x2="316" y2="218.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="64" y="222.8" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="70" y1="175" x2="316" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="64" y="179" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="70" y1="131.2" x2="316" y2="131.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="64" y="135.2" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="70" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="193" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£105</text>
<text x="316" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£130</text>
<polyline points="70,181.6 74.9,181.6 79.8,181.6 84.8,181.6 89.7,181.6 94.6,181.6 99.5,181.6 104.4,181.6 109.4,181.6 114.3,181.6 119.2,181.6 124.1,181.6 129,181.6 134,181.6 138.9,181.6 143.8,181.6 148.7,181.6 153.6,181.6 158.6,181.6 163.5,181.6 168.4,181.6 173.3,181.6 178.2,181.6 183.2,181.6 188.1,181.6 193,181.6 197.9,179.4 202.8,177.2 207.8,175 212.7,172.8 217.6,170.6 222.5,168.4 227.4,166.2 232.4,164 237.3,161.8 242.2,159.7 247.1,157.5 252,155.3 257,153.1 261.9,150.9 266.8,148.7 271.7,146.5 276.6,144.3 281.6,142.1 286.5,139.9 291.4,137.7 296.3,135.5 301.2,133.3 306.2,131.2 311.1,129 316,126.8" class="vs1" stroke="#2a78d6" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="207.8" cy="175" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Breakeven £108.00</title></circle>
<text x="213.8" y="190" font-size="10" fill="currentColor" opacity="0.8">breakeven £108</text>
<text x="79.8" y="196.6" font-size="10" fill="currentColor" opacity="0.8">lose at most £3.00</text>
<rect x="350" y="64" width="310" height="186" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="364" y="86" font-size="13" fill="currentColor" font-weight="600">Sell a call</text>
<text x="364" y="103" font-size="10.5" fill="currentColor" opacity="0.72">Collect a premium; must sell at the strike</text>
<line x1="400" y1="218.8" x2="646" y2="218.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="222.8" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="400" y1="175" x2="646" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="394" y="179" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="400" y1="131.2" x2="646" y2="131.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="135.2" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="400" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="523" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£105</text>
<text x="646" y="246" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£130</text>
<polyline points="400,168.4 404.9,168.4 409.8,168.4 414.8,168.4 419.7,168.4 424.6,168.4 429.5,168.4 434.4,168.4 439.4,168.4 444.3,168.4 449.2,168.4 454.1,168.4 459,168.4 464,168.4 468.9,168.4 473.8,168.4 478.7,168.4 483.6,168.4 488.6,168.4 493.5,168.4 498.4,168.4 503.3,168.4 508.2,168.4 513.2,168.4 518.1,168.4 523,168.4 527.9,170.6 532.8,172.8 537.8,175 542.7,177.2 547.6,179.4 552.5,181.6 557.4,183.8 562.4,186 567.3,188.2 572.2,190.3 577.1,192.5 582,194.7 587,196.9 591.9,199.1 596.8,201.3 601.7,203.5 606.6,205.7 611.6,207.9 616.5,210.1 621.4,212.3 626.3,214.5 631.2,216.7 636.2,218.8 641.1,221 646,223.2" class="vs2" stroke="#eb6834" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="537.8" cy="175" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Breakeven £108.00</title></circle>
<text x="543.8" y="168" font-size="10" fill="currentColor" opacity="0.8">breakeven £108</text>
<text x="409.8" y="161.4" font-size="10" fill="currentColor" opacity="0.8">keep £3.00</text>
<text x="606.6" y="201.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.8">no floor</text>
<rect x="20" y="262" width="310" height="186" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="34" y="284" font-size="13" fill="currentColor" font-weight="600">Buy a put</text>
<text x="34" y="301" font-size="10.5" fill="currentColor" opacity="0.72">Pay a premium for the right to sell</text>
<line x1="70" y1="416.8" x2="316" y2="416.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="64" y="420.8" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="70" y1="373" x2="316" y2="373" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="64" y="377" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="70" y1="329.2" x2="316" y2="329.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="64" y="333.2" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="70" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="143.8" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£95</text>
<text x="316" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£130</text>
<polyline points="70,344.8 74.9,347 79.8,349.2 84.8,351.4 89.7,353.5 94.6,355.7 99.5,357.9 104.4,360.1 109.4,362.3 114.3,364.5 119.2,366.7 124.1,368.9 129,371.1 134,373.3 138.9,375.5 143.8,377.7 148.7,377.7 153.6,377.7 158.6,377.7 163.5,377.7 168.4,377.7 173.3,377.7 178.2,377.7 183.2,377.7 188.1,377.7 193,377.7 197.9,377.7 202.8,377.7 207.8,377.7 212.7,377.7 217.6,377.7 222.5,377.7 227.4,377.7 232.4,377.7 237.3,377.7 242.2,377.7 247.1,377.7 252,377.7 257,377.7 261.9,377.7 266.8,377.7 271.7,377.7 276.6,377.7 281.6,377.7 286.5,377.7 291.4,377.7 296.3,377.7 301.2,377.7 306.2,377.7 311.1,377.7 316,377.7" class="vs1" stroke="#2a78d6" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="133.3" cy="373" r="4" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Breakeven £92.87</title></circle>
<text x="139.3" y="366" font-size="10" fill="currentColor" opacity="0.8">breakeven £92.87</text>
<text x="306.2" y="392.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.8">lose at most £2.13</text>
<rect x="350" y="262" width="310" height="186" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="364" y="284" font-size="13" fill="currentColor" font-weight="600">Sell a put</text>
<text x="364" y="301" font-size="10.5" fill="currentColor" opacity="0.72">Collect a premium; must buy at the strike</text>
<line x1="400" y1="416.8" x2="646" y2="416.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="420.8" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="400" y1="373" x2="646" y2="373" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="394" y="377" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="400" y1="329.2" x2="646" y2="329.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="333.2" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="400" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="473.8" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£95</text>
<text x="646" y="444" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£130</text>
<polyline points="400,401.2 404.9,399 409.8,396.8 414.8,394.6 419.7,392.5 424.6,390.3 429.5,388.1 434.4,385.9 439.4,383.7 444.3,381.5 449.2,379.3 454.1,377.1 459,374.9 464,372.7 468.9,370.5 473.8,368.3 478.7,368.3 483.6,368.3 488.6,368.3 493.5,368.3 498.4,368.3 503.3,368.3 508.2,368.3 513.2,368.3 518.1,368.3 523,368.3 527.9,368.3 532.8,368.3 537.8,368.3 542.7,368.3 547.6,368.3 552.5,368.3 557.4,368.3 562.4,368.3 567.3,368.3 572.2,368.3 577.1,368.3 582,368.3 587,368.3 591.9,368.3 596.8,368.3 601.7,368.3 606.6,368.3 611.6,368.3 616.5,368.3 621.4,368.3 626.3,368.3 631.2,368.3 636.2,368.3 641.1,368.3 646,368.3" class="vs2" stroke="#eb6834" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="463.3" cy="373" r="4" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Breakeven £92.87</title></circle>
<text x="469.3" y="388" font-size="10" fill="currentColor" opacity="0.8">breakeven £92.87</text>
<text x="636.2" y="361.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.8">keep £2.13</text>
<text x="409.8" y="415.2" font-size="10" fill="currentColor" opacity="0.8">big loss if</text>
<text x="409.8" y="428.2" font-size="10" fill="currentColor" opacity="0.8">the share collapses</text>
</svg>

Every line bends at the strike. Buyers have a floor under their losses; sellers have a ceiling on their gains.

### 10. Time value melts

<svg viewBox="0 0 680 360" width="100%" role="img" aria-label="Line chart of the value of the £105 call against the share price, from £84 to £126, at three moments: with three months left, with one month left, and at expiry. With the share at £100 the call is worth £3.00 with three months left, £1.01 with one month left and nothing at expiry. The gap between each curve and the expiry line is time value. It is widest near the strike and vanishes at expiry, when only intrinsic value remains." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Time value melts: £3.00 with three months left, £1.01 with one, nothing at expiry</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Value per share of our £105 call against the share price. Black-Scholes, 23.2% volatility, 4% interest.</text>
<line x1="70" y1="300" x2="640" y2="300" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="304" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="70" y1="263.3" x2="640" y2="263.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="267.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£4</text>
<line x1="70" y1="226.7" x2="640" y2="226.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="230.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£8</text>
<line x1="70" y1="190" x2="640" y2="190" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="194" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£12</text>
<line x1="70" y1="153.3" x2="640" y2="153.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="157.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£16</text>
<line x1="70" y1="116.7" x2="640" y2="116.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="120.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£20</text>
<line x1="70" y1="80" x2="640" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="84" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£24</text>
<text x="83.6" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£85</text>
<text x="151.4" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£90</text>
<text x="219.3" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£95</text>
<text x="287.1" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£100</text>
<text x="355" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£105</text>
<text x="422.9" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£110</text>
<text x="490.7" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£115</text>
<text x="558.6" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£120</text>
<text x="626.4" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£125</text>
<text x="355" y="340" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">share price</text>
<polygon points="70,298.7 76.8,298.5 83.6,298.3 90.4,298.1 97.1,297.8 103.9,297.6 110.7,297.3 117.5,296.9 124.3,296.6 131.1,296.2 137.9,295.7 144.6,295.2 151.4,294.7 158.2,294.2 165,293.6 171.8,292.9 178.6,292.2 185.4,291.4 192.1,290.6 198.9,289.7 205.7,288.8 212.5,287.8 219.3,286.8 226.1,285.7 232.9,284.5 239.6,283.2 246.4,281.9 253.2,280.5 260,279.1 266.8,277.5 273.6,275.9 280.4,274.3 287.1,272.5 293.9,270.7 300.7,268.8 307.5,266.8 314.3,264.7 321.1,262.6 327.9,260.4 334.6,258.1 341.4,255.7 348.2,253.3 355,250.8 361.8,248.2 368.6,245.5 375.4,242.8 382.1,239.9 388.9,237.1 395.7,234.1 402.5,231.1 409.3,228 416.1,224.9 422.9,221.7 429.6,218.4 436.4,215.1 443.2,211.7 450,208.2 456.8,204.7 463.6,201.2 470.4,197.6 477.1,193.9 483.9,190.2 490.7,186.4 497.5,182.7 504.3,178.8 511.1,174.9 517.9,171 524.6,167.1 531.4,163.1 538.2,159 545,155 551.8,150.9 558.6,146.8 565.4,142.6 572.1,138.4 578.9,134.2 585.7,130 592.5,125.8 599.3,121.5 606.1,117.2 612.9,112.9 619.6,108.6 626.4,104.2 633.2,99.8 640,95.5 640,107.5 633.2,112.1 626.4,116.7 619.6,121.2 612.9,125.8 606.1,130.4 599.3,135 592.5,139.6 585.7,144.2 578.9,148.8 572.1,153.3 565.4,157.9 558.6,162.5 551.8,167.1 545,171.7 538.2,176.2 531.4,180.8 524.6,185.4 517.9,190 511.1,194.6 504.3,199.2 497.5,203.8 490.7,208.3 483.9,212.9 477.1,217.5 470.4,222.1 463.6,226.7 456.8,231.2 450,235.8 443.2,240.4 436.4,245 429.6,249.6 422.9,254.2 416.1,258.8 409.3,263.3 402.5,267.9 395.7,272.5 388.9,277.1 382.1,281.7 375.4,286.2 368.6,290.8 361.8,295.4 355,300 348.2,300 341.4,300 334.6,300 327.9,300 321.1,300 314.3,300 307.5,300 300.7,300 293.9,300 287.1,300 280.4,300 273.6,300 266.8,300 260,300 253.2,300 246.4,300 239.6,300 232.9,300 226.1,300 219.3,300 212.5,300 205.7,300 198.9,300 192.1,300 185.4,300 178.6,300 171.8,300 165,300 158.2,300 151.4,300 144.6,300 137.9,300 131.1,300 124.3,300 117.5,300 110.7,300 103.9,300 97.1,300 90.4,300 83.6,300 76.8,300 70,300" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<polyline points="70,300 76.8,300 83.6,300 90.4,300 97.1,300 103.9,300 110.7,300 117.5,300 124.3,300 131.1,300 137.9,300 144.6,300 151.4,300 158.2,300 165,300 171.8,300 178.6,300 185.4,300 192.1,300 198.9,300 205.7,300 212.5,300 219.3,300 226.1,300 232.9,300 239.6,300 246.4,300 253.2,300 260,300 266.8,300 273.6,300 280.4,300 287.1,300 293.9,300 300.7,300 307.5,300 314.3,300 321.1,300 327.9,300 334.6,300 341.4,300 348.2,300 355,300 361.8,295.4 368.6,290.8 375.4,286.2 382.1,281.7 388.9,277.1 395.7,272.5 402.5,267.9 409.3,263.3 416.1,258.8 422.9,254.2 429.6,249.6 436.4,245 443.2,240.4 450,235.8 456.8,231.2 463.6,226.7 470.4,222.1 477.1,217.5 483.9,212.9 490.7,208.3 497.5,203.8 504.3,199.2 511.1,194.6 517.9,190 524.6,185.4 531.4,180.8 538.2,176.2 545,171.7 551.8,167.1 558.6,162.5 565.4,157.9 572.1,153.3 578.9,148.8 585.7,144.2 592.5,139.6 599.3,135 606.1,130.4 612.9,125.8 619.6,121.2 626.4,116.7 633.2,112.1 640,107.5" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-opacity="0.5"/>
<polyline points="70,300 76.8,300 83.6,300 90.4,300 97.1,300 103.9,300 110.7,299.9 117.5,299.9 124.3,299.9 131.1,299.9 137.9,299.8 144.6,299.8 151.4,299.7 158.2,299.7 165,299.6 171.8,299.5 178.6,299.4 185.4,299.2 192.1,299.1 198.9,298.8 205.7,298.6 212.5,298.3 219.3,298 226.1,297.6 232.9,297.1 239.6,296.6 246.4,296 253.2,295.4 260,294.6 266.8,293.8 273.6,292.9 280.4,291.8 287.1,290.7 293.9,289.5 300.7,288.1 307.5,286.6 314.3,285 321.1,283.3 327.9,281.4 334.6,279.4 341.4,277.3 348.2,275.1 355,272.7 361.8,270.2 368.6,267.6 375.4,264.8 382.1,261.9 388.9,258.9 395.7,255.8 402.5,252.6 409.3,249.2 416.1,245.8 422.9,242.2 429.6,238.6 436.4,234.9 443.2,231.1 450,227.2 456.8,223.3 463.6,219.3 470.4,215.2 477.1,211.1 483.9,206.9 490.7,202.7 497.5,198.4 504.3,194.1 511.1,189.8 517.9,185.4 524.6,181.1 531.4,176.6 538.2,172.2 545,167.7 551.8,163.3 558.6,158.8 565.4,154.3 572.1,149.8 578.9,145.2 585.7,140.7 592.5,136.2 599.3,131.6 606.1,127.1 612.9,122.5 619.6,117.9 626.4,113.4 633.2,108.8 640,104.2" class="vs7" stroke="#4a3aa7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="70,298.7 76.8,298.5 83.6,298.3 90.4,298.1 97.1,297.8 103.9,297.6 110.7,297.3 117.5,296.9 124.3,296.6 131.1,296.2 137.9,295.7 144.6,295.2 151.4,294.7 158.2,294.2 165,293.6 171.8,292.9 178.6,292.2 185.4,291.4 192.1,290.6 198.9,289.7 205.7,288.8 212.5,287.8 219.3,286.8 226.1,285.7 232.9,284.5 239.6,283.2 246.4,281.9 253.2,280.5 260,279.1 266.8,277.5 273.6,275.9 280.4,274.3 287.1,272.5 293.9,270.7 300.7,268.8 307.5,266.8 314.3,264.7 321.1,262.6 327.9,260.4 334.6,258.1 341.4,255.7 348.2,253.3 355,250.8 361.8,248.2 368.6,245.5 375.4,242.8 382.1,239.9 388.9,237.1 395.7,234.1 402.5,231.1 409.3,228 416.1,224.9 422.9,221.7 429.6,218.4 436.4,215.1 443.2,211.7 450,208.2 456.8,204.7 463.6,201.2 470.4,197.6 477.1,193.9 483.9,190.2 490.7,186.4 497.5,182.7 504.3,178.8 511.1,174.9 517.9,171 524.6,167.1 531.4,163.1 538.2,159 545,155 551.8,150.9 558.6,146.8 565.4,142.6 572.1,138.4 578.9,134.2 585.7,130 592.5,125.8 599.3,121.5 606.1,117.2 612.9,112.9 619.6,108.6 626.4,104.2 633.2,99.8 640,95.5" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="287.1" cy="272.5" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>3 months left, share at £100: £3.00</title></circle>
<circle cx="287.1" cy="290.7" r="4.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>1 month left, share at £100: £1.01</title></circle>
<line x1="287.1" y1="70" x2="287.1" y2="300" stroke="currentColor" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="4 4"/>
<line x1="355" y1="70" x2="355" y2="300" stroke="currentColor" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="4 4"/>
<text x="283.1" y="76" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">today, £100</text>
<text x="359" y="76" font-size="10.5" fill="currentColor" opacity="0.7">strike, £105</text>
<text x="232.9" y="257.8" font-size="11" fill="currentColor" font-weight="600" opacity="0.8">time value</text>
<line x1="70" y1="350" x2="88" y2="350" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="94" y="354" font-size="11.5" fill="currentColor" opacity="0.85">3 months left</text>
<line x1="187.4" y1="350" x2="205.4" y2="350" class="vs7" stroke="#4a3aa7" stroke-width="2.5" stroke-linecap="round"/>
<text x="211.4" y="354" font-size="11.5" fill="currentColor" opacity="0.85">1 month left</text>
<line x1="298.6" y1="350" x2="316.6" y2="350" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<text x="322.6" y="354" font-size="11.5" fill="currentColor" opacity="0.85">At expiry: intrinsic value</text>
</svg>

The gap between each curve and the hockey stick is time value, widest near the strike, and gone at expiry.

### 11. Insurance usually costs more than the damage

<svg viewBox="0 0 680 340" width="100%" role="img" aria-label="Bar chart, one bar a month from 2016-10 to 2026-09, of the VIX at the start of the month minus the S&amp;P 500's volatility actually realised over the following 21 trading days. The bar is positive in 84% of months: implied volatility, the price of protection, usually exceeds what happens, by 3.8 points on average (18.7 against 14.9). The exceptions are rare and violent: 2020-03 (-61 points), 2025-04 (-27 points), 2020-02 (-16 points)." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Insurance usually costs more than the damage, until it does not</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Each month: the VIX at the start, minus S&amp;P 500 volatility over the next 21 trading days, in points</text>
<line x1="70" y1="277.6" x2="640" y2="277.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="281.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-60</text>
<line x1="70" y1="227.8" x2="640" y2="227.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="231.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-40</text>
<line x1="70" y1="178" x2="640" y2="178" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="182" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-20</text>
<line x1="70" y1="128.2" x2="640" y2="128.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="132.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="70" y1="78.4" x2="640" y2="78.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="82.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+20</text>
<path d="M70.7,128.2 L70.7,114.7 Q70.7,113.7 71.7,113.7 L73.1,113.7 Q74.1,113.7 74.1,114.7 L74.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2016-10: VIX minus realised +5.8 points</title></path>
<path d="M75.4,128.2 L75.4,108.6 Q75.4,107.6 76.4,107.6 L77.8,107.6 Q78.8,107.6 78.8,108.6 L78.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2016-11: VIX minus realised +8.3 points</title></path>
<path d="M80.2,128.2 L80.2,114.7 Q80.2,113.7 81.2,113.7 L82.6,113.7 Q83.6,113.7 83.6,114.7 L83.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2016-12: VIX minus realised +5.8 points</title></path>
<path d="M84.9,128.2 L84.9,111.4 Q84.9,110.4 85.9,110.4 L87.3,110.4 Q88.3,110.4 88.3,111.4 L88.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-01: VIX minus realised +7.1 points</title></path>
<path d="M89.7,128.2 L89.7,116.3 Q89.7,115.3 90.7,115.3 L92.1,115.3 Q93.1,115.3 93.1,116.3 L93.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-02: VIX minus realised +5.2 points</title></path>
<path d="M94.4,128.2 L94.4,115.2 Q94.4,114.2 95.4,114.2 L96.8,114.2 Q97.8,114.2 97.8,115.2 L97.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-03: VIX minus realised +5.6 points</title></path>
<path d="M99.2,128.2 L99.2,115.7 Q99.2,114.7 100.2,114.7 L101.6,114.7 Q102.6,114.7 102.6,115.7 L102.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-04: VIX minus realised +5.4 points</title></path>
<path d="M103.9,128.2 L103.9,123.8 Q103.9,122.8 104.9,122.8 L106.3,122.8 Q107.3,122.8 107.3,123.8 L107.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-05: VIX minus realised +2.2 points</title></path>
<path d="M108.7,128.2 L108.7,122.1 Q108.7,121.1 109.7,121.1 L111.1,121.1 Q112.1,121.1 112.1,122.1 L112.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-06: VIX minus realised +2.9 points</title></path>
<path d="M113.4,128.2 L113.4,115 Q113.4,114 114.4,114 L115.8,114 Q116.8,114 116.8,115 L116.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-07: VIX minus realised +5.7 points</title></path>
<path d="M118.2,128.2 L118.2,127.8 Q118.2,126.8 119.2,126.8 L120.6,126.8 Q121.6,126.8 121.6,127.8 L121.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-08: VIX minus realised +0.6 points</title></path>
<path d="M122.9,128.2 L122.9,117.9 Q122.9,116.9 123.9,116.9 L125.3,116.9 Q126.3,116.9 126.3,117.9 L126.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-09: VIX minus realised +4.6 points</title></path>
<path d="M127.7,128.2 L127.7,117.8 Q127.7,116.8 128.7,116.8 L130.1,116.8 Q131.1,116.8 131.1,117.8 L131.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-10: VIX minus realised +4.6 points</title></path>
<path d="M132.4,128.2 L132.4,119.8 Q132.4,118.8 133.4,118.8 L134.8,118.8 Q135.8,118.8 135.8,119.8 L135.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-11: VIX minus realised +3.8 points</title></path>
<path d="M137.2,128.2 L137.2,116.5 Q137.2,115.5 138.2,115.5 L139.6,115.5 Q140.6,115.5 140.6,116.5 L140.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2017-12: VIX minus realised +5.1 points</title></path>
<path d="M141.9,128.2 L141.9,126.6 Q141.9,125.6 142.9,125.6 L144.3,125.6 Q145.3,125.6 145.3,126.6 L145.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-01: VIX minus realised +1.1 points</title></path>
<path d="M146.7,128.2 L146.7,160.6 Q146.7,161.6 147.7,161.6 L149.1,161.6 Q150.1,161.6 150.1,160.6 L150.1,128.2 Z" class="vf2" fill="#eb6834"><title>2018-02: VIX minus realised -13.4 points</title></path>
<path d="M151.4,128.2 L151.4,125.7 Q151.4,124.7 152.4,124.7 L153.8,124.7 Q154.8,124.7 154.8,125.7 L154.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-03: VIX minus realised +1.4 points</title></path>
<path d="M156.2,128.2 L156.2,108.3 Q156.2,107.3 157.2,107.3 L158.6,107.3 Q159.6,107.3 159.6,108.3 L159.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-04: VIX minus realised +8.4 points</title></path>
<path d="M160.9,128.2 L160.9,117.1 Q160.9,116.1 161.9,116.1 L163.3,116.1 Q164.3,116.1 164.3,117.1 L164.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-05: VIX minus realised +4.9 points</title></path>
<path d="M165.7,128.2 L165.7,115.8 Q165.7,114.8 166.7,114.8 L168.1,114.8 Q169.1,114.8 169.1,115.8 L169.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-06: VIX minus realised +5.4 points</title></path>
<path d="M170.4,128.2 L170.4,112 Q170.4,111 171.4,111 L172.8,111 Q173.8,111 173.8,112 L173.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-07: VIX minus realised +6.9 points</title></path>
<path d="M175.2,128.2 L175.2,114.7 Q175.2,113.7 176.2,113.7 L177.6,113.7 Q178.6,113.7 178.6,114.7 L178.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-08: VIX minus realised +5.8 points</title></path>
<path d="M179.9,128.2 L179.9,110 Q179.9,109 180.9,109 L182.3,109 Q183.3,109 183.3,110 L183.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-09: VIX minus realised +7.7 points</title></path>
<path d="M184.7,128.2 L184.7,154.3 Q184.7,155.3 185.7,155.3 L187.1,155.3 Q188.1,155.3 188.1,154.3 L188.1,128.2 Z" class="vf2" fill="#eb6834"><title>2018-10: VIX minus realised -10.9 points</title></path>
<path d="M189.4,128.2 L189.4,128 Q189.4,127 190.4,127 L191.8,127 Q192.8,127 192.8,128 L192.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2018-11: VIX minus realised +0.5 points</title></path>
<path d="M194.2,128.2 L194.2,165.2 Q194.2,166.2 195.2,166.2 L196.6,166.2 Q197.6,166.2 197.6,165.2 L197.6,128.2 Z" class="vf2" fill="#eb6834"><title>2018-12: VIX minus realised -15.3 points</title></path>
<path d="M198.9,128.2 L198.9,117.4 Q198.9,116.4 199.9,116.4 L201.3,116.4 Q202.3,116.4 202.3,117.4 L202.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-01: VIX minus realised +4.7 points</title></path>
<path d="M203.7,128.2 L203.7,109.7 Q203.7,108.7 204.7,108.7 L206.1,108.7 Q207.1,108.7 207.1,109.7 L207.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-02: VIX minus realised +7.8 points</title></path>
<path d="M208.4,128.2 L208.4,125.7 Q208.4,124.7 209.4,124.7 L210.8,124.7 Q211.8,124.7 211.8,125.7 L211.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-03: VIX minus realised +1.4 points</title></path>
<path d="M213.2,128.2 L213.2,110.6 Q213.2,109.6 214.2,109.6 L215.6,109.6 Q216.6,109.6 216.6,110.6 L216.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-04: VIX minus realised +7.5 points</title></path>
<path d="M217.9,128.2 L217.9,128 Q217.9,127 218.9,127 L220.3,127 Q221.3,127 221.3,128 L221.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-05: VIX minus realised +0.5 points</title></path>
<path d="M222.7,128.2 L222.7,107.4 Q222.7,106.4 223.7,106.4 L225.1,106.4 Q226.1,106.4 226.1,107.4 L226.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-06: VIX minus realised +8.8 points</title></path>
<path d="M227.4,128.2 L227.4,114.6 Q227.4,113.6 228.4,113.6 L229.8,113.6 Q230.8,113.6 230.8,114.6 L230.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-07: VIX minus realised +5.9 points</title></path>
<path d="M232.2,128.2 L232.2,140.5 Q232.2,141.5 233.2,141.5 L234.6,141.5 Q235.6,141.5 235.6,140.5 L235.6,128.2 Z" class="vf2" fill="#eb6834"><title>2019-08: VIX minus realised -5.3 points</title></path>
<path d="M236.9,128.2 L236.9,108.7 Q236.9,107.7 237.9,107.7 L239.3,107.7 Q240.3,107.7 240.3,108.7 L240.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-09: VIX minus realised +8.3 points</title></path>
<path d="M241.7,128.2 L241.7,114.8 Q241.7,113.8 242.7,113.8 L244.1,113.8 Q245.1,113.8 245.1,114.8 L245.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-10: VIX minus realised +5.8 points</title></path>
<path d="M246.4,128.2 L246.4,114.6 Q246.4,113.6 247.4,113.6 L248.8,113.6 Q249.8,113.6 249.8,114.6 L249.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-11: VIX minus realised +5.9 points</title></path>
<path d="M251.2,128.2 L251.2,109.7 Q251.2,108.7 252.2,108.7 L253.6,108.7 Q254.6,108.7 254.6,109.7 L254.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2019-12: VIX minus realised +7.8 points</title></path>
<path d="M255.9,128.2 L255.9,127.6 Q255.9,126.6 256.9,126.6 L258.3,126.6 Q259.3,126.6 259.3,127.6 L259.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-01: VIX minus realised +0.6 points</title></path>
<path d="M260.7,128.2 L260.7,168 Q260.7,169 261.7,169 L263.1,169 Q264.1,169 264.1,168 L264.1,128.2 Z" class="vf2" fill="#eb6834"><title>2020-02: VIX minus realised -16.4 points</title></path>
<path d="M265.4,128.2 L265.4,279.8 Q265.4,280.8 266.4,280.8 L267.8,280.8 Q268.8,280.8 268.8,279.8 L268.8,128.2 Z" class="vf2" fill="#eb6834"><title>2020-03: VIX minus realised -61.3 points</title></path>
<path d="M270.2,128.2 L270.2,83.5 Q270.2,82.5 271.2,82.5 L272.6,82.5 Q273.6,82.5 273.6,83.5 L273.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-04: VIX minus realised +18.4 points</title></path>
<path d="M274.9,128.2 L274.9,85 Q274.9,84 275.9,84 L277.3,84 Q278.3,84 278.3,85 L278.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-05: VIX minus realised +17.8 points</title></path>
<path d="M279.7,128.2 L279.7,132.9 Q279.7,133.9 280.7,133.9 L282.1,133.9 Q283.1,133.9 283.1,132.9 L283.1,128.2 Z" class="vf2" fill="#eb6834"><title>2020-06: VIX minus realised -2.3 points</title></path>
<path d="M284.4,128.2 L284.4,91.8 Q284.4,90.8 285.4,90.8 L286.8,90.8 Q287.8,90.8 287.8,91.8 L287.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-07: VIX minus realised +15.0 points</title></path>
<path d="M289.2,128.2 L289.2,89 Q289.2,88 290.2,88 L291.6,88 Q292.6,88 292.6,89 L292.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-08: VIX minus realised +16.2 points</title></path>
<path d="M293.9,128.2 L293.9,125.8 Q293.9,124.8 294.9,124.8 L296.3,124.8 Q297.3,124.8 297.3,125.8 L297.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-09: VIX minus realised +1.4 points</title></path>
<path d="M298.7,128.2 L298.7,116 Q298.7,115 299.7,115 L301.1,115 Q302.1,115 302.1,116 L302.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-10: VIX minus realised +5.3 points</title></path>
<path d="M303.4,128.2 L303.4,75.7 Q303.4,74.7 304.4,74.7 L305.8,74.7 Q306.8,74.7 306.8,75.7 L306.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-11: VIX minus realised +21.5 points</title></path>
<path d="M308.2,128.2 L308.2,97.6 Q308.2,96.6 309.2,96.6 L310.6,96.6 Q311.6,96.6 311.6,97.6 L311.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2020-12: VIX minus realised +12.7 points</title></path>
<path d="M312.9,128.2 L312.9,104.2 Q312.9,103.2 313.9,103.2 L315.3,103.2 Q316.3,103.2 316.3,104.2 L316.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-01: VIX minus realised +10.1 points</title></path>
<path d="M317.7,128.2 L317.7,93.8 Q317.7,92.8 318.7,92.8 L320.1,92.8 Q321.1,92.8 321.1,93.8 L321.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-02: VIX minus realised +14.2 points</title></path>
<path d="M322.4,128.2 L322.4,109.4 Q322.4,108.4 323.4,108.4 L324.8,108.4 Q325.8,108.4 325.8,109.4 L325.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-03: VIX minus realised +8.0 points</title></path>
<path d="M327.2,128.2 L327.2,111.6 Q327.2,110.6 328.2,110.6 L329.6,110.6 Q330.6,110.6 330.6,111.6 L330.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-04: VIX minus realised +7.1 points</title></path>
<path d="M331.9,128.2 L331.9,117.8 Q331.9,116.8 332.9,116.8 L334.3,116.8 Q335.3,116.8 335.3,117.8 L335.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-05: VIX minus realised +4.6 points</title></path>
<path d="M336.7,128.2 L336.7,106 Q336.7,105 337.7,105 L339.1,105 Q340.1,105 340.1,106 L340.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-06: VIX minus realised +9.3 points</title></path>
<path d="M341.4,128.2 L341.4,119.8 Q341.4,118.8 342.4,118.8 L343.8,118.8 Q344.8,118.8 344.8,119.8 L344.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-07: VIX minus realised +3.8 points</title></path>
<path d="M346.2,128.2 L346.2,101.6 Q346.2,100.6 347.2,100.6 L348.6,100.6 Q349.6,100.6 349.6,101.6 L349.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-08: VIX minus realised +11.1 points</title></path>
<path d="M350.9,128.2 L350.9,123 Q350.9,122 351.9,122 L353.3,122 Q354.3,122 354.3,123 L354.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-09: VIX minus realised +2.5 points</title></path>
<path d="M355.7,128.2 L355.7,102.5 Q355.7,101.5 356.7,101.5 L358.1,101.5 Q359.1,101.5 359.1,102.5 L359.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-10: VIX minus realised +10.7 points</title></path>
<path d="M360.4,128.2 L360.4,122.1 Q360.4,121.1 361.4,121.1 L362.8,121.1 Q363.8,121.1 363.8,122.1 L363.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-11: VIX minus realised +2.9 points</title></path>
<path d="M365.2,128.2 L365.2,93.3 Q365.2,92.3 366.2,92.3 L367.6,92.3 Q368.6,92.3 368.6,93.3 L368.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2021-12: VIX minus realised +14.4 points</title></path>
<path d="M369.9,128.2 L369.9,132.6 Q369.9,133.6 370.9,133.6 L372.3,133.6 Q373.3,133.6 373.3,132.6 L373.3,128.2 Z" class="vf2" fill="#eb6834"><title>2022-01: VIX minus realised -2.1 points</title></path>
<path d="M374.7,128.2 L374.7,129.7 Q374.7,130.7 375.7,130.7 L377.1,130.7 Q378.1,130.7 378.1,129.7 L378.1,128.2 Z" class="vf2" fill="#eb6834"><title>2022-02: VIX minus realised -1.0 points</title></path>
<path d="M379.4,128.2 L379.4,102.4 Q379.4,101.4 380.4,101.4 L381.8,101.4 Q382.8,101.4 382.8,102.4 L382.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-03: VIX minus realised +10.8 points</title></path>
<path d="M384.2,128.2 L384.2,139 Q384.2,140 385.2,140 L386.6,140 Q387.6,140 387.6,139 L387.6,128.2 Z" class="vf2" fill="#eb6834"><title>2022-04: VIX minus realised -4.7 points</title></path>
<path d="M388.9,128.2 L388.9,127 Q388.9,126 389.9,126 L391.3,126 Q392.3,126 392.3,127 L392.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-05: VIX minus realised +0.9 points</title></path>
<path d="M393.7,128.2 L393.7,137.8 Q393.7,138.8 394.7,138.8 L396.1,138.8 Q397.1,138.8 397.1,137.8 L397.1,128.2 Z" class="vf2" fill="#eb6834"><title>2022-06: VIX minus realised -4.3 points</title></path>
<path d="M398.4,128.2 L398.4,110.1 Q398.4,109.1 399.4,109.1 L400.8,109.1 Q401.8,109.1 401.8,110.1 L401.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-07: VIX minus realised +7.7 points</title></path>
<path d="M403.2,128.2 L403.2,122.8 Q403.2,121.8 404.2,121.8 L405.6,121.8 Q406.6,121.8 406.6,122.8 L406.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-08: VIX minus realised +2.6 points</title></path>
<path d="M407.9,128.2 L407.9,128.5 Q407.9,129.5 408.9,129.5 L410.3,129.5 Q411.3,129.5 411.3,128.5 L411.3,128.2 Z" class="vf2" fill="#eb6834"><title>2022-09: VIX minus realised -0.5 points</title></path>
<path d="M412.7,128.2 L412.7,120.9 Q412.7,119.9 413.7,119.9 L415.1,119.9 Q416.1,119.9 416.1,120.9 L416.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-10: VIX minus realised +3.3 points</title></path>
<path d="M417.4,128.2 L417.4,131.5 Q417.4,132.5 418.4,132.5 L419.8,132.5 Q420.8,132.5 420.8,131.5 L420.8,128.2 Z" class="vf2" fill="#eb6834"><title>2022-11: VIX minus realised -1.7 points</title></path>
<path d="M422.2,128.2 L422.2,124.4 Q422.2,123.4 423.2,123.4 L424.6,123.4 Q425.6,123.4 425.6,124.4 L425.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2022-12: VIX minus realised +1.9 points</title></path>
<path d="M426.9,128.2 L426.9,113.6 Q426.9,112.6 427.9,112.6 L429.3,112.6 Q430.3,112.6 430.3,113.6 L430.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-01: VIX minus realised +6.3 points</title></path>
<path d="M431.7,128.2 L431.7,123.9 Q431.7,122.9 432.7,122.9 L434.1,122.9 Q435.1,122.9 435.1,123.9 L435.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-02: VIX minus realised +2.2 points</title></path>
<path d="M436.4,128.2 L436.4,123.3 Q436.4,122.3 437.4,122.3 L438.8,122.3 Q439.8,122.3 439.8,123.3 L439.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-03: VIX minus realised +2.4 points</title></path>
<path d="M441.2,128.2 L441.2,113.5 Q441.2,112.5 442.2,112.5 L443.6,112.5 Q444.6,112.5 444.6,113.5 L444.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-04: VIX minus realised +6.3 points</title></path>
<path d="M445.9,128.2 L445.9,121.8 Q445.9,120.8 446.9,120.8 L448.3,120.8 Q449.3,120.8 449.3,121.8 L449.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-05: VIX minus realised +3.0 points</title></path>
<path d="M450.7,128.2 L450.7,116.3 Q450.7,115.3 451.7,115.3 L453.1,115.3 Q454.1,115.3 454.1,116.3 L454.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-06: VIX minus realised +5.2 points</title></path>
<path d="M455.4,128.2 L455.4,119.3 Q455.4,118.3 456.4,118.3 L457.8,118.3 Q458.8,118.3 458.8,119.3 L458.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-07: VIX minus realised +4.0 points</title></path>
<path d="M460.2,128.2 L460.2,126.7 Q460.2,125.7 461.2,125.7 L462.6,125.7 Q463.6,125.7 463.6,126.7 L463.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-08: VIX minus realised +1.0 points</title></path>
<path d="M464.9,128.2 L464.9,124.8 Q464.9,123.8 465.9,123.8 L467.3,123.8 Q468.3,123.8 468.3,124.8 L468.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-09: VIX minus realised +1.8 points</title></path>
<path d="M469.7,128.2 L469.7,121.4 Q469.7,120.4 470.7,120.4 L472.1,120.4 Q473.1,120.4 473.1,121.4 L473.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-10: VIX minus realised +3.1 points</title></path>
<path d="M474.4,128.2 L474.4,114.3 Q474.4,113.3 475.4,113.3 L476.8,113.3 Q477.8,113.3 477.8,114.3 L477.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-11: VIX minus realised +6.0 points</title></path>
<path d="M479.2,128.2 L479.2,123.3 Q479.2,122.3 480.2,122.3 L481.6,122.3 Q482.6,122.3 482.6,123.3 L482.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2023-12: VIX minus realised +2.4 points</title></path>
<path d="M483.9,128.2 L483.9,124.9 Q483.9,123.9 484.9,123.9 L486.3,123.9 Q487.3,123.9 487.3,124.9 L487.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-01: VIX minus realised +1.7 points</title></path>
<path d="M488.7,128.2 L488.7,123.4 Q488.7,122.4 489.7,122.4 L491.1,122.4 Q492.1,122.4 492.1,123.4 L492.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-02: VIX minus realised +2.3 points</title></path>
<path d="M493.4,128.2 L493.4,121 Q493.4,120 494.4,120 L495.8,120 Q496.8,120 496.8,121 L496.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-03: VIX minus realised +3.3 points</title></path>
<path d="M498.2,128.2 L498.2,128.2 Q498.2,128.3 498.2,128.3 L501.5,128.3 Q501.6,128.3 501.6,128.2 L501.6,128.2 Z" class="vf2" fill="#eb6834"><title>2024-04: VIX minus realised -0.0 points</title></path>
<path d="M502.9,128.2 L502.9,114.1 Q502.9,113.1 503.9,113.1 L505.3,113.1 Q506.3,113.1 506.3,114.1 L506.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-05: VIX minus realised +6.1 points</title></path>
<path d="M507.7,128.2 L507.7,112.4 Q507.7,111.4 508.7,111.4 L510.1,111.4 Q511.1,111.4 511.1,112.4 L511.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-06: VIX minus realised +6.8 points</title></path>
<path d="M512.4,128.2 L512.4,133.7 Q512.4,134.7 513.4,134.7 L514.8,134.7 Q515.8,134.7 515.8,133.7 L515.8,128.2 Z" class="vf2" fill="#eb6834"><title>2024-07: VIX minus realised -2.6 points</title></path>
<path d="M517.2,128.2 L517.2,128.9 Q517.2,129.9 518.2,129.9 L519.6,129.9 Q520.6,129.9 520.6,128.9 L520.6,128.2 Z" class="vf2" fill="#eb6834"><title>2024-08: VIX minus realised -0.7 points</title></path>
<path d="M521.9,128.2 L521.9,106.3 Q521.9,105.3 522.9,105.3 L524.3,105.3 Q525.3,105.3 525.3,106.3 L525.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-09: VIX minus realised +9.2 points</title></path>
<path d="M526.7,128.2 L526.7,103.1 Q526.7,102.1 527.7,102.1 L529.1,102.1 Q530.1,102.1 530.1,103.1 L530.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-10: VIX minus realised +10.5 points</title></path>
<path d="M531.4,128.2 L531.4,104 Q531.4,103 532.4,103 L533.8,103 Q534.8,103 534.8,104 L534.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2024-11: VIX minus realised +10.1 points</title></path>
<path d="M536.2,128.2 L536.2,129.6 Q536.2,130.6 537.2,130.6 L538.6,130.6 Q539.6,130.6 539.6,129.6 L539.6,128.2 Z" class="vf2" fill="#eb6834"><title>2024-12: VIX minus realised -1.0 points</title></path>
<path d="M540.9,128.2 L540.9,119.8 Q540.9,118.8 541.9,118.8 L543.3,118.8 Q544.3,118.8 544.3,119.8 L544.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-01: VIX minus realised +3.8 points</title></path>
<path d="M545.7,128.2 L545.7,120 Q545.7,119 546.7,119 L548.1,119 Q549.1,119 549.1,120 L549.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-02: VIX minus realised +3.7 points</title></path>
<path d="M550.4,128.2 L550.4,122.4 Q550.4,121.4 551.4,121.4 L552.8,121.4 Q553.8,121.4 553.8,122.4 L553.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-03: VIX minus realised +2.7 points</title></path>
<path d="M555.2,128.2 L555.2,194.7 Q555.2,195.7 556.2,195.7 L557.6,195.7 Q558.6,195.7 558.6,194.7 L558.6,128.2 Z" class="vf2" fill="#eb6834"><title>2025-04: VIX minus realised -27.1 points</title></path>
<path d="M559.9,128.2 L559.9,109 Q559.9,108 560.9,108 L562.3,108 Q563.3,108 563.3,109 L563.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-05: VIX minus realised +8.1 points</title></path>
<path d="M564.7,128.2 L564.7,107.8 Q564.7,106.8 565.7,106.8 L567.1,106.8 Q568.1,106.8 568.1,107.8 L568.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-06: VIX minus realised +8.6 points</title></path>
<path d="M569.4,128.2 L569.4,103.7 Q569.4,102.7 570.4,102.7 L571.8,102.7 Q572.8,102.7 572.8,103.7 L572.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-07: VIX minus realised +10.2 points</title></path>
<path d="M574.2,128.2 L574.2,104.9 Q574.2,103.9 575.2,103.9 L576.6,103.9 Q577.6,103.9 577.6,104.9 L577.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-08: VIX minus realised +9.8 points</title></path>
<path d="M578.9,128.2 L578.9,102.4 Q578.9,101.4 579.9,101.4 L581.3,101.4 Q582.3,101.4 582.3,102.4 L582.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-09: VIX minus realised +10.8 points</title></path>
<path d="M583.7,128.2 L583.7,124.3 Q583.7,123.3 584.7,123.3 L586.1,123.3 Q587.1,123.3 587.1,124.3 L587.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-10: VIX minus realised +2.0 points</title></path>
<path d="M588.4,128.2 L588.4,123.4 Q588.4,122.4 589.4,122.4 L590.8,122.4 Q591.8,122.4 591.8,123.4 L591.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-11: VIX minus realised +2.3 points</title></path>
<path d="M593.2,128.2 L593.2,108.3 Q593.2,107.3 594.2,107.3 L595.6,107.3 Q596.6,107.3 596.6,108.3 L596.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2025-12: VIX minus realised +8.4 points</title></path>
<path d="M597.9,128.2 L597.9,120 Q597.9,119 598.9,119 L600.3,119 Q601.3,119 601.3,120 L601.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-01: VIX minus realised +3.7 points</title></path>
<path d="M602.7,128.2 L602.7,121.8 Q602.7,120.8 603.7,120.8 L605.1,120.8 Q606.1,120.8 606.1,121.8 L606.1,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-02: VIX minus realised +3.0 points</title></path>
<path d="M607.4,128.2 L607.4,121.9 Q607.4,120.9 608.4,120.9 L609.8,120.9 Q610.8,120.9 610.8,121.9 L610.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-03: VIX minus realised +2.9 points</title></path>
<path d="M612.2,128.2 L612.2,97.1 Q612.2,96.1 613.2,96.1 L614.6,96.1 Q615.6,96.1 615.6,97.1 L615.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-04: VIX minus realised +12.9 points</title></path>
<path d="M616.9,128.2 L616.9,111.4 Q616.9,110.4 617.9,110.4 L619.3,110.4 Q620.3,110.4 620.3,111.4 L620.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-05: VIX minus realised +7.2 points</title></path>
<path d="M621.7,128.2 L621.7,130.4 Q621.7,131.4 622.7,131.4 L624.1,131.4 Q625.1,131.4 625.1,130.4 L625.1,128.2 Z" class="vf2" fill="#eb6834"><title>2026-06: VIX minus realised -1.3 points</title></path>
<path d="M626.4,128.2 L626.4,118.2 Q626.4,117.2 627.4,117.2 L628.8,117.2 Q629.8,117.2 629.8,118.2 L629.8,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-07: VIX minus realised +4.4 points</title></path>
<path d="M631.2,128.2 L631.2,113.7 Q631.2,112.7 632.2,112.7 L633.6,112.7 Q634.6,112.7 634.6,113.7 L634.6,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-08: VIX minus realised +6.3 points</title></path>
<path d="M635.9,128.2 L635.9,114.8 Q635.9,113.8 636.9,113.8 L638.3,113.8 Q639.3,113.8 639.3,114.8 L639.3,128.2 Z" class="vf1" fill="#2a78d6"><title>2026-09: VIX minus realised +5.8 points</title></path>
<text x="270.8" y="284.8" font-size="10.5" fill="currentColor" font-weight="600">March 2020: -61</text>
<text x="560.5" y="199.7" font-size="10.5" fill="currentColor" font-weight="600">April 2025: -27</text>
<text x="266" y="173" font-size="10.5" fill="currentColor" font-weight="600">February 2020: -16</text>
<text x="84.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2017</text>
<text x="141.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2018</text>
<text x="198.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2019</text>
<text x="255.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2020</text>
<text x="312.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2021</text>
<text x="369.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2022</text>
<text x="426.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2023</text>
<text x="483.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2024</text>
<text x="540.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<text x="597.2" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2026</text>
<text x="640" y="83.4" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">positive in 84% of months</text>
<rect x="70" y="322.8" width="11" height="11" rx="2" class="vf1" fill="#2a78d6"/>
<text x="86" y="332" font-size="11.5" fill="currentColor" opacity="0.85">Implied above realised: sellers of protection gain</text>
<rect x="371.7" y="322.8" width="11" height="11" rx="2" class="vf2" fill="#eb6834"/>
<text x="387.7" y="332" font-size="11.5" fill="currentColor" opacity="0.85">Realised above implied: buyers gain</text>
</svg>

Implied volatility exceeded what was later realised in 84% of months over the past decade. The exceptions, March 2020 and April 2025, were violent.

### 12. Owning an option is owning volatility

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Parabola of the one-day profit, per share, of owning the £105 call and hedging its delta, against the size of the day's move in the share. Gamma earns half of 0.033 times the move squared; time decay costs 2.8p a day whatever happens. The two balance at a move of about £1.31 either way: bigger moves make the option owner money, smaller ones make the seller money. That break-even move is close to the 1.2% daily move implied by 23.2% volatility." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Owning an option means paying rent for big moves</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">One day's profit per share from owning the £105 call and hedging its delta, against the day's move</text>
<line x1="80" y1="251.4" x2="620" y2="251.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="255.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-5p</text>
<line x1="80" y1="198.7" x2="620" y2="198.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="202.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="80" y1="145.9" x2="620" y2="145.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="149.8" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+5p</text>
<line x1="80" y1="93.1" x2="620" y2="93.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="97.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+10p</text>
<text x="80" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">−£3</text>
<text x="170" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">−£2</text>
<text x="260" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">−£1</text>
<text x="350" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£0</text>
<text x="440" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+£1</text>
<text x="530" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+£2</text>
<text x="620" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+£3</text>
<text x="350" y="300" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">the share's move during the day</text>
<polyline points="80,71.4 84.5,76.6 89,81.7 93.5,86.7 98,91.6 102.5,96.5 107,101.2 111.5,105.9 116,110.5 120.5,115 125,119.4 129.5,123.7 134,128 138.5,132.1 143,136.2 147.5,140.2 152,144 156.5,147.8 161,151.6 165.5,155.2 170,158.7 174.5,162.2 179,165.5 183.5,168.8 188,172 192.5,175.1 197,178.1 201.5,181 206,183.9 210.5,186.6 215,189.3 219.5,191.9 224,194.4 228.5,196.8 233,199.1 237.5,201.3 242,203.4 246.5,205.5 251,207.5 255.5,209.3 260,211.1 264.5,212.8 269,214.5 273.5,216 278,217.4 282.5,218.8 287,220 291.5,221.2 296,222.3 300.5,223.3 305,224.2 309.5,225.1 314,225.8 318.5,226.5 323,227 327.5,227.5 332,227.9 336.5,228.2 341,228.4 345.5,228.6 350,228.6 354.5,228.6 359,228.4 363.5,228.2 368,227.9 372.5,227.5 377,227 381.5,226.5 386,225.8 390.5,225.1 395,224.2 399.5,223.3 404,222.3 408.5,221.2 413,220 417.5,218.8 422,217.4 426.5,216 431,214.5 435.5,212.8 440,211.1 444.5,209.3 449,207.5 453.5,205.5 458,203.4 462.5,201.3 467,199.1 471.5,196.8 476,194.4 480.5,191.9 485,189.3 489.5,186.6 494,183.9 498.5,181 503,178.1 507.5,175.1 512,172 516.5,168.8 521,165.5 525.5,162.2 530,158.7 534.5,155.2 539,151.6 543.5,147.8 548,144 552.5,140.2 557,136.2 561.5,132.1 566,128 570.5,123.7 575,119.4 579.5,115 584,110.5 588.5,105.9 593,101.2 597.5,96.5 602,91.6 606.5,86.7 611,81.7 615.5,76.6 620,71.4" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="80" y1="228.6" x2="620" y2="228.6" class="vs2" stroke="#eb6834" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="350" y="244.6" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">quiet day: lose the rent, 2.8p</text>
<circle cx="232.2" cy="198.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Break-even move: £1.31</title></circle>
<circle cx="467.8" cy="198.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Break-even move: £1.31</title></circle>
<text x="477.8" y="214.7" font-size="11" fill="currentColor" font-weight="600">break even at ±£1.31</text>
<text x="350" y="93.1" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">big moves either way: the option owner gains</text>
</svg>

Hedge away the direction and what is left is a parabola minus a rent: big moves pay the option holder, quiet days pay the seller.

### 13. The steamroller

<svg viewBox="0 0 680 340" width="100%" role="img" aria-label="Line chart of the cumulative profit from selling a one-month S&amp;P 500 put, 5% out of the money, every month from 2016-10 to 2026-09, in points per 100 of exposure. The premium averaged 0.51 points a month and 111 of 120 months were profitable, but the losses were sudden: late 2018 took back the first two years of gains, and March 2020 alone lost 9.7 points, leaving the strategy below zero three and a half years after it started. It ended 32 points up." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Picking up pennies in front of a steamroller</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Selling a one-month S&amp;P 500 put 5% below the market every month: cumulative profit per 100 of exposure</text>
<line x1="70" y1="271.2" x2="640" y2="271.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="275.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">-10</text>
<line x1="70" y1="227.5" x2="640" y2="227.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="62" y="231.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="70" y1="183.8" x2="640" y2="183.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="187.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+10</text>
<line x1="70" y1="140" x2="640" y2="140" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="144" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+20</text>
<line x1="70" y1="96.2" x2="640" y2="96.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="100.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+30</text>
<polyline points="70,226.3 74.7,224.4 79.5,223.7 84.2,223.1 89,222.8 93.8,222.3 98.5,221.9 103.2,221.7 108,221.6 112.8,221.3 117.5,221.1 122.3,221 127,220.9 131.7,220.7 136.5,220.4 141.2,220.3 146,219.6 150.8,216.5 155.5,212.9 160.2,211.9 165,211.2 169.8,210.2 174.5,209.6 179.3,209 184,222.9 188.7,220.8 193.5,238.2 198.2,234.8 203,233.5 207.8,232.9 212.5,232.3 217.2,235.2 222,233.2 226.8,232.5 231.5,230.8 236.3,228.6 241,226.7 245.7,226.2 250.5,225.3 255.2,224.9 260,223.1 264.8,265.4 269.5,247.5 274.2,238.4 279,233.1 283.8,227.7 288.5,223.9 293.3,219.4 298,214.7 302.7,205.7 307.5,203.1 312.2,198.3 317,192.2 321.8,188.7 326.5,187.2 331.2,185.4 336,183.7 340.8,182.6 345.5,180.5 350.3,179.3 355,176.6 359.7,175.3 364.5,168.8 369.2,167.5 374,164.5 378.8,157.1 383.5,168.7 388.2,161.7 393,165 397.8,160.2 402.5,157 407.3,162.6 412,156.6 416.7,152.2 421.5,155.2 426.2,151.9 431,150.2 435.8,147.7 440.5,145.8 445.2,144.6 450,143.5 454.8,142.8 459.5,142.1 464.3,147.4 469,145.8 473.7,144.4 478.5,143.9 483.2,143.3 488,142.6 492.8,142 497.5,141.4 502.2,140.3 507,139.8 511.8,139.4 516.5,137.5 521.3,134.9 526,132.8 530.7,129.9 535.5,129.3 540.2,127.6 545,125.7 549.8,122.4 554.5,119.5 559.2,115.6 564,113.7 568.8,112.3 573.5,109.9 578.3,108.4 583,107.1 587.7,105.6 592.5,104.1 597.2,103.3 602,102 606.8,99.8 611.5,95.9 616.2,94.5 621,93.3 625.8,91.9 630.5,90.8 635.3,89.5" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="184" cy="222.9" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2018-10: lost 3.2 points that month</title></circle>
<circle cx="193.5" cy="238.2" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2018-12: lost 4.0 points that month</title></circle>
<circle cx="264.8" cy="265.4" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2020-03: lost 9.7 points that month</title></circle>
<circle cx="383.5" cy="168.7" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2022-04: lost 2.6 points that month</title></circle>
<circle cx="407.3" cy="162.6" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2022-09: lost 1.3 points that month</title></circle>
<circle cx="464.3" cy="147.4" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>2023-09: lost 1.2 points that month</title></circle>
<text x="272.8" y="269.6" font-size="11" fill="currentColor" font-weight="600">March 2020: −9.7 in a month</text>
<text x="186.8" y="260" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.85">late 2018: two years of</text>
<text x="186.8" y="274" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.85">premium gone in two months</text>
<text x="631.4" y="79.5" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">+32</text>
<text x="323.7" y="96.2" font-size="11" fill="currentColor" opacity="0.85">111 of 120 months profitable;</text>
<text x="323.7" y="111.2" font-size="11" fill="currentColor" opacity="0.85">average premium 0.51 a month</text>
<text x="84.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2017</text>
<text x="141.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2018</text>
<text x="198.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2019</text>
<text x="255.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2020</text>
<text x="312.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2021</text>
<text x="369.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2022</text>
<text x="426.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2023</text>
<text x="483.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2024</text>
<text x="540.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<text x="597.2" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2026</text>
<text x="20" y="332" font-size="10.5" fill="currentColor" opacity="0.6">Simplified: priced at the VIX with no skew, held to expiry, no costs. Real puts cost more, and real sellers use leverage.</text>
</svg>

Selling puts made money in 111 months out of 120, and lost two and a half years of premium in one month.

---

## Part 6: Futures and swaps

*Taught in [Lesson 6](?slug=derivatives&lesson=lesson-06-futures-and-daily-settlement) and [Lesson 7](?slug=derivatives&lesson=lesson-07-swaps)*

### 14. Right in the end, but first find the cash

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

Daily settlement protects the clearing house and puts the cash burden on you. Being right is not enough; you must survive the path.

### 15. The basis trade

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

A tiny, nearly riskless gap, financed with leverage of up to 100 times: perfectly hedged against prices, completely exposed to funding.

### 16. Long swaps swing hard

<svg viewBox="0 0 680 340" width="100%" role="img" aria-label="Line chart of the value of £100 million of receive-fixed interest rate swaps at 4%, the side a pension fund takes, as market swap rates move between 1.5 percentage points down and 1.5 up. A five-year swap loses about £6.4 million if rates rise 1.5 points. A thirty-year swap loses about £21.8 million, because each basis point is worth about £173,000 on it, against about £45,000 on the five-year. Every pound of that loss is collected in collateral as rates move." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Long swaps swing hard when rates move</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Value of £100 million of receive-fixed swaps at 4%, against the change in market swap rates</text>
<line x1="90" y1="280" x2="600" y2="280" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="284" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£30m</text>
<line x1="90" y1="247.7" x2="600" y2="247.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="251.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£20m</text>
<line x1="90" y1="215.4" x2="600" y2="215.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="219.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£10m</text>
<line x1="90" y1="183.1" x2="600" y2="183.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="187" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="90" y1="150.8" x2="600" y2="150.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="154.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£10m</text>
<line x1="90" y1="118.5" x2="600" y2="118.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="122.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£20m</text>
<line x1="90" y1="86.2" x2="600" y2="86.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="90.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">+£30m</text>
<text x="90" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-150bp</text>
<text x="175" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-100bp</text>
<text x="260" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">-50bp</text>
<text x="345" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<text x="430" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+50bp</text>
<text x="515" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+100bp</text>
<text x="600" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">+150bp</text>
<text x="345" y="318" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">change in market swap rates (basis points; 100bp = 1 percentage point)</text>
<polyline points="90,160.6 98.5,161.3 107,162.1 115.5,162.9 124,163.7 132.5,164.4 141,165.2 149.5,166 158,166.8 166.5,167.5 175,168.3 183.5,169 192,169.8 200.5,170.6 209,171.3 217.5,172.1 226,172.8 234.5,173.6 243,174.3 251.5,175 260,175.8 268.5,176.5 277,177.3 285.5,178 294,178.7 302.5,179.5 311,180.2 319.5,180.9 328,181.6 336.5,182.4 345,183.1 353.5,183.8 362,184.5 370.5,185.2 379,185.9 387.5,186.6 396,187.4 404.5,188.1 413,188.8 421.5,189.5 430,190.2 438.5,190.9 447,191.6 455.5,192.3 464,192.9 472.5,193.6 481,194.3 489.5,195 498,195.7 506.5,196.4 515,197.1 523.5,197.7 532,198.4 540.5,199.1 549,199.8 557.5,200.4 566,201.1 574.5,201.8 583,202.4 591.5,203.1 600,203.8" class="vs3" stroke="#1baf7a" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="90,81.6 98.5,85.7 107,89.7 115.5,93.6 124,97.5 132.5,101.3 141,105.1 149.5,108.8 158,112.5 166.5,116.2 175,119.8 183.5,123.3 192,126.8 200.5,130.3 209,133.7 217.5,137.1 226,140.4 234.5,143.7 243,147 251.5,150.2 260,153.4 268.5,156.5 277,159.6 285.5,162.7 294,165.7 302.5,168.7 311,171.6 319.5,174.5 328,177.4 336.5,180.3 345,183.1 353.5,185.9 362,188.6 370.5,191.3 379,194 387.5,196.6 396,199.2 404.5,201.8 413,204.4 421.5,206.9 430,209.4 438.5,211.9 447,214.3 455.5,216.7 464,219.1 472.5,221.4 481,223.7 489.5,226 498,228.3 506.5,230.5 515,232.7 523.5,234.9 532,237.1 540.5,239.2 549,241.3 557.5,243.4 566,245.5 574.5,247.5 583,249.5 591.5,251.5 600,253.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="606" y="207.8" font-size="11.5" fill="currentColor" font-weight="600">5-year</text>
<text x="606" y="257.5" font-size="11.5" fill="currentColor" font-weight="600">30-year</text>
<circle cx="600" cy="253.5" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>30-year swap, rates +150bp: −£21.8m</title></circle>
<text x="592" y="271.5" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">−£21.8m: collateral to post</text>
</svg>

A 1.5-point rise in rates takes about £22 million off £100 million of 30-year receive-fixed swaps, all of it collected as collateral. That was the UK pension crisis.

### 17. A credit default swap and the credit triangle

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Diagram of a credit default swap and a table of the credit triangle. A pension fund holding £10 million of Company Y's bonds buys five-year protection from a bank for 1.5% a year, £150,000 a year. If Company Y defaults and its bonds recover 40 pence in the pound, the bank pays the £6 million loss. Right: the default probability a spread implies when recovery is 40%, roughly the spread divided by 0.6: 0.5% implies about 0.8% a year, 1.0% implies about 1.7% a year, 1.5% implies about 2.5% a year, 3.0% implies about 5.0% a year, 5.0% implies about 8.3% a year, 10.0% implies about 16.7% a year." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A credit default swap: insurance on a borrower, priced daily</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Five-year protection on £10m of Company Y bonds. Illustrative.</text>
<rect x="20" y="70" width="150" height="64" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="95" y="98" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Pension fund</text>
<text x="95" y="116" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">buys protection</text>
<rect x="260" y="70" width="120" height="64" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="320" y="98" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<text x="320" y="116" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">sells protection</text>
<line x1="172" y1="88" x2="258" y2="88" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="258,88 251.6,90.9 251.6,85.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="215" y="80" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£150k a year</text>
<line x1="258" y1="118" x2="172" y2="118" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9" stroke-dasharray="5 3"/>
<polygon points="172,118 178.4,115.1 178.4,120.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="215" y="134" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">only if Y defaults</text>
<rect x="20" y="168" width="360" height="112" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="34" y="192" font-size="12" fill="currentColor" font-weight="600">If Company Y defaults</text>
<text x="34" y="212" font-size="11" fill="currentColor" opacity="0.85">Its bonds recover 40p in the pound: £4m.</text>
<text x="34" y="229" font-size="11" fill="currentColor" opacity="0.85">The bank pays the loss: £6m.</text>
<text x="34" y="246" font-size="11" fill="currentColor" opacity="0.85">The fund ends with £10m, less the premiums paid.</text>
<line x1="404" y1="64" x2="404" y2="290" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<text x="420" y="84" font-size="12.5" fill="currentColor" font-weight="600">The credit triangle</text>
<text x="420" y="102" font-size="10.5" fill="currentColor" opacity="0.75">spread ≈ default probability × (1 − recovery)</text>
<text x="430" y="128" font-size="10.5" fill="currentColor" font-weight="600" opacity="0.65">CDS spread</text>
<text x="650" y="128" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600" opacity="0.65">implied default rate</text>
<text x="430" y="150" font-size="11.5" fill="currentColor" style="font-variant-numeric:tabular-nums">0.5% a year</text>
<text x="650" y="150" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">about 0.8% a year</text>
<text x="430" y="172" font-size="11.5" fill="currentColor" style="font-variant-numeric:tabular-nums">1.0% a year</text>
<text x="650" y="172" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">about 1.7% a year</text>
<text x="430" y="194" font-size="11.5" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">1.5% a year</text>
<text x="650" y="194" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600" style="font-variant-numeric:tabular-nums">about 2.5% a year</text>
<text x="430" y="216" font-size="11.5" fill="currentColor" style="font-variant-numeric:tabular-nums">3.0% a year</text>
<text x="650" y="216" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">about 5.0% a year</text>
<text x="430" y="238" font-size="11.5" fill="currentColor" style="font-variant-numeric:tabular-nums">5.0% a year</text>
<text x="650" y="238" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">about 8.3% a year</text>
<text x="430" y="260" font-size="11.5" fill="currentColor" style="font-variant-numeric:tabular-nums">10.0% a year</text>
<text x="650" y="260" font-size="11.5" fill="currentColor" text-anchor="end" style="font-variant-numeric:tabular-nums">about 16.7% a year</text>
<text x="420" y="290" font-size="10" fill="currentColor" opacity="0.6">With 40% recovery. Risk-neutral, not a forecast.</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Dashed arrow: paid only if a credit event occurs.</text>
</svg>

Insurance on a borrower, repriced every day. Spread is roughly default probability times the loss given default.

---

## Part 7: The plumbing

*Taught in [Lesson 8](?slug=derivatives&lesson=lesson-08-the-plumbing)*

### 18. A clearing house turns a tangle into a hub

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two network diagrams of six firms trading derivatives with each other, one of which fails. Left, bilateral: every firm is exposed to every other, fifteen links in all, and when one firm fails the five others take losses directly. Right, centrally cleared: each firm faces only the clearing house, six links in all, and the clearing house absorbs the failure using the failed firm's margin first." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A clearing house turns a tangle of exposures into a hub</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Six firms trading derivatives with each other; one of them fails (marked)</text>
<line x1="170" y1="88" x2="249.7" y2="134" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="170" y1="88" x2="249.7" y2="226" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="170" y1="88" x2="170" y2="272" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="170" y1="88" x2="90.3" y2="226" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="170" y1="88" x2="90.3" y2="134" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="249.7" y1="134" x2="249.7" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="134" x2="170" y2="272" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="134" x2="90.3" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="134" x2="90.3" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="226" x2="170" y2="272" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="226" x2="90.3" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="249.7" y1="226" x2="90.3" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="170" y1="272" x2="90.3" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="170" y1="272" x2="90.3" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<line x1="90.3" y1="226" x2="90.3" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3"/>
<circle cx="170" cy="88" r="15" class="vf8 vs8" fill="#e34948" stroke="#e34948" fill-opacity="0.25" stroke-width="2"/>
<circle cx="249.7" cy="134" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="249.7" cy="226" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="170" cy="272" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="90.3" cy="226" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="90.3" cy="134" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<text x="192" y="93" font-size="11" fill="currentColor" font-weight="600">fails</text>
<text x="170" y="66" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Bilateral: everyone exposed to everyone</text>
<text x="170" y="296" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">15 links: when one firm fails,</text>
<text x="170" y="311" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">five others take losses directly</text>
<line x1="340" y1="70" x2="340" y2="320" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<line x1="510" y1="180" x2="510" y2="88" class="vs8" stroke="#e34948" stroke-width="2" stroke-opacity="0.85"/>
<line x1="510" y1="180" x2="589.7" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35"/>
<line x1="510" y1="180" x2="589.7" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35"/>
<line x1="510" y1="180" x2="510" y2="272" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35"/>
<line x1="510" y1="180" x2="430.3" y2="226" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35"/>
<line x1="510" y1="180" x2="430.3" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35"/>
<circle cx="510" cy="180" r="38" class="vf1 vs1" fill="#2a78d6" stroke="#2a78d6" fill-opacity="0.12" stroke-width="2"/>
<text x="510" y="177" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">Clearing</text>
<text x="510" y="192" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">house</text>
<circle cx="510" cy="88" r="15" class="vf8 vs8" fill="#e34948" stroke="#e34948" fill-opacity="0.25" stroke-width="2"/>
<circle cx="589.7" cy="134" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="589.7" cy="226" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="510" cy="272" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="430.3" cy="226" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<circle cx="430.3" cy="134" r="15" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4"/>
<text x="532" y="93" font-size="11" fill="currentColor" font-weight="600">fails</text>
<text x="510" y="66" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Cleared: everyone exposed to the hub</text>
<text x="510" y="296" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">6 links, all to the clearing house,</text>
<text x="510" y="311" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">which uses the failed firm's margin first</text>
</svg>

Fifteen bilateral exposures become six, all to a hub that deals with a failure on everyone's behalf.

### 19. The default waterfall

<svg viewBox="0 0 680 360" width="100%" role="img" aria-label="Diagram of a clearing house default waterfall, the order in which losses from a failed member are absorbed: 1. The defaulter's initial margin (its own deposit, sized for a bad week); 2. The defaulter's default fund contribution (its share of the mutual pot); 3. The clearing house's own capital (&quot;skin in the game&quot;); 4. Other members' default fund contributions (losses are mutualised); 5. Further calls and recovery tools (assessments on members, then recovery plans). Most defaults are covered by the first layer; Lehman's swaps at LCH in 2008 never got past it." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The default waterfall: who pays when a member fails, and in what order</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Losses fall through each layer only if the one above is used up</text>
<rect x="100" y="62" width="480" height="50" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.14"/>
<text x="116" y="84" font-size="12.5" fill="currentColor" font-weight="600">1. The defaulter's initial margin</text>
<text x="116" y="102" font-size="10.5" fill="currentColor" opacity="0.75">its own deposit, sized for a bad week</text>
<line x1="340" y1="113" x2="340" y2="120" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="340,120 338,115.4 342,115.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="125" y="120" width="430" height="50" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.14"/>
<text x="141" y="142" font-size="12.5" fill="currentColor" font-weight="600">2. The defaulter's default fund contribution</text>
<text x="141" y="160" font-size="10.5" fill="currentColor" opacity="0.75">its share of the mutual pot</text>
<line x1="340" y1="171" x2="340" y2="178" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="340,178 338,173.4 342,173.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="150" y="178" width="380" height="50" rx="6" class="vf7" fill="#4a3aa7" fill-opacity="0.12"/>
<text x="166" y="200" font-size="12.5" fill="currentColor" font-weight="600">3. The clearing house's own capital</text>
<text x="166" y="218" font-size="10.5" fill="currentColor" opacity="0.75">&quot;skin in the game&quot;</text>
<line x1="340" y1="229" x2="340" y2="236" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="340,236 338,231.4 342,231.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="175" y="236" width="330" height="50" rx="6" class="vf2" fill="#eb6834" fill-opacity="0.12"/>
<text x="191" y="258" font-size="12.5" fill="currentColor" font-weight="600">4. Other members' default fund contributions</text>
<text x="191" y="276" font-size="10.5" fill="currentColor" opacity="0.75">losses are mutualised</text>
<line x1="340" y1="287" x2="340" y2="294" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
<polygon points="340,294 338,289.4 342,289.4" fill="currentColor" fill-opacity="0.45"/>
<rect x="200" y="294" width="280" height="50" rx="6" class="vf8" fill="#e34948" fill-opacity="0.12"/>
<text x="216" y="316" font-size="12.5" fill="currentColor" font-weight="600">5. Further calls and recovery tools</text>
<text x="216" y="334" font-size="10.5" fill="currentColor" opacity="0.75">assessments on members, then recovery plans</text>
<text x="590" y="84" font-size="10.5" fill="currentColor" opacity="0.7">the defaulter</text>
<text x="590" y="98" font-size="10.5" fill="currentColor" opacity="0.7">pays first</text>
<text x="590" y="316" font-size="10.5" fill="currentColor" opacity="0.7">survivors</text>
<text x="590" y="330" font-size="10.5" fill="currentColor" opacity="0.7">pay last</text>
</svg>

The defaulter pays first, then the clearing house's own capital, and only then the survivors.

---

## Part 8: How things blow up

*Taught in [Lesson 9](?slug=derivatives&lesson=lesson-09-how-things-blow-up)*

### 20. Two feedback loops

<svg viewBox="0 0 680 350" width="100%" role="img" aria-label="Two feedback loops. The margin spiral: a shock knocks prices down, margin calls arrive, holders sell whatever they can to raise cash, which pushes prices down further and brings more margin calls, until a central bank buys, margins are eased or buyers with spare cash step in. The gamma squeeze: a crowd buys call options, dealers buy shares to hedge, the share price rises, the calls' deltas rise with it, so dealers must buy still more, until the options expire, the buyers run out of cash or new sellers step in." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Two feedback loops turn ordinary moves into crises</text>
<rect x="55" y="62" width="240" height="30" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none" stroke-dasharray="4 3"/>
<text x="175" y="82" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Trigger: a shock knocks prices down</text>
<line x1="175" y1="93" x2="175" y2="112" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
<polygon points="175,112 172.6,106.5 177.4,106.5" fill="currentColor" fill-opacity="0.5"/>
<rect x="109" y="112" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="175" y="136" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Prices fall</text>
<rect x="189" y="212" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="255" y="229" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Margin calls</text>
<text x="255" y="243" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">arrive</text>
<rect x="29" y="212" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="95" y="229" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Forced selling</text>
<text x="95" y="243" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">to raise cash</text>
<line x1="243" y1="132" x2="285" y2="210" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="285,210 279.5,205.7 284.5,203" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<line x1="187" y1="232" x2="163" y2="232" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="163,232 169.4,229.1 169.4,234.9" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<line x1="65" y1="210" x2="107" y2="132" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="107,132 106.5,139 101.5,136.3" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<text x="175" y="184" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Margin spiral</text>
<text x="175" y="200" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">each turn feeds the next</text>
<text x="175" y="284" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">What breaks it</text>
<text x="175" y="302" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.78">a central bank buying, margin relief,</text>
<text x="175" y="316" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.78">or buyers with spare cash</text>
<line x1="340" y1="62" x2="340" y2="330" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<rect x="385" y="62" width="240" height="30" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4" fill="none" stroke-dasharray="4 3"/>
<text x="505" y="82" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Trigger: a crowd buys call options</text>
<line x1="505" y1="93" x2="505" y2="112" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
<polygon points="505,112 502.6,106.5 507.4,106.5" fill="currentColor" fill-opacity="0.5"/>
<rect x="439" y="112" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="505" y="129" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Dealers buy</text>
<text x="505" y="143" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">shares to hedge</text>
<rect x="519" y="212" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="585" y="229" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Share price</text>
<text x="585" y="243" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">rises</text>
<rect x="359" y="212" width="132" height="40" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="425" y="229" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Call deltas rise</text>
<text x="425" y="243" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">with the price</text>
<line x1="573" y1="132" x2="615" y2="210" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="615,210 609.5,205.7 614.5,203" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<line x1="517" y1="232" x2="493" y2="232" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="493,232 499.4,229.1 499.4,234.9" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<line x1="395" y1="210" x2="437" y2="132" class="vs8" stroke="#e34948" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="437,132 436.5,139 431.5,136.3" class="vf8" fill="#e34948" fill-opacity="0.9"/>
<text x="505" y="184" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Gamma squeeze</text>
<text x="505" y="200" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7">each turn feeds the next</text>
<text x="505" y="284" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">What breaks it</text>
<text x="505" y="302" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.78">options expiring, buyers running</text>
<text x="505" y="316" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.78">out of cash, or new sellers</text>
</svg>

The margin spiral and the gamma squeeze: each turn feeds the next until something outside the loop breaks it.

### 21. Markets jump

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart of the euro against the Swiss franc, daily, from June 2011 to the end of 2015, from Federal Reserve noon rates. The Swiss National Bank capped the franc's strength at 1.20 francs per euro in September 2011 and the rate sat at or just above that floor for more than three years. On 15 January 2015 the bank abandoned the cap without warning: the rate fell from 1.2009 the day before to 1.0357 at New York noon, after trading briefly near 0.85 in the first minutes, and reached 0.9776 on 2015-01-16." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The Swiss franc: three calm years, then one minute that broke the models</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Swiss francs per euro, daily noon rates, June 2011 to December 2015</text>
<line x1="70" y1="270" x2="620" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0.80</text>
<line x1="70" y1="236.7" x2="620" y2="236.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="240.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0.90</text>
<line x1="70" y1="203.3" x2="620" y2="203.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="207.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">1.00</text>
<line x1="70" y1="170" x2="620" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">1.10</text>
<line x1="70" y1="136.7" x2="620" y2="136.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="140.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">1.20</text>
<line x1="70" y1="103.3" x2="620" y2="103.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="107.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">1.30</text>
<line x1="70" y1="70" x2="620" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="62" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">1.40</text>
<line x1="103.5" y1="136.7" x2="505.2" y2="136.7" class="vs8" stroke="#e34948" stroke-width="1.4" stroke-dasharray="6 4"/>
<text x="165.7" y="154.7" font-size="10.5" fill="currentColor" opacity="0.85">the cap: no fewer than 1.20 francs per euro</text>
<polyline points="72,132.6 72.3,130.9 72.6,130.1 73.6,129.3 74,126.4 74.3,129.7 74.6,129.1 74.9,133.5 75.9,135.8 76.3,129.3 76.6,133.4 76.9,135.3 77.2,132.6 78.2,134.9 78.5,131.9 78.9,135.5 79.2,141 79.5,140.7 80.5,138.3 80.8,139.2 81.2,135.1 81.5,129.4 82,126.6 83.3,129 83.6,135.8 83.9,133 84.2,138.8 85.2,146 85.6,147.3 85.9,148.8 86.2,150.6 86.5,151.7 87.5,153.9 87.9,151.3 88.2,148.7 88.5,145.2 88.8,145.6 89.8,150.8 90.1,148.8 90.5,152.3 90.8,153.3 91.1,158.7 91.9,166.8 92.2,170.8 92.6,171 92.9,174.5 93.2,178 94.2,178.1 94.5,189.5 94.9,191.5 95.2,178.1 95.5,170.7 96.5,160.8 96.8,155.7 97.2,157 97.5,159.4 97.8,159.4 98.8,159 99.1,157.1 99.5,155 99.8,155.2 100.1,148.3 101.1,140.6 101.4,143.4 101.7,150.7 101.9,158.1 102.2,164.5 103.5,135.7 103.8,133.7 104.2,131.6 104.5,134 105.5,135.2 105.8,135.6 106.1,135.8 106.5,134.6 106.8,134.5 107.8,134.9 108.1,131.3 108.4,128.1 108.8,130 109.1,129.5 110.1,130.2 110.4,130.3 110.7,129.9 111.1,129.9 111.4,131 112.5,131.6 112.8,128 113.2,126.7 113.5,124.6 113.8,124.5 115.1,124 115.5,125.1 115.8,124.8 116.1,123.9 117.1,124.5 117.4,124.5 117.7,122.4 118.1,126.4 118.4,127.3 119.4,127.8 119.7,128.9 120,128.9 120.4,130 120.7,129.5 121.7,131.9 121.8,130.9 122.1,131.4 122.5,132 122.8,129.3 123.8,123.8 124.1,124.7 124.4,126.1 124.8,126 126.1,124.6 126.4,123 126.7,123.9 127.1,123.5 127.4,123.9 128.4,123.8 128.7,125.1 129,127.3 129.7,126.6 130.7,127.1 131,127.7 131.3,128.3 131.8,126 132.1,125.3 133.1,124.7 133.4,122.8 133.7,123.9 134.1,124.7 134.4,124.8 135.4,125.2 135.7,125.6 136,124.6 136.4,128.8 136.7,129.8 137.7,130.4 138,130.9 138.3,129 138.7,129.3 139,129 140.3,129.7 140.6,130.4 140.9,130.3 141.3,131.3 142.4,130.9 142.7,130.8 143,130.7 143.4,131.4 144.4,132.2 144.7,132.5 145,132.7 145.3,133.2 145.7,133.6 147,133.6 147.3,133.7 147.6,134.1 148,134.1 148.9,134 149.3,134 149.6,133.9 149.9,134.5 150.3,134.7 151.2,135.2 151.6,135.5 151.7,135.1 152,135.3 152.4,134.4 153.3,134.5 153.7,133.7 154,133.5 154.3,133.2 154.7,133.3 155.6,133.8 156,134.1 156.3,134.3 156.6,134.2 156.9,134.3 158.3,134 158.6,134.4 158.9,134.8 159.2,135.1 160.2,134.9 160.5,134.9 160.9,134.9 161.7,134.8 162,134.7 163,134.8 163.3,135.1 163.6,134.8 164,134.9 164.3,134.7 165.3,134.7 165.6,134.7 165.9,132.3 166.3,134.3 166.6,134.5 167.6,134.6 167.9,134.6 168.2,134.7 168.5,134.9 168.9,135 169.9,135 170.2,134.9 170.5,134.8 170.8,135 171.2,135.5 172,135.3 172.3,135.5 172.6,135.5 172.9,136 173.3,136.3 174.3,136.2 174.6,136.1 174.9,136.3 175.2,136 175.6,136 176.5,136 176.9,136.2 177.2,135.9 177.5,135.9 177.9,136.1 178.8,136.1 179.2,136.1 179.5,136.1 179.8,136.1 180.1,136.3 181.1,136.2 181.6,136.1 181.9,136.1 182.2,136.2 182.6,136.3 183.6,136.2 183.9,136.3 184.2,136.3 184.5,136.3 184.9,136.4 185.9,136.3 186.2,136.4 186.5,136.3 186.8,136.3 187.2,136.3 188.1,136.3 188.5,136.3 188.8,136.3 189.1,135.8 189.5,136.4 190.8,136.3 191.1,136.3 191.4,136.4 191.6,136.3 192.5,136.4 192.9,136.4 193.2,136.4 193.5,136.3 193.9,136.4 194.8,136.4 195.2,136.4 195.5,136.4 195.8,136.4 196.1,136.4 197.1,136.4 197.5,136.4 197.8,136.4 198.1,136.3 198.4,136.4 199.4,136.4 199.7,136.3 200.1,136.3 200.4,136.3 200.7,136.1 201.8,136.3 202.2,136.3 202.8,136.3 203.2,136.4 204.1,136.4 204.5,136.4 204.8,136.4 205.1,136.4 205.5,136.4 206.4,136.3 206.8,136.3 207.1,136.3 207.4,136.4 207.7,136.4 208.7,136.3 209.1,136.3 209.4,136.4 209.7,136.3 210,136.3 211,136.3 211.3,136.3 211.5,136.3 211.8,136.3 212.1,136.2 213.1,136.3 213.5,136.2 213.8,136.3 214.1,136.4 214.4,136.4 215.4,136.3 215.7,136.3 216.1,136.3 216.4,136.4 216.7,136.3 217.7,136.3 218,136.3 218.4,136.4 218.7,136.4 219,136.4 220,136.3 220.3,136.4 220.7,136.4 221,136.4 221.3,136.4 222.4,136.3 222.8,135.6 223.1,135.2 223.4,133.5 224.4,134.1 224.7,134.3 225.1,133.7 225.4,132.3 225.7,131.5 226.7,131.3 227,132.6 227.3,133.1 227.7,133.7 228,132.8 229,133.4 229.3,133.3 229.6,133.9 230,133.8 230.3,133.8 231.4,133.5 231.7,133.4 232.1,133 232.4,132.9 232.7,132.5 234,133.2 234.4,133.2 234.7,133.6 235,133.9 236,133.9 236.3,133.7 236.7,133.2 237,133.7 237.3,133.6 238.3,133.3 238.6,133.4 238.9,133.5 239.3,133.4 239.6,133.5 240.6,133.7 240.9,133.9 241.2,134.5 241.4,134.5 241.7,134.3 242.7,134.5 243,134 243.3,134.6 243.7,134.8 244,134.7 245.3,135.3 245.6,135.4 246,135.4 246.3,135.2 247.3,135.2 247.6,135 247.9,135.4 248.6,135.1 249.6,135.4 249.9,135.1 250.2,135.5 250.5,135.4 250.9,134.9 252,133.8 252.3,132.4 252.7,132.9 253,133.4 253.3,134 254.3,134.5 254.6,132.5 254.9,133.1 255.3,133.8 255.6,134.1 256.6,134 256.9,134.2 257.2,133.8 257.6,134.2 257.9,134.1 258.9,134.2 259.5,134.2 259.9,133.7 260.2,134.3 261.2,134.3 261.6,133.5 262,133.7 262.3,133.9 263.3,133.8 263.6,133.7 263.9,133.7 264.3,132.9 264.6,130.7 265.6,127.8 265.9,124.2 266.2,123.6 266.5,121.3 266.9,122.2 268.2,125.2 268.5,124.3 268.8,122.5 269.2,121.7 270.1,120.7 270.5,122.4 270.8,124.1 271.1,124.9 271.3,124.5 272.3,126.9 272.6,125.8 272.9,126.3 273.2,127.4 273.6,127.5 274.5,125.9 274.9,125.5 275.2,125.1 275.5,126.3 275.9,125.7 277.2,125.2 277.5,125.4 277.8,126.6 278.1,127.9 279.1,127.7 279.5,130.9 279.8,130 280.1,129.6 281.2,127.6 282.2,128.5 282.5,127.3 282.9,126.6 283.2,124.9 283.5,123.7 284.5,124.7 284.8,125.5 285.2,125.8 285.5,125.3 285.8,127.1 286.8,128.6 287.1,130.3 287.5,129.2 287.8,129.3 288.1,129.4 289.1,129.9 289.4,130.2 289.7,130.5 290.1,131.4 290.4,131.3 291.2,131.2 291.5,130.8 291.9,131.9 292.2,131.4 292.5,131.8 293.5,131.4 293.8,130.1 294.1,130.4 294.5,130.1 294.8,131.2 295.8,131 296.1,131.2 296.4,131.9 296.8,131.2 297.1,130.6 298.1,130 298.4,127.8 298.7,125.8 299.1,126.8 299.4,128 300.4,127.8 300.7,128.5 301.2,129.1 301.5,129.5 301.8,128.4 302.8,127.5 303.1,126.6 303.5,126 303.8,125.8 304.1,122.4 305.1,122.3 305.4,121.6 305.7,121.8 306.1,123.2 306.4,120.9 307.4,121.8 307.7,120.1 308,115.8 308.4,119.5 308.7,122.3 310,119.1 310.3,121.9 310.7,121.1 311,121.8 311.8,124.4 312.1,123.3 312.4,125.6 312.8,126 313.1,124.3 314.1,123.9 314.4,126.3 314.7,128 315.1,126.9 315.4,126.9 316.4,125.1 316.7,126.1 317,126 317.3,127.2 317.7,127.8 318.7,128.9 319,127.3 319.3,127.8 319.6,126.1 320,126.9 321.1,125.2 321.4,124.8 321.7,125.9 322.4,125 323.4,123.2 323.7,122.1 324,122.1 324.4,123.7 324.7,124.9 325.7,123.4 326,124.5 326.3,125.2 326.7,123.9 327,124.8 328,125.2 328.3,124.1 328.6,124.2 328.9,124.8 329.3,125.8 330.3,125.2 330.6,125.5 330.9,125.6 331.1,124.6 331.4,125.7 332.4,125.6 332.7,126 333,126.9 333.3,126.2 333.7,126.7 334.7,126.3 335,124.2 335.3,123.3 335.6,124 336,125.1 336.9,125.2 337.3,125.9 337.6,126.2 337.9,125.3 338.3,125.7 339.2,125.4 339.6,126.8 339.9,127.1 340.2,125.9 340.6,127 341.7,125.8 342,124.6 342.3,124 342.7,124.8 343.6,125 344,123.7 344.3,123.7 344.6,124.5 344.9,124.3 345.9,124.7 346.3,124.1 346.6,124.6 346.9,125.8 347.2,126.3 348.2,126.6 348.5,126.8 348.9,126.9 349.2,127.4 349.5,128.3 350.5,128.8 351,127.8 351.3,128.1 351.6,128.7 352,126.9 352.9,127.3 353.3,127.4 353.6,126.6 353.9,125.9 354.3,125.2 355.6,125 355.9,124.6 356.2,125.5 356.5,125.3 357.5,125.6 357.9,125.8 358.2,126.9 358.5,126.2 358.8,125.7 359.8,125.2 360.2,124.4 360.5,125.2 360.8,126.3 360.9,126.5 361.9,126.4 362.3,126.9 362.6,125.9 362.9,126.8 363.2,126.2 364.5,125.9 364.9,126 365.2,125.8 365.5,125.4 366.5,125.6 366.8,125.7 367.2,126.1 367.5,126 367.8,127 368.8,126 369.1,126.4 369.5,125.7 370.1,126.4 371.2,126.7 371.6,127.2 371.9,127.7 372.2,127.8 372.5,128.8 373.5,128.8 373.9,129.4 374.2,129.3 374.5,128.6 374.8,129.3 375.8,129.6 376.1,130.2 376.5,129.6 376.8,128.3 377.1,128.7 378.1,128.3 378.4,128.2 379.1,127.7 379.4,128.6 380.4,128.4 380.7,127.7 381.2,126.7 381.5,126.5 382.5,126 382.8,124.2 383.2,124.5 383.5,125.1 383.8,125.3 384.8,126.1 385.1,125.8 385.5,124.7 385.8,125.8 386.1,125.5 387.4,125.7 387.7,125 388.1,126.2 388.4,128.6 389.4,128.3 389.7,127.5 390,129.1 390.4,128.3 390.7,129.3 391.5,130.3 391.8,129.2 392.1,129.2 392.5,128.9 392.8,128.6 393.8,128.8 394.1,128.5 394.4,128.6 394.8,129.1 395.1,129.3 396.4,129.5 396.7,129.9 397.1,130 397.4,130.1 398.4,129.6 398.7,130.2 399,130.2 399.4,130.8 399.7,131.2 401.5,132.5 401.8,130.7 402.1,130.5 402.4,130 402.8,130.6 403.7,130.4 404.1,130.7 404.4,131.5 404.7,131.6 405.1,132.3 406,131.6 406.4,131.2 406.7,131.1 407,130.8 407.3,130.7 408.3,130.5 408.7,129.7 409,129.8 409.3,130.6 409.6,130.1 410.6,130.7 410.8,130.6 411.1,129.8 411.4,129 411.7,129.3 412.7,130 413.1,130.2 413.4,130.7 413.7,131.1 414,131.4 415,131.9 415.3,131.5 415.7,130.7 416,130.4 416.3,129.9 417.3,129.8 417.6,129.4 418,130.2 418.3,130.3 418.6,130.3 419.6,130.3 419.9,129.6 420.3,129.8 420.7,130 421.1,130.5 422,130.6 422.4,130.8 422.7,130.4 423,130.7 423.3,130.2 424.3,129.6 424.7,130.2 425,130 425.3,130 425.6,129.5 426.6,129 426.9,129.4 427.3,129.2 427.6,129.5 427.9,129.7 429.2,129.2 429.6,129.6 429.9,129.8 430.2,130 431,129.4 431.3,129.6 431.7,130.1 432,130.7 432.3,130.3 433.3,130.2 433.6,130.6 434,130.8 434.3,130.8 434.6,130.6 435.6,130.7 435.9,130.5 436.3,130.7 436.6,131.2 436.9,130.9 437.9,131.2 438.2,131.1 438.6,131.3 438.9,131.4 439.2,131.4 440.2,132 440.7,132.1 441,132.2 441.3,131.4 442.6,131.5 442.9,131.7 443.3,131.5 443.6,132 443.9,132.1 444.9,131.8 445.2,131.6 445.6,131.5 445.9,132 446.2,131.7 447.2,131.8 447.5,131.6 447.9,131.7 448.2,131.5 448.5,131.7 449.5,131.8 449.8,131.3 450.2,131 450.5,131.1 450.6,131.4 451.6,131.2 451.9,131.1 452.3,131.8 452.6,132 452.9,132.1 453.9,132.3 454.2,132.3 454.5,132.1 454.9,132.9 455.2,133.7 456.2,133 456.5,133.1 456.8,133 457.2,133.2 457.5,133.3 458.5,134.1 458.8,133.7 459.1,134.4 459.5,134.7 459.8,134.5 460.9,134.4 461.2,134.4 461.6,134.8 461.9,134.8 462.9,134.5 463.2,134.4 463.5,133 463.9,133.5 464.2,133.5 465.2,133.3 465.5,133.8 465.8,133 466.1,134.5 466.5,134.3 467.5,134.3 467.8,134.4 468.1,134 468.4,134.4 468.8,134.4 469.8,134.5 470.1,134.5 470.5,134.3 470.9,134.1 471.2,133.2 472.2,132.6 472.5,132.4 472.8,132.3 473.2,133.1 473.5,133.7 474.8,134.2 475.1,134.4 475.5,134.2 475.8,134.1 476.8,134.5 477.1,134.5 477.4,134.6 477.8,134.4 478.1,134.7 479.1,134.8 479.4,134.6 479.7,134.6 480,134.8 480.4,134.7 481.2,134.8 481.5,135.1 481.8,135.4 482.1,135.2 482.5,135.7 483.5,135.8 484.1,136 484.4,136 484.8,136.2 485.7,136.2 486.1,136.3 486.4,136.3 486.7,136 487.1,136.1 488,135.9 488.4,135.7 488.7,136 489.4,136.2 490.5,135.7 490.8,135.2 491.1,135.6 491.5,135.8 491.8,135.9 492.8,136 493.1,136.1 493.4,135.8 493.7,136.3 494.1,136.3 495.1,136.3 495.4,136.4 495.7,136.4 496,135.4 496.4,135.7 497.4,135.6 497.7,135.9 498,135.9 499.6,135.7 500,135.7 500.3,136 500.8,136 501.7,136.3 502.1,136.3 502.4,136.4 502.7,136.3 503.1,136.4 504,136.4 504.4,136.4 504.7,136.4 505,191.4 505.3,210.8 506.7,199.5 507,204.7 507.3,206.5 507.6,207.3 508.6,198.4 509,194 509.3,194.3 509.6,188.9 509.9,190.1 510.7,186.7 511.1,183.9 511.4,185.1 511.7,184.3 512,188.2 513,187.5 513.3,187.3 513.7,186.8 514,183.6 514.3,182.7 515.6,181.7 516,179.5 516.3,177 516.6,179.6 517.6,177.6 517.9,178 518.3,177 518.6,180.1 518.9,181.6 520.7,180.3 521,178.3 521.3,181 521.7,179.5 522,180.4 523,179.7 523.3,179.9 523.6,181.5 524,181.6 524.3,184.2 525.3,181.6 525.6,181.8 525.9,183.6 526.3,185.4 526.6,185.4 527.6,184.5 527.9,188.1 528.2,186.1 528.6,186.7 528.9,188.7 529.9,187.7 530.2,188.9 530.3,189.5 530.7,189.5 531,188.5 532,187.2 532.3,188 532.6,189.3 532.9,189.7 533.3,190.2 534.3,191.7 534.6,191.2 534.9,193.3 535.2,193.5 535.6,194.3 536.6,194.3 536.9,195 537.2,191.1 537.5,192.8 537.9,191.1 538.8,190.5 539.2,187.6 539.5,188.1 539.8,186.6 540.3,188.2 541.3,189.1 541.6,191.7 541.9,190.6 542.3,190.8 542.6,189.2 543.6,189.6 543.9,189.5 544.2,189.4 544.5,190.1 544.9,187.2 545.9,187.3 546.2,188.5 546.5,189.7 546.8,190.1 547.2,189.9 548.5,192.2 548.8,191.6 549.1,192.6 549.5,192 550.3,192.3 550.6,190 550.9,185.5 551.2,185.7 551.6,187.3 552.5,187.3 552.9,187.1 553.2,186.5 553.5,186 553.9,188.6 554.8,185.5 555.2,187.4 555.5,189.2 555.8,187.1 556.1,188.8 557.1,188.2 557.5,188.4 557.8,187.9 558.1,186.8 558.4,188.9 559.4,190.8 559.8,189.2 560.2,187.3 560.5,187.8 561.9,188.4 562.2,190.5 562.5,187.6 562.8,187.7 563.2,186.9 564.1,188 564.5,189.4 564.8,188.7 565.1,189.3 565.5,189.2 566.4,188.4 566.8,187.4 567.1,187.9 567.4,186.1 567.8,184.7 568.7,181.2 569.1,181.5 569.4,182.7 569.7,183.9 570,182.4 570.8,182.9 571.2,181.4 571.5,181.3 571.8,179.6 572.1,177.8 573.1,175.8 573.5,173.4 573.8,174.9 574.1,174.1 574.4,174.5 575.4,175.9 575.7,177.7 576.1,179 576.4,177.5 576.7,177.5 577.7,175.9 578,175.8 578.4,177 578.7,175.9 579,178.3 580,175.4 580.1,175.4 580.5,173.6 580.8,175.3 581.1,175.2 582.4,172.1 582.8,173.2 583.1,171.2 583.4,168.7 584.4,171.6 584.7,170.5 585.1,171.6 585.4,170.5 585.7,172.7 586.7,174.3 587,175.5 587.4,172.9 587.7,171.7 588,172.6 589,172.1 589.3,172.7 589.6,173 590.1,172.9 590.4,172.7 591.4,172.8 591.7,173.2 592.1,172.3 592.4,172.9 592.7,172.5 594,172.7 594.4,173.8 594.7,175.5 595,175.6 596,175.9 596.3,175.5 596.7,174.8 597,176.1 597.3,177.9 598.3,175.1 598.6,173.9 599,173.4 599.3,174.3 599.6,173.8 600.4,174.5 600.7,174.6 601.1,177.1 601.4,175.7 601.7,176.7 602.7,177.2 603,177.8 603.7,177.2 604,176.1 605,176.9 605.3,176.2 605.6,175 606,173.5 606.3,174.8 607.3,176 607.6,175.9 607.9,175 608.6,172.7 609.6,174.7 610,172.2 610.4,174.6 610.7,173.4 611,174.4 612,174.4 612.3,176.3 612.7,175.4 613,175.8 613.3,176.2 614.3,175.7 614.6,175.8 614.9,177.5 615.3,177 615.6,177.3 616.6,175.9 616.9,175.6 617.2,176.4 617.6,176.2 618.9,175 619.2,175.6 619.5,176.9 619.9,174.1" class="vs7" stroke="#4a3aa7" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="505" cy="191.4" r="4.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>15 January 2015, New York noon: 1.0357</title></circle>
<text x="513" y="207.4" font-size="11" fill="currentColor" font-weight="600">15 Jan 2015: 1.04 at noon</text>
<circle cx="505" cy="253.3" r="4" class="vs7 vsurf" stroke="#4a3aa7" stroke-width="2" fill="#ffffff"><title>Intraday low near 0.85 (not in daily data)</title></circle>
<text x="497" y="257.3" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">briefly near 0.85</text>
<text x="141.7" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2012</text>
<text x="261.3" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2013</text>
<text x="380.9" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2014</text>
<text x="500.4" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2015</text>
<text x="620" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2016</text>
<text x="20" y="312" font-size="10.5" fill="currentColor" opacity="0.6">Source: Federal Reserve H.10 via FRED (DEXSZUS × DEXUSEU). The intraday low is from contemporary reports.</text>
</svg>

Three calm years at the 1.20 floor, then one minute that broke every stop-loss and model that assumed smooth prices.

---

## Part 9: Retail investors and three markets

*Taught in [Lesson 10](?slug=derivatives&lesson=lesson-10-derivatives-for-retail-investors) and [Lesson 11](?slug=derivatives&lesson=lesson-11-the-us-the-uk-and-india)*

### 22. India cooled its options market, but the odds barely moved

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Three pairs of bars comparing individual equity F&amp;O traders in India in the years to March 2025 and March 2026, from SEBI's study of the top 15 brokers. Active traders fell from 98.1 lakh to 78.6 lakh. Aggregate net losses fell from about ₹1.12 lakh crore to ₹91,685 crore. The share of traders who lost money fell only from 90.9% to 87.7%. Average loss per trader edged up, from about ₹1.14 lakh to ₹1.17 lakh." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">India's crackdown: fewer traders, smaller losses, the same odds</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Individual F&amp;O traders in SEBI's broker sample, years to March 2025 and March 2026</text>
<text x="120" y="70" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Active traders, lakh</text>
<line x1="40" y1="250" x2="210" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<path d="M54,250 L54,118.9 Q54,115.9 57,115.9 L103,115.9 Q106,115.9 106,118.9 L106,250 Z" class="vf3" fill="#1baf7a"><title>FY2024-25: 98.1</title></path>
<text x="80" y="107.9" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">98.1</text>
<text x="80" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2024-25</text>
<path d="M134,250 L134,145.6 Q134,142.6 137,142.6 L183,142.6 Q186,142.6 186,145.6 L186,250 Z" class="vf1" fill="#2a78d6"><title>FY2025-26: 78.6</title></path>
<text x="160" y="134.6" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">78.6</text>
<text x="160" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2025-26</text>
<text x="340" y="70" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Net losses, ₹ crore</text>
<line x1="260" y1="250" x2="430" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<path d="M274,250 L274,111.7 Q274,108.7 277,108.7 L323,108.7 Q326,108.7 326,111.7 L326,250 Z" class="vf3" fill="#1baf7a"><title>FY2024-25: 112,000</title></path>
<text x="300" y="100.7" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">112,000</text>
<text x="300" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2024-25</text>
<path d="M354,250 L354,137.3 Q354,134.3 357,134.3 L403,134.3 Q406,134.3 406,137.3 L406,250 Z" class="vf1" fill="#2a78d6"><title>FY2025-26: 91,685</title></path>
<text x="380" y="126.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">91,685</text>
<text x="380" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2025-26</text>
<text x="560" y="70" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Share who lost money</text>
<line x1="480" y1="250" x2="650" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<path d="M494,250 L494,103.9 Q494,100.9 497,100.9 L543,100.9 Q546,100.9 546,103.9 L546,250 Z" class="vf3" fill="#1baf7a"><title>FY2024-25: 90.9%</title></path>
<text x="520" y="92.9" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">90.9%</text>
<text x="520" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2024-25</text>
<path d="M574,250 L574,109.2 Q574,106.2 577,106.2 L623,106.2 Q626,106.2 626,109.2 L626,250 Z" class="vf1" fill="#2a78d6"><title>FY2025-26: 87.7%</title></path>
<text x="600" y="98.2" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">87.7%</text>
<text x="600" y="268" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">2025-26</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.6">Across all brokers, active individual traders fell 18%, from 106.2 lakh to 87.5 lakh. Source: SEBI studies, August 2026.</text>
</svg>

Fewer traders and smaller total losses, but 87.7% of individuals still lost money.

### 23. Leveraged funds deliver the day, not the year

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two line charts of a leveraged fund that delivers twice the daily move of an index. Left, a choppy market: the index rises 5% and falls back to where it started every two days for twenty days, ending flat at 100, but the twice-leveraged fund ends at 95.3 and a twice-inverse fund at 86.6. Right, a steady trend: the index rises 1% a day to 122.0 and the leveraged fund to 148.6, more than twice the index's gain. Daily resetting rewards trends and punishes chop." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Leveraged funds deliver twice the day, not twice the year</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Value of 100 invested over twenty trading days. Illustrative paths.</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">A choppy market: the index goes nowhere</text>
<line x1="60" y1="270" x2="300" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="274" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">60</text>
<line x1="60" y1="202.4" x2="300" y2="202.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="206.4" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">80</text>
<line x1="60" y1="134.7" x2="300" y2="134.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="54" y="138.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">100</text>
<text x="60" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 0</text>
<text x="180" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 10</text>
<text x="300" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 20</text>
<polyline points="60,134.7 72,117.8 84,134.7 96,117.8 108,134.7 120,117.8 132,134.7 144,117.8 156,134.7 168,117.8 180,134.7 192,117.8 204,134.7 216,117.8 228,134.7 240,117.8 252,134.7 264,117.8 276,134.7 288,117.8 300,134.7" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-opacity="0.6"/>
<text x="306" y="138.7" font-size="10.5" fill="currentColor" font-weight="600">index 100</text>
<polyline points="60,134.7 72,100.9 84,136.3 96,102.7 108,137.9 120,104.4 132,139.5 144,106.2 156,141.1 168,107.9 180,142.7 192,109.7 204,144.3 216,111.4 228,145.8 240,113.1 252,147.4 264,114.8 276,148.9 288,116.6 300,150.5" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="306" y="154.5" font-size="10.5" fill="currentColor" font-weight="600">2x 95</text>
<polyline points="60,134.7 72,168.5 84,139.6 96,172.9 108,144.3 120,177.2 132,149 144,181.4 156,153.6 168,185.6 180,158.2 192,189.7 204,162.7 216,193.7 228,167.1 240,197.7 252,171.5 264,201.6 276,175.8 288,205.5 300,180" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="306" y="184" font-size="10.5" fill="currentColor" font-weight="600">−2x 87</text>
<text x="360" y="66" font-size="12" fill="currentColor" font-weight="600">A steady trend: up 1% a day</text>
<line x1="400" y1="254.5" x2="640" y2="254.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="394" y="258.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">100</text>
<line x1="400" y1="192.5" x2="640" y2="192.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="196.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">120</text>
<line x1="400" y1="130.5" x2="640" y2="130.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="134.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">140</text>
<text x="400" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 0</text>
<text x="520" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 10</text>
<text x="640" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">day 20</text>
<polyline points="400,254.5 412,251.4 424,248.3 436,245.1 448,241.9 460,238.7 472,235.4 484,232.1 496,228.8 508,225.5 520,222.1 532,218.6 544,215.2 556,211.7 568,208.2 580,204.6 592,201 604,197.4 616,193.7 628,190 640,186.2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-opacity="0.6"/>
<text x="636" y="210.2" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">index 122</text>
<polyline points="400,254.5 412,248.3 424,242 436,235.5 448,228.9 460,222.2 472,215.4 484,208.4 496,201.3 508,194 520,186.6 532,179.1 544,171.3 556,163.5 568,155.5 580,147.3 592,138.9 604,130.4 616,121.7 628,112.9 640,103.9" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="636" y="95.9" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">2x 149</text>
<text x="20" y="320" font-size="10.5" fill="currentColor" opacity="0.6">The fund resets its exposure every day, so losses compound on a smaller base after a fall.</text>
</svg>

In a choppy market a twice-leveraged fund loses money even when the index goes nowhere.

### 24. Why London matters

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Two charts of London's role. Top: shares of global over-the-counter interest rate derivatives turnover in April 2025, from the BIS Triennial Survey: United Kingdom 49.6%, United States 23.8%, everywhere else 26.6%. Bottom: shares of interest rate swaps cleared in 2025, from Clarus: LCH cleared 97.4% of core US dollar swaps (CME 2.6%), 95.2% of euro swaps (Eurex 4.8%) and effectively all sterling swaps." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Why London matters: half the trading, almost all the clearing</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Top: where OTC rate derivatives are traded. Bottom: where swaps are cleared.</text>
<text x="20" y="74" font-size="11" fill="currentColor" opacity="0.7">OTC interest rate derivatives traded, April 2025</text>
<text x="140" y="101" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">Turnover</text>
<rect x="150" y="84" width="213.8" height="26" rx="3" class="vf7" fill="#4a3aa7" fill-opacity="0.3"><title>Turnover: UK 49.6%</title></rect>
<text x="158" y="101" font-size="10.5" fill="currentColor" font-weight="600">UK 49.6%</text>
<rect x="365.8" y="84" width="101.5" height="26" rx="3" class="vf1" fill="#2a78d6" fill-opacity="0.3"><title>Turnover: US 23.8%</title></rect>
<text x="373.8" y="101" font-size="10.5" fill="currentColor" font-weight="600">US 23.8%</text>
<rect x="469.3" y="84" width="115.7" height="26" rx="3" class="vf4" fill="#eda100" fill-opacity="0.3"><title>Turnover: Rest of world 26.6%</title></rect>
<text x="477.3" y="101" font-size="10.5" fill="currentColor" font-weight="600">Rest of world 26.6%</text>
<text x="20" y="140" font-size="11" fill="currentColor" opacity="0.7">Swaps cleared in 2025, by currency</text>
<text x="140" y="167" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">US dollar</text>
<rect x="150" y="150" width="421.7" height="26" rx="3" class="vf7" fill="#4a3aa7" fill-opacity="0.3"><title>US dollar: LCH 97.4%</title></rect>
<text x="158" y="167" font-size="10.5" fill="currentColor" font-weight="600">LCH 97.4%</text>
<rect x="573.7" y="150" width="11.3" height="26" rx="3" class="vf1" fill="#2a78d6" fill-opacity="0.3"><title>US dollar: </title></rect>
<text x="140" y="203" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">Euro</text>
<rect x="150" y="186" width="412.1" height="26" rx="3" class="vf7" fill="#4a3aa7" fill-opacity="0.3"><title>Euro: LCH 95.2%</title></rect>
<text x="158" y="203" font-size="10.5" fill="currentColor" font-weight="600">LCH 95.2%</text>
<rect x="564.1" y="186" width="20.9" height="26" rx="3" class="vf3" fill="#1baf7a" fill-opacity="0.3"><title>Euro: </title></rect>
<text x="140" y="239" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">Sterling</text>
<rect x="150" y="222" width="435" height="26" rx="3" class="vf7" fill="#4a3aa7" fill-opacity="0.3"><title>Sterling: LCH: effectively all</title></rect>
<text x="158" y="239" font-size="10.5" fill="currentColor" font-weight="600">LCH: effectively all</text>
<text x="592" y="168" font-size="10" fill="currentColor" opacity="0.8">CME 2.6%</text>
<text x="592" y="204" font-size="10" fill="currentColor" opacity="0.8">Eurex 4.8%</text>
<text x="20" y="280" font-size="10.5" fill="currentColor" opacity="0.6">Sources: BIS Triennial Survey 2025; Clarus Financial Technology, 2025 CCP volumes and share in IRD.</text>
</svg>

Half of the world's OTC interest rate derivatives trading, and almost all of its swap clearing.

---

## Part 10: Fifty years of episodes

*Taught in [Lesson 12](?slug=derivatives&lesson=lesson-12-rogues-models-and-leverage) and [Lesson 13](?slug=derivatives&lesson=lesson-13-when-the-plumbing-became-the-story)*

### 25. Four lessons keep repeating

<svg viewBox="0 0 680 530" width="100%" role="img" aria-label="Grid placing the 24 episodes of Lessons 12 and 13 by decade and by the main lesson each teaches. Leverage meets a cash squeeze: MG oil hedge 1993, LTCM 1998, Amaranth 2006, Dash for cash 2020, UK pensions 2022, Tariff shock 2025, Crypto wipeout 2025; Hidden risks, weak controls: Barings 1995, Enron 2001, Credit crunch 2007, AIG, Lehman 2008, Whale, LIBOR 2012, Archegos 2021, SVB 2023; Feedback loops, vanishing liquidity: Black Monday 1987, Flash crash 2010, Swiss franc 2015, Volmageddon 2018, LME nickel 2022; Pricing, products and rules: CBOE opens 1973, Rate shock 1994, Negative oil 2020, India curbs 2024, Hormuz shock 2026. The 2020s already hold 10 of the 24." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Four lessons keep repeating, and the 2020s already hold 10 of these 24 episodes</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Each episode in Lessons 12 and 13, placed by decade and by the main lesson it teaches</text>
<rect x="530" y="54" width="132" height="481" rx="4" class="vf1" fill="#2a78d6" fill-opacity="0.07"/>
<text x="152" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">1970s</text>
<text x="236" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">1980s</text>
<text x="320" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">1990s</text>
<text x="404" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">2000s</text>
<text x="488" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">2010s</text>
<text x="596" y="72" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">2020s</text>
<line x1="20" y1="84" x2="660" y2="84" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="20" y="106" font-size="10.5" fill="currentColor" font-weight="600">Leverage meets</text>
<text x="20" y="119.5" font-size="10.5" fill="currentColor" font-weight="600">a cash squeeze</text>
<rect x="282" y="91" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="320" y="102.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1993</text>
<text x="320" y="114" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">MG oil hedge</text>
<rect x="282" y="122" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="320" y="133.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1998</text>
<text x="320" y="145" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">LTCM</text>
<rect x="366" y="91" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="404" y="102.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2006</text>
<text x="404" y="114" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Amaranth</text>
<rect x="534" y="91" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="102.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2020</text>
<text x="596" y="114" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Dash for cash</text>
<rect x="534" y="122" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="133.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2022</text>
<text x="596" y="145" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">UK pensions</text>
<rect x="534" y="153" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="164.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2025</text>
<text x="596" y="176" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Tariff shock</text>
<rect x="534" y="184" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="195.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2025</text>
<text x="596" y="207" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Crypto wipeout</text>
<line x1="20" y1="220" x2="660" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="20" y="242" font-size="10.5" fill="currentColor" font-weight="600">Hidden risks,</text>
<text x="20" y="255.5" font-size="10.5" fill="currentColor" font-weight="600">weak controls</text>
<rect x="282" y="227" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="320" y="238.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1995</text>
<text x="320" y="250" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Barings</text>
<rect x="366" y="227" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="404" y="238.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2001</text>
<text x="404" y="250" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Enron</text>
<rect x="366" y="258" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="404" y="269.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2007</text>
<text x="404" y="281" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Credit crunch</text>
<rect x="366" y="289" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="404" y="300.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2008</text>
<text x="404" y="312" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">AIG, Lehman</text>
<rect x="450" y="227" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="488" y="238.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2012</text>
<text x="488" y="250" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Whale, LIBOR</text>
<rect x="534" y="227" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="238.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2021</text>
<text x="596" y="250" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Archegos</text>
<rect x="534" y="258" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="269.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2023</text>
<text x="596" y="281" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">SVB</text>
<line x1="20" y1="325" x2="660" y2="325" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="20" y="347" font-size="10.5" fill="currentColor" font-weight="600">Feedback loops,</text>
<text x="20" y="360.5" font-size="10.5" fill="currentColor" font-weight="600">vanishing</text>
<text x="20" y="374" font-size="10.5" fill="currentColor" font-weight="600">liquidity</text>
<rect x="198" y="332" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="236" y="343.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1987</text>
<text x="236" y="355" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Black Monday</text>
<rect x="450" y="332" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="488" y="343.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2010</text>
<text x="488" y="355" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Flash crash</text>
<rect x="450" y="363" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="488" y="374.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2015</text>
<text x="488" y="386" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Swiss franc</text>
<rect x="450" y="394" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="488" y="405.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2018</text>
<text x="488" y="417" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Volmageddon</text>
<rect x="534" y="332" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="343.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2022</text>
<text x="596" y="355" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">LME nickel</text>
<line x1="20" y1="430" x2="660" y2="430" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="20" y="452" font-size="10.5" fill="currentColor" font-weight="600">Pricing,</text>
<text x="20" y="465.5" font-size="10.5" fill="currentColor" font-weight="600">products</text>
<text x="20" y="479" font-size="10.5" fill="currentColor" font-weight="600">and rules</text>
<rect x="114" y="437" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="152" y="448.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1973</text>
<text x="152" y="460" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">CBOE opens</text>
<rect x="282" y="437" width="76" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="320" y="448.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">1994</text>
<text x="320" y="460" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Rate shock</text>
<rect x="534" y="437" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="448.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2020</text>
<text x="596" y="460" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Negative oil</text>
<rect x="534" y="468" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="479.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2024</text>
<text x="596" y="491" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">India curbs</text>
<rect x="534" y="499" width="124" height="27" rx="5" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="596" y="510.5" font-size="9.5" fill="currentColor" text-anchor="middle" font-weight="600">2026</text>
<text x="596" y="522" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.85">Hormuz shock</text>
<line x1="20" y1="535" x2="660" y2="535" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="20" y="553" font-size="10.5" fill="currentColor" opacity="0.65">Lesson 12 covers 1973 to 2007; Lesson 13 covers 2008 to 2026.</text>
</svg>

Leverage meeting a cash squeeze, hidden risk, feedback loops, and the design of the product: twenty-four episodes, four patterns.

### 26. The dash for cash

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

March 2020 in three numbers: margin calls everywhere at once, and a central bank buying more than a trillion dollars of Treasuries to stop the spiral.

### 27. The feared tail can be a spike

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

In 2026 traders paid up for calls struck at $150: in commodities, the skew can point upwards.

---

## Part 11: At work

*Taught in [Lesson 14](?slug=derivatives&lesson=lesson-14-derivatives-at-work)*

### 28. A layered hedge

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Bar chart of an illustrative layered hedging policy for a manufacturer's input costs: the share of expected purchases hedged for each of the next eight quarters, quarter 1 80%, quarter 2 70%, quarter 3 60%, quarter 4 50%, quarter 5 40%, quarter 6 30%, quarter 7 20%, quarter 8 10%. Each quarter, the company adds hedges so that every quarter climbs the ladder as it approaches, smoothing costs without betting on a single price." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A layered hedge: more certainty for nearer quarters</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Share of expected purchases hedged, by quarters ahead. An illustrative policy.</text>
<line x1="80" y1="240" x2="620" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="244" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0%</text>
<line x1="80" y1="197.5" x2="620" y2="197.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="201.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">25%</text>
<line x1="80" y1="155" x2="620" y2="155" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="159" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">50%</text>
<line x1="80" y1="112.5" x2="620" y2="112.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="116.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">75%</text>
<line x1="80" y1="70" x2="620" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">100%</text>
<path d="M89.8,240 L89.8,107 Q89.8,104 92.8,104 L134.8,104 Q137.8,104 137.8,107 L137.8,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 1 ahead: 80% hedged</title></path>
<text x="113.8" y="96" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">80%</text>
<text x="113.8" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+1</text>
<path d="M157.2,240 L157.2,124 Q157.2,121 160.2,121 L202.2,121 Q205.2,121 205.2,124 L205.2,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 2 ahead: 70% hedged</title></path>
<text x="181.2" y="113" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">70%</text>
<text x="181.2" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+2</text>
<path d="M224.8,240 L224.8,141 Q224.8,138 227.8,138 L269.8,138 Q272.8,138 272.8,141 L272.8,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 3 ahead: 60% hedged</title></path>
<text x="248.8" y="130" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">60%</text>
<text x="248.8" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+3</text>
<path d="M292.2,240 L292.2,158 Q292.2,155 295.2,155 L337.2,155 Q340.2,155 340.2,158 L340.2,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 4 ahead: 50% hedged</title></path>
<text x="316.2" y="147" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">50%</text>
<text x="316.2" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+4</text>
<path d="M359.8,240 L359.8,175 Q359.8,172 362.8,172 L404.8,172 Q407.8,172 407.8,175 L407.8,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 5 ahead: 40% hedged</title></path>
<text x="383.8" y="164" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">40%</text>
<text x="383.8" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+5</text>
<path d="M427.2,240 L427.2,192 Q427.2,189 430.2,189 L472.2,189 Q475.2,189 475.2,192 L475.2,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 6 ahead: 30% hedged</title></path>
<text x="451.2" y="181" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">30%</text>
<text x="451.2" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+6</text>
<path d="M494.8,240 L494.8,209 Q494.8,206 497.8,206 L539.8,206 Q542.8,206 542.8,209 L542.8,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 7 ahead: 20% hedged</title></path>
<text x="518.8" y="198" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">20%</text>
<text x="518.8" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+7</text>
<path d="M562.2,240 L562.2,226 Q562.2,223 565.2,223 L607.2,223 Q610.2,223 610.2,226 L610.2,240 Z" class="vf1" fill="#2a78d6"><title>Quarter 8 ahead: 10% hedged</title></path>
<text x="586.2" y="215" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">10%</text>
<text x="586.2" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Q+8</text>
<text x="20" y="282" font-size="10.5" fill="currentColor" opacity="0.6">Each quarter, new hedges are added so the next quarter moves up the ladder. No single price decides the year.</text>
</svg>

More certainty for nearer quarters, adding layers as each one approaches, so that no single price decides the year.

---

## Where to go next

If one figure did not land, follow its link back to the lesson. If they all did, Lesson 15's routine and reading list are the next step, and the [glossary](?slug=derivatives&lesson=glossary) defines every term the guide uses. For the physical markets behind many derivatives, see the [commodity guide](?slug=commodity-markets); for interest rates, duration and repo, the [bond guide](?slug=global-bond-markets&lesson=lesson-01-anatomy-and-the-seesaw).
