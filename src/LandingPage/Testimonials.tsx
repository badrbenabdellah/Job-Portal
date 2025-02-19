import { Avatar, Rating } from '@mantine/core'
import React from 'react'
import { views } from '../Data/Data'

const Testimonials = () => {
  return (
    <div className='mt-20 pb-5'>
      <div className='text-4xl text-center font-semibold mb-3 text-mine-shaft-100'>What <span className='text-bright-sun-400'>User </span>says about us?</div>
      <div className='flex justify-evenly'>
        {
          views.map((views, index) =>
            <div key={index} className='flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10'>
              <div className='flex gap-2 items-center'>
                <Avatar className='!h-14 !w-14' src={views.avatar} alt="it's me" />
              <div>
                <div className='text-lg text-mine-shaft-100 font-semibold'>{views.name}</div>
                  <Rating defaultValue={views.marks}  readOnly/>
                </div>
              </div>
              <div className='text-xs text-mine-shaft-300'>{views.view}</div>
            </div> 
          ) 
        }
      </div>
    </div>
  )
}

export default Testimonials
