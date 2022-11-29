---
id: icassp2023_intro
title: ICASSP 2023 Clarity Challenge
sidebar_label: ICASSP 2023 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

:::info

- Registration is now open! [Register Now](taking_part/icassp2023_registration.mdx).

:::

This ICASSP SP Clarity Challenge (Speech Enhancement for Hearing Aids) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly.

<p/>
<center>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/pEhci66Lr28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

## Organisers

- Michael Akeroyd, Graham Naylor, **University of Nottingham**
- Jon Barker, Will Bailey, Zehai Tu, **University of Sheffield**
- Trevor Cox, Simone Graetzer, **University of Salford**
- John Culling, **Cardiff University**

## Overview of challenge

Speech enhancement is a major research area with thousands of papers each year, yet only a tiny percentage of these explicitly consider improvements for listeners who have a hearing loss. Consequently, this signal processing challenge is designed to get the latest advancements in speech enhancement applied to hearing aids.

Entrants are tasked to enhance speech-in-noise for input into a hearing aid amplification stage. The hearing aid will be tuned to the hearing characteristics of particular people. Thus you can enter without in-depth knowledge of hearing aids, and just concentrate on the task of de-noising.

The scenario is listening to speech in the presence of typical domestic noise. We provide the signals captured by the microphones on a pair of behind-the-ear hearing aids and those captured at the eardrum. The target speech will be a short sentence. The interfering noises will be a mix of speech, domestic appliance noise and music. The audio includes the simulation of the acoustic of typical small living rooms.

The challenge is to improve the speech intelligibility without excessive loss of quality. To this end, entries will be evaluated using an objective metric that is an average of the Hearing Aid Speech Perception Index (HASPI) and Hearing Aid Speech Quality Index (HASQI).

## What is be provided

- Premixed speech + interferer scenes for training and evaluation.
- Databases of target sentences, along with speech, noise and music interferers.
- Listener characteristics, including audiograms and speech-in-noise testing.
- Software including tools for augmenting training data, a baseline enhancement system, a fixed hearing aid implementation and code for scoring signals using the HASPI and HASQI hearing aid metrics.


The scenario is similar to the second [Clarity Enhancement Challenge](../cec2/cec2_intro.md) but with the following key differences:

  - Participants are asked to focus on speech enhancement only. Hearing aid processing/simulation is not part of the challenge
  - Speech quality (HASQI) will be assessed in conjunction with speech intelligibility (HASPI)

This site provides access to all the software, data and information that you need to get started.

