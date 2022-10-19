import { useState } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';

export default function Payment() {
  const handleSelect = (elementIndex) => {
    console.log(`You clicked on element with key ${elementIndex}`);

    //mandar uma requisição lá no db e mudar os dados de picked pra true e criar o db lá
    //dados não vão ser mais via ticketData 
    //e ai renderizar o background de acordo com o picked ( se true vai ser vermelho se false branco)
    // depois reduzir a seleção a um , então caso a pessoa clique no presencial , setar o online pra picked: false
    //finalizar
  };
  return (
    <PaymentConteiner>
      <h1>Ingresso e pagamento</h1>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <div >
        {ticketData.map((e, index) => {
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
    width: 75%;
  }
`;

const TicketsConteiner = styled.div`
   margin-top: 2%;

`;  
