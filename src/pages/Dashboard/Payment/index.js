import { useState, useContext } from 'react';
import styled from 'styled-components';
import Ticket from '../../../components/tickets';
import ticketData from '../../../components/tickets/ticketData';
import withHotelData from '../../../components/tickets/hotelData';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [selected, setSelected] = useState(ticketData);
  const [selectedHotel, setSelectedHotel] = useState(withHotelData);
  const [ispicked, setIspicked] = useState(false);
  const [hotelIsPicked, setHotelIsPicked] = useState(false);

  const { enrollment } = useEnrollment();
  
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

  if(enrollment){
    return(
    <PaymentContainer>
        <>
        <h1>Ingresso e pagamento</h1>
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
        {ispicked ?
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
              <h1>button</h1>
              :
              <></>
            }
          </>
          :
          <OnlineConfirmation>
            <p>Fechado! O total ficou em <strong>{selected[1].value}</strong>. Agora é só confirmar.</p>
            <button>RESERVAR INGRESSO</button>
          </OnlineConfirmation>
        }
      </>
    </PaymentContainer>
    )
  } else{
    return(
    <PaymentContainer>
      <UserNotOn>
        <p>Você precisa completar sua inscrição antes <br/> de prosseguir pra escolha de ingresso</p>
      </UserNotOn>
    </PaymentContainer>
    )
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
`

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
`

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
