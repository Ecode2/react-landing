import Button from "../button";
import LgBgSimplify from "/bg-simplify-section-desktop.svg";
import SmBgSimplify from "/bg-simplify-section-mobile.svg";

function Footer() {

    return (
        <div className="pt-[12%]">
            <div className="grid grid-rows-1 grid-cols-2 w-full bg-bright-red px-[4%]">
                <p>Simplify how your team works today.</p>
                <Button classes={""} text="Get Started" />
            </div>

            <footer className="grid grid-rows-1 grid-cols-3">
                <div>

                </div>

                <ul>
                    <li>
                        Home
                        Pricing
                        Products
                        About Us
                    </li>

                    <li>
                        Careers
                        Community
                        Privacy Policy
                    </li>
                </ul>

                <div>

                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
                
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">Your Name Here</a>.
                </div>
            </footer>
        </div>
    )

}

export default Footer;