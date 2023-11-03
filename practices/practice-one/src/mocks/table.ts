// Components
import { TTableHeadCell } from '@components/Table/TableHead';

export const tableHead: TTableHeadCell[] = [
  {
    title: 'Card number',
  },
  {
    title: 'Card name',
  },
  {
    title: 'Card image',
  },
  {
    title: 'Status',
  },
  {
    title: 'Created time',
  },
  {
    title: 'Updated time',
  },
  {
    title: 'Actions',
  },
];

type CardInfoMock = {
  number: string;
  name: string;
  skin: number;
  status: 'active' | 'inactive' | 'close';
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
};

export const tableBody: CardInfoMock[] = [
  {
    number: '123-456-789-000',
    name: 'John Smith',
    skin: 0,
    status: 'active',
    role: 'admin',
    createdAt: '12:00 AM Oct - 10 -2023',
    updatedAt: '12:00 AM Oct - 10 -2023',
  },
  {
    number: '123-456-789-000',
    name: 'John Smith',
    skin: 0,
    status: 'inactive',
    role: 'user',
    createdAt: '12:00 AM Oct - 10 -2023',
    updatedAt: '12:00 AM Oct - 10 -2023',
  },
  {
    number: '123-456-789-000',
    name: 'John Smith',
    skin: 0,
    status: 'close',
    role: 'user',
    createdAt: '12:00 AM Oct - 10 -2023',
    updatedAt: '12:00 AM Oct - 10 -2023',
  },
];
