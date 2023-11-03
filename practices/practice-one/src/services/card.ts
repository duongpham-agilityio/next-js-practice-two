// Constants
import { MESSAGES } from '@constants/messages';
import { ROUTES } from '@constants/url';

// Types
import { TCardPayload, ICard } from '@interfaces/card';

/**
 * Get all card from DB
 * @returns
 */
export const getAllCard = async (): Promise<ICard[]> =>
  await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/${ROUTES.CARD}`, {
    next: { tags: [ROUTES.CARD] },
    cache: 'no-store',
  }).then((res) => res.json());

/**
 *
 * @returns
 */
export const getCardById = async (id: string): Promise<ICard> =>
  await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/${ROUTES.CARD}/${id}`, {
    next: { tags: [ROUTES.CARD] },
    cache: 'no-store',
  }).then((res) => {
    if (res.ok) return res.json();

    throw new Error(MESSAGES.FAILED_TO_FETCH);
  });

/**
 * Update card by id
 * @param id
 * @param payload
 * @returns
 */
export const updateCard = async (
  id: string,
  payload: Partial<ICard>,
): Promise<ICard> => {
  const response: ICard = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/${ROUTES.CARD}/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  ).then((res) => {
    if (res.ok) return res.json();

    throw new Error(MESSAGES.FAILED_TO_FETCH);
  });

  return response;
};

/**
 * Send request add new card
 * @param card info card
 * @returns new card
 */
export const postCard = async (card: TCardPayload): Promise<ICard> => {
  const response: ICard = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/${ROUTES.CARD}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
    },
  ).then((res) => {
    if (res.ok) return res.json();

    throw new Error(MESSAGES.FAILED_TO_FETCH);
  });

  return response;
};
