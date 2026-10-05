# Lesson 6: The Forward Curve

*The single most informative shape in commodity markets: contango and backwardation, the cost of carry, the convenience yield, the roll yield that can drain a fund while prices stand still, and the spreads professionals watch instead of the headline price.*

---

## The same oil, $32 apart

On 2 April 2026, a cargo of North Sea crude for loading within a few weeks was assessed at **$141.37 a barrel**, the highest physical oil price since 2008. On the same day, a Brent futures contract for delivery in June, about two months later, closed at **$109.03**.

Same oil, same place, a couple of months apart, and $32 different. Nobody had made a mistake. The market was saying, as loudly as it could, that oil in hand *now* was worth far more than oil arriving later, because the Strait of Hormuz was closed and refineries were scrambling for crude to keep running.

That message is encoded in the **forward curve**: the line of futures prices for successive delivery months, from next month to years ahead. Its shape tells you whether the world wants a commodity now or later, which makes it one of the most useful signals in all of finance.

---

## Contango and backwardation

There are two basic shapes.

<svg viewBox="0 0 680 320" width="100%" role="img" aria-label="Two illustrative forward curves. Contango: today's price is $70 and prices for later delivery climb to about $76 a year out, because supply is plentiful and the market pays for storage. Backwardation: today's price is $100 and later months fall to about $84, because supply is tight and having the commodity now carries a premium." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The shape of the forward curve</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Futures prices by delivery month. Illustrative.</text>
<text x="30" y="70" font-size="12.5" fill="currentColor" font-weight="600">Contango: later costs more</text>
<text x="30" y="86" font-size="11" fill="currentColor" opacity="0.72">Plenty of supply; the market pays you to store</text>
<line x1="70" y1="270" x2="320" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="274" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$60</text>
<line x1="70" y1="236" x2="320" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="240" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$70</text>
<line x1="70" y1="202" x2="320" y2="202" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="206" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$80</text>
<line x1="70" y1="168" x2="320" y2="168" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="172" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$90</text>
<line x1="70" y1="134" x2="320" y2="134" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="138" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$100</text>
<line x1="70" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="64" y="104" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$110</text>
<text x="70" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">today</text>
<text x="132.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">3m</text>
<text x="195" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">6m</text>
<text x="257.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">9m</text>
<text x="320" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">12m</text>
<line x1="70" y1="236" x2="320" y2="236" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" stroke-dasharray="4 4"/>
<polyline points="70,236 80.4,234.7 90.8,233.3 101.2,232.1 111.7,230.8 122.1,229.6 132.5,228.5 142.9,227.3 153.3,226.3 163.8,225.2 174.2,224.2 184.6,223.2 195,222.3 205.4,221.5 215.8,220.6 226.2,219.8 236.7,219.1 247.1,218.4 257.5,217.8 267.9,217.3 278.3,216.8 288.8,216.3 299.2,216 309.6,215.7 320,215.6" class="vs1" stroke="#2a78d6" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="70" cy="236" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<circle cx="320" cy="215.6" r="4.5" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<text x="320" y="205.6" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$76</text>
<text x="78" y="252" font-size="11" fill="currentColor" opacity="0.8">today's price $70</text>
<text x="370" y="70" font-size="12.5" fill="currentColor" font-weight="600">Backwardation: now costs more</text>
<text x="370" y="86" font-size="11" fill="currentColor" opacity="0.72">Tight supply; prompt barrels carry a premium</text>
<line x1="410" y1="270" x2="660" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="274" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$60</text>
<line x1="410" y1="236" x2="660" y2="236" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="240" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$70</text>
<line x1="410" y1="202" x2="660" y2="202" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="206" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$80</text>
<line x1="410" y1="168" x2="660" y2="168" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="172" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$90</text>
<line x1="410" y1="134" x2="660" y2="134" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="138" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$100</text>
<line x1="410" y1="100" x2="660" y2="100" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="404" y="104" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.72">$110</text>
<text x="410" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">today</text>
<text x="472.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">3m</text>
<text x="535" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">6m</text>
<text x="597.5" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">9m</text>
<text x="660" y="288" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">12m</text>
<line x1="410" y1="134" x2="660" y2="134" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" stroke-dasharray="4 4"/>
<polyline points="410,134 420.4,138.9 430.8,143.5 441.2,147.8 451.7,152 462.1,155.9 472.5,159.5 482.9,162.9 493.3,166.1 503.8,169.1 514.2,171.8 524.6,174.3 535,176.6 545.4,178.6 555.8,180.5 566.2,182.1 576.7,183.5 587.1,184.8 597.5,185.8 607.9,186.7 618.3,187.3 628.8,187.8 639.2,188.2 649.6,188.3 660,188.4" class="vs2" stroke="#eb6834" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="410" cy="134" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"/>
<circle cx="660" cy="188.4" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"/>
<text x="660" y="178.4" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">$84</text>
<text x="418" y="125" font-size="11" fill="currentColor" opacity="0.8">today's price $100</text>
<text x="20" y="312" font-size="10.5" fill="currentColor" opacity="0.6">Months along the bottom are delivery dates: &quot;3m&quot; is a contract for delivery in three months.</text>
</svg>

**Contango** means later delivery costs more than prompt delivery. It appears when supply is plentiful. With more oil, metal or grain than anyone needs right now, the surplus has to be stored, and the market pays for that storage through higher prices for later delivery. Someone who buys today and sells for delivery in six months earns the difference, which covers the rent on the tank and the interest on the money.

**Backwardation** means prompt delivery costs more than later delivery. It appears when supply is tight. A refinery that runs out of crude, or a smelter that runs out of ore, has to stop, and stopping is ruinously expensive. Having the commodity in hand today is worth a premium over having it next month. Economists call that premium the **convenience yield**: the benefit of physically holding the commodity rather than a promise of it.

---

## The cost of carry

The two shapes can be pulled together into one rule of thumb, called the **cost of carry**:

> **futures price ≈ spot price + storage cost + financing cost − convenience yield**

When stocks are ample, the convenience yield is close to zero and the futures price sits above spot by about the cost of carrying the commodity forward: contango. When stocks are scarce, the convenience yield is large and can swamp the carrying costs: backwardation.

### Why contango has a ceiling

Contango cannot grow without limit, because arbitrage stops it. Suppose spot oil is $70, storage costs $0.50 a barrel a month, and money costs 5% a year. Carrying a barrel for six months costs $3.00 of storage and $70 × 5% × ½ = $1.75 of interest, so six-month futures should trade at no more than $74.75.

<svg viewBox="0 0 680 250" width="100%" role="img" aria-label="Number line of the cost of carry. Spot oil at $70, plus $3 of storage for six months, plus $1.75 of financing at 5% a year, gives a ceiling of $74.75 for the six-month futures price. If futures trade at $77, a trader can buy spot, store it and sell futures, locking in $2.25 a barrel, and that trade pulls the futures price back down." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The cost of carry caps contango</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Six-month futures on a barrel of oil. Illustrative.</text>
<line x1="70" y1="150" x2="630" y2="150" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.5"/>
<line x1="70" y1="146" x2="70" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="70" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$68</text>
<line x1="126" y1="146" x2="126" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="126" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$69</text>
<line x1="182" y1="146" x2="182" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="182" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$70</text>
<line x1="238" y1="146" x2="238" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="238" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$71</text>
<line x1="294" y1="146" x2="294" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="294" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$72</text>
<line x1="350" y1="146" x2="350" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="350" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$73</text>
<line x1="406" y1="146" x2="406" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="406" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$74</text>
<line x1="462" y1="146" x2="462" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="462" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$75</text>
<line x1="518" y1="146" x2="518" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="518" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$76</text>
<line x1="574" y1="146" x2="574" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="574" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$77</text>
<line x1="630" y1="146" x2="630" y2="154" stroke="currentColor" stroke-width="1" stroke-opacity="0.5"/>
<text x="630" y="172" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72" style="font-variant-numeric:tabular-nums">$78</text>
<circle cx="182" cy="150" r="6" class="vf1 vring" fill="#2a78d6" stroke="#ffffff" stroke-width="2"/>
<text x="182" y="100" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">Spot price</text>
<text x="182" y="115" font-size="11.5" fill="currentColor" text-anchor="middle" style="font-variant-numeric:tabular-nums">$70.00</text>
<rect x="183" y="143" width="166" height="14" rx="3" class="vf2" fill="#eb6834" fill-opacity="0.85"><title>+ storage $3.00</title></rect>
<text x="266" y="194" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">+ storage $3.00</text>
<rect x="351" y="143" width="96" height="14" rx="3" class="vf3" fill="#1baf7a" fill-opacity="0.85"><title>+ financing $1.75</title></rect>
<text x="399" y="194" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.85">+ financing $1.75</text>
<line x1="448" y1="86" x2="448" y2="158" stroke="currentColor" stroke-width="1.6" stroke-opacity="0.85"/>
<text x="448" y="66" font-size="12" fill="currentColor" text-anchor="middle" font-weight="600">Ceiling: $74.75</text>
<text x="448" y="81" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">spot + carry</text>
<circle cx="574" cy="150" r="6" class="vf8 vring" fill="#e34948" stroke="#ffffff" stroke-width="2"/>
<text x="574" y="100" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">Futures at $77</text>
<text x="574" y="115" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">too high</text>
<line x1="448" y1="214" x2="574" y2="214" class="vs8" stroke="#e34948" stroke-width="1.6"/>
<line x1="448" y1="208" x2="448" y2="220" class="vs8" stroke="#e34948" stroke-width="1.6"/>
<line x1="574" y1="208" x2="574" y2="220" class="vs8" stroke="#e34948" stroke-width="1.6"/>
<text x="511" y="234" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="600">arbitrage profit $2.25</text>
<text x="20" y="244" font-size="10.5" fill="currentColor" opacity="0.6">Storage $0.50 a barrel a month; financing 5% a year on $70 for half a year.</text>
</svg>

If they trade at $77, a trader can buy oil at $70, store it, and sell a futures contract at $77 for delivery in six months, locking in $2.25 a barrel with no exposure to the oil price at all. This is **cash and carry**, the arbitrage across time from Lesson 4. As traders pile in, buying spot pushes the spot price up and selling futures pushes the futures price down, until the gap is no bigger than the cost of carry. In the deep contango of 2015 and 2016, the trade was profitable enough that traders chartered tankers simply to store oil at sea.

The ceiling holds only while storage is available. If tanks fill up, the storage cost effectively becomes infinite, and the arbitrage that held contango in check disappears. That is exactly what happened in April 2020, when the price of the expiring US oil contract fell to minus $37.63 (Lesson 11).

### Why backwardation has no ceiling

The arbitrage does not work in reverse. If prompt oil is far dearer than oil for delivery next year, you cannot borrow next year's barrels and deliver them today. Only people who already hold oil can sell it now, and in a genuine shortage most of them need it themselves. That is why backwardation can become extreme in a crisis, as the $32 gap in April 2026 showed.

> **The curve is a reading of inventories.** Contango says stocks are ample and the market is paying people to hold them. Backwardation says stocks are short and the market is paying a premium for anything available now. The steeper the curve, the louder the message.

---

## Roll yield: losing money while prices stand still

Most investors who buy commodities through futures never intend to take delivery. So before each contract expires, they sell it and buy the next one, which is called **rolling**. The price at which they roll is set by the shape of the curve, and over time that matters enormously.

In contango, every roll means selling the expiring contract cheap and buying the next one dear. If next month's contract costs 2% more than spot, and spot does not move, the new contract drifts down to spot as it approaches expiry, losing about 2% a month. In backwardation the opposite happens, and rolling earns a gain.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart over twelve months. The spot price stays flat at 100. A fund holding futures in a market where next month's contract costs 2% more than spot loses on every roll and ends the year at 78.8. In a market where next month costs 2% less, the fund gains on every roll and ends at 127.4." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">Roll yield: the price goes nowhere, the fund does not</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Value of $100 invested in futures, rolled monthly, with the spot price flat all year. Illustrative.</text>
<line x1="90" y1="280" x2="570" y2="280" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="284" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">70</text>
<line x1="90" y1="248" x2="570" y2="248" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="252" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">80</text>
<line x1="90" y1="216" x2="570" y2="216" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="220" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">90</text>
<line x1="90" y1="184" x2="570" y2="184" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="188" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">100</text>
<line x1="90" y1="152" x2="570" y2="152" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="156" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">110</text>
<line x1="90" y1="120" x2="570" y2="120" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="124" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">120</text>
<line x1="90" y1="88" x2="570" y2="88" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="82" y="92" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">130</text>
<text x="90" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">start</text>
<text x="207.5" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">month 3</text>
<text x="325" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">month 6</text>
<text x="442.5" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">month 9</text>
<text x="560" y="298" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">month 12</text>
<line x1="90" y1="184" x2="560" y2="184" class="vs1" stroke="#2a78d6" stroke-width="2.2"/>
<text x="570" y="188" font-size="11.5" fill="currentColor" font-weight="600">Spot price: 100</text>
<polyline points="90,184 129.2,177.5 168.3,170.8 207.5,164 246.7,157.1 285.8,150 325,142.8 364.2,135.4 403.3,127.9 442.5,120.2 481.7,112.4 520.8,104.4 560,96.2" class="vs3" stroke="#1baf7a" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="560" cy="96.2" r="4.5" class="vf3 vring" fill="#1baf7a" stroke="#ffffff" stroke-width="2"><title>Backwardation of 2% a month: 127.4 after a year</title></circle>
<text x="570" y="94.2" font-size="12" fill="currentColor" font-weight="600">127.4</text>
<text x="570" y="109.2" font-size="10.5" fill="currentColor" opacity="0.75">backwardation</text>
<polyline points="90,184 129.2,190.3 168.3,196.4 207.5,202.5 246.7,208.4 285.8,214.2 325,219.8 364.2,225.4 403.3,230.9 442.5,236.2 481.7,241.5 520.8,246.6 560,251.7" class="vs8" stroke="#e34948" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<circle cx="560" cy="251.7" r="4.5" class="vf8 vring" fill="#e34948" stroke="#ffffff" stroke-width="2"><title>Contango of 2% a month: 78.8 after a year</title></circle>
<text x="570" y="249.7" font-size="12" fill="currentColor" font-weight="600">78.8</text>
<text x="570" y="264.7" font-size="10.5" fill="currentColor" opacity="0.75">contango</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Contango: 100 × (1/1.02)^12 = 78.8. Backwardation: 100 × (1/0.98)^12 = 127.4.</text>
</svg>

This explains a trap that catches many beginners: **a futures-based oil fund can lose money for years even if the oil price ends up exactly where it started.** The investor is not just betting on the price; they are paying, or being paid, the shape of the curve every month. Physically backed products, such as most gold ETFs, avoid the roll entirely because they hold metal in vaults, but they pay storage and insurance fees instead, which is the cost of carry in another form.

---

## Basis and the spreads that tell a story

Lesson 4 introduced the **basis**: the gap between a local physical price and the futures price, reflecting transport, quality and local supply. Traders often care more about **spreads**, the difference between two related prices, than about the headline price itself, because spreads show where the pressure actually sits.

| Spread | What it compares | What it tells you |
| --- | --- | --- |
| **Calendar spread** | Near month versus a later month | How tight the market is right now |
| **Brent versus WTI** | International versus US crude | Pipeline and export capacity, US supply |
| **Crack spread** | Crude oil versus refined products | Refining profitability |
| **Spark spread** | Gas versus electricity | Profitability of gas-fired power stations |
| **Crush spread** | Soybeans versus soymeal and soy oil | Profitability of oilseed processing |

Two of them are worth seeing in action. The **crack spread** turns a refinery's economics into a single number. The common "3-2-1" version assumes three barrels of crude become roughly two barrels of petrol and one of diesel.

<svg viewBox="0 0 680 270" width="100%" role="img" aria-label="Flow diagram of a 3-2-1 crack spread. Three barrels of crude at $80 cost $240. Refined, they yield two barrels of petrol at $2.50 a gallon, worth $210, and one barrel of diesel at $3.00 a gallon, worth $126: $336 in total. The refining margin is $96 on three barrels, or $32 a barrel." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">The crack spread: a refiner's margin in one number</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">The &quot;3-2-1&quot; version: three barrels of crude into two of petrol and one of diesel. Illustrative.</text>
<rect x="20" y="90" width="170" height="92" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" class="vf2" fill="#eb6834" fill-opacity="0.08"/>
<text x="105" y="116" font-size="12.5" fill="currentColor" text-anchor="middle" font-weight="600">3 barrels of crude</text>
<text x="105" y="136" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.8">3 × $80</text>
<text x="105" y="162" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">cost $240</text>
<line x1="194" y1="136" x2="252" y2="136" stroke="currentColor" stroke-width="1.8" stroke-opacity="0.6"/>
<polygon points="252,136 245.6,138.9 245.6,133.1" fill="currentColor" fill-opacity="0.6"/>
<rect x="256" y="104" width="130" height="64" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.6" fill="none"/>
<text x="321" y="132" font-size="13" fill="currentColor" text-anchor="middle" font-weight="600">Refinery</text>
<text x="321" y="150" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.72">&quot;cracks&quot; crude</text>
<line x1="390" y1="122" x2="448" y2="104" stroke="currentColor" stroke-width="1.8" stroke-opacity="0.6"/>
<polygon points="448,104 442.7,108.6 441,103.2" fill="currentColor" fill-opacity="0.6"/>
<line x1="390" y1="150" x2="448" y2="170" stroke="currentColor" stroke-width="1.8" stroke-opacity="0.6"/>
<polygon points="448,170 441,170.6 442.9,165.2" fill="currentColor" fill-opacity="0.6"/>
<rect x="452" y="70" width="208" height="66" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" class="vf1" fill="#2a78d6" fill-opacity="0.08"/>
<text x="468" y="92" font-size="12" fill="currentColor" font-weight="600">2 barrels of petrol</text>
<text x="468" y="110" font-size="11" fill="currentColor" opacity="0.78">2 × 42 gal × $2.50</text>
<text x="644" y="126" font-size="13" fill="currentColor" text-anchor="end" font-weight="600">$210</text>
<rect x="452" y="146" width="208" height="66" rx="8" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45" class="vf3" fill="#1baf7a" fill-opacity="0.08"/>
<text x="468" y="168" font-size="12" fill="currentColor" font-weight="600">1 barrel of diesel</text>
<text x="468" y="186" font-size="11" fill="currentColor" opacity="0.78">1 × 42 gal × $3.00</text>
<text x="644" y="202" font-size="13" fill="currentColor" text-anchor="end" font-weight="600">$126</text>
<text x="20" y="236" font-size="12.5" fill="currentColor" opacity="0.9">Products $336 − crude $240 = $96 on three barrels:</text>
<text x="20" y="256" font-size="12.5" fill="currentColor" font-weight="600">a crack spread of $32 a barrel.</text>
</svg>

The **Brent-WTI spread** tells the story of American oil over fifteen years.

<svg viewBox="0 0 680 330" width="100%" role="img" aria-label="Line chart of Brent minus WTI, monthly averages, January 2010 to September 2026. The gap widened to $25.3 in September 2011 when US crude was trapped inland by pipeline limits and the export ban, shrank to a few dollars after the ban was lifted in December 2015, and jumped to $21.8 in April 2026 as Gulf supply was cut off." fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" font-size="14" fill="currentColor" font-weight="600">A spread that tells a story: Brent minus WTI</text>
<text x="20" y="45.5" font-size="11.5" fill="currentColor" opacity="0.72">Monthly average spot prices, dollars a barrel, 2010 to September 2026</text>
<line x1="80" y1="270" x2="630" y2="270" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="274" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">−$5</text>
<line x1="80" y1="242.3" x2="630" y2="242.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="72" y="246.2" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$0</text>
<line x1="80" y1="214.6" x2="630" y2="214.6" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="218.5" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$5</text>
<line x1="80" y1="186.9" x2="630" y2="186.9" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="190.8" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$10</text>
<line x1="80" y1="159.1" x2="630" y2="159.1" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="163.1" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$15</text>
<line x1="80" y1="131.4" x2="630" y2="131.4" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="135.4" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$20</text>
<line x1="80" y1="103.7" x2="630" y2="103.7" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="107.7" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$25</text>
<line x1="80" y1="76" x2="630" y2="76" stroke="currentColor" stroke-width="1" stroke-opacity="0.12"/>
<text x="72" y="80" font-size="11" fill="currentColor" text-anchor="end" opacity="0.72" style="font-variant-numeric:tabular-nums">$30</text>
<text x="80" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2010</text>
<text x="209.6" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2014</text>
<text x="339.2" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2018</text>
<text x="468.8" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2022</text>
<text x="598.4" y="290" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.72">2026</text>
<polygon points="80,242.3 80,253.4 82.7,253.9 85.4,253.4 88.1,239.5 90.8,227.9 93.5,245.6 96.2,251.7 98.9,241.7 101.6,228.4 104.3,236.7 107,234 109.7,227.3 112.4,204 115.1,161.9 117.8,178.5 120.5,169.7 123.2,169.1 125.9,145.3 128.6,135.9 131.3,110.4 134,102.1 136.7,114.2 139.4,168 142.1,190.7 144.8,181.9 147.5,145.3 150.2,138.6 152.9,146.9 155.6,154.7 158.3,169.1 161,158 163.7,135.9 166.4,137.5 169.1,117.6 171.8,114.8 174.5,123.1 177.2,140.9 179.9,124.8 182.6,151.9 185.3,181.9 188,196.8 190.7,201.8 193.4,225.7 196.1,217.3 198.8,212.4 201.5,192.4 204.2,163.6 206.9,171.3 209.6,173 212.3,197.4 215,204.6 217.7,210.7 220.4,199.1 223.1,205.1 225.8,219.6 228.5,211.8 231.2,219.6 233.9,226.2 236.6,227.9 239.3,225.7 242,237.9 244.7,201.8 247.4,197.9 250.1,214.6 252.8,212.9 255.5,228.4 258.2,214.6 260.9,219.6 263.6,232.9 266.3,231.8 269,232.9 271.7,239.5 274.4,246.2 277.1,226.8 279.8,235.1 282.5,235.1 285.2,240.1 287.9,243.9 290.6,240.1 293.3,235.1 296,236.7 298.7,243.4 301.4,237.9 304.1,230.6 306.8,229 309.5,230.6 312.2,229 314.9,231.8 317.6,229 320.3,232.9 323,231.2 325.7,223.4 328.4,212.4 331.1,209 333.8,209.6 336.5,207.4 339.2,212.9 341.9,224.5 344.6,221.8 347.3,212.9 350,205.1 352.7,199.6 355.4,222.3 358.1,214 360.8,194.1 363.5,188.5 366.2,195.2 368.9,200.7 371.6,199.1 374.3,191.8 377,196.8 379.7,201.8 382.4,188.5 385.1,194.6 387.8,206.3 390.5,217.3 393.2,212.9 395.9,212.4 398.6,211.2 401.3,208.5 404,208.5 406.7,217.3 409.4,225.1 412.1,204.6 414.8,229 417.5,233.4 420.2,231.2 422.9,231.8 425.6,234 428.3,236.7 431,230.6 433.7,226.8 436.4,228.4 439.1,226.2 441.8,226.8 444.5,225.1 447.2,226.8 449.9,232.9 452.6,231.8 455.3,229.5 458,225.7 460.7,229 463.4,233.4 466.1,226.8 468.8,229 471.5,219.6 474.2,202.9 476.9,220.1 479.6,226.8 482.3,211.8 485,192.4 487.7,203.5 490.4,207.4 493.1,210.1 495.8,207.4 498.5,217.9 501.2,214.6 503.9,209.6 506.6,214 509.3,216.2 512,219.6 514.7,216.2 517.4,221.8 520.1,215.7 522.8,217.9 525.5,211.8 528.2,210.1 530.9,210.1 533.6,207.4 536.3,202.9 539,215.1 541.7,211.8 544.4,224.5 547.1,221.8 549.8,215.7 552.5,212.9 555.2,216.2 557.9,219.6 560.6,216.2 563.3,220.1 566,219.6 568.7,220.7 571.4,215.7 574.1,216.8 576.8,224.5 579.5,220.1 582.2,222.3 584.9,219.6 587.6,218.5 590.3,217.3 593,220.1 595.7,215.7 598.4,206.3 601.1,206.3 603.8,173 606.5,121.5 609.2,195.7 611.9,222.9 614.6,220.1 617.3,196.8 620,132 620,242.3" class="vf2" fill="#eb6834" fill-opacity="0.1"/>
<polyline points="80,253.4 82.7,253.9 85.4,253.4 88.1,239.5 90.8,227.9 93.5,245.6 96.2,251.7 98.9,241.7 101.6,228.4 104.3,236.7 107,234 109.7,227.3 112.4,204 115.1,161.9 117.8,178.5 120.5,169.7 123.2,169.1 125.9,145.3 128.6,135.9 131.3,110.4 134,102.1 136.7,114.2 139.4,168 142.1,190.7 144.8,181.9 147.5,145.3 150.2,138.6 152.9,146.9 155.6,154.7 158.3,169.1 161,158 163.7,135.9 166.4,137.5 169.1,117.6 171.8,114.8 174.5,123.1 177.2,140.9 179.9,124.8 182.6,151.9 185.3,181.9 188,196.8 190.7,201.8 193.4,225.7 196.1,217.3 198.8,212.4 201.5,192.4 204.2,163.6 206.9,171.3 209.6,173 212.3,197.4 215,204.6 217.7,210.7 220.4,199.1 223.1,205.1 225.8,219.6 228.5,211.8 231.2,219.6 233.9,226.2 236.6,227.9 239.3,225.7 242,237.9 244.7,201.8 247.4,197.9 250.1,214.6 252.8,212.9 255.5,228.4 258.2,214.6 260.9,219.6 263.6,232.9 266.3,231.8 269,232.9 271.7,239.5 274.4,246.2 277.1,226.8 279.8,235.1 282.5,235.1 285.2,240.1 287.9,243.9 290.6,240.1 293.3,235.1 296,236.7 298.7,243.4 301.4,237.9 304.1,230.6 306.8,229 309.5,230.6 312.2,229 314.9,231.8 317.6,229 320.3,232.9 323,231.2 325.7,223.4 328.4,212.4 331.1,209 333.8,209.6 336.5,207.4 339.2,212.9 341.9,224.5 344.6,221.8 347.3,212.9 350,205.1 352.7,199.6 355.4,222.3 358.1,214 360.8,194.1 363.5,188.5 366.2,195.2 368.9,200.7 371.6,199.1 374.3,191.8 377,196.8 379.7,201.8 382.4,188.5 385.1,194.6 387.8,206.3 390.5,217.3 393.2,212.9 395.9,212.4 398.6,211.2 401.3,208.5 404,208.5 406.7,217.3 409.4,225.1 412.1,204.6 414.8,229 417.5,233.4 420.2,231.2 422.9,231.8 425.6,234 428.3,236.7 431,230.6 433.7,226.8 436.4,228.4 439.1,226.2 441.8,226.8 444.5,225.1 447.2,226.8 449.9,232.9 452.6,231.8 455.3,229.5 458,225.7 460.7,229 463.4,233.4 466.1,226.8 468.8,229 471.5,219.6 474.2,202.9 476.9,220.1 479.6,226.8 482.3,211.8 485,192.4 487.7,203.5 490.4,207.4 493.1,210.1 495.8,207.4 498.5,217.9 501.2,214.6 503.9,209.6 506.6,214 509.3,216.2 512,219.6 514.7,216.2 517.4,221.8 520.1,215.7 522.8,217.9 525.5,211.8 528.2,210.1 530.9,210.1 533.6,207.4 536.3,202.9 539,215.1 541.7,211.8 544.4,224.5 547.1,221.8 549.8,215.7 552.5,212.9 555.2,216.2 557.9,219.6 560.6,216.2 563.3,220.1 566,219.6 568.7,220.7 571.4,215.7 574.1,216.8 576.8,224.5 579.5,220.1 582.2,222.3 584.9,219.6 587.6,218.5 590.3,217.3 593,220.1 595.7,215.7 598.4,206.3 601.1,206.3 603.8,173 606.5,121.5 609.2,195.7 611.9,222.9 614.6,220.1 617.3,196.8 620,132" class="vs2" stroke="#eb6834" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none"/>
<line x1="271.7" y1="82" x2="271.7" y2="242.3" stroke="currentColor" stroke-width="1" stroke-opacity="0.45"/>
<text x="276.7" y="92" font-size="10.5" fill="currentColor" opacity="0.8">US lifts its crude</text>
<text x="276.7" y="105" font-size="10.5" fill="currentColor" opacity="0.8">export ban, Dec 2015</text>
<circle cx="134" cy="102.1" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>September 2011: $25.3</title></circle>
<text x="144" y="106.1" font-size="11.5" fill="currentColor" font-weight="600">$25.3</text>
<text x="144" y="120.1" font-size="10.5" fill="currentColor" opacity="0.8">US crude trapped inland</text>
<circle cx="606.5" cy="121.5" r="4.5" class="vf2 vring" fill="#eb6834" stroke="#ffffff" stroke-width="2"><title>April 2026: $21.8</title></circle>
<text x="596.5" y="125.5" font-size="11.5" fill="currentColor" text-anchor="end" font-weight="600">$21.8</text>
<text x="596.5" y="139.5" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.8">Gulf supply cut off</text>
<text x="20" y="322" font-size="10.5" fill="currentColor" opacity="0.6">Source: World Bank Commodity Price Data (Pink Sheet). Brent is a spot price; futures spreads are narrower.</text>
</svg>

In 2011 and 2012, booming US production was trapped inland: pipelines could not carry it to the coast fast enough, and a ban dating from the 1970s stopped most crude exports. WTI, priced at Cushing, Oklahoma, fell far below Brent. New pipelines and the lifting of the export ban in December 2015 tied the two together, and the spread shrank to a few dollars, roughly the cost of shipping oil across the Atlantic. In 2026 it blew out again, for a different reason. This time the shortage was on the other side of the world, and tankers, freight and war-risk insurance could not move American oil to it fast enough, so Brent rose far above WTI. The arbitrage that normally holds the gap near the cost of shipping was there; it simply could not work quickly enough.

---

## Check yourself

**1. Spot copper is $10,000 a tonne. Storage costs $12 a tonne a month and money costs 6% a year. What is the most that three-month futures should trade at, if the convenience yield is zero?**

<details>
<summary>Show the answer</summary>

Storage: 3 × $12 = $36. Financing: $10,000 × 6% × ¼ = $150. Ceiling: $10,000 + $36 + $150 = **$10,186**. Above that, a trader could buy, store and sell futures for a riskless profit.

</details>

**2. A fund rolls oil futures monthly in a contango of 1% a month, and spot oil is flat for a year. Roughly what does $100 become?**

<details>
<summary>Show the answer</summary>

$100 × (1/1.01)^12 ≈ **$88.70**, a loss of about 11% with no change in the oil price.

</details>

**3. Crude is $100 a barrel, petrol $3.00 a gallon and diesel $3.60 a gallon. What is the 3-2-1 crack spread? (A barrel is 42 gallons.)**

<details>
<summary>Show the answer</summary>

Petrol: 2 × 42 × $3.00 = $252. Diesel: 1 × 42 × $3.60 = $151.20. Products: $403.20. Crude: 3 × $100 = $300. Margin: $103.20 on three barrels, so a crack spread of **$34.40 a barrel**.

</details>

**4. Oil for delivery next month is $8 above oil for delivery in a year. What is the market telling you?**

<details>
<summary>Show the answer</summary>

The curve is in **backwardation**: supply is tight now, stocks are low, and buyers are paying a premium for prompt barrels. It also tells you that the market expects the shortage to ease, which is the cure for high prices from Lesson 5 priced in advance.

</details>

---

## What to carry into Lesson 7

- The **forward curve** lines up prices for successive delivery months. **Contango** (later costs more) signals ample supply; **backwardation** (now costs more) signals tight supply.
- **Futures ≈ spot + storage + financing − convenience yield.** Arbitrage caps contango at the cost of carry while storage is available; backwardation has no ceiling.
- **Roll yield** means a futures fund can lose or gain heavily while spot prices go nowhere.
- **Spreads** (calendar, Brent-WTI, crack, spark, crush) show where the pressure actually sits.

Lessons 5 and 6 explained the forces inside a commodity market. Lesson 7 turns to the forces outside it: the dollar, interest rates, investors, weather and geopolitics.

---

## Sources

- [CNBC: Dated Brent soars to $141.37, $32.33 above June Brent futures, 2 April 2026](https://www.cnbc.com/2026/04/02/dated-brent-oil-price-actual-cargo-highest-level-2008.html)
- [World Bank Commodity Price Data (the Pink Sheet): monthly prices](https://www.worldbank.org/en/research/commodity-markets)
