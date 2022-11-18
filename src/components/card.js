import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import a from './98.png';
import b from './99.png';
import c from './100.png';
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
       //bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
       // border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function JustifyContent() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'natural-grey',
          borderRadius: 1,
        }}
      >


        
        <Item>
          <img src={a} alt = ""/><h2>180+ Countries

Covered</h2>
Our Exchange rate API is built for

developers. We make it easy to

plug in to yout existing software.

You ll receive SDKs for Java, NodeJS,

PHP and Python.</Item>


        <Item>
        <img src={b} alt = ""/>
            <h2>Simple and Quick

Implementation</h2>
Our Exchange rate API is built for

developers. We make it easy to

plug in to yout existing software.

You ll receive SDKs for Java, NodeJS,

PHP and Python.</Item>


        <Item>
        <img src={c} alt = ""/><h2>Accurate and Precise

Data to Implement</h2>
Our Exchange rate API is built for

developers. We make it easy to

plug in to yout existing software.

You ll receive SDKs for Java, NodeJS,

PHP and Python.</Item>
      </Box>
    </div>
  );
}
