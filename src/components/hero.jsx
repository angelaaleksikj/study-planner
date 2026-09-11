import heroImage from "../assets/hero.jpg";

export function Hero() {
    return(
        <>
            <section
                className="relative min-h-screen bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${heroImage})`,
                    minHeight : "100vh",
                }}
            >
            </section>
        </>
    );
}