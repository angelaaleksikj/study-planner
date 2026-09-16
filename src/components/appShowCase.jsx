import { useEffect, useState } from "react";

import plannerImg from "../assets/showcase/plannerImg.png"; 
import tasksImg from "../assets/showcase/tasksImg.png";
import progressImg from "../assets/showcase/progressImg.png";

const screenshots = [
    {
        src: plannerImg,
        alt: "Weekly planner",
    },
    {
        src: tasksImg,
        alt:"Task management",
    },
    {   
        src: progressImg,
        alt: "Study progress",
    },
];

export function AppShowCase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screenshots.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused]);


    function getPosition(index) {

        const relativePosition = (index - activeIndex + screenshots.length) % screenshots.length;

        if (relativePosition === 0) {
            return "center";
        }

        if (relativePosition === 1) {
            return "right";
        }

        return "left";
    }

    const positions = {

        center: {
            transform:
                "translate(-50%, -50%) scale(1) rotate(0deg)",
            opacity: 1,
        },

        left: {
            transform:
                "translate(-118%, -46%) scale(0.82) rotate(0deg)",
            opacity: 0.85,
        },

        right: {
            transform: 
                "translate(18%, -46%) scale(0.82) rotate(6deg)",
            opacity: 0.85,
        },

    };


    return(
        <section className="relative overflow-x-clip py-28 px-6 bg-[#e0e1dd]/35 " >
            
            <div className="text-center max-w-2xl mx-auto" >
                <p className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    font-medium
                    text-[#415a77]
                ">
                    Your Study Space
                </p>

                <h2 className="
                    mt-4
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-[#0d1b2a]
                ">
                    See everything. Stress about less.
                </h2>

                <p className="
                    mt-5
                    text-lg
                    text-[#415a77]
                ">
                    Your classes, deadlines and study sessions,
                    finally organized in one place.
                </p>
            </div>


            <div className="
                relative
                mx-auto
                mt-35
                h-[520px]
                max-w-7xl
                md:h-[620px]
            ">
                {screenshots.map((screenshot, index) => {
                    
                    const position = getPosition(index);

                    return(
                        <div 
                        key={screenshot.alt}
                        
                        onMouseEnter={() => {
                            setIsPaused(true);
                            setHoveredIndex(index);
                        }}

                        onMouseLeave={() => {
                            setIsPaused(false);
                            setHoveredIndex(null);
                        }}

                        className="
                            absolute
                            left-1/2
                            top-1/2
                            w-[72vw]
                            sm:w-[58vw]
                            md:w-[46vw]
                            lg:w-[34rem]
                            transition-[transform,opacity]
                            duration-700
                            ease-in-out
                            will-change-transform
                        "

                        style={{
                            ...positions[position],

                            zIndex: 
                                hoveredIndex === index
                                    ? 50
                                    : position === "center"
                                    ? 30
                                    : 20,
                        }}
                        >
                            <img 
                                src={screenshot.src}
                                alt={screenshot.alt}

                                draggable="false"

                                className="
                                    w-full
                                    rounded-[30px]
                                    shadow-2xl

                                    cursor-zoom-in

                                    transition-transform
                                    duration-300
                                    ease-out

                                    hover:scale-[1.15]"
                            />
                        </div>
                    );
                })}
            </div>

        </section>
    );
}