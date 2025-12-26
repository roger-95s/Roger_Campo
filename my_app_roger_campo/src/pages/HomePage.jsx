import CurrentWorks from "./CurrentWorks";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="container">
                    <h1>
                        Welcome to My |
                        <span style={{ color: "var(--accent)" }}>
                            {" "} Professional Portfolio
                        </span>
                    </h1>

                    <p>
                        AWS Cloud Engineer | Junior Full Stack Developer |
                        Aspiring Cloud, AI & Security Engineer |
                        Nonprofit Founder & Director
                    </p>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="container">
                <CurrentWorks />
            </section>

            <Footer />
        </>
    );
}

export default HomePage;
