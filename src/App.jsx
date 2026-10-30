import { ContactFooter } from './components/ContactFooter';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Strengths } from './components/Strengths';

export default function App() {
  return (
    <main className="bg-[#090b0f] text-[#f3f5f7]">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Strengths />
      <ContactFooter />
    </main>
  );
}
