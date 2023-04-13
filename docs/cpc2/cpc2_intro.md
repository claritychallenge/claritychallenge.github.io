---
id: cpc2_intro
title: The 2nd Clarity Prediction Challenge
sidebar_label: CPC2 Introduction
sidebar_position: 1
---

<!-- import { TwitterTimelineEmbed } from "react-twitter-embed"; -->
:::info
The 2nd Clarity Prediction Challenge is currently open. All participation instructions can be found on this site. Results will be presented at the <b><a href="https://claritychallenge.org/clarity2023-workshop/">ISCA Clarity-2023 Workshsop</a></b> in Dublin on 19th August.

For details on our current challenge see <b><a href="https://claritychallenge.org/docs/cpc2/cpc2_intro">here</a></b>.
:::

To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. [audiogram](https://www.hear-it.org/Audiogram-)) and estimates the speech intelligibility score that the listener would achieve in a listening test.

Last year we ran the [CPC1 Challenge](../cpc1/cpc1_intro) to develop such a model. The challenge was presented at an online workshop and a special session of Interspeech 2022. We are now running the 2nd round of this challenge, which builds on the first by using more complex signals and a larger set of listening test data for training and evaluating the prediction systems.

The outputs of the new challenge will be presented at an [ISCA workshop](https://claritychallenge.org/clarity2023-workshop/) that is being run as a satellite event to Interspeech 2023 in Dublin on 19th August 2023.

This site provides entrants with what they need to know to take part in the challenge.

## Short Description

The task involves estimating the intelligibility of speech-in-noise signals that have been processed by hearing aid algorithms and presented to listeners with hearing loss. Each signal contains a short sentence that the listeners were asked to repeat. The system you build needs to be able to predict how many of the words were recognised correctly by the listeners. It is not expected that systems can do this accurately on a per sentence basis, but rather we will rank systems on this basis of how well they perform over a large evaluation set, i.e., which system produces the lowest average estimation error.

The hearing aid signals being assessed vary widely in quality. Examples of good, fair and poor signals are provided below. Your prediction algorithm needs to be able to cope with this variation.

<table>
<tr>
<th>Good</th>
<th>Fair</th>
<th>Poor</th>
</tr>
<tr>
<td>
<audio controls  style={{width: "250px"}} >
<source src="/audio/CEC2_samples/CEC2_E009/S08501_L0104_HA-output.wav" type="audio/wav"/>
Your browser does not support the audio element.
</audio>
</td>
<td>
<audio controls style={{width: "250px"}}>
<source src="/audio/CEC2_samples/CEC2_E022/S08501_L0104_HA-output.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>
</td>
<td>
<audio controls style={{width: "250px"}}>
<source src="/audio/CEC2_samples/CEC2_E032/S08501_L0104_HA-output.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>
</td>
</tr>
<tr>
<td>
<audio controls style={{width: "250px"}}>
<source src="/audio/CEC2_samples/CEC2_E009/S08502_L0106_HA-output.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>
</td>
<td>
<audio controls style={{width: "250px"}}>
<source src="/audio/CEC2_samples/CEC2_E022/S08502_L0106_HA-output.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>
</td>
<td>
<audio controls style={{width: "250px"}}>
<source src="/audio/CEC2_samples/CEC2_E032/S08502_L0106_HA-output.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>
</td>
</tr></table>

### The data

You will be provided with a set of training data which you can use to develop your systems. This data consists of

- Audio produced by a variety of (simulated) hearing aids for speech-in-noise;
- The corresponding clean reference signals (the original speech);
- Characteristics of the listeners (pure tone audiograms, etc);
- The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard after listening to the hearing aid processed signal.

For full details of the data see the [Data](./cpc2_data) page.

### The task

You will be provided with an evaluation set containing

- Audio produced by a variety of (simulated) hearing aids for speech-in-noise;
- The audiogram of a listener;
- The clean reference signal (the original speech).

Your task will be to produce a score (0.0 to 1.0), which should predict the proportion of words in the reference signal that the listener would be able to repeat correctly after listening to the hearing aid processed signal.

We will be considering two types of system: intrusive and non-intrusive. Intrusive systems (also known as double-ended) are those that require a clean speech reference, and non-intrusive systems (also known as single-ended) are those that use the hearing aid output alone.

Intrusive and non-intrusive systems will be separately ranked according to the RMSE between their predictions and the true values.

To help you get started we have provided a baseline system that uses the HASPI metric to predict the speech intelligibility score. Details of this system are available on the [Baseline](./cpc2_baseline) page.

For full details of the task see the [rules](./cpc2_rules) page.

### Registering and submitting

To take part in the challenge you will need to [register your team](./taking_part/cpc2_registration.mdx) and [download the data](./taking_part/cpc2_download.mdx). Entrants will have until 31st July to complete their submissions. Full instructions for submission are available on the [Submission](./taking_part/cpc2_submission.mdx) page.
