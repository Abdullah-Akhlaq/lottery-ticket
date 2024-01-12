import ArrowDownIcon from '@/assets/svg/arrowdown'
import StatusTitle from '@/components/atoms/status-title'
import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterPoolStatus = ({ title }: { title: string }) => {
    return (
        <Box sx={{ padding: "8px 114px 7px 115px", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <ArrowDownIcon />
            <StatusTitle title={title} />
        </Box>
    )
}

export default FooterPoolStatus
