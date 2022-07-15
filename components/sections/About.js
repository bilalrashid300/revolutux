import React from 'react'
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className='px-2 py-10 md:px-20 flex flex-col items-center justify-center'>
        <h1 className='text-2xl md:text-3xl font-semibold text-white mb-10'>{t('about_us_heading')}</h1>
        <p className='text-[#BDB9B9] w-full md:w-1/2 text-center'>{t('about_us_desc')}</p>
    </section>
  )
}

export default About