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
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        This site provides <a href="./docs/cec2/intro"> full documentation </a>{" "}
        of the challenge datasets, baseline systems and rules for participation.{" "}
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
  {
    author: "Joe Bloggs",
    section: "Getting Started",
    title: "Introduction to Clarity",
    date: "May 2022",
    difficulty: "Easy",
    time: "10",
    link: "https://www.google.com/search?q=cat+pictures&oq=cat+pictures&aqs=chrome..69i57j0i512l9.4292j0j7&sourceid=chrome&ie=UTF-8",
    description: (
      <>
        Integer non mi volutpat libero tempor ornare. Vivamus quis turpis sit
        amet mauris lacinia lobortis. In vitae purus purus. Nam consectetur,
        elit vitae dignissim imperdiet, massa velit finibus elit, in malesuada
        dui quam sit amet velit. Suspendisse mattis velit quis nulla
        condimentum, nec fringilla felis lacinia. Donec sed urna ligula. Aenean
        sed nisl mollis, hendrerit quam a, pulvinar magna.
      </>
    ),
  },
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
      <div style={{ padding: 20 }} className={styles.tutorial_details}>
        <div className="post_tag">{section}</div>
        <ul className={styles.nobullets}>
          <li>
            {author} <PersonIcon fontSize="small"></PersonIcon>
          </li>
          <li>
            {date} <CalendarIcon fontSize="small"></CalendarIcon>
          </li>
          <li>
            Difficulty: {difficulty}{" "}
            <DifficultyIcon fontSize="small"></DifficultyIcon>
          </li>
          <li>
            Time: {time}min <TimeIcon fontSize="small"></TimeIcon>
          </li>
        </ul>
      </div>
    </GridItem>,

    <GridItem style={{ padding: 20 }} xs={9}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="button button--primary" to={link}>
        Open in Google Colab{" "}
      </Link>{" "}
    </GridItem>,
  ];
}

export default function TutorialLayout() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <GridItem container spacing={1}>
            {TutorialList.map((props, idx) => (
              <Tutorial key={idx} {...props} />
            ))}{" "}
          </GridItem>
        </Box>
      </div>{" "}
    </section>
  );
}
