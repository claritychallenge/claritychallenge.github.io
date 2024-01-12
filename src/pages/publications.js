import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import bibtexParse from "bibtex-parse-js";
// import { Cite } from 'citation-js';

const Cite = require("citation-js");

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

const renderCitation = (publication) => {
  const citationString = bibtexParse.toBibtex([publication], false);
  const citation = new Cite(citationString);
  const formattedCitation = citation.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  });
  return <div dangerouslySetInnerHTML={{ __html: formattedCitation }} />;
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("publications.bib")
      .then((response) => response.text())
      .then((data) => {
        const parsedData = bibtexParse.toJSON(data);
        setPublications(parsedData);
      });
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <PublicationsHeader />
        <div className="container">
          <div className="container">
            <ul>
              {publications.map((publication, index) => (
                <li>
                  {" "}
                  <div key={index}>{renderCitation(publication)}</div>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </main>{" "}
    </Layout>
  );
}
