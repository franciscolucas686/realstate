import PropertyCard from './PropertyCard';
import properties from './Properties';

import Sidebar from './Sidebar';

export default function PropertiesList() {
  return (
    <div className='container min-h-screen my-10 gap-10 bg-gray-100 grid grid-cols-[256px_1fr] items-center justify-center'>
      <Sidebar />
      <main className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </main>
    </div>
  );
}
