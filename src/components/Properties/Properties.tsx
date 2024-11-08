import img01 from '../../assets/images/ap_res_primavera/img01.jpeg';

export interface Property {
  id: string;
  title: string;
  type: 'Venda' | 'Aluguel';
  category: 'Casa' | 'Apartamento' | 'Terreno' | 'Chácara';
  city: 'Sorocaba' | 'Votorantim' | 'Piedade';
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
}

const properties: Property[] = [
  {
    id: '01',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Venda',
    category: 'Casa',
    city: 'Votorantim',
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
    category: 'Apartamento',
    city: 'Piedade',
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
    category: 'Apartamento',
    city: 'Votorantim',
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
    category: 'Apartamento',
    city: 'Piedade',
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
    category: 'Casa',
    city: 'Votorantim',
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
    category: 'Apartamento',
    city: 'Votorantim',
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
    category: 'Apartamento',
    city: 'Votorantim',
    imageUrl: img01,
  },
  {
    id: '08',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    category: 'Apartamento',
    city: 'Piedade',
    imageUrl: img01,
  },
  {
    id: '09',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    category: 'Apartamento',
    city: 'Votorantim',
    imageUrl: img01,
  },
  {
    id: '10',
    title: 'Ap Residencial Primavera',
    address: 'Rua Benedito Estalislau, n°205 bairro Santa Rosália',
    price: 'R$ 240.000,00',
    bedrooms: 1,
    bathrooms: 1,
    area: 78,
    type: 'Aluguel',
    category: 'Apartamento',
    city: 'Sorocaba',
    imageUrl: img01,
  },
] as const;

export default properties
