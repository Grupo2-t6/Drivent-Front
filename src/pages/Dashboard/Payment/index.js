import { useState, useContext } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';
import withHotelData from '../../../components/tickets/hotelData';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Informations from '../../../components/ orderSummary ';
import CreditCardData from '../../../components/payment/CreditCardData';
import PaymentConfirm from '../../../components/payment/paymentConfirm';

export default function Payment() {
  const [selected, setSelected] = useState(ticketData);
  const [selectedHotel, setSelectedHotel] = useState(withHotelData);
  const [ispicked, setIspicked] = useState(0);
  const [hotelIsPicked, setHotelIsPicked] = useState(false);
  const { enrollment } = useEnrollment();
  const [sum, setSum] = useState(0);
  const [finish, setFinish] = useState(false);
  const [withHotel, setWithHotel] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleSelect = (elementIndex, object, keyIndex) => {
    let newData = [];
    let hotelNewData = [];
    let type = '';
    let hotelType = '';

    object.map((value, index) => {
      if (index === elementIndex && keyIndex === elementIndex + 1) {
        type = value.type;
        const data = {
          ...value,
          picked: true
        };
        newData.push(data);
      } else if (index === elementIndex && keyIndex === elementIndex + 3) {
        hotelType = value.type;
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
    if (type === 'presencial') setIspicked(1);
    if (type === 'online') setIspicked(2);
    if (keyIndex === elementIndex + 3) setSelectedHotel(hotelNewData);
    if (keyIndex === elementIndex + 1) setSelected(newData);
    if (hotelType === 'Com Hotel') {
      setWithHotel(true);
      setSum(600);
    }
    if (hotelType === 'Sem Hotel') {
      setWithHotel(false);
      setSum(250);
    }
  };

  if(enrollment){
  return (

    <PaymentContainer>
      <h1>Ingresso e pagamento</h1>

      {(finish === false) ?
        <>
          <h3>Primeiro, escolha sua modalidade de ingresso</h3>
          <div>
            {selected.map((e, index) => {
              let code = e.key;
              return (
                <TicketsContainer onClick={e => handleSelect(index, ticketData, code)}>
                  <Ticket
                    picked={e.picked}
                    uniqueValue={index}
                    value={e.value}
                    type={e.type}
                  />
                </TicketsContainer>
              );
            })}
          </div>
          {ispicked === 1 ?
            <>
              <h3>Ótimo! Agora escolha sua modalidade de hospedagem</h3>
              <div>
                {selectedHotel.map((e, index) => {
                  let code = e.key;
                  return (
                    <TicketsContainer onClick={e => handleSelect(index, withHotelData, code)}>
                      <Ticket
                        picked={e.picked}
                        uniqueValue={index}
                        value={e.value}
                        type={e.type}
                      />
                    </TicketsContainer>
                  );
                })}
              </div>
              {hotelIsPicked ?
                <ConfirmReservation>
                  <Pedido>
                    <h3>Fechado! O total ficou em </h3>
                    <h2> R$ {sum}.</h2>
                    <h3>Agora é só confirmar:</h3>
                  </Pedido>
                  <Buttom onClick={() => setFinish(true)}>
                    <h3>Reservar Ingresso</h3>
                  </Buttom>
                </ConfirmReservation>
                :
                <></>
              }
            </>
            :
            <OnlineConfirmation>
              { ispicked === 2 ?
                <>
                  <p>Fechado! O total ficou em <strong>{selected[1].value}</strong>. Agora é só confirmar.</p>
                  <button onClick={() => setFinish(true)}>RESERVAR INGRESSO</button>
                </>
                :
                <></>
              }
            </OnlineConfirmation>
          }
        </>
          :
        <>
        <Informations type={ispicked} value={sum} hotel={withHotel} />
        {isApproved ?
          <PaymentConfirm/>
          :
          <CreditCardData setIsApproved={setIsApproved}/>
        }
        </>
        }
    </PaymentContainer>
    );
  } else {
    return (
      <PaymentContainer>
        <UserNotOn>
          <p>Você precisa completar sua inscrição antes <br /> de prosseguir pra escolha de ingresso</p>
        </UserNotOn>
      </PaymentContainer>
    );
  }
}

const OnlineConfirmation = styled.div`
  margin-top: 2.75rem; 
  display: flex;
  flex-direction: column;
  p{
    font-family: 'Roboto';
    font-size: 1.2rem;
    color: #8E8E8E;
  }
  button{
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
    font-family: 'Roboto';
    margin-top: 1rem;
    color: black;
    width: 10rem;
    height: 2.4rem;
    font-size: 14px;
    transition: .2s ease-in-out;
  }
  button:active{
    transform: scale(0.98);
  }
`;

const UserNotOn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p{
    font-family: 'Roboto';
    font-size: 1.2rem;
    color: #8E8E8E;
  }
`;

const PaymentContainer = styled.div`
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

const TicketsContainer = styled.div`
   margin-top: 2%;
   width:  165px;
   
`;
const ConfirmReservation = styled.div`
display:flex;
flex-direction: column; 
`;
const Pedido = styled.div` 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 18px; 
  display: flex; 
  flex-direction: row; 
  margin-top: 20px;
  h3{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-size: 20px; 
  color: #8E8E8E; 
  margin-left: 5px; 
  } 
h2{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  margin-left: 5px; 
  font-size: 20px; 
  margin-top: 24px;
} 
`;
const Buttom = styled.div` 
  width: 162px; 
  height: 37px; 
  background: #E0E0E0; 
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25); 
  border-radius: 4px; 
  display: flex; 
  align-items: center; 
  margin-top: 20px;
  cursor: pointer;

  h3{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 14px; 
  text-align: center; 
  color: #000000; 
  width: 100%;
  padding-bottom: 10px;
  } 
`
  ;