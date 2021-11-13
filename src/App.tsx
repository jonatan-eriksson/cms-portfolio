import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gray-900 text-gray-300 space-y-8 text-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="projects" element={<h1>Projects</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
