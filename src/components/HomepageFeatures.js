import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Getting Started",
    Svg: require("../../static/img/undraw_My_documents_re_13dc.svg").default,
    description: (
      <>
        This site provides{" "}
        <a href="docs/cec2/cec2_intro"> full documentation </a> of the challenge
        datasets, baseline systems and rules for participation.{" "}
      </>
    ),
  },
  {
    title: "Keeping Updated",
    Svg: require("../../static/img/undraw_News_re_6uub.svg").default,
    description: (
      <>
        Visit the blog pages <a href="./blog"> to keep updated </a> on challenge
        progress and outcomes.{" "}
      </>
    ),
  },
  {
    title: "Code on Github",
    Svg: require("../../static/img/undraw_version_control_re_mg66.svg").default,
    description: (
      <>
        All the code for the Clarity Challenge is open source and{" "}
        <a href="https://github.com/claritychallenge/clarity_CEC1/">
          available on Github{" "}
        </a>
        .{" "}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />{" "}
      </div>{" "}
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3> <p> {description} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
