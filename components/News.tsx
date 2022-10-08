import React from "react"
import NewsItem from "./NewsItem"

type Props = {}

const News = (props: Props) => {
  return (
    <div className="flex px-6 mb-6 flex-wrap">
      <div className="basis-full md:basis-1/4">
        <h2 className="text-4xl text-red-600 font-bold">ニュース</h2>
      </div>
      <div className="basis-full md:flex-1">
        <ul className="">
          <NewsItem
            date="2030.02.10"
            content="コーポレートサイトをリニューアルしました。"
          />
          <NewsItem
            date="2030.02.10"
            content="採用を強化中です。一緒に働きませんか？"
          />
          <NewsItem
            date="2030.02.10"
            content="人材紹介SNS「スタート」をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！"
          />
        </ul>
      </div>
    </div>
  )
}

export default News
