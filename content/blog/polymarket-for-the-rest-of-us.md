---
title: "Polymarket for the Rest of Us: Betting on Reality"
description: "A plain-English guide to how prediction markets work, why the real money isn't in guessing outcomes but in trading mispriced probabilities, and why you should never go all-in on a senator's Instagram habits."
date: 2026-02-09
tags: ["prediction-markets", "finance", "fun"]
cover: "/images/polymarket-cover.webp"
author: "kolo"
---

A friend texted me last year: "I just made $400 betting that the government wouldn't shut down." I stared at my phone. This person can barely remember to pay rent, and now they're a political futures trader?

Welcome to Polymarket.

## Wait, You Can Bet on *That*?

Polymarket is a prediction market. Think of it as a stock exchange, except instead of buying shares of Apple, you're buying **event contracts** — **binary outcome contracts** that ask "Will X happen by Y date?" Each contract pays out $1.00 if the event happens and $0.00 if it doesn't. The current price *is* the **implied probability**.

So if "Will it snow in Tokyo in February?" is trading at $0.72, the market thinks there's roughly a 72% chance it'll happen. You can buy Yes shares at $0.72 or No shares at $0.28. If you buy Yes and it snows, you get $1.00 per share. Your profit: $0.28 per share. If it doesn't snow, you get nothing.

That's it. That's the whole thing.

One important detail most guides skip: every market has **resolution criteria** — the specific conditions that determine if the outcome is Yes or No, and the source used to verify it. Before you put money on anything, read the resolution source. "Will it snow in Tokyo" sounds simple until you realize the market might resolve based on JMA weather station data at a specific location, not whether you saw a snowflake on a webcam. Markets that seem obviously wrong are sometimes just resolving on a technicality you didn't read.

## The Mistake Everyone Makes First

Here's where most people go wrong: they treat Polymarket like a casino. Pick an event, decide what they think will happen, slam money on it, and wait for the outcome. Sometimes they're right. Sometimes they're not. Over time, they roughly break even or lose a little, and they conclude prediction markets are just gambling with extra steps.

They're missing the entire game.

The real money in prediction markets doesn't come from guessing outcomes. It comes from finding the gap between three things: what the market thinks *right now*, what the actual probability is, and what the market will think *tomorrow*.

Read that again, because it's the whole article in one sentence.

## The Three-Number Game

Let's make this concrete. Say there's a market: "Will the EU pass the new AI regulation by March 2026?"

```
Market price today:        $0.40  (market says 40%)
Actual probability:        ~55%   (based on your research)
Market price tomorrow:     ???
```

If you buy Yes at $0.40 and **hold to expiry** — waiting for the market to resolve — and you're right 55% of the time, you make money in the long run. That's the simple version, the one everyone talks about. But it's slow. You tie up capital for weeks or months waiting for an event to resolve. And any single bet can lose regardless of your edge.

The faster version: you buy Yes at $0.40, and then a **catalyst** hits. A leaked draft of the regulation surfaces. A key committee votes in favor. The market reacts and the price moves to $0.62. You sell your shares on the **order book** to another trader. You don't need to wait for March. You don't need to be right about the final outcome. You needed to be right that the market was underpricing the probability *at that moment*, and that incoming information would push the price closer to reality.

This is the difference between betting and trading. Bettors hold to expiry. Traders trade the spread.

## What "Edge" Actually Means

Edge is not "I think this will happen." Edge is the gap between the market's **implied probability** and the actual probability — and critically, it's a gap you can *explain*.

```
Market price:     $0.40 (implied probability: 40%)
Your estimate:    55%
Your edge:        15 percentage points

Expected value (EV) per share:
  Buy at $0.40, true probability 55%
  EV = (0.55 × $1.00) - $0.40 = +$0.15 per share
```

A trade with positive expected value is called **+EV**. You'll see this term constantly in prediction market communities. It just means: if you could make this exact bet a thousand times, you'd come out ahead. Any individual instance might lose. The math only works in aggregate.

But here's what matters: edge is not a single bet. Edge is a *pattern*. If you find one mispriced market, you might just be wrong. If you find fifty mispriced markets and you're right about 60% of them, you're making money. The profit doesn't come from any individual prediction being correct. It comes from being *systematically slightly better* than the market across a large number of **positions**.

Think of it like a casino, except you're the house. The house doesn't care who wins at any particular blackjack table. The house cares that across thousands of hands, the math is in its favor. Your job on Polymarket is the same: find small +EV opportunities, spread them across many markets, and let the law of large numbers do the work.

The market is made up of thousands of people, many of whom do this professionally. The price of $0.40 isn't random — it represents the collective wisdom of everyone with skin in the game. So here's your gut check: if you can't articulate *why* the market is mispriced in one sentence, you don't have edge. "I just feel like it'll happen" is not edge. "The market hasn't priced in this morning's committee vote" might be.

## Liquidity, Slippage, and Why Size Matters

So you've found an edge and you're ready to trade the spread. Not so fast — you need to understand the **order book** first, because it'll eat your profits if you ignore it.

Every Polymarket market has an order book: a list of open buy and sell orders at different prices. When you buy shares, you're matching against someone else's sell order. The difference between the best available buy price and the best available sell price is called the **bid-ask spread**. In a popular market like a US presidential election, the spread might be a penny or two. In some niche market about Mongolian rainfall? The spread could be $0.05 or more.

This matters because of **slippage**. If you want to buy $500 worth of shares in a **thin market** (low liquidity, few orders on the book), there might only be $50 worth of shares at the current price. The rest of your order fills at progressively worse prices. You thought you were buying at $0.40 but your average fill is $0.44. Your edge just got cut in half before anything even happened.

Two habits that save you from this:

**Use limit orders, not market orders.** A **limit order** says "buy at this price or better." A **market order** says "buy right now at whatever price is available." Limit orders protect you from slippage. Market orders are for when you need to get in or out immediately and are willing to pay for that urgency.

**Check the order book depth before sizing.** If a market only has $200 of liquidity within a few cents of the current price, don't drop $500 into it. Match your **position size** to the available liquidity. This is also why diversification works mechanically — spreading across many markets means you're never trying to force too much capital through a thin order book.

## Why Diversification Is the Actual Strategy

This is where most prediction market explainers stop — "find edge, bet on it, good luck." But the diversification part isn't a footnote. It *is* the strategy.

One edge is a coin flip. Fifty edges is a business.

Say you have $500. Here's the wrong way:

```
Portfolio A: The YOLO
━━━━━━━━━━━━━━━━━━━━━
$500 on "Will Mars rover find signs of life by Dec 2026?" at $0.08

  If right:  $6,250 payout. You're a genius.
  If wrong:  $0. You're an idiot.
  Chance of each: roughly 50/50 given your actual edge is tiny.
```

Now here's what it looks like when you treat it as a portfolio:

```
Portfolio B: The Spread
━━━━━━━━━━━━━━━━━━━━━━
$80 on EU AI regulation     — market $0.40, you estimate 55%
$80 on Tokyo snow           — market $0.72, you estimate 85%
$60 on Fed rate cut by June — market $0.35, you estimate 48%
$60 on SpaceX Starship test — market $0.60, you estimate 74%
$70 on UK election date     — market $0.25, you estimate 38%
$50 on Brazilian GDP growth — market $0.45, you estimate 57%
$50 on WHO pandemic decl.   — market $0.10, you estimate 5% (NO side)
$50 in reserve

  Average edge per position: ~12%
  Positions: 7
  Max exposure per position: 16%
```

Portfolio B isn't sexy. Nobody's posting that on Twitter. But here's the thing: for Portfolio A to make money, one specific thing needs to happen. For Portfolio B, you need to be *roughly right, on average, across many things*. And "roughly right on average" is a much easier bar than "exactly right on this one thing."

Some of these will lose. That's fine. That's the plan. If your average edge is real, the winners will more than cover the losers over time. And because the markets are uncorrelated — EU regulation has nothing to do with Tokyo weather — a bad outcome in one doesn't drag down the others.

**A few rules that keep this working:**

**Size with Kelly — then cut it in half.** There's a formula from probability theory called the **Kelly criterion** that tells you the mathematically optimal fraction of your bankroll to bet. The formula is:

```
Kelly % = (b × p - q) / b

where:
  b = net payout per dollar risked (what you win / what you stake)
  p = your estimated probability of winning
  q = 1 - p

Example: market at $0.40, you estimate 55% true probability
  b = $0.60 / $0.40 = 1.5  (you risk $0.40 to win $0.60)
  p = 0.55, q = 0.45
  Kelly % = (1.5 × 0.55 - 0.45) / 1.5 = 0.375 / 1.5 = 25%
```

That says bet 25% of your bankroll. Which is insane. And that's the point — full Kelly is *mathematically optimal* but assumes your edge estimate is perfect, which it never is. Most serious traders use **half-Kelly or quarter-Kelly**: if the formula says 25%, bet 12% or 6%. This protects you from **risk of ruin** — the scenario where a string of bad outcomes wipes out your bankroll before the math has time to work. Full Kelly maximizes long-term growth. Fractional Kelly keeps you alive long enough to get there.

**Mix your categories.** Five political bets in the same country isn't diversification — it's **correlated exposure** wearing five hats. A single surprise election result could wreck all five. Spread across politics, climate, tech, sports, economics. The goal is **uncorrelated positions** — outcomes that have nothing to do with each other.

**Don't hold to expiry by default.** If you bought at $0.40 and it's now $0.65 because the news broke your way, consider selling. Take the $0.25 profit, free up the capital, and redeploy it into the next mispriced market. **Capital velocity** — how fast you can rotate money through +EV positions — matters more than any single payout.

**Think in units, not dollars.** $500 is 50 units of $10 each. Spreading units across markets makes **position sizing** feel less emotional and more systematic.

## A Worked Example (Half Serious, Half Not)

It's a slow Tuesday. You're browsing Polymarket with your coffee. Three markets catch your eye:

**Market 1: "Will a sitting US senator post a thirst trap on Instagram by June 2026?"**

Trading at $0.12. You think about it. A hundred senators, many with dubious social media instincts. That one senator already posted a shirtless gym selfie in 2024. There's a new cohort of younger senators who are terminally online. You estimate 22%.

Edge: 10 points. But more importantly — this is the kind of market that moves on a single viral moment. If one senator posts anything even borderline, this market will spike to $0.40+ overnight as people pile in. You don't need the event to actually resolve. You need one slow news day and one senator with a phone.

Position: $40. You're buying optionality on congressional vanity.

**Market 2: "Will global average temperature in 2026 break the 2024 record?"**

Trading at $0.55. You've read three climate reports this week (you're fun at parties). Every model points the same direction. El Nino patterns are consistent. You estimate 72%.

Edge: 17 points. This one's slower — it won't fully resolve until year-end data comes in. But every month of record-breaking temperatures will nudge the price up incrementally. You'll likely have exit opportunities at $0.70+ well before resolution.

Position: $100. This is your bread-and-butter: wide edge, well-researched, with multiple catalysts along the way.

**Market 3: "Will a major airline lose a door mid-flight again in 2026?"**

Trading at $0.18. You have no special insight into aviation safety. You don't know the maintenance schedules, the inspection regimes, or the fleet age data. The market probably has aerospace engineers in it.

Edge: none that you can articulate. Position: $0. You skip it.

See what happened? Two positions, one skip. The senator bet is small and speculative — thin edge, but huge price movement potential on any catalyst. The climate bet is bigger and more fundamental — wide edge, slow grind, multiple exit points. The airline bet is zero because "I have a feeling" isn't a strategy.

Now here's the key: you're not sitting back and waiting for June to find out about the senator, or December for the temperature data. You're watching for catalysts. When a news cycle triggers a price move in your favor, you sell into the move, pocket the spread, and go find the next mispriced market. The portfolio is alive. It's always rotating.

## The Emotional Trap

The hardest part isn't the math. It's the psychology.

When you buy Yes at $0.40 and the price drops to $0.25, your brain screams "sell, cut your losses." But if your analysis was sound and no new information has emerged, the drop might just be noise. Other people panicking doesn't mean you're wrong.

Conversely, when your position runs from $0.50 to $0.85, the temptation to hold for that last $0.15 to $1.00 is enormous. But think about the asymmetry: $0.15 of upside vs $0.85 of downside. Selling at $0.85, taking the $0.35 profit, and redeploying into a fresh edge at $0.40 somewhere else is almost always the better play. Two $0.35 profits beat one $0.50 profit — and they definitely beat holding to $0.85 and watching it crash back to $0.30 because a single headline changed the narrative.

This is the capital velocity thing again. Money sitting in a $0.85 position is lazy money. It's earning you almost nothing relative to the risk. Put it to work somewhere the spread is wide.

## The Honest Truth

Most people who dabble in prediction markets will roughly break even, or lose a little. That's fine. It's entertainment that teaches you to think in probabilities, and that's worth something.

But the people who actually make money? They're not the ones who called the big event correctly. They're the ones running twenty positions at a time, harvesting small edges, selling into price moves, rotating capital, and doing it over and over. They treat it like a portfolio, not a parlay. They're right 58% of the time instead of 50%, and across hundreds of positions, that 8% compounds into real money.

Start small. Track every position in a spreadsheet — entry price, exit price, your estimated probability, and the actual outcome. After fifty trades, check your **calibration**: when you said 70%, did those events happen about 70% of the time? If yes, you're calibrated — your probability estimates reflect reality, and your edges are real. If your "70% confident" bets only hit 50% of the time, you're systematically overconfident, and the market is eating your lunch.

(If you want to get precise about it, look up **Brier scores** — it's a single number that measures how far off your probability estimates are. Lower is better, like a golf score. A perfect forecaster scores 0; a coin-flipper scores 0.25.)

Either way, you'll never look at a headline the same way again. Every event becomes a probability, every probability has a price, and every price is either right or wrong. That shift in thinking alone is worth the price of admission.

Just don't bet the rent money on the senator thing. Even if you're right, that's not a story you can tell at Thanksgiving.
