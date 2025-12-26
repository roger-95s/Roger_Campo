import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CurrentWorks from "./pages/CurrentWorks";



function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>

      {/* NavBar sits outside Routes so it is always visible */}
      <NavBar />

      {/* Add a wrapper to push content down because Navbar is 'fixed' */}
      <div style={{ marginTop: '120px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/CurrentWorks" element={<CurrentWorks />} />

          <Route
            path="*"
            element={<h2 className="text-center mt-10" style={{ color: 'white' }}>404 - Not Found</h2>}
          />
        </Routes>
      </div>

    </Router>
  );
}

export default App;