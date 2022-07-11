import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Mermaid } from "mdx-mermaid/Mermaid";

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

        <Box sx={{ p: 6 }}>
          <Typography variant="h6">
            The project is running three rounds of enhancement and prediction
            challenges. We are currently in the participation phase of the 2nd
            enhancement challenge (CEC2). The tentative schedule for future
            challenges is shown below.
          </Typography>

          <Mermaid
            chart={`gantt
            dateFormat  YYYY-MM-DD
            title Clarity Challenge Overview Schedule
            excludes weekdays 2014-01-10
            
            section CEC1
            Participation Phase            : done,    2021-02-01, 2021-06-15
            Evaluation Phase               : done, 2021-06-15, 2021-10-01 
            section CPC1
            Participation               :done,         2021-11-16, 2022-03-21
            Evaluation Phase               :done,        2022-03-21,2022-06-29
            section CEC2
            Participation               :active,         2022-03-30, 2022-09-01
            Evaluation Phase               :         2022-09-01,2022-12-02
            section CPC2
            Participation               :         2023-02-01, 2023-08-01
            Evaluation Phase               :         2023-08-01, 2023-08-25
            section CEC3
            Participation               :         2023-06-01, 2024-01-01
            Evaluation Phase               :         2024-01-01,2024-04-01
            section CPC3
            Participation               :         2024-04-01, 2024-09-01
            Evaluation Phase               :         2024-09-01,2024-11-01`}
          />
        </Box>
      </main>{" "}
    </Layout>
  );
}
