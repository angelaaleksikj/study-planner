import logo from "../assets/logo.svg"
import { Button } from "../components/reusableComponents/button"
import { NavItem } from "./reusableComponents/navItem";

export function NavBar () {
    return(
        <nav className="h-15 flex items-center gap-25 py-4 bg-[#778da9] text-white">
            <img 
                src={ logo }
                alt="Study Planner Logo" 
                className="h-15 w-auto"
            />
            <div className="flex flex-1 justify-evenly">
                <NavItem  label="Home" to="/" />
                <NavItem  label="About Us" to="/" />
                <NavItem  label="Intro to App" to="/" />
                <NavItem  label="Study Methods" to="/" />
            </div>
        </nav>
    );
}