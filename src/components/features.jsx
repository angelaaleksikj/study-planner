import { FeatureCard } from "./reusableComponents/featureCard";
import {
    ListTodo,
    ClockAlert,
    Brain,
    Sparkles
} from "lucide-react";

export function Features() {
    return (
        <section
            className="
                bg-[#e0e1dd]/35
                py-14
                sm:py-18
                lg:py-24
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-6xl
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        mb-10
                        sm:mb-12
                        lg:mb-16
                        max-w-2xl
                    "
                >
                    <p
                        className="
                            mb-3
                            text-xs
                            sm:text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[#0d1b2a]
                        "
                    >
                        Built for students
                    </p>

                    <h2
                        className="
                            text-3xl
                            sm:text-4xl
                            font-semibold
                            tracking-tight
                            text-[#0d1b2a]
                        "
                    >
                        Less chaos. More focus.
                    </h2>

                    <p
                        className="
                            mt-4
                            text-base
                            sm:text-lg
                            leading-7
                            sm:leading-8
                            text-[#0d1b2a]
                        "
                    >
                        Everything you need to keep your studies under control
                        without making planning another task.
                    </p>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        xl:grid-cols-4
                        gap-5
                        lg:gap-6
                        items-stretch
                    "
                >
                    <FeatureCard
                        icon={ListTodo}
                        title="Plan your week"
                        description="Keep classes, deadlines and study sessions organized in one place."
                    />

                    <FeatureCard
                        icon={ClockAlert}
                        title="Stay ahead of deadlines"
                        description="See upcoming assignments and important dates before they become last-minute stress."
                    />

                    <FeatureCard
                        icon={Brain}
                        title="Make study time count"
                        description="Break your workload into focused study sessions and always know what to work on next."
                    />

                    <FeatureCard
                        icon={Sparkles}
                        title="Find your study method"
                        description="Explore study methods used by students worldwide, from timers and flashcards to quizzes and more."
                    />
                </div>
            </div>
        </section>
    );
}