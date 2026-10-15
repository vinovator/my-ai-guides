# Lesson 3: The Price Nobody Forecasts

*Why the fair price of a forward or an option comes from what it would cost to copy it, not from anyone's view of the future: carry and convergence, the currency forward, put-call parity, and a one-step tree that prices an option with nothing but arithmetic.*

---

## A hundred forecasts, one price

Ask a hundred economists where sterling will be against the dollar in a year's time and you will get a hundred different answers. Ask a bank for a one-year forward rate and you will get one number, quoted to four decimal places, within seconds. Every other bank will quote almost exactly the same number.

The bank is not cleverer than the economists. It is not forecasting at all. It is doing something much more reliable: working out what it would cost to **build the same promise out of things it can already buy and sell today**, and charging that. If it quoted anything else, someone would build the copy, sell it to the bank at the bank's own price, and walk away with a riskless profit.

That idea, called **no-arbitrage pricing**, is the single most important idea in derivatives. It explains why forward prices are not forecasts, why options on the same share must line up with each other, and why the one number in option pricing that nobody can look up is volatility. This lesson builds it from scratch, with arithmetic you can check on a phone.

> **The law of one price.** Two ways of ending up in exactly the same position, with no risk, must cost the same today. If they do not, buy the cheaper one, sell the dearer one, and keep the difference. Traders do this so quickly and in such size that the gap rarely lasts.

---

## The forward price is the cost of carry

Suppose a share costs **£100** today, you can borrow or lend at **4%** a year, and the share will pay a **£2 dividend** during the year. What is the fair price for a forward to buy the share in one year?

There are two ways to own the share in a year's time.

1. **Buy it now.** Borrow £100, buy the share, hold it. In a year you repay £104, but you have collected the £2 dividend along the way. Net cost: £102.
2. **Agree a forward now** to buy it in a year at the forward price, and pay nothing until then.

Both routes leave you holding the same share on the same day, with no risk taken along the way. So the forward price must be **£102**: the spot price plus the cost of financing it, minus the income the owner receives. This is the **cost of carry**.

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

Watch what happens if a dealer gets it wrong. At **£105**, you would borrow £100, buy the share and sell the forward at £105. A year later you deliver the share, receive £105, repay £104 and keep the £2 dividend: a **£3 profit with no risk at all**. At **£99**, you would run the trade backwards: borrow the share and sell it, lend out the £100, and agree to buy the share back at £99 through the forward. Either way the mispricing pays for itself, and traders would keep doing it until the price returned to £102.

For a commodity, carry includes storing and insuring the thing as well, which is why oil for delivery next year can cost more than oil today. The [commodity guide's forward curve lesson](?slug=commodity-markets&lesson=lesson-06-the-forward-curve) calls that **contango**, and explains why it has a ceiling but its opposite, backwardation, does not.

### A future is not a forecast

The same logic sets the price of a future. A one-year FTSE 100 future trades above the index when interest rates exceed the dividend yield, and below it when dividends are larger. The gap between the futures price and the spot price is called the **basis**, and it has nothing to do with whether anyone expects the market to rise.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Illustrative line chart of an index and its one-year future over the twelve months to expiry. The future moves in step with the index and stays above it by the cost of carry, interest minus dividends, of about 2% a year. The gap, called the basis, shrinks steadily as the time left shrinks, and is zero on the expiry date." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A future tracks the index plus carry, and the gap closes at expiry</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">An index and its future over the last twelve months of the contract. Illustrative.</text>
<line x1="80" y1="223" x2="600" y2="223" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="227" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">95</text>
<line x1="80" y1="178" x2="600" y2="178" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="182" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">100</text>
<line x1="80" y1="133" x2="600" y2="133" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="137" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">105</text>
<line x1="80" y1="88" x2="600" y2="88" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="92" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">110</text>
<polyline points="80,160 84.2,155.8 88.5,151.6 92.8,147.6 97,143.8 101.2,140.3 105.5,137.1 109.7,134.4 114,132 118.3,130 122.5,128.6 126.7,127.5 131,127 135.3,126.8 139.5,127 143.8,127.6 148,128.4 152.2,129.5 156.5,130.7 160.8,132 165,133.3 169.2,134.6 173.5,135.7 177.8,136.7 182,137.5 186.2,138 190.5,138.1 194.7,138 199,137.5 203.2,136.6 207.5,135.4 211.7,133.9 216,132.1 220.3,130.1 224.5,127.9 228.8,125.5 233,123.1 237.2,120.7 241.5,118.4 245.8,116.3 250,114.3 254.2,112.6 258.5,111.3 262.8,110.4 267,109.9 271.2,109.8 275.5,110.2 279.8,111.1 284,112.5 288.2,114.4 292.5,116.7 296.8,119.4 301,122.4 305.2,125.7 309.5,129.2 313.8,132.9 318,136.6 322.2,140.4 326.5,144 330.8,147.6 335,150.9 339.2,154 343.5,156.7 347.8,159.1 352,161.1 356.2,162.7 360.5,164 364.8,164.8 369,165.2 373.2,165.3 377.5,165.1 381.8,164.6 386,163.9 390.2,163 394.5,162.1 398.8,161.2 403,160.3 407.2,159.6 411.5,159 415.8,158.7 420,158.6 424.2,158.9 428.5,159.5 432.8,160.5 437,161.9 441.2,163.7 445.5,165.8 449.8,168.2 454,170.8 458.2,173.7 462.5,176.8 466.8,180 471,183.2 475.2,186.4 479.5,189.5 483.8,192.3 488,195 492.2,197.3 496.5,199.3 500.8,200.8 505,201.9 509.2,202.6 513.5,202.7 517.8,202.4 522,201.5 526.2,200.2 530.5,198.5 534.8,196.4 539,194 543.2,191.3 547.5,188.4 551.8,185.4 556,182.3 560.2,179.3 564.5,176.3 568.8,173.4 573,170.8 577.2,168.4 581.5,166.3 585.8,164.5 590,163.1" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="80,178 84.2,173.7 88.5,169.5 92.8,165.4 97,161.5 101.2,157.9 105.5,154.7 109.7,151.8 114,149.3 118.3,147.3 122.5,145.7 126.7,144.5 131,143.8 135.3,143.5 139.5,143.5 143.8,143.9 148,144.6 152.2,145.5 156.5,146.5 160.8,147.6 165,148.8 169.2,149.9 173.5,150.9 177.8,151.7 182,152.3 186.2,152.6 190.5,152.6 194.7,152.3 199,151.7 203.2,150.7 207.5,149.4 211.7,147.7 216,145.8 220.3,143.6 224.5,141.3 228.8,138.8 233,136.3 237.2,133.8 241.5,131.4 245.8,129.1 250,127 254.2,125.2 258.5,123.7 262.8,122.6 267,122 271.2,121.8 275.5,122 279.8,122.8 284,124 288.2,125.7 292.5,127.8 296.8,130.3 301,133.1 305.2,136.2 309.5,139.5 313.8,143 318,146.6 322.2,150.1 326.5,153.6 330.8,156.9 335,160.1 339.2,163 343.5,165.5 347.8,167.8 352,169.6 356.2,171.1 360.5,172.1 364.8,172.8 369,173 373.2,173 377.5,172.6 381.8,172 386,171.1 390.2,170.1 394.5,169.1 398.8,168 403,167 407.2,166.1 411.5,165.4 415.8,164.9 420,164.7 424.2,164.9 428.5,165.3 432.8,166.2 437,167.4 441.2,169 445.5,170.9 449.8,173.1 454,175.7 458.2,178.4 462.5,181.3 466.8,184.3 471,187.4 475.2,190.4 479.5,193.3 483.8,196 488,198.5 492.2,200.7 496.5,202.5 500.8,203.9 505,204.8 509.2,205.3 513.5,205.3 517.8,204.8 522,203.9 526.2,202.4 530.5,200.6 534.8,198.3 539,195.8 543.2,192.9 547.5,189.9 551.8,186.8 556,183.5 560.2,180.3 564.5,177.2 568.8,174.2 573,171.4 577.2,168.8 581.5,166.6 585.8,164.7 590,163.1" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="80" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">12 months</text>
<text x="207.5" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">9 months</text>
<text x="335" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">6 months</text>
<text x="462.5" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">3 months</text>
<text x="590" y="268" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">expiry</text>
<line x1="590" y1="64" x2="590" y2="252" stroke="currentColor" stroke-width="1" stroke-opacity="0.35"/>
<circle cx="590" cy="163.1" r="5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>At expiry the future equals the index</title></circle>
<line x1="88" y1="160" x2="88" y2="178" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.6"/>
<text x="94" y="196" font-size="11" fill="currentColor" opacity="0.85">basis: about 2% a year out</text>
<line x1="100" y1="288" x2="118" y2="288" class="vs1" stroke="#2a78d6" stroke-width="2.5" stroke-linecap="round"/>
<text x="124" y="292" font-size="11.5" fill="currentColor" opacity="0.85">One-year future</text>
<line x1="230.2" y1="288" x2="248.2" y2="288" class="vs2" stroke="#eb6834" stroke-width="2.5" stroke-linecap="round"/>
<text x="254.2" y="292" font-size="11.5" fill="currentColor" opacity="0.85">The index (spot)</text>
</svg>

As time passes there is less carry left to pay for, so the basis shrinks, and on the expiry date it is zero: a future that is about to expire must equal the price of the thing it delivers, or traders would buy one and deliver against the other. If you read a futures price as the market's prediction, you will be fooled every time interest rates and dividends differ, which is nearly always.

---

## Currency forwards: interest rates in disguise

The same reasoning explains the puzzle in the opening of this lesson. Suppose sterling is at **$1.30**, UK one-year interest rates are **4%** and US rates are **3%**. What should a one-year forward be?

Start with £1 million and look for two riskless ways to end up with dollars in a year.

<svg viewBox="0 0 680 344" width="100%" role="img" aria-label="Diagram of covered interest parity. Start with £1 million today. Route one: convert at the spot rate of $1.30 into $1,300,000, deposit it at the US rate of 3% and hold $1,339,000 in a year. Route two: deposit the pounds at the UK rate of 4%, hold £1,040,000 in a year, and agree today to convert at the forward rate. Both routes are riskless, so they must end in the same place, which requires a forward rate of $1,339,000 divided by £1,040,000, or $1.2875 per pound." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Two riskless routes must arrive at the same place</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Why a one-year sterling forward is about $1.2875 when spot is $1.30. UK rate 4%, US rate 3%.</text>
<rect x="30" y="74" width="220" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="140" y="102" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">Pounds today</text>
<text x="140" y="126" font-size="16" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£1,000,000</text>
<rect x="430" y="74" width="220" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf2" fill="#eb6834" fill-opacity="0.08"/>
<text x="540" y="102" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">Dollars today</text>
<text x="540" y="126" font-size="16" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$1,300,000</text>
<rect x="30" y="220" width="220" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="140" y="248" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">Pounds in a year</text>
<text x="140" y="272" font-size="16" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£1,040,000</text>
<rect x="430" y="220" width="220" height="70" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf2" fill="#eb6834" fill-opacity="0.08"/>
<text x="540" y="248" font-size="12" fill="currentColor" text-anchor="middle" opacity="0.75">Dollars in a year</text>
<text x="540" y="272" font-size="16" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">$1,339,000</text>
<line x1="252" y1="109" x2="428" y2="109" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.7"/>
<polygon points="428,109 421.6,111.9 421.6,106.1" fill="currentColor" fill-opacity="0.7"/>
<text x="340" y="100" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">convert at spot, $1.30</text>
<line x1="540" y1="146" x2="540" y2="218" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.7"/>
<polygon points="540,218 537.1,211.6 542.9,211.6" fill="currentColor" fill-opacity="0.7"/>
<text x="552" y="186" font-size="11" fill="currentColor" opacity="0.85">earn 3%</text>
<line x1="140" y1="146" x2="140" y2="218" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.7"/>
<polygon points="140,218 137.1,211.6 142.9,211.6" fill="currentColor" fill-opacity="0.7"/>
<text x="152" y="186" font-size="11" fill="currentColor" opacity="0.85">earn 4%</text>
<line x1="252" y1="255" x2="428" y2="255" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="428,255 421.6,257.9 421.6,252.1" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="340" y="246" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">convert at the forward rate</text>
<text x="340" y="312" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">Forward rate: $1,339,000 ÷ £1,040,000 = $1.2875 per pound</text>
<text x="340" y="334" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">The higher-interest currency trades at a forward discount. That is arithmetic, not a forecast.</text>
</svg>

Convert today and deposit the dollars at 3%, and you end with **$1,339,000**. Deposit the pounds at 4% instead and you end with **£1,040,000**, which you can agree today to convert at the forward rate. Since both routes are riskless and start from the same place, they must end in the same place, so the forward rate must be $1,339,000 ÷ £1,040,000 = **$1.2875**. If a bank quoted $1.30 for the forward, you could borrow dollars, convert them, earn the higher sterling rate, sell the pounds forward at $1.30 and lock in a profit. This relationship is called **covered interest parity**.

Notice what it says. The forward rate shows sterling *weaker* than today, not because anyone expects the pound to fall, but because pounds earn more interest. The higher-interest currency always trades at a forward discount. Read a forward rate as a forecast and you will think the market is bearish on every high-interest currency in the world.

---

## Put-call parity: the options must line up

Lesson 2 showed that buying a call and selling a put with the same strike and expiry gives exactly the payoff of a forward at that strike. Now the law of one price turns that into a price.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Three payoff diagrams at expiry, all with a strike of £105. Buying a call pays nothing below £105 and gains one for one above it. Selling a put loses one for one below £105 and nothing above it. Together they pay the share price minus £105 everywhere: exactly a forward at £105. So the call minus the put must cost what that forward is worth today, the share price minus the present value of £105: £3.00 minus £6.96 equals £100 minus £103.96." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A call bought plus a put sold is a forward</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Payoffs at expiry, all with a £105 strike, for one share. Prices from the running example.</text>
<text x="20" y="66" font-size="12" fill="currentColor" font-weight="600">Buy the £105 call</text>
<line x1="42" y1="162" x2="216" y2="162" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<line x1="129" y1="234.4" x2="129" y2="89.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="129" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£105</text>
<text x="42" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£80</text>
<text x="216" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£130</text>
<polyline points="42,162 129,162 216,92.4" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="20" y="276" font-size="11.5" fill="currentColor" font-weight="600">costs £3.00</text>
<text x="232" y="166" font-size="20" fill="currentColor" text-anchor="middle" opacity="0.6">+</text>
<text x="240" y="66" font-size="12" fill="currentColor" font-weight="600">Sell the £105 put</text>
<line x1="262" y1="162" x2="436" y2="162" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<line x1="349" y1="234.4" x2="349" y2="89.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="349" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£105</text>
<text x="262" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£80</text>
<text x="436" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£130</text>
<polyline points="262,231.6 349,162 436,162" class="vs2" stroke="#eb6834" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="240" y="276" font-size="11.5" fill="currentColor" font-weight="600">receive £6.96</text>
<text x="452" y="166" font-size="20" fill="currentColor" text-anchor="middle" opacity="0.6">=</text>
<text x="460" y="66" font-size="12" fill="currentColor" font-weight="600">Together: a forward at £105</text>
<line x1="482" y1="162" x2="656" y2="162" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<line x1="569" y1="234.4" x2="569" y2="89.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
<text x="569" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£105</text>
<text x="482" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£80</text>
<text x="656" y="256" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">£130</text>
<polyline points="482,231.6 569,162 656,92.4" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="460" y="276" font-size="11.5" fill="currentColor" font-weight="600">net: you receive £3.96</text>
<text x="20" y="294" font-size="11" fill="currentColor" opacity="0.75">Put-call parity: £3.00 − £6.96 = £100 − £103.96 (the share price minus £105 discounted for three months)</text>
</svg>

Take the call we will use throughout the next two lessons: a three-month option to buy a share now at **£100** for **£105**, which costs **£3.00**. A forward to buy the share at £105 in three months is worth the share price minus today's value of the £105 you will pay, which with 4% interest is £100 − £103.96 = **−£3.96**: it has negative value, because £105 is above the fair forward price, so you would want to be paid £3.96 to sign it.

Since a call bought and a put sold *is* that forward, the call minus the put must also be worth −£3.96. With the call at £3.00, the **£105 put must cost £6.96**. Not roughly; exactly, to the penny. If it traded at £8, you would sell the put and buy the call, which together commit you to buying the share at £105, and sell the share today for £100. You have collected £105; set aside £103.96 to pay the £105 in three months, and £1.04 is left over with no risk at all. This is **put-call parity**, and it is why a market maker who quotes one option has, in effect, quoted all the others with the same strike.

---

## Pricing an option by building a copy of it

Forwards were easy to copy because their payoff is a straight line. Options bend, so it is not obvious that you can copy one. In 1973 Fischer Black, Myron Scholes and Robert Merton showed that you can, and the idea fits into a single step.

Imagine a share at **£100** that in one year will be worth either **£120** or **£80**: nothing else can happen. Interest is **5%**. A call option with a **£100** strike will therefore pay **£20** if the share goes up and **nothing** if it goes down. What is that call worth today?

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

Try building a portfolio that pays exactly the same. Buy **half a share** for £50, and borrow **£38.10**, which with interest becomes £40.00 to repay in a year.

- If the share rises to £120, your half share is worth £60. Repay £40 and you are left with **£20**: exactly what the call pays.
- If the share falls to £80, your half share is worth £40. Repay £40 and you are left with **nothing**: exactly what the call pays.

The copy behaves exactly like the call in every possible future, so it must cost the same today. The copy costs £50 − £38.10 = **£11.90**, so that is the price of the call. If the call traded at £13, you would sell it and build the copy for £11.90, keeping £1.10 whatever happens. At £11, you would buy it and sell the copy.

### The probability that is not there

Now notice what was never needed: anyone's view of whether the share will go up. Whether you think the rise is 90% likely or 10% likely, the call is worth £11.90, because you can build it for £11.90 either way.

This feels wrong at first. Surely a call is worth more if the share is likely to rise? The resolution is that the share price already contains everybody's view of its prospects. If investors thought the rise was 90% likely, the share would not cost £100 today. The option is priced *relative to the share*, so the share's price does the forecasting, and the option inherits it.

Mathematicians formalise this with a convenient fiction: the price is what you would get by pretending that the share earns exactly the risk-free rate, and weighting the outcomes accordingly. In our tree, that means pretending the up move has a 62.5% chance, because 62.5% of £120 plus 37.5% of £80 is £105, which is £100 grown at 5%. Then 62.5% × £20 = £12.50, discounted at 5% to today, is **£11.90** again. Those 62.5% "odds" are not anyone's forecast; they are a calculating device, called **risk-neutral probabilities**, and you will see them again in Lessons 4 and 5.

### The one thing that does matter: the spread of outcomes

If the probabilities do not matter, what does? Keep everything the same, but change how far the share might move.

<svg viewBox="0 0 680 290" width="100%" role="img" aria-label="Bar chart of the value of the same call option, struck at £100 on a £100 share with 5% interest, as the spread of possible prices in a year widens. If the share can end £10 either side of £100, the call is worth £7.14; £20 either side, £11.90; £30 either side, £16.67; £40 either side, £21.43. Nothing else changed: wider uncertainty alone makes the option more valuable." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">More uncertainty, more valuable option</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The same £100 call on a £100 share, as the range of outcomes in a year widens. 5% interest.</text>
<line x1="90" y1="240" x2="610" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="82" y="244" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£0</text>
<line x1="90" y1="206" x2="610" y2="206" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="210" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£5</text>
<line x1="90" y1="172" x2="610" y2="172" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="176" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£10</text>
<line x1="90" y1="138" x2="610" y2="138" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="142" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£15</text>
<line x1="90" y1="104" x2="610" y2="104" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="108" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£20</text>
<line x1="90" y1="70" x2="610" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">£25</text>
<path d="M121,240 L121,194.4 Q121,191.4 124,191.4 L186,191.4 Q189,191.4 189,194.4 L189,240 Z" class="vf1" fill="#2a78d6"><title>Share ends at £110 or £90: call worth £7.14</title></path>
<text x="155" y="183.4" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£7.14</text>
<text x="155" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">£90 or £110</text>
<path d="M251,240 L251,162 Q251,159 254,159 L316,159 Q319,159 319,162 L319,240 Z" class="vf1" fill="#2a78d6"><title>Share ends at £120 or £80: call worth £11.90</title></path>
<text x="285" y="151" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£11.90</text>
<text x="285" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">£80 or £120</text>
<path d="M381,240 L381,129.7 Q381,126.7 384,126.7 L446,126.7 Q449,126.7 449,129.7 L449,240 Z" class="vf1" fill="#2a78d6"><title>Share ends at £130 or £70: call worth £16.67</title></path>
<text x="415" y="118.7" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£16.67</text>
<text x="415" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">£70 or £130</text>
<path d="M511,240 L511,97.3 Q511,94.3 514,94.3 L576,94.3 Q579,94.3 579,97.3 L579,240 Z" class="vf1" fill="#2a78d6"><title>Share ends at £140 or £60: call worth £21.43</title></path>
<text x="545" y="86.3" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600" style="font-variant-numeric:tabular-nums">£21.43</text>
<text x="545" y="258" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">£60 or £140</text>
<text x="350" y="280" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">Where the share can end up in a year</text>
</svg>

If the share can only end at £90 or £110, the same call is worth **£7.14**. If it can end at £60 or £140, it is worth **£21.43**. Nothing changed except the **width of the possible outcomes**. An option's owner benefits from big moves in one direction and is protected from big moves in the other, so the more the share might move, the more the option is worth.

That is the whole secret of option pricing. Real share prices do not jump to one of two values; they wander. But a one-year period can be cut into twelve monthly steps, or 365 daily ones, each a tiny tree, and the copying argument works step by step, adjusting the number of shares held as the price moves. As the steps get smaller, the answer settles on a formula: the **Black-Scholes formula**. It needs six inputs: the share price, the strike, the time to expiry, the interest rate, the expected dividends, and the **volatility**, a measure of how widely the share's price tends to swing.

Five of the six inputs you can look up on a screen. Volatility you cannot. That is why, as Lesson 4 shows, option traders talk about prices in terms of volatility, and why an option's price is really a price for uncertainty.

<details>
<summary>For the curious: the Black-Scholes formula, and where £3.00 comes from</summary>

For a call on a share that pays no dividend, the formula is

C = S × N(d<sub>1</sub>) − K × e<sup>−rT</sup> × N(d<sub>2</sub>)

where S is the share price, K the strike, T the time to expiry in years, r the interest rate, σ the volatility, and

d<sub>1</sub> = [ln(S ÷ K) + (r + σ²/2) × T] ÷ (σ × √T), and d<sub>2</sub> = d<sub>1</sub> − σ × √T.

N(·) is the cumulative normal distribution, the function behind every bell curve, available in any spreadsheet as NORM.S.DIST(x, TRUE).

Read it as the copying recipe. N(d<sub>1</sub>) is the number of shares in the copy, and K × e<sup>−rT</sup> × N(d<sub>2</sub>) is the amount borrowed. For the running example, S = 100, K = 105, T = 0.25, r = 0.04 and σ = 0.232:

- d<sub>1</sub> = −0.276 and d<sub>2</sub> = −0.392
- N(d<sub>1</sub>) = 0.391 and N(d<sub>2</sub>) = 0.347
- C = 100 × 0.391 − 105 × e<sup>−0.01</sup> × 0.347 = 39.11 − 36.11 = **£3.00**

So the copy of our call holds 0.39 of a share and borrows about £36. Put-call parity then gives the put: P = C − S + K × e<sup>−rT</sup> = 3.00 − 100 + 103.96 = **£6.96**.

</details>

---

## Check yourself

**1. A share costs £50, pays no dividend, and you can borrow or lend at 6% a year (simple interest). What is the fair one-year forward price? If a dealer quotes £55, what do you do and how much do you make?**

<details>
<summary>Show the answer</summary>

Fair forward = £50 × 1.06 = **£53**. At £55 the forward is too dear, so borrow £50, buy the share, and sell the forward at £55. In a year, deliver the share for £55 and repay £53: a riskless **£2** per share.

</details>

**2. Sterling is at $1.30. UK one-year rates are 3% and US rates are 5%. What is the one-year forward rate? Does it mean the market expects sterling to rise?**

<details>
<summary>Show the answer</summary>

$1.30 × 1.05 ÷ 1.03 = **$1.3252**. Sterling trades at a forward premium because dollars now earn more interest, not because anyone expects the pound to rise. A forward rate is arithmetic, not a forecast.

</details>

**3. A share at £100 will be worth £130 or £90 in a year, and interest is zero. What is a call with a £100 strike worth? Check your answer with the risk-neutral probability.**

<details>
<summary>Show the answer</summary>

The call pays £30 or nothing. Copy it with 30 ÷ (130 − 90) = **0.75 of a share**, costing £75, and borrow 0.75 × £90 = £67.50 (repaid from the down-state value, £67.50, leaving nothing). Cost of the copy: £75 − £67.50 = **£7.50**. Check: with no interest the risk-neutral up probability is (100 − 90) ÷ (130 − 90) = 25%, and 25% × £30 = **£7.50**.

</details>

**4. A three-month call with a £100 strike costs £4.00. The share is at £100, and £100 paid in three months is worth £99.00 today. What must the £100 put cost?**

<details>
<summary>Show the answer</summary>

Put-call parity: C − P = S − present value of K, so P = C − S + PV(K) = £4.00 − £100 + £99.00 = **£3.00**. If it traded at £3.50 you would sell the put, buy the call and sell the share, locking in £0.50.

</details>

---

## What to carry into Lesson 4

- **No-arbitrage pricing**: two riskless routes to the same place must cost the same, and traders enforce it.
- A forward or futures price is the **spot price plus the cost of carry** (interest, plus storage, minus income), not a forecast. The **basis** shrinks to zero at expiry.
- A currency forward is set by **interest rates**: the higher-interest currency trades at a forward discount.
- **Put-call parity** ties calls, puts and forwards together: with the £105 call at £3.00, the £105 put must be £6.96.
- An option can be priced by **building a copy** of it from the share and borrowing. The real-world odds drop out; what matters is **how widely the price might move**.
- Of the six inputs to an option price, only **volatility** cannot be looked up.

Lesson 4 takes the running example, a three-month £105 call costing £3, and follows it through every way an option can win, lose and change in value.

---

## Sources

- [Black and Scholes (1973), The Pricing of Options and Corporate Liabilities, Journal of Political Economy (JSTOR)](https://www.jstor.org/stable/1831029)
- [Cox, Ross and Rubinstein (1979), Option pricing: a simplified approach, Journal of Financial Economics](https://doi.org/10.1016/0304-405X%2879%2990015-1)
- [Nobel Prize: the 1997 prize in economic sciences, awarded to Robert Merton and Myron Scholes](https://www.nobelprize.org/prizes/economic-sciences/1997/press-release/)
