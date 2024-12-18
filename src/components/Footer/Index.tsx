import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

type ContactInfoProps = {
  whatsapp1: string;
  whatsapp2: string;
  email: string;
};

type SocialLinksProps = {
  facebook: string;
  instagram: string;
};

const ContactInfo = ({ whatsapp1, whatsapp2, email }: ContactInfoProps) => (
  <div className='flex justify-center gap-4 mb'>
    <a
      className='flex items-center gap-1'
      href='#'
      aria-label='Whatsapp 1'
      title='Whatsapp 1'
      target='_blank'
      rel='noopener noreferrer'
    >
      <RiWhatsappFill className='text-xl text-customYellow' />
      <span>{whatsapp1}</span>
    </a>
    <a
      className='flex items-center gap-1'
      href='#'
      aria-label='Whatsapp 2'
      title='Whatsapp 2'
      target='_blank'
      rel='noopener noreferrer'
    >
      <RiWhatsappFill className='text-xl text-customYellow' />
      <span>{whatsapp2}</span>
    </a>
    <a
      className='flex items-center gap-1'
      href='#'
      aria-label='Email'
      title='Email'
      target='_blank'
      rel='noopener noreferrer'
    >
      <MdEmail className='text-xl text-customYellow' />
      <span>{email}</span>
    </a>
  </div>
);

const SocialLinks = ({ facebook, instagram }: SocialLinksProps) => (
  <div className='flex justify-center gap-4 mb-10'>
    <a
      href={facebook}
      aria-label='Facebook'
      title='Facebook'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FaFacebookSquare className='text-4xl text-customYellow' />
    </a>
    <a
      href={instagram}
      aria-label='Instagram'
      title='Instagram'
      target='_blank'
      rel='noopener noreferrer'
    >
      <RiInstagramFill className='text-4xl text-customYellow' />
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div className='py-10 flex flex-col justify-center text-white text-center bg-customGreen'>
        <h2 className='text-2xl mb-3'>Redes Sociais</h2>
        <SocialLinks
          facebook='https://www.facebook.com'
          instagram='https://www.instagram.com'
        />
        <ContactInfo
          whatsapp1='(15) 99999-3333'
          whatsapp2='(15) 99999-9999'
          email='exemplo@cvimobiliaria.com'
        />
      </div>
      <div className='text-center'>
        <p className='text-sm text-gray-400 bg-customGreen pb-10'>
          &reg;CV Negócios Imobiliários 2024 - Todos os direitos Reservados
        </p>
      </div>
    </footer>
  );
}
