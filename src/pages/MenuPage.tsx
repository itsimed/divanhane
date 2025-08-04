import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MenuSection from '../components/MenuSection';
import { getMenuByCategories } from '../data/menu';

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="MenuPage bg-black min-h-screen">
      {/* Logo en haut */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center pt-4 pb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/')}
          className="cursor-pointer"
        >
          <img 
            src="https://storage.googleapis.com/divanhane/logo%20divan.webp" 
            alt="Divan Hane Logo" 
            className="h-20 w-auto"
          />
        </motion.div>
      </motion.div>

      {/* Contenu de la page menu */}
      <MenuSection menuData={getMenuByCategories()} />
    </div>
  );
};

export default MenuPage; 