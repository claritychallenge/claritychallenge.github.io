---
id: cpc2_rules
title: CPC2 Rules
sidebar_label: Rules
sidebar_position: 6
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

There is no limit on the amount of training data that can be generated using our tools and training data sets. Teams can also use their own data for training or expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tools. Any audio or metadata can be used during training and development, but during evaluation, the proposed prdiction algorithm will not have access to all of the data (see next section).

### Evaluation

The only data that can be used by the prediction algorithm during evaluation are

- The audio input signals (the sum of the target and interferers for each hearing aid microphone).
- The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results).
- The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)


## Computational restrictions

- Teams may choose to use all, some or none of the parts of the baseline model.

- There is no limit on computational cost.


## Submitting multiple entries

You can submit two entries, one which is intrusive and another which is non-intrusive:

- Both systems must be submitted for both evaluation stages.
- You must register two teams, submitting each entry as a different team.
- In your documentation, you must make it clear which system is intrusive and which is non-intrusive.


## Evaluation of systems

### Stage 1: In-domain evaluation

- Entries will be ranked according to closeness to human generated intelligibility from hearing impaired listeners using a held out evaluation dataset drawn from the simulated signals used in CEC1 and CEC2.

### Stage 2: Out-domain evaluation


## Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a “Submission”). The Challenge is organised by the Challenge Organiser.

Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive licence to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
