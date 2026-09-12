import heroImage from "../assets/hero.jpg";
import { Button } from "../components/reusableComponents/button";
import {
    CalendarDays,
    ChartNoAxesColumnIncreasing,
    UsersRound,
    Target,
    ArrowRight,
    MoveDownLeft,
    Sparkles
} from "lucide-react";

export function Hero() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            <div className="
                absolute
                left-10
                top-28
                max-w-[580px]
                bg-white/75
                backdrop-blur-lg
                border
                border-white/50
                rounded-[32px]
                shadow-[0_20px_60px_rgba(13,27,42,0.15)]
                px-9
                py-8
            ">

                <p className="
                    mb-4
                    font-poppins
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#274c77]
                ">
                    Study Smarter
                </p>

                <h1
                    className="
                        font-poppins
                        text-5xl
                        font-bold
                        leading-[1.15]
                        text-[#0d1b2a]
                        animate-[heroFadeUp_0.8s_ease-out_both]
                        motion-reduce:animate-none
                    "
                >
                    Your brain has 47 tabs open. Let's close 46 of them.
                </h1>

                <p className="
                    mt-5
                    font-poppins
                    text-xl
                    leading-relaxed
                    text-[#415a77]
                ">
                    Plan smarter, stay organized, learn effectively and connect
                    with other students.
                </p>

                <Button
                    label="Ace Your Classes"
                    onClick={() => console.log("ace that mf")}
                    className="
                        mt-7
                        text-lg
                        !px-7
                        !py-3
                        !font-semibold
                        ring-2
                        ring-[#0d1b2a]/20
                        !shadow-[0_10px_30px_rgba(13,27,42,0.28)]
                        hover:scale-105
                        hover:!shadow-[0_16px_35px_rgba(13,27,42,0.38)]
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        "
                    icon={<ArrowRight size={20} />}
                />

                <div className="
                    mt-8
                    grid
                    grid-cols-4
                    gap-5
                ">
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#274c77]/10">
                            <CalendarDays
                                size={20}
                                className="text-[#274c77]"
                            />
                        </div>

                        <p className="text-sm font-medium text-[#0d1b2a]"> 
                            Plan Your Study
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#274c77]/10">
                            <ChartNoAxesColumnIncreasing 
                                size={20}
                                className="text-[#274c77]"
                            />
                        </div>

                        <p className="text-sm font-medium text-[#0d1b2a]">
                            Boost Productivity
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#274c77]/10">
                            <UsersRound
                                size={20}
                                className="text-[#274c77]"
                            />
                        </div>

                        <p className="text-sm font-medium text-[#0d1b2a]">
                            Study Together
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#274c77]/10">
                            <Target
                                size={20}
                                className="text-[#274c77]"
                            />
                        </div>

                        <p className="text-sm font-medium text-[#0d1b2a]">
                            Reach Your Goals
                        </p>
                    </div>

                </div>

            </div>

            <div
                className="
                    absolute
                    right-14
                    top-1/2
                    hidden
                    -translate-y-1/2
                    lg:flex
                    flex-col
                    items-end
                    gap-4
                "
            >
                <div className="flex items-center gap-4">
                    <p className="font-poppins text-3xl font-semibold text-[#0d1b2a]">
                        Plan
                    </p>

                    <MoveDownLeft
                        size={38}
                        strokeWidth={1.5}
                        className="text-[#0d1b2a]/80"
                    />
                </div>

                <div className="flex items-center gap-4 pr-12">
                    <p className="font-poppins text-3xl font-semibold text-[#0d1b2a]">
                        Focus
                    </p>

                    <MoveDownLeft
                        size={38}
                        strokeWidth={1.5}
                        className="text-[#0d1b2a]/80"
                    />
                </div>

                <div className="flex items-center gap-4 pr-24">
                    <p className="font-poppins text-3xl font-semibold text-[#0d1b2a]">
                        Achieve
                    </p>

                    <Sparkles
                        size={30}
                        strokeWidth={1.5}
                        className="text-[#0d1b2a]/80"
                    />
                </div>

                <div
                    className="
                        mt-4
                        max-w-[260px]
                        rounded-2xl
                        border
                        border-white/30
                        bg-white/20
                        backdrop-blur-md
                        px-6
                        py-4
                        shadow-lg
                    "
                >
                    <p className="font-poppins text-lg font-medium text-[#0d1b2a]">
                        A more focused way to study.
                    </p>
            </div>
</div>
        </section>
    );
}