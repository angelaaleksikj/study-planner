import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./reusableComponents/button";

export function FinalCta() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#e0e1dd]
                py-20
                sm:py-24
                lg:py-32
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    top-1/2
                    h-80
                    w-80
                    -translate-y-1/2
                    rounded-full
                    bg-[#778da9]/20
                    blur-[110px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    top-1/3
                    h-96
                    w-96
                    rounded-full
                    bg-[#415a77]/15
                    blur-[130px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-6xl
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-[#415a77]/15
                        bg-white/70
                        px-6
                        py-12
                        text-center
                        shadow-[0_25px_70px_rgba(13,27,42,0.12)]
                        backdrop-blur-xl

                        sm:px-10
                        sm:py-16

                        lg:px-16
                        lg:py-20
                    "
                >
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-64
                            w-64
                            rounded-full
                            bg-[#778da9]/20
                            blur-[80px]
                        "
                    />

                    <div className="relative">
                        <div
                            className="
                                mx-auto
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[#415a77]/15
                                bg-[#415a77]/5
                                px-4
                                py-2
                            "
                        >
                            <Sparkles
                                size={16}
                                className="text-[#415a77]"
                            />

                            <p
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#415a77]
                                "
                            >
                                Your next study session starts here
                            </p>
                        </div>

                        <h2
                            className="
                                mx-auto
                                max-w-4xl
                                text-4xl
                                font-semibold
                                tracking-tight
                                text-[#0d1b2a]

                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            From overwhelmed to
                            <span className="block text-[#415a77]">
                             locked in.
                            </span>
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-base
                                leading-8
                                text-[#415a77]

                                sm:text-lg
                            "
                        >
                            Know what matters, focus on the right thing,
                            and finish each session knowing you actually moved forward.
                        </p>

                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-4
                                sm:flex-row
                            "
                        >
                            <Button
                                label="Try Study Planner"
                                onClick={() => console.log("open app")}
                                className="
                                    !px-7
                                    !py-3
                                    text-base
                                    sm:text-lg

                                    hover:scale-105
                                    hover:!shadow-[0_16px_35px_rgba(13,27,42,0.28)]
                                "
                                icon={<ArrowRight size={20} />}
                            />

                            <p className="text-sm text-[#415a77]/70">
                                Built for students who want less chaos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}