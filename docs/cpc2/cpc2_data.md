---
id: cpc2_data
title: Data description
sidebar_label: Data description
sidebar_position: 2
---

The data for CPC2 is derived from 1st and 2nd Clarity Enhancement challenges (CEC1 and CEC2), i.e. the processed signals are the outputs of systems submitted by participants, and the listener responses were collected when evaluating these systems.

:::info
To download this data, please visit the [download page](./cpc2_download).
:::

The data is distributed as a single gzipped tarball, `clarity_CPC2_data.v1_0.tgz` which will unpack into the following directory structure:

```bash
clarity_CPC2_data
├── clarity_data
│   ├── HA_outputs   
│   │   ├── signals
│   │   │   ├── CEC1
│   │   │   └── CEC2
│   │   ├── train.1
│   │   │   ├── CEC1   # Hearing aid signals for training partition 1
│   │   │   └── CEC2   # Hearing aid signals for training partition 1
│   │   ├── train.2
│   │   │   ├── CEC1   # Hearing aid signals for training partition 2
│   │   │   └── CEC2   # Hearing aid signals for training partition 2
│   │   └── train.3 
│   │       ├── CEC1   # Hearing aid signals for training partition 3
│   │       └── CEC2   # Hearing aid signals for training partition 3
│   ├── metadata    # Metadata for the signals and listener responses
│   └── scenes
│       ├── CEC1    # Contains target reference signals 
│       └── CEC2    # Contains target reference signals
└── manifest   
```

### Overview

The training data essentially consists of signals and corresponding listener responses that you can use to train a prediction model.

To maximise the value of the data we have imposed a cross-validation evaluation design: The training data has been split into three partitions, `train.1`, `train.2` and `train.3` which are paired with three disjoint evaluation partitions `eval.1`, `eval.2` and `eval.3` which will be released. You are asked to train three versions of your final system, i.e., one for each training data subset. This will ensure that we can evaluate your system on unseen listeners and hearing aid systems.

Note, some signals and responses come from CEC1 and some from CEC2. CEC1 used simple scenes with a single interferer; CEC2 had multiple interferers. The evaluation data will only use CEC2 scenes.

:::caution
Further details to follow shortly.
:::

## The HA output signals

## The scenes signals

## The metadata
