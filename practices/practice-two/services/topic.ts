// Constants
import { ENDPOINT, ERROR_MESSAGE } from '@/constants';
//Models
import { Topics } from '@/models';

export const getTopics = async (): Promise<Topics> => {
  try {
    const response: Response = await fetch(
      `${process.env.BLOGS_API}${ENDPOINT.TOPICS}`,
    );
    const topics: Topics = await response.json();

    return topics;
  } catch (error) {
    throw new Error(ERROR_MESSAGE.FETCHING);
  }
};
