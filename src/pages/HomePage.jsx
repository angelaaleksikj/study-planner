import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar"
import { Features } from "../components/features";

export function HomePage() {
    return(
        <main className="relative overflow-x-hidden">
           <NavBar /> 
           <Hero />
           <Features />
        </main>
    );
}