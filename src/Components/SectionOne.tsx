"use client";

import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import CustomTitle from "./CustomTitle";

const SectionOne = () => {
  let data = [
    {
      id: 1,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      imageUrl: "/images/Card2.svg",
      title: "Chicken Tikka",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      imageUrl: "/images/Card3.svg",
      title: "Desi Chowmein",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 4,
      imageUrl: "/images/Card4.svg",
      title: "Chicken Chargha",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <Container>
      <CustomTitle textAlign="center">
        Today{" "}
        <CustomTitle component="span"color="primary">
          special
        </CustomTitle>{" "}
        <CustomTitle component="span">
          offers
        </CustomTitle>
      </CustomTitle>
      <Container maxWidth="md" sx={{ my: 3 }}>
        <Typography style={{ wordWrap: "break-word" }} textAlign="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </Typography>
      </Container>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomCard
                imageUrl={item.imageUrl}
                title={item.title}
                desc={item.desc}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SectionOne;
