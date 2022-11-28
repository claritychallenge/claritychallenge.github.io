---
id: icassp2023_rules
title: ICASSP 2023 Grand Challenge Rules
sidebar_label: Rules
sidebar_position: 6
---

## Teams

- Teams must have pre-registered and nominated a contact person.
- Teams can be from one or more institutions.

## Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged – but not required – to provide us with access to the system/model and to make their code open source.
- Teams may reserve the right to be referred to using anonymous code names in the published rank ordering.

## What information can I use?

### Training and development

For training, teams can not use external data but can expand the official training data through automated modifications and remixing, i.e. data augmentation strategies. However, teams that do this must make a second submission using only the official audio files. Any audio or metadata can be used during training and development, but during evaluation, the enhancement algorithm will not have access to all of the data (see next section).

### Evaluation

The only data that can be used by the Enhancement Processor during evaluation are

- The audio input signals (the sum of the target and interferers for each hearing aid microphone).
- The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results).
- The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)

## Computational restrictions

- Teams may choose to use all, some or none of the parts of the baseline model.
- Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms).
- There is no limit on computational cost.

Please see [this blog post](https://claritychallenge.org/blog/Latency,%20computation%20time%20and%20real-time%20operation) for further explanation of these last two rules about latency and computation time.

## Submitting multiple entries

It is intended that there should be one submission per registered team. Submitting multiple entries is discouraged.

## Evaluation of systems

Each signal will be scored using the average of its HASPI and HASQI scores. A system score will then be computed by averaging over the evaluation set. Separate scores will be computed for the real and simulated evaluation sets, along with a summary score formed by their average. Systems will be ranked according to their summary scores with all three (real, simulated and summary) scores being reported.


## Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a “Submission”). The Challenge is organised by the Challenge Organiser.

Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
