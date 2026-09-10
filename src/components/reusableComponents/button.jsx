export function Button ({ label , onClick, className="" }) {
    return(
        <button 
            onClick={ onClick }
            className={`*
                bg-[#0d1b2a]
                text-[#e0e1dd]
                px-5
                py-2
                rounded-full
                font-medium
                tracking-wide
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#1b263b]
                hover:-translate-y-0.5
                hover:shadow-md
                active:translate-y-0
                cursor-pointer
                ${className}
            `}

        >
            {label}
        </button>
    );
}