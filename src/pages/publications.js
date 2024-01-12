import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function PublicationsHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"> The Clarity Project </h1>{" "}
          <p className="hero__subtitle"> Publications </p>{" "}
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
              <PublicationsHeader />
        <div className="container">

                  xxx
                  
              </div>
      </main>{" "}
    </Layout>
  );
}
