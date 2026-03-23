import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'

export function SectionDivider() {
  return (
    <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent z-30">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black border border-gold/40 p-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          <Diamond className="w-4 h-4 text-gold" strokeWidth={1.5} />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[1px] bg-gold/20 blur-sm -z-10" />
    </div>
  )
}
