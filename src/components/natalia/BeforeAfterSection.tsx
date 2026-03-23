import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import avatarImg from '../../assets/perfil-instagram.jpg'

import post1 from '../../assets/post-1.webp'
import post2 from '../../assets/post-2.webp'
import post3 from '../../assets/post-3.webp'
import post4 from '../../assets/post-4.webp'
import post5 from '../../assets/post-5.webp'
import post6 from '../../assets/post-6.webp'

const postData = [
  { image: post1, text: `Ver o antes e depois é incrível.\n\nMas acompanhar o durante… é ainda mais.\n\nCada caso aqui no consultório é planejado com carinho, tecnologia e estratégia. E quando o paciente confia no processo, o resultado aparece não só no sorriso, mas no olhar de quem volta a se reconhecer no espelho. \n\nEstá esperando o quê pra começar o seu? 💙` },
  { image: post2, text: `Acreditem ou não, mas esse caso foi tratado em apenas 6 meses! 😍😱\n\nGostaria de ressaltar que a disciplina da paciente foi essencial para esse resultado. \n\nSua principal queixa era o desnível entre os dois incisivos centrais superiores e o apinhamento inferior e tudo isso foi tratado com apenas 18 alinhadores. \n\nFicou incrível não é mesmo? Cada dia que passa fico mais surpresa com todas as possibilidades do Invisalign 😍\n#invisalign #invisalignbrasil` },
  { image: post3, text: `Mais um Caso lindo de Invisalign sendo concluído.\n\nComo amo esses resultados. 😍🥰\nComenta aqui o que achou.\n\n#invisalign #tratamentosortodonticos #tramentosdentários #dentistaortodontista #tratamentocominvisalign #renovarsorissos #itero #antesedepois #casoortodontico` },
  { image: post4, text: `Resultados que inspiram. \nEssa paciente nos procurou alguns meses antes do seu casamento para uma missão: melhorar o seu sorriso e deixá-lo à altura desse grande momento! \n\nEntão, não poderíamos pensar em uma solução melhor, não é?! Propomos o tratamento com Invisalign, e, com um bom planejamento e com a disciplina da paciente, conseguimos atingir nossos objetivos. \n\nMaravilhoso, não é mesmo?! ❤️❤️❤️\n#tratamentocominvisalign #invisalign` },
  { image: post5, text: `Mais um sorriso transformado com Invisalign. 🤍\n\nEssa paciente chegou com pequenas irregularidades nos dentes anteriores e buscava harmonia no sorriso, mas sem abrir mão de conforto e discrição.\n\nCom um planejamento preciso e o uso da tecnologia Invisalign, conseguimos alinhar o sorriso de forma leve, previsível e sem os incômodos do aparelho fixo.\n\nAgende sua avaliação e descubra como o Invisalign pode transformar o seu sorriso também.` },
  { image: post6, text: `Mais um sorriso transformado com Invisalign por aqui!\n\nE o que muda não são só os dentes: é a forma como o paciente se enxerga, a confiança no olhar, o orgulho de sorrir sem pensar duas vezes. 💙` },
]

// Duplicate for looping
const extendedPosts = [...postData, ...postData, ...postData]

export function BeforeAfterSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  // Auto-scroll logic that can be paused
  useEffect(() => {
    let animationFrame: number
    const animate = () => {
      if (!isPaused) {
        const currentX = x.get()
        if (currentX <= -1800) { // reset point
          x.set(0)
        } else {
          x.set(currentX - 0.5) // Speed: 1px per frame approx
        }
      }
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, x])

  const handleNext = () => {
    x.set(x.get() - 350)
  }

  const handlePrev = () => {
    x.set(x.get() + 350)
  }

  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-2 block">Transformações Reais</span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground max-w-lg">
            Sorrisos que redefinem a autoconfiança de nossos pacientes
          </h2>
        </motion.div>

        {/* Manual Controls */}
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          ref={carousel}
          style={{ x }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-4"
        >
          {extendedPosts.map((post, index) => (
            <div 
              key={index}
              className="w-[280px] sm:w-[320px] bg-white rounded-xl shadow-lg border border-border flex-shrink-0 select-none"
            >
              {/* Instagram Style Header */}
              <div className="flex items-center justify-between p-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                      <img src={avatarImg} alt="Dra. Natalia" className="w-full h-full object-cover pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-body text-xs font-bold text-foreground leading-none">dranataliabrainer</span>
                      <CheckCircle2 className="w-3 h-3 text-[#0095f6] fill-[#0095f6] text-white" />
                    </div>
                    <p className="text-[10px] text-muted-foreground font-body leading-none italic">Dra Natalia Brainer</p>
                  </div>
                </div>
              </div>

              {/* Patient Post Image */}
              <div className="aspect-square relative overflow-hidden bg-beige/5">
                <img 
                  src={post.image} 
                  alt="Transformação Invisalign" 
                  className="w-full h-full object-cover pointer-events-none" 
                  loading="lazy"
                  width={320}
                  height={320}
                />
              </div>

              {/* Instagram Interaction Bar */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3 text-foreground">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
                    <MessageCircle className="w-5 h-5 cursor-pointer" />
                    <Send className="w-5 h-5 cursor-pointer" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer" />
                </div>

                {/* Caption */}
                <div className="font-body text-xs leading-snug text-foreground/90">
                  <p className="line-clamp-4 overflow-hidden h-12">
                    <span className="font-bold mr-2 text-foreground">dranataliabrainer</span>
                    {post.text}
                  </p>
                  <span className="text-muted-foreground text-[10px] mt-1 cursor-pointer hover:underline block font-bold">ver mais</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="flex justify-center mt-6">
        <p className="text-gold/60 font-body text-[10px] uppercase tracking-widest flex items-center gap-2">
          <span className="w-4 h-[1px] bg-gold/30"></span>
          Passe o mouse para ler • Arraste para navegar
          <span className="w-4 h-[1px] bg-gold/30"></span>
        </p>
      </div>
    </section>
  )
}
