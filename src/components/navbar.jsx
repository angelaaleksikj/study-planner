import logo from "../assets/logo.svg"
import { Button } from "../components/reusableComponents/button"
import { NavItem } from "./reusableComponents/navItem";
import { Logo } from "../components/logo";

export function NavBar () {
    return(
        <nav className="absolute top-0 left-0 z-50 w-full px-8 py-3">
            <div
                className="relative flex items-center justify-between">
                    <Logo />

                    <div className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        flex
                        items-center
                        gap-15
                    ">
                        <NavItem  label="Home" to="/" />
                        <NavItem  label="About Us" to="/" />
                        <NavItem  label="Intro to App" to="/" />
                        <NavItem  label="Study Methods" to="/" />
                    </div>

                    <Button  label="Try App" onClick={() => console.log("clicked")} className="" />
            </div>
        </nav>
    );
}