import React from 'react'
import { useTranslation } from "next-i18next";

const PresaleCounter = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-[#D9D9D9] rounded-md flex flex-col items-center'>
        <div className='green-to-purple font-semibold text-white py-1 px-20 transform -mt-5 mx-5 md:mx-10  text-center rounded-md'>{t('presale')}</div>
        <div className='py-3 px-10 flex md:space-x-7 space-x-2 items-center'>
            <div className='text-center flex flex-col items-center'>
                <h2 className='font-semibold text-lg md:text-2xl'>15</h2>
                <p className='text-xs'>{t('days')}</p>
            </div>
            <p className='font-bold text-lg md:text-2xl'>:</p>
            <div className='text-center flex flex-col items-center'>
                <h2 className='font-semibold text-lg md:text-2xl'>23</h2>
                <p className='text-xs'>{t('hours')}</p>
            </div>
            <p className='font-bold text-lg md:text-2xl'>:</p>
            <div className='text-center flex flex-col items-center'>
                <h2 className='font-semibold text-lg md:text-2xl'>10</h2>
                <p className='text-xs'>{t('minutes')}</p>
            </div>
            <p className='font-bold text-lg md:text-2xl'>:</p>
            <div className='text-center flex flex-col items-center'>
                <h2 className='font-semibold text-lg md:text-2xl'>24</h2>
                <p className='text-xs'>{t('seconds')}</p>
            </div>
        </div>
    </div>
  )
}

export default PresaleCounter