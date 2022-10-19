import styled from 'styled-components';

export default function Ticket({ value, type }) {
  return (
    <TicketsConteiner>
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
