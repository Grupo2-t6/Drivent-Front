import { useEffect, useState } from 'react';
import useHotelReserve from '../../../hooks/api/useGerHotel';
import useHotel from '../../../hooks/api/useHotel';
import useUpdateRoomHotel from '../../../hooks/api/useUpdateRoomHotel';
import { Buttom, HotelContainer, HotelContent, HotelInfo, HotelName, HotelPicked } from './style';

export default function HotelReservation(props) {
  const hotelInfo = {
    roomNumber: props.roomInfo,
    hotelName: props.hotelPicked.name,
    image: props.hotelPicked.image,
    roomType: props.guestInfo,
    roomCount: props.occupation
  };
  useHotel(hotelInfo);

  const { hotel } = useHotelReserve();

  useEffect(() => {
    if (hotel) {
      props.setData({
        name: hotel.hotelName,
        roomNumber: hotel.roomNumber,
        roomType: hotel.roomType,
        image: hotel.image,
        roomCount: hotel.roomCount,
      });
    }
  }, [hotel]);
  function updateRoom() {
    useUpdateRoomHotel({ roomNumber: props.roomInfo });
  }
  updateRoom();
  if (props.data.length !== 0) {
    return (
      <>
        <HotelContainer>
          <h1>Escolha de hotel e quarto</h1>
          <h3>Você já escolheu seu quarto:</h3>
        </HotelContainer>
        <HotelContent>
          <HotelPicked>
            <div>
              <img src={props.data.image} alt='foto do hotel' />
            </div>
            <HotelName>{props.data.hotelName}</HotelName>
            <h4>Quarto reservado</h4>
            <HotelInfo>{props.data.roomNumber} {props.data.roomCount}</HotelInfo>
            <h4>Pessoas no seu quarto</h4>
            <HotelInfo>{props.data.roomType}</HotelInfo>
          </HotelPicked>
        </HotelContent>
        <Buttom onClick={() => props.setReserve(false)}>
          <h3>TROCAR DE QUARTO</h3>
        </Buttom>
      </>
    );
  };
  if (props.data.length === 0) {
    return (
      <>
        <HotelContainer>
          <h1>Escolha de hotel e quarto</h1>
          <h3>Você já escolheu seu quarto:</h3>
        </HotelContainer>
        <HotelContent>
          <HotelPicked>
            <div>
              <img src={props.hotelPicked.image} alt='foto do hotel' />
            </div>
            <HotelName>{props.hotelPicked.name}</HotelName>
            <h4>Quarto reservado</h4>
            <HotelInfo>{props.roomInfo} {props.occupation}</HotelInfo>
            <h4>Pessoas no seu quarto</h4>
            <HotelInfo>{props.guestInfo}</HotelInfo>
          </HotelPicked>
        </HotelContent>
        <Buttom onClick={() => props.setReserve(false)}>
          <h3>TROCAR DE QUARTO</h3>
        </Buttom>
      </>
    );
  }
}; 
