---
id: cpc1_intro
title: The 1st Clarity Prediction Challenge
sidebar_label: CPC1 Introduction
sidebar_position: 1
---

<!-- import { TwitterTimelineEmbed } from "react-twitter-embed"; -->

:::info
The 1st Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the <b><a href="https://claritychallenge.org/clarity2022-workshop/">Clarity-2022 Workshsop website</a></b>.

For details of information on forthcoming challenge see <b><a href="https://claritychallenge.org/timeline">here</a></b>.
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

We have an [extensive FAQ](./cpc1_faq) to answer key questions competitors might have. So even if you have never worked on speech intelligibility models for people with hearing loss, you will have the knowledge to take part. This includes seminar recordings on the following topics:

- What hearing loss is;
- How it's typically mitigated in hearing aids; and
- How speech intelligibility is measured and estimated using metrics.

## Key dates (updated 14/01/22)

- **16th November 2021**: Launch of challenge, release of data.
- **23rd November 2021**: Webinar to introduce the challenge 15:00-17:00 UK time.
- **1st March 2022**: Release of evaluation data.
- **21st March 2022**: Submission deadline. All entrants submit their predictions plus a draft of their technical report (details below). Scores will be returned with 24 hours of submission.
- **28th March 2022**: Deadline for Interspeech paper submission.
- **25th April 2022**: Deadline by which all entrants must submit two page technical reports to Clarity Prediction Challenge 2022 workshop.
- **29th June 2022**: Clarity Prediction Challenge 2022 workshop.
- **Sept 18-22, 2022**: Interspeech 2022 Special Session.

## More details

- [Scenario](./cpc1_scenario) - a description of the listening scenario and how it has been simulated.
  
- [Baseline System](./cpc1_baseline) - a description of the baseline software model.
  
- [Data](./cpc1_data) - the data that can be used to train and evaluate your system during development.
  
- [Software](./cpc1_software) - the software tools that we are providing to help you build and evaluate a challenge entry.

- [Challenge Rules](./cpc1_rules) - the rules to which all challenge entries must adhere.
  
- [Submission](./cpc1_submission) - information about how to prepare your submission.

- [Prizes](./cpc1_prizes) - information about our prizes.

- [Download](./cpc1_download) - where to go to download the software and challenge data.

- [Find a team](../cec2/cec2_find_a_team) - if you'd like to find collaborators to help you compete.

- [FAQ](./cpc1_faq) - an extensive FAQ answering key questions and providing background knowledge to help you compete.
