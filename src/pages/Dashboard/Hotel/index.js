import HotelOptions from './HotelOptions';
import ReserveRoom from '../../../components/rooms/Bedroom';
import { useState } from 'react';
export default function Hotel() {
  const[hotelIndex, setHotelIndex] = useState(null);
  return (
    <>
      <HotelOptions setHotelIndex = {setHotelIndex} />
      <ReserveRoom hotelIndex = {hotelIndex}/>
    </>
  );
}

