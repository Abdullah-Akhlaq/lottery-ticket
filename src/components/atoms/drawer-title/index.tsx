import { Typography } from '@mui/material';
import React from 'react';

interface HeadingTitleProps {
    count: string;
}

const Drawercount: React.FC<HeadingTitleProps> = ({ count }) => {
    return (
        <Typography
            sx={{
                color: '#FFF',
                letterSpacing: 'both',
                textEdge: 'cap',
                fontFamily: 'Proxima Nova',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
            }}
        >
            {count}
        </Typography>

    );
};

export default Drawercount; 
