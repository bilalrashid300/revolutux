import React from 'react'
import { useTranslation } from "next-i18next";

const Here = () => {
  const { t } = useTranslation();

  return (
    <main className='px-2 py-10 md:px-20'>
         <div className='flex flex-col justify-center items-center mb-10'>
            <h1 className='text-xl md:text-2xl font-semibold text-white'>Revolutu<span className='text-[#AD53FC]'>X</span> {" "}{t('is_here')}</h1>
        </div>
        <div className='space-y-5 text-center'>
            <p className='text-[#BDB9B9] text-right`'>{t('is_here_desc_1')}</p>
            <p className='text-[#BDB9B9] text-right`'>{t('is_here_desc_2')}</p>
            <p className='text-[#BDB9B9] text-right`'>{t('is_here_desc_3')}</p>
             </div>
       
    </main>
  )
}

export default Here