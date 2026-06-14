import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Objectives from './components/Objectives'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'
import { useEffect } from 'react'

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Objectives />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
