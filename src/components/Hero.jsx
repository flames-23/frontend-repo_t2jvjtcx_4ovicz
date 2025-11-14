import Spline from '@splinetool/react-spline'
import { ArrowDown, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#0a0f1f]/20 to-[#0a0f1f] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            Cybersecurity • Threat Hunting • Red Teaming
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            Sarthak Geet
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Building resilient, secure systems with a love for clean code and minimal, futuristic design.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium px-5 py-2.5 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-white/70">
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-xs">Scroll</span>
        </div>
      </div>
    </section>
  )
}
