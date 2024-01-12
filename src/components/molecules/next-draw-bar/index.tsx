import Clock from '@/assets/svg/clock';
import CustomButton from '@/components/atoms/custom-button';
import Drawercount from '@/components/atoms/drawer-title';
import { Box, Typography } from '@mui/material'
import React from 'react'

interface NextDrawBarProps {
  color: string;
  count: string
}

const NextDrawBar: React.FC<NextDrawBarProps> = ({ color, count }) => {
  return (
    <Box sx={{
      display: 'flex',
      height: '40px',
      padding: '8px 16px',
      justifyContent: 'space-between',
      background: color,
      alignItems: 'center'
    }}>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', }}>

        <Typography
          sx={{
            color: '#FFF',
            letterSpacing: 'both',
            textEdge: 'cap',
            fontFamily: 'Proxima Nova',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '13px',

          }}
        >
          Next <br /> Draw
        </Typography>
        <Clock />
        <Drawercount count={count} />
      </Box>
      <CustomButton color={color} />
    </Box>
  )
}

export default NextDrawBar
