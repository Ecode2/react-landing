import type { ReactNode } from "react";
import NavBar from "./header";
import Footer from "./footer";
import tabletIcon from "/bg-tablet-pattern.svg"

const Layout = ({children}: {children: ReactNode} ) => {

    return (
        <>
            <div className="absolute -z-10 overflow-hidden top-0 right-0 w-full h-[120%]">
                <img className="absolute -top-[11%] -right-[28%] w-[111%] xl:-top-[22%] xl:-right-[9%] xl:w-[54%] md:-top-[10%] md:-right-[17%] md:w-[60%] lg:-top-[19%] lg:-right-[13%] lg:w-[57%]"
                src={tabletIcon} alt="backgound design" />
            </div>
            <NavBar/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )

}

export default Layout;