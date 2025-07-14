import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Common Layout */}
      <div className="min-h-screen bg-gray-100">
        <Navbar /> {/* Navbar stays on top for all routes */}

        {/* Page Content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
// This is the main entry point of the React application.
// It sets up the router and defines the main layout with a Navbar and page content.