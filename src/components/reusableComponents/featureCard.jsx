export function FeatureCard({
    icon: Icon,
    title,
    description,
    className = ""
}) {
    return (
        <div
            className={`
                w-full
                h-full
                min-h-[280px]
                sm:min-h-[300px]
                lg:min-h-[320px]
                xl:min-h-[340px]

                bg-[#415a77]

                rounded-[24px]
                sm:rounded-[28px]

                p-5
                sm:p-6
                lg:p-7

                border
                border-[#778da9]/50

                shadow-[0_18px_45px_rgba(13,27,42,0.18)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_24px_55px_rgba(13,27,42,0.25)]

                ${className}
            `}
        >
            <div
                className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14

                    flex
                    items-center
                    justify-center

                    rounded-xl
                    sm:rounded-2xl

                    bg-[#1b263b]
                    text-[#e0e1dd]

                    mb-5
                    sm:mb-6
                    lg:mb-7
                "
            >
                <Icon
                    size={22}
                    className="sm:w-6 sm:h-6"
                />
            </div>

            <h3
                className="
                    text-2xl
                    xl:text-3xl

                    font-semibold
                    tracking-tight
                    leading-tight

                    text-[#e0e1dd]

                    mb-3
                    sm:mb-4
                "
            >
                {title}
            </h3>

            <p
                className="
                    text-sm
                    sm:text-base

                    leading-6
                    sm:leading-7

                    text-[#e0e1dd]/85
                "
            >
                {description}
            </p>
        </div>
    );
}