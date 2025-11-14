import { Shield, Terminal, Bug, Network, Lock, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  { icon: Shield, name: 'Security Architecture', level: 'Advanced' },
  { icon: Terminal, name: 'Offensive Security', level: 'Advanced' },
  { icon: Bug, name: 'Vulnerability Research', level: 'Advanced' },
  { icon: Network, name: 'Network Forensics', level: 'Advanced' },
  { icon: Lock, name: 'Threat Modeling', level: 'Advanced' },
  { icon: KeyRound, name: 'Cryptography Basics', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } }
      }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map(({ icon: Icon, name, level }) => (
        <motion.div
          key={name}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all bg-white relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 grid place-items-center text-cyan-600 group-hover:from-cyan-400/30 group-hover:to-blue-600/30">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-600">{level}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
