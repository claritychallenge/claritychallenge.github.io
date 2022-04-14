---
id: cec2_rules
title: CEC2 Rules
sidebar_label: Rules
sidebar_position: 9
---

## Teams

- Teams must have pre-registered and nominated a contact person.
- Teams can be from one or more institutions.
- The organisers may enter the challenge themselves but will not be eligible to win prizes.

## Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged – but not required – to provide us with access to the system/model and to make their code open source.
- Anonymous entries are allowed but will not be eligible for prizes.
- Teams may reserve the right to be referred to using anonymous code names in the published rank ordering.

## What information can I use?

### Training and development

There is no limit on the amount of training data that can be generated using our tools and training data sets. Teams can also use their own data for training or expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool. Any audio or metadata can be used during training and development, but during evaluation, the proposed simulated hearing aid or Enhancement Processor will not have access to all of the data (see next section).

### Evaluation

The only data that can be used by the Enhancement Processor during evaluation are

- The audio input signals (the sum of the target and interferers for each hearing aid microphone).
- The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results).
- The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)
- The head-rotation signal (but if used, a version of the system that does not use it should also be prepared for comparison.)
## Computational restrictions

- Teams may choose to use all, some or none of the parts of the baseline model.
- Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms).
- When you supply audio samples, you are allowed to time shift the samples from the hearing aid model to allow the calculation of HASPI. **The maximum time shift will be 5 ms.** The amount of time shift needed for time realignment can be calculated using a cross-correlation between the signals before and after the hearing aid processing.
- There is no limit on computational cost.

Please see [this blog post](http://claritychallenge.org/latency-computation-time-and-real-time-operation) for further explanation of these last two rules about latency and computation time.

## Submitting multiple entries

You can submit two entries, where one is optimised for HASPI and the other for listening tests if you wish. In this case:

- Both systems must be submitted for HASPI evaluation.
- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear which has been optimised for listening tests and the relationship between the two entries.
- **head-rotation**: if the head-rotation signal is used then a second entry must be submitted that does not use it and allows the benefit to be measured.

We will assume that if only one of these systems is to go forward to listening tests, your preference is to use the one optimised for listening tests.

## Evaluation of systems

### Stage 1: Objective evaluation

- Entries will be ranked according to average HASPI score across all signals in the evaluation dataset. We will use the HASPI implementation in the baseline system.

### Stage 2: Listening test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- A maximum of two entries can go through to the listener panel from any individual entrant. Furthermore, a second will only be allowed if it is judged by us to use significantly different signal processing approaches.
- We will choose which will go to the listener panel based on
   - The top N scored using the objective metric HASPI.
   - A sample of M others that use contrasting and promising approaches.

## Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a “Submission”). The Challenge is organised by the Challenge Organiser.

Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
