import { Button } from "../components/reusableComponents/button"
import { NavItem } from "./reusableComponents/navItem";
import { Logo } from "../components/logo";
import { ArrowRight } from "lucide-react";

export function NavBar () {
    return(
        <nav className="absolute top-5 left-5 right-5 z-50 border border-white/50 backgdrop-blur-lg shadow-[0_10px_35px_rgba(13,27,42,0.12)] px-8 py-3 bg-white/75 rounded-3xl">
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

                    <Button  label="Try App" onClick={() => console.log("clicked")} className="
                        hover:scale-105
                        hover:!shadow-[0_16px_35px_rgba(13,27,42,0.38)]
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        " icon={<ArrowRight size={20} />}/>
            </div>
        </nav>
    );
}