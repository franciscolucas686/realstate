import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className='mt-8 flex justify-center'>
      <div className='relative w-3/5'>
        <input
          type='text'
          placeholder='Pesquise o nome da propriedade ou uma palavra-chave...'
          className='w-full py-3 px-5 rounded-full border border-gray-300 shadow-md focus:outline-none'
        />
        <button className='absolute right-5 top-4'>
          <FaSearch className='text-gray-500' />
        </button>
      </div>
    </div>
  );
}
