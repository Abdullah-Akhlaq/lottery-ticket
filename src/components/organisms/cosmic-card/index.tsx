import ClassicIcon from '@/assets/svg/classic'
import AmountTitle from '@/components/atoms/amount-title'
import WinningCircle from '@/components/atoms/winning-circle'
import CardHead from '@/components/molecules/card-head'
import FooterPoolStatus from '@/components/molecules/footer-pool-status'
import NextDrawBar from '@/components/molecules/next-draw-bar'
import WinningPotBar from '@/components/molecules/winning-poot-bar'
import { useGetLotteryQuery } from '@/services/lottery/lottery.api'
import { Box, Grid } from '@mui/material'
import React from 'react'

const CosmicCard = () => {


    const { data }: any = useGetLotteryQuery({ param: 'COSMIC' })
    return (
        <Box sx={{ borderRadius: '8px 8px 0 0', background: '#E9EEF6',marginBottom:'16px' }}>
            <Box sx={{ padding: '12px 16px' }}>
                <CardHead color={'#191978'} ticketNumber={`Past ${data?.data?.previousWinningticket?.length} Results`} icon={ <ClassicIcon />} />
                <Grid container>
                    {
                        data?.data?.poolAmount?.map((win: any,) =>
                        (
                            <>
                                <Grid item xs={4}>
                                    < AmountTitle status={win?.poolId} color='#000' />

                                </Grid>
                                <Grid item xs={4}>
                                    < AmountTitle status={win?.roundId} color='#191978' />

                                </Grid>
                                <Grid item xs={4}>
                                    < AmountTitle status={win?.lotteryId} color='#000' />

                                </Grid>
                            </>
                        ))
                    }
                </Grid>
            </Box>
            <NextDrawBar color="#191978" count={data?.data?.nextDraw} />
            < FooterPoolStatus title='Current Pool Status' />
        </Box>

    )
}

export default CosmicCard
