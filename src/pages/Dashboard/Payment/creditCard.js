import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CreditCardData from './CreditCardData';
import PaymentConfirm from './paymentConfirm';

export default function CreditCard() {
  return(
    <CreditCardConteiner>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <h3>Pagamento</h3>
      <CreditCardData/>

    </CreditCardConteiner>
    
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const CreditCardConteiner = styled.div`
  width: 100%;
  height: 100%;
  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: 37px;
    margin-bottom: 10px;
    line-height: 23px;
    color: #8E8E8E;
  }
  div{
    /* display: block; */
  }
`;
