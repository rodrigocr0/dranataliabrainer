import { motion } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, CheckCircle2 } from 'lucide-react'
import avatarImg from '../../assets/perfil-instagram.jpg'

import post1 from '../../assets/post-1.webp'
import post2 from '../../assets/post-2.webp'
import post3 from '../../assets/post-3.webp'
import post4 from '../../assets/post-4.webp'
import post5 from '../../assets/post-5.webp'
import post6 from '../../assets/post-6.webp'

const postData = [
  {
    image: post1,
    text: `Ver o antes e depois é incrível.\n\nMas acompanhar o durante… é ainda mais.\n\nCada caso aqui no consultório é planejado com carinho, tecnologia e estratégia. E quando o paciente confia no processo, o resultado aparece não só no sorriso, mas no olhar de quem volta a se reconhecer no espelho.\n\nEsse é o poder do Invisalign: transformar, sem atrapalhar sua rotina.\n\nEstá esperando o quê pra começar o seu? 💙`,
  },
  {
    image: post2,
    text: `Acreditem ou não, mas esse caso foi tratado em apenas 6 meses! 😍😱\n\nGostaria de ressaltar que a disciplina da paciente foi essencial para esse resultado. \n\nSua principal queixa era o desnível entre os dois incisivos centrais superiores e o apinhamento inferior e tudo isso foi tratado com apenas 18 alinhadores. \n\nFicou incrível não é mesmo? Cada dia que passa fico mais surpresa com todas as possibilidades do Invisalign 😍\n\n#invisalign #invisalignbrasil #invisalignday`,
  },
  {
    image: post3,
    text: `Mais um Caso lindo de Invisalign sendo concluído.\n\nComo amo esses resultados. 😍🥰\nComenta aqui o que achou.\n\n#invisalign #tratamentosortodonticos #tramentosdentários #dentistaortodontista #tratamentocominvisalign #renovarsorissos #itero #antesedepois #casoortodontico`,
  },
  {
    image: post4,
    text: `Resultados que inspiram. \nEssa paciente nos procurou alguns meses antes do seu casamento para uma missão: melhorar o seu sorriso e deixá-lo à altura desse grande momento! \n\nEntão, não poderíamos pensar em uma solução melhor, não é?! Propomos o tratamento com Invisalign, e, com um bom planejamento e com a disciplina da paciente, conseguimos atingir nossos objetivos. \n\nHá hoje, ao final do tratamento, os dentes estão assim, perfeitamente alinhados e valorizando ainda mais a beleza dela! \n\nMaravilhoso, não é mesmo?! \n\nFiquei muito feliz por poder contribuir para esse momento tão importante na vida da @beafontenele , paciente querida. ❤️❤️❤️\n\n#tratamentocominvisalign #invisalign #casosinvisalign #casosortodonticos #tratamentoortodontico #ortodontiaestetica`,
  },
  {
    image: post5,
    text: `Mais um sorriso transformado com Invisalign. 🤍\n\nEssa paciente chegou com pequenas irregularidades nos dentes anteriores e buscava harmonia no sorriso, mas sem abrir mão de conforto e discrição.\n\nCom um planejamento preciso e o uso da tecnologia Invisalign, conseguimos alinhar o sorriso de forma leve, previsível e sem os incômodos do aparelho fixo.\n\nVer o antes e depois é incrível, mas acompanhar o quanto essa mudança impacta na autoconfiança da paciente é o que torna tudo ainda mais especial. \n\nAgende sua avaliação e descubra como o Invisalign pode transformar o seu sorriso também.`,
  },
  {
    image: post6,
    text: `Mais um sorriso transformado com Invisalign por aqui!\n\nE o que muda não são só os dentes: é a forma como o paciente se enxerga, a confiança no olhar, o orgulho de sorrir sem pensar duas vezes. 💙`,
  },
]

// Extended array for seamless looping
const extendedPosts = [...postData, ...postData, ...postData]

export function BeforeAfterSection() {
  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-3 block">Sorrisos transformados sem dor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Veja alguns sorrisos que já transformamos
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -2200] }} // Adjusted for 6 items loop
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {extendedPosts.map((post, index) => (
            <div 
              key={index}
              className="w-[300px] sm:w-[350px] bg-white rounded-xl shadow-lg border border-border flex-shrink-0"
            >
              {/* Instagram Style Header */}
              <div className="flex items-center justify-between p-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                      <img src={avatarImg} alt="Dra. Natalia" className="w-full h-full object-cover" />
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
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
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

                {/* Caption with Line Clamp/Instagram style truncation */}
                <div className="font-body text-xs leading-snug text-foreground/90">
                  <p className="line-clamp-[5] overflow-hidden">
                    <span className="font-bold mr-2 text-foreground">dranataliabrainer</span>
                    {post.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <span className="text-muted-foreground text-[10px] mt-1 cursor-pointer hover:underline block">mais...</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
