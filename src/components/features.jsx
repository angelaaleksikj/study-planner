import { useState } from "react";
import {
    CalendarDays,
    Clock3,
    Brain,
    Sparkles,
    CheckCircle2,
    Target,
    ArrowUpRight,
} from "lucide-react";

const features = [
    {
        icon: CalendarDays,
        title: "Plan your week",
        short: "See everything before it becomes overwhelming.",
        description:
            "Classes, deadlines and study sessions come together in one clear weekly view.",
    },
    {
        icon: Clock3,
        title: "Stay ahead",
        short: "No more last-minute surprises.",
        description:
            "Know what's coming next and what deserves your attention before deadlines pile up.",
    },
    {
        icon: Brain,
        title: "Focus better",
        short: "Turn plans into actual study sessions.",
        description:
            "Break your workload into manageable sessions and always know what to work on next.",
    },
    {
        icon: Sparkles,
        title: "Study your way",
        short: "Find what actually works for you.",
        description:
            "Explore techniques like active recall, Pomodoro, flashcards and spaced repetition.",
    },
];

export function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#f5f7f8]
                py-20
                sm:py-24
                lg:py-32
            "
        >
            {/* Decorative background */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#778da9]/15
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#9db7d4]/20
                    blur-[140px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-14 max-w-3xl lg:mb-20">
                    <p
                        className="
                            mb-4
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-[#415a77]
                        "
                    >
                        Built around real student life
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            tracking-tight
                            text-[#0d1b2a]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Less managing.
                        <br />
                        More actually studying.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-[#415a77]
                        "
                    >
                        Your schedule, deadlines, focus sessions and study methods
                        shouldn't feel like separate tools.
                    </p>
                </div>

                <div
                    className="
                        grid
                        items-start
                        gap-12
                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:gap-20
                    "
                >

                    {/* LEFT SIDE */}
                    <div className="space-y-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const active = activeFeature === index;

                            return (
                                <button
                                    key={feature.title}
                                    onMouseEnter={() => setActiveFeature(index)}
                                    onClick={() => setActiveFeature(index)}
                                    className={`
                                        group
                                        w-full
                                        rounded-[24px]
                                        border
                                        p-5
                                        text-left
                                        transition-all
                                        duration-300
                                        sm:p-6

                                        ${
                                            active
                                                ? `
                                                    border-[#415a77]/20
                                                    bg-white
                                                    shadow-[0_20px_60px_rgba(13,27,42,0.10)]
                                                    translate-x-1
                                                `
                                                : `
                                                    border-transparent
                                                    bg-transparent
                                                    hover:bg-white/60
                                                `
                                        }
                                    `}
                                >
                                    <div className="flex items-start gap-4">

                                        <div
                                            className={`
                                                flex
                                                h-12
                                                w-12
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                transition-all
                                                duration-300

                                                ${
                                                    active
                                                        ? "bg-[#0d1b2a] text-[#e0e1dd]"
                                                        : "bg-[#415a77]/10 text-[#415a77]"
                                                }
                                            `}
                                        >
                                            <Icon size={22} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3
                                                    className="
                                                        text-xl
                                                        font-semibold
                                                        text-[#0d1b2a]
                                                        sm:text-2xl
                                                    "
                                                >
                                                    {feature.title}
                                                </h3>

                                                <ArrowUpRight
                                                    size={20}
                                                    className={`
                                                        shrink-0
                                                        transition-all
                                                        duration-300

                                                        ${
                                                            active
                                                                ? "translate-x-0 opacity-100"
                                                                : "-translate-x-2 opacity-0"
                                                        }
                                                    `}
                                                />
                                            </div>

                                            <p className="mt-1 text-sm text-[#415a77] sm:text-base">
                                                {feature.short}
                                            </p>

                                            <div
                                                className={`
                                                    grid
                                                    transition-all
                                                    duration-300

                                                    ${
                                                        active
                                                            ? "grid-rows-[1fr] opacity-100"
                                                            : "grid-rows-[0fr] opacity-0"
                                                    }
                                                `}
                                            >
                                                <div className="overflow-hidden">
                                                    <p
                                                        className="
                                                            pt-4
                                                            text-sm
                                                            leading-6
                                                            text-[#415a77]/80
                                                        "
                                                    >
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:sticky lg:top-28">
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[36px]
                                border
                                border-white/60
                                bg-[#0d1b2a]
                                p-5
                                shadow-[0_30px_80px_rgba(13,27,42,0.20)]
                                sm:p-8
                            "
                        >

                            {/* subtle glow */}
                            <div
                                className="
                                    absolute
                                    -right-20
                                    -top-20
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-[#778da9]/35
                                    blur-[90px]
                                "
                            />

                            <div className="relative">

                                {/* top bar */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p
                                            className="
                                                text-xs
                                                font-medium
                                                uppercase
                                                tracking-[0.2em]
                                                text-[#778da9]
                                            "
                                        >
                                            Study Planner
                                        </p>

                                        <p className="mt-1 text-lg font-semibold text-[#e0e1dd]">
                                            Monday overview
                                        </p>
                                    </div>

                                    <div className="flex gap-1.5">
                                        <div className="h-2 w-2 rounded-full bg-[#e0e1dd]/20" />
                                        <div className="h-2 w-2 rounded-full bg-[#e0e1dd]/40" />
                                        <div className="h-2 w-2 rounded-full bg-[#e0e1dd]/70" />
                                    </div>
                                </div>

                                {/* main dashboard */}
                                <div
                                    className="
                                        mt-8
                                        rounded-[28px]
                                        bg-[#e0e1dd]
                                        p-5
                                        sm:p-7
                                    "
                                >
                                    <Preview activeFeature={activeFeature} />
                                </div>

                                {/* bottom stats */}
                                <div
                                    className="
                                        mt-5
                                        grid
                                        grid-cols-3
                                        gap-3
                                    "
                                >
                                    <SmallStat
                                        value="4"
                                        label="Tasks today"
                                    />

                                    <SmallStat
                                        value="2h"
                                        label="Focus time"
                                    />

                                    <SmallStat
                                        value="87%"
                                        label="Progress"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Preview({ activeFeature }) {
    if (activeFeature === 0) {
        return (
            <div className="animate-[fadeIn_0.35s_ease-out]">
                <p className="text-sm font-medium text-[#415a77]">
                    Your week
                </p>

                <h4 className="mt-1 text-2xl font-semibold text-[#0d1b2a]">
                    Everything in one place.
                </h4>

                <div className="mt-6 grid grid-cols-5 gap-2">
                    {["MON", "TUE", "WED", "THU", "FRI"].map((day, index) => (
                        <div
                            key={day}
                            className={`
                                rounded-2xl
                                p-3
                                text-center

                                ${
                                    index === 2
                                        ? "bg-[#415a77] text-white"
                                        : "bg-white/70 text-[#415a77]"
                                }
                            `}
                        >
                            <p className="text-[10px] font-semibold">
                                {day}
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                                {12 + index}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-5 space-y-3">
                    <ScheduleItem
                        title="Systems III"
                        time="09:00"
                    />

                    <ScheduleItem
                        title="Algorithms study"
                        time="14:30"
                    />
                </div>
            </div>
        );
    }

    if (activeFeature === 1) {
        return (
            <div>
                <p className="text-sm font-medium text-[#415a77]">
                    Upcoming
                </p>

                <h4 className="mt-1 text-2xl font-semibold text-[#0d1b2a]">
                    Nothing sneaks up on you.
                </h4>

                <div className="mt-6 space-y-3">
                    <Deadline
                        title="React assignment"
                        days="Tomorrow"
                        progress="75%"
                    />

                    <Deadline
                        title="Algorithms exercises"
                        days="3 days"
                        progress="45%"
                    />

                    <Deadline
                        title="Systems III project"
                        days="6 days"
                        progress="20%"
                    />
                </div>
            </div>
        );
    }

    if (activeFeature === 2) {
        return (
            <div className="text-center">
                <p className="text-sm font-medium text-[#415a77]">
                    Focus mode
                </p>

                <h4 className="mt-1 text-2xl font-semibold text-[#0d1b2a]">
                    One task. No noise.
                </h4>

                <div
                    className="
                        mx-auto
                        mt-8
                        flex
                        h-48
                        w-48
                        items-center
                        justify-center
                        rounded-full
                        border-[10px]
                        border-[#415a77]/10
                        bg-white/60
                    "
                >
                    <div>
                        <Target
                            size={24}
                            className="mx-auto text-[#415a77]"
                        />

                        <p className="mt-3 text-4xl font-semibold text-[#0d1b2a]">
                            24:37
                        </p>

                        <p className="mt-1 text-xs text-[#415a77]">
                            focus remaining
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p className="text-sm font-medium text-[#415a77]">
                Study smarter
            </p>

            <h4 className="mt-1 text-2xl font-semibold text-[#0d1b2a]">
                Find your method.
            </h4>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Method
                    title="Active Recall"
                    tag="Recommended"
                />

                <Method
                    title="Pomodoro"
                    tag="Focus"
                />

                <Method
                    title="Flashcards"
                    tag="Memory"
                />

                <Method
                    title="Spaced Repetition"
                    tag="Long-term"
                />
            </div>
        </div>
    );
}

function ScheduleItem({ title, time }) {
    return (
        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-white/70
                px-4
                py-3
            "
        >
            <div className="flex items-center gap-3">
                <div
                    className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#415a77]/10
                        text-[#415a77]
                    "
                >
                    <CalendarDays size={17} />
                </div>

                <p className="font-medium text-[#0d1b2a]">
                    {title}
                </p>
            </div>

            <p className="text-sm text-[#415a77]">
                {time}
            </p>
        </div>
    );
}

function Deadline({ title, days, progress }) {
    return (
        <div className="rounded-2xl bg-white/70 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <CheckCircle2
                        size={19}
                        className="text-[#415a77]"
                    />

                    <p className="font-medium text-[#0d1b2a]">
                        {title}
                    </p>
                </div>

                <span className="text-xs font-medium text-[#415a77]">
                    {days}
                </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#415a77]/10">
                <div
                    className="h-full rounded-full bg-[#415a77]"
                    style={{ width: progress }}
                />
            </div>
        </div>
    );
}

function Method({ title, tag }) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-[#415a77]/10
                bg-white/70
                p-4
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
            "
        >
            <Brain
                size={20}
                className="text-[#415a77]"
            />

            <p className="mt-4 font-semibold text-[#0d1b2a]">
                {title}
            </p>

            <p className="mt-1 text-xs text-[#415a77]">
                {tag}
            </p>
        </div>
    );
}

function SmallStat({ value, label }) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-md
            "
        >
            <p className="text-xl font-semibold text-[#e0e1dd]">
                {value}
            </p>

            <p className="mt-1 text-xs text-[#e0e1dd]/45">
                {label}
            </p>
        </div>
    );
}