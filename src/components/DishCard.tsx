import { motion } from 'framer-motion';
import type { Dish } from '../types/restaurant';

interface DishCardProps {
  dish: Dish;
  index: number;
}

const DishCard: React.FC<DishCardProps> = ({ dish, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gradient-to-br from-turkish-blue/20 to-black/80 backdrop-blur-sm border border-turkish-gold/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image du plat */}
      <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Badges */}
      <div className="flex gap-2 mb-3">
        {dish.isSpicy && (
          <span className="px-2 py-1 bg-turkish-red/20 text-turkish-red text-xs font-semibold rounded-full border border-turkish-red/30">
            🌶️ Épicé
          </span>
        )}
        {dish.isVegetarian && (
          <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs font-semibold rounded-full border border-green-600/30">
            🌱 Végétarien
          </span>
        )}
      </div>
      
      {/* Nom du plat */}
      <h3 className="text-xl font-oriental text-turkish-gold mb-2 group-hover:text-turkish-gold/80 transition-colors duration-300">
        {dish.name}
      </h3>
      
      {/* Description */}
      <p className="text-turkish-cream/80 text-sm mb-4 leading-relaxed">
        {dish.description}
      </p>
      
      {/* Prix */}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-oriental text-turkish-gold font-bold">
          {dish.price}
        </span>
        
        {/* Bouton commander */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-turkish-red/20 hover:bg-turkish-red text-white text-sm font-semibold rounded-lg border border-turkish-red/30 hover:border-turkish-red transition-all duration-300"
        >
          Commander
        </motion.button>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-4 right-4 w-8 h-8 border border-turkish-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border border-turkish-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
    </motion.div>
  );
};

export default DishCard; 