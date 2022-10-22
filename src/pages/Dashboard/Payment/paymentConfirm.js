import { AiFillCheckCircle }from 'react-icons/ai';
import styled from 'styled-components';

export default function PaymentConfirm() {
  return(
    <Container>
      <Check>
        <AiFillCheckCircle/>
      </Check>
      <div>
        <h4>Pagamento confirmado!</h4>
        <h4>Prossiga para escolha de hospedagem e atividades</h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    h4{
        font-size: 16px;
        font-weight: 700;
    }
    h4:last-child 
    {
        font-weight: 100;
        margin-top: 2px;
    }
`;

const Check = styled.div`
    *:last-child 
    {
    font-size: 28px;
    color: #36B853;
    width: 40px;
    height: 40px;
    margin-right: 14px;
    }
`;
