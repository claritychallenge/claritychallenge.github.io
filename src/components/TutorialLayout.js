import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";
import Grid from "@mui/material/Grid";
import GridItem from "@mui/material/Grid";
import Box from "@mui/material/Box";

import PersonIcon from "@mui/icons-material/PersonOutlined";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import DifficultyIcon from "@mui/icons-material/PsychologyOutlined";
import TimeIcon from "@mui/icons-material/HourglassBottomOutlined";

const TutorialList = [
  //{
  //  author: "Will Bailey",
  //  section: "Getting Started",
  //  title: "Loading Demo Datasets",
  //  date: "May 2022",
  //  difficulty: "Easy",
  //  time: "10",
  //  link: "https://colab.research.google.com/drive/15RaweKjmnduS1y0v9Dw-LAUgLAB_csa9?usp=sharing",
  //  description: (
  //    <>
  //      A colab notebook demonstrating how to access the smaller demo Clarity dataset for exploring the clarity challenge toolset.
  //    </>
  //  ),
  // },
  {
    author: "Will Bailey",
    section: "Getting Started",
    title:
      "01 Installing Clarity Enhancement Challenge Tools and Interacting with Metadata",
    date: "May 2022",
    difficulty: "Easy",
    time: "15",
    link: "http://colab.research.google.com/github/claritychallenge/clarity/blob/master/notebooks/01_Installing_clarity_tools_and_using_metadata.ipynb",
    description: (
      <>
        Basic installation of Clarity Challenge tools and using the scene,
        listener and scene_listeners metadata to access information about
        individual scenes.{" "}
      </>
    ),
  },
  {
    author: "Will Bailey",
    section: "Getting Started",
    title: "02 Running the CEC2 baseline from the commandline",
    date: "July 2022",
    difficulty: "Easy",
    time: "15",
    link: "http://colab.research.google.com/github/claritychallenge/clarity/blob/master/notebooks/02_Running_the_CEC2_baseline_from_commandline.ipynb",
    description: (
      <>
        An explanation of how to run the CEC2 baseline using the Python
        enhance.py and evaluate.py scripts from the commandline interface.{" "}
      </>
    ),
  },
  {
    author: "Will Bailey",
    section: "Getting Started",
    title: "03 Running the CEC2 baseline from Python",
    date: "May 2022",
    difficulty: "Easy",
    time: "15",
    link: "http://colab.research.google.com/github/claritychallenge/clarity/blob/master/notebooks/03_Running_the_CEC2_baseline_from_python.ipynb",
    description: (
      <>
        An explanation of the process used inside the evaluate function in the
        recipes folder.Covers loading audio, basic enhancement using NAL - R
        amplification and generating HASPI scores.{" "}
      </>
    ),
  },
  //    {
  //        author: "Will Bailey",
  //        section: "Getting Started",
  //        title: "Generating Audio from Scenes Metadata",
  //        date: "May 2022",
  //        difficulty: "Easy",
  //       time: "10",
  //        link: "https://colab.research.google.com/drive/11Bj23MFzcZYhKw7VKVBs8WawV3LN6TMS?usp=sharing",
  //        description: (
  //          <>
  //            An overview of the process of rendering new audio using the scenes metadata using the high level SceneRenderer object.
  //          </>
  //        ),
  //      },
];

function Tutorial({
  author,
  section,
  title,
  date,
  difficulty,
  time,
  link,
  description,
}) {
  return [
    <GridItem xs={3} className="text--right">
      <div
        style={{
          padding: 20,
        }}
        className={styles.tutorial_details}
      >
        <div className="post_tag"> {section} </div>{" "}
        <ul className={styles.nobullets}>
          <li>
            {" "}
            {author} <PersonIcon fontSize="small"> </PersonIcon>{" "}
          </li>{" "}
          <li>
            {" "}
            {date} <CalendarIcon fontSize="small"> </CalendarIcon>{" "}
          </li>{" "}
          <li>
            Difficulty: {difficulty}{" "}
            <DifficultyIcon fontSize="small"> </DifficultyIcon>{" "}
          </li>{" "}
          <li>
            Time: {time}
            min <TimeIcon fontSize="small"> </TimeIcon>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </GridItem>,

    <GridItem
      style={{
        padding: 20,
      }}
      xs={9}
    >
      <h2> {title} </h2> <p> {description} </p>{" "}
      <Link
        to={link}
        style={{ padding: 0, width: "auto", height: "auto", borderWidth: "0" }}
      >
        <img
          style={{ width: "200px" }}
          src="https://colab.research.google.com/assets/colab-badge.svg"
          alt="SVG as an image"
        />
      </Link>{" "}
    </GridItem>,
  ];
}

export default function TutorialLayout() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <GridItem container spacing={1}>
            {" "}
            {TutorialList.map((props, idx) => (
              <Tutorial key={idx} {...props} />
            ))}{" "}
          </GridItem>{" "}
        </Box>{" "}
      </div>{" "}
    </section>
  );
}
