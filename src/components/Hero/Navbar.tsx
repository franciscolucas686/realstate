export default function Navbar() {
  return (
    <header className='max-w-95% mx-auto rounded-full flex justify-between items-center py-4 px-8 bg-white mt-10'>
      <div className='text-2xl font-bold'>Francine Rodrigues</div>
      <nav className='flex space-x-6'>
        <a href='#' className='hover:text-gray-700'>
          Home
        </a>
        <a href='#' className='hover:text-gray-700'>
          Contacto
        </a>
      </nav>
      <div className='flex space-x-4 items-center'>
        <button className='bg-white border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100'>
          WhatsApp
        </button>
      </div>
    </header>
  );
}
