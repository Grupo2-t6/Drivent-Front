import HotelOptions from './HotelOptions';
import NotHosting from './NotHosting';
import { UseGetPayment } from '../../../hooks/api/useGetPayment';
import { useState, useEffect } from 'react';
import useToken from '../../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

export default function Hotel() {
  const navigate = useNavigate();

  const [valueHotel, setValueHotel] = useState('');
  const token = useToken();
  
  async function getTicktvalue() {
    const ticketValue = await UseGetPayment(token);
    if(ticketValue.data) {
      setValueHotel(ticketValue.data.ticketValue);
    };
  }

  useEffect(() => {
    if(token.length===0 || !token) {
      navigate('/sign-in');
    }
    else{
      getTicktvalue();
    }
  }, [setValueHotel, UseGetPayment, token]);

  return (
    <>
      { valueHotel===600 ?
        <HotelOptions/>
        :
        <NotHosting value={valueHotel}/>
      }
    </>
  );
}
