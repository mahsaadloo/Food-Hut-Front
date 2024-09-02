"use client";
import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Stack,
  SvgIcon,
  SvgIconProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import Image from "next/image";
import CustomInput from "./CustomInput";
import SearchIcon from "@mui/icons-material/Search";
import CustomButton from "./CustomButton";
import { styled } from "@mui/material/styles";

const StyledHeader = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "58px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "48px",
  },
  fontWeight: "900",
  paddingRight: "1px",

  "&:hover": {},
}));

const HeartIcon = (props: SvgIconProps) => (
  <SvgIcon
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#F54748" />
    <path
      d="M16.6613 7.45916C16.4441 6.97793 16.1309 6.54185 15.7392 6.17532C15.3472 5.80769 14.8851 5.51555 14.3779 5.31477C13.852 5.10575 13.288 4.99876 12.7185 5.00001C11.9195 5.00001 11.1401 5.20933 10.4627 5.60472C10.3006 5.6993 10.1467 5.80319 10.0008 5.91638C9.85495 5.80319 9.701 5.6993 9.53894 5.60472C8.86155 5.20933 8.08206 5.00001 7.28313 5.00001C6.70783 5.00001 6.15036 5.10545 5.62368 5.31477C5.11483 5.51634 4.65621 5.80629 4.26241 6.17532C3.87023 6.54143 3.55695 6.97762 3.34032 7.45916C3.11506 7.95999 3 8.49182 3 9.03916C3 9.55549 3.1102 10.0935 3.32897 10.6409C3.5121 11.0983 3.77463 11.5727 4.11008 12.0519C4.64162 12.8101 5.37249 13.6008 6.28 14.4025C7.78388 15.7313 9.27317 16.6492 9.33637 16.6864L9.72045 16.9221C9.8906 17.026 10.1094 17.026 10.2795 16.9221L10.6636 16.6864C10.7268 16.6476 12.2145 15.7313 13.72 14.4025C14.6275 13.6008 15.3584 12.8101 15.8899 12.0519C16.2254 11.5727 16.4895 11.0983 16.671 10.6409C16.8898 10.0935 17 9.55549 17 9.03916C17.0016 8.49182 16.8865 7.95999 16.6613 7.45916Z"
      fill="#FDC55E"
    />
  </SvgIcon>
);

const Header = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: "50px" }}>
              <Stack
                border="1px solid #ffebee"
                bgcolor="#ffebee"
                borderRadius={5}
                direction="row"
                spacing={1}
                padding={0.5}
                width="170px"
              >
                <HeartIcon />
                <Typography>People Trust us</Typography>
              </Stack>
              <Box sx={{ paddingTop: "20px" }}>
                <StyledHeader>
                  We&apos;re{" "}
                  <StyledHeader component="span" color="primary">
                    Serious
                  </StyledHeader>{" "}
                  <StyledHeader component="span">For</StyledHeader>
                  <br />
                  <StyledHeader component="span" color="primary">
                    Food
                  </StyledHeader>{" "}
                  <StyledHeader component="span">&</StyledHeader>{" "}
                  <StyledHeader component="span" color="secondary">
                    Delivery
                  </StyledHeader>{" "}
                  <StyledHeader component="span">.</StyledHeader>
                </StyledHeader>
              </Box>

              <Stack pt={2}>
                <Typography style={{ wordWrap: "break-word" }} fontSize="24px">
                  Best cooks and best delivery guys all at your service. Hot
                  tasty food will reach you in 60 minutes.
                </Typography>
              </Stack>
              <Stack pt={2}>
                <CustomInput
                  defaultValue="Search food"
                  sx={{ backgroundColor: "white" }}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <Button>
                        <Image
                          src="/images/yellowSearch.svg"
                          width={42}
                          height={42}
                          alt="Search"
                        />
                      </Button>
                    </InputAdornment>
                  }
                />
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" pt={1}>
                <Stack>
                  <CustomButton>Download App</CustomButton>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Stack pt={2}>
                    <Image
                      src="/images/PlayButton.svg"
                      width={72}
                      height={72}
                      alt="playButton"
                    />
                  </Stack>
                  <Typography>Watch Video</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack>
              <Box width="100%" position="relative" height={489}>
                <Image src="/images/HeaderImage.svg" fill alt="Headerimage" />
              </Box>
            </Stack>
          </Grid>
          <Stack pt={5} pl={2}>
            <Image
              src="/images/slider.svg"
              width={22}
              height={61}
              alt="slider"
            />
          </Stack>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
