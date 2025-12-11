import Header from "../componets/Header"

function HomePage() {
    return (
        <div className="homepage">
            <Header />

            <section className="hero">
                <h1 className="hero-title">
                    Welcome to My Portfolio
                </h1>
                <p className="hero-subtitle">
                    AWS Cloud Engineer | Junior Full Stack Developer | Aspiring Cloud AI Security Engineer | Nonprofit Founder & Director
                </p>
            </section>
        </div>
    );
}

export default HomePage;
