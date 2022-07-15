import React from 'react'
import TokenomicsCard from '../TokenomicsCard'
import { useTranslation } from "next-i18next";

const Tokenomics = () => {
  const { t } = useTranslation();

  return (
      <>
       <div className='flex flex-col justify-center items-center mb-14'>
            <h1 className='text-xl md:text-xl font-semibold text-white'>Revolutu<span className='text-[#AD53FC]'>X</span></h1>
            <h1 className='text-2xl md:text-4xl text-white font-semibold'>{t('tokenomics_heading')}</h1>
        </div>
        <section id="tokenomics" className='tokenomics-bg px-2 md:px-20 py-20 flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3 space-y-7'>
                <p className='text-xl md:text-xl font-semibold text-white'>{t('tokenomics_desc')}</p>
                <div className='hero-btn text-white p-2 rounded-md w-max px-7'>
                    <p>{t('stage_one')} - 20% {t('bonus')}</p>
                    <p>{t('stage_two')}  - 10% {t('bonus')}</p>
                </div>
            </div>
            <TokenomicsCard />
        </section>
      </>

  )
}

export default Tokenomics