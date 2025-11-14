import { Shield, Terminal, Bug, Network, Lock, KeyRound } from 'lucide-react'

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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map(({ icon: Icon, name, level }) => (
        <div key={name} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all bg-white">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 grid place-items-center text-cyan-600 group-hover:from-cyan-400/30 group-hover:to-blue-600/30">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-600">{level}</p>
        </div>
      ))}
    </div>
  )
}
