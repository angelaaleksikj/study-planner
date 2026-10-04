import { useEffect, useRef, useState } from "react";
import {
    CalendarDays,
    CheckCircle2,
    Brain,
    Sparkles,
    Clock3,
    Target,
} from "lucide-react";

const steps = [
    {
        number: "01",
        eyebrow: "PLAN",
        title: "Everything important. One calm place.",
        description:
            "Classes, deadlines and study sessions come together in one clear view, so you always know what's ahead without digging through five different apps.",
    },
    {
        number: "02",
        eyebrow: "FOCUS",
        title: "Know exactly what deserves your attention.",
        description:
            "Study Planner helps turn a busy week into something manageable. See what matters today, choose what to focus on and get started.",
    },
    {
        number: "03",
        eyebrow: "IMPROVE",
        title: "Don't just study more. Study better.",
        description:
            "Use proven study methods, track your progress and discover what actually works for you instead of repeating the same routine.",
    },
];

export function StudyExperience() {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveStep(index);
                    }
                });
            },
            {
                threshold: 0.55,
            }
        );

        stepRefs.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#0d1b2a]
                text-[#e0e1dd]
            "
        >
            {/* Background glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#778da9]/20
                    blur-[120px]
                "
            />

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Section introduction */}
                <div className="max-w-3xl pt-20 sm:pt-24 lg:pt-32">
                    <p
                        className="
                            mb-4
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.25em]
                            text-[#778da9]
                        "
                    >
                        Your study space
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-semibold
                            tracking-tight
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        More than another planner.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-[#e0e1dd]/70
                            sm:text-xl
                        "
                    >
                        Study Planner is built around how students actually work:
                        plan what matters, focus on it and learn what helps you
                        improve.
                    </p>
                </div>

                <div
                    className="
                        mt-16
                        grid
                        gap-14
                        pb-24

                        lg:grid-cols-[1fr_0.85fr]
                        lg:gap-20
                        lg:pb-32
                    "
                >
                    {/* LEFT SIDE */}
                    <div>
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                ref={(element) => {
                                    stepRefs.current[index] = element;
                                }}
                                data-index={index}
                                className="
                                    flex
                                    min-h-[60vh]
                                    items-center
                                    py-12

                                    lg:min-h-[75vh]
                                "
                            >
                                <div
                                    className={`
                                        max-w-xl
                                        transition-all
                                        duration-500

                                        ${
                                            activeStep === index
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-35 translate-y-4"
                                        }
                                    `}
                                >
                                    <div className="mb-5 flex items-center gap-4">
                                        <span
                                            className="
                                                font-semibold
                                                tracking-[0.2em]
                                                text-[#778da9]
                                            "
                                        >
                                            {step.number}
                                        </span>

                                        <div className="h-px w-10 bg-[#778da9]/50" />

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                tracking-[0.2em]
                                                text-[#778da9]
                                            "
                                        >
                                            {step.eyebrow}
                                        </span>
                                    </div>

                                    <h3
                                        className="
                                            text-3xl
                                            font-semibold
                                            leading-tight
                                            tracking-tight

                                            sm:text-4xl
                                            lg:text-5xl
                                        "
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-5
                                            text-base
                                            leading-8
                                            text-[#e0e1dd]/65

                                            sm:text-lg
                                        "
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE - PHONE */}
                    <div
                        className="
                            relative
                            flex
                            items-start
                            justify-center

                            lg:sticky
                            lg:top-24
                            lg:h-screen
                            lg:items-center
                        "
                    >
                        <PhoneMockup activeStep={activeStep} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhoneMockup({ activeStep }) {
    return (
        <div className="relative">
            {/* Floating badge */}
            <div
                className="
                    absolute
                    -left-10
                    top-20
                    z-20
                    hidden

                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    px-4
                    py-3

                    backdrop-blur-xl
                    shadow-xl

                    xl:block
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
                            bg-[#778da9]/20
                        "
                    >
                        <Sparkles size={18} />
                    </div>

                    <div>
                        <p className="text-xs text-[#e0e1dd]/50">
                            Study streak
                        </p>

                        <p className="text-sm font-semibold">
                            6 days focused
                        </p>
                    </div>
                </div>
            </div>

            {/* Phone outer body */}
            <div
                className="
                    relative
                    w-[280px]
                    rounded-[48px]
                    border-[7px]
                    border-[#1b263b]
                    bg-[#1b263b]
                    p-[5px]

                    shadow-[0_40px_100px_rgba(0,0,0,0.55)]

                    sm:w-[320px]
                    lg:w-[340px]

                    transition-transform
                    duration-700

                    hover:-translate-y-2
                    hover:rotate-1
                "
            >
                {/* Phone screen */}
                <div
                    className="
                        relative
                        aspect-[9/19]
                        overflow-hidden
                        rounded-[38px]
                        bg-[#e0e1dd]
                    "
                >
                    {/* Dynamic Island */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-3
                            z-30
                            h-6
                            w-24
                            -translate-x-1/2
                            rounded-full
                            bg-[#0d1b2a]
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            transition-all
                            duration-500
                        "
                    >
                        {activeStep === 0 && <PlannerScreen />}

                        {activeStep === 1 && <FocusScreen />}

                        {activeStep === 2 && <ProgressScreen />}
                    </div>
                </div>
            </div>

            {/* glow */}
            <div
                className="
                    absolute
                    -bottom-12
                    left-1/2
                    -z-10
                    h-20
                    w-[70%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#778da9]/30
                    blur-3xl
                "
            />
        </div>
    );
}

function PlannerScreen() {
    return (
        <div className="h-full bg-[#e0e1dd] px-5 pb-6 pt-14 text-[#0d1b2a]">
            <p className="text-xs font-medium text-[#415a77]">
                Monday, October 5
            </p>

            <h4 className="mt-1 text-2xl font-semibold">
                Good morning.
            </h4>

            <div className="mt-6 rounded-3xl bg-[#0d1b2a] p-5 text-[#e0e1dd]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-[#e0e1dd]/60">
                            Today's focus
                        </p>

                        <p className="mt-1 font-semibold">
                            Algorithms
                        </p>
                    </div>

                    <Target size={22} />
                </div>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[65%] rounded-full bg-[#778da9]" />
                </div>
            </div>

            <p className="mt-6 text-sm font-semibold">
                Your day
            </p>

            <div className="mt-3 space-y-3">
                <Task
                    time="09:00"
                    title="Systems III"
                    icon={<CalendarDays size={17} />}
                />

                <Task
                    time="13:30"
                    title="Finish React section"
                    icon={<CheckCircle2 size={17} />}
                />

                <Task
                    time="17:00"
                    title="Algorithms study"
                    icon={<Brain size={17} />}
                />
            </div>
        </div>
    );
}

function FocusScreen() {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                items-center
                bg-[#0d1b2a]
                px-6
                pb-8
                pt-20
                text-center
                text-[#e0e1dd]
            "
        >
            <p className="text-xs uppercase tracking-[0.2em] text-[#778da9]">
                Focus session
            </p>

            <h4 className="mt-4 text-xl font-semibold">
                Algorithms
            </h4>

            <div
                className="
                    mt-12
                    flex
                    h-44
                    w-44
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#778da9]/40
                    bg-[#1b263b]
                    shadow-[0_0_60px_rgba(119,141,169,0.18)]
                "
            >
                <div>
                    <Clock3
                        size={24}
                        className="mx-auto mb-3 text-[#778da9]"
                    />

                    <p className="text-4xl font-semibold">
                        24:37
                    </p>

                    <p className="mt-1 text-xs text-[#e0e1dd]/45">
                        remaining
                    </p>
                </div>
            </div>

            <div
                className="
                    mt-auto
                    w-full
                    rounded-3xl
                    bg-white/5
                    p-5
                    text-left
                "
            >
                <p className="text-xs text-[#e0e1dd]/45">
                    Current task
                </p>

                <p className="mt-1 text-sm font-medium">
                    Dynamic programming exercises
                </p>
            </div>
        </div>
    );
}

function ProgressScreen() {
    return (
        <div className="h-full bg-[#e0e1dd] px-5 pb-8 pt-14 text-[#0d1b2a]">
            <p className="text-xs font-medium text-[#415a77]">
                Your progress
            </p>

            <h4 className="mt-1 text-2xl font-semibold">
                You're improving.
            </h4>

            <div
                className="
                    mt-7
                    rounded-3xl
                    bg-[#415a77]
                    p-5
                    text-[#e0e1dd]
                "
            >
                <p className="text-xs text-[#e0e1dd]/60">
                    Focus time this week
                </p>

                <p className="mt-2 text-3xl font-semibold">
                    8h 42m
                </p>

                <div className="mt-6 flex h-24 items-end gap-2">
                    {[30, 55, 43, 80, 65, 92, 70].map((height, index) => (
                        <div
                            key={index}
                            className="
                                flex-1
                                rounded-t-md
                                bg-[#e0e1dd]/70
                            "
                            style={{
                                height: `${height}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div
                className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-3
                "
            >
                <Stat
                    value="12"
                    label="Sessions"
                />

                <Stat
                    value="87%"
                    label="Completed"
                />
            </div>

            <div
                className="
                    mt-5
                    rounded-3xl
                    border
                    border-[#415a77]/15
                    bg-white/60
                    p-4
                "
            >
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#274c77]/10
                        "
                    >
                        <Sparkles
                            size={18}
                            className="text-[#274c77]"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-[#415a77]">
                            Best method
                        </p>

                        <p className="text-sm font-semibold">
                            Active Recall
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Task({ time, title, icon }) {
    return (
        <div
            className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-white/70
                p-3
            "
        >
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
                {icon}
            </div>

            <div>
                <p className="text-[10px] text-[#415a77]">
                    {time}
                </p>

                <p className="text-sm font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div
            className="
                rounded-2xl
                bg-white/60
                p-4
            "
        >
            <p className="text-xl font-semibold">
                {value}
            </p>

            <p className="mt-1 text-xs text-[#415a77]">
                {label}
            </p>
        </div>
    );
}