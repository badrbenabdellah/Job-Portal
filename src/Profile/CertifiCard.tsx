import { ActionIcon } from '@mantine/core';
import { IconDeviceFloppy, IconPencil, IconTrash } from '@tabler/icons-react';
import React from 'react'

const CertifiCard = (props:any) => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
            <div className='p-2 bg-mine-shaft-800 rounded-md'>
                <img className='h-7' src={`/Icons/${props.issuer}.png`} alt='' />
            </div>
            <div className='flex flex-col'>
                <div className='font-semibold'>{props.name}</div>
                <div className='text-sm text-mine-shaft-300'>{props.issuer}</div>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div className='flex flex-col items-end'>
                <div className='text-sm text-mine-shaft-300'>{props.issueDate}</div>
                <div className='text-sm text-mine-shaft-300'>{props.certificateId}</div>
            </div>
            <ActionIcon color='red.8' variant="subtle">
                <IconTrash className='h-4/5 w-4/5'stroke={1.5} />
            </ActionIcon>
        </div>
    </div>
  )
}

export default CertifiCard;