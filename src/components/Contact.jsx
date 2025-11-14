import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-2xl border border-slate-200 p-6 bg-white"
      >
        <h3 className="text-lg font-semibold text-slate-900">Reach out</h3>
        <p className="mt-2 text-sm text-slate-600">Open to collaborations, security reviews, and cool ideas.</p>

        <div className="mt-6 space-y-3">
          <a href="mailto:sarthak@example.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-focus">
            <Mail className="h-5 w-5 text-cyan-600" />
            sarthak@example.com
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-focus">
            <Github className="h-5 w-5 text-cyan-600" />
            github.com/sarthakgeet
          </a>
          <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-focus">
            <Linkedin className="h-5 w-5 text-cyan-600" />
            linkedin.com/in/sarthakgeet
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-cyan-50 to-blue-50"
      >
        <h3 className="text-lg font-semibold text-slate-900">Philosophy</h3>
        <p className="mt-2 text-sm text-slate-600">Security is a product feature. I merge aesthetics with rigorous engineering to craft delightful, resilient experiences.</p>
        <ul className="mt-4 text-sm text-slate-700 list-disc pl-5 space-y-1">
          <li>Defense in depth by design</li>
          <li>Privacy-first principles</li>
          <li>Automation over repetition</li>
        </ul>
      </motion.div>
    </div>
  )
}
