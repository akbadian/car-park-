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
      <Navbar /> {/* Navbar stays on top for all routes */}
      <div /*className="bg-cover bg-center bg-no-repeat bg-fixed" style={{height: 700, backgroundImage: `url(gclass.jpeg')` }}*/>
        

        {/* Page Content */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-black opacity-70 z-0" />
        <div className="relative z-10">
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
// This is the main entry point of the React application.
// It sets up the router and defines the main layout with a Navbar and page content.