import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';

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
  <div className='flex justify-center gap-4'>
    <div className='flex items-center gap-1'>
        <MdPhoneInTalk className='text-xl text-customYellow' />
      <span>{whatsapp1}</span>
    </div>
    <div className='flex items-center gap-1'>
        <RiWhatsappFill className='text-xl text-customYellow' />
      <span>{whatsapp2}</span>
    </div>
    <div className='flex items-center gap-1'>
        <MdEmail className='text-xl text-customYellow' />
      <span>{email}</span>
    </div>
  </div>
);

const SocialLinks = ({ facebook, instagram }: SocialLinksProps) => (
  <div className='flex justify-center gap-4 mb-4'>
    <a
      href={facebook}
      aria-label='Facebook'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FaFacebookSquare className='text-4xl text-customYellow' />
    </a>
    <a
      href={instagram}
      aria-label='Instagram'
      target='_blank'
      rel='noopener noreferrer'
    >
      <RiInstagramFill className='text-4xl text-customYellow' />
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className=' text-white py-8 text-center bg-customGreen'>
      <h2 className='text-lg font-bold mb-4'>Redes Sociais</h2>
      <SocialLinks
        facebook='https://www.facebook.com'
        instagram='https://www.instagram.com'
      />
      <h2 className='text-lg font-bold mb-4'>Contato</h2>
      <ContactInfo
        whatsapp1='(15) 99-3333'
        whatsapp2='(15) 99999-9999'
        email='exemplo@cvimobiliaria.com'
      />
      <p className='text-sm text-gray-400 mt-8'>
        &reg;CV Negócios Imobiliários 2024 - Todos os direitos Reservados
      </p>
    </footer>
  );
}
