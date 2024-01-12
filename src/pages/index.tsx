import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useGetLotteryQuery } from '@/services/lottery/lottery.api'
import CustomButton from '@/components/atoms/custom-button'
import NextDrawBar from '@/components/molecules/next-draw-bar'
import HeadingTitle from '@/components/atoms/heading-title'
import MenuIcon from '@/assets/svg/menu'
import { Box } from '@mui/material'
import CosmicCard from '@/components/organisms/cosmic-card'
import ClassicCard from '@/components/organisms/classic-card'
import AtomicCard from '@/components/organisms/atomic-card'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

        <ClassicCard/>
        <CosmicCard />
        <AtomicCard/>
      </Box>




    </>
  )
}