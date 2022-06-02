import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import TutorialLayout from "../components/TutorialLayout";
import styles from "./index.module.css";

function TutorialHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> Clarity Tutorials </h1>{" "}
        <p className="hero__subtitle"> Clarity Basics </p>{" "}
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
        <TutorialHeader />
        <div className="container">
          <TutorialLayout />
          <p>
            {" "}
            <br />
            We are providing these tutorials to help you get started with our
            software. We will be publishing new ones regularly over the coming
            months. If you have any feedback, questions or suggestions for
            improvements, please do not hesitate to get in{" "}
            <a href="/clarity_CC_doc/docs/contact">contact</a> .
          </p>{" "}
        </div>
      </main>{" "}
    </Layout>
  );
}
