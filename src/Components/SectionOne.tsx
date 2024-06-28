"use client";

import {
  Container,
  Grid,
  Stack,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Image from "next/image";

const SectionOne = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            marginTop={20}
            marginBottom={3}
          >
            <Typography
              style={{ wordWrap: "break-word" }}
              fontWeight={700}
              fontSize={48}
            >
              Today
            </Typography>
            <Typography
              style={{ wordWrap: "break-word" }}
              fontWeight={700}
              fontSize={48}
              sx={{ color: (t) => t.palette.primary.main }}
            >
              special
            </Typography>
            <Typography
              style={{ wordWrap: "break-word" }}
              fontWeight={700}
              fontSize={48}
            >
              offers
            </Typography>
          </Stack>
          <Stack justifyContent="center" paddingX={25} paddingBottom={10}>
            <Typography style={{ wordWrap: "break-word" }} textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </Typography>
          </Stack>
        </Grid>
        <Stack direction="row" spacing={3} marginBottom={20}>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Card1.svg"
                alt="card1"
              />
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src="/images/av1.svg" width={74} height={38} alt="" />
                  <Image src="/images/star.svg" width={28} height={28} alt="" />
                  <Typography>(4.5)</Typography>
                </Stack>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  textAlign="center"
                  fontWeight={600}
                  paddingTop={4}
                >
                  Kebab
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  paddingY={1}
                  paddingX={2}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <CustomButton size="small" color="primary">
                Order Now
              </CustomButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Card2.svg"
                alt="card2"
              />
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src="/images/av2.svg" width={74} height={38} alt="" />
                  <Image src="/images/star.svg" width={28} height={28} alt="" />
                  <Typography>(4.8)</Typography>
                </Stack>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  textAlign="center"
                  fontWeight={600}
                  paddingTop={4}
                >
                  Chicken Tikka
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  paddingY={1}
                  paddingX={2}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <CustomButton size="small" color="primary">
                Order Now
              </CustomButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Card3.svg"
                alt="card3"
              />
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src="/images/av3.svg" width={74} height={38} alt="" />
                  <Image src="/images/star.svg" width={28} height={28} alt="" />
                  <Typography>(4.2)</Typography>
                </Stack>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  textAlign="center"
                  fontWeight={600}
                  paddingTop={4}
                >
                  Desi Chowmein
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  paddingY={1}
                  paddingX={2}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <CustomButton size="small" color="primary">
                Order Now
              </CustomButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Card4.svg"
                alt="card4"
              />
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src="/images/av1.svg" width={74} height={38} alt="" />
                  <Image src="/images/star.svg" width={28} height={28} alt="" />
                  <Typography>(5.0)</Typography>
                </Stack>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                  textAlign="center"
                  fontWeight={600}
                  paddingTop={4}
                >
                  Chicken Chargha
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  paddingY={1}
                  paddingX={2}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <CustomButton size="small" color="primary">
                Order Now
              </CustomButton>
            </CardActions>
          </Card>
        </Stack>
      </Grid>
    </Container>
  );
};

export default SectionOne;
