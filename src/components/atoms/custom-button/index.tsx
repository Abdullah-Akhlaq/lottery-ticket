import { Button } from '@mui/material'
import React from 'react'
import { style } from './custom-button.style'

const CustomButton = ({ color }: { color: String }) => {
    return (
        <Button variant='contained' sx={style?.buttonDesign(color)}>
            Play
        </Button>
    )
}

export default CustomButton