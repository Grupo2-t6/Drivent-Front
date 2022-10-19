import styled from 'styled-components';
import Ticket from '../../../components/tickets';

export default function Payment() {
  return (
    <PaymentConteiner>
      <h1>Ingresso e pagamento</h1>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <div>
        <Ticket
          type={'presencial'}
          value={'R$ 250'}
        />
        <Ticket
          type={'online'}
          value={'R$ 100'}
        />
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
