import { Typography } from '@mui/material'
import React from 'react'

const AmountTitle = ({ status, color }: { status: string, color: string }) => {
    return (
        <Typography
            sx={{
                color: color,
                leadingTrim: 'both',
                textEdge: 'cap',
                fontFamily: 'Proxima Nova',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                padding: '8px 0px'
            }}
        >
            {status}
        </Typography>
    )
}

export default AmountTitle
