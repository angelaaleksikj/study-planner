import {
    Brain,
    CheckCircle2,
    Clock3,
    Flame,
    ShieldCheck,
    Sparkles,
    Target,
    Zap,
} from "lucide-react";

export function StudyMission() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#0d1b2a]
                py-20
                sm:py-24
                lg:py-32
            "
        >
            {/* Background glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-10
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#415a77]/25
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-[#778da9]/20
                    blur-[150px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-4xl text-center">
                    <div
                        className="
                            mx-auto
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                            backdrop-blur-md
                        "
                    >
                        <Flame size={16} className="text-[#9db7d4]" />

                        <p
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.22em]
                                text-[#9db7d4]
                            "
                        >
                            Built to get you locked in
                        </p>
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            tracking-tight
                            text-[#e0e1dd]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Don't figure out how to study.
                        <span className="block text-[#9db7d4]">
                            Just start.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-8
                            text-[#e0e1dd]/65
                            sm:text-lg
                        "
                    >
                        Study Planner turns your deadlines, weak topics and available
                        time into one clear study mission, so you spend less time
                        deciding and more time actually learning.
                    </p>
                </div>

                <div
                    className="
                        mt-16
                        grid
                        items-center
                        gap-12
                        lg:mt-20
                        lg:grid-cols-[1.1fr_0.9fr]
                        lg:gap-16
                    "
                >
                    {/* MAIN MISSION CARD */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[36px]
                            border
                            border-white/10
                            bg-white/[0.06]
                            p-5
                            shadow-[0_35px_100px_rgba(0,0,0,0.35)]
                            backdrop-blur-xl
                            sm:p-7
                            lg:p-8
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-20
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-[#778da9]/20
                                blur-[80px]
                            "
                        />

                        <div className="relative">
                            {/* Top */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-5
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                "
                            >
                                <div>
                                    <p
                                        className="
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#778da9]
                                        "
                                    >
                                        Tonight's study mission
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            text-2xl
                                            font-semibold
                                            text-[#e0e1dd]
                                            sm:text-3xl
                                        "
                                    >
                                        Data Structures
                                    </h3>

                                    <p className="mt-1 text-sm text-[#e0e1dd]/50">
                                        Exam in 6 days
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex
                                        w-fit
                                        items-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-3
                                    "
                                >
                                    <Clock3 size={18} className="text-[#9db7d4]" />

                                    <div>
                                        <p className="text-xs text-[#e0e1dd]/45">
                                            Ready in
                                        </p>

                                        <p className="font-semibold text-[#e0e1dd]">
                                            52 min
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="mt-8">
                                <div className="mb-2 flex items-center justify-between">
                                    <p className="text-sm text-[#e0e1dd]/60">
                                        Mission progress
                                    </p>

                                    <p className="text-sm font-medium text-[#9db7d4]">
                                        20%
                                    </p>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full w-[20%] rounded-full bg-[#778da9]" />
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="mt-8 space-y-3">
                                <MissionStep
                                    complete
                                    icon={Brain}
                                    time="5 min"
                                    title="Recall what you already know"
                                    description="Start from memory before reopening your notes."
                                />

                                <MissionStep
                                    active
                                    icon={Target}
                                    time="18 min"
                                    title="Attack your weakest topics"
                                    description="Focus on the concepts most likely to cost you marks."
                                />

                                <MissionStep
                                    icon={Zap}
                                    time="10 min"
                                    title="Active recall round"
                                    description="Answer from memory instead of rereading."
                                />

                                <MissionStep
                                    icon={CheckCircle2}
                                    time="7 min"
                                    title="Mini exam"
                                    description="Test yourself without hints."
                                />

                                <MissionStep
                                    icon={Sparkles}
                                    time="5 min"
                                    title="Review your mistakes"
                                    description="Turn missed answers into tomorrow's priority."
                                />
                            </div>

                            <button
                                className="
                                    mt-8
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-[#e0e1dd]
                                    px-5
                                    py-4
                                    font-semibold
                                    text-[#0d1b2a]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-white
                                    hover:shadow-[0_15px_40px_rgba(224,225,221,0.15)]
                                "
                            >
                                Start Focus Mode
                                <Zap size={18} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE BENEFITS */}
                    <div>
                        <p
                            className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#778da9]
                            "
                        >
                            Why it feels different
                        </p>

                        <h3
                            className="
                                mt-4
                                text-3xl
                                font-semibold
                                tracking-tight
                                text-[#e0e1dd]
                                sm:text-4xl
                            "
                        >
                            Less panic.
                            <br />
                            More control.
                        </h3>

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-base
                                leading-7
                                text-[#e0e1dd]/60
                            "
                        >
                            The app doesn't just give you tools. It helps decide what
                            matters now and guides you through the session.
                        </p>

                        <div className="mt-8 space-y-4">
                            <Reason
                                icon={Target}
                                title="No blank-page paralysis"
                                description="Open the app and know exactly what to do next."
                            />

                            <Reason
                                icon={Brain}
                                title="No fake productivity"
                                description="Use recall, testing and review instead of endless rereading."
                            />

                            <Reason
                                icon={ShieldCheck}
                                title="No attention roulette"
                                description="Focus mode keeps one clear task in front of you and removes unnecessary choices."
                            />
                        </div>

                        <div
                            className="
                                mt-8
                                rounded-[28px]
                                border
                                border-[#778da9]/20
                                bg-[#415a77]/20
                                p-6
                            "
                        >
                            <p className="text-sm font-medium text-[#9db7d4]">
                                The feeling we're building for
                            </p>

                            <p
                                className="
                                    mt-3
                                    text-xl
                                    font-semibold
                                    leading-8
                                    text-[#e0e1dd]
                                "
                            >
                                “I know what I'm doing. I'm not behind.
                                I can focus. I've got this.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom chips */}
                <div
                    className="
                        mt-16
                        flex
                        flex-wrap
                        justify-center
                        gap-3
                        lg:mt-20
                    "
                >
                    {[
                        "Adaptive flashcards",
                        "Mini quizzes",
                        "Pomodoro",
                        "Active recall",
                        "Mistake bank",
                        "Spaced review",
                        "Exam mode",
                        "Comeback mode",
                    ].map((item) => (
                        <div
                            key={item}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-4
                                py-2
                                text-sm
                                text-[#e0e1dd]/65
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:border-[#778da9]/40
                                hover:bg-white/10
                                hover:text-[#e0e1dd]
                            "
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MissionStep({
    icon: Icon,
    time,
    title,
    description,
    complete = false,
    active = false,
}) {
    return (
        <div
            className={`
                rounded-[22px]
                border
                p-4
                transition-all
                duration-300
                sm:p-5

                ${
                    active
                        ? `
                            border-[#778da9]/50
                            bg-[#415a77]/30
                            shadow-[0_10px_35px_rgba(65,90,119,0.12)]
                        `
                        : `
                            border-white/10
                            bg-white/[0.035]
                        `
                }
            `}
        >
            <div className="flex items-start gap-4">
                <div
                    className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        ${
                            complete
                                ? "bg-[#e0e1dd] text-[#0d1b2a]"
                                : active
                                ? "bg-[#778da9] text-white"
                                : "bg-white/5 text-[#9db7d4]"
                        }
                    `}
                >
                    {complete ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                </div>

                <div className="min-w-0 flex-1">
                    <div
                        className="
                            flex
                            flex-col
                            gap-1
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <p className="font-medium text-[#e0e1dd]">
                            {title}
                        </p>

                        <span className="text-xs text-[#778da9]">
                            {time}
                        </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-[#e0e1dd]/45">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function Reason({ icon: Icon, title, description }) {
    return (
        <div
            className="
                group
                flex
                items-start
                gap-4
                rounded-[24px]
                border
                border-transparent
                p-4
                transition-all
                duration-300
                hover:border-white/10
                hover:bg-white/[0.04]
            "
        >
            <div
                className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#415a77]/35
                    text-[#9db7d4]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                "
            >
                <Icon size={20} />
            </div>

            <div>
                <h4 className="font-semibold text-[#e0e1dd]">
                    {title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#e0e1dd]/50">
                    {description}
                </p>
            </div>
        </div>
    );
}