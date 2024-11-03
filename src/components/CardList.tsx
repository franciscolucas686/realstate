import Card from './Card';
import img01 from '../assets/images/ap_res_primavera/img01.jpeg';

const properties = [
  {
    id: '01',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '02',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '03',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '04',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '05',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '06',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    imageUrl: img01,
  },
  {
    id: '07',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    imageUrl: img01,
  },
  {
    id: '07',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    imageUrl: img01,
  },
  {
    id: '07',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    imageUrl: img01,
  },
  {
    id: '07',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    imageUrl: img01,
  },
] as const;

export default function CardList() {
  return (
    <main className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
      {properties.map((property, index) => (
        <Card key={index} {...property} />
      ))}
    </main>
  );
}
