import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "../components/reusableComponents/button";
import { NavItem } from "./reusableComponents/navItem";
import { Logo } from "../components/logo";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="
                absolute
                top-4
                left-4
                right-4
                z-50

                border
                border-white/50
                backdrop-blur-lg
                shadow-[0_10px_35px_rgba(13,27,42,0.12)]

                px-4
                py-3

                sm:left-5
                sm:right-5
                sm:px-6

                lg:px-8

                bg-white/75
                rounded-3xl
            "
        >
            <div className="relative flex items-center justify-between">
                <Logo />

                {/* Desktop navigation */}
                <div
                    className="
                        hidden
                        lg:flex

                        absolute
                        left-1/2
                        -translate-x-1/2

                        items-center
                        gap-8
                        xl:gap-15
                    "
                >
                    <NavItem label="Home" to="/" />
                    <NavItem label="About Us" to="/" />
                    <NavItem label="Intro to App" to="/" />
                    <NavItem label="Study Methods" to="/" />
                </div>

                {/* Desktop Try App button */}
                <Button
                    label="Try App"
                    onClick={() => console.log("clicked")}
                    className="
                        hidden
                        lg:inline-flex

                        hover:scale-105
                        hover:!shadow-[0_16px_35px_rgba(13,27,42,0.38)]

                        items-center
                        justify-center
                        gap-2
                    "
                    icon={<ArrowRight size={20} />}
                />

                {/* Mobile hamburger / close button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        lg:hidden

                        flex
                        items-center
                        justify-center

                        w-10
                        h-10

                        rounded-xl

                        text-[#0d1b2a]

                        hover:bg-[#0d1b2a]/10

                        transition-colors
                        cursor-pointer
                    "
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile navigation */}
            {isOpen && (
                <div
                    className="
                        lg:hidden

                        mt-4
                        pt-4

                        border-t
                        border-[#0d1b2a]/10

                        flex
                        flex-col
                        gap-3
                    "
                >
                    <NavItem label="Home" to="/" />
                    <NavItem label="About Us" to="/" />
                    <NavItem label="Intro to App" to="/" />
                    <NavItem label="Study Methods" to="/" />

                    <Button
                        label="Try App"
                        onClick={() => console.log("clicked")}
                        className="
                            mt-2
                            w-full

                            inline-flex
                            items-center
                            justify-center
                            gap-2
                        "
                        icon={<ArrowRight size={20} />}
                    />
                </div>
            )}
        </nav>
    );
}