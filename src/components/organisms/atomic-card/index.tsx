import AtomicIcon from '@/assets/svg/atomic'
import CosmicIcon from '@/assets/svg/cosmic'
import AmountTitle from '@/components/atoms/amount-title'
import CoinTitle from '@/components/atoms/coins-title'
import WinningCircle from '@/components/atoms/winning-circle'
import CardHead from '@/components/molecules/card-head'
import FooterPoolStatus from '@/components/molecules/footer-pool-status'
import NextDrawBar from '@/components/molecules/next-draw-bar'
import WinningPotBar from '@/components/molecules/winning-poot-bar'
import { useGetLotteryQuery } from '@/services/lottery/lottery.api'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { IMAGES } from './atomic-card.data'


const AtomicCard = () => {

    const { data }: any = useGetLotteryQuery({ param: 'COSMIC' })
    return (
        <Box sx={{ borderRadius: '8px 8px 0 0', background: '#EAF9F7', marginBottom: '16px' }}>
            <Box sx={{ padding: '12px 16px' }}>
                <CardHead color={'#00AEB1'} ticketNumber={`No. ${data?.data?.roundNumber}`} icon={<AtomicIcon />} />
                <Box sx={{ display: 'flex', gap: "10px" }}>
                    {
                        data?.data?.previousWinningticket?.map((win: number) =>
                            (<WinningCircle wins={win} color={'#00AEB1'} />))
                    }
                </Box>
                <WinningPotBar amount={data?.data?.winningPot} />
            </Box>
            <NextDrawBar color="#00AEB1" count={data?.data?.nextDraw} />
            < FooterPoolStatus title='Close' />

            <Grid container sx={{ padding: '0px 10px' }}>
                {
                    data?.data?.poolAmount?.map((win: any, index: number) =>
                    (
                        <>
                            <Grid item xs={6}>
                                <Image src={IMAGES[index]} width={20} height={20} alt='icons' />
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', gap: '10px' ,justifyContent:'end',padding:'17px 0px'}}>

                                    < CoinTitle title={win?.poolAmount
                                    } />
                                    < CoinTitle title={win?.coinSymbol} />
                                </Box>
                                {/* < AmountTitle status={win?.roundId} color='#191978' /> */}
                            </Grid>
                        </>
                    ))
                }
            </Grid>
        </Box>

    )
}

export default AtomicCard
