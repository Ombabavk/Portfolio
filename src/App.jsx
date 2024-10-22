import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router basename="/Portfolio">
      <Background>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
              <section id="home" className="snap-start h-screen bg-gradient-to-b from-black to-purple-900"><Home /></section>
              <section id="about" className="snap-start h-screen bg-gradient-to-b from-purple-900 to-blue-900"><About /></section>
              <section id="projects" className="snap-start h-screen bg-gradient-to-b from-blue-900 to-indigo-900"><Projects /></section>
              <section id="experience" className="snap-start h-screen bg-gradient-to-b from-indigo-900 to-violet-900"><Experience /></section>
              <section id="reviews" className="snap-start h-screen bg-gradient-to-b from-violet-900 to-black"><Reviews /></section>
            </main>
          } />
          {/* Add other routes as needed */}
        </Routes>
      </Background>
    </Router>
  );
};

export default App;