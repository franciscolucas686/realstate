import { useState } from 'react';
import PropertyCard from './PropertyCard';
import properties from './Properties';

export default function PropertiesList() {
  const [codeFilter, setCodeFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState<'Venda' | 'Aluguel' | ''>('');
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [cityFilter, setCityFilter] = useState<
    'Sorocaba' | 'Votorantim' | 'Piedade' | ''
  >('');
  const [priceFilter, setPriceFilter] = useState(0);
  const [bedroomsFilter, setBedroomsFilter] = useState(0);
  const [bathroomsFilter, setBathroomsFilter] = useState(0);

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setCodeFilter('');
    setTypeFilter('');
    setCategoryFilter([]);
    setCityFilter('');
    setPriceFilter(0);
    setBedroomsFilter(0);
    setBathroomsFilter(0);
  };

  const filteredProperties = properties.filter(property => {
    return (
      (codeFilter === '' || property.id.includes(codeFilter)) &&
      (typeFilter === '' || property.type === typeFilter) &&
      (categoryFilter.length === 0 ||
        categoryFilter.includes(property.category)) &&
      (cityFilter === '' || property.city === cityFilter) &&
      (priceFilter === 0 ||
        parseFloat(property.price.replace(/[^\d,]/g, '').replace(',', '.')) <=
          priceFilter) &&
      (bedroomsFilter === 0 || property.bedrooms >= bedroomsFilter) &&
      (bathroomsFilter === 0 || property.bathrooms >= bathroomsFilter)
    );
  });

  return (
    <div className='container min-h-screen my-20 gap-20 bg-gray-100 grid grid-cols-[256px_1fr] items-start justify-center'>
      <div className='h-full'>
        <div className='p-5 bg-white shadow-lg rounded-lg'>
          <div className='mb-5'>
            <label
              htmlFor='code'
              className='block text-lg font-semibold text-customBrown'
            >
              Código
            </label>
            <input
              type='text'
              id='code'
              className='mt-1 block w-full p-1 pl-4 border border-gray-300 rounded-full'
              value={codeFilter}
              onChange={e => setCodeFilter(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label className='block text-lg font-semibold text-customBrown'>
              Tipo
            </label>
            <div className='mt-1'>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='type'
                  className='form-radio'
                  value='Venda'
                  checked={typeFilter === 'Venda'}
                  onChange={() => setTypeFilter('Venda')}
                />
                <span className='ml-2'>Venda</span>
              </label>
              <label className='inline-flex items-center ml-4'>
                <input
                  type='radio'
                  name='type'
                  className='form-radio'
                  value='Aluguel'
                  checked={typeFilter === 'Aluguel'}
                  onChange={() => setTypeFilter('Aluguel')}
                />
                <span className='ml-2'>Aluguel</span>
              </label>
            </div>
          </div>

          <div className='mb-5'>
            <label className='block text-lg font-semibold text-customBrown'>
              Categoria
            </label>
            <div className='mt-1 flex flex-col'>
              {['Apartamento', 'Casa', 'Chácara', 'Terreno'].map(category => (
                <label key={category} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    checked={categoryFilter.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className='ml-2'>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='mb-5'>
            <label
              htmlFor='city'
              className='block text-lg font-semibold text-customBrown'
            >
              Cidade
            </label>
            <select
              id='city'
              className='mt-1 block w-full p-2 border border-gray-300 rounded-full'
              value={cityFilter}
              onChange={e =>
                setCityFilter(
                  e.target.value as 'Sorocaba' | 'Votorantim' | 'Piedade' | '',
                )
              }
            >
              <option value=''>Selecione...</option>
              <option value='Sorocaba'>Sorocaba</option>
              <option value='Votorantim'>Votorantim</option>
              <option value='Piedade'>Piedade</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block text-lg font-semibold text-customBrown'>
              Preço até
            </label>
            <input
              type='range'
              min='0'
              max='1000000'
              step='10000'
              className='w-full'
              value={priceFilter}
              onChange={e => setPriceFilter(parseInt(e.target.value))}
            />
            <p>R$ {priceFilter.toLocaleString('pt-BR')}</p>
          </div>

          <div className='mb-4'>
            <label className='block text-lg font-semibold text-customBrown'>
              Quartos
            </label>
            <input
              type='range'
              min='0'
              max='10'
              step='1'
              className='w-full'
              value={bedroomsFilter}
              onChange={e => setBedroomsFilter(parseInt(e.target.value))}
            />
            <p>{bedroomsFilter}</p>
          </div>

          <div className='mb-4'>
            <label className='block text-lg font-semibold text-customBrown'>
              Banheiros
            </label>
            <input
              type='range'
              min='0'
              max='10'
              step='1'
              className='w-full'
              value={bathroomsFilter}
              onChange={e => setBathroomsFilter(parseInt(e.target.value))}
            />
            <p>{bathroomsFilter}</p>
          </div>
          <div className='mt-5'>
            <button
              onClick={clearFilters}
              className='w-full p-2 bg-customGreen text-white rounded-md hover:bg-green-950 transition'
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      <main className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </main>
    </div>
  );
}
