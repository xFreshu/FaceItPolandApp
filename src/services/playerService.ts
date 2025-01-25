import axios from 'axios';

const API_BASE_URL: string = 'https://open.faceit.com/data/v4';
const API_KEY: string | undefined = '9276c41f-dbd2-4ba5-908f-042d5d592ec6';

export const getPlayerDetails = async (nickname: string): Promise<any> => {
  try {
    const url = `${API_BASE_URL}/players`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        nickname,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching player details:', error);
    throw new Error('Could not fetch player details.');
  }
};
