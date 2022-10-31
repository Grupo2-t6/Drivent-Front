import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';
import useToken from '../useToken';

export default function useHotel(hotelInfo) {
  const token = useToken();

  const {
    data: hotel,
    error: hotelError,
    act: postHotelInfo
  } = useAsync(() => hotelApi.postHotelInfo(token, hotelInfo));

  return {
    hotel,
    hotelError,
    postHotelInfo,
  };
}
