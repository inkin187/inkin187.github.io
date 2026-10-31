import { ContactFooter } from './components/ContactFooter';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PersonalIntro } from './components/PersonalIntro';
import { Projects } from './components/Projects';
import { Strengths } from './components/Strengths';

export default function App() {
  return (
    <main className="bg-[#070707] text-[#f3f5f7]">
      <Header />
      <Hero />
      <PersonalIntro />
      <Projects />
      <Experience />
      <Strengths />
      <ContactFooter />
    </main>
  );
}
