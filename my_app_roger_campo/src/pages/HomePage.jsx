import CurrentWorks from "../components/CurrentWorks";
import Footer from "../components/Footer";
import About from '../pages/About'


function HomePage() {
    return (
        <>
            <div className="container-fluid">
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
                <h2 className="display-1 text-dark mt-0"><b>Work in progress</b></h2>
                <section className="">

                    <div className="">
                        <CurrentWorks />
                    </div>






                </section>
                <br />
                <About />




                <Footer />
            </div>
        </>
    );
}

export default HomePage;
