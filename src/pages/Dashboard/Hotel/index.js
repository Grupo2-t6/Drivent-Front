import HotelOptions from './HotelOptions';
import NotHosting from './NotHosting';
import { useGetPayment } from '../../../hooks/api/useGetPayment';
import { useState, useEffect } from 'react';

export default function Hotel() {
  const [valueHotel, setValueHotel] = useState('');

  async function getvalue() {
    const value = await useGetPayment();
  };
 
  // setValueHotel(getvalue());
  
  console.log(valueHotel);
  return (
    <>
      <NotHosting />
    </>
  );
}
