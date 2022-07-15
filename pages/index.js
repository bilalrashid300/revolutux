import Head from 'next/head'
import Image from 'next/image'
import Dao from '../components/Dao'
import Defi from '../components/Defi'
import Footer from '../components/Footer'
import Marketplace from '../components/Marketplace'
import Nav from '../components/Nav'
import PresaleBanner from '../components/PresaleBanner'
import PresaleCounter from '../components/PresaleCounter'
import About from '../components/sections/About'
import Here from '../components/sections/Here'
import Hero from '../components/sections/Hero'
import RoadMap from '../components/sections/RoadMap'
import Steps from '../components/sections/Steps'
import Tokenomics from '../components/sections/Tokenomics'
import SeenOn from '../components/SeenOn'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});

export default function Home() {
  return (
    <div className="gradient-bg">
      <Head>
        <title>Revolutux Token</title>
        <meta name="description" content="Welcome to the future of cryptocurrency, Welcome to Revolutux Token, the community integrated DeFi and Web 3.0 protocol" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <>
     <Hero />
     <div className='flex justify-center -mt-5'>
        <PresaleCounter />
     </div>
     <SeenOn />
     <About />
     <Marketplace />
     <Dao />
     <Defi />
     <RoadMap />
     <Tokenomics />
     <Steps />
     <Here />
     <PresaleBanner />
     <Footer />
    </>
    </div>
  )
}
