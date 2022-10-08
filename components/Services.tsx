import React from 'react'
import ServiceItem from './ServiceItem'
import { BsFillBagFill, BsBuilding, BsTv } from "react-icons/bs"

type Props = {}

const Services = (props: Props) => {
  return (
    <div className="relative px-6 mb-24">
      <h1 className="absolute -z-10 -top-6 right-0 text-gray-100 text-9xl font-bold">
        SERVICE
      </h1>
      <h1 className="text-4xl text-red-600 font-bold mb-10">サービス</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        <ServiceItem icon={BsFillBagFill} title='人材紹介業' content='新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。'/>
        <ServiceItem icon={BsBuilding} title='スクール事業' content='オンラインでWeb制作を学べるスクールを運営しています。'/>
        <ServiceItem icon={BsTv} title='Webメディア運営' content='人事系メディアやWebデザイン関連のメディアなどを複数運営しています。'/>
      </div>
    </div>
  )
}

export default Services