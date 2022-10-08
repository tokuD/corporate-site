import Image from "next/image"
import React, { useState } from "react"
import logo from "../public/logo.svg"
import { MdMenu, MdClose } from "react-icons/md"
import Link from "next/link"

type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
  page: "home" | "message" | "company"
}

const Header = (props: Props) => {
  const { showNav, setShowNav } = props
  const openNav = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    setShowNav(true)
    document.addEventListener("click", closeNav)
    event.stopPropagation()
  }
  const closeNav = () => {
    setShowNav(false)
    document.removeEventListener("click", closeNav)
  }
  return (
    <React.Fragment>
      <div className=" w-screen h-[60px] md:h-[90px] flex md:px-4 justify-between">
        <Image src={logo} alt="corporate logo" width={164} />
        {/* pc menu */}
        <ul className="hidden md:flex items-center gap-6 font-bold">
          <li className={props.page === "home" ? "text-red-600" : ""}>
            <Link href="/">ホーム</Link>
          </li>
          <li className={props.page === "message" ? "text-red-600" : ""}>
            <Link href="/message">メッセージ</Link>
          </li>
          <li className={props.page === "company" ? "text-red-600" : ""}>
            <Link href="/company">会社概要</Link>
          </li>
        </ul>
        {/* humburger */}
        <div className="md:hidden flex items-center bg-red-500 w-[60px] justify-center">
          <MdMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={openNav}
          />
        </div>
      </div>
      {/* smart phone menu */}
      <div
        className={`bg-red-500 text-white fixed top-0 ${
          showNav ? "right-0" : "right-[-180px]"
        } duration-200 w-[180px] h-screen`}
      >
        <div className="flex items-center w-[60px] h-[60px] justify-center absolute top-0 right-0">
          <MdClose
            size={30}
            className="w-fit cursor-pointer"
            onClick={closeNav}
          />
        </div>
        <ul className="flex flex-col justify-center pl-10 gap-6 mt-[60px]">
          <li className={props.page === "home" ? "text-gray-300/80" : ""}>
            <Link href="/">ホーム</Link>
          </li>
          <li className={props.page === "message" ? "text-gray-300/80" : ""}>
            <Link href="/message">メッセージ</Link>
          </li>
          <li className={props.page === "company" ? "text-gray-300/80" : ""}>
            <Link href="/company">会社概要</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header
