---
id: cpc2_data
title: Data description
sidebar_label: Data description
sidebar_position: 2
---

The data for CPC2 is derived from 1st and 2nd Clarity Enhancement challenges (CEC1 and CEC2), i.e. the processed signals are the outputs of systems submitted by participants, and the listener responses were collected when evaluating these systems.

:::info
To obtain the data, please visit the [download page](./taking_part/cpc2_download).
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

## The hearing aid output signals

The hearing aid output signals are stored under `clarity_data/HA_output` and separated into three separate directories, `train.1`, `train.2` and `train.3`. Each of these directories contains two subdirectories, `CEC1` and `CEC2`, which contain the hearing aid output signals from the CEC1 and CEC2 datasets respectively.

The signals are stored in 16-bit stereo WAV format, with a sampling rate of 32 kHz. The signals are named according to the following convention:

```bash
<SCENE_ID>_<LISTENER_ID>_<SYSTEM_ID>.wav  # e.g.,  S09463_L0242_E009.wav
```

Where `<SCENE_ID>` is the scene identifier, `<LISTENER_ID>` is the listener identifier and `<SYSTEM_ID>` is the hearing aid system identifier.

## The scene reference signals

The target reference signals and hearing aid **input** signals are stored under `clarity_data/scenes` and separated into two separate directories, `CEC1` and `CEC2`, which contain the target reference signals from the CEC1 and CEC2 datasets respectively. (Note, data for the three training set partitions is stored in the same directory.)

There are a set of stereo audio files for each scene, as follows:

```bash
<SCENE_ID>_target_ref.wav  # The target reference signal for the intrusiveness intelligibility prediction task

<SCENE_ID>_target_anechoic.wav  # The anechoic speech target signal
<SCENE_ID>_target_<CHANNEL>.wav   # The target speech signal for the scene
<SCENE_ID>_interferer_<CHANNEL>.wav  # The interfering noise for the scene
<SCENE_ID>_mixed_<CHANNEL>.wav  # The mixed target and interfering noise.
```

where `<SCENE_ID>` is the scene identifier and `<CHANNEL>` can be either `CH0`, `CH1`, `CH2` or `CH3`. The channels `CH1`, `CH2` and `CH3` are the front, middle and rear hearing aid microphones respectively (each is stereo pair). `CH0` is the `eardrum signal`, i.e., as would be received by the listener's ear canal.

Of these signals, the following is the most important:

- `<SCENE_ID>_target_ref.wav`
    This is the signal that should be used as **the reference for your intrusive intelligibility prediction model**. Note, this is the only signal that will be available in the evaluation data. It is a non-reverberant version of the target signal aligned with the target component of the mixed signal received by the hearing aid. It has been scaled to have the same energy as the target component of the mixed signal received by the hearing aid.

The remaining hearing aid input signals are provided for completeness

- `<SCENE_ID>_mixed_<CHANNEL>.wav` The noisy speech signals that were received by the hearing aid, i.e. the signals that were processed to produce the HA output signals.
- `<SCENE_ID>_target_<CHANNEL>.wav` The target speech component of the mixed signals that were received by the hearing aid.
- `<SCENE_ID>_interferer_<CHANNEL>.wav` The interfering noise component of the mixed signals that were received by the hearing aid.
- `<SCENE_ID>_target_anechoic.wav` The anechoic target speech signal (i.e., same as the target reference signal but without the correct scaling).

It is not anticipated that you will necessarily need these signals for training prediction models but they have been included to help participants gain a better understanding of the data.

## The metadata

The metadata directory (`clarity_data/metadata`) stores the listener responses to the signals, the listener characteristics and metadata related to each of the scenes (e.g., interferer types, input SNR, etc.).

You will find the following `JSON` format files,

```text
CEC1.train.1.json, CEC2.train.1.json
CEC1.train.2.json, CEC2.train.2.json
CEC1.train.3.json, CEC2.train.3.json
listeners.json
scenes.CEC1.json, scenes.CEC2.json
```

The contents of these files are as follows.

### The listener responses (`CECx.train.x.json`)

The `CEC1.train.x.json` and `CEC2.train.x.json` files contains a list of dictionaries, each describing a listener response to a signal. The fields are as follows:

```json
 {
    "prompt": "i don't want us to apportion blame she said",
    "scene": "S08547",
    "n_words": 9,
    "hits": 4,
    "listener": "L0239",
    "system": "E001",
    "correctness": 44.4444444444,
    "response": "i don't want to have to report he said",
    "volume": 56,
    "signal": "S08547_L0239_E001"
  }
```

In the above,

- `signal` identifies the hearing aid output signal that you will find in the the `HA_outputs\train.1\CEC1` or `HA_outputs\train.1\CEC2 directories`
- `listener` is the ID of the listener who provided the response. Using this you can look up the listener's audiogram in the `listeners.json` file.
- `correctness` is the percentage of words that the listener correctly identified. **This is the number that you are being asked to predict.**
- `volume` is the value of the volume control on the hearing aid that the listener used to listen to the signal. This is on a scale of 0 to 100 and was set by default to 50 but listeners were free to adjust it at the start of each session to achieve a comfortable listening level.

### The listener characteristics (`listeners.json`)

The `listeners.json` provides the pure tone audiogram of the left and right ear of each listener. This is stored as a dictionary with the listener ID as the key to facilitate easy look-up.

For each listener the audiogram is stored as a list of frequencies and the corresponding list of levels for the left and right ear. The frequencies are in Hz and the levels are in dB HL.

```json
{
    "L0200": {
        "name": "L0200",
        "audiogram_cfs": [250, 500, 1000, 2000, 3000, 4000, 6000, 8000],
        "audiogram_levels_l": [35, 30, 25, 50, 55, 65, 70, 65],
        "audiogram_levels_r": [45, 40, 35, 60, 65, 75, 80, 75],
    },
    ...
}
```

Note, listener audiograms will also be provided in the evaluation data, however, the listeners in the evaluation sets will not overlap with listeners in the corresponding training sets, i.e., your predictions systems are expected to be able generalise to new listeners.

### The scene metadata (`scenes.CECx.json`)

The scene metadata contains information about the scene, the target and interfering noise signals, and the SNR of the mixed signal, etc. The data will not be available for the evaluation signals and is being provided here for context and to help participants gain an understanding of the signals.

For a complete description of the scene metadata please see the documentation for the CEC1 and CEC2 challenges. The `scenes.CEC1.json` has the format described [here](../cec1/cec1_data#d8-scene-metadata), and the `scenes.CEC2.json` has the format described [here](../cec1/cec1_data#d8-scene-metadata).
