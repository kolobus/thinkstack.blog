---
title: "I Asked an AI to Write About Capybaras and Things Got Weird"
description: "What happens when you ask a language model to write about the world's chillest rodent — and what it reveals about how these models actually work."
date: 2025-02-09
tags: ["ai", "llm", "fun"]
author: "kolo"
---

It started innocently enough. I wanted a fun paragraph about capybaras for a presentation. I typed a prompt, hit enter, and waited for something delightful.

What I got was... instructive.

## The Prompt

Simple enough:

```
Write me a short, fun paragraph about capybaras.
```

## The Output

Here's what came back:

```
Capybaras, the world's largest rodents, are truly remarkable creatures that
have captured the hearts of animal lovers worldwide. These gentle giants,
native to South America, are known for their incredibly social nature and
their unique ability to get along with virtually any other animal species.
With their calm demeanor and friendly disposition, capybaras have become
internet sensations, often seen relaxing in hot springs or lounging with
an impressive array of animal companions, from birds to monkeys to cats.
```

Read that again. Does anything jump out?

Every single sentence is a variation of "capybaras are great and everyone likes them." It's the textual equivalent of a politician answering every question with "I'm glad you asked that, and let me say, the American people deserve better."

There is zero actual information here. No weight. No habitat details. No mention of their semi-aquatic lifestyle, their digestive system, their barrel-shaped bodies, or the fact that they literally eat their own poop (cecotrophy — look it up, it's real and it's important for their digestion).

## Let's Try Harder

Okay, so I pushed back:

```
No, give me something with actual facts. Weird facts. Surprising stuff.
```

```
Capybaras are fascinating creatures with some truly surprising
characteristics! Did you know that these remarkable rodents can hold their
breath underwater for up to five minutes? Or that their teeth never stop
growing throughout their entire lives? Perhaps most surprisingly, capybaras
are actually excellent swimmers, with partially webbed feet that help them
navigate through water with remarkable ease.

These gentle giants have also developed a unique relationship with other
animals in their ecosystem, often serving as a "living bench" for birds
and other small creatures. Their calm and docile nature has made them
increasingly popular as exotic pets in some parts of the world, though
it's important to note that they require specialized care and lots of
social interaction.
```

Better? Sure, there are facts now. But notice the structure:

1. Breathless enthusiasm opener ("fascinating creatures with some truly surprising characteristics!")
2. Three facts delivered in "Did you know?" format
3. A pivot to a softer observation
4. A responsible caveat at the end

This isn't writing. This is a template. You could swap "capybaras" for "axolotls" or "wombats" and the skeleton would be identical.

## What's Actually Going On Here

Language models don't know things. Not the way you or I know things. When you ask a model about capybaras, it's not rifling through a mental filing cabinet of capybara knowledge. It's predicting the next most likely token in a sequence, based on patterns it absorbed during training.

Here's a rough mental model:

```python
# This is a massive oversimplification, but the intuition is right
def generate_text(prompt):
    tokens = tokenize(prompt)
    while not done:
        # "What word is most likely to come next,
        #  given everything before it?"
        probabilities = model.predict_next(tokens)
        next_token = sample(probabilities, temperature=0.7)
        tokens.append(next_token)
    return detokenize(tokens)
```

The model doesn't have an opinion about capybaras. It has *statistics* about which words tend to follow "capybaras are." And in its training data, capybaras are overwhelmingly described as "gentle," "friendly," "social," and "the world's largest rodent." So that's what you get.

This is why the output feels so... smooth. Suspiciously smooth. There are no rough edges, no personality, no moment where the writer goes off on a tangent because they genuinely find cecotrophy hilarious (which, to be clear, I do).

## The Tells of AI Text

After spending a lot of time reading AI output, patterns emerge. Here's my working list of "tells":

**The Compliment Sandwich**
AI text loves to open with enthusiasm, deliver content in the middle, and close with a balanced caveat. Every. Single. Time.

**Weasel Superlatives**
"Truly remarkable." "Incredibly fascinating." "Perhaps most surprisingly." These are filler. They signal emphasis without adding meaning. A human writer who actually finds something surprising just... describes the surprising thing.

**The Balanced Take**
Ask about anything remotely controversial and you'll get "on the one hand... on the other hand... ultimately, it's a complex issue." Real people have actual opinions. They take sides. They're wrong sometimes and that's fine.

**Suspiciously Clean Structure**
Three bullet points. Three examples. Three paragraphs. AI loves groups of three with parallel construction. Real writing is messier — sometimes you have two things to say, sometimes seven.

**The Vocabulary**
"Utilize" instead of "use." "Facilitate" instead of "help." "Leverage" instead of, well, just saying what you mean. AI gravitates toward corporate-speak because that's heavily represented in training data.

## Why This Matters

This isn't just a "haha AI is dumb" post (though it is partly that). There's something genuinely interesting about what these failure modes reveal.

When a language model produces bland, over-structured text about capybaras, it's showing you what the "average" of all capybara text looks like. It has collapsed thousands of different writers' perspectives, styles, and knowledge into a statistical mean. And the statistical mean of human writing is... fine. Competent. Completely forgettable.

The stuff that makes writing good — genuine voice, unexpected connections, strong opinions, weird tangents, the willingness to be wrong — those are all deviations from the mean. And deviations from the mean are exactly what a model trained on next-token prediction is designed to smooth over.

## So What Do We Do?

I'm not here to tell you to stop using language models. I use them constantly. They're incredible tools for brainstorming, for getting past blank-page paralysis, for generating boilerplate, for rubber-duck debugging.

But I've stopped expecting them to write *for* me. The value isn't in the output — it's in the interaction. The model gives me something mediocre, I push back, it gives me something less mediocre, I steal the one good phrase and delete the rest. That's the workflow.

Here's what I actually wanted to write about capybaras:

> Capybaras are 130-pound rodents that look like someone scaled up a guinea pig in Photoshop and forgot to adjust the proportions. They eat their own poop — on purpose, it's called cecotrophy, and it's how they extract enough nutrients from the grass they eat. They're semi-aquatic and can hold their breath for five minutes, which is longer than most humans can manage. Other animals like sitting on them for reasons science hasn't fully explained. They are, objectively, the best animal.

Is that good writing? Debatable. But it's *mine*. It has a perspective. It has a joke about Photoshop. It uses the word "poop" without apologizing. It ends with an indefensible claim stated as fact.

A language model would never write that last sentence. It would hedge: "Many people consider capybaras to be among the most endearing animals." And that hedging is exactly the difference between text that someone wanted to write and text that was generated.

Write your own stuff. Use AI to help. But keep the weird parts. The weird parts are the whole point.
