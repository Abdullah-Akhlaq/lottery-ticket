import React from 'react';
import { Box, Typography } from '@mui/material';

const WinningCircle = ({ wins,color }: { wins: number,color:string }) => {
    return (
        <Box
            sx={{
                borderRadius: '50px',
                border: '1px solid rgba(0, 0, 0, 0.10)',
                background: color,
                display: 'flex',
                width: '36px',
                height: '36px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0,
            }}
        >
            <Typography
                sx={{
                    color: '#FFF',
                    letterSpacing: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Proxima Nova',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }}
            >
                {wins}
            </Typography>
        </Box>
    );
};

export default WinningCircle;
