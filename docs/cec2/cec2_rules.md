---
id: cec2_rules
title: Rules
sidebar_label: Rules
sidebar_position: 7
---

## Teams

- Teams must have pre-registered and nominated a contact person.
- Teams can be from one or more institutions.
- The organisers may enter the challenge themselves but will not be eligible to win the cash prizes.

## Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents (anonymous or otherwise).
- Teams are encouraged – but not required – to provide us with access to the system/model and to make their code open source.
- Anonymous entries are allowed but will not be eligible for cash prizes.
- All teams will be referred to using anonymous codenames in rank ordering.

## Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a “Submission”). The Challenge is organised by the Challenge Organiser.

Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.

## What information can I use?

### Training and development

There is no limit on the amount of training data that can be generated using our tools.
Teams can also use their own data for training or expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool.
Any audio or metadata can be used during training and development, but during evaluation the proposed simulated hearing aid or Enhancement Processor will not have access to all of the data (see next section).

### Evaluation

The only data that can be used by the Enhancement Processor during evaluation are

- The audio input signals (the sum of the target and interferer for each hearing aid microphone), and
- The listener characterisation (pure tone air-conduction audiograms).

## Computational restrictions

- Teams may choose to use all or some of the provided baseline models.
- Systems must be causal; the output at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms).
- There is no limit on computational cost.

Please see [this blog post](http://claritychallenge.org/latency-computation-time-and-real-time-operation) for further explanation of these last two rules about latency and computation time.

## Submitting multiple entries

If you wish to submit two entries, where one is optimised for MBSTOI and the other, for listening tests,
- Both systems must be submitted for MBSTOI evaluation.
- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear which has been optimised for listening tests and the relationship between the two entries.

We will assume that if only one of these systems is to go forward to listening tests, your preference is to use the one optimised for listening tests.

## Evaluation of systems

### Stage 1: Objective evaluation

- Entries will be ranked according to average Modified Binaural Short-Time Objective Intelligibility (MBSTOI) score across all samples in the evaluation/test dataset (i.e., all signals submitted for the MBSTOI evaluation).

### Stage 2: Listening test evaluation

- There is a limit on how many systems can be evaluated by the listener panel.
- A maximum of two entries can go through to the listener panel from any individual entrant. Furthermore, a second will only be allowed if it is judged by us to use significantly different signal processing approaches.
- We will choose which will go to the listener panel based on
  - The top N scored using the objective evaluation method.
  - A sample of M others that use contrasting and promising approaches.
