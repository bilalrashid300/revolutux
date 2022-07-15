import React from 'react'

export const StepMobile = ({isReverse, text, idx}) => {
  return (
    <div>
        <div className={`md:hidden flex flex-col  justify-center w-full mb-7`}>
            <div className='flex flex-col items-center mx-5'>
                <div className='rounded-full bg-[#EAA453] p-2 h-14 w-14 flex items-center justify-center'>
                    <h1 className='text-[#A950FA] text-3xl text-center font-semibold'>0{idx+1}</h1>
                </div>
            </div>
            <p className={`text-[#BDB9B9] w-full md:w-1/3 text-center md:text-left`}>{text}</p>
            {/* <p className='text-[#BDB9B9] w-full md:w-1/3 text-center md:text-left ' style={{display: isReverse && 'none'}}>{text}</p> */}
        </div>
    </div>
  )
}
