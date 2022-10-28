import { Buttom, HotelContainer, HotelContent, HotelInfo, HotelName, HotelPicked } from './style';

export default function HotelReservation(props) {
  return (
    <>
      <HotelContainer>
        <h1>Escolha de hotel e quarto</h1>
        <h3>Você já escolheu seu quarto:</h3>
      </HotelContainer>
      <HotelContent>
        <HotelPicked>
          <div>
            <img  src={props.hotelPicked.image} alt='foto do hotel'/>
          </div>
          <HotelName>{props.hotelPicked.name}</HotelName>
          <h4>Quarto reservado</h4>
          <HotelInfo>{props.roomInfo} {props.occupation}</HotelInfo>
          <h4>Pessoas no seu quarto</h4>
          <HotelInfo>{props.guestInfo}</HotelInfo>
        </HotelPicked>
      </HotelContent>
      <Buttom onClick={() => props.setHotelPage(0)}>
        <h3>TROCAR DE QUARTO</h3>
      </Buttom>
    </>
  );
};  
