export function FeatureCard({ icon : Icon, title, description, className="" }) {
    return(
        <div className={`
            w-80
            min-h-[340px]
            bg-[#415a77]
            rounded-[28px]
            p-7
            border
            border-[#778da9]/50
            shadow-[0_18px_45px_rgba(13,27,42,0.18)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_24px_55px_rgba(13,27,42,0.25)]
            ${className}`}>

            <div className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#1b263b]
                    text-[#e0e1dd]
                    mb-7
            ">
                <Icon />
            </div>    

            <h3 className="
                    text-3xl
                    font-semibold
                    tracking-tight
                    leading-tight
                    text-[#e0e1dd]
                    mb-4
            ">
                {title}
            </h3>

            <p className="
                    text-base
                    leading-7
                    text-[#e0e1dd]/85
            ">
                {description}
            </p>
        </div>
    );
}
