import React from 'react'
import { useTranslation } from "next-i18next";

const Dao = () => {
  const { t } = useTranslation();

  return (
    <main className='flex  flex-col md:flex-row-reverse  items-center p-2 md:p-20 md:space-x-10'>
        <img src='/dao-img.svg' alt='nft marketplace' className='w-full md:w-2/5'  />

        <div className='space-y-7'>
            <h1 className='text-2xl md:text-3xl font-semibold text-white mb-10'>Revolutu<span className='text-[#AD53FC]'>X</span>{" "}{t('revolutux_dao_heading')}</h1>
            <p className='text-[#BDB9B9] leading-9'>{t('revolutux_dao_desc')}</p>
            <button className='hero-btn text-white rounded-md py-1 px-4'>{t('but_presale')}</button>
        </div>
    </main>
  )
}

export default Dao