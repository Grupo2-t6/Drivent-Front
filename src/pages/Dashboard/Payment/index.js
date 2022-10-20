import { useState } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';
import withHotelData from '../../../components/tickets/hotelData';

export default function Payment() {
  const [selected, setSelected] = useState(ticketData);
  const [selectedHotel, setSelectedHotel] = useState(withHotelData);
  const [ispicked, setIspicked] = useState(false);
  const [hotelIsPicked, setHotelIsPicked] = useState(false);
  const handleSelect = (elementIndex, object, keyIndex) => {
    let newData = [];
    let hotelNewData = [];
    let type = '';
    object.map((value, index) => {
      if (index === elementIndex && keyIndex === elementIndex + 1) {
        type = value.type;
        const data = {
          ...value,
          picked: true
        };
        newData.push(data);
      } else if (index === elementIndex && keyIndex === elementIndex + 3) {
        const data = {
          ...value,
          picked: true
        };
        setHotelIsPicked(true);
        hotelNewData.push(data);
      } else if (index !== elementIndex && keyIndex === elementIndex + 1) {
        const data = {
          ...value
        };
        newData.push(data);
      } else if (index !== elementIndex && keyIndex === elementIndex + 3) {
        const data = {
          ...value
        };
        hotelNewData.push(data);
      }
    });
    if (type === 'presencial') setIspicked(true);
    if (type === 'online') setIspicked(false);
    if (keyIndex === elementIndex + 3) setSelectedHotel(hotelNewData);
    if (keyIndex === elementIndex + 1) setSelected(newData);
  };

  return (
    <PaymentConteiner>
      <h1>Ingresso e pagamento</h1>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <div>
        {selected.map((e, index) => {
          let code = e.key;
          return (
            <TicketsConteiner onClick={e => handleSelect(index, ticketData, code)}>
              <Ticket
                picked={e.picked}
                uniqueValue={index}
                value={e.value}
                type={e.type}
              />
            </TicketsConteiner>
          );
        })}
      </div>
      {ispicked ?
        <>
          <h3>Ótimo! Agora escolha sua modalidade de hospedagem</h3>
          <div>
            {selectedHotel.map((e, index) => {
              let code = e.key;
              return (
                <TicketsConteiner onClick={e => handleSelect(index, withHotelData, code)}>
                  <Ticket
                    picked={e.picked}
                    uniqueValue={index}
                    value={e.value}
                    type={e.type}
                  />
                </TicketsConteiner>
              );
            })}
          </div>
          {hotelIsPicked ?
            <h1>buton</h1>
            :
            <></>
          }
        </>
        :
        <h1>buton</h1>
      }
    </PaymentConteiner>
  );
}

const PaymentConteiner = styled.div`
  width: 100%;
  height: 100%;
  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  }
  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }
  div{
    display: flex;
    
  }
`;

const TicketsConteiner = styled.div`
   margin-top: 2%;
   width:  165px;
   
`;  
