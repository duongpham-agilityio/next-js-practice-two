// Constants
import { ROUTES } from '@constants/url';

// Types
import { ICard } from '@interfaces/card';

/**
 * Get all card from DB
 * @returns
 */
export const getAllCard = async (): Promise<ICard[]> =>
  await fetch(`${process.env.DB_URL}/${ROUTES.CARD}`).then((res) => res.json());
