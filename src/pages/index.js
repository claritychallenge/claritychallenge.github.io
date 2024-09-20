import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Admonition from '@theme/Admonition';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> {siteConfig.title} </h1>{" "}
        <p className="hero__subtitle"> {siteConfig.tagline} </p> Quick links:
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="./about"
            style={{ margin: "10px" }}
          >
            About Us{" "}
          </Link>{" "}
          <Link
            className="button button--secondary button--lg"
            to="./docs/cec3/cec3_intro"
            style={{ margin: "10px" }}
          >
            The Current Challenge{" "}
          </Link>{" "}
          <Link
            className="button button--secondary button--lg"
            to="./blog"
            style={{ margin: "10px" }}
          >
            Latest News{" "}
          </Link>{" "}
        </div>{" "}
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
          
          
          <HomepageHeader />
 
          <main>
          
        
              
          <div>
      
                </div>
                
                 <Box sx={{ p: 0, marginRight: 10, marginTop: 8, marginLeft: 10, marginBottom: -4 }}>
                    {/*
   <Admonition type="info">
                        <center>   <h1>🔥🔥  The 3rd Clarity Enhancement Challenge is now Live 🔥🔥 </h1> <h2>New submission deadline 9th September.</h2>
                        <div className={styles.buttons}>

                        <Link
            className="button button--primary button--lg styles.buttons"
                                to="./docs/cec3/taking_part/cec3_registration"
            style={{ margin: "10px", textDecoration: "none"  }}
          >
            Register now!
                                </Link>
                                </div>

                        </center>
                    </Admonition> 
*/}
                </Box>
                
          <Box sx={{ p: 10}}>
<p>
  <Typography variant="h6">
    The Clarity Project is a{" "}
    <b>
      <a href="https://www.ukri.org/councils/epsrc/">
        UKRI-funded research project
      </a>
    </b>{" "}
    involving{" "}
    <b>
      <a href="./about#team">four UK Universities</a>
    </b>{" "}
    and{" "}
    <b>
      <a href="./about#partners">associated industrial partners</a>
    </b>
    . Our aim is to organise open evaluations for hearing aid
    algorithms and to champion novel machine learning approaches to
    hearing aid speech-in-noise processing.{" "}
  </Typography>
</p>
</Box>

                
                <HomepageFeatures />
                
               

      </main>{" "}
    </Layout>
  );
}
