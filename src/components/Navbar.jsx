import { useState } from 'react'
import { Menu, X, Shield, Link as LinkIcon, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white grid place-items-center shadow-sm">
            <Shield className="h-5 w-5" />
          </div>
          <div className="">
            <p className="text-sm text-slate-600">Portfolio</p>
            <h1 className="leading-none font-semibold -mt-1">Sarthak Geet</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="h-6 w-px bg-slate-300" />
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Linkedin className="h-5 w-5" /></a>
            <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Mail className="h-5 w-5" /></a>
          </div>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <LinkIcon className="h-4 w-4 text-slate-400" />
              <span className="text-xs text-slate-500">Connect</span>
            </div>
            <div className="flex items-center gap-3 pt-1 pb-3">
              <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-slate-100 text-slate-700"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
