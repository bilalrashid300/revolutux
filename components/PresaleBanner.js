import React from 'react'
import { useTranslation } from "next-i18next";

const PresaleBanner = () => {
  const { t } = useTranslation();

  return (
    <main className='p-2 md:p-20'>
        <div className='hero-btn p-2 md:px-20 py-20 rounded-2xl flex flex-col items-center'>
            <h1 className='text-xl md:text-4xl font-semibold text-white text-center mb-7 w-1/2'>{t('collect_heading')}</h1>
            <button className='text-white py-2 rounded-lg px-3 font-bold text-sm' style={{background: 'rgba(217, 217, 217, 0.5)'}}>{t('enter_presale')}</button>
        </div>

        
    </main>
  )
}

export default PresaleBanner