import Header from './components/layout/Header';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Education from './pages/Education';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import CursorKit from '@ri-dev/react-cursor-kit';
import Package from './pages/Package';

function App() {
  return (
    <>
      <CursorKit
        innerSize={9}
        innerColor="#22c55e"
        innerBorderWidth={0}
        outerSize={40}
        outerOpacity={0.5}
        outerBorderColor="#22c55e"
        trailingSpeed={8}
      />
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