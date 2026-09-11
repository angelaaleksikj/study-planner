import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar"

export function HomePage() {
    return(
        <main className="relative">
           <NavBar /> 
           <Hero />
        </main>
    );
}