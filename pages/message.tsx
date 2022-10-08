import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SubHero from "../components/SubHero"

type Props = {}

const Message = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <React.Fragment>
      <Head>
        <title>メッセージ - START</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page="message" showNav={showNav} setShowNav={setShowNav} />
      <SubHero title="メッセージ" />
      <div className="px-12 flex text-center justify-center flex-wrap mb-6">
        <h2 className="text-red-600 font-bold text-4xl mb-3 basis-full leading-snug">
          「仕事」をきっかけに
          <br />
          人生の新しいスタートを!
        </h2>
        <p className="text-xl mb-6 basis-full">
          大事なお仕事探しを応援させてください
        </p>
        <div className="max-w-4xl basis-full">
          <div className="float-left h-[100px] w-[100px] mr-3 mb-3">
            <Image
              src="/ceo.jpg"
              alt="ceo"
              // layout="fill"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="leading-7 text-start">
            はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。
            <br />
            私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。
            <br />
            株式会社STARTは、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。幸せにつながるお仕事紹介サービス『スタート』や、共通の目標を目指す仲間が見つかる人材紹介SNS『ゴール』を運営しています。また、Webデザインの基礎スキルを身につけられるスクール『Webの学校』も随時開講しています。
          </p>
          <div className="inline"></div>
        </div>
      </div>
      <div className="w-full px-12 mb-16">
        <div className="relative w-full h-[400px]">
          <Image src="/office.jpg" alt="office" layout="fill" objectFit="contain" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Message
