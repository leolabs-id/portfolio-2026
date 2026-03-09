import Header from './components/Header';
import Footer from './components/Footer';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';


function App() {
  return (
    <div className="selection:bg-tosca/20">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;