import {
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
  import Image from "next/image";
import { CustomCardProps } from "app/Types";

const CustomCard = (props: CustomCardProps) => {
    const {imageUrl, title, desc} = props
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= {imageUrl}
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
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            paddingY={1}
            paddingX={2}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton size="small" color="primary">
          Order Now
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
