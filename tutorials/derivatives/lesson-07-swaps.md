# Lesson 7: Swaps: Trading One Stream of Cash for Another

*The interest rate swap worked through to the last pound, why a swap's value swings when rates move and how that emptied UK pension funds' cash in 2022, caps as the insurance alternative, currency and FX swaps, credit default swaps and the credit triangle, and the total return swap behind Archegos.*

---

## The biggest market you never see

There are no screens of swap prices in shop windows, no swap index on the evening news, and almost no individual investor has ever traded one. Yet interest rate swaps are the largest financial market on earth, with **$545 trillion** of notional outstanding at the end of 2025, and they touch your life more directly than most shares do. The rate on a British fixed-rate mortgage is set off the swap market. So is the cost of a company's loan, the size of an annuity, and the safety of a defined benefit pension.

A swap is simple to describe: two parties agree to exchange one stream of payments for another, for a set period, on a notional amount that never changes hands. This lesson takes the four main kinds in turn, starting with the one that matters most.

---

## The interest rate swap, worked through

A UK company has borrowed **£50 million for five years** at a floating rate of **SONIA plus 2%**. SONIA, the Sterling Overnight Index Average, is the benchmark rate that replaced LIBOR for sterling (Lesson 11 explains why). Each year the company's interest bill depends on where SONIA has been, and its finance director lies awake worrying that rates will rise. So the company agrees a five-year swap with its bank: it **pays a fixed 3.8%** on £50 million and **receives SONIA**.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Diagram of an interest rate swap. A UK company has borrowed £50 million from lenders at a floating rate of SONIA plus 2%. It agrees a swap with a bank: it pays the bank a fixed 3.8% and receives SONIA. The SONIA it receives from the bank matches the SONIA it pays its lenders, so movements in SONIA cancel out and its net cost is fixed at 2% plus 3.8%, or 5.8% a year." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The swap turns a floating-rate loan into a fixed 5.8% cost</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Who pays whom each year on £50 million; arrows point to the receiver. Illustrative rates.</text>
<rect x="20" y="66" width="168" height="76" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="34" y="92" font-size="13.5" fill="currentColor" font-weight="600">Lenders</text>
<text x="34" y="112" font-size="11" fill="currentColor" opacity="0.75">lent £50m at a</text>
<text x="34" y="127" font-size="11" fill="currentColor" opacity="0.75">floating rate</text>
<rect x="256" y="66" width="168" height="76" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="270" y="92" font-size="13.5" fill="currentColor" font-weight="600">UK company</text>
<text x="270" y="112" font-size="11" fill="currentColor" opacity="0.75">wants a predictable</text>
<text x="270" y="127" font-size="11" fill="currentColor" opacity="0.75">interest cost</text>
<rect x="492" y="66" width="168" height="76" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="506" y="92" font-size="13.5" fill="currentColor" font-weight="600">Bank</text>
<text x="506" y="112" font-size="11" fill="currentColor" opacity="0.75">swap dealer; hedges</text>
<text x="506" y="127" font-size="11" fill="currentColor" opacity="0.75">the risk elsewhere</text>
<line x1="254" y1="104" x2="190" y2="104" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="190,104 196.4,101.1 196.4,106.9" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="222" y="96" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">SONIA + 2%</text>
<line x1="426" y1="90" x2="490" y2="90" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="490,90 483.6,92.9 483.6,87.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="458" y="82" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">fixed 3.8%</text>
<line x1="490" y1="120" x2="426" y2="120" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="426,120 432.4,117.1 432.4,122.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="458" y="136" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">SONIA</text>
<line x1="340" y1="144" x2="340" y2="176" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.5"/>
<polygon points="340,176 337.1,169.6 342.9,169.6" fill="currentColor" fill-opacity="0.5"/>
<rect x="20" y="180" width="640" height="84" rx="8" class="vf1 vs1" fill="#2a78d6" stroke="#2a78d6" stroke-width="1.2" fill-opacity="0.08"/>
<text x="36" y="206" font-size="13.5" fill="currentColor" font-weight="600">Net cost to the company: 2% + 3.8% = 5.8% a year, fixed</text>
<text x="36" y="228" font-size="11.5" fill="currentColor" opacity="0.85">The SONIA it pays its lenders is matched by the SONIA it receives from the bank,</text>
<text x="36" y="246" font-size="11.5" fill="currentColor" opacity="0.85">so movements in SONIA cancel out. Only the net difference changes hands each period.</text>
<text x="20" y="290" font-size="10.5" fill="currentColor" opacity="0.6">Orange arrows: money the company pays. Blue: money it receives.</text>
</svg>

The company still pays its lenders SONIA plus 2%. But it receives SONIA from the bank, which cancels the SONIA it pays the lenders, and it pays the bank a fixed 3.8%. What is left is the 2% margin plus the 3.8% fixed rate: **5.8% a year, whatever SONIA does**.

| If SONIA averages | Loan interest (SONIA + 2%) | Swap: pay 3.8%, receive SONIA | Total annual cost |
| --- | ---: | --- | ---: |
| 3% | £2.5 million | Company pays a net £400,000 | £2.9 million, or 5.8% |
| 5% | £3.5 million | Company receives a net £600,000 | £2.9 million, or 5.8% |

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart of the company's total annual interest cost on £50 million against the average SONIA rate, from 1% to 7%. Unhedged, the cost is SONIA plus 2%, rising from 3% to 9%. With the swap it is a flat 5.8% whatever SONIA does: with SONIA at 3% the company pays a net £400,000 on the swap and its total cost is £2.9 million; with SONIA at 5% it receives £600,000 and its total cost is still £2.9 million." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Whatever SONIA does, the cost stays at 5.8%</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Total annual interest cost on £50 million, as a percentage, against the average SONIA rate</text>
<line x1="90" y1="270" x2="600" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">2%</text>
<line x1="90" y1="220" x2="600" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="224" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">4%</text>
<line x1="90" y1="170" x2="600" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">6%</text>
<line x1="90" y1="120" x2="600" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">8%</text>
<line x1="90" y1="70" x2="600" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">10%</text>
<text x="90" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1%</text>
<text x="175" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2%</text>
<text x="260" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">3%</text>
<text x="345" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">4%</text>
<text x="430" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">5%</text>
<text x="515" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">6%</text>
<text x="600" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">7%</text>
<text x="345" y="308" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">average SONIA over the year</text>
<line x1="90" y1="245" x2="600" y2="95" class="vs2" stroke="#eb6834" stroke-width="2.2"/>
<line x1="90" y1="175" x2="600" y2="175" class="vs1" stroke="#2a78d6" stroke-width="2.4"/>
<text x="608" y="99" font-size="11.5" fill="currentColor" font-weight="600">unhedged</text>
<text x="608" y="179" font-size="11.5" fill="currentColor" font-weight="600">swapped</text>
<line x1="260" y1="195" x2="260" y2="175" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.6"/>
<circle cx="260" cy="195" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>SONIA 3%: unhedged cost 5%</title></circle>
<circle cx="260" cy="175" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>SONIA 3%: swapped cost 5.8%, £2.9m</title></circle>
<text x="252" y="189" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">pay a net £400k on the swap</text>
<line x1="430" y1="145" x2="430" y2="175" stroke="currentColor" stroke-width="1.3" stroke-opacity="0.6"/>
<circle cx="430" cy="145" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>SONIA 5%: unhedged cost 7%</title></circle>
<circle cx="430" cy="175" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"><title>SONIA 5%: swapped cost 5.8%, £2.9m</title></circle>
<text x="438" y="164" font-size="10.5" fill="currentColor" opacity="0.85">receive a net £600k</text>
</svg>

Only the **net difference** changes hands each period, which is why notional figures overstate the money at risk: on £50 million, the net payment is a few hundred thousand pounds a year. The bank, in turn, hedges by doing the opposite swap with someone who wants to receive fixed, or by trading interest rate futures, and keeps a small spread for standing in the middle.

Swaps are everywhere in finance. Lenders hedge fixed-rate mortgages with them: when you lock in a five-year fix, your lender pays fixed on a swap to turn your fixed payments back into the floating rate it funds itself at. Pension funds and insurers use swaps to match their long-dated promises. Banks use them to manage the gap between fixed-rate loans and floating-rate deposits. And both the 2022 UK pension crisis and the 2023 collapse of Silicon Valley Bank were, at heart, stories about this one instrument: one about swaps that were held, the other about swaps that were not.

---

## What a swap is worth when rates move

On the day it is signed, a swap at the market rate is worth nothing to either side: that is how the fixed rate is chosen (Lesson 2 showed it is a bundle of forwards whose values balance out). The next day, rates move, and it is worth something to one side and costs the other.

Suppose that a week after signing, five-year swap rates jump from 3.8% to **4.8%**. The company is now paying 3.8% for something the market would charge 4.8% for. That one percentage point a year, on £50 million for five years and discounted to today, is worth about **£2.2 million** to the company. Its swap has become an asset; the bank's side has become a liability of the same size.

Professionals measure this sensitivity as **DV01**: the change in value for a one-basis-point move in rates (a basis point is 0.01 percentage points). The company's swap has a DV01 of about **£22,000**. The longer the swap, the more future payments are affected by each basis point, so the larger the DV01.

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

That steepness is the key to one of the most important episodes in this guide. UK defined benefit pension funds promise to pay pensions for decades. When long-term interest rates fall, the value of those promises rises, so the funds hedge by **receiving fixed** on long swaps, which gain value when rates fall. On £100 million of 30-year swaps, each basis point is worth about **£173,000**. And because swaps are collateralised, every move is settled in cash or gilts, just like a futures margin account.

In September 2022 the UK government's mini-budget sent long gilt yields soaring by more than a percentage point within days. A rise of 1.5 points knocks about **£22 million** off every £100 million of 30-year receive-fixed swaps, and the funds had to hand over that much collateral, immediately. Many held their spare cash in gilts, so they sold gilts to raise it, pushing yields higher still and triggering the next round of collateral calls, until the Bank of England stepped in to buy. Lesson 13 tells the story; the [bond guide](?slug=global-bond-markets&lesson=lesson-06-eight-headlines-eight-lessons) tells it from the gilt market's side. The point here is the mechanism: **the hedge was working exactly as designed, and that is what drained the cash**.

<details>
<summary>For the curious: valuing a swap after rates move</summary>

With a flat curve, the value of a swap to the fixed-rate payer is approximately

(new swap rate − old fixed rate) × annuity factor × notional

where the annuity factor is the sum of the discount factors for each payment date: the present value of £1 a year for the swap's remaining life. At 4%, a five-year annuity factor is about 4.45 and a thirty-year one about 17.3, which is why the thirty-year swap is almost four times as sensitive. DV01 is just notional × annuity factor × 0.0001: for £100 million over thirty years, about £173,000 per basis point.

</details>

---

## Caps: insurance instead of a fixed price

The swap gave the company certainty, but at a cost Lesson 2 warned about: if SONIA falls, the company is stuck at 5.8% while unhedged rivals pay less. There is another way, and it reprises the difference between a forward and an option.

An **interest rate cap** is a series of options that pay out whenever the floating rate goes above a ceiling, called the strike. The borrower pays an upfront premium and keeps the floating rate below the strike.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart comparing three ways to manage a £50 million floating-rate loan at SONIA plus 2%, showing the annual cost against the average SONIA rate. Unhedged: SONIA plus 2%. Swapped: a flat 5.8%. Capped at 4% SONIA: the company pays an upfront premium of about £1.1 million, about 0.45% a year over five years, then pays SONIA plus 2% plus that premium, but never more than 6% plus the premium. The cap costs more than the swap if rates rise and less if they fall." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A cap is insurance; a swap is a fixed price</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Annual cost of a £50m loan at SONIA + 2%, against average SONIA. Cap premium priced for illustration.</text>
<line x1="90" y1="270" x2="520" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">2%</text>
<line x1="90" y1="220" x2="520" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="224" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">4%</text>
<line x1="90" y1="170" x2="520" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">6%</text>
<line x1="90" y1="120" x2="520" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">8%</text>
<line x1="90" y1="70" x2="520" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">10%</text>
<text x="90" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">1%</text>
<text x="161.7" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2%</text>
<text x="233.3" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">3%</text>
<text x="305" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">4%</text>
<text x="376.7" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">5%</text>
<text x="448.3" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">6%</text>
<text x="520" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">7%</text>
<text x="305" y="306" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">average SONIA over the year</text>
<line x1="90" y1="245" x2="520" y2="95" class="vs2" stroke="#eb6834" stroke-width="2"/>
<line x1="90" y1="175" x2="520" y2="175" class="vs1" stroke="#2a78d6" stroke-width="2.2"/>
<polyline points="90,233.7 97.2,231.2 104.3,228.7 111.5,226.2 118.7,223.7 125.8,221.2 133,218.7 140.2,216.2 147.3,213.7 154.5,211.2 161.7,208.7 168.8,206.2 176,203.7 183.2,201.2 190.3,198.7 197.5,196.2 204.7,193.7 211.8,191.2 219,188.7 226.2,186.2 233.3,183.7 240.5,181.2 247.7,178.7 254.8,176.2 262,173.7 269.2,171.2 276.3,168.7 283.5,166.2 290.7,163.7 297.8,161.2 305,158.7 312.2,158.7 319.3,158.7 326.5,158.7 333.7,158.7 340.8,158.7 348,158.7 355.2,158.7 362.3,158.7 369.5,158.7 376.7,158.7 383.8,158.7 391,158.7 398.2,158.7 405.3,158.7 412.5,158.7 419.7,158.7 426.8,158.7 434,158.7 441.2,158.7 448.3,158.7 455.5,158.7 462.7,158.7 469.8,158.7 477,158.7 484.2,158.7 491.3,158.7 498.5,158.7 505.7,158.7 512.8,158.7 520,158.7" class="vs7" stroke="#4a3aa7" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<text x="528" y="99" font-size="11.5" fill="currentColor" font-weight="600">unhedged</text>
<text x="528" y="189" font-size="11.5" fill="currentColor" font-weight="600">swap: 5.8%</text>
<text x="528" y="152.7" font-size="11.5" fill="currentColor" font-weight="600">cap: at most 6.45%</text>
<text x="97.2" y="257.5" font-size="10.5" fill="currentColor" opacity="0.85">below the strike, the cap keeps the benefit of falling rates</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Cap at 4% for five years: premium about £1.1m (0.45% a year), priced with 1 point of normal volatility.</text>
</svg>

A five-year cap on SONIA at 4% might cost our company about **£1.1 million** upfront, roughly 0.45% a year spread over the five years. In return, its rate can never exceed 6% plus that premium, and if SONIA falls it pays less. The cap costs more than the swap if rates rise and less if they fall. That is the choice every hedger faces: **a fixed price, or insurance**. Property companies and private-equity buyers commonly use caps, because their lenders insist on protection but they want to keep the upside. Caps become very expensive just when they are most wanted: as rates rose sharply in 2022, the price of new caps soared with the volatility of rates, which is the option seller's insurance logic from Lesson 4 at work.

---

## Currency swaps: borrowing abroad without the currency risk

### FX swaps

An **FX swap** pairs two currency trades in opposite directions: exchange pounds for dollars today, and agree today to swap them back on a future date at a rate fixed now, set by the interest rate gap from Lesson 3. It is, in effect, a loan of one currency against another as collateral. Banks, companies and investors use FX swaps constantly to fund themselves in a currency they do not have, and to hedge foreign investments. At about **$4 trillion a day** in April 2025, they were the largest single instrument in currency markets, according to the BIS Triennial Survey. A Japanese insurer that buys US Treasuries and hedges the dollars back into yen, as the [Japan guide](?slug=japan-economy&lesson=lesson-10-beyond-japan) describes, does it with FX swaps and forwards.

### Cross-currency swaps

A **cross-currency swap** does the same over years, exchanging interest as well as principal. Suppose a British company issues a $130 million bond, because American investors offer better terms than the sterling market, but its revenue is in pounds.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Diagram of a cross-currency swap in three stages. At the start, a UK company that has raised dollars by issuing a bond swaps the dollars with a bank for pounds. Every year until maturity, the bank pays the company the dollar interest it owes its bondholders, and the company pays the bank sterling interest. At maturity the two sides swap the principal back at the original exchange rate, so the company repays its dollar bond with dollars from the bank. The company ends up with sterling debt at a known cost; the bank carries the currency risk." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A cross-currency swap: borrow in dollars, owe in pounds</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">A UK company issues a $130m bond and swaps it into £100m. Illustrative.</text>
<rect x="20" y="62" width="200" height="200" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="34" y="86" font-size="13" fill="currentColor" font-weight="600">1. Start</text>
<text x="34" y="104" font-size="11" fill="currentColor" opacity="0.72">exchange principal</text>
<rect x="34" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="72" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Company</text>
<rect x="130" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="168" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<line x1="72" y1="182" x2="166" y2="182" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="166,182 159.6,184.9 159.6,179.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="120" y="176" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">$130m</text>
<text x="120" y="196" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">company to bank</text>
<line x1="166" y1="222" x2="72" y2="222" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="72,222 78.4,219.1 78.4,224.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="120" y="216" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">£100m</text>
<text x="120" y="236" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">bank to company</text>
<rect x="240" y="62" width="200" height="200" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="254" y="86" font-size="13" fill="currentColor" font-weight="600">2. Every year</text>
<text x="254" y="104" font-size="11" fill="currentColor" opacity="0.72">exchange interest</text>
<rect x="254" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="292" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Company</text>
<rect x="350" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="388" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<line x1="386" y1="182" x2="292" y2="182" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="292,182 298.4,179.1 298.4,184.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="340" y="176" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">$ interest</text>
<text x="340" y="196" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">bank to company</text>
<line x1="292" y1="222" x2="386" y2="222" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="386,222 379.6,224.9 379.6,219.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="340" y="216" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">£ interest</text>
<text x="340" y="236" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">company to bank</text>
<rect x="460" y="62" width="200" height="200" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="474" y="86" font-size="13" fill="currentColor" font-weight="600">3. Maturity</text>
<text x="474" y="104" font-size="11" fill="currentColor" opacity="0.72">re-exchange principal</text>
<rect x="474" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="512" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Company</text>
<rect x="570" y="120" width="76" height="40" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="608" y="145" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<line x1="606" y1="182" x2="512" y2="182" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="512,182 518.4,179.1 518.4,184.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="560" y="176" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">$130m</text>
<text x="560" y="196" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">bank to company</text>
<line x1="512" y1="222" x2="606" y2="222" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="606,222 599.6,224.9 599.6,219.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="560" y="216" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600">£100m</text>
<text x="560" y="236" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.65">company to bank</text>
<text x="20" y="290" font-size="10.5" fill="currentColor" opacity="0.6">The dollars from the bank pay the bondholders; the company only ever deals in pounds.</text>
</svg>

At the start it swaps the $130 million with a bank for £100 million. Every year the bank pays it the dollar interest it owes its bondholders, and it pays the bank sterling interest. At maturity they swap the principal back at the original rate, so the company repays its dollar bond with dollars from the bank. It ends up with **sterling debt at a known cost**, while the bank carries the currency risk. The 1981 swap between IBM and the World Bank, often described as the deal that launched the swap market, was exactly this kind of trade.

---

## Credit default swaps: insurance on a borrower

A **credit default swap (CDS)** lets one party buy protection against a borrower defaulting. Suppose a pension fund holds **£10 million** of Company Y's bonds and buys five-year protection at **1.5% a year**, so **£150,000** annually.

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

If Y defaults and its bonds are judged to recover 40 pence in the pound, the seller of protection pays the **£6 million** loss, and the fund is whole again, less the premiums it paid. The recovery value is not haggled over case by case: for most contracts it is fixed by an industry auction after the default, run under rules written by ISDA.

Two things make CDS more than insurance. First, the annual price, called the **spread**, moves every day with the market's view of the borrower, so CDS double as a **live gauge of credit risk**: when a bank's CDS spread doubles in a week, everyone notices. Second, you can buy protection **without owning the bonds**, like buying fire insurance on your neighbour's house. That makes CDS a way to bet on, or hedge against, a default you have no direct exposure to. Critics argued that this "naked" protection let speculators pile pressure on struggling governments, and the EU banned naked CDS on sovereign debt from 2012.

### The credit triangle

A spread can be translated into the default probability the market is implying. If a borrower has a chance *p* of defaulting each year and you lose 60% when it does, fair protection costs about *p* × 60% a year. So:

> **spread ≈ default probability × (1 − recovery rate)**

At 1.5% and 40% recovery, the market is pricing about a **2.5%** chance of default each year. At 10%, it is pricing about one in six a year, which is a company in serious trouble. Like the option odds of Lesson 3, these are risk-neutral numbers that include a premium for bearing the risk, so they run higher than historical default rates; but they move instantly when the news does. Global CDS notional stood at **$11.0 trillion** at the end of 2025.

---

## Total return swaps: owning without owning

In a **total return swap**, a bank pays you everything a share or bond earns, its price change plus dividends, and you pay the bank a financing rate. You get the full economic exposure without buying the asset. The bank buys the shares to hedge itself, so the bank's name, not yours, is on the share register.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Two diagrams of a total return swap. Left: a bank buys a share and pays the client everything the share earns, its price change plus dividends, while the client pays the bank a financing rate. The client has the full economic exposure without owning the share, and its name appears on no share register. Right: the same client does this with five banks at once. Each bank sees only its own slice, about a fifth of the position, while the client's total exposure is five times larger, as at Archegos in 2021." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A total return swap: owning without owning</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Left: one swap. Right: the same trade spread across five banks, none of which sees the whole.</text>
<rect x="20" y="72" width="120" height="60" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="80" y="100" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Client</text>
<text x="80" y="117" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.72">gets the return</text>
<rect x="220" y="72" width="100" height="60" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="270" y="100" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Bank</text>
<text x="270" y="117" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.72">owns the share</text>
<line x1="218" y1="88" x2="142" y2="88" class="vs1" stroke="#2a78d6" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="142,88 148.4,85.1 148.4,90.9" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="180" y="80" font-size="10" fill="currentColor" text-anchor="middle" font-weight="600">total return</text>
<line x1="142" y1="118" x2="218" y2="118" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.9"/>
<polygon points="218,118 211.6,120.9 211.6,115.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="180" y="136" font-size="10" fill="currentColor" text-anchor="middle" font-weight="600">financing rate</text>
<rect x="220" y="170" width="100" height="44" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.35" fill="none"/>
<text x="270" y="197" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">The shares</text>
<line x1="270" y1="168" x2="270" y2="136" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
<polygon points="270,136 272.9,142.4 267.1,142.4" fill="currentColor" fill-opacity="0.5"/>
<text x="20" y="246" font-size="10.5" fill="currentColor" opacity="0.8">The client gains or loses as if it owned</text>
<text x="20" y="261" font-size="10.5" fill="currentColor" opacity="0.8">the shares, with a fraction of the money,</text>
<text x="20" y="276" font-size="10.5" fill="currentColor" opacity="0.8">and its name is on no share register.</text>
<line x1="350" y1="64" x2="350" y2="300" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<rect x="370" y="150" width="100" height="54" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.55" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="420" y="175" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Client</text>
<text x="420" y="192" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.72">5 slices</text>
<rect x="560" y="68" width="100" height="36" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="610" y="91" font-size="10.5" fill="currentColor" text-anchor="middle">Bank A: 1 slice</text>
<line x1="472" y1="177" x2="557" y2="86" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.45"/>
<polygon points="557,86 555.4,90.7 552.4,87.9" fill="currentColor" fill-opacity="0.45"/>
<rect x="560" y="114" width="100" height="36" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="610" y="137" font-size="10.5" fill="currentColor" text-anchor="middle">Bank B: 1 slice</text>
<line x1="472" y1="177" x2="557" y2="132" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.45"/>
<polygon points="557,132 553.9,135.9 552,132.3" fill="currentColor" fill-opacity="0.45"/>
<rect x="560" y="160" width="100" height="36" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="610" y="183" font-size="10.5" fill="currentColor" text-anchor="middle">Bank C: 1 slice</text>
<line x1="472" y1="177" x2="557" y2="178" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.45"/>
<polygon points="557,178 552.4,180 552.5,175.9" fill="currentColor" fill-opacity="0.45"/>
<rect x="560" y="206" width="100" height="36" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="610" y="229" font-size="10.5" fill="currentColor" text-anchor="middle">Bank D: 1 slice</text>
<line x1="472" y1="177" x2="557" y2="224" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.45"/>
<polygon points="557,224 552,223.6 554,220" fill="currentColor" fill-opacity="0.45"/>
<rect x="560" y="252" width="100" height="36" rx="6" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" fill="none"/>
<text x="610" y="275" font-size="10.5" fill="currentColor" text-anchor="middle">Bank E: 1 slice</text>
<line x1="472" y1="177" x2="557" y2="270" stroke="currentColor" stroke-width="1.1" stroke-opacity="0.45"/>
<polygon points="557,270 552.4,268 555.4,265.3" fill="currentColor" fill-opacity="0.45"/>
<text x="510" y="310" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">Each bank sees one slice; nobody sees all five.</text>
</svg>

Hedge funds use total return swaps for leverage and for access to markets that are awkward to trade directly. They also used them for something less wholesome. Because swap positions were not disclosed like shareholdings, **Archegos Capital**, the family office of Bill Hwang, used total return swaps with several banks in 2020 and 2021 to build enormous concentrated positions in a handful of shares, while each bank saw only its own slice. When the shares fell in March 2021 and the banks rushed to sell, they lost more than **$10 billion** between them (Lesson 13).

> **The same instrument, three ways.** A swap can hedge a risk, take a risk or hide one. The contract is identical; what differs is who holds the risk at the end, and whether anyone can see it.

---

## Check yourself

**1. In the company's swap, SONIA averages 4.5% for a year. What does the company pay its lenders, what happens on the swap, and what is its total cost?**

<details>
<summary>Show the answer</summary>

Loan interest: 6.5% × £50m = £3.25 million. On the swap it receives 4.5% and pays 3.8%: a net **£350,000** received. Total: £3.25m − £0.35m = **£2.9 million**, still 5.8%.

</details>

**2. The company's swap has a DV01 of about £22,000. Five-year swap rates fall 40 basis points. What happens to the value of its swap?**

<details>
<summary>Show the answer</summary>

It pays fixed, so it loses when rates fall: 40 × £22,000 ≈ **£880,000** off the swap's value, which it would have to post as collateral if the swap is collateralised. (Its loan, meanwhile, will cost less, so the business as a whole is no worse off.)

</details>

**3. A company's five-year CDS spread is 3% and recovery is assumed at 40%. What annual default probability is the market implying? If the spread jumps to 6%?**

<details>
<summary>Show the answer</summary>

3% ÷ 0.6 = about **5% a year**. At 6%, about **10% a year**: the market now thinks default is twice as likely, or wants twice the compensation for the risk.

</details>

**4. A pension fund receives fixed on £500 million of 30-year swaps, with a DV01 of about £173,000 per £100 million. Long rates rise 100 basis points in a week. Roughly how much collateral must it find?**

<details>
<summary>Show the answer</summary>

DV01 for £500m ≈ 5 × £173,000 = £865,000 per basis point, so the rule of thumb says about £86 million for 100bp. Revaluing the swaps exactly gives about **£77 million**, because a swap's sensitivity shrinks as rates rise (the same convexity that makes bond prices fall less than duration predicts). Either way, it needs that in cash or eligible collateral within days, whatever it thinks about where rates go next.

</details>

---

## What to carry into Lesson 8

- An **interest rate swap** exchanges fixed for floating on a notional that never moves; only the **net difference** is paid. It turns a floating-rate loan into a fixed cost.
- A swap's value moves with rates, measured by **DV01**. Long swaps are far more sensitive, and collateral is settled in cash, which is how **a working hedge drained UK pension funds' cash in 2022**.
- A **cap** is the option alternative: pay a premium, keep the benefit of falling rates. **A fixed price, or insurance**.
- **FX swaps** ($4 trillion a day) and **cross-currency swaps** let borrowers and investors move between currencies without the currency risk.
- A **CDS** insures against default and doubles as a live credit gauge: **spread ≈ default probability × (1 − recovery)**.
- A **total return swap** delivers ownership without ownership, and can hide a position from everyone but the client.

Lesson 8 goes behind the scenes, to the clearing houses, legal contracts and collateral that let a market this large work at all.

---

## Sources

- [BIS: OTC derivatives statistics, end-December 2025 (interest rate swaps $545tn, CDS $11.0tn)](https://data.bis.org/topics/OTC_DER)
- [BIS: Triennial Survey 2025, FX swaps about $4 trillion a day](https://www.bis.org/media-releases/20250930-global-fx-trading-hits-96-trillion-day-april-2025-and-otc-interest-rate-derivatives-surge-79)
- [EU Short Selling Regulation (No 236/2012), restricting uncovered sovereign CDS](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012R0236)
- [Bank of England: Financial Stability Report, December 2022 (LDI and the gilt market)](https://www.bankofengland.co.uk/financial-stability-report/2022/december-2022)
- [Paul, Weiss: Credit Suisse publishes independent review of Archegos losses (July 2021)](https://www.paulweiss.com/insights/client-news/credit-suisse-publishes-independent-review-of-archegos-losses)
