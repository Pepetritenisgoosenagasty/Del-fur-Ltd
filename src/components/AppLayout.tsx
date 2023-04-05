import { Montserrat } from 'next/font/google'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import { HeaderComponent } from './Header'


const montserrat = Montserrat({ subsets: ['latin'] })

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className={montserrat.className}>
                <HeaderComponent />
            </div>
            <main className={`bg-[#f5f5f5] min-h-screen mt-[100px] ${montserrat.className}`}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout