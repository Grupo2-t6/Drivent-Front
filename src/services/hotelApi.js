import api from './api';

export async function postHotelInfo(token, body) {
  const response = await api.post('/hotel', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelReserve(token) {
  const response = await api.get('/hotel', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
 
  return response.data;
} 
