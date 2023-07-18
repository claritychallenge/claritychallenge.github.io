import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Mermaid } from "mdx-mermaid/Mermaid";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ContactHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Clarity Project </h1>{" "}
        <p className="hero__subtitle"> The Project Timeline </p>{" "}
        <div className={styles.buttons}> </div>{" "}
      </div>{" "}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <ContactHeader />
        <Paper
          sx={{
            p: 4,
            m: 6,
          }}
        >
          <h2> The Challenges </h2>{" "}
          <Typography variant="h6">
            The project is running three rounds of enhancement and prediction
            challenges. <p />
            <ul>
              <li>
                {" "}
                CEC1 / CPC1, 2021 - 2022 - Simple indoor scenes, one interferer{" "}
              </li>{" "}
              <li>
                {" "}
                CEC2 / CPC2, 2022 - 2023 - Complex indoor scenes, multiple
                interferers, head motion{" "}
              </li>{" "}
              <li>
                {" "}
                CEC3 / CPC3, 2024 - 2025 - Dynamic outdoor scenes, moving
                sources, head motion{" "}
              </li>{" "}
            </ul>
            We are currently running the participation phases of the 2nd
            prediction challenge (CPC2). <p />
          </Typography>{" "}
        </Paper>
        <Zoom>
          <Paper
            sx={{
              p: 4,
              m: 6,
            }}
          >
            <h2> The Overal Schedule </h2>
            The tentative schedule for future challenges is shown below.{" "}
            <Mermaid
              chart={`gantt
            dateFormat  YYYY-MM-DD
            title Clarity Challenge Overview Schedule
            excludes weekdays 2014-01-10
            
            section CEC1
            Participation Phase            : done,    2021-02-01, 2021-06-15
            Evaluation Phase               : done, 2021-06-15, 2021-09-17 
            section CPC1
            Participation Phase              :done,         2021-11-16, 2022-03-21
            Evaluation Phase               :done,        2022-03-21,2022-06-29
            section CEC2
            Participation Phase               :active,         2022-03-30, 2022-09-01
            Evaluation Phase               :         2022-09-01,2022-12-02
            section CPC2
            Participation Phase               :         2023-03-01, 2023-08-01
            Evaluation Phase               :         2023-08-01, 2023-08-25
            section CEC3
            Participation Phase               :         2024-01-01, 2024-08-01
            Evaluation Phase               :         2024-08-01,2024-11-01
            section CPC3
            Participation Phase               :         2024-11-01, 2025-04-01
            Evaluation Phase               :         2025-04-01,2025-06-01`}
            />{" "}
            <h4> Key Dates </h4>{" "}
            <ul>
              <li>
                {" "}
                <b> CEC1 Launch </b> 1st Feb 2021, <b>Submission</b> 15 th Jun
                2021{" "}
              </li>{" "}
              <li>
                {" "}
                <b> CPC1 Launch </b> 16th Nov 2021, <b>Submission</b> 21 st Mar
                2022{" "}
              </li>{" "}
              <li>
                {" "}
                <b> CEC2 Launch </b> 30th Mar 2022, <b>Submission</b> 1 st Sep
                2022{" "}
              </li>{" "}
              <li>
                {" "}
                <b> CPC2 Launch </b> 1st Feb 2023, <b>Submission</b> 1 st Aug
                2023{" "}
              </li>{" "}
              <li>
                {" "}
                <b> CEC3 Launch </b> 1st Jan 2024, <b>Submission</b> 1st August 2024 {" "}
              </li>{" "}
              <li>
                {" "}
                <b> CPC3 Launch </b> 1st Nov 2024, <b>Submission</b> 1st April
                2025{" "}
              </li>{" "}
            </ul>{" "}
          </Paper>{" "}
        </Zoom>
        <Zoom>
          <Paper
            sx={{
              p: 4,
              m: 6,
            }}
          >
            <h2> The 2nd Clarity Enhancement Challenge(CEC2) </h2>{" "}
            <Mermaid
              chart={`gantt
            dateFormat  YYYY-MM-DD
            title CEC2 Schedule

            section CEC2
            Participation Phase             :active,         2022-03-30, 2022-09-01
            Challenge details + rules published :milestone, 2022-03-30, 1min
            Dev/Training data released :milestone, 2022-04-14, 1min
            Complete baseline released :milestone, 2022-04-30, 1min
            Eval data released :milestone, 2022-07-25, 1min
            HASPI Submission deadline  :milestone, 2022-09-01, 1min
            Evaluation Phase               :         2022-09-01,2022-12-02
            Listening test Submission deadline  :milestone, 2022-09-15, 1min
            Clarity Workshop         :milestone,        2022-12-02, 1min


         `}
            />{" "}
          </Paper>{" "}
        </Zoom>
        <Zoom>
          <Paper
            sx={{
              p: 4,
              m: 6,
            }}
          >
            <h2> The 1 st Clarity Prediction Challenge(CPC1) </h2>{" "}
            <Mermaid
              chart={`gantt
            dateFormat  YYYY-MM-DD
            title CPC1 Schedule
            
            section CPC1
            Participation Phase              :done,         2021-11-16, 2022-03-21
            Train/Dev Data Released     :milestone,        2021-11-16, 1min
            Launch Webinar              :milestone,        2021-11-23, 1min
            Eval Data Released          :milestone,         2022-03-01, 1min
            Submission Deadline         :milestone,        2022-03-21, 1min
            Evaluation Phase               :done,        2022-03-21,2022-06-29
            Interspeech Paper Deadline         :milestone,        2022-03-28, 1min
            CPC1 Tech Report Deadline         :milestone,        2022-04-25, 1min
            Clarity-2022 Workshop         :milestone,        2022-06-29, 1min
            Interspeech-2022 Special Session         :milestone,        2022-09-18, 1min




         `}
            />{" "}
          </Paper>{" "}
        </Zoom>
        <Zoom>
          <Paper
            sx={{
              p: 4,
              m: 6,
            }}
          >
            <h2> The 1 st Clarity Enhancement Challenge(CEC1) </h2>{" "}
            <Mermaid
              chart={`gantt
            dateFormat  YYYY-MM-DD
            title CEC1 Schedule
            

            section CEC1
            Participation Phase            : done,    2021-02-01, 2021-06-15
            Train/Dev Data and Baseline Released  :milestone, 2021-02-01, 1min
            Launch Webinar :milestone, 2021-03-03, 1min
            Eval Data Released  :milestone, 2021-06-01, 1min
            MBSTOI Submission deadline  :milestone, 2021-06-15, 1min
            Evaluation Phase               : done, 2021-06-15, 2021-09-17 
            Listening test Submission deadline  :milestone, 2021-06-29, 1min
            Clarity-2021 Workshop :milestone, 2021-09-17, 1min


         `}
            />{" "}
          </Paper>{" "}
        </Zoom>{" "}
      </main>{" "}
    </Layout>
  );
}
