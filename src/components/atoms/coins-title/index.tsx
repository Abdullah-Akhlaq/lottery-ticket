import { Typography } from '@mui/material'
import React from 'react'

const CoinTitle = ({ title }: { title: string }) => {
    return (
        <Typography
            sx={{
                color: '#000',
                textAlign: 'right',
                leadingTrim: 'both',
                textEdge: 'cap',
                fontFamily: 'Proxima Nova',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '-0.032px',
            }}
        >
            {title}
        </Typography>
    )
}

export default CoinTitle
