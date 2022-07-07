---
slug: Hearing loss simulation
title: Hearing loss simulation
authors: 
- name: Trevor Cox
  title: Clarity Team Member
  url: http://trevorcox.me/trevor-cox
  image_url: https://avatars.githubusercontent.com/trevorjcox
- name: Simone Graetzer
  title: Clarity Team Member
  url: https://www.salford.ac.uk/our-staff/simone-graetzer
  image_url: https://avatars.githubusercontent.com/sgraetzer
tags: [baseline, hearing loss simulation]
---


What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss.

Our challenge entrants are going to use machine learning to develop better processing of speech in noise (SPIN) for hearing aids. For a machine learning algorithm to learn new ways of processing audio for the hearing impaired, it needs to estimate how the sound will be degraded by any hearing loss. Hence, we need an algorithm to simulate hearing loss for each of our listeners. The diagram belows shows our draft baseline system that was detailed in a previous blog. The hearing loss simulation is part of the prediction model. The Enhancement Model to the left is effectively the hearing aid and the Prediction Model to the right is estimating how someone will perceive the intelligibility of the speech in noise.

![baseline](/img/baseline-1536x684.png)

The draft baseline system (where SPIN is speech in noise, DRC is Dynamic Range Compression, HL is Hearing Loss, SI is Speech Intelligibility and L & R are Left and Right).

There are different causes of hearing loss, but we’re concentrating on the most common type that happens when you age ([presbycusis](https://www.nhs.uk/conditions/hearing-loss/)). [RNID](https://rnid.org.uk/) (formerly Action on Hearing Loss) estimate that more than 40% of people over the age of 50 have a hearing loss, and this rises to 70% of people who are older than 70.

The aspects of hearing loss we’ve decided to simulate are

1. The loss of ability to sense the quietest sounds (increase in absolute threshold).
2. How as an audible sound increases in level, the perceived increase in loudness is greater than normal (loudness recruitment) (Moore et al. 1996).
3. How the ear has a poorer ability to discriminate the frequency of sounds (impaired frequency selectivity).

## Audio examples of hearing loss

Here are two samples of speech in noise processed through the simulator. In each audio example there are three versions of the same sentence:

1. Unimpaired hearing
2. Mild hearing impairment
3. Moderate to severe hearing impairment

0 dB signal to noise ratio

<audio controls>
<source src="/audio/spin_example.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>

And here is an example where the noise is louder:

<audio controls>
<source src="/audio/spin_example-10SNR.wav" type="audio/wav" />
Your browser does not support the audio element.
</audio>

Noisier: -10dB signal to noise ratio

## Acknowledgements

The hearing loss model we’re using was generously supplied by [Michael Stone at the University of Manchester](https://www.research.manchester.ac.uk/portal/michael.stone.html) as MATLAB code and translated by us into Python. The original code was written by members of the Auditory Perception Group at the University of Cambridge, ca. 1991-2013, including Michael Stone, Brian Moore, Brian Glasberg and Thomas Baer. Information about the model can be found primarily in Nejime and Moore (1997), but also in Nejime and Moore (1998), Baer and Moore (1993 and 1994), and Moore and Glasberg (1993).

The original speech recordings come from the ARU corpus, University of Liverpool (Hopkins et al. 2019). This corpus is freely available at the link in the reference below.

## References

- Baer, T., & Moore, B. C. (1993). Effects of spectral smearing on the intelligibility of sentences in noise. *The Journal of the Acoustical Society of America*, 94(3), 1229-1241.
- Baer, T., & Moore, B. C. (1994). Effects of spectral smearing on the intelligibility of sentences in the presence of interfering speech. *The Journal of the Acoustical Society of America*, 95(4), 2277-2280.
- Hopkins, C., Graetzer, S., & Seiffert, G. (2019). ARU adult British English speaker corpus of IEEE sentences (ARU speech corpus) version 1.0 [data collection]. Acoustics Research Unit, School of Architecture, University of Liverpool, United Kingdom. DOI: 10.17638/datacat.liverpool.ac.uk/681. Retrieved from http://datacat.liverpool.ac.uk/681/.
- Moore, B. C., & Glasberg, B. R. (1993). Simulation of the effects of loudness recruitment and threshold elevation on the intelligibility of speech in quiet and in a background of speech. *The Journal of the Acoustical Society of America*, 94(4), 2050-2062.
- Moore, B. C., Glasberg, B. R., & Vickers, D. A. (1996). Factors influencing loudness perception in people with cochlear hearing loss. B. Kollmeier, *World Scientific*, Singapore, 7-18.
- Nejime, Y., & Moore, B. C. (1997). Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. *The Journal of the Acoustical Society of America*, 102(1), 603-615.
- Nejime, Y., & Moore, B. C. (1998). Evaluation of the effect of speech-rate slowing on speech intelligibility in noise using a simulation of cochlear hearing loss. *The Journal of the Acoustical Society of America*, 103(1), 572-576.

