import Link from "next/link"
import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-pink-600 w-screen h-[120px] md:h-[160px] flex justify-center items-center">
      <div className="flex-1 px-24 text-white">
        <ul className="flex gap-5 font-bold mb-3">
          <li><Link href='/'>ホーム</Link></li>
          <li><Link href='/message'>メッセージ</Link></li>
          <li><Link href='/company'>会社概要</Link></li>
        </ul>
        <small className="text-xs">©︎START</small>
      </div>
    </div>
  )
}

export default Footer
