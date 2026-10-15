# Lesson 4: Options: Paying for Uncertainty

*The four basic positions, the running example of a £105 call, the six things that set an option's price, why time value melts, and why volatility, the one input nobody can look up, is what option traders really buy and sell.*

---

## A lopsided bet

Here is the option this lesson and the next will follow from start to finish. A share trades at **£100**. For **£3**, you can buy a **call**: the right to buy the share at **£105** at any point in the next **three months**.

Most of the time, that right will expire worthless and the £3 will be gone. Occasionally it will pay five times what it cost. Somebody has to decide that £3 is the fair price for a bet shaped like that, and somebody has to be willing to sell it to you. By the end of this lesson you will know how they reach that number, why it changes every second the market is open, and why the most important thing it measures is not where the share is going but how much it might move.

> **The third big idea.** Futures and swaps lock in a price; options sell you a choice. A choice is worth more when the future is more uncertain, so an option's price is really a price for volatility. Think of an option as an insurance policy whose premium rises with the storm forecast.

---

## Four basic positions

Every option trade has a buyer and a seller, and there are two kinds of option, so there are exactly four basic positions. Their profit at expiry draws the famous hockey-stick shapes. The calls below are our £105 call at £3.00; the puts are a three-month **put** struck at **£95**, which on the same share costs **£2.13**.

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

- **Buy a call** if you expect a rise. Your loss is capped at the premium, and your gain grows with every pound above the breakeven.
- **Sell a call** to collect income. You keep the premium if the share stays below the strike, but your loss has no ceiling if the share soars.
- **Buy a put** to profit from, or insure against, a fall. Like car insurance, it costs a premium and pays out only if something bad happens.
- **Sell a put** to be paid for agreeing to buy the share at a lower price. It feels safe until the share collapses, because you must still buy at the strike.

Every line bends at the strike. The pattern to remember is that **option buyers have a floor under their losses, while option sellers have a ceiling on their gains and often no floor under their losses**. Sellers are not fools: most of the time they keep the premium. Lesson 5 shows why that steady income is so seductive, and so dangerous.

### In, at or out of the money

Traders describe an option by where the share is relative to the strike. A call is **in the money** when the share is above the strike, so exercising it now would be worth something; **at the money** when the two are about equal; and **out of the money** when the share is below the strike. For a put, it is the other way round. Our £105 call, with the share at £100, is out of the money: right now, the right to buy at £105 is worth nothing to anyone, because the share is cheaper in the market.

---

## The running example, worked through

Exchange-listed options trade in contracts; in the US one stock option contract covers **100 shares**, and we will use that size here. So the £3 premium costs **£300** a contract.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Profit at expiry of the running example, a three-month call struck at £105 bought for £3.00 per share, against the share price at expiry. At or below £105 the call expires worthless and the whole premium is lost, £300 for a 100-share contract. The position breaks even at £108. At £120 the call is worth £15, a profit of £12 per share or 400% of the premium." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The running example: a £105 call for £3</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Profit per share at expiry; one contract of 100 shares multiplies everything by 100</text>
<line x1="90" y1="255.9" x2="620" y2="255.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="259.8" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−£5</text>
<line x1="90" y1="225.2" x2="620" y2="225.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="229.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="90" y1="194.6" x2="620" y2="194.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="198.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£5</text>
<line x1="90" y1="164" x2="620" y2="164" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="168" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£10</text>
<line x1="90" y1="133.4" x2="620" y2="133.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="137.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£15</text>
<line x1="90" y1="102.8" x2="620" y2="102.8" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="106.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£20</text>
<line x1="90" y1="72.1" x2="620" y2="72.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="76.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£25</text>
<text x="90" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£90</text>
<text x="222.5" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£100</text>
<text x="288.8" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£105</text>
<text x="328.5" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£108</text>
<text x="355" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£110</text>
<text x="487.5" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£120</text>
<text x="620" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£130</text>
<text x="355" y="300" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">share price at expiry</text>
<polygon points="328.5,225.2 328.5,225.2 341.8,219.1 355,213 368.2,206.9 381.5,200.7 394.8,194.6 408,188.5 421.2,182.4 434.5,176.2 447.8,170.1 461,164 474.2,157.9 487.5,151.7 500.8,145.6 514,139.5 527.2,133.4 540.5,127.2 553.8,121.1 567,115 580.2,108.9 593.5,102.7 606.8,96.6 620,90.5 620,225.2" class="vf1" fill="#2a78d6" fill-opacity="0.12"/>
<polyline points="90,243.6 103.2,243.6 116.5,243.6 129.8,243.6 143,243.6 156.2,243.6 169.5,243.6 182.8,243.6 196,243.6 209.2,243.6 222.5,243.6 235.8,243.6 249,243.6 262.2,243.6 275.5,243.6 288.8,243.6 302,237.5 315.2,231.4 328.5,225.2 341.8,219.1 355,213 368.2,206.9 381.5,200.7 394.8,194.6 408,188.5 421.2,182.4 434.5,176.2 447.8,170.1 461,164 474.2,157.9 487.5,151.7 500.8,145.6 514,139.5 527.2,133.4 540.5,127.2 553.8,121.1 567,115 580.2,108.9 593.5,102.7 606.8,96.6 620,90.5" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="328.5" cy="225.2" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Breakeven: £108</title></circle>
<text x="336.5" y="241.2" font-size="11" fill="currentColor" font-weight="600">breakeven £108</text>
<circle cx="487.5" cy="151.8" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>At £120: profit £12 per share, 400% of the premium</title></circle>
<text x="479.5" y="141.8" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">£120: profit £12, or 400%</text>
<text x="116.5" y="234.6" font-size="11" fill="currentColor" opacity="0.85">lose the whole £3 (£300 a contract)</text>
<line x1="222.5" y1="262" x2="222.5" y2="66" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<text x="226.5" y="78.2" font-size="10" fill="currentColor" opacity="0.6">today</text>
</svg>

The **breakeven** at expiry is **£108**: the £105 strike plus the £3 premium. Below £105 the call expires worthless and the whole £300 is lost. Between £105 and £108, every pound the share rises claws back a pound of premium. Above £108 every pound is profit. If the share finishes at **£120**, the call is worth £15, a profit of **£12 a share**, or **400%** on the £3 premium. Owning the share itself through the same rise would have returned 20%.

That leverage is the attraction, and the catch is in the shape: to make 400% the share has to rise 20% in three months, and if it rises 5% you lose everything.

---

## What sets the price: six inputs

Lesson 3 showed that an option's price comes from what it costs to build a copy of it, and that only a handful of things go into that cost.

1. **The share price against the strike.** The further a call is in the money, the more it is worth.
2. **Time to expiry.** More time means more chances for a big move, so longer options cost more.
3. **Volatility.** The expected size of the share's price swings, and the input that matters most.
4. **Interest rates.** Higher rates make calls slightly dearer and puts slightly cheaper, because buying a call instead of the share leaves your cash earning interest in the meantime.
5. **Dividends.** Expected dividends lower call prices and raise put prices, because a share's price drops when it pays a dividend and the option holder does not receive it.
6. **The contract's terms.** Whether it is a call or a put, and whether it can be exercised at any time up to expiry (**American style**) or only at expiry (**European style**).

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Three line charts of the running example's price as one input changes and the others stay put. Against volatility: about £0.64 at 10%, £2.39 at 20%, £3.00 at 23.2% and £4.32 at 30%. Against time to expiry: worthless at expiry, £1.01 with one month left, £3.00 with three and £8.84 with twelve. Against interest rates: £2.65 at 0% and £3.38 at 8%. Volatility moves the price most." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">What moves the price of our £105 call</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Each panel changes one input; the dot is the running example at £3.00</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">Volatility</text>
<line x1="56" y1="236" x2="214" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="50" y="240" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="56" y1="182.7" x2="214" y2="182.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="50" y="186.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£4</text>
<line x1="56" y1="129.3" x2="214" y2="129.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="50" y="133.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£8</text>
<line x1="56" y1="76" x2="214" y2="76" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="50" y="80" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£12</text>
<text x="73.6" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">10%</text>
<text x="143.8" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">30%</text>
<text x="214" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">50%</text>
<polyline points="56,235.1 59.5,234.1 63,232.8 66.5,231.2 70,229.4 73.6,227.5 77.1,225.4 80.6,223.3 84.1,221 87.6,218.7 91.1,216.4 94.6,214 98.1,211.6 101.6,209.1 105.2,206.6 108.7,204.1 112.2,201.6 115.7,199.1 119.2,196.5 122.7,193.9 126.2,191.4 129.7,188.8 133.2,186.2 136.8,183.6 140.3,181 143.8,178.4 147.3,175.8 150.8,173.1 154.3,170.5 157.8,167.9 161.3,165.2 164.8,162.6 168.4,160 171.9,157.3 175.4,154.7 178.9,152 182.4,149.4 185.9,146.7 189.4,144.1 192.9,141.4 196.4,138.8 200,136.1 203.5,133.5 207,130.8 210.5,128.2 214,125.5" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="119.9" cy="196" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Running example: £3.00</title></circle>
<text x="243" y="66" font-size="12" fill="currentColor" font-weight="600">Months to expiry</text>
<line x1="279" y1="236" x2="437" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="273" y="240" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="279" y1="182.7" x2="437" y2="182.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="186.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£4</text>
<line x1="279" y1="129.3" x2="437" y2="129.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="133.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£8</text>
<line x1="279" y1="76" x2="437" y2="76" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="80" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£12</text>
<text x="279" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">0</text>
<text x="358" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">6</text>
<text x="437" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">12</text>
<polyline points="279,236 282.3,234.4 285.6,230.6 288.9,226.5 292.2,222.5 295.5,218.7 298.8,215 302,211.6 305.3,208.2 308.6,205 311.9,201.9 315.2,198.9 318.5,196 321.8,193.2 325.1,190.4 328.4,187.7 331.7,185.1 335,182.5 338.2,179.9 341.5,177.5 344.8,175 348.1,172.6 351.4,170.3 354.7,168 358,165.7 361.3,163.4 364.6,161.2 367.9,159 371.2,156.9 374.5,154.7 377.8,152.6 381,150.5 384.3,148.5 387.6,146.5 390.9,144.4 394.2,142.4 397.5,140.5 400.8,138.5 404.1,136.6 407.4,134.7 410.7,132.8 414,130.9 417.2,129 420.5,127.2 423.8,125.3 427.1,123.5 430.4,121.7 433.7,119.9 437,118.1" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="318.5" cy="196" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Running example: £3.00</title></circle>
<text x="466" y="66" font-size="12" fill="currentColor" font-weight="600">Interest rate</text>
<line x1="502" y1="236" x2="660" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="496" y="240" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="502" y1="182.7" x2="660" y2="182.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="496" y="186.7" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£4</text>
<line x1="502" y1="129.3" x2="660" y2="129.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="496" y="133.3" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£8</text>
<line x1="502" y1="76" x2="660" y2="76" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="496" y="80" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£12</text>
<text x="502" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">0%</text>
<text x="581" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">5%</text>
<text x="660" y="254" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">10%</text>
<polyline points="502,200.6 503.6,200.5 505.2,200.4 506.7,200.3 508.3,200.2 509.9,200.1 511.5,200 513.1,199.8 514.6,199.7 516.2,199.6 517.8,199.5 519.4,199.4 521,199.3 522.5,199.2 524.1,199 525.7,198.9 527.3,198.8 528.9,198.7 530.4,198.6 532,198.5 533.6,198.4 535.2,198.2 536.8,198.1 538.3,198 539.9,197.9 541.5,197.8 543.1,197.7 544.7,197.5 546.2,197.4 547.8,197.3 549.4,197.2 551,197.1 552.6,197 554.1,196.8 555.7,196.7 557.3,196.6 558.9,196.5 560.5,196.4 562,196.2 563.6,196.1 565.2,196 566.8,195.9 568.4,195.8 569.9,195.6 571.5,195.5 573.1,195.4 574.7,195.3 576.3,195.2 577.8,195 579.4,194.9 581,194.8 582.6,194.7 584.2,194.5 585.7,194.4 587.3,194.3 588.9,194.2 590.5,194 592.1,193.9 593.6,193.8 595.2,193.7 596.8,193.5 598.4,193.4 600,193.3 601.5,193.2 603.1,193 604.7,192.9 606.3,192.8 607.9,192.7 609.4,192.5 611,192.4 612.6,192.3 614.2,192.2 615.8,192 617.3,191.9 618.9,191.8 620.5,191.6 622.1,191.5 623.7,191.4 625.2,191.2 626.8,191.1 628.4,191 630,190.9 631.6,190.7 633.1,190.6 634.7,190.5 636.3,190.3 637.9,190.2 639.5,190.1 641,189.9 642.6,189.8 644.2,189.7 645.8,189.5 647.4,189.4 648.9,189.3 650.5,189.1 652.1,189 653.7,188.9 655.3,188.7 656.8,188.6 658.4,188.5 660,188.3" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="565.2" cy="196" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Running example: £3.00</title></circle>
<text x="20" y="280" font-size="10.5" fill="currentColor" opacity="0.6">The running example: share £100, strike £105, three months, 4% interest, 23.2% volatility.</text>
</svg>

Hold everything else fixed and change one input at a time, and you can see which ones matter. Interest rates barely move our call. Time matters a lot. Volatility matters most of all: at 20% volatility the same call would cost **£2.39**; at 30% it would cost **£4.32**.

Five of the six inputs can be looked up on a screen. Volatility cannot. So the market works backwards: take the price at which the option actually trades and ask what volatility would make the formula produce it. For our call, a £3.00 premium implies a volatility of about **23% a year** (23.2%, to be exact). This number is the **implied volatility**, and it is how professionals quote options. They will tell you the call is "trading at 23 vol", because the price in pounds depends on the share price, the strike and the date, while the volatility is the part that is genuinely being negotiated.

---

## Intrinsic value, time value and the melting ice cube

An option's price has two parts. **Intrinsic value** is what it would be worth if exercised right now. **Time value** is everything else: the price of the chance that things improve before expiry. Our call has no intrinsic value, since a right to buy at £105 is useless while the share is at £100, so its whole £3 is time value.

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

The shaded gap between the three-month curve and the hockey stick is time value. It is widest when the share is near the strike, where the outcome is most uncertain, and smallest far from it, where the outcome is nearly decided. As expiry approaches, every curve sags towards the hockey stick, and on the final day only intrinsic value is left.

That sagging is not steady. Take a three-month option struck at £100, with the share at £100 and staying there.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart of the value of a three-month option struck at £100, with the share at £100 throughout, as expiry approaches. It is worth £5.12 with 91 days left, £4.12 with 61 days left and £2.82 with 30 days left, then falls to nothing. It loses about £1.00 in the first month but £2.82 in the last: time decay accelerates as expiry nears." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The melting ice cube melts fastest at the end</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A three-month option struck at £100, share stuck at £100: value per share as the days pass. 23.2% volatility.</text>
<line x1="80" y1="260" x2="620" y2="260" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="264" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="80" y1="228.3" x2="620" y2="228.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="232.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£1</text>
<line x1="80" y1="196.7" x2="620" y2="196.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="200.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£2</text>
<line x1="80" y1="165" x2="620" y2="165" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="169" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£3</text>
<line x1="80" y1="133.3" x2="620" y2="133.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="137.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£4</text>
<line x1="80" y1="101.7" x2="620" y2="101.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="105.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£5</text>
<line x1="80" y1="70" x2="620" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£6</text>
<text x="80" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">91 days left</text>
<line x1="80" y1="66" x2="80" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="258" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">61 days left</text>
<line x1="258" y1="66" x2="258" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="442" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">30 days left</text>
<line x1="442" y1="66" x2="442" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="620" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">expiry</text>
<line x1="620" y1="66" x2="620" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<polygon points="80,260 80,98 85.9,98.9 91.9,99.9 97.8,100.9 103.7,101.9 109.7,102.9 115.6,103.9 121.5,104.9 127.5,105.9 133.4,106.9 139.3,107.9 145.3,109 151.2,110 157.1,111 163.1,112.1 169,113.1 174.9,114.2 180.9,115.2 186.8,116.3 192.7,117.4 198.7,118.4 204.6,119.5 210.5,120.6 216.5,121.7 222.4,122.8 228.4,123.9 234.3,125 240.2,126.2 246.2,127.3 252.1,128.4 258,129.6 264,130.7 269.9,131.9 275.8,133.1 281.8,134.3 287.7,135.5 293.6,136.7 299.6,137.9 305.5,139.1 311.4,140.3 317.4,141.6 323.3,142.8 329.2,144.1 335.2,145.3 341.1,146.6 347,147.9 353,149.2 358.9,150.6 364.8,151.9 370.8,153.2 376.7,154.6 382.6,156 388.6,157.4 394.5,158.8 400.4,160.2 406.4,161.6 412.3,163.1 418.2,164.6 424.2,166.1 430.1,167.6 436,169.1 442,170.7 447.9,172.3 453.8,173.9 459.8,175.5 465.7,177.2 471.6,178.9 477.6,180.6 483.5,182.4 489.5,184.2 495.4,186 501.3,187.9 507.3,189.8 513.2,191.7 519.1,193.7 525.1,195.8 531,197.9 536.9,200.1 542.9,202.4 548.8,204.7 554.7,207.1 560.7,209.7 566.6,212.4 572.5,215.2 578.5,218.1 584.4,221.3 590.3,224.8 596.3,228.6 602.2,232.9 608.1,237.9 614.1,244.5 620,260 620,260" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<polyline points="80,98 85.9,98.9 91.9,99.9 97.8,100.9 103.7,101.9 109.7,102.9 115.6,103.9 121.5,104.9 127.5,105.9 133.4,106.9 139.3,107.9 145.3,109 151.2,110 157.1,111 163.1,112.1 169,113.1 174.9,114.2 180.9,115.2 186.8,116.3 192.7,117.4 198.7,118.4 204.6,119.5 210.5,120.6 216.5,121.7 222.4,122.8 228.4,123.9 234.3,125 240.2,126.2 246.2,127.3 252.1,128.4 258,129.6 264,130.7 269.9,131.9 275.8,133.1 281.8,134.3 287.7,135.5 293.6,136.7 299.6,137.9 305.5,139.1 311.4,140.3 317.4,141.6 323.3,142.8 329.2,144.1 335.2,145.3 341.1,146.6 347,147.9 353,149.2 358.9,150.6 364.8,151.9 370.8,153.2 376.7,154.6 382.6,156 388.6,157.4 394.5,158.8 400.4,160.2 406.4,161.6 412.3,163.1 418.2,164.6 424.2,166.1 430.1,167.6 436,169.1 442,170.7 447.9,172.3 453.8,173.9 459.8,175.5 465.7,177.2 471.6,178.9 477.6,180.6 483.5,182.4 489.5,184.2 495.4,186 501.3,187.9 507.3,189.8 513.2,191.7 519.1,193.7 525.1,195.8 531,197.9 536.9,200.1 542.9,202.4 548.8,204.7 554.7,207.1 560.7,209.7 566.6,212.4 572.5,215.2 578.5,218.1 584.4,221.3 590.3,224.8 596.3,228.6 602.2,232.9 608.1,237.9 614.1,244.5 620,260" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="80" cy="98" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>91 days left: £5.12</title></circle>
<text x="86" y="89" font-size="11.5" fill="currentColor" font-weight="600">£5.12</text>
<circle cx="258" cy="129.6" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>61 days left: £4.12</title></circle>
<text x="264" y="120.6" font-size="11.5" fill="currentColor" font-weight="600">£4.12</text>
<circle cx="442" cy="170.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>30 days left: £2.82</title></circle>
<text x="448" y="161.7" font-size="11.5" fill="currentColor" font-weight="600">£2.82</text>
<text x="169" y="196.7" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">first month: −£1.00</text>
<text x="521" y="130.2" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600" opacity="0.85">last month: −£2.82</text>
<text x="20" y="304" font-size="10.5" fill="currentColor" opacity="0.6">Theta, the daily loss of value, is the option buyer's rent and the option seller's income.</text>
</svg>

It loses about **£1.00** of its **£5.12** in the first month, but **£2.82** in the last month. Time value melts like an ice cube in the sun, slowly at first and then in a rush. This decay is called **theta**. For an option buyer it is a daily rent paid for holding the right; for the seller it is a daily income. Our £105 call loses about **2.8p a share**, or **£2.84 a contract**, every day that nothing happens.

---

## Volatility: the price of uncertainty

### What 23% a year means

A volatility of 23.2% is a statement about the size of typical moves, scaled to a year. Moves add up with the **square root of time**, not with time itself, because good and bad days partly cancel out. So:

- Over **three months**, a quarter of a year, the typical move is 23.2% × √0.25 = **11.6%**.
- Over **one day**, with about 252 trading days a year, it is 23.2% ÷ √252 = about **1.5%**. Traders use the **rule of 16**: divide an annual volatility by 16, roughly √252, to get the typical daily move.

In the option model, about two outcomes in three land within one such typical move of where they started.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Bell-shaped curve of where the share might be in three months under the option model, with 23.2% annual volatility. One standard deviation over three months is 11.6%, so about two outcomes in three fall between roughly £89 and £113. The model gives about a 26% chance of finishing above the £108 breakeven of our call, and about 6% of finishing above £120." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Volatility is a range: 23.2% a year is about ±11.6% over three months</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Where the share might be at expiry, in the option model. Two outcomes in three fall in the shaded band.</text>
<polygon points="230.7,262 230.7,144.4 234.4,139.6 238.1,134.8 241.8,130.2 245.4,125.8 249.1,121.5 252.8,117.5 256.5,113.7 260.2,110.1 263.9,106.8 267.6,103.7 271.2,101 274.9,98.6 278.6,96.4 282.3,94.6 286,93.2 289.7,92 293.4,91.2 297.1,90.7 300.8,90.6 304.4,90.7 308.1,91.2 311.8,92 315.5,93.1 319.2,94.5 322.9,96.2 326.6,98.1 330.2,100.3 333.9,102.8 337.6,105.4 341.3,108.3 345,111.4 348.7,114.6 352.4,118 356.1,121.5 359.8,125.1 363.4,128.9 367.1,132.7 370.8,136.6 374.5,140.6 378.2,144.6 381.9,148.6 385.6,152.7 389.2,156.7 392.9,160.7 396.6,164.7 400.3,168.7 400.3,262" class="vf1" fill="#2a78d6" fill-opacity="0.12"/>
<polygon points="367.1,262 367.1,132.7 370.8,136.6 374.5,140.6 378.2,144.6 381.9,148.6 385.6,152.7 389.2,156.7 392.9,160.7 396.6,164.7 400.3,168.7 404,172.6 407.7,176.5 411.4,180.3 415.1,184 418.8,187.7 422.4,191.2 426.1,194.7 429.8,198.1 433.5,201.3 437.2,204.5 440.9,207.6 444.6,210.5 448.2,213.4 451.9,216.1 455.6,218.7 459.3,221.3 463,223.7 466.7,226 470.4,228.2 474.1,230.3 477.8,232.3 481.4,234.2 485.1,236 488.8,237.7 492.5,239.3 496.2,240.9 499.9,242.3 503.6,243.7 507.2,244.9 510.9,246.1 514.6,247.3 518.3,248.3 522,249.3 525.7,250.3 529.4,251.2 533.1,252 536.8,252.7 540.4,253.4 544.1,254.1 547.8,254.7 551.5,255.3 555.2,255.8 558.9,256.3 562.6,256.8 566.2,257.2 569.9,257.6 573.6,258 577.3,258.3 581,258.6 584.7,258.9 588.4,259.2 592.1,259.4 595.8,259.6 599.4,259.8 603.1,260 606.8,260.2 610.5,260.4 614.2,260.5 617.9,260.6 621.6,260.8 625.2,260.9 628.9,261 632.6,261.1 636.3,261.2 640,261.2 640,262" class="vf2" fill="#eb6834" fill-opacity="0.35"/>
<polyline points="50,261.8 53.7,261.7 57.4,261.6 61.1,261.5 64.8,261.4 68.4,261.3 72.1,261.1 75.8,260.9 79.5,260.6 83.2,260.4 86.9,260 90.6,259.6 94.2,259.2 97.9,258.6 101.6,258 105.3,257.3 109,256.5 112.7,255.6 116.4,254.6 120.1,253.5 123.8,252.2 127.4,250.8 131.1,249.2 134.8,247.5 138.5,245.6 142.2,243.5 145.9,241.2 149.6,238.8 153.2,236.1 156.9,233.3 160.6,230.2 164.3,227 168,223.5 171.7,219.9 175.4,216.1 179.1,212.1 182.8,207.9 186.4,203.5 190.1,199 193.8,194.4 197.5,189.6 201.2,184.8 204.9,179.8 208.6,174.8 212.2,169.7 215.9,164.6 219.6,159.5 223.3,154.4 227,149.4 230.7,144.4 234.4,139.6 238.1,134.8 241.8,130.2 245.4,125.8 249.1,121.5 252.8,117.5 256.5,113.7 260.2,110.1 263.9,106.8 267.6,103.7 271.2,101 274.9,98.6 278.6,96.4 282.3,94.6 286,93.2 289.7,92 293.4,91.2 297.1,90.7 300.8,90.6 304.4,90.7 308.1,91.2 311.8,92 315.5,93.1 319.2,94.5 322.9,96.2 326.6,98.1 330.2,100.3 333.9,102.8 337.6,105.4 341.3,108.3 345,111.4 348.7,114.6 352.4,118 356.1,121.5 359.8,125.1 363.4,128.9 367.1,132.7 370.8,136.6 374.5,140.6 378.2,144.6 381.9,148.6 385.6,152.7 389.2,156.7 392.9,160.7 396.6,164.7 400.3,168.7 404,172.6 407.7,176.5 411.4,180.3 415.1,184 418.8,187.7 422.4,191.2 426.1,194.7 429.8,198.1 433.5,201.3 437.2,204.5 440.9,207.6 444.6,210.5 448.2,213.4 451.9,216.1 455.6,218.7 459.3,221.3 463,223.7 466.7,226 470.4,228.2 474.1,230.3 477.8,232.3 481.4,234.2 485.1,236 488.8,237.7 492.5,239.3 496.2,240.9 499.9,242.3 503.6,243.7 507.2,244.9 510.9,246.1 514.6,247.3 518.3,248.3 522,249.3 525.7,250.3 529.4,251.2 533.1,252 536.8,252.7 540.4,253.4 544.1,254.1 547.8,254.7 551.5,255.3 555.2,255.8 558.9,256.3 562.6,256.8 566.2,257.2 569.9,257.6 573.6,258 577.3,258.3 581,258.6 584.7,258.9 588.4,259.2 592.1,259.4 595.8,259.6 599.4,259.8 603.1,260 606.8,260.2 610.5,260.4 614.2,260.5 617.9,260.6 621.6,260.8 625.2,260.9 628.9,261 632.6,261.1 636.3,261.2 640,261.2" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="50" y1="262" x2="640" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="86.9" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£70</text>
<text x="160.6" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£80</text>
<text x="234.4" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£90</text>
<text x="308.1" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£100</text>
<text x="381.9" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£110</text>
<text x="455.6" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£120</text>
<text x="529.4" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£130</text>
<text x="603.1" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£140</text>
<text x="345" y="300" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">share price in three months</text>
<line x1="229.5" y1="262" x2="229.5" y2="146" stroke="currentColor" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="3 3"/>
<line x1="401.5" y1="262" x2="401.5" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="3 3"/>
<text x="308.1" y="190" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">two in three: £89 to £113</text>
<line x1="345" y1="66" x2="345" y2="262" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="4 4"/>
<text x="349" y="78" font-size="10.5" fill="currentColor" opacity="0.75">strike £105</text>
<text x="404" y="138.6" font-size="11.5" fill="currentColor" font-weight="600">above £108: about 26%</text>
<text x="404" y="153.6" font-size="10.5" fill="currentColor" opacity="0.8">where the call makes money</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Probabilities are the model's risk-neutral ones (Lesson 3), not a forecast of where the share will go.</text>
</svg>

For our share, that means roughly **£89 to £113** in three months. The call needs the share above £108 to make money, which the model puts at about a **26%** chance. Note the careful wording: these are the model's **risk-neutral** odds from Lesson 3, a by-product of the price, not a forecast. The share's real-world chances depend on its expected return, which the option price deliberately ignores.

### Implied against realised

Implied volatility is the market's forecast, read from option prices. **Realised volatility** is what actually happens, measured afterwards from the share's daily moves. For stock indices, implied volatility usually exceeds what is later realised, because buyers pay extra for protection, just as home insurance premiums exceed the average cost of claims.

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

Over the past ten years, the expected volatility priced into S&P 500 options at the start of each month exceeded the volatility actually delivered over the following month **84% of the time**, by almost four points on average. That gap is the option seller's insurance margin. And like any insurer, option sellers occasionally face a catastrophe. In March 2020 the market had priced about 33% volatility and delivered about 95%; in April 2025 it priced 22% and delivered 49%. Lesson 5 shows what those months do to a strategy built on selling protection.

### The fear gauge

The **VIX**, calculated by Cboe from the prices of S&P 500 options, measures the market's expected volatility over the next 30 days. It is quoted as an annual percentage, so a VIX of 16 means the market expects daily moves of about 1%.

<svg viewBox="0 0 680 380" width="100%" role="img" aria-label="Line chart of the VIX index of expected S&amp;P 500 volatility, daily closes from 1990 to October 2026. It usually sits between about 10 and 30, with a median of 17.6, and spikes in crises: a record close of 82.69 on 16 March 2020, 80.86 on 20 November 2008, 52.33 on 8 April 2025 during the tariff turmoil, and 37.32 on 5 February 2018, when it more than doubled in a day. Its latest close, on 2026-10-13, was 15.27." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The fear gauge: calm for years, then a spike</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">VIX, the market's 30-day expected volatility of the S&amp;P 500 (% a year), daily closes, 1990 to 2026</text>
<line x1="60" y1="330" x2="650" y2="330" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="52" y="334" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="60" y1="280.7" x2="650" y2="280.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="284.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">20</text>
<line x1="60" y1="231.3" x2="650" y2="231.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="235.3" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">40</text>
<line x1="60" y1="182" x2="650" y2="182" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="186" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">60</text>
<line x1="60" y1="132.7" x2="650" y2="132.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="52" y="136.6" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">80</text>
<line x1="60" y1="286.7" x2="650" y2="286.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="4 4"/>
<text x="117.4" y="280.7" font-size="10" fill="currentColor" opacity="0.75">median 18</text>
<polyline points="60.2,280.4 60.5,269.2 60.6,265 60.9,264.1 61.3,262.8 61.5,269.1 61.8,269.9 62.2,271.1 62.4,271.9 62.8,275.7 63.2,278.1 63.6,273.9 63.8,278.2 64,273.7 64.3,275 64.8,272.5 64.9,270.4 65.3,281.9 65.8,281.1 65.9,280.3 66.2,286 66.5,283.8 66.8,283.2 67.2,287.1 67.6,282.2 67.7,287.9 68.1,287.4 68.5,287.8 68.7,283.4 68.9,271.6 69.4,259.1 69.5,241.4 70,262.1 70.3,240 70.6,256.2 70.8,255.5 71.2,254.6 71.5,255.9 71.6,254.6 72,260.8 72.4,246.2 72.6,252 73.1,254.2 73.2,252.2 73.6,253.9 73.8,266.9 74.2,278 74.5,271 74.8,274.2 75.2,271.2 75.3,268.7 75.8,268.2 76,261.1 76.3,247.9 76.5,240.7 76.9,268.6 77.2,272.8 77.5,271.8 77.7,274.4 78.1,275.1 78.3,273.6 78.9,278.1 79,278.5 79.5,288.4 79.8,288.4 80.1,285.6 80.3,280.4 80.5,289.3 81,287.4 81.2,284.9 81.5,285.8 81.9,284.7 82.1,287.8 82.5,290.5 82.9,288.1 83.1,286.3 83.4,287 83.8,281.8 84,282 84.2,280 84.5,286.1 84.8,288.3 85.1,291.3 85.6,290.6 85.9,290.5 86,277.7 86.4,291.9 86.8,287.3 87,285.1 87.2,286 87.5,289.6 88,288 88.2,284.2 88.5,288.8 88.8,288.9 89.2,291.5 89.4,289.3 89.8,277.8 90.2,277.7 90.3,275.9 90.7,280.2 91,279.3 91.3,285.3 91.5,289 91.9,282.4 92.2,282.6 92.4,285.6 92.8,285.8 93.1,286.4 93.4,283.7 93.6,284.2 94,285.1 94.2,287.7 94.8,281.3 95,281.2 95.2,284.5 95.5,288.7 95.9,287.9 96.2,280.3 96.4,288.1 96.8,289.2 97.2,289 97.3,288.3 97.7,291.3 97.9,293.9 98.3,293.2 98.7,293.9 98.9,289 99.3,285.1 99.5,288.9 99.9,295.8 100.1,291 100.4,295.4 100.8,296.5 101,295.7 101.4,294.9 101.7,292.2 102.1,293 102.2,290.1 102.5,296.5 102.8,296.3 103.2,293.7 103.6,293.5 103.9,286.1 104.1,278.2 104.3,281.9 104.6,287.3 104.9,289.7 105.3,287.3 105.7,294 105.9,293 106.1,296.9 106.4,297.9 106.9,298.6 107.1,298.8 107.4,301 107.8,298.9 108.1,293.7 108.3,298.3 108.7,300 109.1,299.4 109.3,298.2 109.5,296.7 109.9,290.8 110.1,292.9 110.7,295.3 110.8,290 111.1,293.6 111.4,296.3 111.9,294.2 112,294.9 112.3,300.6 112.8,297 112.9,292.4 113.4,297.4 113.7,293.6 114,294.2 114.2,295.2 114.5,296.3 114.8,293.6 115,299.6 115.4,299.8 115.8,301.6 116,295.8 116.3,302.8 116.7,300.5 117.1,301.1 117.4,299.6 117.5,299.4 117.8,300.4 118.1,300 118.5,300.7 118.8,297.3 119.2,297 119.3,287.3 119.7,298 120.1,297.6 120.3,299.4 120.6,301.4 120.9,300.4 121.3,293.1 121.4,294.7 121.8,291.6 122,290.8 122.3,295.2 122.7,298.3 123,302.5 123.3,303.5 123.8,301.2 123.9,299 124.3,300.2 124.5,300.7 124.8,301.4 125.2,292.4 125.5,294.3 125.9,293.7 126.1,290.6 126.5,289.6 126.8,289.2 127,289 127.3,294.6 127.8,279.6 127.9,271.1 128.3,288 128.5,287.5 128.9,294.2 129.3,292.8 129.4,290.1 129.8,293.8 130.1,296.7 130.4,297.9 130.7,297.1 131.1,299.6 131.4,288.8 131.6,291.7 131.9,293.2 132.2,295.9 132.6,301.1 132.9,300.3 133.3,299.6 133.4,299.1 133.9,298.4 134,298.9 134.4,300.5 134.8,297.6 134.9,295.4 135.4,294.2 135.5,294.1 135.9,288.9 136.3,293.2 136.6,290.6 136.7,288.1 137.2,288.7 137.3,287.2 137.6,288.9 138,284.6 138.3,288.5 138.7,285.2 138.9,291.9 139.2,297.9 139.7,297.4 139.8,294.9 140.1,297.1 140.6,300 140.7,298.5 141,299.8 141.4,301.3 141.8,301.1 141.9,300.3 142.2,299.1 142.6,294.9 143,299.4 143.3,301.6 143.7,297 143.8,296.7 144.1,298.5 144.5,297.7 144.8,299.4 145.2,298.8 145.4,297.7 145.8,297.6 146.1,299.9 146.4,298 146.5,296.8 146.9,300.6 147.3,301.8 147.5,299.5 147.9,300.2 148.2,299 148.5,296.7 148.8,297.5 149.1,296 149.3,297.7 149.6,297.3 149.9,296.9 150.3,298.8 150.6,300.8 151,301.4 151.1,298.7 151.4,297.4 151.9,291.2 152.1,293.1 152.3,293.9 152.8,291.5 153,294.8 153.3,297.8 153.6,297 153.8,299.5 154.2,299.3 154.6,298.6 155,301.8 155.1,294.1 155.6,299.1 155.8,296 156.1,289.5 156.3,293 156.6,296.6 157,297.4 157.4,293.9 157.6,290.2 157.8,288.6 158.2,288 158.6,278.9 158.8,282.1 159.2,284 159.6,283.4 159.7,285.8 160.1,280.1 160.4,287.9 160.6,292.1 161,284.1 161.3,288.1 161.6,291.2 162,290.1 162.2,287.7 162.4,288.4 162.9,284 163.1,286.7 163.3,290.8 163.8,290.3 164.1,286.1 164.3,280.4 164.6,276.8 164.9,279.4 165.2,287.2 165.5,289.5 165.8,292.3 166.2,288 166.5,279.4 166.7,289.6 167.1,290.5 167.3,289.4 167.6,287.9 168,289.9 168.2,291 168.7,287.4 168.9,284.4 169.1,285.5 169.4,292.1 169.8,290.7 170.2,287.7 170.5,283.6 170.8,278 170.9,275.8 171.3,281.9 171.7,277.9 172,278.4 172.1,281.1 172.6,282.3 172.8,278.8 173.1,278.1 173.3,279.1 173.8,277.2 174.1,278 174.4,278.5 174.8,281.1 175.1,276.4 175.4,279.4 175.6,275.4 176,281.3 176.2,282.9 176.7,277.8 176.8,277.4 177.2,277.4 177.6,276.8 177.7,277 178.1,282.2 178.3,278.6 178.6,282 179,279.6 179.4,276.2 179.5,276.9 179.9,279.7 180.3,275 180.5,272 180.9,275 181.2,274.6 181.4,269.5 181.8,269 182.1,268.9 182.4,267.7 182.7,265.9 182.9,266.5 183.3,273.4 183.5,273.5 183.9,275 184.3,276.5 184.6,272.8 184.8,235.8 185.2,240.5 185.4,236.7 185.6,252.1 185.9,256.5 186.2,265.8 186.7,261.1 187,258 187.2,255.3 187.5,263.9 187.9,259.2 188,260.9 188.5,272.5 188.7,270.9 188.9,277.3 189.2,276.8 189.6,278.8 189.9,282.3 190.4,278.4 190.6,280.1 191.1,283.9 191.4,272.1 191.5,269.2 191.8,271.6 192.1,273.8 192.6,275.8 192.7,265.6 193.1,272.3 193.3,278.1 193.6,276.5 194,274.3 194.3,273.6 194.6,271.9 194.8,266 195.1,275.9 195.5,281.4 195.8,284 196.1,285 196.5,273.2 196.7,267.7 197,253.4 197.4,245.3 197.7,248.3 198,232.3 198.2,220.8 198.6,218.3 198.9,233.2 199.1,234.8 199.5,222.7 199.8,217.2 200.1,230.8 200.4,248.1 200.7,248.7 200.9,261.5 201.3,257.8 201.5,258.7 201.9,272.6 202.3,259.2 202.6,261.6 202.8,252.8 203.1,271.1 203.5,269.8 203.6,265.4 204.1,248.6 204.4,251.2 204.6,253.2 205,256.8 205.2,252.6 205.5,254.4 205.9,260.9 206.2,257.9 206.5,268.3 206.9,266.9 207.1,262.7 207.4,271.9 207.8,273.7 208.1,268.5 208.3,264.8 208.8,268.2 209,262.3 209.4,263.7 209.5,262.7 209.9,258.7 210.2,264.3 210.6,266.1 210.7,264.6 211.2,273.1 211.3,274.2 211.7,278.9 212,280.8 212.4,272.5 212.6,268.4 212.9,262.4 213.2,259.8 213.6,269.8 213.8,274.4 214.1,269.2 214.4,271.2 214.8,267.7 215.1,261.3 215.4,264.7 215.6,268.9 216.1,259.1 216.2,260.5 216.6,270.2 216.9,272.9 217.2,274 217.4,273.9 217.9,274.9 218.1,270.4 218.5,277 218.7,273.1 219,271.3 219.4,268.9 219.6,263.4 219.9,273.7 220.3,276.4 220.6,265.5 220.8,268.5 221.2,269.8 221.5,265.9 221.7,266.2 222,269.1 222.4,270 222.7,269.8 223.1,272.5 223.4,267.2 223.6,259.9 224,247.4 224.1,258.6 224.5,262.5 224.9,252 225.2,256.3 225.6,267.2 225.7,265.9 226.1,271.7 226.3,273.1 226.6,274.9 227.1,274.9 227.2,274.6 227.6,277.8 227.8,279.9 228.2,281.3 228.6,278.6 228.7,278.8 229.2,282.7 229.4,285.6 229.7,286.9 230,286.4 230.3,278.7 230.6,284.1 231,278.8 231.2,276 231.6,274 231.9,254.7 232.2,259.2 232.5,259.4 232.7,267.2 233.1,259.6 233.3,258.3 233.7,261.6 234,256.9 234.2,261.5 234.7,264.5 234.9,251.7 235.2,259.1 235.4,256 235.7,256.4 236.1,267.6 236.3,272.6 236.6,274.2 236.9,275.3 237.4,275.4 237.7,262.9 237.9,260.1 238.2,263.1 238.5,255.2 239,249 239.3,258 239.5,244.4 239.7,251.3 240,265.1 240.4,259.7 240.8,266.4 241,268.7 241.3,270.2 241.7,275.5 242,273.9 242.2,277.3 242.6,273 242.8,272.8 243.1,277.7 243.6,276.6 243.8,270.8 244.1,271.8 244.4,267.7 244.6,274 245,274.9 245.4,271.2 245.6,269.8 246,267.3 246.3,253.6 246.4,251.5 246.9,222.1 247,236.9 247.5,247.6 247.8,243 248,242.9 248.3,250.4 248.7,247.2 248.9,254.8 249.2,257.6 249.5,269.7 249.9,266.1 250.1,266.4 250.5,266.1 250.7,270.2 251,274.2 251.3,271.3 251.8,274.3 251.9,271.8 252.3,271.8 252.6,269.9 252.9,265.6 253.3,274.8 253.5,269.7 253.7,276.1 254.1,279.4 254.4,281.1 254.8,283.3 255.1,284.4 255.4,280.2 255.8,279.9 255.9,281.1 256.4,275.4 256.6,270.7 256.9,274.4 257.2,278.9 257.5,280.5 257.9,279.2 258.2,270.4 258.6,266 258.8,262.2 259.1,259.9 259.4,257.4 259.7,245.9 260.1,235.8 260.3,219.2 260.7,228.2 260.8,218.8 261.1,238.6 261.5,257 261.9,246.9 262.1,231.4 262.5,237.5 262.8,229.7 263,230.1 263.2,232.1 263.6,224.8 263.9,241.1 264.2,245.9 264.5,250.4 264.9,252.5 265.1,252.8 265.4,261.8 265.9,262.2 266.1,255.8 266.3,254.1 266.8,255.5 267.1,257.1 267.2,256.9 267.6,267 268,266.6 268.3,252.3 268.4,244.4 268.9,246.1 269.1,245.3 269.4,252.8 269.6,251.1 270.1,251.5 270.4,247.1 270.7,251.7 271,255 271.3,258.1 271.5,259.8 271.9,272.3 272.2,275.9 272.6,276.7 272.9,277.6 273.2,280.7 273.4,277.5 273.8,279.6 274.2,277.6 274.3,275.4 274.6,280.1 275,278.7 275.2,281.9 275.5,280.5 276,280.1 276.1,281.2 276.6,278.8 276.8,274.1 277,281.3 277.5,284.2 277.6,281.8 278,282 278.3,280.6 278.5,282.4 279,275.1 279.2,274 279.5,281.9 279.9,286.4 280.3,286.3 280.4,285.5 280.8,288.2 281,286.5 281.4,281.9 281.6,287 282.1,287.8 282.3,285.9 282.5,287.5 283,287 283.2,284.8 283.4,286.9 283.8,285.5 284.1,292.5 284.5,287.7 284.7,285.9 284.9,289.6 285.4,290.4 285.5,289.8 285.9,293.3 286.3,279 286.5,277.9 286.8,276.8 287.2,288.7 287.5,289.9 287.8,287.4 288.1,288.9 288.5,287.6 288.8,285.3 289,281.2 289.3,280.8 289.6,285.4 290,288 290.1,292 290.5,290.4 290.8,292.4 291.1,290.4 291.4,289.9 291.7,293.1 292.2,289.3 292.3,287.3 292.8,282.3 293,282.9 293.2,286.7 293.5,290.8 293.8,291.9 294.1,295.3 294.5,293.9 294.8,293.5 295,293.9 295.5,292.9 295.8,289.5 296.1,292.3 296.3,289.1 296.5,289.9 296.8,296 297.3,296.7 297.4,298 297.8,297.2 298.1,296.3 298.4,298.6 298.7,300.8 299.2,297.2 299.4,295.2 299.6,297.4 300.1,294.6 300.2,293.9 300.5,298.4 300.9,300.4 301.2,301 301.4,297.6 301.9,298.1 302.3,298.4 302.5,296.7 302.8,294.8 303.1,294.3 303.3,295.2 303.8,286.2 304,288.3 304.4,288.4 304.5,292.7 305,289.7 305.2,291.3 305.5,298.1 305.8,297.2 306.1,298.7 306.4,300.9 306.8,300 307,299.1 307.4,299.2 307.6,302.2 308,302.9 308.4,301.5 308.6,299.1 308.8,297.4 309.1,296.7 309.5,295 309.8,296.3 310,298.1 310.4,298.2 310.7,296 310.9,297.8 311.4,293.1 311.7,289.4 312,290.2 312.3,290.5 312.5,292.2 312.7,297.7 313.1,299.8 313.4,303 313.7,300.3 314.1,299.9 314.3,301.7 314.6,301.9 315.1,300.2 315.3,302 315.7,302.3 316,294.1 316.1,295.6 316.5,297.4 316.7,296.5 317,297.1 317.3,299.4 317.6,299.6 318,298.6 318.5,300.1 318.6,300.9 319,301.4 319.4,299.8 319.6,297.9 319.8,299 320.3,300.8 320.5,299.1 320.9,295 321.2,287.6 321.4,285 321.7,284 322.1,284.7 322.3,271.3 322.6,286 322.9,289.5 323.3,295.1 323.7,285.5 323.8,284 324.1,293 324.4,292.9 324.7,292.4 325,294.8 325.4,299.4 325.7,299.6 326,295.8 326.2,298 326.7,298.9 326.8,300.1 327.1,299 327.4,301.2 327.8,301.1 328.1,302.7 328.4,301.6 328.6,302.5 328.9,303.2 329.4,303.5 329.6,299.7 330,298.7 330.2,303.6 330.7,302 331,301.5 331.3,300.1 331.4,300.4 331.8,303.2 332.1,302.3 332.3,301.8 332.8,302.6 332.9,301.4 333.4,303.9 333.8,284.1 333.9,281.6 334.3,285.3 334.5,294 335,292.7 335.1,294.2 335.5,296.7 335.9,299.1 336.1,297.4 336.3,294.9 336.8,296.5 337,295.4 337.4,295.3 337.6,296.6 338,287.9 338.2,288.9 338.6,291.1 338.8,283.4 339.2,291.8 339.4,286.7 339.9,288.2 340.2,270.4 340.5,267.9 340.8,260.2 341,254 341.2,265.1 341.6,265.1 342,265.3 342.1,262.5 342.4,264.7 342.7,282.2 343.1,283.6 343.5,283.4 343.8,273.4 344,276.6 344.4,272.7 344.7,259.7 344.8,253.3 345.2,263.8 345.5,258.7 345.8,271.3 346.1,271.8 346.4,269.5 346.9,278.8 347.2,270.9 347.3,267.3 347.7,259.8 347.9,253.5 348.2,261.5 348.6,258.5 348.8,261.9 349.1,266.9 349.6,264.5 349.9,262 350.3,253.1 350.4,250.5 350.8,265.7 351,266.8 351.5,272.1 351.6,271.2 351.9,278.5 352.3,278.7 352.6,281.3 352.9,285.6 353.3,281.8 353.5,281.6 353.9,271.9 354.1,270.5 354.5,273.6 354.8,271 355,266.1 355.4,262.2 355.6,259.6 356,272.2 356.2,270.2 356.5,272.1 356.9,276.8 357.1,277.5 357.4,278.3 357.8,270.7 358.1,266.7 358.4,240.7 358.6,241.9 358.9,214.8 359.4,157.5 359.7,156.5 360,134.8 360.1,132.5 360.5,172.9 360.8,166.1 361.1,130.5 361.3,170.4 361.6,161 362,184.7 362.3,190 362.6,219 362.9,221.7 363.2,223 363.6,204.2 363.8,190.3 364.1,217.3 364.3,217.7 364.7,214.9 365.1,208.4 365.3,200.2 365.7,200.1 366,207.5 366.5,216.8 366.6,223.4 366.9,217.7 367.2,229 367.5,236.7 367.8,233.4 368.1,235.5 368.4,244.8 368.8,247 369.2,249.5 369.4,250.2 369.7,253.5 369.9,256.6 370.3,249.4 370.5,253.1 371,261.1 371.3,252.8 371.5,265.1 371.8,269.8 372.3,266.1 372.5,266.7 372.7,265.9 373,261.2 373.3,268 373.6,258.1 373.9,266.8 374.3,271 374.7,266.8 375,259.3 375.1,263.8 375.4,273.2 375.9,275.1 376.2,254.3 376.3,256.5 376.7,270.2 376.9,273.5 377.4,268.7 377.5,269.5 377.9,271.6 378.3,274.5 378.5,279.5 378.9,276.5 379,280.6 379.4,285 379.8,262.6 380,267.3 380.4,265.6 380.6,264.6 380.9,275.1 381.2,277.3 381.6,282.5 382,284.2 382.2,285.6 382.6,284.6 382.8,286.6 383.1,288 383.6,284.7 383.7,287.2 384,273.7 384.5,229 384.8,252.9 385.1,217.1 385.2,235.5 385.6,242.3 385.8,239.8 386.1,259.5 386.6,256.6 386.8,244.8 387.1,256.9 387.5,265.2 387.7,265.9 388.1,270.2 388.3,274.2 388.7,265.3 389,264.8 389.2,262.3 389.5,262.9 389.8,271.3 390.2,275.5 390.5,271.1 390.8,271.5 391,272 391.4,281 391.7,279.1 392.1,277.7 392.2,276.2 392.7,279.2 392.9,274.3 393.3,275.2 393.5,271.9 393.8,285.6 394.1,285.7 394.4,289.3 394.8,286.2 395,286.6 395.3,286.7 395.7,284.4 396,280.6 396.2,281.8 396.5,289.8 396.8,288.8 397.2,275.4 397.5,278.2 397.9,276 398.2,257.5 398.4,279.2 398.7,282 399.2,285.9 399.3,287.8 399.6,288.2 399.9,291.1 400.4,284.6 400.5,287.7 400.8,285 401.1,284.9 401.5,284.9 401.9,283.5 402.2,273.9 402.5,278 402.6,279.3 403.1,289.7 403.4,278.7 403.6,278.3 404.1,267.7 404.3,251.1 404.5,211.6 405,223.8 405.1,225.3 405.5,246.3 405.8,235 406,234.8 406.4,228 406.8,224 406.9,217.9 407.2,248.6 407.7,244.2 407.9,250.5 408.2,244.2 408.5,240.8 408.9,244.9 409.2,245 409.3,250.7 409.8,254.5 410,265.8 410.3,268.5 410.7,272 410.9,273.3 411.2,278 411.5,275.2 411.8,283.4 412.1,282 412.5,278.7 412.8,277.9 413,285.1 413.4,284.5 413.7,278.5 413.9,291.4 414.3,291.6 414.6,291.5 415,288.8 415.2,279.7 415.5,281.8 415.8,283.2 416.3,282.7 416.5,280.5 416.9,268.1 417,274.5 417.5,264.2 417.6,265.6 418,270.1 418.3,280.5 418.5,279.7 419,286.8 419.2,283.8 419.4,287.8 419.8,279.5 420.1,283.2 420.4,290.6 420.7,293.4 421.1,290.6 421.4,286 421.6,285.6 421.9,289.5 422.1,294 422.5,288.5 422.8,289.7 423.1,289.6 423.6,287.9 423.7,283.6 424.1,284.1 424.4,282.9 424.7,285.6 425,292.2 425.2,290.7 425.6,287.8 426,288.1 426.3,286 426.6,274 426.7,285.6 427.1,295.9 427.5,296.5 427.8,298.2 428,294.7 428.2,293.8 428.6,298 429,292.5 429.1,283.2 429.5,295.4 429.9,299.7 430.2,294.5 430.5,296.1 430.8,294.9 431,297.5 431.5,286.7 431.7,294.5 432.1,294.3 432.4,297.6 432.7,297.8 433,295.3 433.4,289.8 433.6,286.8 433.9,284.1 434.2,279.5 434.4,280.4 434.8,289.4 435,293.5 435.4,294.4 435.7,297.5 436,296.8 436.4,296.9 436.7,293.7 436.9,290.7 437.3,288 437.5,289 437.7,291.4 438.1,294.2 438.5,291.9 438.8,286.4 439,279.8 439.3,284 439.7,296.9 440,296.1 440.3,295.7 440.5,298.4 440.9,296.9 441.3,296.2 441.5,292.8 441.9,291.1 442.1,290 442.3,297.8 442.7,294.9 442.9,296.6 443.2,297.2 443.7,285.3 444,284.6 444.1,277.1 444.4,292.4 444.8,291.8 445.1,294.6 445.4,290.5 445.9,286 446.1,291.4 446.4,292.8 446.8,295.6 447.1,288 447.3,290.3 447.7,295.3 447.9,295.5 448.2,296 448.6,297.5 448.8,298 449.2,301.2 449.5,300.2 449.8,299 450,298.8 450.4,300.1 450.6,301.5 451.1,298.9 451.4,294.1 451.5,298.4 452,288 452.2,288.4 452.4,294.9 452.7,299.6 453.2,300.3 453.5,298.8 453.7,296.7 453.9,295.2 454.4,291.4 454.7,288.8 455.1,277.6 455.3,265.2 455.5,284.2 455.8,290.4 456.1,293.3 456.5,296 456.7,295.5 457.2,297.1 457.3,294.8 457.8,278 458,271.9 458.2,292.4 458.6,282.6 458.9,277.9 459.3,274.8 459.5,280.9 459.9,278.3 460,282.1 460.3,284.2 460.7,291 460.9,294.1 461.5,292.5 461.7,288.4 462,291.4 462.4,291 462.6,292.3 462.9,293.5 463.2,295.6 463.5,297.2 463.9,294.1 464.2,292.6 464.4,295.8 464.8,298.2 465.1,295.3 465.4,293.7 465.6,292.3 465.9,292 466.4,295.4 466.5,283.5 467,280.7 467.1,295.7 467.6,296.1 467.8,291.5 468.2,296 468.4,296.2 468.8,260.9 469,229.5 469.3,252.5 469.6,265.3 469.8,270.2 470.3,271.7 470.5,261.8 470.8,281.8 471.2,285.5 471.5,288.8 471.7,291.9 472.1,291.7 472.5,280.5 472.6,283.5 472.9,290.7 473.4,285.3 473.7,269.8 473.8,273.9 474.1,283.9 474.6,285.1 474.9,263.4 475.2,263.4 475.4,261.9 475.6,270.4 476.1,272.3 476.4,260.6 476.6,270.5 476.9,278.2 477.1,279.3 477.6,283.9 477.8,288.3 478.2,293.1 478.4,292.4 478.8,290.1 479,289.9 479.5,295.6 479.8,291.3 480,290.4 480.4,292.9 480.7,289.7 480.9,291 481.2,295 481.6,288 481.8,278.3 482.2,266.5 482.4,271.2 482.7,291.6 483,296.6 483.4,298.6 483.7,297.8 483.9,297 484.3,300.3 484.6,298.8 485,296.3 485.2,296.7 485.6,286.8 485.8,285.3 486.1,290.7 486.3,294.2 486.7,296.4 487.1,288.8 487.3,290 487.7,290.1 488,274.5 488.2,283.8 488.5,294.3 488.8,299.3 489.3,295.2 489.5,298.8 489.8,297.5 490,301.1 490.5,295.4 490.6,298.3 490.9,301.5 491.3,298.5 491.5,301 491.9,300.4 492.2,301.8 492.5,300.5 492.8,301 493,298.1 493.5,299.7 493.8,299.7 494.2,297.6 494.3,299.2 494.7,298.2 495.1,290.6 495.3,293.2 495.6,303.2 495.9,303.7 496.3,303.9 496.6,291.5 496.8,303 497.2,304.3 497.5,303.6 497.7,301.7 498,303.2 498.4,301.8 498.7,299.1 498.9,302.6 499.3,305.6 499.7,304.6 499.9,304.2 500.2,290.4 500.5,291.6 500.7,297.5 501.1,301.1 501.3,299.8 501.6,303.5 502,304.9 502.2,304.8 502.7,306.2 502.8,304.5 503.2,304.6 503.6,302.1 503.8,304.1 504.2,302.2 504.4,297.6 504.7,303.7 505.2,301.8 505.3,301.2 505.7,304.1 505.9,305.3 506.4,302.8 506.5,305.9 507,304.9 507.2,299.9 507.5,301.4 507.9,287.3 508,237.9 508.3,266.8 508.6,279.2 509.1,274.6 509.3,283.8 509.7,287.5 510.1,268.7 510.3,273.6 510.5,271.7 510.8,276.3 511.3,288.4 511.5,285.6 511.8,290.6 512.1,293.6 512.4,293.9 512.7,297.4 513,288 513.3,298.6 513.7,298.1 514,293.9 514.3,285.8 514.5,290.2 514.9,296.4 515.2,298.3 515.6,297.9 515.7,294.8 516.2,297.5 516.3,293.5 516.7,298.3 517.1,296.6 517.4,293.3 517.5,295.1 517.8,296.3 518.2,298.2 518.6,293.4 518.9,268.4 519.1,277.5 519.5,267.8 519.7,269.1 519.9,280.8 520.3,277.6 520.6,274.5 520.9,283.1 521.4,272.7 521.5,274.2 522,255.7 522.1,241 522.5,267.2 522.7,277.2 523,283 523.3,278.7 523.7,282.8 524,289.6 524.3,290 524.5,293.3 524.9,292.6 525.4,289.1 525.5,294.7 526,289.3 526.1,289.7 526.5,296.1 526.8,294.8 527.1,298.9 527.5,297.3 527.7,293.5 528.1,282.1 528.3,279.3 528.7,288.3 529.1,283.8 529.2,283.5 529.5,290.6 530,292 530.1,289.8 530.4,295.3 530.8,295.2 531.2,294.4 531.3,296.6 531.7,285.9 531.9,269.3 532.3,275.5 532.7,281 532.9,279.9 533.2,281.5 533.4,292.3 533.9,292.2 534.2,287.5 534.4,279.3 534.7,280 535,294.1 535.3,294.3 535.7,297.4 535.9,297.7 536.3,297.8 536.6,297.6 536.9,298.9 537.1,290.6 537.4,290.9 537.8,299 538.2,296.9 538.3,293.4 538.6,295.8 539,299.4 539.4,294.1 539.7,283.5 539.8,285.7 540.1,292.6 540.6,287.9 540.9,231.1 541.3,226.5 541.5,143.8 541.7,126 542.2,168.3 542.3,189.2 542.6,214.8 542.9,228.4 543.2,218 543.7,238.3 543.8,241.3 544.2,243 544.5,254.7 544.9,259.5 545,260.4 545.5,229.4 545.8,243.4 546.1,244.3 546.2,251.6 546.6,257.4 546.9,250.6 547.3,265.7 547.5,267.2 547.8,270.1 548.1,270.7 548.5,274 548.8,269.6 549.1,247.1 549.3,252.4 549.7,264.7 550,259.5 550.4,261.8 550.6,257.3 551,262.4 551.2,257.6 551.5,230.6 551.7,238.4 552,266.5 552.4,271.2 552.6,274.1 553.1,277.5 553.4,272.5 553.6,269 553.9,267.9 554.2,273.1 554.5,263.5 554.9,270 555.1,272.7 555.5,238.2 555.7,255.4 556,275.8 556.4,274.5 556.7,258.7 557.1,259.5 557.3,267.2 557.7,276.8 558,277.7 558.2,278.8 558.5,285.3 558.9,288.1 559.2,283.8 559.6,284.1 559.8,281.9 560.1,261.9 560.4,275.3 560.7,283.5 561.1,285.5 561.3,285.9 561.7,278.9 561.8,285.9 562.2,290.5 562.6,283.1 563,284.5 563.1,274.5 563.4,282.2 563.7,282 564,288.6 564.4,276.5 564.7,283.5 564.9,289.3 565.3,278.3 565.7,278.7 565.8,266.6 566.1,272.6 566.4,273.4 566.7,280.7 567,289.8 567.4,288.1 567.8,289.3 568,283.8 568.4,285.8 568.7,259.4 568.9,253.2 569.2,263 569.5,276 569.8,273.6 570.1,286.4 570.4,281.3 570.8,279.9 571.1,258.8 571.4,251.2 571.6,268.8 572,262.5 572.2,260.1 572.6,253.5 572.9,247.8 573.2,240.1 573.5,251.6 573.9,271.9 574.2,279.3 574.5,275.5 574.7,269.9 575.2,260.4 575.3,247.3 575.6,250.2 575.9,244.3 576.3,253.6 576.6,257.4 576.9,264.5 577.3,261.6 577.4,246.1 577.7,253.5 578.2,259.2 578.4,262.1 578.7,262.7 579,267.6 579.3,269.1 579.6,271 579.9,276.3 580.4,279.2 580.7,267 580.8,265.3 581.1,263.6 581.4,262.7 581.9,256.2 582,249.6 582.5,252.6 582.7,247 582.9,252.6 583.2,256.4 583.5,266.2 583.9,265.6 584.2,269.5 584.4,274.8 584.7,275.2 585.2,273.7 585.4,268.3 585.7,274.7 586.1,275.4 586.3,273.5 586.6,275.8 587,279.4 587.2,281.1 587.5,280.8 587.9,278.9 588.1,279.8 588.4,273.6 588.7,278.3 589.3,268.8 589.4,264.6 589.7,270.4 590,279.2 590.4,282.9 590.6,282.9 591,287.6 591.3,283.5 591.7,280.4 591.9,286.3 592.2,285.6 592.5,280.6 592.8,285.7 593,293.7 593.3,293 593.6,295 594,294.9 594.4,291.9 594.6,292.8 595,295.5 595.3,294.5 595.6,287.8 595.8,290.6 596.2,285.9 596.5,287.6 596.7,292.8 597.1,294.4 597.3,294.9 597.7,286.7 597.9,283.3 598.3,281.2 598.7,282.3 599,276.4 599.3,277.5 599.4,281.3 599.9,292.3 600,293.6 600.3,296.9 600.7,298 601,297.7 601.3,298.8 601.7,296.3 601.9,298 602.3,295.1 602.5,297.7 602.9,293.5 603.2,296.8 603.5,294.6 603.7,296.3 604,290.9 604.3,292 604.7,295.9 605.1,293.6 605.3,292.5 605.6,294.7 605.9,297.3 606.3,289.7 606.6,287.3 606.8,282.6 607.1,288.2 607.4,291.4 607.7,296.7 608,296.5 608.4,298.5 608.7,294.3 608.9,297.5 609.2,298.3 609.6,297.2 609.8,297.1 610.3,299.2 610.6,298.1 610.9,289.3 611.2,284.5 611.5,272.3 611.6,234.9 611.9,278.9 612.4,286.7 612.6,287.8 613,274.8 613.1,282 613.5,285 613.9,288.2 614.2,279.5 614.4,274.2 614.7,279.1 615.2,279.9 615.4,272.9 615.6,275.8 616.1,290.2 616.3,287.7 616.5,294 617,296.6 617.1,295 617.5,261.9 617.7,288.6 618.2,285.8 618.5,281.8 618.6,282.7 618.9,291 619.2,285.8 619.5,284.1 619.9,290.5 620.3,285.1 620.6,277.9 621,268.7 621.2,261.3 621.5,276.5 621.9,276.6 622.2,218.2 622.4,200.9 622.7,249.5 623,246.6 623.3,268 623.6,268.9 624,284.1 624.4,275 624.5,279.3 624.9,284.4 625.3,278.6 625.5,275.3 625.7,281.1 626.2,286.9 626.3,286.1 626.7,287.1 627,288.9 627.4,279.7 627.6,286 627.8,289.9 628.3,289.1 628.6,292.1 628.8,287.6 629.1,292.1 629.4,289.6 629.8,288.7 630.2,288.9 630.5,276.6 630.7,267.6 631,284.1 631.4,287 631.6,281.9 631.9,280.7 632.2,264.8 632.4,279.4 632.7,287.5 633.1,288.2 633.4,286.5 633.6,295.3 634,293.1 634.4,291.9 634.6,288.7 634.9,280.4 635.3,287 635.6,276.3 635.9,278.6 636,277.7 636.3,278.2 636.9,257.3 637.2,262.7 637.5,263.9 637.8,253.4 638,254.5 638.3,266.4 638.6,282.8 638.9,281.9 639.3,283.6 639.5,284.9 640,284.5 640.2,285.5 640.5,288 640.9,276.9 641.1,275.2 641.4,284.5 641.7,281.9 641.9,286.5 642.3,288.3 642.7,283.7 643,283.9 643.3,279 643.5,289.3 643.7,291.9 644.2,290.5 644.4,290.9 644.7,289.7 645.1,286 645.3,286.3 645.7,291.3 646,289.6 646.2,291.7 646.5,292.3" class="vs7" stroke="#4a3aa7" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="199.8" y1="78" x2="199.8" y2="212.2" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="199.8" cy="217.2" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>LTCM: 45.74 on 1998-10-08</title></circle>
<text x="199.8" y="74" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">LTCM</text>
<line x1="246.9" y1="78" x2="246.9" y2="217.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="246.9" cy="222.1" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>9/11: 43.74 on 2001-09-20</title></circle>
<text x="246.9" y="74" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">9/11</text>
<line x1="361.1" y1="78" x2="361.1" y2="125.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="361.1" cy="130.5" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Lehman: 80.86 on 2008-11-20</title></circle>
<text x="361.1" y="74" font-size="10" fill="currentColor" text-anchor="middle" font-weight="600" opacity="1">Lehman, 81</text>
<line x1="385.1" y1="96" x2="385.1" y2="212.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="385.1" cy="217.1" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Flash crash: 45.79 on 2010-05-20</title></circle>
<text x="379.1" y="92" font-size="10" fill="currentColor" opacity="0.85">Flash crash</text>
<line x1="469" y1="96" x2="469" y2="224.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="469" cy="229.5" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>China scare: 40.74 on 2015-08-24</title></circle>
<text x="469" y="92" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">China scare</text>
<line x1="508" y1="78" x2="508" y2="232.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="508" cy="237.9" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Volmageddon: 37.32 on 2018-02-05</title></circle>
<text x="508" y="74" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">Volmageddon</text>
<line x1="541.7" y1="96" x2="541.7" y2="121" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="541.7" cy="126" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Covid: 82.69 on 2020-03-16</title></circle>
<text x="541.7" y="92" font-size="10" fill="currentColor" text-anchor="middle" font-weight="600" opacity="1">Covid, 83</text>
<line x1="573.2" y1="78" x2="573.2" y2="235.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="573.2" cy="240.1" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Ukraine: 36.45 on 2022-03-07</title></circle>
<text x="573.2" y="74" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">Ukraine</text>
<line x1="611.6" y1="96" x2="611.6" y2="229.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="611.6" cy="234.9" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Yen carry: 38.57 on 2024-08-05</title></circle>
<text x="611.6" y="92" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.85">Yen carry</text>
<line x1="622.4" y1="78" x2="622.4" y2="195.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="622.4" cy="200.9" r="3.5" class="vf7 vring" fill="#4a3aa7" stroke="#ffffff" stroke-width="2"><title>Tariffs: 52.33 on 2025-04-08</title></circle>
<text x="622.4" y="74" font-size="10" fill="currentColor" text-anchor="middle" font-weight="600" opacity="1">Tariffs, 52</text>
<text x="60" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1990</text>
<text x="139.7" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1995</text>
<text x="219.5" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2000</text>
<text x="299.2" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2005</text>
<text x="378.9" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2010</text>
<text x="458.6" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2015</text>
<text x="538.4" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2020</text>
<text x="618.1" y="348" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<text x="20" y="372" font-size="10.5" fill="currentColor" opacity="0.6">Source: Cboe VIX via FRED (VIXCLS). Weekly highs plotted, so every spike is kept.</text>
</svg>

For most of its history the VIX has idled in the teens. In a crisis it explodes: to **80.86** in November 2008, to a record close of **82.69** on 16 March 2020, and to **52.33** on 8 April 2025, its highest close since the pandemic, during the tariff turmoil. India publishes **India VIX** for the Nifty 50 on the same principle. Because it is calculated from option prices, the VIX does not measure how much the market has moved; it measures how much people are willing to pay for protection against moving.

### The skew

If volatility were a single number for each share, options at every strike would be priced with it. They are not.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Two stylised line charts of implied volatility across strike prices, from 80% to 120% of the current price. Left, a stock index: implied volatility is highest for low strikes, around 31% at 80%, falling to about 18% at the current price and 14% above it, because investors pay up for crash protection. Right, crude oil during a supply shock such as spring 2026: implied volatility rises with the strike, from about 45% to 57%, because the feared outcome is a price spike." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The skew: the market charges extra for the outcome it fears</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Implied volatility by strike, as a percentage of today's price. Stylised shapes.</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">Stock index: crash insurance is dear</text>
<line x1="64" y1="250" x2="316" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="254" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">10%</text>
<line x1="64" y1="216" x2="316" y2="216" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="220" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">20%</text>
<line x1="64" y1="182" x2="316" y2="182" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="186" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">30%</text>
<line x1="64" y1="148" x2="316" y2="148" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="152" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">40%</text>
<line x1="64" y1="114" x2="316" y2="114" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="118" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">50%</text>
<line x1="64" y1="80" x2="316" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="58" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">60%</text>
<text x="64" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">80%</text>
<text x="127" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">90%</text>
<text x="190" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">100%</text>
<text x="253" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">110%</text>
<text x="316" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">120%</text>
<line x1="190" y1="80" x2="190" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="4 4"/>
<polyline points="64,178.6 95.5,190.5 127,202.4 158.5,213.3 190,222.8 221.5,231 253,235.7 284.5,237.8 316,238.1" class="vs1" stroke="#2a78d6" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="64" cy="178.6" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 80%: implied volatility 31%</title></circle>
<circle cx="95.5" cy="190.5" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 85%: implied volatility 27.5%</title></circle>
<circle cx="127" cy="202.4" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 90%: implied volatility 24%</title></circle>
<circle cx="158.5" cy="213.3" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 95%: implied volatility 20.8%</title></circle>
<circle cx="190" cy="222.8" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 100%: implied volatility 18%</title></circle>
<circle cx="221.5" cy="231" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 105%: implied volatility 15.6%</title></circle>
<circle cx="253" cy="235.7" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 110%: implied volatility 14.2%</title></circle>
<circle cx="284.5" cy="237.8" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 115%: implied volatility 13.6%</title></circle>
<circle cx="316" cy="238.1" r="3.2" class="vf1" fill="#2a78d6"><title>Strike 120%: implied volatility 13.5%</title></circle>
<text x="89.2" y="166.6" font-size="11" fill="currentColor" font-weight="600">puts cost more</text>
<text x="360" y="66" font-size="12" fill="currentColor" font-weight="600">Oil in a supply shock: spike insurance is dear</text>
<line x1="404" y1="250" x2="656" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="254" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">10%</text>
<line x1="404" y1="216" x2="656" y2="216" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="220" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">20%</text>
<line x1="404" y1="182" x2="656" y2="182" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="186" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">30%</text>
<line x1="404" y1="148" x2="656" y2="148" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="152" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">40%</text>
<line x1="404" y1="114" x2="656" y2="114" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="118" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">50%</text>
<line x1="404" y1="80" x2="656" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="398" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">60%</text>
<text x="404" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">80%</text>
<text x="467" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">90%</text>
<text x="530" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">100%</text>
<text x="593" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">110%</text>
<text x="656" y="268" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">120%</text>
<line x1="530" y1="80" x2="530" y2="250" stroke="currentColor" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="4 4"/>
<polyline points="404,127.6 435.5,131 467,132.7 498.5,131 530,127.6 561.5,120.8 593,112.3 624.5,102.1 656,90.2" class="vs2" stroke="#eb6834" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="404" cy="127.6" r="3.2" class="vf2" fill="#eb6834"><title>Strike 80%: implied volatility 46%</title></circle>
<circle cx="435.5" cy="131" r="3.2" class="vf2" fill="#eb6834"><title>Strike 85%: implied volatility 45%</title></circle>
<circle cx="467" cy="132.7" r="3.2" class="vf2" fill="#eb6834"><title>Strike 90%: implied volatility 44.5%</title></circle>
<circle cx="498.5" cy="131" r="3.2" class="vf2" fill="#eb6834"><title>Strike 95%: implied volatility 45%</title></circle>
<circle cx="530" cy="127.6" r="3.2" class="vf2" fill="#eb6834"><title>Strike 100%: implied volatility 46%</title></circle>
<circle cx="561.5" cy="120.8" r="3.2" class="vf2" fill="#eb6834"><title>Strike 105%: implied volatility 48%</title></circle>
<circle cx="593" cy="112.3" r="3.2" class="vf2" fill="#eb6834"><title>Strike 110%: implied volatility 50.5%</title></circle>
<circle cx="624.5" cy="102.1" r="3.2" class="vf2" fill="#eb6834"><title>Strike 115%: implied volatility 53.5%</title></circle>
<circle cx="656" cy="90.2" r="3.2" class="vf2" fill="#eb6834"><title>Strike 120%: implied volatility 57%</title></circle>
<text x="643.4" y="154.8" font-size="11" fill="currentColor" text-anchor="end" font-weight="600">calls cost more</text>
<text x="340" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">strike as a percentage of today's price</text>
</svg>

Since the crash of October 1987, out-of-the-money puts on stock indices have cost more than a single volatility number would suggest: investors pay a permanent premium for crash insurance, because stock markets tend to fall faster than they rise. The pattern of implied volatility across strikes is called the **skew**, and it shows what the market fears. In commodities the fear often runs the other way. In March 2026, with the Strait of Hormuz closed, traders rushed to buy Brent calls that would pay out if oil topped $150, and upside protection became the expensive kind (Lesson 13).

### The volatility crush

Implied volatility often rises before an event whose outcome is unknown, such as a company's results, and collapses straight afterwards. That creates a trap for option buyers. Suppose a share is at £100 the day before its results, and a call struck at £100 that expires in a week, priced at 60% implied volatility, costs **£3.35**. The next day the results are good, the share rises **2%** to £102, and implied volatility falls back to 25% now that the news is out. The call is now worth about **£2.58**: a loss of almost a quarter, despite being right about the direction. The share needed to rise about 3% just to break even. The uncertainty premium that drains out of the price is called the **volatility crush**.

<details>
<summary>For the curious: why volatility scales with the square root of time</summary>

If each day's move is independent of the others, the variance of the total move (the average squared distance from where you started) is the sum of the daily variances. Twenty days of independent moves have twenty times the variance of one day, and therefore √20 times the typical size, since volatility is the square root of variance. With about 252 trading days a year, annual volatility = daily volatility × √252 ≈ daily × 15.9, which is where the rule of 16 comes from.

</details>

---

## Check yourself

**1. You hold one contract (100 shares) of the £105 call, bought at £3. The share finishes at £115. What is your profit in pounds and as a percentage of the premium?**

<details>
<summary>Show the answer</summary>

The call is worth £115 − £105 = £10 a share. Profit = £10 − £3 = £7 a share, or **£700** for the contract, which is **233%** of the £300 premium.

</details>

**2. A share has an implied volatility of 32% a year. Roughly how big is a typical daily move, and a typical move over three months?**

<details>
<summary>Show the answer</summary>

Daily: 32% ÷ 16 = about **2%**. Three months: 32% × √0.25 = **16%**.

</details>

**3. A call struck at £96 costs £5 while the share is at £100. How much of the price is intrinsic value and how much is time value?**

<details>
<summary>Show the answer</summary>

Intrinsic value is £100 − £96 = **£4**. The remaining **£1** is time value.

</details>

**4. The VIX is at 16. What daily move in the S&P 500 does that imply? If it jumps to 32, what has changed?**

<details>
<summary>Show the answer</summary>

16 ÷ 16 = about a **1%** typical daily move. At 32, the market is pricing moves of about **2%** a day: the cost of protection has doubled, whether or not the index has yet moved much.

</details>

---

## What to carry into Lesson 5

- There are **four basic positions**. Buyers' losses are capped at the premium; sellers keep the premium but can lose far more.
- The running example: a three-month **£105 call for £3** on a £100 share, with a **£108 breakeven**.
- Six inputs set the price; only **volatility** cannot be looked up, so the market quotes options by their **implied volatility**.
- Option prices are **intrinsic value plus time value**, and time value **melts faster as expiry nears**: theta is the buyer's rent and the seller's income.
- Volatility scales with the **square root of time**. Implied volatility usually exceeds what is realised, which pays option sellers most months and punishes them violently in a few.
- The **skew** shows what the market fears: crashes for stock indices, spikes for oil in a supply shock.

Lesson 5 opens the option's dashboard, the Greeks, and shows how the dealer who sold you this call makes its risk disappear.

---

## Sources

- [Cboe: VIX index methodology and history](https://www.cboe.com/tradable_products/vix/)
- [FRED: CBOE Volatility Index (VIXCLS)](https://fred.stlouisfed.org/series/VIXCLS)
- [FRED: S&P 500 index (SP500)](https://fred.stlouisfed.org/series/SP500)
- [NSE: India VIX](https://www.nseindia.com/static/products-services/indices-indiavix-index)
