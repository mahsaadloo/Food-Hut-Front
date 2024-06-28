'use client'
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: "20px",

  "&:hover": {},
}));

const CustomButton = (props:ButtonProps) => {
    return(
        <StyledButton {...props} variant="contained">
           {props.children}
        </StyledButton>
    )
}

export default CustomButton;
