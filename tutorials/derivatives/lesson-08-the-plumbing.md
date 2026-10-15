# Lesson 8: The Plumbing: Players, Clearing and Collateral

*The derivatives market as a relay of risk: who the players are, the difference between exchange-traded and over-the-counter markets, how a clearing house turns a web of exposures into a hub, the ISDA contract that makes netting work, and the margin that holds the whole thing together.*

---

## Two failures, two outcomes

When Lehman Brothers filed for bankruptcy on 15 September 2008, its subsidiaries were party to roughly **930,000 derivative contracts** with more than **6,000 counterparties**. Most were private, bilateral deals. Each counterparty had to work out what it was owed, whether its collateral was safe, how to replace its hedges in a market in free fall, and how long it would wait in the bankruptcy queue. The unwinding took years.

At the same moment, Lehman also had a portfolio of about **66,000 interest rate swaps**, with a notional value of some **$9 trillion**, cleared through LCH's SwapClear service in London. LCH hedged the portfolio and auctioned it to other banks within three weeks, using only the margin Lehman had posted, without touching anyone else's money. Its other members barely noticed.

Same bank, same week, same kind of contract. The difference was the plumbing. This lesson explains it, because the plumbing is where derivatives either contain a failure or spread it.

---

## The cast

Derivatives markets are a **relay of risk**. Hedgers hand risk to dealers, dealers pass it on to speculators and other hedgers, and an infrastructure of exchanges, clearing houses, contracts and collateral stops one failure from toppling everyone else.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Diagram of the derivatives market as a relay of risk. Hedgers such as airlines, exporters and pension funds hand risk to dealers, the big banks, which quote prices, hold the risk for a while and pass it on. Speculators and investors such as hedge funds take risk on in search of a return, and electronic market makers provide continuous prices on exchanges. Underneath, exchanges, clearing houses and legal agreements carry the trades and absorb failures; above, regulators set and police the rules." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A relay of risk</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Who hands risk to whom, and what holds the system together</text>
<rect x="20" y="50" width="640" height="30" rx="6" class="vf7" fill="#4a3aa7" fill-opacity="0.1"/>
<text x="340" y="70" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">Regulators set and police the rules: CFTC and SEC; FCA and Bank of England; SEBI and RBI</text>
<rect x="20" y="104" width="180" height="84" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="110" y="130" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Hedgers</text>
<text x="110" y="150" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">airlines, exporters,</text>
<text x="110" y="164" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">pension funds, farmers</text>
<rect x="250" y="104" width="180" height="84" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="340" y="130" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Dealers</text>
<text x="340" y="150" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">big banks: quote prices,</text>
<text x="340" y="164" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">hold risk, pass it on</text>
<rect x="480" y="104" width="180" height="84" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="570" y="130" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Speculators, investors</text>
<text x="570" y="150" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">hedge funds, trend</text>
<text x="570" y="164" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">followers, retail traders</text>
<line x1="202" y1="134" x2="248" y2="134" class="vs2" stroke="#eb6834" stroke-width="2" stroke-opacity="0.9"/>
<polygon points="248,134 241.6,136.9 241.6,131.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<line x1="432" y1="134" x2="478" y2="134" class="vs2" stroke="#eb6834" stroke-width="2" stroke-opacity="0.9"/>
<polygon points="478,134 471.6,136.9 471.6,131.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<text x="225" y="124" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">risk</text>
<text x="455" y="124" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">risk</text>
<line x1="478" y1="160" x2="432" y2="160" class="vs1" stroke="#2a78d6" stroke-width="1.6" stroke-opacity="0.8"/>
<polygon points="432,160 438.4,157.1 438.4,162.9" class="vf1" fill="#2a78d6" fill-opacity="0.8"/>
<line x1="248" y1="160" x2="202" y2="160" class="vs1" stroke="#2a78d6" stroke-width="1.6" stroke-opacity="0.8"/>
<polygon points="202,160 208.4,157.1 208.4,162.9" class="vf1" fill="#2a78d6" fill-opacity="0.8"/>
<text x="455" y="176" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">premium</text>
<text x="225" y="176" font-size="10" fill="currentColor" text-anchor="middle" opacity="0.75">certainty</text>
<rect x="250" y="200" width="180" height="84" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5" fill="none"/>
<text x="340" y="226" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Market makers</text>
<text x="340" y="246" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">electronic firms quoting</text>
<text x="340" y="260" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">all day on exchanges</text>
<line x1="340" y1="188" x2="340" y2="200" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.4"/>
<rect x="20" y="296" width="640" height="26" rx="6" class="vf3" fill="#1baf7a" fill-opacity="0.12"/>
<text x="340" y="314" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">Underneath: exchanges, clearing houses, ISDA contracts, margin and collateral</text>
<line x1="110" y1="190" x2="110" y2="294" stroke="currentColor" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="3 3"/>
<line x1="570" y1="190" x2="570" y2="294" stroke="currentColor" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="3 3"/>
</svg>

| Role | What they do | Examples |
| --- | --- | --- |
| **Hedgers** | Shed risks they do not want to carry | Airlines hedging jet fuel; UK pension funds hedging interest rates and inflation; Indian exporters fixing dollar receipts |
| **Dealers** | Big banks that quote prices, hold the risk for a while, then hedge it | JPMorgan and Goldman Sachs (US); Barclays, HSBC and NatWest (UK); State Bank of India and HDFC Bank in rupee markets |
| **Electronic market makers** | Firms that quote continuously on exchanges and earn the gap between buying and selling prices | Citadel Securities, Jane Street, Optiver, IMC and Susquehanna, active in all three countries |
| **Speculators and investors** | Take views and absorb the hedgers' risk | Hedge funds, trend-following funds such as Man Group's AHL in London, retail traders |
| **Exchanges** | Venues for standardised contracts | CME Group, Cboe and ICE (US); ICE Futures Europe and the London Metal Exchange (UK); NSE, BSE and MCX (India) |
| **Clearing houses** | Guarantee trades and collect margin | OCC and CME Clearing (US); LCH and ICE Clear Europe (UK); NSE Clearing and CCIL (India) |
| **Regulators** | Set and police the rules | CFTC and SEC (US); FCA and Bank of England (UK); SEBI and RBI (India) |

---

## Exchange-traded versus over the counter

Derivatives trade in two very different settings.

**Exchange-traded derivatives** are standardised, their prices are public, and every trade is cleared. Anyone with a broker can trade them, from a pension fund to a student with an app.

**Over-the-counter (OTC) derivatives** are negotiated privately, usually between a dealer and a client, and can be tailored to any amount, date or underlying. The $845 trillion headline of Lesson 1 counts only OTC contracts. Until 2008 almost all of them were bilateral: each pair of firms faced each other directly, held whatever collateral they had agreed, and nobody had a full picture of who owed what to whom.

| Feature | Exchange-traded (futures, listed options) | Over the counter (forwards, swaps, bespoke options) |
| --- | --- | --- |
| **Terms** | Standardised | Tailored to the client |
| **Counterparty** | The clearing house | Each other, unless the trade is cleared |
| **Prices** | Public and real-time | Private and negotiated |
| **Collateral** | Daily margin set by the clearing house | Agreed in a contract, increasingly by regulation |
| **Typical users** | Everyone, from funds to individuals | Companies, banks, funds, governments |

The G20 reforms of 2009 set out to drag as much of the OTC market as possible into the light. Standard OTC contracts must now be **centrally cleared**, many must trade on regulated electronic platforms, and all must be **reported** to regulators.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Line chart of the share of over-the-counter derivatives notional facing a central counterparty, from BIS data. Credit default swaps: 10% in mid-2010, rising to 70% at the end of 2025. Interest rate derivatives, reported from 2016: about 76% then and 78.8% at the end of 2025." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">After 2008, the market moved into clearing houses</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Share of over-the-counter notional outstanding facing a central counterparty, %</text>
<line x1="80" y1="270" x2="520" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">0%</text>
<line x1="80" y1="220" x2="520" y2="220" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="224" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">25%</text>
<line x1="80" y1="170" x2="520" y2="170" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="174" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">50%</text>
<line x1="80" y1="120" x2="520" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">75%</text>
<line x1="80" y1="70" x2="520" y2="70" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="74" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">100%</text>
<text x="80" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2010</text>
<text x="162.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2013</text>
<text x="245" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2016</text>
<text x="327.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2019</text>
<text x="410" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2022</text>
<text x="492.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2025</text>
<polyline points="93.8,250.9 107.5,241.4 121.2,236.8 135,232.4 148.8,231.9 162.5,231.6 176.2,224.7 190,217.8 203.8,216.9 217.5,212 231.2,208.7 245,202.4 258.8,195.8 272.5,182.6 286.2,169 300,160.2 313.8,161.7 327.5,160.8 341.2,162 355,158.1 368.8,149.8 382.5,145.1 396.2,142.6 410,145.8 423.8,138.4 437.5,131.9 451.2,129.6 465,139.2 478.8,134.3 492.5,130.2 506.2,131.1 520,129.7" class="vs5" stroke="#e87ba4" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<polyline points="258.8,118.5 272.5,121 286.2,118.5 300,119.9 313.8,117.6 327.5,118 341.2,114.4 355,116.7 368.8,113.3 382.5,114.5 396.2,114.7 410,114.2 423.8,113.2 437.5,117.8 451.2,114.4 465,118.1 478.8,116.2 492.5,117.5 506.2,115.2 520,112.5" class="vs3" stroke="#1baf7a" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="93.8" cy="250.9" r="4" class="vf5 vring" fill="#e87ba4" stroke="#ffffff" stroke-width="2"><title>CDS cleared share 9.6%, 2010-S1</title></circle>
<circle cx="520" cy="129.7" r="4" class="vf5 vring" fill="#e87ba4" stroke="#ffffff" stroke-width="2"><title>CDS cleared share 70.2%, 2025-S2</title></circle>
<circle cx="520" cy="112.5" r="4" class="vf3 vring" fill="#1baf7a" stroke="#ffffff" stroke-width="2"><title>Interest rate derivatives cleared share 78.8%, 2025-S2</title></circle>
<text x="101.8" y="254.9" font-size="11" fill="currentColor" font-weight="600">10%</text>
<text x="528" y="131.7" font-size="11" fill="currentColor" font-weight="600">Credit default</text>
<text x="528" y="145.7" font-size="11" fill="currentColor" font-weight="600">swaps, 70%</text>
<text x="528" y="104.5" font-size="11" fill="currentColor" font-weight="600">Interest rate</text>
<text x="528" y="118.5" font-size="11" fill="currentColor" font-weight="600">derivatives, 78.8%</text>
<text x="20" y="310" font-size="10.5" fill="currentColor" opacity="0.6">Source: BIS OTC derivatives statistics (rate derivatives by counterparty reported from 2016).</text>
</svg>

By the end of 2025, **78.8%** of interest rate derivatives notional faced a clearing house, and the share of credit default swaps had risen from about a tenth in 2010 to **70%**.

---

## Clearing houses: the hub at the centre

A **clearing house**, or **central counterparty (CCP)**, steps into the middle of every trade it clears. It becomes the buyer to every seller and the seller to every buyer, a legal step called **novation**. If one firm fails, everyone else is still owed by the clearing house, not by the failed firm.

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

That changes the shape of the network. Six firms trading bilaterally have fifteen exposures to each other, and when one fails, five firms take losses directly, at the worst possible moment, and each must scramble to replace its hedges. With a clearing house, there are six exposures, all to the hub, which deals with the failure on everyone's behalf.

### Netting: most of the money never moves

The hub also shrinks the money that has to move. Because every firm faces the same counterparty, all its obligations can be added up into a single net figure.

<svg viewBox="0 0 680 310" width="100%" role="img" aria-label="Two diagrams of multilateral netting among three firms. Before: A owes B £100 million, B owes C £100 million and C owes A £80 million, £280 million of gross obligations. After netting through a clearing house: A pays £20 million, C receives £20 million and B neither pays nor receives. The same economic positions, settled with one payment of £20 million." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Netting: £280 million of obligations becomes one £20 million payment</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Three firms' obligations on a settlement day. Illustrative.</text>
<circle cx="165" cy="100" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="165" y="105" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">A</text>
<circle cx="280" cy="250" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="280" y="255" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">B</text>
<circle cx="50" cy="250" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="50" y="255" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">C</text>
<line x1="180.8" y1="120.6" x2="264.2" y2="229.4" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.85"/>
<polygon points="264.2,229.4 258,226 262.6,222.6" class="vf2" fill="#eb6834" fill-opacity="0.85"/>
<text x="266.5" y="171" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">owes £100m</text>
<line x1="254" y1="250" x2="76" y2="250" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.85"/>
<polygon points="76,250 82.4,247.1 82.4,252.9" class="vf2" fill="#eb6834" fill-opacity="0.85"/>
<text x="165" y="272" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">owes £100m</text>
<line x1="65.8" y1="229.4" x2="149.2" y2="120.6" class="vs2" stroke="#eb6834" stroke-width="1.8" stroke-opacity="0.85"/>
<polygon points="149.2,120.6 147.6,127.4 143,124" class="vf2" fill="#eb6834" fill-opacity="0.85"/>
<text x="63.5" y="171" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">owes £80m</text>
<text x="165" y="66" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">Before: £280m gross</text>
<line x1="350" y1="64" x2="350" y2="300" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
<text x="500" y="66" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">After: one net payment</text>
<circle cx="395" cy="150" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="395" y="155" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">A</text>
<circle cx="605" cy="150" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="605" y="155" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">C</text>
<circle cx="500" cy="150" r="32" class="vf1 vs1" fill="#2a78d6" stroke="#2a78d6" fill-opacity="0.12" stroke-width="2"/>
<text x="500" y="147" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">Clearing</text>
<text x="500" y="161" font-size="10.5" fill="currentColor" text-anchor="middle" font-weight="600">house</text>
<line x1="419" y1="150" x2="466" y2="150" class="vs2" stroke="#eb6834" stroke-width="2" stroke-opacity="0.9"/>
<polygon points="466,150 459.6,152.9 459.6,147.1" class="vf2" fill="#eb6834" fill-opacity="0.9"/>
<line x1="534" y1="150" x2="581" y2="150" class="vs1" stroke="#2a78d6" stroke-width="2" stroke-opacity="0.9"/>
<polygon points="581,150 574.6,152.9 574.6,147.1" class="vf1" fill="#2a78d6" fill-opacity="0.9"/>
<text x="442" y="140" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£20m</text>
<text x="558" y="140" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">£20m</text>
<text x="395" y="194" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">owes 100,</text>
<text x="395" y="208" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">owed 80</text>
<text x="605" y="194" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">owed 100,</text>
<text x="605" y="208" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">owes 80</text>
<circle cx="500" cy="245" r="22" class="vsurf" fill="#ffffff" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="500" y="250" font-size="14" fill="currentColor" text-anchor="middle" font-weight="600">B</text>
<text x="500" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.75">owed 100, owes 100: nets to zero, no payment</text>
</svg>

Three firms owe each other £280 million between them. Through a clearing house, the same positions settle with one payment of **£20 million**. Multiply that across thousands of members and millions of trades and you can see why a market with hundreds of trillions of notional moves only a small fraction of it in cash.

### The default waterfall

A clearing house protects itself with layers of loss absorption, called the **default waterfall**.

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

It uses the defaulter's own margin first, then the defaulter's contribution to a shared **default fund**, then a slice of the clearing house's own capital (its "skin in the game", there to keep its incentives honest), and only then the other members' contributions to the default fund, followed by further calls on members and recovery plans. Lehman's swaps at LCH never got past the first layer.

### The catch: concentration

Clearing houses solve the problem of everyone being exposed to everyone by making everyone exposed to the clearing house. They have become so central that their failure is unthinkable, so central banks now supervise them as critical infrastructure. In the UK the Bank of England oversees LCH and ICE Clear Europe; in the US, the Federal Reserve and the market regulators oversee CME Clearing and OCC; in India, SEBI and the RBI oversee NSE Clearing and CCIL. Regulators also require them to plan for their own **recovery and resolution**, so that even a clearing house could fail without bringing down the system. Few people hope to find out whether that works.

---

## The legal plumbing: the ISDA Master Agreement

Over-the-counter trades between two firms sit under one **ISDA Master Agreement**, a standard contract that the two sides customise once and then use for every trade between them for years. Its most important feature is **close-out netting**: if one party defaults, all their trades are terminated and collapsed into a single amount owed one way.

That sounds like bookkeeping. It is the difference between a manageable loss and a catastrophic one.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Bar chart of Bank A's loss when Firm B defaults, with three trades between them worth +£50m, −30m and −15m to A. Without close-out netting, B's administrator could demand the £45m A owes in full while A recovers only 40% of the £50m it is owed: a loss of £30m. With netting, the trades collapse into one net claim of £5m, and the loss at 40% recovery is £3m." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Close-out netting: why the ISDA contract matters</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Bank A's loss when Firm B defaults. Trades worth +£50m, −£30m and −£15m to A; 40% recovery. Illustrative.</text>
<line x1="230" y1="70" x2="230" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="230" y="232" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£0m</text>
<line x1="341.4" y1="70" x2="341.4" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="341.4" y="232" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£10m</text>
<line x1="452.9" y1="70" x2="452.9" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="452.9" y="232" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£20m</text>
<line x1="564.3" y1="70" x2="564.3" y2="214" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="564.3" y="232" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">£30m</text>
<text x="220" y="102" font-size="12" fill="currentColor" text-anchor="end" font-weight="600">Without netting</text>
<path d="M230,82 L561.3,82 Q564.3,82 564.3,85 L564.3,109 Q564.3,112 561.3,112 L230,112 Z" class="vf2" fill="#eb6834"><title>Without netting: loss £30m</title></path>
<text x="572.3" y="102" font-size="12.5" fill="currentColor" font-weight="600">£30m</text>
<text x="230" y="130" font-size="10.5" fill="currentColor" opacity="0.72">pay B £45m in full, recover 40% of £50m</text>
<text x="220" y="168" font-size="12" fill="currentColor" text-anchor="end" font-weight="600">With close-out netting</text>
<path d="M230,148 L260.4,148 Q263.4,148 263.4,151 L263.4,175 Q263.4,178 260.4,178 L230,178 Z" class="vf1" fill="#2a78d6"><title>With close-out netting: loss £3m</title></path>
<text x="271.4" y="168" font-size="12.5" fill="currentColor" font-weight="600">£3m</text>
<text x="230" y="196" font-size="10.5" fill="currentColor" opacity="0.72">one net claim of £5m, recover 40%</text>
<text x="20" y="270" font-size="10.5" fill="currentColor" opacity="0.6">Netting stops an administrator &quot;cherry-picking&quot;: collecting what it is owed while paying pennies on what it owes.</text>
</svg>

Suppose Bank A has three trades with Firm B, worth +£50 million, −£30 million and −£15 million to A: overall, B owes A £5 million. Then B goes bust. Without close-out netting, B's administrator could **cherry-pick**: enforce the two trades where A owes money, collecting £45 million in full, while A joins the queue of unsecured creditors for the £50 million it is owed, and perhaps recovers 40p in the pound. A's loss: **£30 million**. With close-out netting, the three trades become one claim of £5 million, and A's loss at the same recovery rate is **£3 million**. ISDA has collected legal opinions confirming that netting is enforceable in dozens of countries, and lobbied for laws where it was not, because without it the whole market's capital and collateral would have to be many times larger. Netting is what shrinks gross market value so dramatically in Lesson 1: it removed **85.3%** of exposures at the end of 2025.

A companion document, the **Credit Support Annex (CSA)**, sets the collateral rules: what assets count, how often margin moves, and at what thresholds. ISDA also writes market-wide **protocols** that thousands of firms sign at once to change their existing contracts, such as the one that moved trillions of dollars of contracts off LIBOR (Lesson 11).

---

## Margin and collateral: the shock absorbers

Two kinds of margin do two different jobs.

- **Variation margin** is the daily settlement of gains and losses, as in the futures account of Lesson 6. It stops losses accumulating: yesterday's loser has already paid.
- **Initial margin** is a deposit against the losses that could build up in the days it would take to close out a defaulter's positions.

How big should initial margin be? Big enough to cover a bad, but not unimaginable, few days.

<svg viewBox="0 0 680 300" width="100%" role="img" aria-label="Bell curve of the possible gain or loss on a cleared position over the few days a clearing house would need to close it out if its owner failed. Initial margin is set so that losses beyond it happen in only about one close-out period in two hundred, the 99.5% level used for many cleared swaps; the shaded sliver on the far left is the risk the default fund exists to cover." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Initial margin covers a bad week, not the worst one imaginable</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Possible gain or loss on a position over the close-out period. Initial margin sits at the 99.5% loss.</text>
<polygon points="70,240 70,239.9 76.8,239.9 83.5,239.9 90.2,239.8 97,239.8 103.8,239.7 110.5,239.5 117.3,239.3 124,239.1 130.8,238.7 137.5,238.3 144.2,237.7 151,236.9 157.8,236 164.5,234.7 164.5,240" class="vf8" fill="#e34948" fill-opacity="0.5"/>
<polygon points="171.2,240 171.2,233.2 178,231.3 184.8,229 191.5,226.3 198.2,223 205,219.1 211.8,214.6 218.5,209.4 225.2,203.6 232,197 238.8,189.8 245.5,182 252.2,173.6 259,164.8 265.8,155.6 272.5,146.3 279.2,136.9 286,127.8 292.8,119 299.5,110.9 306.2,103.6 313,97.3 319.8,92.3 326.5,88.5 333.2,86.2 340,85.5 346.8,86.2 353.5,88.5 360.2,92.3 367,97.3 373.8,103.6 380.5,110.9 387.2,119 394,127.8 400.8,136.9 407.5,146.3 414.2,155.6 421,164.8 427.8,173.6 434.5,182 441.2,189.8 448,197 454.8,203.6 461.5,209.4 468.2,214.6 475,219.1 481.8,223 488.5,226.3 495.2,229 502,231.3 508.8,233.2 515.5,234.7 522.2,236 529,236.9 535.8,237.7 542.5,238.3 549.2,238.7 556,239.1 562.8,239.3 569.5,239.5 576.2,239.7 583,239.8 589.8,239.8 596.5,239.9 603.2,239.9 610,239.9 610,240" class="vf1" fill="#2a78d6" fill-opacity="0.1"/>
<polyline points="70,239.9 76.8,239.9 83.5,239.9 90.2,239.8 97,239.8 103.8,239.7 110.5,239.5 117.3,239.3 124,239.1 130.8,238.7 137.5,238.3 144.2,237.7 151,236.9 157.8,236 164.5,234.7 171.2,233.2 178,231.3 184.8,229 191.5,226.3 198.2,223 205,219.1 211.8,214.6 218.5,209.4 225.2,203.6 232,197 238.8,189.8 245.5,182 252.2,173.6 259,164.8 265.8,155.6 272.5,146.3 279.2,136.9 286,127.8 292.8,119 299.5,110.9 306.2,103.6 313,97.3 319.8,92.3 326.5,88.5 333.2,86.2 340,85.5 346.8,86.2 353.5,88.5 360.2,92.3 367,97.3 373.8,103.6 380.5,110.9 387.2,119 394,127.8 400.8,136.9 407.5,146.3 414.2,155.6 421,164.8 427.8,173.6 434.5,182 441.2,189.8 448,197 454.8,203.6 461.5,209.4 468.2,214.6 475,219.1 481.8,223 488.5,226.3 495.2,229 502,231.3 508.8,233.2 515.5,234.7 522.2,236 529,236.9 535.8,237.7 542.5,238.3 549.2,238.7 556,239.1 562.8,239.3 569.5,239.5 576.2,239.7 583,239.8 589.8,239.8 596.5,239.9 603.2,239.9 610,239.9" class="vs1" stroke="#2a78d6" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="70" y1="240" x2="610" y2="240" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<line x1="166.1" y1="74" x2="166.1" y2="240" class="vs8" stroke="#e34948" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="172.1" y="88" font-size="11.5" fill="currentColor" font-weight="600">initial margin</text>
<text x="172.1" y="103" font-size="10.5" fill="currentColor" opacity="0.75">(the 99.5% loss)</text>
<text x="160.1" y="130" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">losses beyond</text>
<text x="160.1" y="144" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">the margin:</text>
<text x="160.1" y="158" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">the default</text>
<text x="160.1" y="172" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.85">fund's job</text>
<text x="340" y="162.7" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">most outcomes</text>
<text x="124" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">big loss</text>
<text x="340" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">nothing</text>
<text x="556" y="258" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.65">big gain</text>
<text x="20" y="290" font-size="10.5" fill="currentColor" opacity="0.6">Close-out periods assumed: about two days for futures, five for cleared swaps, ten for uncleared swaps.</text>
</svg>

A clearing house estimates how much a position could lose over the period it would need to close it out, typically about two days for futures and five for cleared swaps, and sets the margin to cover all but the worst sliver of outcomes: often the worst one close-out period in two hundred. For OTC trades that are not cleared, regulations introduced from 2016 require the biggest firms to exchange initial margin calibrated to a ten-day close-out, which is one reason so much activity moved into clearing. Losses beyond the margin are what the default fund is for.

The sums are large. At the end of 2025, firms had posted **$423.5 billion** of initial margin at the major clearing houses for cleared interest rate swaps and credit default swaps. Dealers had also collected **$1.6 trillion** of initial and variation margin on uncleared trades.

Margin makes the system safer but more **jumpy**. Margin models look at recent volatility, so when markets are stressed the requirement rises, exactly when cash is scarce and prices are falling. In March 2020, initial margin requirements at clearing houses worldwide rose by about **$300 billion**, and a single day's variation margin calls peaked at about **$140 billion**. Firms facing those calls sell whatever they can, which pushes prices further and raises margins again. This is how derivatives connect to the bond and repo markets of the [bond guide](?slug=global-bond-markets&lesson=lesson-03-instruments-players-and-plumbing), and it is the engine behind several episodes in Lessons 12 and 13.

> **Margin turns credit risk into liquidity risk.** It removes the danger that your counterparty cannot pay, by making everyone pay every day. The cost is that every participant must always be able to find cash, and in a crisis everyone needs it at once.

---

## Reporting: the regulators' map

Since the G20 reforms, OTC trades must be reported to **trade repositories**, giving regulators a map of who owes what to whom: under EMIR in Europe and the UK, under Dodd-Frank in the US, and to the RBI's repository at CCIL in India. The map is still imperfect. In 2021, Archegos built enormous positions across several banks through total return swaps, every one of which was reported somewhere, without any single bank or regulator seeing the whole picture in time.

---

## Check yourself

**1. Four firms trade derivatives with each other bilaterally. How many bilateral exposures are there? How many if they all clear through one clearing house?**

<details>
<summary>Show the answer</summary>

Each pair has an exposure: 4 × 3 ÷ 2 = **6** bilateral links. With a clearing house, each firm faces only the hub: **4** links. With 100 firms the numbers are 4,950 against 100, which is the point.

</details>

**2. A owes B £60m, B owes C £50m, C owes A £40m. What single payments settle everything through a clearing house?**

<details>
<summary>Show the answer</summary>

Net positions: A owes 60 and is owed 40, so **pays £20m**. B is owed 60 and owes 50, so **receives £10m**. C is owed 50 and owes 40, so **receives £10m**. £150m of gross obligations settles with £20m paid in and £20m paid out.

</details>

**3. A member of a clearing house defaults with losses of £900 million. Its initial margin is £600 million and its default fund contribution £150 million. The clearing house's skin in the game is £100 million. Who pays the rest?**

<details>
<summary>Show the answer</summary>

£600m from its initial margin, then £150m from its default fund contribution, leaves £150m. The clearing house's own £100m comes next, leaving **£50m**, which is taken from the **other members' default fund contributions**, in proportion to their size. Losses reach the survivors only after the defaulter's resources and the clearing house's own capital are used up.

</details>

**4. Bank A has trades with a failed firm worth +£80m, −£70m and −£20m to A. What is the net claim, and what does A lose at 40% recovery, with and without close-out netting?**

<details>
<summary>Show the answer</summary>

Net: 80 − 70 − 20 = **−£10m**: A owes the failed firm £10 million overall, so with netting A simply **pays £10m and loses nothing**. Without netting, A would pay £90m in full and recover only 40% of its £80m claim, £32m: a **£48m** loss on positions that were actually in the failed firm's favour.

</details>

---

## What to carry into Lesson 9

- The market is a **relay of risk**: hedgers to dealers to speculators, held together by exchanges, clearing houses, contracts and collateral.
- **Exchange-traded** contracts are standardised and cleared; **OTC** contracts are bespoke and, since the 2009 reforms, increasingly cleared and always reported.
- A **clearing house** becomes everyone's counterparty, **nets** their obligations, and absorbs a failure through a **default waterfall**: defaulter first, survivors last.
- The **ISDA Master Agreement**'s **close-out netting** stops cherry-picking and removes most of the exposure in the system.
- **Variation margin** settles daily; **initial margin** covers a bad few days. Margin turns **credit risk into liquidity risk**, and rises when cash is scarcest.

Lesson 9 shows what happens when those shock absorbers are overwhelmed: six patterns that explain fifty years of derivative disasters.

---

## Sources

- [Holland & Knight: Derivatives, bankruptcy and Lehman (about 930,000 contracts, more than 6,000 counterparties)](https://www.hklaw.com/en/insights/publications/2010/01/derivatives-bankruptcy-and-lehman)
- [LCH.Clearnet: SwapClear and the Lehman default (ECB conference presentation)](https://www.ecb.europa.eu/events/pdf/conferences/ccp_cds2/SwapClear.pdf)
- [BIS: OTC derivatives statistics, end-December 2025 (cleared shares)](https://data.bis.org/topics/OTC_DER)
- [ISDA: Key trends in the OTC derivatives markets, second half of 2025 (margin and netting)](https://www.isda.org/2026/07/09/key-trends-in-the-size-and-composition-of-otc-derivatives-markets-in-the-second-half-of-2025/)
- [BCBS, CPMI and IOSCO: Review of margining practices (September 2022)](https://www.bis.org/bcbs/publ/d526.htm)
