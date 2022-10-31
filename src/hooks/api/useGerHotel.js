import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelReserve() {
  const token = useToken();
  
  const {
    data: hotel,
    error: hotelError,
    loading: hotelLoading,
    act: getHotelReserve
  } = useAsync(() => hotelApi.getHotelReserve(token));

  return {
    hotel,
    hotelError,
    hotelLoading,
    getHotelReserve,
  };
}  
