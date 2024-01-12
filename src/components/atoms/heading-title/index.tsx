import { Typography } from '@mui/material'
import React from 'react'
import { style } from './heading-title.style'

interface HeadingTitleProps {
  title: string; 
}
const HeadingTitle: React.FC<HeadingTitleProps> = ({title}) => {
    return (
      <Typography sx={style?.heading}>
{title}
      </Typography>
    )
  }

export default HeadingTitle
