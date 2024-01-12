import CosmicIcon from '@/assets/svg/cosmic'
import WinningCircle from '@/components/atoms/winning-circle'
import CardHead from '@/components/molecules/card-head'
import FooterPoolStatus from '@/components/molecules/footer-pool-status'
import NextDrawBar from '@/components/molecules/next-draw-bar'
import WinningPotBar from '@/components/molecules/winning-poot-bar'
import { useGetLotteryQuery } from '@/services/lottery/lottery.api'
import { Box } from '@mui/material'
import React from 'react'

const ClassicCard = () => {

    const { data }: any = useGetLotteryQuery({ param: 'CLASSIC' })
    return (
        <Box sx={{ borderRadius: '8px 8px 0 0', background: '#EEE1F0', marginBottom: '16px' }}>
            <Box sx={{ padding: '12px 16px' }}>
                <CardHead color={'#961A88'} ticketNumber={`No. ${data?.data?.roundNumber}`} icon={<CosmicIcon />} />
                <Box sx={{ display: 'flex', gap: "10px" }}>
                    {
                        data?.data?.previousWinningticket?.map((win: number, index: number) =>
                            (<WinningCircle wins={win} color={index === data?.data?.previousWinningticket.length - 1 ? '#961A88' : '#595857'} />))
                    }
                </Box>
                <WinningPotBar amount={data?.data?.winningPot} />
            </Box>
            <NextDrawBar color="#961A88" count={data?.data?.nextDraw} />
            < FooterPoolStatus title='Current Pool Status' />
        </Box>

    )
}

export default ClassicCard
