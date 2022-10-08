import React from "react"

type Props = {
  date: string
  content: string
}

const NewsItem = (props: Props) => {
  return (
    <div className="group">
      <li className="py-3 flex gap-2 items-stretch cursor-pointer group-hover:text-red-600">
        <span className="font-light text-gray-500 group-hover:text-red-600">{props.date}</span>
        <span>{props.content}</span>
      </li>
      <hr />
    </div>
  )
}

export default NewsItem
