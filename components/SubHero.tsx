import React from "react"

type Props = {
  title: string
}

const SubHero = (props: Props) => {
  return (
    <div
      className="w-screen h-[190px] mb-12 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/pc_header.jpg")' }}
    >
      <h1 className="text-white font-bold text-5xl">{props.title}</h1>
    </div>
  )
}

export default SubHero
