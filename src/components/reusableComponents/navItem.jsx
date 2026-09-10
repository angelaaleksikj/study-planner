import { NavLink } from "react-router"

export function NavItem({ label, to }) {
    return(
        <NavLink
            to={ to }
            className={ ( {isActive} ) => 
            `
            px-4
            py-2
            rounded-md
            font-medium
            transition-all 
            duration-200 
            hover:bg-[#415a77]
            hover:text-[#e0e1dd]
            ${isActive ? "bg-[#1b263b] text-[#e0e1dd]"
              : "text-white"
            }
            `
            } 
        
        >
            {label}
        </NavLink>
    );
}