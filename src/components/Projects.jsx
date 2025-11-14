import { ExternalLink, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Threat Map Visualizer',
    desc: 'Real-time attack surface mapping with anomaly detection overlays.',
    tag: 'Detection Engineering',
    link: '#'
  },
  {
    title: 'Red Team Toolkit',
    desc: 'Modular operators toolkit with opsec-safe payload workflows.',
    tag: 'Offensive Security',
    link: '#'
  },
  {
    title: 'SecOps Dashboard',
    desc: 'Cloud-native SOC panel with alert triage prioritization.',
    tag: 'Blue Team',
    link: '#'
  }
]

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((p) => (
        <motion.a
          key={p.title}
          href={p.link}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileHover={{ y: -4 }}
          className="group relative rounded-2xl border border-slate-200 overflow-hidden bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="p-6 relative">
            <div className="flex items-center gap-2 text-xs text-cyan-700">
              <Shield className="h-4 w-4" />
              {p.tag}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-cyan-700 group-hover:text-cyan-800">
              View <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}
