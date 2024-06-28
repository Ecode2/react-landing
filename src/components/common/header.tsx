import Button from "../button";
import appLogo from "/logo.svg";

function NavBar() {

    return (
        <header className="flex flex-row justify-around">
            {/* Add logo here */}
            <img src={appLogo} alt="App logo" />
            <nav className="absolute md:relative flex flex-col md:flex-row md:gap-x-4 flex-wrap">
                {/* Make Navbar responsive */}
                <strong>Pricing</strong>
                <strong>Product</strong>
                <strong>About Us</strong>
                <strong>Careers</strong>
                <strong>Community</strong>
            </nav>

            {/* Add Get started button */}
            <Button classes={""} text="Get Started" />
        </header>
    )

}

export default NavBar;