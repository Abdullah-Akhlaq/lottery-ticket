import PlusIcon from '@/assets/svg/plus'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CosmicIcon from '@/assets/svg/cosmic'

const CardHead = ({ color, ticketNumber, icon }: { color: string, ticketNumber: string, icon: JSX.Element }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '10px', padding: '24px 0px', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
                <Typography
                    sx={{
                        color: color,
                        letterSpacing: 'both',
                        textEdge: 'cap',
                        fontFamily: 'Proxima Nova',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                    }}
                >
                    {ticketNumber}
                </Typography>
            </Box>

            < PlusIcon color={color} />


        </Box>
    )
}

export default CardHead
