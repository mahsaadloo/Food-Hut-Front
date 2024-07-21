"use client";

import { Container, Grid, Box, Stack, Typography } from "@mui/material";
import React from "react";
import CustomTitle from "./CustomTitle";
import Image from "next/image";

const SectionFour = () => {
  return (
    <Box paddingX="40px">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
          <Box sx={{ marginTop: "100px" }}>
            <CustomTitle component="span">It&apos;s Now </CustomTitle>
            <CustomTitle component="span" color="primary">
              More Easy{" "}
            </CustomTitle>
            <CustomTitle component="span">to </CustomTitle>
            <CustomTitle component="span" color="secondary">
              Order
            </CustomTitle>
            <br />
            <CustomTitle component="span">by Our Mobile </CustomTitle>
            <CustomTitle component="span" color="primary">
              App
            </CustomTitle>
          </Box>
          <Stack pt={5}>
            <Typography style={{ wordWrap: "break-word" }} fontSize="18px">
              All you need to do is downlode one of the best delivery apps, make
              a and most companies are opting for mobile app devlopment for food
              delivery.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} paddingTop={5}>
            <Image
              src="./images/AppleStore.svg"
              alt="order"
              width="135"
              height="40"
            />
            <Image
              src="./images/GooglePlay.svg"
              alt="order"
              width="120"
              height="40"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
          <Container>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              marginTop={10}
              marginBottom={30}
            >
              <Box position="absolute" width="100%">
                <Box position="relative" height="570px">
                  <Image src="./images/orangeArc.svg" fill alt="arc" />
                </Box>
              </Box>
              <Box position="absolute" width="100%" top={50}>
                <Box position="relative" height="476px">
                  <Image src="./images/background.svg" fill alt="quarter" />
                </Box>
              </Box>
              <Box top={-50} width="100%">
                <Box position="relative" height="571px">
                  <Image src="./images/chef3.svg" fill alt="chef" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionFour;
