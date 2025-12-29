import CurrentWorks from "../components/CurrentWorks";
import Footer from "../components/Footer";
import About from '../pages/About'
import Projects from "../pages/Projects";


function HomePage() {
    return (
        <>
            <div className="container-fluid">
                {/* HERO */}
                <section className="hero">
                    <div className="container">
                        <h1 className="display-1">
                            <b>
                                Welcome to My

                                <span style={{ color: "var(--accent)" }}>
                                    {" "} Professional Portfolio
                                </span>
                            </b>
                        </h1>

                        <p>
                            AWS Cloud Engineer | Junior Full Stack Developer |
                            Aspiring Cloud, AI & Security Engineer |
                            Nonprofit Founder & Director
                        </p>
                    </div>
                </section>
                <br />
                {/* PROJECTS */}
                <section className="">
                    <div className="container-fluid">
                        <CurrentWorks />
                    </div>
                </section>
                <br />
                <About />
                <br />
                <div className="">
                    <Projects />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
