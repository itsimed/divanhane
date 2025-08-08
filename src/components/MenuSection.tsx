import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MenuCategory, Dish } from '../types/restaurant';
import { formatPrice } from '../lib/formatPrice';

interface MenuSectionProps {
  menuData: MenuCategory[];
}

const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(({ menuData }, ref) => {
  const navigate = useNavigate();
  
  return (
         <section ref={ref} id="menu" className="bg-black pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Motif oriental en arrière-plan */}
      <div className="absolute inset-0 bg-oriental-pattern opacity-3"></div>
      
             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* En-tête de section */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true, margin: "-50px" }}
           className="text-center mb-8 sm:mb-12 lg:mb-16"
         >
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oriental text-turkish-gold mb-4 sm:mb-6">
             Notre Menu
           </h2>
           <p className="text-sm sm:text-base lg:text-xl text-turkish-cream/80 max-w-3xl mx-auto leading-relaxed px-4">
             Découvrez nos spécialités turques préparées avec des ingrédients frais et authentiques
           </p>
         </motion.div>
        
                 {/* Menu par catégories */}
         <div className="space-y-8 sm:space-y-12 lg:space-y-20">
          {menuData.map((category, categoryIndex) => (
                         <motion.div
               key={category.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
               viewport={{ once: true, margin: "-30px" }}
               className="relative"
             >
                             {/* Titre de catégorie */}
               <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                 <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-oriental text-turkish-gold mb-2 sm:mb-4">
                   {category.name}
                 </h3>
                 <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-turkish-gold to-turkish-red mx-auto rounded-full"></div>
               </div>
              
                                                           {/* Plats en lignes alternées */}
                <div className="space-y-1 sm:space-y-2">
                {category.dishes.map((dish, dishIndex) => (
                  <DishRow
                    key={dish.id}
                    dish={dish}
                    index={dishIndex}
                    isAlternate={dishIndex % 2 === 1}
                  />
                ))}
              </div>
              
              
            </motion.div>
          ))}
        </div>
        
                                   {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="bg-gradient-to-r from-turkish-blue/20 to-turkish-red/20 backdrop-blur-sm border border-turkish-gold/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-oriental text-turkish-gold mb-2 sm:mb-4">
                Réservation
              </h3>
              <p className="text-sm sm:text-base text-turkish-cream/80 mb-4 sm:mb-6">
                Réservez votre table pour une expérience culinaire inoubliable
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-turkish-red hover:bg-turkish-gold text-white font-oriental px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Réserver maintenant
              </motion.button>
            </div>
          </motion.div>

          {/* Bouton retour à l'accueil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-8 sm:mt-12"
          >
                         <motion.button
               onClick={() => {
                 navigate('/');
                 setTimeout(() => {
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                 }, 100);
               }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-turkish-gold/20 hover:bg-turkish-gold text-turkish-gold hover:text-black font-oriental px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 border border-turkish-gold/30 hover:border-turkish-gold text-sm sm:text-base"
             >
               ← Retour à l'accueil
             </motion.button>
          </motion.div>
      </div>
    </section>
  );
});

// Composant pour afficher un plat en ligne
interface DishRowProps {
  dish: Dish;
  index: number;
  isAlternate: boolean;
}

const DishRow: React.FC<DishRowProps> = ({ dish, index, isAlternate }) => {
  return (
                   <motion.div
        initial={{ opacity: 0, x: isAlternate ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true, margin: "-20px" }}
                className="p-1 sm:p-2 group"
      >
             <div className={`flex flex-row items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${isAlternate ? 'flex-row-reverse' : ''}`}>
                 {/* Contenu texte */}
         <div className="flex-1">
           
                                   {/* Nom du plat et prix */}
             <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-4">
               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-oriental text-turkish-gold">
                 {dish.name}
               </h3>
               <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-oriental text-turkish-gold font-bold">
                 {formatPrice(dish.price)}
               </span>
             </div>
           
                                   {/* Description */}
             <p className="text-turkish-cream/80 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
               {dish.description}
             </p>
         </div>
        
                                                       {/* Image du plat - seulement si elle existe */}
                                                                                               {dish.image && (
                                                                                                 <div className="w-32 sm:w-48 md:w-64 lg:w-56 xl:w-72 h-24 sm:h-36 md:h-48 lg:h-40 xl:h-56 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden flex-shrink-0">
                                                                                                   <img 
                                                                                                     src={dish.image} 
                                                                                                     alt={dish.name}
                                                                                                     className="w-full h-full object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
                                                                                                   />
                                                                                                 </div>
                                                                                               )}
      </div>
      
      
    </motion.div>
  );
};

MenuSection.displayName = 'MenuSection';

export default MenuSection; 