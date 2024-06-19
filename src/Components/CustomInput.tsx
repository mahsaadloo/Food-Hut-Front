'use client';
import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { InputProps } from '@mui/material';

const StyledInput = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
      borderRadius: 20,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: 'auto',
      padding: '8px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

const CustomInput = (props:InputProps) => {
  return (
    <StyledInput {...props}>
        {props}
    </StyledInput>
  )
}

export default CustomInput