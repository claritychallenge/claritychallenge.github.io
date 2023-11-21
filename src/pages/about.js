import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import GridItem from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function AboutHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Clarity Project </h1>{" "}
        <p className="hero__subtitle"> About Us </p>{" "}
        <div className={styles.buttons}> </div>{" "}
      </div>{" "}
    </header>
  );
}

function PersonCard({ name, affiliation, avatar, url }) {
  return [
    <Zoom a11yNameButtonZoom="hello" a11yNameButtonUnzoom="Unzoom">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={name}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={useBaseUrl(avatar)}
              sx={{ width: 104, height: 104 }}
            />
          }
          title={name}
          subheader={affiliation}
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "h7" }}
        />
        <CardActions>
          <Button href={url} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Zoom>,
  ];
}

function SteeringPersonCard({ name, affiliation, avatar, url }) {
  return [
    <Zoom>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={name}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={useBaseUrl(avatar)}
              sx={{ width: 104, height: 104 }}
            />
          }
          title={name}
          subheader={affiliation}
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "h7" }}
        />
      </Card>
    </Zoom>,
  ];
}

const SteeringPersonList = [
  {
    name: "Peter Derleth",
    affiliation: "Sonova AG",
    avatar: "/img/avatar/derleth.jpeg",
  },
  {
    name: "Christine Evers",
    affiliation: "University of Southampton",
    avatar: "/img/avatar/evers.png",
  },
  {
    name: "Ralph Holme",
    affiliation: "Royal National Institute for the Deaf",
    avatar: "/img/avatar/holme.jpeg",
  },
  {
    name: "Daniel Korzekwa",
    affiliation: "Amazon TTS Research",
    avatar: "/img/avatar/korzekwa.jpeg",
  },
];
const PersonList = [
  {
    name: "Michael Akeroyd",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/michael.akeroyd",
    avatar: "/img/avatar/akeroyd.jpeg",
  },
  {
    name: "Jianyuan Sun",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/research-staff/jianyuan-sun",
    avatar: "/img/avatar/yuanyuan.png",
  },
  {
    name: "Jon Barker",
    department: "Department of Computer Science",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/academic/jon-barker",
    avatar: "/img/avatar/barker.png",
  },

  {
    name: "Trevor Cox",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/trevor-cox",
    avatar: "/img/avatar/cox.jpeg",
  },

  {
    name: "John Culling",
    affiliation: "University of Cardiff",
    url: "https://www.cardiff.ac.uk/people/view/839729-culling-john",
    avatar: "/img/avatar/culling.avif",
  },
  {
    name: "Simone Graetzer",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/simone-graetzer",
    avatar: "/img/avatar/graetzer.jpeg",
  },
  {
    name: "Graham Naylor",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/graham.naylor",
    avatar: "/img/avatar/naylor.jpeg",
  },
  {
    name: "Zehai Tu",
    affiliation: "University of Sheffield",
    url: "https://www.linkedin.com/in/zehai-tu-5b169721a/?trk=public_profile_browsemap&originalSubdomain=uk",
    avatar: "/img/avatar/tu.jpeg",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <AboutHeader />

        <Box sx={{ p: 6 }}>
          <h2>About Us</h2>

          <p>
            <Typography variant="h6">
              The Clarity Project is a{" "}
              <b>
                <a href="https://www.ukri.org/councils/epsrc/">
                  5-year UKRI-funded research project
                </a>
              </b>{" "}
              involving{" "}
              <b>
                <a href="#team">four UK Universities</a>
              </b>{" "}
              and{" "}
              <b>
                <a href="#partners">associated industrial partners</a>
              </b>
              . Our aim is to organise open evaluations for hearing aid
              algorithms and to champion novel machine learning approaches to
              hearing aid speech-in-noise processing.{" "}
            </Typography>
          </p>

          <p>
            Currently more than{" "}
            <b>
              <a href="https://www.who.int/health-topics/hearing-loss#tab=tab_1">
                1.5 billion people live with hearing loss
              </a>
            </b>
            , and this number is set to increase as the global population ages.
            Yet only a small fraction of people who could benefit from hearing
            aids have them, and most people who have the devices don't use them
            often enough. A major reason for this low uptake is the perception
            that{" "}
            <b>
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3665209/">
                hearing aids do not perform well enough
              </a>
            </b>
            .
          </p>

          <p>
            We aim to stimulate progress in hearing aid signal processing by{" "}
            <b>
              <a href="../docs/cec2/cec2_intro">
                organising open machine learning challenges
              </a>
            </b>
            . These challenges will focus on speech-in-noise listening, a
            situation in which hearing aid users report the most
            dissatisfaction. For each challenge, we will be providing simulation
            tools, datasets and baseline systems.{" "}
            <b>
              <a href="https://github.com/claritychallenge/clarity">
                Our data and code will all be open-sourced
              </a>
            </b>
            , with the aim of lowering barriers that currently prevent speech
            and audio researchers from considering hearing impairment. Our
            funding is also allowing us to evaluate challenge submissions by
            running listening tests with hearing impaired listeners.
          </p>

          <a id="team" />
          <h2> The Clarity Team</h2>
          <Grid container px={10} spacing={5}>
            {PersonList.map((props, idx) => (
              <GridItem style={{ minWidth: "300px" }} item xs={6}>
                <PersonCard key={idx} {...props} />
              </GridItem>
            ))}
          </Grid>

          <Box py={5}>
            <h2> The Clarity Steering Committee</h2>

            <Grid container px={10} spacing={5}>
              {SteeringPersonList.map((props, idx) => (
                <GridItem style={{ minWidth: "300px" }} item xs={6}>
                  <SteeringPersonCard key={idx} {...props} />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Box>
            <a id="partners" />
            <h2> Our Clarity Partners</h2>

            <Box style={{ textAlign: "center" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                }}
                alt="RNID logo."
                src={useBaseUrl("img/logos/Amazon-logo.png")}
              />
              <Box
                component="img"
                sx={{
                  height: 100,
                }}
                alt="RNID logo."
                src={useBaseUrl("img/logos/irc-logo.png")}
              />
              <Box
                component="img"
                sx={{
                  height: 100,
                }}
                alt="RNID logo."
                src={useBaseUrl("img/logos/RNID-logo.jpeg")}
              />
            </Box>
          </Box>

          <Box py={5}>
            <h2> Thanks to our funders</h2>
            <Box style={{ textAlign: "center" }}>
              <Box
                style={{ textAlign: "center" }}
                component="img"
                sx={{
                  height: 100,
                }}
                alt="EPSRC logo."
                src={useBaseUrl(
                  "img/logos/UKRI_EPSR_Council-Logo_Horiz-RGB.png"
                )}
              />
            </Box>
          </Box>
        </Box>
      </main>{" "}
    </Layout>
  );
}
