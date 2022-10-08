import Head from "next/head"
import React, { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import News from "../components/News"
import SubHero from "../components/SubHero"

type Props = {}

const Company = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <React.Fragment>
      <Head>
        <title>会社概要 - START</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header page="company" showNav={showNav} setShowNav={setShowNav} />
      <SubHero title="会社概要" />
      <div className="mb-12 px-12">
        <ul>
          <li>
            <div className="flex py-6">
              <h6 className="basis-1/4">社名</h6>
              <p className="flex-1">株式会社START</p>
            </div>
            <hr />
          </li>
          <li>
            <div className="flex py-6">
              <h6 className="basis-1/4">設立</h6>
              <p className="flex-1">2025.02.10</p>
            </div>
            <hr />
          </li>
          <li>
            <div className="flex py-6">
              <h6 className="basis-1/4">代表取締役</h6>
              <p className="flex-1">ショーン・デイビット・ジュニア</p>
            </div>
            <hr />
          </li>
          <li>
            <div className="flex py-6">
              <h6 className="basis-1/4">資本金</h6>
              <p className="flex-1">10,000,000円</p>
            </div>
            <hr />
          </li>
          <li>
            <div className="flex py-6">
              <h6 className="basis-1/4">所在地</h6>
              <p className="flex-1">
                〒555-5555 東京都千代田区 スタートビルディング 606
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <iframe
        className="w-full px-12 mb-12"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8943235499387!2d139.73475301525886!3d35.67960398019477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7897bf41df%3A0x7b4b471810cbba59!2z44Ok44OV44O844ix!5e0!3m2!1sja!2sjp!4v1665241413749!5m2!1sja!2sjp"
        width="600"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <News />
      <Footer />
    </React.Fragment>
  )
}

export default Company
