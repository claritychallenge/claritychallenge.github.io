---
id: icassp2023_intro
title: The ICASSP 2023 Clarity Grand Challenge
sidebar_label: ICASSP 2023 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<!--:::info
**14th April 2022: Software tools and data are now available for [download](cec2_download.mdx)**.
:::
-->
:::info

- Registration is now open! [Register Now](taking_part/icassp2023_registration.mdx). 
- The Clarity [GitHub repository](https://github.com/claritychallenge/clarity) now includes the [ICASSP 2023 baseline systems](software/icassp2023_baseline.mdx).
:::

This ICASSP SP Clarity Challenge (Speech Enhancement for Hearing Aids) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly.

## Overview of challenge

430 million people worldwide require rehabilitation to address hearing loss (World Health Organization). Yet even in developed countries, only 40% of people who could benefit from hearing aids have them and use them often enough. People believe that hearing aids perform poorly, with the difficulties of hearing speech-in-noise being a key issue.
Speech enhancement is a major research area with thousands of papers each year, yet only a tiny percentage of these explicitly consider improvements for lisClarity is funded by the Engineering and Physical Sciences Research Council (EPSRC), UK. Project partners are Royal National Institute for the Deaf, Hearing Industry Research Consortium, and Amazon TTS Research.
teners who have a hearing loss. Consequently, this signal processing challenge is designed to get the latest advancements in speech enhancement applied to hearing aids. 
Entrants will be tasked to enhance speech-in-noise for input into our baseline hearing aid processor. The hearing aid will be tuned to the hearing characteristics of particular people. Thus you can enter without in-depth knowledge of hearing aids, and just concentrate on the task of de-noising. 
The scenario is listening to speech in the presence of typical domestic noise. We will provide the signals captured by the microphones on a pair of behind-the-ear hearing aids and those captured at the eardrum. The target speech will be a short sentence. The interfering noises will be a mix of speech, domestic appliance noise and music. The audio includes the simulation of the acoustic of typical small living rooms.
The challenge is to improve the speech intelligibility without excessive loss of quality. To this end, entries will be evaluated using an objective metric that is an average of the Hearing Aid Speech Perception Index (HASPI) and Hearing Aid Speech Quality Index (HASQI).
## What will be provided:
Premixed speech + interferer scenes for training and evaluation.
Databases of target sentences, along with speech, noise and music interferers.
Listener characteristics, including audiograms and speech-in-noise testing.
Software including tools for generating additional training data, a baseline hearing aid algorithm, a baseline model of hearing impairment, and the objective intelligibility measures.
A leader board.


The scenario is similar to the second [Clarity Enhancement Challenge](../cec2/cec2_intro.md). However there are key differences:

  - Participants are asked to focus on speech enhancement only. Hearing aid processing/simulation is not part of the challenge 
  - Speech quality (HASPI) will be assessed in conjunction with speech intelligibility (HASPI)

For more details use the contents pane on the left to navigate the ICASSP SP Clarity Challenge: Speech Enhancement for Hearing Aids site.

## Challenge management
There will be:
- An online form for Team registration.
- A Google group, Github Issues and email contact to manage queries and discussion.
- A submission portal.
- A leader board.
- An FAQ providing educational material on hearing loss, hearing aids and objective metrics to support people entering.
## Rules
### Transparency
Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
We will publish all technical documents (anonymous or otherwise).
Teams are encouraged – but not required – to make their code open source.
Anonymous entries are allowed.
Teams may reserve the right to be referred to by an anonymous code in the rank ordering.
IP rules will be in place to allow entrants from industry.
### What information can I use?
The only data that can be used during evaluation are
- The audio input signals (the sum of the target and interferers for each hearing aid microphone).
- The listener characterisation (e.g. pure tone air-conduction audiograms).
- The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)
### Computational restrictions
- Teams may choose to use all, some or none of the parts of the baseline model.
- Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms).
- There is no limit on computational cost. Although processing power is limited on hearing aids, currently Clarity does not restrict computing power to help drive innovative approaches.
### Evaluation of systems
Entries will be ranked according to an average of the HASPI (speech intelligibility) and HASQI (speech quality) score across all signals in the evaluation dataset. We will use the HASPI and HASQI implementation in the baseline system.

## Organisers: The Clarity Project
Clarity is running a series of machine learning challenges to advance hearing aid speech signal processing:
- Prof Jon Barker, Dr Will Bailey, Zehai Tu, Department of Computer Science, University of Sheffield
- Dr Simone Graetzer, Prof Trevor Cox, Acoustics Research Centre, University of Salford
- Prof Michael Akeroyd, Prof Graham Naylor, Hearing Sciences, School of Medicine, University of Nottingham
- Prof John Culling, School of Psychology, Cardiff University

Clarity is funded by the Engineering and Physical Sciences Research Council (EPSRC), UK. Project partners are Royal National Institute for the Deaf, Hearing Industry Research Consortium, and Amazon TTS Research.
