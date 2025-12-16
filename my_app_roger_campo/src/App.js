import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import About from "./pages/About"
// import Contact from "./pages/Contact";
import Projects from "./pages/Projects";


function App() {

  //  PUBLIC_URL works both on localhost and in production without worrying about 
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}

        <Route
          path="*"
          element={<h2 className="text-center mt-10">404 - Not Found</h2>}
        />
      </Routes>
    </Router>
  );
}

export default App;
