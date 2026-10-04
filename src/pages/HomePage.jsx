import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar"
import { Features } from "../components/features";
import { StudyExperience } from "../components/studyExperience";
import { StudyMission } from "../components/studyMission";
import { FinalCta } from "../components/finalCta";
import { Footer } from "../components/footer";

export function HomePage() {
    return(
        <main className="relative overflow-x-hidden">
           <NavBar /> 
           <Hero />
           <Features />
           <StudyExperience /> 
           <StudyMission />
           <FinalCta />
           <Footer />
        </main>
    );
}