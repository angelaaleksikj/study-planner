import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar"
import { Features } from "../components/features";

export function HomePage() {
    return(
        <main className="relative">
           <NavBar /> 
           <Hero />
           <Features />
        </main>
    );
}