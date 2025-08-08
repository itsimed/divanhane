import { motion } from 'framer-motion';
import type { ContactInfo } from '../types/restaurant';

interface ContactSectionProps {
  contact: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <section id="contact" className="bg-gradient-to-b from-black to-turkish-blue/10 section-padding relative overflow-hidden">
      {/* Motif oriental en arrière-plan */}
      <div className="absolute inset-0 bg-oriental-pattern opacity-3"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-oriental text-turkish-gold mb-6">
            Nous Contacter
          </h2>
          <p className="text-xl text-turkish-cream/80 max-w-3xl mx-auto leading-relaxed">
            Venez nous rendre visite pour une expérience culinaire authentique
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
                         {/* Adresse */}
             <div className="bg-gradient-to-br from-turkish-blue/20 to-black/80 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-turkish-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-turkish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </div>
                  <div>
                    <h3 className="text-xl font-oriental text-turkish-gold mb-2">Adresse</h3>
                    <a
                      href="https://maps.app.goo.gl/wm6Rv3Q2eXdUyDt3A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-turkish-cream/80 hover:text-turkish-gold transition-colors duration-300 leading-relaxed"
                    >
                      {contact.address}
                    </a>
                  </div>
               </div>
             </div>
             
             {/* Téléphone */}
             <div className="bg-gradient-to-br from-turkish-blue/20 to-black/80 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-turkish-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-turkish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-oriental text-turkish-gold mb-2">Téléphone</h3>
                   <a 
                     href={`tel:${contact.phone}`}
                     className="text-turkish-cream/80 hover:text-turkish-gold transition-colors duration-300"
                   >
                     {contact.phone}
                   </a>
                 </div>
               </div>
             </div>
             
             
             
             {/* Horaires */}
             <div className="bg-gradient-to-br from-turkish-blue/20 to-black/80 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-turkish-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-turkish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div>
                   <h3 className="text-xl font-oriental text-turkish-gold mb-4">Horaires d'ouverture</h3>
                   <div className="space-y-2">
                     {Object.entries(contact.hours).map(([day, hours]) => (
                       <div key={day} className="flex justify-between">
                         <span className="text-turkish-cream/80 font-medium">{day}</span>
                         <span className="text-turkish-gold">{hours}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
          
          {/* Réseaux sociaux et CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Réseaux sociaux */}
            <div className="bg-gradient-to-br from-turkish-blue/20 to-black/80 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6">
              <h3 className="text-xl font-oriental text-turkish-gold mb-4">Suivez-nous</h3>
                                            <div className="flex space-x-4">
                 {contact.socialMedia.instagram && (
                   <motion.a
                     href={contact.socialMedia.instagram}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-12 h-12 bg-turkish-gold/20 hover:bg-turkish-gold/40 border border-turkish-gold/30 rounded-full flex items-center justify-center transition-all duration-300"
                   >
                     <svg className="w-6 h-6 text-turkish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"/>
                     </svg>
                   </motion.a>
                 )}
                                   {contact.socialMedia.tiktok && (
                    <motion.a
                      href={contact.socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-turkish-gold/20 hover:bg-turkish-gold/40 border border-turkish-gold/30 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <svg className="w-6 h-6 text-turkish-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </motion.a>
                  )}
               </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-gradient-to-r from-turkish-red/20 to-turkish-gold/20 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-oriental text-turkish-gold mb-3">Réservation</h3>
              <p className="text-turkish-cream/80 mb-4">
                Réservez votre table en ligne ou par téléphone
              </p>
              <motion.a
                href={`tel:${contact.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-turkish-red hover:bg-turkish-gold text-white font-oriental px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Réserver maintenant
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 