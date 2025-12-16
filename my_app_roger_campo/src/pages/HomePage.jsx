import Header from "../componets/Header"

function HomePage() {
    return (
        <div className="homepage">
            <Header />

            <section className="hero">
                <h1 className="hero-title">
                    Welcome to My Website Portfolio
                </h1>

                <p className="hero-subtitle">
                    AWS Cloud Engineer | Junior Full Stack Developer | Aspiring Cloud AI Security Engineer | Nonprofit Founder & Director
                </p>

            </section>
            <div class="container hero">
                <footer class="py-3 my-4">
                    <p>If you want to know more about me check out <a href="/about">About me</a> page, or if you want to know about my work go to <a href="/Projects">Projects</a>  </p>
                    <p class="text-center text-body-secondary">© 2025 Roger Campo Porfilio Website</p>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;
