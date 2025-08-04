import { motion } from 'framer-motion';

interface HeroSectionProps {
  onMenuClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onMenuClick }) => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Image de fond - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/divanhane/hero%C3%A0.webp')`
        }}
      ></div>
      
      {/* Image de fond - Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/divanhane/heromobile.webp')`
        }}
      ></div>
      
      {/* Motif oriental en arrière-plan */}
      <div className="absolute inset-0 bg-oriental-pattern opacity-5"></div>
      
      {/* Gradient overlay pour assurer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo */}
          <div className="mb-6">
                         <motion.div
               initial={{ scale: 0.8, rotate: 0 }}
               animate={{ scale: 1, rotate: 360 }}
               transition={{ 
                 scale: { duration: 1, delay: 0.2 },
                 rotate: { duration: 20, repeat: Infinity, ease: "linear" }
               }}
                               className="mx-auto mb-6 flex items-center justify-center"
             >
               <img 
                 src="https://storage.googleapis.com/divanhane/logo%20divan.webp" 
                 alt="Divan Hane Logo" 
                 className="h-32 w-auto"
               />
             </motion.div>
          </div>
          
          {/* Nom du restaurant */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-oriental text-turkish-gold mb-4 tracking-wider"
          >
            Divan Hane
          </motion.h1>
          
          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-elegant text-turkish-cream mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            L'art de la cuisine turque
          </motion.p>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez l'authenticité de la gastronomie turque dans un cadre élégant et chaleureux. 
            Des saveurs d'Orient qui vous transportent au cœur d'Istanbul.
          </motion.p>
        </motion.div>
        
        {/* Bouton CTA */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuClick}
          className="bg-turkish-red hover:bg-turkish-gold text-white font-oriental text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-turkish-gold/30 hover:border-turkish-gold"
        >
          Voir le Menu
        </motion.button>
        
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-turkish-gold/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-turkish-gold rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 