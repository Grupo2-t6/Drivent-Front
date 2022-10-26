import styled from 'styled-components';
import { useState } from 'react';
import roomsData from './roomData';

function RoomBox(props) {
  return (
    <Box>
      <h2>{props.number}</h2>
      {
        (props.guest === 1) ?
          <Icones>
            <ion-icon name="person-outline"></ion-icon>
          </Icones>
          :
          (props.guest === 2) ?
            <Icones>
              <ion-icon name="person-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </Icones>
            :
            <Icones>
              <ion-icon name="person-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </Icones>
      }

    </Box>

  );
}
export default function ReserveRoom() {
  return (
    <Container>
      <h3>Ótima pedida! Agora escolha seu quarto:</h3>
      <BoxContainer>{roomsData[0].rooms.map((item) => <RoomBox number={item.number} guest={item.guest} />)}</BoxContainer>
    </Container>
  );
}

const Container = styled.div`

h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }
`;
const BoxContainer = styled.div`
 display: grid;
  grid-template-rows: 60px 60px 60px 60px;
  grid-auto-flow: column;
  margin-top: 20px;
`;
const Box = styled.div`
    width: 190px;
    height: 45px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;


h2{

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    margin-top: 12px;
    margin-left: 10px;
}

`
  ;
const Icones = styled.div`

ion-icon{
    margin-top: 12px;
    color: #000000;
    width: 20px;
    height: 20px;
}
    `;
<Icones>
  <ion-icon name="person-outline"></ion-icon>
  <ion-icon name="person-outline"></ion-icon>
  <ion-icon name="person-outline"></ion-icon>
</Icones>;
