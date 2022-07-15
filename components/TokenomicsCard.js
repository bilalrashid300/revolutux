import React from 'react'
import { useTranslation } from "next-i18next";

const Progress = ({label, progress}) => {
    return(
        <div>
            <p className='text-xs'>{label}</p>
            <div className='bg-[#D9D9D9] rounded-full h-2'>
                <div className='bg-[#A14AF8] rounded-full h-2' style={{width: progress}} />
            </div>
        </div>
    )
}


const TokenomicsCard = () => {
  const { t } = useTranslation();
  const data = [
    {
        label: `${t('total_supply')} - 50,000,000,000`,
        progress: '97%'
    },
    {
        label: `40% ${t('development')}`,
        progress: '40%'
    },
    {
        label: `25% ${t('presale')}`,
        progress: '25%'
    },
    {
        label: `15% ${t('marketing')}`,
        progress: '15%'
    },
    {
        label: `15% ${t('liquidity')}`,
        progress: '15%'
    },
    {
        label: `5% ${t('team')}`,
        progress: '5%'
    },
    {
        label: `${t('presale_supply')} 12,500,000,000`,
        progress: '97%'
    },
    {
        label: `${t('stage_one')} - 75% = 9,375,000,000`,
        progress: '80%'
    },
    {
        label: `${t('stage_two')} - 25% = 3,125,000,000`,
        progress: '25%'
    }
]


  return (
    <div className='bg-white border-4 border-black rounded-xl p-4 w-full md:w-1/3 space-y-7 mt-20 md:mt-0 transform md:translate-y-32'>
        {
            data.map((item, idx) => (
                <Progress label={item.label} progress={item.progress} key={idx} />
            ))
        }
    </div>
  )
}

export default TokenomicsCard