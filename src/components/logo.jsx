import { BookOpen } from "lucide-react";

export function Logo() {
    return (
        <div className="flex items-center gap-2.5 text-[#1b263b]">
            <BookOpen size={30} strokeWidth={2} />
            <span className="text-[21px] font-bold tracking-[-0.04em]">
                Study Planner
            </span>
        </div>
    );
}