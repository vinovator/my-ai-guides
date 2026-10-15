# Lesson 9: How Things Blow Up

*Six patterns behind fifty years of derivative disasters (the margin spiral, counterparty risk, dealer hedging flows, selling volatility, model risk and hidden concentration) and four questions that would have prevented most of them.*

---

## Disasters rhyme

A two-hundred-year-old merchant bank brought down by one trader in Singapore. A hedge fund with two Nobel laureates among its partners, rescued by fourteen banks. The world's largest insurer saved with $182 billion of public money. A family office that cost its banks more than $10 billion in a week. A generation of British pension funds that ran out of cash while their hedges worked perfectly.

The products differ: index futures, interest rate swaps, credit default swaps, total return swaps. The stories rhyme. Derivatives rarely blow up because someone misunderstood the product. They blow up when **leverage meets a cash squeeze, a hidden concentration or a feedback loop**, and the same six patterns repeat across fifty years of history.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Six cards summarising the six patterns behind derivative disasters, each with an example: 1. The margin spiral, Cash runs out before you are proved right: LTCM 1998; UK pensions 2022; 2. Counterparty risk, Your hedge is only as good as its writer: AIG 2008; Lehman 2008; 3. Dealer hedging flows, When the tail wags the dog: Portfolio insurance 1987; GameStop 2021; 4. Selling volatility, The steamroller arrives: Volmageddon 2018; OptionSellers 2018; 5. Model risk, Markets jump; correlations go to one: Swiss franc 2015; LTCM 1998; 6. Hidden concentration, One trader, one desk, one client: Barings 1995; Whale 2012; Archegos 2021." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Six patterns, fifty years of disasters</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Each pattern, its one-line summary, and episodes from Lessons 12 and 13</text>
<rect x="20" y="58" width="208" height="122" rx="8" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<rect x="20" y="58" width="4" height="122" rx="2" class="vf1" fill="#2a78d6"/>
<text x="34" y="82" font-size="12.5" fill="currentColor" font-weight="600">1. The margin spiral</text>
<text x="34" y="102" font-size="10.5" fill="currentColor" opacity="0.85">Cash runs out before</text>
<text x="34" y="116" font-size="10.5" fill="currentColor" opacity="0.85">you are proved right</text>
<text x="34" y="140" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="34" y="155" font-size="10" fill="currentColor" opacity="0.85">LTCM 1998;</text>
<text x="34" y="168" font-size="10" fill="currentColor" opacity="0.85">UK pensions 2022</text>
<rect x="240" y="58" width="208" height="122" rx="8" class="vf2" fill="#eb6834" fill-opacity="0.1"/>
<rect x="240" y="58" width="4" height="122" rx="2" class="vf2" fill="#eb6834"/>
<text x="254" y="82" font-size="12.5" fill="currentColor" font-weight="600">2. Counterparty risk</text>
<text x="254" y="102" font-size="10.5" fill="currentColor" opacity="0.85">Your hedge is only as</text>
<text x="254" y="116" font-size="10.5" fill="currentColor" opacity="0.85">good as its writer</text>
<text x="254" y="140" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="254" y="155" font-size="10" fill="currentColor" opacity="0.85">AIG 2008;</text>
<text x="254" y="168" font-size="10" fill="currentColor" opacity="0.85">Lehman 2008</text>
<rect x="460" y="58" width="208" height="122" rx="8" class="vf3" fill="#1baf7a" fill-opacity="0.1"/>
<rect x="460" y="58" width="4" height="122" rx="2" class="vf3" fill="#1baf7a"/>
<text x="474" y="82" font-size="12.5" fill="currentColor" font-weight="600">3. Dealer hedging flows</text>
<text x="474" y="102" font-size="10.5" fill="currentColor" opacity="0.85">When the tail</text>
<text x="474" y="116" font-size="10.5" fill="currentColor" opacity="0.85">wags the dog</text>
<text x="474" y="140" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="474" y="155" font-size="10" fill="currentColor" opacity="0.85">Portfolio insurance 1987;</text>
<text x="474" y="168" font-size="10" fill="currentColor" opacity="0.85">GameStop 2021</text>
<rect x="20" y="192" width="208" height="122" rx="8" class="vf4" fill="#eda100" fill-opacity="0.1"/>
<rect x="20" y="192" width="4" height="122" rx="2" class="vf4" fill="#eda100"/>
<text x="34" y="216" font-size="12.5" fill="currentColor" font-weight="600">4. Selling volatility</text>
<text x="34" y="236" font-size="10.5" fill="currentColor" opacity="0.85">The steamroller</text>
<text x="34" y="250" font-size="10.5" fill="currentColor" opacity="0.85">arrives</text>
<text x="34" y="274" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="34" y="289" font-size="10" fill="currentColor" opacity="0.85">Volmageddon 2018;</text>
<text x="34" y="302" font-size="10" fill="currentColor" opacity="0.85">OptionSellers 2018</text>
<rect x="240" y="192" width="208" height="122" rx="8" class="vf7" fill="#4a3aa7" fill-opacity="0.1"/>
<rect x="240" y="192" width="4" height="122" rx="2" class="vf7" fill="#4a3aa7"/>
<text x="254" y="216" font-size="12.5" fill="currentColor" font-weight="600">5. Model risk</text>
<text x="254" y="236" font-size="10.5" fill="currentColor" opacity="0.85">Markets jump;</text>
<text x="254" y="250" font-size="10.5" fill="currentColor" opacity="0.85">correlations go to one</text>
<text x="254" y="274" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="254" y="289" font-size="10" fill="currentColor" opacity="0.85">Swiss franc 2015;</text>
<text x="254" y="302" font-size="10" fill="currentColor" opacity="0.85">LTCM 1998</text>
<rect x="460" y="192" width="208" height="122" rx="8" class="vf5" fill="#e87ba4" fill-opacity="0.1"/>
<rect x="460" y="192" width="4" height="122" rx="2" class="vf5" fill="#e87ba4"/>
<text x="474" y="216" font-size="12.5" fill="currentColor" font-weight="600">6. Hidden concentration</text>
<text x="474" y="236" font-size="10.5" fill="currentColor" opacity="0.85">One trader, one desk,</text>
<text x="474" y="250" font-size="10.5" fill="currentColor" opacity="0.85">one client</text>
<text x="474" y="274" font-size="9.5" fill="currentColor" opacity="0.6">For example:</text>
<text x="474" y="289" font-size="10" fill="currentColor" opacity="0.85">Barings 1995; Whale 2012;</text>
<text x="474" y="302" font-size="10" fill="currentColor" opacity="0.85">Archegos 2021</text>
</svg>

Learn to spot these six and every episode in Lessons 12 and 13 will feel familiar, because it is.

---

## 1. The margin spiral: cash runs out before you are proved right

Prices fall, so margin calls arrive. To raise cash, holders sell whatever they can, which pushes prices down further and triggers more margin calls. The spiral feeds itself until someone with deep pockets, usually a central bank, steps in.

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

The loop on the left drove the collapse of the hedge fund LTCM in 1998, the 2022 UK pension crisis, in which collateral calls on interest rate swaps forced sales of gilts (Lesson 7 showed the arithmetic), and the 2022 European energy crunch. In that crunch, power and gas producers that had sold their future output forward faced such huge margin calls on their hedges, as wholesale prices soared, that governments stepped in with emergency lending. The UK opened a scheme in October 2022 to provide up to **£40 billion** of government-guaranteed credit so that otherwise healthy energy firms could keep meeting their margin calls.

Notice that in all three cases the positions were not foolish. The pension funds' hedges did exactly what they were designed to do; the energy producers were hedging physical output they really owned. What killed them was **timing**: the losses on the hedge arrived in cash, today, while the offsetting gains arrived later or not in cash at all.

---

## 2. Counterparty risk: your hedge is only as good as whoever wrote it

A hedge protects you only if the other side can pay. AIG, then the world's largest insurer, sold hundreds of billions of dollars of credit default swap protection on mortgage securities before 2008, through a small unit in London. It held almost no capital against the risk, because its models said the securities were safe. When the housing market turned, its credit rating was cut and its contracts required it to post collateral it did not have. The US government's rescue eventually reached about **$182 billion**, because the banks that had bought protection from AIG would otherwise have discovered, all at once, that they were not protected at all.

The nastiest version is **wrong-way risk**: when your counterparty is most likely to fail exactly when you need them to pay. Buying protection against a banking crisis from a bank, or protection against a country's default from that country's own banks, looks like a hedge in normal times and is worthless in the one scenario it was bought for. Clearing houses and collateral were the reforms' answer to counterparty risk; Lesson 8 showed both, and why they have their own pressure points.

---

## 3. Dealer hedging flows: when the tail wags the dog

Remember from Lesson 5 that dealers hedge options by trading the underlying, and must keep adjusting as delta changes. Whether that hedging calms or inflames a market depends on which side of the options the dealers are on.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Two illustrative price paths after the same shock. Left: when dealers are long gamma, having bought more options than they sold, their hedging sells into rises and buys into falls, so moves are damped and the price drifts back. Right: when dealers are short gamma, having sold more options than they bought, their hedging buys into rises and sells into falls, so the same shock is amplified into a much larger move." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Dealer hedging can calm a market or inflame it</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The same shock, with dealers on either side of the options market. Illustrative.</text>
<text x="20" y="66" font-size="12.5" fill="currentColor" font-weight="600">Dealers long gamma</text>
<text x="20" y="82" font-size="10.5" fill="currentColor" opacity="0.72">they sell rallies and buy dips</text>
<line x1="50" y1="222.5" x2="320" y2="222.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<text x="44" y="226.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.6">start</text>
<polyline points="50,222.5 74.5,219.2 99.1,207.8 123.6,219 148.2,219.3 172.7,218.4 197.3,223 221.8,224.8 246.4,220.7 270.9,220.4 295.5,224.7 320,224" class="vs1" stroke="#2a78d6" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="99.1" cy="207.8" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>The shock</title></circle>
<text x="105.1" y="199.8" font-size="10.5" fill="currentColor" font-weight="600">shock</text>
<text x="185" y="272" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">time</text>
<text x="360" y="66" font-size="12.5" fill="currentColor" font-weight="600">Dealers short gamma</text>
<text x="360" y="82" font-size="10.5" fill="currentColor" opacity="0.72">they buy rallies and sell dips</text>
<line x1="390" y1="222.5" x2="660" y2="222.5" stroke="currentColor" stroke-width="1" stroke-opacity="0.4"/>
<text x="384" y="226.5" font-size="10" fill="currentColor" text-anchor="end" opacity="0.6">start</text>
<polyline points="390,222.5 414.5,216 439.1,189.1 463.6,187.9 488.2,177.3 512.7,163.8 537.3,159.2 561.8,153.6 586.4,137.8 610.9,123.9 635.5,117.7 660,105.7" class="vs2" stroke="#eb6834" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="439.1" cy="189.1" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>The shock</title></circle>
<text x="445.1" y="181.1" font-size="10.5" fill="currentColor" font-weight="600">shock</text>
<text x="525" y="272" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.6">time</text>
<text x="20" y="292" font-size="10.5" fill="currentColor" opacity="0.7">When many dealers are short gamma, as with heavy retail call buying or same-day options, hedging adds fuel.</text>
</svg>

If dealers are **long gamma**, having bought more options than they sold, they hedge by selling as prices rise and buying as they fall, which damps every move. If they are **short gamma**, having sold more options than they bought, they must buy as prices rise and sell as they fall, which **amplifies** every move.

A **gamma squeeze** is the extreme case. Crowds buy call options, dealers buy shares to hedge, the price rises, the calls' deltas grow, and dealers must buy still more: the loop on the right of the figure above. How much this drove the 2021 meme-stock frenzy is still debated, but the mechanism is real, and it is one reason regulators watch the boom in options that expire on the day they are traded (Lesson 10). The ancestor of every such loop is **portfolio insurance**, the computer-driven strategy that sold index futures as prices fell and helped turn 19 October 1987 into the worst day in the Dow's history (Lesson 12).

---

## 4. Selling volatility: the steamroller arrives

Strategies that sell options, or bet on calm markets, earn small, steady income for months or years. Lesson 5 showed how a simple put-selling strategy made money in 111 months out of 120. Then a single shock wipes out the lot.

On **5 February 2018**, the VIX more than doubled in a day, from about 17 to 37. A popular exchange-traded note that paid investors the opposite of volatility's daily move, and so made money every calm day, lost more than **90% of its value** overnight and was shut down. Products like it had to buy volatility futures to rebalance after the jump, which pushed volatility higher still: the selling of insurance had become its own catastrophe (Lesson 13).

---

## 5. Model risk: markets jump, and correlations go to one

Pricing models assume prices move smoothly, so that a stop-loss order will sell close to its trigger and a hedge can be adjusted before losses grow. Real markets gap.

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

For three years from September 2011 the Swiss National Bank capped the franc's strength, promising to sell unlimited francs to stop it trading below 1.20 per euro, and the rate sat glued to the floor. Traders built leveraged positions on the assumption that it would stay there. On **15 January 2015**, the bank abandoned the cap without warning. The franc leapt so fast that, for a few minutes, there were almost no prices at all; stop-loss orders filled far below their triggers or not at all. Many retail currency traders lost more than their deposits, several brokers collapsed, and the episode is one reason UK and EU rules now cap retail losses at the money in the account (Lesson 10).

Models also assume that diversification holds. In a crisis, assets that normally move independently tend to fall together, as every leveraged investor sells whatever they can, so a portfolio that looked balanced turns out to be one big bet. Traders say that in a crisis **correlations go to one**. LTCM's dozens of supposedly unrelated trades all went wrong in the same weeks of 1998 for exactly this reason.

---

## 6. Hidden concentration: one trader, one desk, one client

The last pattern is the most human. Risk piles up where nobody is looking, because one person or one relationship controls both the position and the information about it.

- **Barings, 1995.** A single trader in Singapore, Nick Leeson, ran up **£827 million** of losses on Japanese index futures and options, hidden in a secret account, and destroyed Britain's oldest merchant bank. He controlled both the trading and the record-keeping.
- **The London Whale, 2012.** A JPMorgan unit meant to hedge the bank's risks built credit derivative positions so large that they moved the market, and lost about **$6.2 billion**.
- **Archegos, 2021.** A family office used total return swaps with several banks, none of which saw its full position, until a forced sale cost those banks more than **$10 billion** (Lesson 7 showed the structure).

In each case the controls existed on paper. What failed was the assumption that someone, somewhere, could see the whole picture.

---

## Four questions that would have prevented most disasters

> 1. **How much cash would I need on the worst plausible day, and where would it come from?**
> 2. **Who is on the other side, and can they pay when I need them to?**
> 3. **What happens if I cannot trade out at the price my model assumes?**
> 4. **Am I quietly selling insurance, collecting pennies in front of a steamroller?**

The first question would have saved LTCM, Metallgesellschaft, the UK pension funds and the energy producers. The second would have saved AIG's counterparties a great deal of fear. The third would have saved the Swiss franc traders. The fourth would have saved the volatility sellers of 2018. None of them requires advanced mathematics; all of them require asking before the storm rather than during it.

---

## Check yourself

**1. A gas producer has sold next winter's output forward on an exchange at £1 per therm. The price jumps to £3. Is the producer worse off? Why might it still face a crisis?**

<details>
<summary>Show the answer</summary>

Economically it is fine: it loses £2 a therm on the hedge but will sell its real gas for £2 more. But the hedge's loss is collected **now**, in variation margin, while the extra revenue arrives only when the gas is produced and sold next winter. If it cannot borrow the cash in between, it can fail despite being perfectly hedged. That is pattern 1, and it is why governments set up emergency credit schemes in 2022.

</details>

**2. Dealers have sold large numbers of call options on a share and are delta hedging. The share starts to rise. What do the dealers do, and what does it do to the share price?**

<details>
<summary>Show the answer</summary>

As the share rises, the calls' deltas rise, so the dealers must **buy more shares** to stay hedged. That buying pushes the price higher, raising deltas again: a **gamma squeeze**, pattern 3. If dealers had instead bought the options, they would be selling into the rise and damping it.

</details>

**3. A bank buys credit protection on a large European bank from another large European bank. What is the problem?**

<details>
<summary>Show the answer</summary>

**Wrong-way risk.** The scenario in which the first bank defaults, a European banking crisis, is exactly the scenario in which the protection seller is most likely to be in trouble too. The protection is weakest when it is needed most.

</details>

**4. Which pattern does each describe? (a) A fund sells options on a quiet index every month for years. (b) A trader controls both trades and their settlement. (c) A strategy depends on a currency staying above a central bank's floor.**

<details>
<summary>Show the answer</summary>

(a) **Selling volatility**, the steamroller. (b) **Hidden concentration** and weak controls, as at Barings. (c) **Model risk**: the strategy assumes the price cannot jump, which is exactly what it did in January 2015.

</details>

---

## What to carry into Lesson 10

- **The margin spiral**: losses are collected in cash today, gains may arrive later; sound hedges can still run out of cash.
- **Counterparty risk**, and its worst form, **wrong-way risk**.
- **Dealer hedging flows** damp markets when dealers are long gamma and amplify them when they are short; a **gamma squeeze** is the extreme.
- **Selling volatility** pays steadily until the steamroller arrives.
- **Model risk**: prices gap, stops fail, and in a crisis **correlations go to one**.
- **Hidden concentration**: one trader, desk or client, and nobody who sees the whole picture.
- Four questions, asked before the storm: **cash, counterparty, exit, and whether you are selling insurance**.

Lesson 10 turns from institutions to individuals, where the same patterns play out on phones, at the scale of millions of traders.

---

## Sources

- [Bank of England: Energy Markets Financing Scheme (October 2022)](https://www.bankofengland.co.uk/markets/energy-markets-financing-scheme)
- [US Treasury: final sale of AIG stock; the $182.3 billion commitment fully recovered (December 2012)](https://home.treasury.gov/news/press-releases/tg1805)
- [FRED: Swiss franc and euro exchange rates (DEXSZUS, DEXUSEU)](https://fred.stlouisfed.org/series/DEXSZUS)
- [FRED: CBOE Volatility Index (VIXCLS)](https://fred.stlouisfed.org/series/VIXCLS)
