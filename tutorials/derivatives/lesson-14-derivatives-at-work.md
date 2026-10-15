# Lesson 14: Derivatives at Work

*Why derivatives are a daily operational reality in banking, insurance and pensions, energy and manufacturing; the problems they create, which are mostly about data, valuation, collateral and control; and where technology, and increasingly AI, adds value.*

---

## Not an exotic sideline

It is easy to finish Lessons 12 and 13 thinking of derivatives as a source of disasters. Inside most firms that use them, they are something far more mundane: a daily process. A treasury team checks the morning's margin call. A risk team re-runs the valuation of ten thousand swaps overnight. A procurement team decides how much of next year's aluminium to fix today. A pension fund rebalances its hedges after a gilt auction.

The hard problems in all of this are rarely about the instruments themselves. They are **data, valuation, collateral and control** problems: knowing exactly what you have, what it is worth, how much cash it might demand tomorrow, and whether anyone independent has checked. That is also exactly where technology, and increasingly AI, earns its keep.

<svg viewBox="0 0 680 280" width="100%" role="img" aria-label="Matrix of which risks four kinds of firm manage with derivatives. Banks: core use for interest rates, currencies, credit, equities; also commodities; Insurers and pensions: core use for interest rates, equities; also currencies, credit; Energy companies: core use for commodities; also interest rates, currencies, credit; Manufacturers: core use for currencies, commodities; also interest rates. Filled circles mark a core use, hollow circles a common secondary use." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Who hedges what</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The risks each sector most often manages with derivatives</text>
<text x="246" y="70" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Interest rates</text>
<text x="338" y="70" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Currencies</text>
<text x="430" y="70" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Credit</text>
<text x="522" y="70" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Commodities</text>
<text x="614" y="70" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Equities</text>
<line x1="20" y1="82" x2="660" y2="82" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="20" y="104" font-size="12" fill="currentColor" font-weight="600">Banks</text>
<circle cx="246" cy="100" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Banks, Interest rates: core use</title></circle>
<circle cx="338" cy="100" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Banks, Currencies: core use</title></circle>
<circle cx="430" cy="100" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Banks, Credit: core use</title></circle>
<circle cx="522" cy="100" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Banks, Commodities: secondary use</title></circle>
<circle cx="614" cy="100" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Banks, Equities: core use</title></circle>
<line x1="20" y1="122" x2="660" y2="122" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="20" y="144" font-size="12" fill="currentColor" font-weight="600">Insurers and pensions</text>
<circle cx="246" cy="140" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Insurers and pensions, Interest rates: core use</title></circle>
<circle cx="338" cy="140" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Insurers and pensions, Currencies: secondary use</title></circle>
<circle cx="430" cy="140" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Insurers and pensions, Credit: secondary use</title></circle>
<text x="522" y="144" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.3">·</text>
<circle cx="614" cy="140" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Insurers and pensions, Equities: core use</title></circle>
<line x1="20" y1="162" x2="660" y2="162" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="20" y="184" font-size="12" fill="currentColor" font-weight="600">Energy companies</text>
<circle cx="246" cy="180" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Energy companies, Interest rates: secondary use</title></circle>
<circle cx="338" cy="180" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Energy companies, Currencies: secondary use</title></circle>
<circle cx="430" cy="180" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Energy companies, Credit: secondary use</title></circle>
<circle cx="522" cy="180" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Energy companies, Commodities: core use</title></circle>
<text x="614" y="184" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.3">·</text>
<line x1="20" y1="202" x2="660" y2="202" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="20" y="224" font-size="12" fill="currentColor" font-weight="600">Manufacturers</text>
<circle cx="246" cy="220" r="6" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"><title>Manufacturers, Interest rates: secondary use</title></circle>
<circle cx="338" cy="220" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Manufacturers, Currencies: core use</title></circle>
<text x="430" y="224" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.3">·</text>
<circle cx="522" cy="220" r="7" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Manufacturers, Commodities: core use</title></circle>
<text x="614" y="224" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.3">·</text>
<line x1="20" y1="262" x2="660" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<circle cx="30" cy="272" r="6" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<text x="42" y="276" font-size="10.5" fill="currentColor" opacity="0.8">core use</text>
<circle cx="118" cy="272" r="5" class="vs1 vsurf" stroke="#2a78d6" stroke-width="2" fill="#ffffff"/>
<text x="130" y="276" font-size="10.5" fill="currentColor" opacity="0.8">common secondary use</text>
</svg>

---

## Banking and capital markets

**Market making.** Dealers earn the spread between buying and selling prices on rates, currency, credit and equity derivatives, then hedge what they cannot offset against other clients (Lesson 5's delta hedging is a dealer's daily life). The business is a flow of thousands of small trades, each priced, booked, hedged and settled.

**Valuation adjustments.** A derivative's true price is not the textbook price. It must include the cost of the counterparty defaulting, of funding any collateral the bank must post but cannot collect, and of the capital the trade consumes. Banks bundle these as **XVA**.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Waterfall chart of illustrative valuation adjustments a bank adds to a ten-year interest rate swap with a BBB-rated company, in basis points of the notional amount paid upfront. Starting from the price that assumes nobody defaults: CVA: the client might default 30 basis points, FVA: funding uncollateralised exposure 10 basis points, MVA: funding initial margin on the hedge 5 basis points, KVA: the capital the trade uses 15 basis points, for a total of 60 basis points, or £6,000 on every £10 million." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">XVA: what a swap really costs once default, funding and capital are priced</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Illustrative adjustments on a ten-year swap with a BBB-rated company, basis points of notional upfront</text>
<line x1="330" y1="60" x2="330" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="330" y="262" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">0</text>
<line x1="412.9" y1="60" x2="412.9" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="412.9" y="262" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">20bp</text>
<line x1="495.7" y1="60" x2="495.7" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="495.7" y="262" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">40bp</text>
<line x1="578.6" y1="60" x2="578.6" y2="246" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="578.6" y="262" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">60bp</text>
<text x="320" y="82" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">CVA: the client might default</text>
<rect x="330" y="66" width="124.3" height="24" rx="3" class="vf2" fill="#eb6834" fill-opacity="0.75"><title>CVA: the client might default: 30bp</title></rect>
<text x="462.3" y="82" font-size="11.5" fill="currentColor" font-weight="600">30bp</text>
<text x="320" y="118" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">FVA: funding uncollateralised exposure</text>
<rect x="454.3" y="102" width="41.4" height="24" rx="3" class="vf4" fill="#eda100" fill-opacity="0.75"><title>FVA: funding uncollateralised exposure: 10bp</title></rect>
<text x="503.7" y="118" font-size="11.5" fill="currentColor" font-weight="600">10bp</text>
<text x="320" y="154" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">MVA: funding initial margin on the hedge</text>
<rect x="495.7" y="138" width="20.7" height="24" rx="3" class="vf3" fill="#1baf7a" fill-opacity="0.75"><title>MVA: funding initial margin on the hedge: 5bp</title></rect>
<text x="524.4" y="154" font-size="11.5" fill="currentColor" font-weight="600">5bp</text>
<text x="320" y="190" font-size="11" fill="currentColor" text-anchor="end" opacity="0.9">KVA: the capital the trade uses</text>
<rect x="516.4" y="174" width="62.1" height="24" rx="3" class="vf7" fill="#4a3aa7" fill-opacity="0.75"><title>KVA: the capital the trade uses: 15bp</title></rect>
<text x="586.6" y="190" font-size="11.5" fill="currentColor" font-weight="600">15bp</text>
<text x="320" y="226" font-size="11" fill="currentColor" text-anchor="end" font-weight="600" opacity="0.9">Total adjustment</text>
<rect x="330" y="210" width="248.6" height="24" rx="3" class="vf1" fill="#2a78d6" fill-opacity="0.9"><title>Total adjustment: 60bp</title></rect>
<text x="586.6" y="226" font-size="11.5" fill="currentColor" font-weight="600">60bp</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.6">Illustrative. Actual adjustments depend on the client's credit, collateral terms and the bank's funding and capital.</text>
</svg>

On an uncollateralised ten-year swap with a company rated BBB, the adjustments might add up to something like **60 basis points** of the notional, paid in the price: £60,000 on every £10 million. That is why corporate clients who will not post collateral pay more for the same swap, and why computing XVA means simulating thousands of market scenarios across whole portfolios every night.

**Capital and risk rules.** The Basel Committee's overhaul of trading-book capital, the **Fundamental Review of the Trading Book**, and the margin rules for uncleared derivatives force banks to measure risk at a granular level and to post initial margin to each other (Lesson 8). Both push business towards clearing and towards simpler products.

**Collateral operations.** Every margin call must be calculated, agreed, settled and reconciled, daily, across hundreds of counterparties, often with different collateral terms. Disputes are common and expensive, and in a crisis the process itself becomes a source of risk.

**Surveillance.** Regulators expect firms to catch spoofing (Lesson 13's Flash Crash) and cross-market manipulation, including the kind of linked trading between shares and options at the heart of the Jane Street case (Lesson 11).

---

## Insurance and pensions

- **Insurers** use interest rate and inflation swaps to match the long-dated promises in annuities, and options to hedge the guarantees they sell on savings products, which behave like puts on the stock market.
- **UK defined benefit pension funds** are among the world's biggest users of long-dated swaps, through liability-driven investment (Lesson 7). Since 2022 they must hold much larger collateral buffers, and their managers spend as much time on liquidity planning as on returns.
- **Catastrophe risk** is increasingly transferred through **catastrophe bonds**, which lose their principal if a defined disaster such as a hurricane strikes, and **parametric** weather contracts, which pay out automatically when a measurement, such as rainfall or wind speed, crosses a threshold. They are the bridge between insurance and derivatives: insurance economics, derivatives mechanics.

---

## Energy

**Hedging programmes.** Producers, utilities and traders hedge prices with forwards, futures, swaps and options. Corporate power buyers sign long-term **power purchase agreements** with wind and solar farms, which are, in effect, long-dated swaps on electricity.

**Liquidity is the binding constraint.** The 2022 energy crisis and the 2026 Hormuz shock showed that a well-hedged company can still run short of cash for margin calls. In September 2022 the Norwegian producer Equinor estimated that European energy trading needed at least **€1.5 trillion** of liquidity to cover them, and governments, including the UK's, set up emergency credit schemes (Lesson 9). Forecasting collateral needs under stress is now a board-level issue.

**Valuation discipline.** Enron's lesson endures (Lesson 12): long-dated, illiquid contracts need independent price verification rather than the trader's own model, and energy has more of them than most markets.

**Power markets.** More wind and solar means more volatile and sometimes negative electricity prices, because the wind and the sun cannot be told to stop when demand is low. That raises demand for options, for **shaped products** that match a particular profile of hours, and for better forecasting, and the [commodity guide](?slug=commodity-markets&lesson=lesson-12-commodities-at-work) explores the physical side.

---

## Manufacturing

**What gets hedged.** Metals and energy inputs, currency on export sales and imported parts, and interest rates on debt. A car maker hedges aluminium, steel, palladium, the euro and the yen; a food producer hedges wheat, sugar, gas and the dollar.

**Hedging policy.** Good programmes fix what to hedge, what share of exposure, how far ahead and with which instruments, and they forbid speculation. A common design is a **layered hedge**.

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

The company hedges a large share of the next quarter's purchases, a smaller share of later quarters, and adds to each layer as it approaches. Costs are smoothed, no single price decides the year, and the board knows in advance roughly what next year's inputs will cost. Metallgesellschaft (Lesson 12) shows what happens when a programme ignores the cash its hedges might demand.

**Hedge accounting.** Derivatives are marked to market, so a perfectly good hedge can swing reported profits every quarter while the thing it hedges, a future purchase, is not yet on the books. Under **IFRS 9** (and the US equivalent), companies can apply **hedge accounting**, matching the timing of the gains and losses, but only if they document each hedge relationship and show that it is effective: a heavy data and documentation burden.

---

## Where technology and AI add value

| Problem | What technology already does | Where AI adds value |
| --- | --- | --- |
| **Trade capture and lifecycle** | ISDA's Common Domain Model describes trades and events in a standard, machine-readable form | Extracting terms from decades of legacy confirmations and ISDA agreements |
| **Valuation and risk** | Cloud and GPU computing run large Monte Carlo simulations for XVA and capital | Machine-learning models that approximate slow pricing models in a fraction of the time |
| **Collateral and liquidity** | Real-time collateral inventories and optimisation engines | Forecasting margin calls under stress scenarios before they arrive |
| **Regulatory reporting** | Digital regulatory reporting turns reporting rules into executable code | Mapping new regulatory text to data fields and explaining reconciliation breaks |
| **Surveillance** | Rule-based alerts for spoofing and wash trading | Graph and anomaly detection linking accounts, entities and venues across products |
| **Corporate hedging** | Treasury and energy trading systems connected to banks and exchanges | Agents that monitor exposures, propose hedges within policy and explain the accounting effect, with human approval |
| **Retail protection** | Appropriateness tests and loss warnings | Spotting harmful trading patterns early, as the FCA's Consumer Duty expects |

Two cautions apply to every row. AI that prices, hedges or reports needs the same independent validation as any other model, because model risk (Lesson 9) does not disappear when the model is a neural network. And the most valuable thing in most of these rows is clean, standardised data; the clever part only works once the plumbing does.

---

## Questions that reveal a firm's derivatives maturity

> 1. **Can you see your total exposure to each counterparty, across all products, today?**
> 2. **How much cash would you need if markets moved like 2022 tomorrow, and how do you know?**
> 3. **How long does it take to agree a margin call or resolve a collateral dispute?**
> 4. **How many of your trades still rely on spreadsheets or manual confirmations?**
> 5. **Who independently checks the valuation of your hardest-to-price contracts?**

A firm that answers all five quickly and precisely has learned the lessons of the last fifty years. A firm that hesitates on the second has not yet met its version of Metallgesellschaft.

---

## Check yourself

**1. A bank prices a £50 million ten-year swap with a BBB-rated company that will not post collateral, adding 60 basis points of XVA. How much is that in pounds, and what would change if the company agreed to post collateral daily?**

<details>
<summary>Show the answer</summary>

60bp × £50m = **£300,000**, built into the swap rate. With daily collateral, the counterparty-default adjustment (CVA) and the funding adjustment (FVA) would shrink sharply, because the bank's exposure would be covered most of the time, so the price would improve; some MVA and KVA would remain.

</details>

**2. A manufacturer expects to buy 10,000 tonnes of aluminium in each of the next eight quarters and follows the ladder in this lesson. How many tonnes are hedged today for quarters 1, 4 and 8? What happens next quarter?**

<details>
<summary>Show the answer</summary>

Quarter 1: 80% × 10,000 = **8,000 tonnes**; quarter 4: **5,000**; quarter 8: **1,000**. Next quarter, today's quarter 2 becomes quarter 1, so the company adds 1,000 tonnes to take it from 70% to 80%, and so on down the ladder, while a new eighth quarter starts at 10%.

</details>

**3. Why might a company with a perfectly effective currency hedge still report volatile quarterly profits?**

<details>
<summary>Show the answer</summary>

Because the derivative is marked to market every quarter while the future sale it hedges is not yet recorded. Without **hedge accounting**, the hedge's gains and losses hit profits before the offsetting effect on the sale does. Hedge accounting matches the timing, but only for relationships the company documents and tests.

</details>

---

## What to carry into Lesson 15

- Inside firms, derivatives are a **daily process**, and the hard problems are **data, valuation, collateral and control**.
- Banks price in **XVA**: default, funding and capital costs, which is why uncollateralised clients pay more.
- Insurers and pension funds match long promises with swaps and must plan for **collateral calls**.
- Energy firms' binding constraint is **liquidity**, not price.
- Manufacturers use **policies and layered hedges**, and need **hedge accounting** to keep reported profits meaningful.
- Technology and AI add most where the plumbing is: trade data, valuation, collateral forecasting, reporting and surveillance.

Lesson 15 gathers the guide into ten mental models, ten common mistakes, a way to decode headlines, and a routine for staying current.

---

## Sources

- [Euronews, citing Equinor: European power firms need 1.5 trillion euros to cover margin calls (September 2022)](https://www.euronews.com/next/2022/09/06/ukraine-crisis-gas-equinor)
- [ISDA: Common Domain Model](https://www.isda.org/2019/10/14/isda-common-domain-model/)
- [IFRS Foundation: IFRS 9 Financial Instruments (hedge accounting)](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/)
- [FCA: Consumer Duty](https://www.fca.org.uk/firms/consumer-duty)
