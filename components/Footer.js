import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
      <>
        <main className='p-2 md:p-20 flex flex-col md:flex-row justify-between md:space-y-0 space-y-5'>
            <div className='w-full md:w-1/3'>
                <h1 className='text-xl md:text-xl font-semibold text-white mb-5'>Revolutu<span className='text-[#AD53FC]'>X</span></h1>
                <p className='text-[#BDB9B9]  text-sm leading-6'>{t('footer_desc')}</p>
            </div>

            <div className='w-max'>
                <h1 className='text-xl md:text-xl font-semibold text-white mb-5'>{t('quick_links')}</h1>
                <ul className='text-[#BDB9B9] text-sm space-y-5'>
                    <li>
                        <Link href='/'>{t('nav_whitepaper')}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t('nav_roadmap')}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t('tokenomics_heading')}</Link>
                    </li>
                </ul>
            </div>

            <div className='w-max'>
                <h1 className='text-xl md:text-xl font-semibold text-white mb-5'>{t('quick_links')}</h1>
                <ul className='text-[#BDB9B9] text-sm space-y-5'>
                    <li>+021-554213654</li>
                    <li>info@revolutx.com</li>
                </ul>
            </div>
        </main>

        <div className='p-3 flex justify-center items-center' style={{background: 'rgba(217, 217, 217, 0.5)'}}>
            <p className='text-[#BDB9B9]  text-sm leading-6'>{t('all_rights_reserved')}</p>
        </div>
      </>
  )
}

export default Footer