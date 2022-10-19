import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';

export default function Payment() {
  return (
    <PaymentConteiner>
      <h1>Ingresso e pagamento</h1>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <div>
        {ticketData.map((e, index) => {
          return(
            <Ticket 
              uniqueValue={index}
              value={e.value}
              type={e.type}
            />
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
