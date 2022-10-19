import styled from 'styled-components';
import ticketData from './ticketData';

export default function Ticket({ value, type, uniqueValue, picked }) {
  function pickTicket(uniqueValue) {
    console.log(uniqueValue);
    //mandar uma requisição lá no db e mudar os dados de picked pra true e criar o db lá
    //dados não vão ser mais via ticketData 
    // fazer uma function que muda o picked pra true e false e depois confirmar no banco ao finalizar a compra do ticket 
    // a pessoa vai poder escolher entre os tickets sem fazer a requisião no db  e só será possivel a confirmação do ticket no final , quando 
    //clicar no botão
    //finalizar
  }
  return (
    <TicketsConteiner key={uniqueValue} onClick={pickTicket(uniqueValue)}>
      <TickerBody>
        <TicketContent>
          <h2>{type}</h2>
          <h4>{value}</h4>
        </TicketContent>
      </TickerBody>
    </TicketsConteiner>
  );
};

const TicketsConteiner = styled.div`
   width: 20%;
   margin-top: 2%;

  @media (max-width: 414px) {
    width: 55%;
  }
  @media (max-width: 912px) {
    width: 25%;
  }
  @media (max-width: 820px) {
    width: 27%;
  }
  @media (max-width: 768px) {
    width: 30%;
  }

`;

const TickerBody = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#FFFFFF;
`;

const TicketContent = styled.div`
display: flex;
flex-direction: column;
margin-top: 35%;
  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
  h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
