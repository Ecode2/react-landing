import { useEffect, useState } from "react";
import Button from "../button";
import appLogo from "/logo.svg";
import hamBurger from "/icon-hamburger.svg";
import closeIcon from "/icon-close.svg";

function NavBar() {
    const [click, setClick] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
          screenWidth >= 768 && setClick(false);
        }
    
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
        }
      }, []);

    const handleMenuClick = () => {
        setClick(!click);
    }

    return (
        <header className="flex flex-row justify-between items-center px-[4%] md:px-0 md:justify-around py-6">
            {/* Add logo here */}
            <img src={appLogo} alt="App logo" />
            <div onClick={handleMenuClick} className={click ? "block absolute top-0 left-0 w-full h-full bg-very-dark-blue bg-opacity-45 md:hidden": "hidden"}/>
            <nav className={`absolute font-bold md:relative md:flex  ${click ? "flex z-20 bg-white gap-y-8 justify-center rounded-md left-[7%] w-[86%] h-2/5 top-[10%]" : "hidden"} flex-col items-center md:flex-row md:gap-x-4 flex-wrap`}>
                {/* Make Navbar responsive */}
                <span>Pricing</span>
                <span>Product</span>
                <span>About Us</span>
                <span>Careers</span>
                <span>Community</span>
            </nav>

            {/* Add Get started button */}
            <Button classes={"hidden md:block"} text="Get Started" />

            {click ? <img src={closeIcon} onClick={handleMenuClick} className="md:hidden z-20" alt="App logo" /> : <img src={hamBurger} onClick={handleMenuClick} className="md:hidden" alt="App logo" />}
        </header>
    )

}

export default NavBar;