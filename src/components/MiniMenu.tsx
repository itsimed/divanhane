import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getMenuByCategories } from '../data/menu';
import type { Dish } from '../types/restaurant';

const MiniMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    // Récupérer tous les plats de toutes les catégories
    const allDishes = getMenuByCategories().flatMap(category => category.dishes);
    setDishes(allDishes);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === dishes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? dishes.length - 1 : prevIndex - 1
    );
  };



  // Auto-play du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  if (dishes.length === 0) return null;

  return (
         <section className="bg-black pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden">
       {/* Motif oriental en arrière-plan */}
       <div className="absolute inset-0 bg-oriental-pattern opacity-3"></div>
       
       <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
         {/* En-tête de section */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, margin: "-50px" }}
           className="text-center mb-8 sm:mb-10 lg:mb-12"
         >
                       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oriental text-turkish-gold mb-3 sm:mb-6">
              Un petit tour en cuisine
            </h2>
                       <p className="text-sm sm:text-base lg:text-xl text-turkish-cream/80 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Découvrez nos spécialités en un coup d'œil
            </p>
         </motion.div>

                 {/* Carrousel */}
         <div className="relative">
           {/* Conteneur du carrousel */}
           <div className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
             <div 
               className="flex transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {dishes.map((dish) => (
                 <div
                   key={dish.id}
                   className="w-full flex-shrink-0 relative"
                 >
                                       {/* Image du plat */}
                    <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
                     <img
                       src={dish.image}
                       alt={dish.name}
                       className="w-full h-full object-cover"
                     />
                     
                     {/* Overlay gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                     
                                           {/* Nom du plat */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 md:p-8">
                        <motion.h3
                          key={`${dish.id}-${currentIndex}`}
                          initial={{ opacity: 0, y: 50, scale: 0.8, filter: "blur(4px)" }}
                          animate={{ 
                            opacity: [0, 0.3, 0.7, 1], 
                            y: [50, 25, 10, 0], 
                            scale: [0.8, 0.9, 0.95, 1],
                            filter: ["blur(4px)", "blur(2px)", "blur(1px)", "blur(0px)"]
                          }}
                          exit={{ 
                            opacity: [1, 0.7, 0.3, 0], 
                            y: [0, -10, -25, -50], 
                            scale: [1, 0.95, 0.9, 0.8],
                            filter: ["blur(0px)", "blur(1px)", "blur(2px)", "blur(4px)"]
                          }}
                          transition={{ 
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            opacity: { duration: 1.2 },
                            y: { duration: 1.2 },
                            scale: { duration: 1.2 },
                            filter: { duration: 1.2 }
                          }}
                          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-oriental text-turkish-gold font-bold text-shadow-lg"
                        >
                          {dish.name}
                        </motion.h3>
                      </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

                       {/* Boutons de navigation - en dehors du carrousel */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 mt-3 sm:mt-6">
              <button
                onClick={prevSlide}
                className="bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-turkish-gold select-none transform-none hover:bg-black/90 active:scale-95 sm:hover:scale-105 hover:shadow-lg hover:shadow-turkish-gold/25 transition-all duration-300 relative group"
                aria-label="Plat précédent"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                {/* Point décoratif mobile */}
                <div className="absolute w-1 h-1 bg-turkish-gold/60 rounded-full sm:hidden"></div>
                {/* Effet de brillance */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-full border-2 border-turkish-gold/30 group-hover:border-turkish-gold/60 transition-all duration-300"></div>
                {/* Effet de pression mobile */}
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 active:opacity-100 transition-opacity duration-150 sm:hidden"></div>
              </button>

              <button
                onClick={nextSlide}
                className="bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-turkish-gold select-none transform-none hover:bg-black/90 active:scale-95 sm:hover:scale-105 hover:shadow-lg hover:shadow-turkish-gold/25 transition-all duration-300 relative group"
                aria-label="Plat suivant"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                {/* Point décoratif mobile */}
                <div className="absolute w-1 h-1 bg-turkish-gold/60 rounded-full sm:hidden"></div>
                {/* Effet de brillance */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Bordure animée */}
                <div className="absolute inset-0 rounded-full border-2 border-turkish-gold/30 group-hover:border-turkish-gold/60 transition-all duration-300"></div>
                {/* Effet de pression mobile */}
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 active:opacity-100 transition-opacity duration-150 sm:hidden"></div>
              </button>
            </div>
         </div>

                 {/* Call to action */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           viewport={{ once: true, margin: "-50px" }}
           className="text-center mt-8 sm:mt-10 lg:mt-12"
         >
                       <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/menu'}
              className="bg-turkish-red hover:bg-turkish-gold text-white font-oriental px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Voir le menu complet
            </motion.button>
         </motion.div>
      </div>
    </section>
  );
};

export default MiniMenu; 