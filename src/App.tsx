import Header from './components/layout/Header';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Education from './pages/Education';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import Package from './pages/Package';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Package />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;