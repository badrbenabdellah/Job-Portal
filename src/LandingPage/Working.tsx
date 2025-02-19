import React from 'react'
import { works } from '../Data/Data';
import { Avatar } from '@mantine/core';

const Working = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-4xl text-center mb-3 text-mine-shaft-100 font-semibold'>How it <span className='text-bright-sun-400'>Works </span></div>
        <div className='text-lg mb-10 mx-auto text-center text-mine-shaft-200 w-1/2'>Effortlessly navigate through the process and land your dream job.</div>
        <div className='flex px-16 justify-between items-center'>  
            <div className='relative'>
                <img className='w-[30rem]' src='/Working/Girl.png' alt='' />
                <div className='w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md'>
                    <Avatar className='!h-16 !w-16' src="/avatar.png" alt="it's me" />
                    <div className='text-sm sm-mx:text-xs font-semibold text-mine-shaft-200 text-center'>Complete your profile</div>
                    <div className="text-xs text-mine-shaft-300">70% Completed</div>
                </div>
            </div>
            <div className='flex flex-col gap-10 aos-init aos-animate'>
                {
                    works.map((works, index) =>
                    <div className='flex items-center gap-4'>
                        <div className='p-2.5 bg-bright-sun-300 rounded-full'>
                            <img className='h-12 w-12 md-mx:w-9 md-mx:h-9 sm-mx:w-7 sm-mx:h-7' src={`/Working/${works.name}.png`} alt='{works.name}' />
                        </div>
                        <div>
                            <div className='text-mine-shaft-200 text-xl md-mx:text-lg sm-mx:text-base font-semibold'>{works.name}</div>
                            <div className='text-mine-shaft-300 md-mx:text-sm sm-mx:text-xs'>{works.desc}</div>
                        </div>
                    </div>) 
                }
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
    
  )
}

export default Working
