import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';
import useToken from '../useToken';

export default function useUpdateRoomHotel(hotelInfo) {
  const token = useToken();

  const {
    data: hotel,
    error: hotelError,
    act: updateHotelRoom
  } = useAsync(() => hotelApi.updateRoom(token, hotelInfo));

  return {
    hotel,
    hotelError,
    updateHotelRoom,
  };
}
