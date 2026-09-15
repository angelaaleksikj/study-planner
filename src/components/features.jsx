import { FeatureCard } from "./reusableComponents/featureCard";
import { ListTodo } from "lucide-react";
import { ClockAlert } from "lucide-react";
import { Brain } from "lucide-react";
import { Sparkles } from "lucide-react";

export function Features() {
    return (
        <section className="bg-[#e0e1dd]/35 py-24">
            <div className="mx-auto max-w-6xl px-6">

                <div className="mb-16 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#778da9]">
                        Built for students
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-[#778da9]">
                        Less chaos. More focus.
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-[#415a77]">
                        Everything you need to keep your studies under control
                        without making planning another task.
                    </p>
                </div>

                <div className="flex gap-6">
                    <FeatureCard 
                    icon={ListTodo} 
                    title="Plan your week" 
                    description="Keep classes, deadlines and study sessions organized in one place." className=""/>

                    <FeatureCard 
                    icon={ClockAlert}
                    title="Stay ahead of deadlines"
                    description="See upcoming assignments and important dates before they become last-minute-stress."/>

                    <FeatureCard 
                    icon={Brain}
                    title="Make study time count"
                    description="Break your workload into focused study sessions and always know what to work on next."/>

                    <FeatureCard
                    icon={Sparkles}
                    title="Find your study method"
                    description="Explore study methods used by students worldwide, from timers and flashcards to quizzes and more." />
                    </div>
            </div>
        </section>
    );
}