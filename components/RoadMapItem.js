import React from 'react'
import { BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUp } from 'react-icons/bs'
import { useTranslation } from "next-i18next";

const RoadMapItem = ({isPointing, items, index}) => {
  const { t } = useTranslation();

  return (
    <main className='mb-24 md:mb-10 mx-7 flex items-center justify-center relative'>
        <div>
            <div className='hero-btn rounded-full py-1 px-3 text-white mb-5'>
                <p className='text-center'>{t('phase')} {index+1}</p>
            </div>
            <div className='roadmap-card rounded-md p-12' style={{width: '300px',height: '450px'}}>
                <h1 className='text-[#A950FA] text-5xl text-center font-bold mb-5'>0{index+1}</h1>

                <ol className='space-y-5 text-white font-semibold'>
                    {items.map((i, idx) => (
                        <li key={idx} ><span className='mr-2'>{idx+1}.</span>{i}</li>
                    ))}
                </ol>
            </div>
        </div>
        {isPointing&&<BsArrowRight color='#733e9e' size={150} className="absolute left-64 hidden md:block" />}
        {isPointing&&<BsArrowDown color='#733e9e' size={150} className="absolute  bottom-0 transform translate-y-24 md:hidden" />}
    </main>
  )
}

export default RoadMapItem