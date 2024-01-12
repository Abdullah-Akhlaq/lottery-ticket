import ArrowDownIcon from '@/assets/svg/arrowdown'
import { Box, Typography } from '@mui/material'
import React from 'react'

const StatusTitle = ({ title }: { title: string }) => {
    return (
        <Typography
            sx={{
                color: '#3F3F3F',
                letterSpacing: 'both',
                textEdge: 'cap',
                fontFamily: 'Proxima Nova',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                LetterSpacing: '-0.026px',
            }}
        >
            {title}
        </Typography>

    )
}

export default StatusTitle
