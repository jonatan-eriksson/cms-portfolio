import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gray-900 text-gray-300 space-y-8 text-center">
        <Navbar />
      </div>
    </Router >
  );
}

export default App;
