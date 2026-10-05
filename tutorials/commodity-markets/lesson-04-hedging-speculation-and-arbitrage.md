# Lesson 4: Hedging, Speculation and Arbitrage

*A wheat farmer's hedge worked through to the last dollar, the two ways a sensible hedge can still go wrong, why the market needs speculators, and the arbitrage that keeps prices around the world in line.*

---

## A farmer's problem

It is May. A farmer has just planted wheat and expects to harvest **50,000 bushels** in September. Everything that costs money (land, seed, fertiliser, fuel, labour) has already been spent or committed. What the farmer does not know is the price the crop will fetch in four months.

September wheat futures are trading at **$6.00 a bushel**, a price that covers the farmer's costs and leaves a profit. If the price falls to $5.00 by harvest, that profit becomes a loss. The question is whether the farmer can lock in $6.00 now.

They can. A CBOT wheat contract covers 5,000 bushels (Lesson 3), so the farmer **sells ten September futures contracts**, covering 10 × 5,000 = 50,000 bushels, at $6.00. This is a short hedge: a natural seller, selling futures.

---

## The hedge, worked through

In September the farmer does two things on the same day: sells the actual wheat for whatever it is worth, and buys back the ten futures contracts at the new price to close the position. Suppose for now that the farmer can sell the wheat locally at exactly the futures price. *(The numbers are illustrative; the next section removes that simplification.)*

| Scenario in September | Sale of the crop | Futures result | Total received | Effective price |
| --- | ---: | ---: | ---: | ---: |
| Price falls to $5.00 | $250,000 | gain of $50,000 | $300,000 | $6.00 a bushel |
| Price stays at $6.00 | $300,000 | nothing | $300,000 | $6.00 a bushel |
| Price rises to $7.00 | $350,000 | loss of $50,000 | $300,000 | $6.00 a bushel |

The futures column is simple. The farmer sold at $6.00 and buys back at the September price, so each dollar the price falls is a dollar per bushel gained on 50,000 bushels, and each dollar it rises is a dollar lost. Whatever happens, the two columns add up to $300,000.

<svg viewBox="0 0 680 340" width="100%" role="img" aria-label="Line chart of a wheat farmer's hedge. The farmer sells 50,000 bushels of September futures at $6.00. As the September price ranges from $5 to $7, the crop sells for $250,000 to $350,000 and the futures position gains $50,000 or loses $50,000, so the total is always $300,000, an effective $6.00 a bushel." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A hedge flattens the outcome</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Farmer sells 10 September wheat futures (50,000 bushels) at $6.00. Illustrative.</text>
<line x1="110" y1="280" x2="580" y2="280" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="284" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−$100k</text>
<line x1="110" y1="237.2" x2="580" y2="237.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="102" y="241.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0k</text>
<line x1="110" y1="194.4" x2="580" y2="194.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="198.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$100k</text>
<line x1="110" y1="151.6" x2="580" y2="151.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="155.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$200k</text>
<line x1="110" y1="108.8" x2="580" y2="108.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="112.8" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$300k</text>
<line x1="110" y1="66" x2="580" y2="66" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="70" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$400k</text>
<text x="110" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$5.00</text>
<text x="222.5" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$5.50</text>
<text x="335" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$6.00</text>
<text x="447.5" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$6.50</text>
<text x="560" y="298" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$7.00</text>
<text x="345" y="316" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">Wheat price in September (per bushel)</text>
<polyline points="110,130.2 560,87.4" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="110,215.8 560,258.6" class="vs2" stroke="#eb6834" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="110,108.8 560,108.8" class="vs3" stroke="#1baf7a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="110" cy="130.2" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Crop sale at $5.00: $250,000</title></circle>
<circle cx="110" cy="215.8" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Futures result at $5.00: $+50,000</title></circle>
<circle cx="560" cy="87.4" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Crop sale at $7.00: $350,000</title></circle>
<circle cx="560" cy="258.6" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>Futures result at $7.00: $-50,000</title></circle>
<text x="570" y="85.4" font-size="11.5" fill="currentColor" font-weight="600">Crop: $350k</text>
<text x="570" y="126.8" font-size="11.5" fill="currentColor" font-weight="600">Total: $300k</text>
<text x="570" y="140.8" font-size="11" fill="currentColor" opacity="0.75">at any price</text>
<text x="570" y="262.6" font-size="11.5" fill="currentColor" font-weight="600">Futures: −$50k</text>
<text x="104" y="207.8" font-size="11" fill="currentColor" opacity="0.75">+$50k at $5</text>
<line x1="110" y1="330" x2="128" y2="330" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="134" y="334" font-size="11.5" fill="currentColor" opacity="0.85">Sale of the crop</text>
<line x1="241.3" y1="330" x2="259.3" y2="330" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="265.3" y="334" font-size="11.5" fill="currentColor" opacity="0.85">Futures gain or loss</text>
<line x1="394.5" y1="330" x2="412.5" y2="330" class="vs3" stroke="#1baf7a" stroke-width="2.5" stroke-linecap="round"/>
<text x="418.5" y="334" font-size="11.5" fill="currentColor" opacity="0.85">Total received</text>
</svg>

> **A hedge works like insurance.** It removes the disaster scenario, and it gives up the windfall. The farmer who hedged at $6.00 does not share in a rise to $7.00, and should not regret it: the point was never to make the most money, but to know in May what September would bring.

A flour miller on the other side faces the mirror image. The miller needs wheat in September and fears a *rise*, so it buys futures at $6.00, a long hedge. If wheat climbs to $7.00 the miller pays $350,000 for 50,000 bushels but makes $50,000 on the futures, and its effective cost is $6.00. In a market with only these two, the farmer and the miller could simply have agreed a forward contract at $6.00. Futures let them do it without finding each other, and without trusting each other.

---

## Wrinkle one: basis risk

The table assumed the farmer could sell the wheat at exactly the futures price. In reality the farmer sells to a local grain elevator, which pays the **local cash price**, and that price is rarely the same as the futures price. The futures contract is for a particular grade of wheat delivered to particular places; the farmer's wheat is in a particular county and has to be moved and stored.

The gap between the two is called the **basis**:

> basis = local cash price − futures price

In much of the American grain belt the basis is negative, because the futures price is set at delivery points the local wheat would have to travel to. Suppose the farmer's local basis is usually about **−$0.30**: the elevator pays 30 cents under the futures price.

Now work out what the hedge really locks in. At harvest, the farmer sells wheat at the cash price (futures price plus basis) and gains or loses on the futures (the $6.00 sold, minus the futures price). The futures price appears in both and cancels out:

> effective price = $6.00 + basis at harvest

So the hedge fixes the futures part of the price completely, and leaves the basis exposed.

<svg viewBox="0 0 680 270" width="100%" role="img" aria-label="Bar chart of the effective price a hedged farmer receives depending on the basis at harvest. Having sold futures at $6.00, the farmer receives $5.90 if the local price is 10 cents under the futures price, $5.70 if it is 30 cents under, and $5.50 if it is 50 cents under." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The hedge fixes the futures price, not the local one</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Effective price per bushel = $6.00 futures price sold + basis at harvest. Illustrative.</text>
<line x1="200" y1="70" x2="200" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="200" y="230" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$5.00</text>
<line x1="340" y1="70" x2="340" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="340" y="230" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$5.40</text>
<line x1="480" y1="70" x2="480" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="480" y="230" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$5.80</text>
<line x1="620" y1="70" x2="620" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="620" y="230" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$6.20</text>
<line x1="550" y1="64" x2="550" y2="214" class="vs8" stroke="#e34948" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="554" y="62" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">futures price sold: $6.00</text>
<text x="190" y="96" font-size="12" fill="currentColor" text-anchor="end" font-weight="600">Basis −$0.10</text>
<text x="190" y="111" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">narrower than expected</text>
<path d="M200,84 L512,84 Q515,84 515,87 L515,103 Q515,106 512,106 L200,106 Z" class="vf3" fill="#1baf7a"><title>Basis −$0.10: effective price $5.90</title></path>
<text x="564" y="100" font-size="12" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">$5.90</text>
<text x="190" y="140" font-size="12" fill="currentColor" text-anchor="end" font-weight="600">Basis −$0.30</text>
<text x="190" y="155" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">as expected</text>
<path d="M200,128 L442,128 Q445,128 445,131 L445,147 Q445,150 442,150 L200,150 Z" class="vf3" fill="#1baf7a"><title>Basis −$0.30: effective price $5.70</title></path>
<text x="564" y="144" font-size="12" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">$5.70</text>
<text x="190" y="184" font-size="12" fill="currentColor" text-anchor="end" font-weight="600">Basis −$0.50</text>
<text x="190" y="199" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7">wider than expected</text>
<path d="M200,172 L372,172 Q375,172 375,175 L375,191 Q375,194 372,194 L200,194 Z" class="vf3" fill="#1baf7a"><title>Basis −$0.50: effective price $5.50</title></path>
<text x="564" y="188" font-size="12" fill="currentColor" font-weight="600" style="font-variant-numeric:tabular-nums">$5.50</text>
<text x="20" y="258" font-size="10.5" fill="currentColor" opacity="0.6">Bars start at $5.00 to make the differences visible; the axis is not zero-based.</text>
</svg>

If the basis comes in at the usual −$0.30, the farmer receives $5.70, as planned. If a bumper local harvest swamps the elevators and the basis widens to −$0.50, the farmer receives $5.50. A hedge is never perfect, because basis can shift. The risk that remains is called **basis risk**, and it is much smaller than the price risk the farmer started with.

---

## Wrinkle two: the cash squeeze

The second wrinkle is more dangerous, because it can bankrupt someone whose hedge is perfectly sound.

Futures are settled in cash every day (Lesson 3). Suppose wheat rises steadily through the summer, from $6.00 in May to $7.00 by September. The farmer's ten short contracts lose money every time the price rises, and the clearing house collects those losses daily as variation margin. By September the farmer has paid out **$50,000 in cash**.

<svg viewBox="0 0 680 380" width="100%" role="img" aria-label="Two stacked charts over seventeen weeks from May to September. Top: the September wheat futures price rises from $6.00 to $7.00. Bottom: the hedged farmer's cumulative variation margin payments climb to $50,000, cash that must be paid before the crop is harvested and sold." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A perfect hedge can still run you out of cash</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The farmer's 10 short futures as prices rise before harvest. Illustrative.</text>
<text x="20" y="76" font-size="11.5" fill="currentColor" font-weight="600">Futures</text>
<text x="20" y="91" font-size="11.5" fill="currentColor" font-weight="600">price</text>
<line x1="110" y1="161.7" x2="630" y2="161.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="165.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$6.00</text>
<line x1="110" y1="120" x2="630" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$6.50</text>
<line x1="110" y1="78.3" x2="630" y2="78.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="82.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$7.00</text>
<polyline points="110,161.7 140,157.5 170,151.7 200,155 230,145 260,135.8 290,139.2 320,128.3 350,121.7 380,115.8 410,118.3 440,106.7 470,100 500,95 530,90 560,85.8 590,81.7 620,78.3" class="vs2" stroke="#eb6834" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="620" cy="78.3" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"/>
<text x="20" y="220" font-size="11.5" fill="currentColor" font-weight="600">Margin</text>
<text x="20" y="235" font-size="11.5" fill="currentColor" font-weight="600">paid</text>
<line x1="110" y1="330" x2="630" y2="330" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="102" y="334" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0k</text>
<line x1="110" y1="291.3" x2="630" y2="291.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="295.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$20k</text>
<line x1="110" y1="252.7" x2="630" y2="252.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="256.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$40k</text>
<line x1="110" y1="214" x2="630" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="102" y="218" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$60k</text>
<polygon points="110,330 110,330 140,325.2 170,318.4 200,322.3 230,310.7 260,300 290,303.9 320,291.3 350,283.6 380,276.8 410,279.7 440,266.2 470,258.5 500,252.7 530,246.9 560,242 590,237.2 620,233.3 620,330" class="vf8" fill="#e34948" fill-opacity="0.12"/>
<polyline points="110,330 140,325.2 170,318.4 200,322.3 230,310.7 260,300 290,303.9 320,291.3 350,283.6 380,276.8 410,279.7 440,266.2 470,258.5 500,252.7 530,246.9 560,242 590,237.2 620,233.3" class="vs8" stroke="#e34948" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="620" cy="233.3" r="4.5" class="vf8 vring" fill="#e34948" stroke="#ffffff" stroke-width="2"><title>Cumulative margin paid by September: $50,000</title></circle>
<text x="612" y="223.3" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">$50,000 paid out</text>
<text x="110" y="350" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">May</text>
<text x="230" y="350" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Jun</text>
<text x="380" y="350" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Jul</text>
<text x="500" y="350" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Aug</text>
<text x="620" y="350" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">Sep</text>
<text x="20" y="372" font-size="10.5" fill="currentColor" opacity="0.6">The crop in the barn is worth $50,000 more, but it cannot be sold until harvest. The cash goes out now.</text>
</svg>

None of this is a real loss in the end: the wheat in the field is worth $50,000 more, and when it is sold the two cancel exactly. But the wheat cannot be sold until it is harvested, and the margin calls arrive **now**. A farmer, or a company, that runs out of cash before then is forced to close the hedge at the worst moment, or simply fails.

This is not a textbook curiosity. In 2022, as gas and power prices soared after Russia's invasion of Ukraine, European energy companies that had sold their future output through futures faced enormous margin calls on hedges that were economically sound. In September 2022 the Norwegian producer Equinor estimated that energy trading in Europe needed at least 1.5 trillion euros of liquidity to cover them. Governments extended emergency credit lines to utilities, and Germany ended up nationalising Uniper, its largest gas importer (Lesson 11).

> A hedge removes price risk and replaces it with **liquidity risk**. Before hedging, always ask how much cash the position could demand if prices move sharply against it, and where that cash would come from.

---

## Why speculators matter, and where they cause trouble

For every hedger who sells, someone must buy. But the farmer and the miller rarely arrive at the same moment, in the same size, for the same delivery month. The farmer wants to sell in May; the miller may not want to buy until July. **Speculators** fill the gap. They buy what hedgers want to sell and sell what hedgers want to buy, absorbing price risk in exchange for the chance of a profit, and their trading folds new information into prices quickly. Without them, hedging would be slower and more expensive, because every hedger would have to wait for, or pay up to attract, a natural counterpart.

The trouble starts when positions become too large or too concentrated. A trader who controls most of the commodity available for delivery can force everyone who sold futures to buy back at almost any price, which is called a **corner**. A trader caught holding a huge short position with nothing to deliver can be **squeezed** as the price runs against it. Lessons 10 and 11 tell these stories, from the Hunt brothers' silver corner in 1980 to the nickel squeeze of 2022, and they explain why exchanges limit position sizes and can change margin rules in the middle of a crisis.

---

## Arbitrage: the force that keeps prices connected

**Arbitrageurs** buy where something is cheap and sell where it is dear, and in doing so pull prices back into line. They work in three directions.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Three panels showing the three kinds of arbitrage. Across place: buy gold in London, fly it to New York, and sell it there when New York pays more than the cost of moving it. Across time: buy oil now, store it, and sell a futures contract when the futures price more than covers storage and financing. Across quality: blend a cheaper and a better grade into a mix that meets a contract's specification." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Three ways arbitrage ties prices together</text>
<rect x="20" y="52" width="200" height="228" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="120" y="76" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Across place</text>
<rect x="38" y="98" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="120" y="118" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Buy gold in London</text>
<line x1="120" y1="130" x2="120" y2="146" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="120,146 118,141.4 122,141.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="38" y="148" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="120" y="168" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Fly it to New York</text>
<line x1="120" y1="180" x2="120" y2="196" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="120,196 118,191.4 122,191.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="38" y="198" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="120" y="218" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Sell where it pays more</text>
<text x="120" y="252" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Works while the price gap</text>
<text x="120" y="266" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">exceeds freight and insurance</text>
<rect x="240" y="52" width="200" height="228" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="340" y="76" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Across time</text>
<rect x="258" y="98" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="340" y="118" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Buy oil today</text>
<line x1="340" y1="130" x2="340" y2="146" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="340,146 338,141.4 342,141.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="258" y="148" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="340" y="168" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Store it for six months</text>
<line x1="340" y1="180" x2="340" y2="196" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="340,196 338,191.4 342,191.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="258" y="198" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="340" y="218" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Sell futures for then</text>
<text x="340" y="252" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Works while the futures price</text>
<text x="340" y="266" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">exceeds storage and financing</text>
<rect x="460" y="52" width="200" height="228" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="560" y="76" font-size="13.5" fill="currentColor" text-anchor="middle" font-weight="600">Across quality</text>
<rect x="478" y="98" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="560" y="118" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Buy a cheaper grade</text>
<line x1="560" y1="130" x2="560" y2="146" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="560,146 558,141.4 562,141.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="478" y="148" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="560" y="168" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Blend with a better one</text>
<line x1="560" y1="180" x2="560" y2="196" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="560,196 558,191.4 562,191.4" fill="currentColor" fill-opacity="0.5"/>
<rect x="478" y="198" width="164" height="30" rx="6" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<text x="560" y="218" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.9">Sell to the specification</text>
<text x="560" y="252" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">Works while the blend is worth</text>
<text x="560" y="266" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">more than its ingredients</text>
</svg>

**Across place.** Suppose gold costs $4,300 an ounce in London, while New York futures for delivery this month trade at $4,340. Moving metal is not free: it has to be flown, insured, financed and often recast, because New York's exchange accepts smaller bars than London's 400-ounce standard. If all of that costs about $8 an ounce, an arbitrageur can buy in London and sell in New York for a profit of $32 an ounce, or $12,800 on a single 400-ounce bar. *(Illustrative numbers.)* As traders do it, London's price rises and New York's falls until the gap is no bigger than the cost of moving metal.

**Across time.** If the price for delivery in six months is far enough above today's price, a trader can buy now, store the commodity, and sell a futures contract for later delivery, locking in the difference. Lesson 6 shows that this trade puts a ceiling on how far future prices can rise above today's, and what happens when storage runs out.

**Across quality.** Refiners and merchants blend cheaper grades of crude or grain into mixes that meet a contract's specification, so that the price gap between grades cannot stray far from what blending costs.

This is why the gold price in London, New York, Mumbai and Shanghai rarely drifts far apart for long. When it does, something is blocking the flow: transport, regulation or tariffs. India's import duty is one example, and the early months of 2025 provided a dramatic one, when fear of US tariffs opened an unusually wide gap between New York and London and record amounts of gold were flown across the Atlantic (Lesson 11).

> Arbitrage sets the **maximum** gap between two related prices: the cost of turning one into the other, by moving it, storing it or blending it. When a gap grows wider than that, look for whatever is stopping the arbitrage.

---

## Check yourself

**1. A flour miller buys 6 September wheat futures at $6.00 to cover 30,000 bushels. In September wheat costs $6.80. What does the miller pay for its wheat in total, and what is its effective price? (Assume it buys at the futures price.)**

<details>
<summary>Show the answer</summary>

The wheat costs 30,000 × $6.80 = $204,000. The futures, bought at $6.00 and sold at $6.80, gain 30,000 × $0.80 = $24,000. Net cost: $204,000 − $24,000 = **$180,000**, which is **$6.00 a bushel**.

</details>

**2. The farmer sold futures at $6.00, expecting a basis of −$0.30. At harvest the futures price is $5.40 and the local elevator pays $4.95. What effective price did the farmer receive?**

<details>
<summary>Show the answer</summary>

The basis turned out to be $4.95 − $5.40 = −$0.45. The farmer sells the wheat for $4.95 and gains $6.00 − $5.40 = $0.60 on the futures, a total of **$5.55**. Check with the formula: $6.00 + (−$0.45) = $5.55. That is 15 cents less than the $5.70 planned, because the basis widened by 15 cents.

</details>

**3. Gold is $4,300 in London and $4,312 in New York, and moving it costs $15 an ounce. Is there an arbitrage? What would change your answer?**

<details>
<summary>Show the answer</summary>

No. The $12 gap is smaller than the $15 cost of moving metal, so buying in London and selling in New York would lose $3 an ounce. A gap can persist anywhere inside the cost of arbitrage. The trade would appear if New York's premium grew beyond $15, or if moving metal became cheaper.

</details>

---

## What to carry into Lesson 5

- A **hedge** locks in a price by taking the opposite position in futures. It removes the disaster and gives up the windfall.
- What a futures hedge really fixes is the futures price; the **basis** (local price minus futures price) stays exposed, so hedges are never perfect.
- Daily margin turns price risk into **liquidity risk**: a sound hedge can still demand cash you do not have, as Europe's energy companies found in 2022.
- **Speculators** supply the liquidity hedgers need, and become dangerous when positions grow too large or too concentrated.
- **Arbitrage** across place, time and quality caps the gap between related prices at the cost of moving, storing or blending.

Lessons 1 to 4 described the market's machinery. Lesson 5 turns to what actually sets the price, starting with the stubbornness of supply and demand.

---

## Sources

- [Euronews, citing Equinor: European power firms need 1.5 trillion euros to cover margin calls (September 2022)](https://www.euronews.com/next/2022/09/06/ukraine-crisis-gas-equinor)
- [CME Group: CBOT wheat futures contract specifications](https://www.cmegroup.com/markets/agriculture/grains/wheat.contractSpecs.html)
