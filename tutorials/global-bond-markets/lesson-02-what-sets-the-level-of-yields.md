# Lesson 2: What Sets the Level of Yields

*Why a yield is 5% rather than 2% or 9%, and how to take any government bond yield apart into the pieces that built it.*

---

## Building a yield from the ground up

Lesson 1 showed what happens to a bond's price *when* yields move. It said nothing about what determines the level in the first place. A government bond yield is not an arbitrary number. It is built from identifiable components, and being able to name them is what lets you say *why* a yield moved rather than merely that it did.

Start with the two blocks that make up a government bond yield.

### Block one: the expected policy rate

Every central bank sets a very short-term interest rate: the federal funds rate in the United States, Bank Rate in the United Kingdom, the repo rate in India. That rate is the anchor for everything.

Now ask what a ten-year bond has to compete with. Instead of lending to the government for ten years, you could roll over a series of very short-term deposits, collecting whatever the central bank rate happens to be at each moment. For the ten-year bond to be worth buying, it has to offer something comparable.

So the first block of a ten-year yield is **where investors expect the central bank's rate to average over the next ten years**. Not where it is today, where it is expected to be, on average, across the bond's whole life.

This has an important consequence that catches people out. A central bank can cut rates and long-term yields can *rise* on the same day, if the cut persuades investors that inflation will be higher later. The bond market trades the expected path, not the current level.

### Block two: the term premium

If expectations were all that mattered, the calculation would be mechanical. They are not, because locking your money away for ten years carries risks that rolling short-term deposits does not.

Inflation might be higher than anyone expects. The government might borrow far more than planned. Interest rates might move against you and force you to sell at a loss. You cannot get your money back before maturity without accepting the market price of the day.

The **term premium** is the extra return investors demand for bearing all of that. It is the compensation for commitment.

The term premium cannot be observed directly: it is inferred by subtracting estimated rate expectations from the actual yield, which makes it a slippery but indispensable concept. When commentators say the long end is selling off "on term premium," they mean investors are demanding more compensation for uncertainty, not that they expect higher central bank rates.

It is worth knowing how large it can get, because "term premium" is easy to hear as a rounding error. Estimates of the US ten-year term premium have ranged from several percentage points in the early 1980s, when inflation was untamed and lending long felt genuinely dangerous, to **below zero** through the quantitative easing years after 2012, when a central bank with no budget constraint was buying the long end and investors accepted less than the expected path of policy rates to own it. A swing of that size is not a detail. It is most of the move.

Those two blocks are the whole of a government bond yield. The diagram below stacks them, and previews the third layer that every other borrower pays on top: the **credit spread**, which a later section takes apart.

<svg viewBox="0 0 700 300" width="100%" role="img" aria-label="Stacked diagram of yield components: expected policy rate at the base, term premium above it, and credit spread added only for non-government borrowers, with inflation cutting across to leave the real return" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="140" y="24" font-size="13" fill="currentColor" text-anchor="middle" font-weight="bold" opacity="0.85">Government bond</text>
  <text x="420" y="24" font-size="13" fill="currentColor" text-anchor="middle" font-weight="bold" opacity="0.85">Corporate bond</text>
  <rect x="60" y="170" width="160" height="90" fill="#0f172a" opacity="0.82"/>
  <rect x="60" y="95" width="160" height="75" fill="#64748b" opacity="0.72"/>
  <rect x="340" y="170" width="160" height="90" fill="#0f172a" opacity="0.82"/>
  <rect x="340" y="95" width="160" height="75" fill="#64748b" opacity="0.72"/>
  <rect x="340" y="45" width="160" height="50" fill="#f43f5e" opacity="0.72"/>
  <g font-size="11" fill="#ffffff" text-anchor="middle" font-weight="600">
    <text x="140" y="198">Expected</text><text x="140" y="212">policy rate</text>
    <text x="140" y="138">Term premium</text>
    <text x="420" y="198">Expected</text><text x="420" y="212">policy rate</text>
    <text x="420" y="138">Term premium</text>
    <text x="420" y="75">Credit spread</text>
  </g>
  <line x1="60" y1="234" x2="500" y2="234" stroke="#fb923c" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="556" y="231" font-size="11" fill="#fb923c" font-weight="bold">Inflation</text>
  <text x="556" y="245" font-size="10" fill="currentColor" opacity="0.65">everything below</text>
  <text x="556" y="257" font-size="10" fill="currentColor" opacity="0.65">is eaten by it</text>
  <line x1="42" y1="95" x2="42" y2="260" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  <line x1="36" y1="95" x2="48" y2="95" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  <line x1="36" y1="260" x2="48" y2="260" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  <text x="22" y="182" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75" transform="rotate(-90 22 182)">Total yield</text>
  <line x1="518" y1="45" x2="518" y2="234" stroke="#10b981" stroke-width="1.5" opacity="0.8"/>
  <line x1="512" y1="45" x2="524" y2="45" stroke="#10b981" stroke-width="1.5"/>
  <line x1="512" y1="234" x2="524" y2="234" stroke="#10b981" stroke-width="1.5"/>
  <text x="536" y="130" font-size="11" fill="#10b981" font-weight="bold">Real</text>
  <text x="536" y="144" font-size="11" fill="#10b981" font-weight="bold">return</text>
  <text x="60" y="288" font-size="10" fill="currentColor" opacity="0.6">Block heights are illustrative. Every non-government borrower pays the government yield plus a spread.</text>
</svg>

---

## Inflation: the bond investor's natural enemy

Behind both blocks sits inflation, and it deserves its own treatment because it is the thing bonds are least equipped to survive.

A bond pays you fixed amounts of money. Inflation reduces what money buys. A 5% yield when inflation runs at 3% leaves a **real return** of only about 2%. If inflation runs at 6%, your 5% bond is losing you purchasing power every year, even though it is paying exactly what it promised.

This is why the distinction between **nominal** and **real** matters so much in bonds. The nominal yield is the number quoted. The real yield is what is left after inflation, and it is the one that tells you whether you are actually getting richer.

Some governments issue **inflation-linked bonds**, where both the coupon and the principal rise with a published inflation index. These pay a much lower headline rate, because you are buying protection rather than a fixed sum. The UK was among the first major economies to issue them, in 1981.

> The gap between an ordinary bond's yield and an inflation-linked bond's yield of the same maturity is the inflation rate the market expects over that period. It is called the **breakeven inflation rate**, and it is one of the cleanest real-time readings of inflation expectations available anywhere.

---

## Supply and demand

Bonds are not priced by formula alone. They are sold to buyers, and the balance between how many are for sale and how much appetite exists moves the price like anything else.

**When a government borrows more**, it must sell more bonds. If the extra supply outstrips demand, it has to offer higher yields to clear the market. This is why budget announcements move bond markets: investors are recalculating how much paper they will be asked to absorb.

**When a central bank buys bonds on a vast scale**, a policy called **quantitative easing** or QE, it removes supply from the market and pushes yields down. When it reverses, either by selling holdings or by letting them mature without replacement, the policy is called **quantitative tightening**, or QT, and it does the opposite.

QE and QT matter more than their mechanical size suggests, because a central bank is a buyer with no budget constraint and no requirement to make a profit. Its presence changes how everyone else behaves. Lesson 6 has an episode where the *promise* of central bank buying ended a crisis without a single bond being purchased.

| Force | Pushes yields **up** | Pushes yields **down** |
| --- | --- | --- |
| Expected central bank rates | Expected to rise | Expected to fall |
| Inflation expectations | Rising | Falling |
| Term premium | Uncertainty increasing | Uncertainty receding |
| Government borrowing | Heavier issuance | Lighter issuance |
| Central bank balance sheet | QT (selling, or running off) | QE (buying) |
| Risk appetite | Investors moving into risk | Flight to safety |
| Perceived creditworthiness | Deteriorating | Improving |

---

## The credit spread

Everything so far describes a government borrowing in its own currency. For every other borrower, one more layer is added.

The **credit spread** is the extra yield demanded because the borrower might not pay. It is quoted as a number of basis points *over* the equivalent government bond, and it is the single most informative number about a borrower.

A spread widens when default looks more likely and narrows when it looks less likely. Because the government yield is the floor, a corporate bond's total yield is the government yield plus its spread, which means a company's borrowing cost can rise even when its own prospects are unchanged, simply because government yields rose beneath it.

Credit spreads are also a superb market-wide fear gauge. In calm periods, spreads on weaker borrowers compress to a couple of percentage points. In a crisis they explode. Lesson 6 describes December 2008, when spreads on US junk bonds reached roughly **20 percentage points**: weaker companies were being asked to pay twenty points more than the government, if anyone would lend at all.

> A rates story and a credit story are different animals. If the *government* yield is moving, it is a rates story about policy, inflation or fiscal credibility. If the *spread over it* is moving, it is a credit story about who might not get paid. Lesson 8 makes this the first diagnostic question.

---

## The yield curve

Line up a single government's bond yields from the shortest maturity to the longest, and you have the **yield curve**. It is one of the most watched charts in finance, because it compresses the market's entire view of the future into one line.

<svg viewBox="0 0 700 290" width="100%" role="img" aria-label="Two yield curves side by side: a normal upward-sloping curve and an inverted downward-sloping curve" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <line x1="50" y1="200" x2="310" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    <line x1="50" y1="40" x2="50" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    <polyline points="70,172 120,132 170,106 220,90 270,80" stroke="#0ea5e9" stroke-width="2.5" fill="none"/>
    <g fill="#0ea5e9"><circle cx="70" cy="172" r="4"/><circle cx="120" cy="132" r="4"/><circle cx="170" cy="106" r="4"/><circle cx="220" cy="90" r="4"/><circle cx="270" cy="80" r="4"/></g>
    <text x="180" y="62" font-size="12" fill="#0ea5e9" font-weight="bold">Normal</text>
    <text x="180" y="222" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">Maturity</text>
    <text x="32" y="120" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7" transform="rotate(-90 32 120)">Yield</text>
    <g font-size="9" fill="currentColor" opacity="0.5" text-anchor="middle">
      <text x="70" y="214">2y</text><text x="170" y="214">10y</text><text x="270" y="214">30y</text>
    </g>
  </g>
  <g>
    <line x1="390" y1="200" x2="650" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    <line x1="390" y1="40" x2="390" y2="200" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    <polyline points="410,78 460,84 510,116 560,144 610,158" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
    <g fill="#f43f5e"><circle cx="410" cy="78" r="4"/><circle cx="460" cy="84" r="4"/><circle cx="510" cy="116" r="4"/><circle cx="560" cy="144" r="4"/><circle cx="610" cy="158" r="4"/></g>
    <text x="520" y="62" font-size="12" fill="#f43f5e" font-weight="bold">Inverted</text>
    <text x="520" y="222" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.7">Maturity</text>
    <g font-size="9" fill="currentColor" opacity="0.5" text-anchor="middle">
      <text x="410" y="214">2y</text><text x="510" y="214">10y</text><text x="610" y="214">30y</text>
    </g>
  </g>
  <text x="180" y="256" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Longer money earns more.</text>
  <text x="180" y="272" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Growth and inflation look steady.</text>
  <text x="520" y="256" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Short rates exceed long rates.</text>
  <text x="520" y="272" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">Markets expect rate cuts ahead.</text>
</svg>

The curve normally slopes **upward**, for the reason Lesson 1 gave: tying money up for longer usually earns more, because the term premium grows with commitment.

When short-term yields rise *above* long-term ones, the curve is **inverted**. This seems perverse, why accept less for locking your money up longer?, until you remember that yields price the expected path. An inverted curve says investors expect central bank rates to be *much lower* in future than they are today. And central banks generally cut rates for one reason: the economy is deteriorating.

### How much to trust an inversion

In the United States, an inversion has preceded every recession of the past half-century. That is a genuinely remarkable record, and it is why the curve gets so much attention.

It is not a law of nature. The US curve stayed inverted for roughly two years from mid-2022 without the widely predicted recession arriving on schedule. Forecasters who treated the signal as deterministic were wrong for long enough to lose money.

And even when it does work, it will not tell you when. The lag between the curve inverting and the recession arriving has historically run anywhere from about **six months to two years**, which is wide enough that the 2022 episode above sat inside the normal range rather than outside it. The signal says *something is expected*. It says almost nothing about *when*.

> Treat an inversion as a warning light, not a verdict. It tells you the professional consensus expects rate cuts, which usually implies trouble. It does not tell you when, or whether the consensus is right.

Two other curve movements you will read about:

- **Steepening**: long yields rising relative to short ones. Often driven by inflation worries or by concern about how much a government intends to borrow.
- **Flattening**: the gap narrowing, usually as short rates rise toward long ones while a central bank tightens.

---

## Putting it together

Every component of this lesson can be stacked into a single sum. Here are two ten-year bonds priced at the same moment, one issued by a government and one by a single-A rated company, with inflation expected to run at 2.5%:

| | Government 10-year | Corporate 10-year (single-A) |
| --- | ---: | ---: |
| Expected average policy rate | 3.50% | 3.50% |
| Term premium | 1.50% | 1.50% |
| Credit spread | none | 2.00% |
| **Nominal yield** | **5.00%** | **7.00%** |
| Less expected inflation | 2.50% | 2.50% |
| **Real return, before any default** | **about 2.5%** | **about 4.5%** |

Read the columns downward and you have built a yield from nothing. Read the rows across and you have the answer to a question that puzzles a lot of people: why does this company pay more than its own government? Not because anything about the company changed, but because one row was added.

> Two details worth having. The credit spread is quoted as **200 basis points**, not 2%, and a basis point is one hundredth of a percentage point. And subtracting inflation is the standard shorthand rather than the exact answer: the precise real return is `1.05 / 1.025 - 1`, or 2.44%, not 2.50%. The gap is small at these levels and grows when inflation is high, which is why the shorthand is fine for reading the news and not fine for a hundred-year bond.

Every number in that table moves independently, and knowing which one moved is the difference between reading the news and understanding it.

## What to carry into Lesson 3

- A government yield is **expected policy rates plus a term premium**. Every other borrower adds a **credit spread** on top.
- Yields price the **expected path**, which is why markets move on hints rather than actions.
- **Inflation** determines whether a nominal yield is a real gain; the breakeven rate reveals what the market expects.
- **Supply and demand are real**: heavier government borrowing pushes yields up, QE pushes them down, QT reverses it.
- The **yield curve** normally slopes up; inversion signals expected cuts and has a strong but imperfect recession record.

Lessons 1 and 2 described the mechanism in the abstract. Lesson 3 puts it in a building: the instruments that actually exist, the people who trade them, and the plumbing that makes it work.
