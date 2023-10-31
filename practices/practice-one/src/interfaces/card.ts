export interface ICard {
  id: string;
  cardNumber: string;
  name: string;
  skin: number;
  role: 'admin' | 'user';
  status: 'active' | 'inactive' | 'close';
  createdAt: Date;
  updatedAt: Date;
}
