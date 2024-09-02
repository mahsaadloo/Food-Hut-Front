"use client";
import { styled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "700",

  "&:hover": {},
}));

const CustomTitle = (props: TypographyProps) => {
  return <StyledTitle sx={{...props.sx, fontSize: 48}} {...props} />;
};

export default CustomTitle;
