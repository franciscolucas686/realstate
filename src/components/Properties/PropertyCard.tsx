import { FaBath, FaBed } from 'react-icons/fa';
import { RxRulerSquare } from 'react-icons/rx';
import { Property } from './Properties';

export default function PropertyCard({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  type,
  imageUrl,
}: Property) {
  return (
    <div className='border rounded-lg shadow-lg overflow-hidden bg-white relative'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-[250px] object-cover'
      />
      <div className='p-5'>
        <div className='flex items-center gap-4 absolute top-4'>
          <span className='px-2 py-1 text-sm font-medium rounded-full bg-white text-gray-600'>
            {id}
          </span>

          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${type === 'Venda' ? 'bg-customGreen text-white' : 'bg-customYellow text-customBrown'}`}
          >
            {type}
          </span>
        </div>
        <h3 className='text-lg font-bold text-customBrown'>{title}</h3>
        <p className='text-gray-600 text-sm'>{address}</p>
        <p className='mt-2 text-customBrown font-semibold'>{price}</p>
        <div className='flex items-center mt-2 text-gray-600 space-x-4'>
          <span title='Quartos' className='flex items-baseline'>
            <FaBed className='inline w-5 h-5 mr-2' />
            <span> {bedrooms}</span>
          </span>
          <span className='flex items-baseline'>
            <FaBath className='inline w-5 h-5 mr-2' />
            <span>{bathrooms}</span>
          </span>
          <span className='flex items-baseline'>
            <RxRulerSquare className='inline w-5 h-5 mr-2' />
            <span>{area} m²</span>
          </span>
        </div>
      </div>
    </div>
  );
}
