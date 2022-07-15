import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { useTranslation } from "next-i18next";

const Defi = () => {
  const { t } = useTranslation();

  return (
    <main className='flex items-center flex-col md:flex-row  p-2 md:p-20 md:space-x-5'>
    <img src='/defi-img.svg' alt='defi' className='w-full md:w-2/5'   />

    <div className='space-y-7'>
        <h1 className='text-2xl md:text-3xl font-semibold text-white mb-10'>Revolutu<span className='text-[#AD53FC]'>X</span>{" "}{t("revolutux_defi_heading")}</h1>
        <p className='text-[#BDB9B9] leading-9'>{t('revolutux_defi_desc')}</p>
        <ul className='text-[#BDB9B9]'>
            <li className='flex leading-9'><p>{t('revolutux_defi_desc_1')}</p> </li>
            <li className='flex leading-9'>{t('revolutux_defi_desc_2')}</li>
            <li className='flex leading-9'>{t('revolutux_defi_desc_3')}</li>
        </ul>
        <button className='hero-btn text-white rounded-md py-1 px-4'>{t('but_presale')}</button>
    </div>
    </main>
  )
}

export default Defi