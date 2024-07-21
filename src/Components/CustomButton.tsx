"use client";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "20px",
  width: "auto",
  border: "1px solid #f54748",

  "&:hover": {},
}));

const CustomButton = (props: ButtonProps) => {
  return <StyledButton {...props} variant="contained" />;
};

export default CustomButton;
