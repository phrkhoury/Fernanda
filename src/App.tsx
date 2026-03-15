/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Activity, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Heart, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Star, 
  UserRound 
} from 'lucide-react';

const imagemFernanda = '/imagem_fernanda.jpg';
const proteseJoelho = '/protese-de-joelho-ortopedista.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-brand-mint selection:text-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-cyan to-brand-mint rounded-lg flex items-center justify-center text-stone-800 font-serif text-xl font-bold shadow-sm">
                F
              </div>
              <span className="font-serif text-xl font-semibold text-stone-800 tracking-tight">
                Fernanda Andrade Martins Khoury
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-sm font-medium text-stone-600 hover:text-brand-pink transition-colors">Sobre</a>
              <a href="#especialidades" className="text-sm font-medium text-stone-600 hover:text-brand-pink transition-colors">Especialidades</a>
              <a href="#depoimentos" className="text-sm font-medium text-stone-600 hover:text-brand-pink transition-colors">Depoimentos</a>
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-brand-pink rounded-full hover:bg-brand-pink-dark transition-colors shadow-sm hover:shadow-md"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/40 text-stone-800 text-sm font-medium mb-6">
                <Activity className="w-4 h-4 text-brand-cyan-dark" />
                <span>Especialista em Prótese de Joelho</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-[1.1] mb-6 tracking-tight">
                Recupere sua mobilidade e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-coral italic">volte a caminhar sem dor.</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-xl">
                Atendimento humanizado e protocolos especializados em reabilitação pós-operatória de prótese de joelho (Artroplastia) com Fernanda Andrade Martins Khoury, fisioterapeuta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-cyan rounded-full hover:bg-brand-cyan-dark transition-all shadow-lg shadow-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/40 hover:-translate-y-0.5"
                >
                  Agendar Avaliação
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#sobre" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all"
                >
                  Conhecer a Fisioterapeuta
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Paciente" className="w-10 h-10 rounded-full border-2 border-stone-50 object-cover" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-brand-coral">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-0.5"><span className="font-semibold text-stone-700">500+</span> pacientes recuperados</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl">
                <img 
                  src={proteseJoelho} 
                  alt="Sessão de Fisioterapia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-brand-peach/30 rounded-full flex items-center justify-center text-brand-pink">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500">Cuidado</p>
                  <p className="font-semibold text-stone-900">Humanizado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-bl from-brand-cyan/30 via-brand-peach/20 to-brand-pink/20 rounded-full blur-3xl -z-10 opacity-60"></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto border-8 border-stone-50 shadow-xl">
                <img 
                  src={imagemFernanda} 
                  alt="Fernanda Andrade Martins Khoury, fisioterapeuta" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to placeholder se a imagem ainda não foi enviada
                    e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 max-w-[200px]">
                <p className="font-serif text-4xl text-brand-cyan-dark mb-2">10+</p>
                <p className="text-sm font-medium text-stone-600">Anos de experiência clínica transformando vidas.</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-6"
              >
                Muito prazer, sou a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan-dark to-brand-cyan italic">Fernanda Andrade Martins Khoury</span>
              </motion.h2>
              <div className="space-y-4 text-lg text-stone-600 mb-8">
                <p>
                  Sou fisioterapeuta apaixonada pelo movimento humano e pela capacidade do nosso corpo de se curar e se adaptar.
                </p>
                <p>
                  Minha missão é proporcionar um tratamento que vai além dos sintomas, buscando a causa raiz do seu desconforto para garantir resultados duradouros e uma vida sem limitações.
                </p>
                <p>
                  Acredito que cada paciente é único, e por isso desenvolvo planos de tratamento totalmente personalizados, combinando as melhores evidências científicas com um olhar atento e acolhedor.
                </p>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Formada pelas melhores instituições",
                  "Especialista em Ortopedia e Traumatologia",
                  "Referência em Reabilitação de Prótese de Joelho",
                  "Atendimento focado na sua recuperação e mobilidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-coral mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-4">
              Especialidades e Tratamentos
            </h2>
            <p className="text-lg text-stone-600">
              Abordagens terapêuticas modernas e eficazes para tratar sua dor e restaurar sua função.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fisioterapia Ortopédica",
                desc: "Tratamento de dores articulares, musculares, tendinites, bursites e problemas de coluna.",
                icon: <UserRound className="w-6 h-6" />
              },
              {
                title: "Pós-Operatório de Prótese de Joelho",
                desc: "Protocolos seguros e acelerados para recuperação da amplitude de movimento, força e marcha após a artroplastia.",
                icon: <Activity className="w-6 h-6" />
              },
              {
                title: "Pilates Clínico",
                desc: "Exercícios terapêuticos para fortalecimento, flexibilidade e correção postural.",
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: "Terapia Manual",
                desc: "Técnicas manuais para alívio imediato da dor, liberação miofascial e melhora da mobilidade.",
                icon: <CheckCircle2 className="w-6 h-6" />
              },
              {
                title: "Fisioterapia Preventiva",
                desc: "Avaliação e intervenção para prevenir lesões no esporte e no dia a dia.",
                icon: <Activity className="w-6 h-6" />
              },
              {
                title: "Tratamento de Dor Crônica",
                desc: "Abordagem multidisciplinar para o manejo e redução de dores persistentes.",
                icon: <Heart className="w-6 h-6" />
              }
            ].map((spec, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-brand-mint/30 rounded-2xl flex items-center justify-center text-brand-cyan-dark mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{spec.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-gradient-to-br from-brand-cyan via-brand-coral to-brand-pink text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">
              O que dizem os pacientes
            </h2>
            <p className="text-white/90 text-lg">
              Histórias reais de recuperação e superação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                text: "Estava com muito medo da cirurgia de prótese de joelho, mas o acompanhamento pré e pós-operatório com a Fernanda fez toda a diferença. A recuperação foi muito mais rápida do que eu imaginava. Profissional incrível e super atenciosa!",
                role: "Paciente de Prótese de Joelho"
              },
              {
                name: "Carlos Eduardo",
                text: "Fiz minha reabilitação após colocar a prótese no joelho com a Fernanda. O processo foi muito seguro e ela me passou muita confiança. Hoje já voltei a caminhar sem dor e recuperei minha independência.",
                role: "Paciente de Prótese de Joelho"
              },
              {
                name: "Ana Paula",
                text: "Achei que nunca mais conseguiria subir escadas sem dor após a artroplastia. O tratamento especializado da Fernanda me devolveu a qualidade de vida. O ambiente é ótimo e o atendimento é 100% focado na nossa recuperação.",
                role: "Paciente de Prótese de Joelho"
              }
            ].map((test, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md shadow-xl">
                <div className="flex items-center text-brand-mint mb-6">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-white text-lg mb-8 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg text-white">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{test.name}</h4>
                    <p className="text-white/70 text-sm">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16 border border-stone-100 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-6">
                  Pronto para viver sem dor?
                </h2>
                <p className="text-lg text-stone-600 mb-8">
                  Agende sua avaliação hoje mesmo. Dê o primeiro passo para recuperar sua qualidade de vida e voltar a fazer o que você ama.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-mint/30 rounded-full flex items-center justify-center text-brand-cyan-dark shadow-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">Atendimento em Domicílio</h4>
                      <p className="text-stone-600">Reabilitação no conforto da sua casa.<br/>Consulte as regiões de atendimento.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-mint/30 rounded-full flex items-center justify-center text-brand-cyan-dark shadow-sm shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">Telefone / WhatsApp</h4>
                      <p className="text-stone-600">(31) 9 8811-5624</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-mint/30 rounded-full flex items-center justify-center text-brand-cyan-dark shadow-sm shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">Horário de Atendimento</h4>
                      <p className="text-stone-600">Segunda a Sexta: 08h às 20h<br/>Sábados: 08h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
                <h3 className="text-2xl font-semibold text-stone-900 mb-6">Fale Comigo</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nome Completo</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">WhatsApp</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all" placeholder="(31) 9 0000-0000" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Como posso ajudar?</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan outline-none transition-all resize-none" placeholder="Descreva brevemente seu caso..."></textarea>
                  </div>
                  <a href="https://wa.me/5531988115624" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-brand-pink text-white rounded-xl font-medium hover:bg-brand-pink-dark transition-colors flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Enviar Mensagem via WhatsApp
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-cyan to-brand-mint rounded flex items-center justify-center text-stone-800 font-serif font-bold">
                F
              </div>
              <span className="font-serif text-lg font-semibold text-white tracking-tight">
                Fernanda Andrade Martins Khoury
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Fernanda Andrade Martins Khoury. Todos os direitos reservados.</p>
            <p>CREFITO-3/000000-F</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

