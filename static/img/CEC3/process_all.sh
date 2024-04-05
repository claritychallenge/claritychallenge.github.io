#!/bin/bash

for i in {1..9}; do
    echo "processing image $i"
    # crop image
    pdfcrop cec3_speaker_pos.0$i.pdf xxx.pdf
    pdftocairo -svg xxx.pdf cec3_speaker_pos.0$i.svg
done
