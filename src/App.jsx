import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyCloudSprint from './components/WhyCloudSprint.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyCloudSprint />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
