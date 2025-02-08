import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Take Part",
    Svg: require("../../static/img/undraw_My_documents_re_13dc.svg").default,
    description: (
      <>
        This site provides{" "}
        <a href="docs/cpc3/cpc3_intro"> full documentation </a> for all our
        challenges.{" "}
      </>
    ),
    link: "docs/cpc3/cpc3_intro",
  },
  {
    title: "Code on Github",
    Svg: require("../../static/img/undraw_version_control_re_mg66.svg").default,
    description: (
      <>
        All the code for the Clarity Challenge is open source and{" "}
        <a href="https://github.com/claritychallenge/clarity/">
          available on Github{" "}
        </a>
        .{" "}
      </>
    ),
    link: "https://github.com/claritychallenge/clarity/",
  },
  {
    title: "Tutorials",
    Svg: require("../../static/img/undraw_News_re_6uub.svg").default,
    description: (
      <>
        Play with our code <a href="tutorials"> tutorials </a> on Colab to
        understand the tools and data.{" "}
      </>
    ),
    link: "tutorials",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>{" "}
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
