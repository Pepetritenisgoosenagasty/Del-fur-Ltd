import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuStyles } from './NavStyle'
import { useRouter } from 'next/router'
import { openModal } from '@/components/Header'

const MobileMenu = ({pageWrapId,outerContainerId}) => {
  const [isClosed, setisClosed] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    openModal()
    setisClosed(true)
  }
  return (
    <>
     <Menu right pageWrapId={pageWrapId}  outerContainerId={outerContainerId} noOverlay styles={MenuStyles} onClose={ isClosed }>
        {/* <Link id="home" className="menu-item" href="/">Home</Link>
        <Link id="about" className="menu-item" href="/about">About</Link>
        <Link id="contact" className="menu-item" href="/contact">Contact</Link> */}
          <div className="flex items-center px-8 py-12 w-full">
            <ul className="flex flex-col space-y-4 w-full m-auto">
              <li className={`text-[25px] font-[400] py-2 px-4  ${router.asPath === "/" ? " text-[#000]" : undefined}`}>
                <Link href="/">Home</Link>
              </li>
              {/* <li className="text-[16px] font-[300]">
                                <Link href="">Service</Link>
                            </li> */}
              <li className={`text-[25px] font-[400] px-4 py-2 ${router.asPath === "/gallery" ? " text-[#000]" : undefined}`}>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className={`text-[25px] font-[400] px-4 py-2  ${router.asPath === "/about" ? " text-[#000]" : undefined}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`text-[25px] font-[400] px-4 py-2 ${router.asPath === "/contact" ? " text-[#000]" : undefined}`}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
            <button
              onClick={()=> router.push("/request_quote")}
              className="px-[25px] w-full  py-[12px] rounded-md text-[#2d3091] border border-[#2d3091] text-[18px] font-[600] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150"
            >
              Get a Quote
            </button>
      </Menu>
    </>
  )
}

export default MobileMenu