# Lesson 5: The Greeks, Hedging and Strategies

*An option's dashboard of sensitivities, how a dealer who sells you an option makes the risk disappear, why owning an option means paying rent for big moves, the classic strategies, and the seductive arithmetic of selling insurance.*

---

## The dealer's problem

When you buy the £105 call from Lesson 4, someone sells it to you. Usually that someone is a market maker: a bank or a trading firm whose business is quoting prices all day, not betting on shares. Yet the moment the trade is done, the dealer is short a call. If the share soars, it owes you the gain.

The dealer has no intention of keeping that bet. Within seconds it will buy some shares, and over the coming weeks it will keep adjusting that holding as the price moves, so that the option it sold and the shares it holds cancel each other out. How many shares, and when, is read off the option's dashboard: a set of sensitivities known, because most are named after Greek letters, as **the Greeks**.

This lesson reads that dashboard, follows a dealer's hedge day by day, and shows the surprising conclusion: once the direction is hedged away, an option is a bet on just one thing, **how much the share moves**.

---

## The Greeks: an option's dashboard

Each Greek measures how the option's price responds to one input, with the others held still. Here are the values for our call at the start.

| Greek | In plain words | Our £105 call |
| --- | --- | --- |
| **Delta** | How much the option moves for a £1 move in the share; also the hedge ratio | 0.39: about 39p per share |
| **Gamma** | How quickly delta changes as the share moves; highest near the money and close to expiry | 0.033: delta rises to about 0.42 after a £1 rise |
| **Theta** | Value lost each day if nothing else changes | About 2.8p per share, or £2.84 per contract, per day |
| **Vega** | Change in value for one percentage point of implied volatility | About 19p per share per point |
| **Rho** | Change in value for one percentage point of interest rates | About 9p per share per point |

Think of **delta as speed** and **gamma as acceleration**. Delta says how fast the option's value moves with the share; gamma says how quickly that speed itself changes.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two line charts for the £105 call against the share price, from £85 to £125, at three, one and two-day horizons. Left, delta: an S-shaped curve from near zero to near one, crossing about 0.5 close to the strike, and getting steeper as expiry approaches; with three months left and the share at £100 delta is 0.39. Right, gamma, the rate at which delta changes: a hump centred near the strike that grows taller and narrower as expiry approaches, so that just before expiry delta can swing from near zero to near one on a small move." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Delta is speed; gamma is acceleration</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The £105 call, 23.2% volatility, against the share price</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">Delta: shares to hold per option</text>
<line x1="60" y1="270" x2="320" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="54" y="274" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.00</text>
<line x1="60" y1="222.5" x2="320" y2="222.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="226.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.25</text>
<line x1="60" y1="175" x2="320" y2="175" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="179" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.50</text>
<line x1="60" y1="127.5" x2="320" y2="127.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="131.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.75</text>
<line x1="60" y1="80" x2="320" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="54" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">1.00</text>
<text x="60" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£85</text>
<text x="125" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£95</text>
<text x="190" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£105</text>
<text x="255" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£115</text>
<text x="320" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£125</text>
<line x1="190" y1="80" x2="190" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4 4"/>
<polyline points="60,261.1 63.2,260.1 66.5,259.1 69.8,257.9 73,256.7 76.2,255.4 79.5,254 82.8,252.6 86,251 89.2,249.3 92.5,247.6 95.8,245.7 99,243.8 102.2,241.8 105.5,239.6 108.8,237.4 112,235.1 115.2,232.7 118.5,230.3 121.8,227.7 125,225.1 128.2,222.4 131.5,219.7 134.8,216.8 138,214 141.2,211 144.5,208 147.8,205 151,201.9 154.2,198.8 157.5,195.7 160.8,192.5 164,189.4 167.2,186.2 170.5,183 173.8,179.8 177,176.6 180.2,173.5 183.5,170.3 186.8,167.2 190,164.1 193.2,161 196.5,158 199.8,155 203,152.1 206.2,149.2 209.5,146.4 212.8,143.6 216,140.9 219.2,138.2 222.5,135.6 225.8,133.1 229,130.6 232.2,128.3 235.5,125.9 238.8,123.7 242,121.5 245.2,119.4 248.5,117.4 251.8,115.4 255,113.6 258.2,111.7 261.5,110 264.8,108.3 268,106.7 271.2,105.2 274.5,103.7 277.8,102.4 281,101 284.2,99.8 287.5,98.5 290.8,97.4 294,96.3 297.2,95.3 300.5,94.3 303.8,93.4 307,92.5 310.2,91.7 313.5,90.9 316.8,90.1 320,89.5" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="60,269.8 63.2,269.7 66.5,269.6 69.8,269.5 73,269.4 76.2,269.2 79.5,269 82.8,268.7 86,268.4 89.2,268 92.5,267.5 95.8,266.9 99,266.2 102.2,265.4 105.5,264.4 108.8,263.3 112,262 115.2,260.6 118.5,258.9 121.8,257.1 125,255 128.2,252.7 131.5,250.1 134.8,247.3 138,244.2 141.2,240.9 144.5,237.3 147.8,233.5 151,229.5 154.2,225.2 157.5,220.7 160.8,216 164,211.2 167.2,206.1 170.5,201 173.8,195.7 177,190.3 180.2,184.9 183.5,179.5 186.8,174.1 190,168.7 193.2,163.4 196.5,158.1 199.8,153 203,147.9 206.2,143.1 209.5,138.4 212.8,133.8 216,129.5 219.2,125.4 222.5,121.5 225.8,117.8 229,114.3 232.2,111.1 235.5,108 238.8,105.2 242,102.6 245.2,100.2 248.5,98 251.8,96 255,94.2 258.2,92.5 261.5,91 264.8,89.7 268,88.5 271.2,87.4 274.5,86.4 277.8,85.6 281,84.8 284.2,84.2 287.5,83.6 290.8,83.1 294,82.6 297.2,82.2 300.5,81.9 303.8,81.6 307,81.4 310.2,81.2 313.5,81 316.8,80.8 320,80.7" class="vs7" stroke="#4a3aa7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="60,270 63.2,270 66.5,270 69.8,270 73,270 76.2,270 79.5,270 82.8,270 86,270 89.2,270 92.5,270 95.8,270 99,270 102.2,270 105.5,270 108.8,270 112,270 115.2,270 118.5,270 121.8,270 125,270 128.2,270 131.5,270 134.8,270 138,270 141.2,270 144.5,270 147.8,270 151,269.9 154.2,269.8 157.5,269.5 160.8,268.9 164,267.6 167.2,265.2 170.5,260.9 173.8,254.1 177,244.2 180.2,230.6 183.5,213.8 186.8,194.2 190,173.4 193.2,152.7 196.5,133.8 199.8,117.7 203,105 206.2,95.6 209.5,89.2 212.8,85.1 216,82.7 219.2,81.3 222.5,80.6 225.8,80.3 229,80.1 232.2,80 235.5,80 238.8,80 242,80 245.2,80 248.5,80 251.8,80 255,80 258.2,80 261.5,80 264.8,80 268,80 271.2,80 274.5,80 277.8,80 281,80 284.2,80 287.5,80 290.8,80 294,80 297.2,80 300.5,80 303.8,80 307,80 310.2,80 313.5,80 316.8,80 320,80" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="157.5" cy="195.7" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>Share £100, three months left: delta 0.39</title></circle>
<text x="151.5" y="187.7" font-size="10.5" fill="currentColor" text-anchor="end" font-weight="600">0.39 today</text>
<text x="360" y="66" font-size="12" fill="currentColor" font-weight="600">Gamma: change in delta per £1 move</text>
<line x1="400" y1="270" x2="660" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="394" y="274" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.00</text>
<line x1="400" y1="232" x2="660" y2="232" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="236" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.05</text>
<line x1="400" y1="194" x2="660" y2="194" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="198" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.10</text>
<line x1="400" y1="156" x2="660" y2="156" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="160" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.15</text>
<line x1="400" y1="118" x2="660" y2="118" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="122" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.20</text>
<line x1="400" y1="80" x2="660" y2="80" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="394" y="84" font-size="10" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">0.25</text>
<text x="400" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£85</text>
<text x="465" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£95</text>
<text x="530" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£105</text>
<text x="595" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£115</text>
<text x="660" y="288" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.65">£125</text>
<line x1="530" y1="80" x2="530" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4 4"/>
<polyline points="400,262.5 403.2,261.9 406.5,261.2 409.8,260.6 413,259.9 416.2,259.2 419.5,258.5 422.8,257.8 426,257.1 429.2,256.3 432.5,255.6 435.8,254.9 439,254.1 442.2,253.4 445.5,252.7 448.8,252 452,251.3 455.2,250.6 458.5,250 461.8,249.3 465,248.7 468.2,248.2 471.5,247.7 474.8,247.2 478,246.7 481.2,246.3 484.5,245.9 487.8,245.6 491,245.3 494.2,245 497.5,244.8 500.8,244.7 504,244.6 507.2,244.5 510.5,244.5 513.8,244.6 517,244.6 520.2,244.8 523.5,244.9 526.8,245.1 530,245.4 533.2,245.6 536.5,246 539.8,246.3 543,246.7 546.2,247.1 549.5,247.5 552.8,248 556,248.5 559.2,249 562.5,249.5 565.8,250.1 569,250.6 572.2,251.2 575.5,251.7 578.8,252.3 582,252.9 585.2,253.5 588.5,254.1 591.8,254.6 595,255.2 598.2,255.8 601.5,256.4 604.8,256.9 608,257.5 611.2,258 614.5,258.6 617.8,259.1 621,259.6 624.2,260.1 627.5,260.6 630.8,261.1 634,261.5 637.2,262 640.5,262.4 643.8,262.8 647,263.2 650.2,263.6 653.5,263.9 656.8,264.3 660,264.6" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="400,269.5 403.2,269.4 406.5,269.2 409.8,269 413,268.7 416.2,268.4 419.5,268 422.8,267.6 426,267 429.2,266.4 432.5,265.7 435.8,264.9 439,264 442.2,262.9 445.5,261.8 448.8,260.5 452,259.1 455.2,257.6 458.5,255.9 461.8,254.2 465,252.4 468.2,250.5 471.5,248.5 474.8,246.5 478,244.5 481.2,242.5 484.5,240.5 487.8,238.5 491,236.7 494.2,234.9 497.5,233.2 500.8,231.7 504,230.4 507.2,229.2 510.5,228.2 513.8,227.5 517,227 520.2,226.6 523.5,226.5 526.8,226.7 530,227 533.2,227.6 536.5,228.4 539.8,229.3 543,230.4 546.2,231.7 549.5,233.1 552.8,234.6 556,236.2 559.2,237.9 562.5,239.6 565.8,241.3 569,243.1 572.2,244.9 575.5,246.6 578.8,248.3 582,250 585.2,251.6 588.5,253.2 591.8,254.7 595,256.1 598.2,257.4 601.5,258.6 604.8,259.8 608,260.9 611.2,261.9 614.5,262.8 617.8,263.6 621,264.3 624.2,265 627.5,265.6 630.8,266.2 634,266.7 637.2,267.1 640.5,267.5 643.8,267.8 647,268.2 650.2,268.4 653.5,268.6 656.8,268.8 660,269" class="vs7" stroke="#4a3aa7" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="400,270 403.2,270 406.5,270 409.8,270 413,270 416.2,270 419.5,270 422.8,270 426,270 429.2,270 432.5,270 435.8,270 439,270 442.2,270 445.5,270 448.8,270 452,270 455.2,270 458.5,270 461.8,270 465,270 468.2,270 471.5,270 474.8,270 478,270 481.2,270 484.5,269.9 487.8,269.8 491,269.5 494.2,268.6 497.5,266.7 500.8,262.8 504,255.8 507.2,244.2 510.5,226.8 513.8,203.7 517,176.2 520.2,147.8 523.5,122.9 526.8,106.5 530,101.9 533.2,109.9 536.5,128.7 539.8,154.2 543,181.9 546.2,207.6 549.5,228.9 552.8,244.8 556,255.5 559.2,262.3 562.5,266.1 565.8,268.2 569,269.2 572.2,269.7 575.5,269.9 578.8,270 582,270 585.2,270 588.5,270 591.8,270 595,270 598.2,270 601.5,270 604.8,270 608,270 611.2,270 614.5,270 617.8,270 621,270 624.2,270 627.5,270 630.8,270 634,270 637.2,270 640.5,270 643.8,270 647,270 650.2,270 653.5,270 656.8,270 660,270" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="543" y="105.9" font-size="10" fill="currentColor" opacity="0.8">0.22, two days out</text>
<line x1="60" y1="316" x2="78" y2="316" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="84" y="320" font-size="11.5" fill="currentColor" opacity="0.85">3 months left</text>
<line x1="177.4" y1="316" x2="195.4" y2="316" class="vs7" stroke="#4a3aa7" stroke-width="2.5" stroke-linecap="round"/>
<text x="201.4" y="320" font-size="11.5" fill="currentColor" opacity="0.85">1 month left</text>
<line x1="288.6" y1="316" x2="306.6" y2="316" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="312.6" y="320" font-size="11.5" fill="currentColor" opacity="0.85">2 days left</text>
</svg>

Delta runs from nearly zero for a call far out of the money, which barely notices the share, to nearly one for a call deep in the money, which moves pound for pound with it. Around the strike it changes fastest, and that is where gamma peaks. As expiry approaches the S-curve steepens into a cliff and the gamma hump becomes a spike: two days before expiry, a call near the strike can swing from almost worthless to almost a share's worth on a small move. Lesson 10 shows why options that expire on the day they are traded have made this cliff a regulatory worry.

### Delta is not a probability, quite

Traders often use delta as a rough guide to the odds of an option finishing in the money, and for our call the two are close: delta is 0.39, and the pricing formula's own figure for the chance of finishing above £105 is about 35%. Treat both with care. As Lesson 3 showed, these are **risk-neutral** odds, a by-product of pricing by copying, not anyone's forecast. They are useful for describing an option; they are not a tip.

---

## Delta hedging: making the direction disappear

Delta has a second life as a **hedge ratio**. A dealer that sells ten contracts of our call, 1,000 options, gains about £391 if the share falls £1 and loses about £391 if it rises £1. Buy **391 shares** and those swings cancel. The position is now **delta neutral**: for small moves, the dealer no longer cares which way the share goes.

But delta does not stay put, because gamma keeps changing it. So the dealer must keep adjusting. Here is a week of it.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Bar chart of the shares a dealer holds to hedge ten contracts, 1,000 options, of the £105 call it has sold, over five days. Day 0: share £100, delta 0.391, holding 391 shares; Day 1: share £102, delta 0.457, holding 457 shares; Day 2: share £101, delta 0.422, holding 422 shares; Day 3: share £104, delta 0.523, holding 523 shares; Day 4: share £103, delta 0.489, holding 489 shares; Day 5: share £106, delta 0.589, holding 589 shares. The dealer buys after every rise and sells after every fall. Unhedged, the rise to £106 would have cost it about £2,782; hedged, it lost about £247, because the share moved more than the volatility the option was sold at." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Delta hedging: buy after rises, sell after falls</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A dealer short 1,000 of the £105 calls holds delta × 1,000 shares, rebalanced daily. Illustrative path.</text>
<line x1="90" y1="260" x2="620" y2="260" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="264" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0</text>
<line x1="90" y1="208.6" x2="620" y2="208.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="212.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">200</text>
<line x1="90" y1="157.1" x2="620" y2="157.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="161.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">400</text>
<line x1="90" y1="105.7" x2="620" y2="105.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="109.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">600</text>
<text x="20" y="72" font-size="10.5" fill="currentColor" opacity="0.65">shares held</text>
<path d="M108.2,260 L108.2,162.5 Q108.2,159.5 111.2,159.5 L157.2,159.5 Q160.2,159.5 160.2,162.5 L160.2,260 Z" class="vf1" fill="#2a78d6"><title>Day 0: hold 391 shares</title></path>
<text x="134.2" y="137.5" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">391</text>
<text x="134.2" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 0</text>
<text x="134.2" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£100</text>
<path d="M196.5,260 L196.5,145.5 Q196.5,142.5 199.5,142.5 L245.5,142.5 Q248.5,142.5 248.5,145.5 L248.5,260 Z" class="vf1" fill="#2a78d6"><title>Day 1: hold 457 shares</title></path>
<text x="222.5" y="120.5" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">457</text>
<text x="222.5" y="134.5" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">buy 66</text>
<text x="222.5" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 1</text>
<text x="222.5" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£102</text>
<path d="M284.8,260 L284.8,154.5 Q284.8,151.5 287.8,151.5 L333.8,151.5 Q336.8,151.5 336.8,154.5 L336.8,260 Z" class="vf1" fill="#2a78d6"><title>Day 2: hold 422 shares</title></path>
<text x="310.8" y="129.5" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">422</text>
<text x="310.8" y="143.5" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">sell 35</text>
<text x="310.8" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 2</text>
<text x="310.8" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£101</text>
<path d="M373.2,260 L373.2,128.5 Q373.2,125.5 376.2,125.5 L422.2,125.5 Q425.2,125.5 425.2,128.5 L425.2,260 Z" class="vf1" fill="#2a78d6"><title>Day 3: hold 523 shares</title></path>
<text x="399.2" y="103.5" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">523</text>
<text x="399.2" y="117.5" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">buy 101</text>
<text x="399.2" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 3</text>
<text x="399.2" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£104</text>
<path d="M461.5,260 L461.5,137.3 Q461.5,134.3 464.5,134.3 L510.5,134.3 Q513.5,134.3 513.5,137.3 L513.5,260 Z" class="vf1" fill="#2a78d6"><title>Day 4: hold 489 shares</title></path>
<text x="487.5" y="112.3" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">489</text>
<text x="487.5" y="126.3" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">sell 34</text>
<text x="487.5" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 4</text>
<text x="487.5" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£103</text>
<path d="M549.8,260 L549.8,111.5 Q549.8,108.5 552.8,108.5 L598.8,108.5 Q601.8,108.5 601.8,111.5 L601.8,260 Z" class="vf1" fill="#2a78d6"><title>Day 5: hold 589 shares</title></path>
<text x="575.8" y="86.5" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">589</text>
<text x="575.8" y="100.5" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">buy 100</text>
<text x="575.8" y="278" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">Day 5</text>
<text x="575.8" y="293" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">£106</text>
<text x="20" y="314" font-size="10.5" fill="currentColor" opacity="0.6">Unhedged, the move to £106 would have cost about £2,782; hedged, about £247, before interest.</text>
</svg>

| Day | Share price | Delta | Shares held | Trade |
| --- | ---: | ---: | ---: | --- |
| 0 | £100 | 0.391 | 391 | buy 391 |
| 1 | £102 | 0.457 | 457 | buy 66 |
| 2 | £101 | 0.422 | 422 | sell 35 |
| 3 | £104 | 0.523 | 523 | buy 101 |
| 4 | £103 | 0.489 | 489 | sell 34 |
| 5 | £106 | 0.589 | 589 | buy 100 |

Look at the pattern in the last column. The hedging dealer **buys after every rise and sells after every fall**. Buying high and selling low loses money a little at a time, and that steady loss is precisely what the option premium pays for. If the share moves about as much as the 23.2% volatility the option was sold at, the hedging losses use up the premium and the dealer breaks even, keeping its spread. If the share moves less, the dealer keeps some of the premium. If it moves more, the dealer loses.

In this week the share moved about 2% a day, far more than 23.2% volatility implies, and the dealer ended the week about **£250** worse off. Unhedged, the climb to £106 would have cost it about **£2,800**. Hedging did not make the risk vanish. It **converted a bet on direction into a bet on volatility**, which is the one risk an options dealer is in business to manage.

When many dealers hedge the same way at the same time, their buying and selling can move the share itself. Lesson 9 shows how that turns into a feedback loop.

---

## Gamma against theta: why options trade volatility

The dealer's week has a mirror image. Suppose *you* own the call and hedge its delta, so that you too no longer care about direction. What is left?

Two forces, every day. Gamma means your option gains a little whenever the share moves, in either direction, because delta shifts in your favour: a rise makes you longer just as the share goes up, a fall makes you shorter just as it goes down. Theta means your option loses a little every day regardless. Put together, the day's profit traces a parabola in the size of the move, minus a constant rent.

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

For our call, the gamma gain beats the 2.8p of theta when the share moves more than about **£1.31** in a day, in either direction. That is close to the typical daily move that 23.2% volatility implies, about 1.2% or £1.21, once the year is counted the way theta counts it: in calendar days, weekends included (23.2% ÷ √365). Lesson 4's rule of 16 counts only trading days, which is why it gives a larger figure. It is not a coincidence: the option's price was set so that the two balance at exactly the volatility the market expects.

> **Owning an option is owning volatility.** Once the direction is hedged, an option holder makes money if the share moves more than the market expected, and an option seller makes money if it moves less. Option trading is trading the gap between implied and realised volatility.

<details>
<summary>For the curious: the gamma and theta arithmetic</summary>

Over a short period, a delta-hedged option's profit is approximately

½ × Γ × (ΔS)² − Θ × Δt

where Γ is gamma, ΔS the move in the share, Θ the daily theta and Δt the number of days. Setting it to zero gives the break-even move ΔS = √(2Θ ÷ Γ). For our call, Θ = £0.0284 a day and Γ = 0.0331, so ΔS = √(2 × 0.0284 ÷ 0.0331) = **£1.31**. The Black-Scholes model makes theta and gamma consistent with each other: for a delta-hedged option, the expected gamma gain at exactly the implied volatility pays for the theta, apart from a small interest-rate term.

</details>

---

## Classic strategies built from the blocks

Options can be combined with each other and with the share to reshape a payoff almost at will. The strategies below use our share at £100 and prices from the running example.

<svg viewBox="0 0 680 470" width="100%" role="img" aria-label="Six payoff diagrams of profit per share at expiry, against the share price from £80 to £125, for classic strategies built on a £100 share: Own the share: one for one; Covered call (Own it; sell the £105 call for £3.00): capped at +£8.00; Protective put (Own it; buy the £95 put for £2.13): floor at −£7.13; Collar (Buy the £95 put, sell the £105 call): between −£4.13 and +£5.87; Bull call spread (Buy the £105 call, sell the £115 call): cost £2.18, best +£7.82; Straddle (Buy the £100 call and put for £9.24): profits beyond £90.76 or £109.24." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Classic strategies: reshaping the payoff with options</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Profit per share at expiry. Option prices from the running example (three months, 23.2% volatility).</text>
<rect x="20" y="62" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="32" y="83" font-size="12.5" fill="currentColor" font-weight="600">Own the share</text>
<text x="32" y="99" font-size="9.5" fill="currentColor" opacity="0.72">For comparison</text>
<line x1="58" y1="217.1" x2="218" y2="217.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="53" y="221.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="58" y1="168" x2="218" y2="168" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="53" y="172" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="58" y1="118.9" x2="218" y2="118.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="53" y="122.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="58" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="129.1" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="200.2" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<polyline points="58,217.1 59.8,215.9 61.6,214.6 63.3,213.4 65.1,212.2 66.9,211 68.7,209.7 70.4,208.5 72.2,207.3 74,206 75.8,204.8 77.6,203.6 79.3,202.4 81.1,201.1 82.9,199.9 84.7,198.7 86.4,197.5 88.2,196.2 90,195 91.8,193.8 93.6,192.5 95.3,191.3 97.1,190.1 98.9,188.9 100.7,187.6 102.4,186.4 104.2,185.2 106,184 107.8,182.7 109.6,181.5 111.3,180.3 113.1,179 114.9,177.8 116.7,176.6 118.4,175.4 120.2,174.1 122,172.9 123.8,171.7 125.6,170.5 127.3,169.2 129.1,168 130.9,166.8 132.7,165.5 134.4,164.3 136.2,163.1 138,161.9 139.8,160.6 141.6,159.4 143.3,158.2 145.1,157 146.9,155.7 148.7,154.5 150.4,153.3 152.2,152 154,150.8 155.8,149.6 157.6,148.4 159.3,147.1 161.1,145.9 162.9,144.7 164.7,143.5 166.4,142.2 168.2,141 170,139.8 171.8,138.5 173.6,137.3 175.3,136.1 177.1,134.9 178.9,133.6 180.7,132.4 182.4,131.2 184.2,130 186,128.7 187.8,127.5 189.6,126.3 191.3,125 193.1,123.8 194.9,122.6 196.7,121.4 198.4,120.1 200.2,118.9 202,117.7 203.8,116.5 205.6,115.2 207.3,114 209.1,114 210.9,114 212.7,114 214.4,114 216.2,114 218,114" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<rect x="240" y="62" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="252" y="83" font-size="12.5" fill="currentColor" font-weight="600">Covered call</text>
<text x="252" y="99" font-size="9.5" fill="currentColor" opacity="0.72">Own it; sell the £105 call for £3.00</text>
<line x1="278" y1="217.1" x2="438" y2="217.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="221.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="278" y1="168" x2="438" y2="168" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="273" y="172" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="278" y1="118.9" x2="438" y2="118.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="122.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="278" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="349.1" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="420.2" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<line x1="278" y1="217.1" x2="427.3" y2="114" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="4 3"/>
<polyline points="278,209.7 279.8,208.5 281.6,207.3 283.3,206 285.1,204.8 286.9,203.6 288.7,202.4 290.4,201.1 292.2,199.9 294,198.7 295.8,197.5 297.6,196.2 299.3,195 301.1,193.8 302.9,192.5 304.7,191.3 306.4,190.1 308.2,188.9 310,187.6 311.8,186.4 313.6,185.2 315.3,184 317.1,182.7 318.9,181.5 320.7,180.3 322.4,179 324.2,177.8 326,176.6 327.8,175.4 329.6,174.1 331.3,172.9 333.1,171.7 334.9,170.5 336.7,169.2 338.4,168 340.2,166.8 342,165.5 343.8,164.3 345.6,163.1 347.3,161.9 349.1,160.6 350.9,159.4 352.7,158.2 354.4,157 356.2,155.7 358,154.5 359.8,153.3 361.6,152 363.3,150.8 365.1,149.6 366.9,148.4 368.7,148.4 370.4,148.4 372.2,148.4 374,148.4 375.8,148.4 377.6,148.4 379.3,148.4 381.1,148.4 382.9,148.4 384.7,148.4 386.4,148.4 388.2,148.4 390,148.4 391.8,148.4 393.6,148.4 395.3,148.4 397.1,148.4 398.9,148.4 400.7,148.4 402.4,148.4 404.2,148.4 406,148.4 407.8,148.4 409.6,148.4 411.3,148.4 413.1,148.4 414.9,148.4 416.7,148.4 418.4,148.4 420.2,148.4 422,148.4 423.8,148.4 425.6,148.4 427.3,148.4 429.1,148.4 430.9,148.4 432.7,148.4 434.4,148.4 436.2,148.4 438,148.4" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="252" y="114" font-size="9.5" fill="currentColor" font-weight="600">capped at +£8.00</text>
<rect x="460" y="62" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="472" y="83" font-size="12.5" fill="currentColor" font-weight="600">Protective put</text>
<text x="472" y="99" font-size="9.5" fill="currentColor" opacity="0.72">Own it; buy the £95 put for £2.13</text>
<line x1="498" y1="217.1" x2="658" y2="217.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="493" y="221.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="498" y1="168" x2="658" y2="168" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="493" y="172" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="498" y1="118.9" x2="658" y2="118.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="493" y="122.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="498" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="569.1" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="640.2" y="237" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<line x1="498" y1="217.1" x2="647.3" y2="114" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="4 3"/>
<polyline points="498,185.5 499.8,185.5 501.6,185.5 503.3,185.5 505.1,185.5 506.9,185.5 508.7,185.5 510.4,185.5 512.2,185.5 514,185.5 515.8,185.5 517.6,185.5 519.3,185.5 521.1,185.5 522.9,185.5 524.7,185.5 526.4,185.5 528.2,185.5 530,185.5 531.8,185.5 533.6,185.5 535.3,185.5 537.1,185.5 538.9,185.5 540.7,185.5 542.4,185.5 544.2,185.5 546,185.5 547.8,185.5 549.6,185.5 551.3,185.5 553.1,184.3 554.9,183 556.7,181.8 558.4,180.6 560.2,179.4 562,178.1 563.8,176.9 565.6,175.7 567.3,174.4 569.1,173.2 570.9,172 572.7,170.8 574.4,169.5 576.2,168.3 578,167.1 579.8,165.9 581.6,164.6 583.3,163.4 585.1,162.2 586.9,160.9 588.7,159.7 590.4,158.5 592.2,157.3 594,156 595.8,154.8 597.6,153.6 599.3,152.4 601.1,151.1 602.9,149.9 604.7,148.7 606.4,147.4 608.2,146.2 610,145 611.8,143.8 613.6,142.5 615.3,141.3 617.1,140.1 618.9,138.9 620.7,137.6 622.4,136.4 624.2,135.2 626,133.9 627.8,132.7 629.6,131.5 631.3,130.3 633.1,129 634.9,127.8 636.7,126.6 638.4,125.4 640.2,124.1 642,122.9 643.8,121.7 645.6,120.4 647.3,119.2 649.1,118 650.9,116.8 652.7,115.5 654.4,114.3 656.2,114 658,114" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="472" y="114" font-size="9.5" fill="currentColor" font-weight="600">floor at −£7.13</text>
<rect x="20" y="262" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="32" y="283" font-size="12.5" fill="currentColor" font-weight="600">Collar</text>
<text x="32" y="299" font-size="9.5" fill="currentColor" opacity="0.72">Buy the £95 put, sell the £105 call</text>
<line x1="58" y1="417.1" x2="218" y2="417.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="53" y="421.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="58" y1="368" x2="218" y2="368" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="53" y="372" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="58" y1="318.9" x2="218" y2="318.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="53" y="322.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="58" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="129.1" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="200.2" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<line x1="58" y1="417.1" x2="207.3" y2="314" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="4 3"/>
<polyline points="58,378.1 59.8,378.1 61.6,378.1 63.3,378.1 65.1,378.1 66.9,378.1 68.7,378.1 70.4,378.1 72.2,378.1 74,378.1 75.8,378.1 77.6,378.1 79.3,378.1 81.1,378.1 82.9,378.1 84.7,378.1 86.4,378.1 88.2,378.1 90,378.1 91.8,378.1 93.6,378.1 95.3,378.1 97.1,378.1 98.9,378.1 100.7,378.1 102.4,378.1 104.2,378.1 106,378.1 107.8,378.1 109.6,378.1 111.3,378.1 113.1,376.9 114.9,375.7 116.7,374.4 118.4,373.2 120.2,372 122,370.8 123.8,369.5 125.6,368.3 127.3,367.1 129.1,365.9 130.9,364.6 132.7,363.4 134.4,362.2 136.2,360.9 138,359.7 139.8,358.5 141.6,357.3 143.3,356 145.1,354.8 146.9,353.6 148.7,353.6 150.4,353.6 152.2,353.6 154,353.6 155.8,353.6 157.6,353.6 159.3,353.6 161.1,353.6 162.9,353.6 164.7,353.6 166.4,353.6 168.2,353.6 170,353.6 171.8,353.6 173.6,353.6 175.3,353.6 177.1,353.6 178.9,353.6 180.7,353.6 182.4,353.6 184.2,353.6 186,353.6 187.8,353.6 189.6,353.6 191.3,353.6 193.1,353.6 194.9,353.6 196.7,353.6 198.4,353.6 200.2,353.6 202,353.6 203.8,353.6 205.6,353.6 207.3,353.6 209.1,353.6 210.9,353.6 212.7,353.6 214.4,353.6 216.2,353.6 218,353.6" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="32" y="314" font-size="9.5" fill="currentColor" font-weight="600">between −£4.13 and +£5.87</text>
<rect x="240" y="262" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="252" y="283" font-size="12.5" fill="currentColor" font-weight="600">Bull call spread</text>
<text x="252" y="299" font-size="9.5" fill="currentColor" opacity="0.72">Buy the £105 call, sell the £115 call</text>
<line x1="278" y1="417.1" x2="438" y2="417.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="421.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="278" y1="368" x2="438" y2="368" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="273" y="372" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="278" y1="318.9" x2="438" y2="318.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="273" y="322.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="278" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="349.1" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="420.2" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<line x1="278" y1="417.1" x2="427.3" y2="314" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="4 3"/>
<polyline points="278,373.4 279.8,373.4 281.6,373.4 283.3,373.4 285.1,373.4 286.9,373.4 288.7,373.4 290.4,373.4 292.2,373.4 294,373.4 295.8,373.4 297.6,373.4 299.3,373.4 301.1,373.4 302.9,373.4 304.7,373.4 306.4,373.4 308.2,373.4 310,373.4 311.8,373.4 313.6,373.4 315.3,373.4 317.1,373.4 318.9,373.4 320.7,373.4 322.4,373.4 324.2,373.4 326,373.4 327.8,373.4 329.6,373.4 331.3,373.4 333.1,373.4 334.9,373.4 336.7,373.4 338.4,373.4 340.2,373.4 342,373.4 343.8,373.4 345.6,373.4 347.3,373.4 349.1,373.4 350.9,373.4 352.7,373.4 354.4,373.4 356.2,373.4 358,373.4 359.8,373.4 361.6,373.4 363.3,373.4 365.1,373.4 366.9,373.4 368.7,372.1 370.4,370.9 372.2,369.7 374,368.4 375.8,367.2 377.6,366 379.3,364.8 381.1,363.5 382.9,362.3 384.7,361.1 386.4,359.9 388.2,358.6 390,357.4 391.8,356.2 393.6,354.9 395.3,353.7 397.1,352.5 398.9,351.3 400.7,350 402.4,348.8 404.2,348.8 406,348.8 407.8,348.8 409.6,348.8 411.3,348.8 413.1,348.8 414.9,348.8 416.7,348.8 418.4,348.8 420.2,348.8 422,348.8 423.8,348.8 425.6,348.8 427.3,348.8 429.1,348.8 430.9,348.8 432.7,348.8 434.4,348.8 436.2,348.8 438,348.8" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="252" y="314" font-size="9.5" fill="currentColor" font-weight="600">cost £2.18, best +£7.82</text>
<rect x="460" y="262" width="208" height="188" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" fill="none"/>
<text x="472" y="283" font-size="12.5" fill="currentColor" font-weight="600">Straddle</text>
<text x="472" y="299" font-size="9.5" fill="currentColor" opacity="0.72">Buy the £100 call and put for £9.24</text>
<line x1="498" y1="417.1" x2="658" y2="417.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="493" y="421.1" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">−£20</text>
<line x1="498" y1="368" x2="658" y2="368" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="493" y="372" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="498" y1="318.9" x2="658" y2="318.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
<text x="493" y="322.9" font-size="9.5" fill="currentColor" text-anchor="end" opacity="0.65" style="font-variant-numeric:tabular-nums">£20</text>
<text x="498" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£80</text>
<text x="569.1" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£100</text>
<text x="640.2" y="437" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">£120</text>
<line x1="498" y1="417.1" x2="647.3" y2="314" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="4 3"/>
<polyline points="498,341.6 499.8,342.8 501.6,344 503.3,345.3 505.1,346.5 506.9,347.7 508.7,348.9 510.4,350.2 512.2,351.4 514,352.6 515.8,353.9 517.6,355.1 519.3,356.3 521.1,357.5 522.9,358.8 524.7,360 526.4,361.2 528.2,362.4 530,363.7 531.8,364.9 533.6,366.1 535.3,367.4 537.1,368.6 538.9,369.8 540.7,371 542.4,372.3 544.2,373.5 546,374.7 547.8,375.9 549.6,377.2 551.3,378.4 553.1,379.6 554.9,380.9 556.7,382.1 558.4,383.3 560.2,384.5 562,385.8 563.8,387 565.6,388.2 567.3,389.4 569.1,390.7 570.9,389.4 572.7,388.2 574.4,387 576.2,385.8 578,384.5 579.8,383.3 581.6,382.1 583.3,380.9 585.1,379.6 586.9,378.4 588.7,377.2 590.4,375.9 592.2,374.7 594,373.5 595.8,372.3 597.6,371 599.3,369.8 601.1,368.6 602.9,367.4 604.7,366.1 606.4,364.9 608.2,363.7 610,362.4 611.8,361.2 613.6,360 615.3,358.8 617.1,357.5 618.9,356.3 620.7,355.1 622.4,353.9 624.2,352.6 626,351.4 627.8,350.2 629.6,348.9 631.3,347.7 633.1,346.5 634.9,345.3 636.7,344 638.4,342.8 640.2,341.6 642,340.4 643.8,339.1 645.6,337.9 647.3,336.7 649.1,335.4 650.9,334.2 652.7,333 654.4,331.8 656.2,330.5 658,329.3" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="472" y="314" font-size="9.5" fill="currentColor" font-weight="600">profits beyond £90.76 or £109.24</text>
<text x="20" y="466" font-size="10.5" fill="currentColor" opacity="0.65">Dashed line in each panel: owning the share alone.</text>
</svg>

- **Covered call.** Own the share and sell the £105 call for £3.00. You collect income, but give away every pound above £105: the best you can do is £8.00 a share, however high the share goes. Income funds like this trade; it turns some of a share's upside into a steady premium.
- **Protective put.** Own the share and buy the £95 put for **£2.13**. The worst loss is capped at about **£7.13** a share: the £5 drop to the strike plus the premium. This is insurance, and like all insurance it costs money every period whether or not it is needed.
- **Collar.** Buy the £95 put and pay for it by selling the £105 call. The call brings in more than the put costs, so the collar here pays you **£0.87** upfront, and the result is boxed between a loss of £4.13 and a gain of £5.87. Executives and pension funds use collars to protect large holdings at little or no upfront cost, giving up the upside in exchange.
- **Bull call spread.** Buy our £105 call and sell a £115 call for about **£0.82**. The net cost falls to **£2.18**, but the maximum gain is capped at **£7.82** a share. You give up the dream scenario to make the likely ones cheaper.
- **Straddle.** Buy a call and a put at the same strike to bet on a big move either way. At a £100 strike this costs about **£9.24**, so the share must move more than about 9% by expiry, below £90.76 or above £109.24, to profit. A straddle is a pure bet on volatility, which is why it is the classic trade before an uncertain event, and the classic victim of the volatility crush.

Every one of these is a deliberate trade-off between the premium you pay or receive and the part of the payoff you keep. None is free; a strategy that looks free has simply sold something you have not noticed.

---

## Selling options: the steamroller

Selling options can look like easy money, because options sold out of the money usually expire worthless and the seller keeps the premium. Lesson 4 showed why: implied volatility usually exceeds what is realised, so sellers are paid an insurance margin. The trouble is the shape of the returns.

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

This simplified strategy sold a one-month put on the S&P 500, 5% below the market, every month for ten years. It made money in **111 of 120 months**. The premium averaged about half a percent a month: small, steady, almost boring. Then late 2018 took back two years of gains in two months, and March 2020 lost **9.7 points in a single month**, leaving the strategy below where it had started three and a half years earlier. It recovered, because premiums are fat after a crash, and ended the decade well ahead. But that is the profile of an insurer: it is only safe if you are big enough, and unleveraged enough, to pay the claims when the storm arrives.

Traders call it **picking up pennies in front of a steamroller**: the rare losing month can erase years of gains, and if the seller has used leverage, it can erase the seller. In November 2018 a spike in US natural gas prices wiped out OptionSellers.com, a Florida firm that sold commodity options on behalf of wealthy clients. Losses ran to about **$150 million** across some 290 client accounts, its founder apologised in a YouTube video for "a rogue wave", and some clients reportedly ended up owing their broker money on top of losing their accounts. Lessons 9, 12 and 13 show the same steamroller arriving at far larger firms.

> **Selling insurance is a business, not a free lunch.** The premium is closer to a reserve for the bad day than to income. Ask how big that day could be, and whether you could pay for it.

---

## Check yourself

**1. Our call has a delta of 0.39 and a gamma of 0.033. The share rises £2. Roughly how much does the call's price change?**

<details>
<summary>Show the answer</summary>

Delta alone gives 0.39 × £2 = £0.78. Gamma adds about ½ × 0.033 × 2² = £0.066, because delta rises as the share moves. So the call gains about **£0.85** a share (ignoring a day's theta).

</details>

**2. A dealer has sold 20 contracts (2,000 options) of a call with a delta of 0.55. How many shares does it buy to be delta neutral? If the share then rises and delta becomes 0.60, what does it do?**

<details>
<summary>Show the answer</summary>

2,000 × 0.55 = **1,100 shares**. When delta rises to 0.60 it needs 1,200, so it **buys 100 more**: a hedging dealer buys after rises.

</details>

**3. You buy the £100 straddle for £9.24. At expiry the share is at £112. What is your profit? At £104?**

<details>
<summary>Show the answer</summary>

At £112 the call is worth £12 and the put nothing: profit = £12 − £9.24 = **£2.76**. At £104 the call is worth £4: £4 − £9.24 = a **loss of £5.24**. A 4% move was not enough to pay for the uncertainty you bought.

</details>

**4. You own the share at £100 and sell the £105 call for £3. The share jumps to £125. What is your profit, and what would it have been without the call?**

<details>
<summary>Show the answer</summary>

With the covered call: the share is called away at £105, so £5 gain plus £3 premium = **£8**. Without it: **£25**. The covered call turned £17 of upside into the £3 you were paid at the start.

</details>

---

## What to carry into Lesson 6

- The **Greeks** are the option's dashboard: **delta** (speed, and the hedge ratio), **gamma** (acceleration), **theta** (daily rent), **vega** (sensitivity to volatility), **rho** (to rates).
- A dealer **delta hedges** by holding delta × the options it has sold, buying after rises and selling after falls. Hedging converts a bet on **direction** into a bet on **volatility**.
- A delta-hedged option holder earns **gamma** from big moves and pays **theta** every day; the break-even move matches the implied volatility.
- Strategies such as covered calls, protective puts, collars, spreads and straddles **trade one part of the payoff for another**; none is free.
- Selling options pays steadily and loses suddenly: **the steamroller**.

Lesson 6 leaves options for the instrument that settles every single evening: the future, where being right is not enough unless you can survive the path.

---

## Sources

- [ThinkAdvisor: wiped-out hedge fund manager confesses losses on YouTube (OptionSellers.com, November 2018)](https://www.thinkadvisor.com/2018/11/21/wiped-out-hedge-fund-manager-confesses-losses-on-youtube/)
- [FRED: CBOE Volatility Index (VIXCLS) and S&P 500 (SP500), the data behind the put-selling example](https://fred.stlouisfed.org/series/VIXCLS)
