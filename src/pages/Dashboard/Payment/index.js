import { useState } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';

export default function Payment() {
  const [selected, setSelected] = useState(ticketData);
  const [ispicked, setIspicked] = useState(false);
  const handleSelect = (elementIndex) => {
    let newData = [];
    ticketData.map((value, index) => {
      if(index === elementIndex) {
        const data = {
          ...value,
          picked: true
        };
        newData.push(data);
      }else{
        const data = {
          ...value
        };
        newData.push(data);
      }
    });
    setSelected(newData);
  };
  return (
    <PaymentConteiner>
      <h1>Ingresso e pagamento</h1>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <div >
        {selected.map((e, index) => {
          return(
            <TicketsConteiner onClick={e => handleSelect(index)}>
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
    margin-top: 37px;
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
