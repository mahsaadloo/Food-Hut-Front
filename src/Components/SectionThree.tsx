"use client";

import { Box, Container, Stack, Grid } from "@mui/material";
import React from "react";
import CustomTitle from "./CustomTitle";
import CustomButton from "./CustomButton";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import CustomCard from "./CustomCard";

const StyledButtonPlain = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "20px",
  width: "auto",
  border: "1px solid grey",
  backgroundColor: "white",
  color: "grey",

  "&:hover": {},
}));

const SectionThree = () => {
  let data = [
    {
      id: 1,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 3,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 4,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 5,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 6,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 7,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 8,
      imageUrl: "/images/Card1.svg",
      title: "Kebab",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <Container>
      <CustomTitle textAlign="center">
        <CustomTitle component="span" color="primary">
          Menu
        </CustomTitle>{" "}
        <CustomTitle component="span">That</CustomTitle>{" "}
        <CustomTitle component="span" color="secondary">
          Always
        </CustomTitle>{" "}
        <CustomTitle component="span">Makes You</CustomTitle>
      </CustomTitle>
      <CustomTitle textAlign="center">
        Fall In{" "}
        <CustomTitle component="span" color="primary">
          Love
        </CustomTitle>
      </CustomTitle>
      <Stack
        direction="row"
        spacing={3}
        marginTop="50px"
        justifyContent="center"
      >
        <CustomButton>Ramen</CustomButton>
        <StyledButtonPlain variant="contained">Breakfast</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Lunch</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Dinner</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Maxican</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Italian</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Desserts</StyledButtonPlain>
        <StyledButtonPlain variant="contained">Drinks</StyledButtonPlain>
      </Stack>
      <Box marginTop="50px" paddingBottom={10}>
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
      </Box>
    </Container>
  );
};

export default SectionThree;
