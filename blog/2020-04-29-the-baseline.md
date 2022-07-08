---
slug: The baseline
title: The baseline
authors: 
- name: Trevor Cox
  title: Clarity Team Member
  url: http://trevorcox.me/trevor-cox
  image_url: https://avatars.githubusercontent.com/trevorjcox
tags: [baseline, enhancement, processing]
---

<!-- import { TwitterTimelineEmbed } from "react-twitter-embed"; -->

An overview of the current state of the baseline we’re developing for the machine learning challenges

![The baseline](/img/baseline-1536x684.png)

We’re currently developing the baseline processing that challenge entrants will need. This takes a random listener and a random audio sample of speech in noise (SPIN) and passes that through a simulated hearing aid (the Enhancement Model). This improves the speech in noise. We then have an algorithm (the Prediction Model) to estimate the Speech Intelligibility that the listener would perceive (SI score). This score can then be used to drive machine learning to improve the hearing aid.

<iframe width="560" height="315" src="https://www.youtube.com/embed/I1v8_TmXkeA" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*A talk through the baseline model we’re developing.*

The first machine learning challenge is to improve the enhancement model, in other words, to produce a better processing algorithm for the hearing aid. The second challenge is to improve the prediction model using perceptual data we’ll provide.

