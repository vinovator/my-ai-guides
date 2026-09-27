# Lesson 7: Risks, and Bonds versus Bond Funds

*The five things that can go wrong inside any bond, each matched to the episode where it did the damage, and one distinction that catches a great many people.*

---

## The five embedded risks

Every bond carries some mix of five risks. They are genuinely distinct: a bond can be certain to pay in full and still lose you a great deal of money, and understanding which risk you are actually taking is most of the discipline.

| Risk | What it is | Who it bit | What reduces it |
| --- | --- | --- | --- |
| **Interest-rate** | Rising yields cut the value of bonds you already hold; longer bonds suffer most | Austria's 2120 bond; Silicon Valley Bank; every long-bond holder in 2022 | Shorter duration, floating-rate notes, or genuinely holding to maturity |
| **Credit** | The borrower pays late, pays less, or is downgraded, each widens the spread and cuts the price | Lehman-era mortgage bonds; Greece; IL&FS | Higher-rated issuers, diversification across borrowers |
| **Inflation** | The quiet erosion of fixed payments | Austria's holders, facing about −1.1% real a year | Inflation-linked bonds; shorter maturities |
| **Liquidity** | The difficulty of selling quickly at a fair price | Franklin Templeton's six funds; mortgage bonds in 2008 | Government bonds and large, actively traded issues |
| **Currency** | A bond in another currency can lose money in yours | Foreign holders of Indian G-secs during the 2013 rupee slide | Hedging, or holding bonds in your own currency |

### Interest-rate risk: the seesaw, at scale

This is Lesson 1's mechanism seen as a danger rather than a curiosity. Rising yields mechanically cut the value of bonds you already hold, and duration tells you by how much.

The scale it can reach is worth stating plainly. In 2022, as central banks raised rates at the fastest pace in decades, bonds suffered some of the worst losses on record. **Long-dated gilts lost more than a third of their value in a single year.** That is equity-like damage from the asset class people buy for safety.

### Credit risk: three ways to lose, not one

Credit risk is usually described as the risk of default, which undersells it. There are three distinct outcomes, and the first two happen far more often than the third:

1. **Downgrade.** The rating falls, the spread widens, the price drops. Nobody has missed a payment. This alone can force institutional selling if it crosses the investment-grade boundary from Lesson 3.
2. **Restructuring.** You are paid less than promised, or later. Greece's 2012 swap cut face value by more than half.
3. **Default.** No payment at all.

### Inflation risk: the one you do not see

Inflation risk is uniquely insidious because nothing appears to go wrong. Every coupon arrives on time, the principal is repaid in full, and you are quietly poorer. There is no announcement and no headline.

This is the risk that makes "hold to maturity and you cannot lose" a half-truth. You cannot lose *pounds*. You can absolutely lose purchasing power, and over long horizons that is the loss that matters.

### Liquidity risk: not the same as credit risk

Confusing these two is common, and Franklin Templeton is the corrective. Those funds were **illiquid, not insolvent**: investors eventually received about 109% of the funds' closing value. The bonds were good. They simply could not be sold in April 2020 at any price resembling their worth.

Liquidity risk is about the *exit*, not the *repayment*, and it is most acute exactly when you most want to leave.

### Currency risk: the yield that is not a yield

A UK investor earning 7% on Indian G-secs can still lose money in pounds if the rupee falls far enough against sterling. As Lesson 5 noted, part of the gap between Indian and US yields *is* compensation for this risk rather than free extra return.

The relationship runs both ways, which is what makes it dangerous. The conditions that push a currency down, namely inflation, capital flight and a loss of confidence, are frequently the same conditions that push its bond yields up. So the currency loss and the price loss tend to arrive together rather than offsetting.

> A useful summary: interest-rate risk is about **when** you sell, credit risk is about **whether** you get paid, inflation risk is about **what the money buys**, liquidity risk is about **whether you can get out**, and currency risk is about **which money you end up with**.

---

## A bond and a bond fund are not the same thing

This distinction trips up a great many sensible people, and it follows directly from Lesson 1.

**A single bond matures.** It has a fixed end date. If you hold it to that date and the issuer pays, you receive the face value regardless of what yields did in between. Its duration falls steadily toward zero as maturity approaches: a ten-year bond becomes a nine-year bond becomes a one-year bond, so its price sensitivity shrinks year by year. The price must converge on the face value, because on the final day that is exactly what it is worth.

**A bond fund never matures.** It keeps replacing maturing bonds with new ones to maintain a target profile. Its duration is therefore roughly *constant*, not declining. There is no date on which you are guaranteed your money back, and its value moves with yields indefinitely.

<svg viewBox="0 0 700 330" width="100%" role="img" aria-label="Two lines over ten years. A single bond's duration falls steadily from 7.8 to zero at maturity, while a bond fund's duration stays flat at about 7 because maturing holdings are continually replaced." fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="currentColor" opacity="0.12" stroke-width="1">
    <line x1="70" y1="50" x2="660" y2="50"/><line x1="70" y1="100" x2="660" y2="100"/>
    <line x1="70" y1="150" x2="660" y2="150"/><line x1="70" y1="200" x2="660" y2="200"/>
  </g>
  <line x1="70" y1="250" x2="660" y2="250" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
  <line x1="70" y1="40" x2="70" y2="250" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
  <polyline points="70,55 129,74 188,94 247,113 306,133 365,152 424,172 483,191 542,211 601,230 660,250"
            stroke="#0ea5e9" stroke-width="2.5" fill="none"/>
  <polyline points="70,75 660,75" stroke="#f59e0b" stroke-width="2.5" fill="none" stroke-dasharray="7 4"/>
  <circle cx="660" cy="250" r="5" fill="#0ea5e9"/>
  <text x="648" y="196" font-size="11" fill="#0ea5e9" text-anchor="end" font-weight="bold">duration 0 at maturity</text>
  <text x="648" y="212" font-size="10" fill="currentColor" text-anchor="end" opacity="0.7">price must equal par</text>
  <text x="180" y="48" font-size="11" fill="#f59e0b" font-weight="bold">Bond fund: duration stays put</text>
  <text x="92" y="228" font-size="11" fill="#0ea5e9" font-weight="bold">Single bond: duration decays</text>
  <g font-size="11" fill="currentColor" opacity="0.7" text-anchor="end" font-family="ui-monospace,monospace">
    <text x="60" y="54">8</text><text x="60" y="104">6</text><text x="60" y="154">4</text>
    <text x="60" y="204">2</text><text x="60" y="254">0</text>
  </g>
  <g font-size="10" fill="currentColor" opacity="0.6" text-anchor="middle">
    <text x="70" y="268">today</text><text x="365" y="268">year 5</text><text x="660" y="268">year 10</text>
  </g>
  <text x="22" y="145" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75" transform="rotate(-90 22 145)">Duration (years)</text>
  <text x="365" y="294" font-size="12" fill="currentColor" text-anchor="middle" font-weight="bold">Why one of them has a finish line and the other does not</text>
  <text x="365" y="312" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">A ten-year bond held to maturity versus a fund targeting a constant ten-year profile</text>
</svg>

The two lines are the whole distinction. The bond's sensitivity to yields shrinks every year until, on the final day, there is nothing left to be sensitive with: it is worth its face value and nothing else. The fund's line never reaches the axis, because every maturing holding is replaced by a longer one.

| | Individual bond | Bond fund or ETF |
| --- | --- | --- |
| **Maturity** | A fixed date | None; holdings are continually replaced |
| **Principal** | Face value returned in full, absent default | No guaranteed return of capital, ever |
| **Duration over time** | Falls steadily to zero | Stays roughly constant |
| **If you hold through a sell-off** | Price recovers to par by maturity, mechanically | Recovery depends on reinvestment at higher yields |
| **Diversification** | You carry one issuer's credit risk | Spread across many issuers |
| **Getting out** | Sell at market price, or wait for maturity | Sell units at the prevailing price |

### The part that is usually left out

None of this makes funds worse. The trade-off is real in both directions.

A single bond exposes you entirely to one issuer. A fund spreads that risk across hundreds, which is why most people should not hold individual corporate bonds at all.

And bond funds do repair themselves, through a mechanism worth understanding. When yields rise and the fund's price drops, the manager is buying replacement bonds at those *higher* yields. The fund's income rises. Over time that extra income offsets the capital loss, and the rough rule is that it takes about as many years as the fund's **duration**.

So a fund with a duration of seven, hit by a one-point rise in yields, loses about 7% immediately and takes roughly seven years of higher income to get back to where it would have been. That is a long time, but it is not permanent impairment, and it is a very different proposition from a permanent loss.

> The practical question is not "which is better" but "does my money have a date?" If you need a specific sum on a specific date, a bond maturing on that date does something no fund can. If you are investing without a fixed horizon, a fund's diversification is usually worth more than a maturity guarantee you were never going to use.

---

## What to carry into Lesson 8

- Five distinct risks: **interest-rate, credit, inflation, liquidity, currency**. They are not interchangeable, and each has a different remedy.
- **Liquidity risk is not default risk.** Franklin's investors got 109% back, but only after three years.
- **Inflation risk is the invisible one**, and it is what qualifies the "hold to maturity and you cannot lose" reassurance.
- A **bond matures and a fund does not.** A fund's losses repair through higher reinvestment income over roughly its duration in years.

One lesson remains: turning all of this into something you can actually use on a Tuesday morning.
