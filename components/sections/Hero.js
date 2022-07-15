import React from 'react'
import MobileNav from '../MobileNav'
import Nav from '../Nav'
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
      <section id='home' className='hero-bg flex flex-col items-center justify-center' style={{borderBottomLeftRadius: '10%', borderBottomRightRadius: '10%'}}>
    <Nav />
    <MobileNav />

        <main  className=' p-2 md:p-20 flex items-center' style={{height: '80vh'}}>
            <div className='text-white w-full md:w-1/2 space-y-7'>
                <h1 className='text-2xl md:text-5xl font-semibold'>{t('revolutux_heading')}</h1>
                <p>{t('revolutux_desc')}</p>
                <div className='space-x-3'>
                    <button className='hero-btn rounded-md py-1 px-4'>{t('but_presale')}</button>
                    <button className='hero-btn rounded-md py-1 px-4'>{t('nav_whitepaper')}</button>
                </div>
            </div>
        </main>
        
      </section>
  )
}

export default Hero