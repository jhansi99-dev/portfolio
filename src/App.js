import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/AboutNew';
import ProjectsSection from './components/Projects/ProjectsSection';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;






