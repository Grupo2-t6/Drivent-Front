import HotelOptions from './HotelOptions';
import ReserveRoom from '../../../components/rooms/Bedroom';
import { useState } from 'react';
import HotelReservation from './HotelReservation';
export default function Hotel() {
  const [hotelIndex, setHotelIndex] = useState(null);
  const [hotelPage, setHotelPage] = useState(0);
  const [hotelPicked, setHotelPicked] = useState([]);
  return (
    <>
      {(hotelPage === 0) ?
        <>
          <HotelOptions setHotelIndex={setHotelIndex} setHotelPicked={setHotelPicked}/>
          <ReserveRoom hotelIndex={hotelIndex} setHotelPage={setHotelPage} />
        </>
        :
        <HotelReservation hotelPicked={hotelPicked} setHotelPage={setHotelPage} />
      }
    </>
  );
}

