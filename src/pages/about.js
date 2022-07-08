import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Container from "@mui/material/Container";
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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={useBaseUrl(avatar)}
            sx={{ width: 64, height: 64 }}
          />
        }
        title={name}
        subheader={affiliation}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "h7" }}
      />
      <CardActions>
        <Button href={url} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>,
  ];
}

const PersonList = [
  {
    name: "Jon Barker",
    department: "Department of Computer Science",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/academic/jon-barker",
    avatar: "/img/avatar/barker.png",
  },
  {
    name: "Will Bailey",
    affiliation: "University of Sheffield",
    url: "https://www.sheffield.ac.uk/dcs/people/research-staff/will-bailey",
    avatar: "/img/avatar/bailey.png",
  },
  {
    name: "Zehai Tu",
    affiliation: "University of Sheffield",
    url: "https://www.linkedin.com/in/zehai-tu-5b169721a/?trk=public_profile_browsemap&originalSubdomain=uk",
    avatar: "/img/avatar/tu.jpeg",
  },
  {
    name: "Trevor Cox",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/trevor-cox",
    avatar: "/img/avatar/cox.jpeg",
  },
  {
    name: "Simone Graetzer",
    affiliation: "University of Salford",
    url: "https://www.salford.ac.uk/our-staff/simone-graetzer",
    avatar: "/img/avatar/graetzer.jpeg",
  },
  {
    name: "John Culling",
    affiliation: "University of Cardiff",
    url: "https://www.cardiff.ac.uk/people/view/839729-culling-john",
    avatar: "/img/avatar/culling.avif",
  },
  {
    name: "Michael Akeroyd",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/michael.akeroyd",
    avatar: "/img/avatar/akeroyd.jpeg",
  },
  {
    name: "Graham Naylor",
    affiliation: "University of Nottingham",
    url: "https://www.nottingham.ac.uk/medicine/people/graham.naylor",
    avatar: "/img/avatar/naylor.jpeg",
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

        <Box sx={{ p: 6, border: "1px dashed grey" }}>
          <h2>About Us</h2>
          <p> Clarity is a 5-year project funded by the UKRI.</p>

          <Grid container spacing={4}>
            {PersonList.map((props, idx) => (
              <GridItem item xs={6}>
                <PersonCard key={idx} {...props} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </main>{" "}
    </Layout>
  );
}
