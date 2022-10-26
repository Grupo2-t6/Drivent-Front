import HotelOptions from './HotelOptions';
import { useGetPayment } from '../../../hooks/api/useGetPayment';
import { useState, useEffect } from 'react';

export default  function Hotel() {
  const [valueHotel, setValueHotel] = useState('');

  async function value() {
    const value = await useGetPayment();
  };
 
  setValueHotel(value());
  
  console.log(valueHotel);
  return (
    <>
      <HotelOptions />
    </>
  );
}
