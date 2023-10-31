import { ICard } from '@interfaces/card';

/**
 * Get all card from DB
 * @returns
 */
export const getAllCard = async (): Promise<ICard[]> =>
  await fetch('https://64eb6eb1e51e1e82c57759bb.mockapi.io/ap1/v1/card').then(
    (res) => res.json(),
  );
