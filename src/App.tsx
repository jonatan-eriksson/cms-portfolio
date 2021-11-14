import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-900 text-gray-300 flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 flex-1 flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
