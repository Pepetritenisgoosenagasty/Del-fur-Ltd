import { Montserrat } from 'next/font/google'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import { HeaderComponent } from './Header'
import MobileMenu from '@/Features/components/MobileMenu'


const montserrat = Montserrat({ subsets: ['latin'] })

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
        <div id="outer-container">

        <MobileMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            <div id="page-wrap">
            <div className={montserrat.className}>
                <HeaderComponent />
            </div>
            <main className={`bg-[#f5f5f5] min-h-screen mt-[100px] ${montserrat.className}`}>
                {children}
            </main>
            <Footer />
            </div>
        </div>
        </>
    )
}

export default AppLayout