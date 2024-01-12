import React from 'react';
import { Box, Typography } from '@mui/material';

const WinningPotBar = ({amount}:{amount:number}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'16px 0px' }}>
            <Typography
                sx={{
                    color: '#000',
                    letterSpacing: 'both',
                    textEdge: 'cap',
                    fontFamily: 'Proxima Nova',
                    fontSize: '13px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                }}
            >
                Winning Pot
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
                <Typography
                    sx={{
                        color: '#000',
                        textAlign: 'right',
                        letterSpacing: 'both',
                        textEdge: 'cap',
                        fontFamily: 'Proxima Nova',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                    }}
                >
                   { amount}
                </Typography>
                <Typography
                    sx={{
                        color: '#000',
                        letterSpacing: 'both',
                        textEdge: 'cap',
                        fontFamily: 'Proxima Nova',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                        LetterSpacing: '-0.024px',
                    }}
                >
                    LUCKI
                </Typography>
            </Box>
        </Box>
    );
};

export default WinningPotBar;
