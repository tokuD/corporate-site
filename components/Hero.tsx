import React from "react"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div
      className="h-[600px] bg-no-repeat bg-cover bg-center mb-6 text-white text-center flex flex-col justify-center gap-4"
      style={{ backgroundImage: 'url("/pc_mv.jpg")' }}
    >
      <h1 className="text-9xl font-bold font-mono">START</h1>
      <p className="text-2xl ">仕事に最高のスタートを</p>
    </div>
  )
}

export default Hero
