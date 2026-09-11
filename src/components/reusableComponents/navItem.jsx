import { NavLink } from "react-router"

export function NavItem({ label, to }) {
    return(
        <NavLink
            to={ to }
            className={ ( {isActive} ) => 
            `
            relative
            text-[16px]
            font-semibold
            whitespace-nowrap
            transition-colors
            duration-200

            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-[#0d1b2a]
            after:transition-all
            after:duration-300

            hover:text-[#0d1b2a]
            hover:after:w-full
            ${
                isActive
                ? "text-[#0d1b2a]"
                : "text-[#0d1b2a]/80"
            }
            `
        } 
        >
            {label}
        </NavLink>
    );
}