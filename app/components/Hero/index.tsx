import { Hero } from '@/actions';
import { urlToImage } from '@/actions/client-config';
import Carousel from '../Carousel';

interface HeroProps {
  banners: Hero[];
}

const Hero: React.FC<HeroProps> = ({ banners }) => {
  return (
    <div className="w-screen flex justify-center">
      <Carousel
        images={banners.map((item) => {
          return urlToImage(item.image).fit('max').url();
        })}
        urls={banners.map((item) => item.url)}
      />
    </div>
  );
};

export default Hero;
