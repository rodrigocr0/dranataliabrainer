import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulse effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1], 
          opacity: [0.3, 0, 0.3] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-full h-full bg-[#25D366] rounded-full"
      />
      
      <motion.a
        href="https://wa.me/5585988991505?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
