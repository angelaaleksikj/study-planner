import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar"
import { Features } from "../components/features";
import { AppShowCase } from "../components/appShowCase";

export function HomePage() {
    return(
        <main className="relative">
           <NavBar /> 
           <Hero />
           <Features />
           <AppShowCase />
        </main>
    );
}