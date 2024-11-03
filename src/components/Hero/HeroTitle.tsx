import SearchBar from './SearchBar';

export default function HeroTitle() {
  return (
    <div className='text-center'>
      <div className='text-sm border rounded-full px-4 py-2 bg-gray-100 mb-4 inline-block'>
        Encontraremos o imóvel dos seus sonhos!
      </div>
      <h1 className='text-5xl font-bold text-customGreen'>
        Os melhores imóveis de Votorantim e região
      </h1>
      <p className='mt-4 text-gray-500'>
        Procure casas, apartamentos, terrenos e chácaras em nossa região.
      </p>
      <SearchBar />
    </div>
  );
}
