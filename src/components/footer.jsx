import { Logo } from "./logo";

export function Footer() {
    return (
        <footer
            className="
                bg-[#0d1b2a]
                text-[#e0e1dd]
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    py-12
                    sm:px-6
                    lg:px-8
                    lg:py-14
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        gap-10

                        md:flex-row
                        md:items-start
                        md:justify-between
                    "
                >
                    <div className="max-w-sm">
                        <Logo />

                        <p
                            className="
                                mt-5
                                text-sm
                                leading-6
                                text-[#e0e1dd]/55
                            "
                        >
                            A calmer way to plan, focus and become better at
                            studying.
                        </p>
                    </div>

                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-8
                            sm:grid-cols-3
                        "
                    >
                        <FooterColumn
                            title="Product"
                            links={[
                                "Home",
                                "Study Planner",
                                "Study Methods",
                            ]}
                        />

                        <FooterColumn
                            title="Explore"
                            links={[
                                "About Us",
                                "How It Works",
                                "Focus Mode",
                            ]}
                        />

                        <FooterColumn
                            title="Connect"
                            links={[
                                "GitHub",
                                "Contact",
                                "Feedback",
                            ]}
                        />
                    </div>
                </div>

                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/10
                        pt-6

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p className="text-xs text-[#e0e1dd]/40">
                        © {new Date().getFullYear()} Study Planner. All rights reserved.
                    </p>

                    <p className="text-xs text-[#e0e1dd]/40">
                        Made for students who want to feel in control.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <p
                className="
                    text-sm
                    font-semibold
                    text-[#e0e1dd]
                "
            >
                {title}
            </p>

            <div className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="
                            text-sm
                            text-[#e0e1dd]/50
                            transition-colors
                            duration-200
                            hover:text-[#e0e1dd]
                        "
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}