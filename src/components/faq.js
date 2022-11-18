import AddIcon from '@mui/icons-material/Add';
import Box, { BoxProps } from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {Par} from './faq.style.js'
function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        
 //       bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
     //   border: '1px solid',
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

export default function FlexDirection() {
  return (
    <Par>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          p: 1,
          
          m: 1,

          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Item>What is Street Rate API?<AddIcon textAlig/></Item>
  <Divider/>
        <Item>How Secure is Street Rates API?</Item>
        <Divider/>
        <Item>How do i get started?</Item>
        <Divider/>
        <Item>How do i go Live?</Item>
        <Divider/>
      </Box>
          
          </Par>
  );
}
