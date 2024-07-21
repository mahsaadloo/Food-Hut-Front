"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import CustomTitle from "./CustomTitle";
import { styled } from "@mui/material/styles";
import CustomButton from "./CustomButton";

const StyledService = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "400",

  "&:hover": {},
}));

const SectionTwo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Container>
          {/*  maxWidth="518px" maxHeight="518px"  maxWidth="448px" maxHeight="449px"  maxWidth="446px" maxHeight="554px" */}
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            marginTop={20}
          >
            <Box position="absolute" width="100%" bottom={80}>
              <Box position="relative" height="518px">
                <Image src="./images/orangeArc.svg" fill alt="arc" />
              </Box>
            </Box>
            <Box position="absolute" width="100%">
              <Box position="relative" height="449px">
                <Image src="./images/quarter.svg" fill alt="quarter" />
              </Box>
            </Box>
            <Box top={-40} width="100%">
              <Box position="relative" height="554px">
                <Image src="./images/chef.svg" fill alt="chef" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Container>
          <Box sx={{ paddingTop: "200px" }}>
            <CustomTitle component="span">We are</CustomTitle>{" "}
            <CustomTitle component="span" color="primary">
              more
            </CustomTitle>{" "}
            <CustomTitle component="span">than</CustomTitle>
            <br />
            <CustomTitle component="span" color="secondary">
              multiple
            </CustomTitle>{" "}
            <CustomTitle component="span">service</CustomTitle>
          </Box>
          <Stack py={2}>
            <Typography style={{ wordWrap: "break-word" }} fontSize="18px">
              This is a type of resturent which typically serves food and drink,
              in addition to light refreshments such as baked goods or snacks.
              The term comes frome the rench word meaning food
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/order.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>Online Order</StyledService>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/booking.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>Pre-Reservation</StyledService>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/booking.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>Super Chef</StyledService>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/service.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>24/7 Service</StyledService>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/booking.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>Oragonized Foodhut Place</StyledService>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Stack direction="row" spacing={2} pb={3}>
                <Image
                  src="./images/booking.svg"
                  alt="order"
                  width="26"
                  height="26"
                />
                <StyledService>Clean Kitchen</StyledService>
              </Stack>
            </Grid>
          </Grid>
          <Box marginBottom={20}>
            <CustomButton>About Us</CustomButton>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SectionTwo;
