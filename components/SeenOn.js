import React from 'react'
import { useTranslation } from "next-i18next";

const Item = ({img}) => {
    return(
        <div className='rounded-md p-2 py-3 seen-on flex items-center justify-center mb-10'>
            <img src={img} alt="logo" />
        </div>
    )
}

const data = [
    '/daily-coin.svg',
    'insider.svg',
    '/benzinga.svg',
    '/alphr.svg',
    '/jpost-logo.svg',
    '/news-btc.svg'
]

const SeenOn = () => {
  const { t } = useTranslation();

  return (
    <main className='p-2 md:p-20 flex flex-col items-center justify-center'>
        <h1 className='text-2xl md:text-3xl font-semibold text-white mb-10'>{t('as_seen_on')}</h1>
        <div className='flex items-center justify-center md:space-x-10 flex-wrap'>
            {data.map((item, index) => (
                <Item img={item} key={index} />
            ))}
        </div>
    </main>

  )
}

export default SeenOn