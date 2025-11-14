import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Cursor />
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About" subtitle="Minimal aesthetics × security engineering">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700">
              I’m Sarthak Geet — a cybersecurity enthusiast focused on red teaming, threat hunting, and building elegant, resilient systems. I love blending clean, minimal visual language with the rigor of secure-by-default engineering.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="A focused toolkit for modern security work">
          <Skills />
        </Section>

        <Section id="projects" title="Featured Projects" subtitle="Selected work in security and tooling">
          <Projects />
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s build something secure and beautiful">
          <Contact />
        </Section>

        <footer className="py-10 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Sarthak Geet</p>
            <p className="text-slate-400">Built with a minimalist, futuristic touch.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
