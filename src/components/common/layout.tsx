import type { ReactNode } from "react";
import NavBar from "./header";
import Footer from "./footer";

const Layout = ({children}: {children: ReactNode} ) => {

    return (
        <>
            <NavBar/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )

}

export default Layout;