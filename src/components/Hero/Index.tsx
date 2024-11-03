import HeroTitle from './HeroTitle';
import heroImage from '../assets/images/hero.png';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section
      className='h-[100vh] bg-cover bg-center flex'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='bg-gradient-to-b from-white/50 to-transparent flex-grow'>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-[62vh]'>
          <HeroTitle />
        </div>
      </div>
    </section>
  );
}
