import React from 'react'
import { IconType } from 'react-icons'


type Props = {
  title: string,
  content: string,
  icon: IconType
}

const ServiceItem = (props: Props) => {
  return (
    <div className='shadow-md rounded-md bg-white p-16 flex gap-4 flex-col items-center'>
      <props.icon className='text-red-500' size={40}/>
      <h4 className='font-bold'>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default ServiceItem