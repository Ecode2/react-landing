import Button from "../button";

function Footer() {

    return (
        <>
            <div className="grid grid-rows-1 grid-cols-2">
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
        </>
    )

}

export default Footer;