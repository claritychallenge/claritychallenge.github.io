---
id: cpc2_intro
title: CPC2 Introduction
sidebar_label: CPC2 Introduction
sidebar_position: 1
---

<!-- import { TwitterTimelineEmbed } from "react-twitter-embed"; -->
:::warning
ALL NEEDS UPDATING
:::

To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. [audiogram](https://www.hear-it.org/Audiogram-)) and estimates the speech intelligibility score that the listener would achieve in a listening test. Here is a brief introduction to the challenge:

<iframe width="560" height="315" src="https://www.youtube.com/embed/9DY2VOeRU0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For the prediction challenge we will provide the following data:

- Audio produced by a variety of (simulated) hearing aids for speech-in-noise;
- The corresponding clean reference signals (the original speech);
- Characteristics of the listeners (pure tone audiogram, etc.); and
- The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard for the speech-in-noise.

The challenge has two separate but related tracks

- <b>Track 1: Closed-set</b> - i.e, Systems that can make prediction for hearing-aid algorithms and listeners that have been seen in the training data.
- <b>Track 2: Open-set</b> - i.e, Systems that can make predictions for unseen hearing-aid algorithms and/or listeners.

We have an [extensive FAQ](../cpc1/cpc1_faq) to answer key questions competitors might have. So even if you have never worked on speech intelligibility models for people with hearing loss, you will have the knowledge to take part. This includes seminar recordings on the following topics:

- What hearing loss is;
- How it's typically mitigated in hearing aids; and
- How speech intelligibility is measured and estimated using metrics.
