import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MiniMenu from '../components/MiniMenu';
import ContactSection from '../components/ContactSection';
import { restaurantInfo } from '../data/menu';

const HomePage = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <div className="HomePage">
      <HeroSection onMenuClick={handleMenuClick} />
      <MiniMenu />
      <ContactSection contact={restaurantInfo.contact} />
    </div>
  );
};

export default HomePage; 