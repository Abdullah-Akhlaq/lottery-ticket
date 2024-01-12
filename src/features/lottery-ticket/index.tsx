import MenuIcon from '@/assets/svg/menu'
import HeadingTitle from '@/components/atoms/heading-title'
import AtomicCard from '@/components/organisms/atomic-card'
import ClassicCard from '@/components/organisms/classic-card'
import CosmicCard from '@/components/organisms/cosmic-card'
import { Box } from '@mui/material'
import React from 'react'

const LotterTicket = () => {
    return (
        <>
            <Box sx={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
            }}>

                <Box >
                    <MenuIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>

                    <HeadingTitle title="Lottery" />
                </Box>
            </Box>

            <Box sx={{ padding: '13px 16px' }}>
                <Box sx={{ padding: '13px 0px' }}>
                    <HeadingTitle title="Latest Results" />
                </Box>

                <ClassicCard />
                <CosmicCard />
                <AtomicCard />
            </Box>
        </>
    )
}

export default LotterTicket
