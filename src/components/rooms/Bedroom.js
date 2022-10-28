import styled from 'styled-components';
import { useState } from 'react';
import roomsData from './roomData';

function RenderIcons(props) {
  return (
    <>
      {
       
        (props.busy === 0) ?
          (props.painted === true) ?
            <IconsPink>
              <ion-icon className='pink' name="person"></ion-icon>
            </IconsPink>
            :
            <Icons >
              <ion-icon name="person-outline"></ion-icon>
            </Icons>
          :
          <SelectedIcons>
            <ion-icon name="person"></ion-icon>
          </SelectedIcons>
      }

    </>
  );
}
function RoomBox(props) {
  const[picked, setPicked] = useState (false);
  if(picked === true) {
    props.setButton(true);
  }
  function selectedRoom() {
    if(props.reserveButton === false) {
      setPicked(true);
    }
  }
  return (
    <>
      {(picked === true) ?

        <Box className = 'painted' onClick={selectedRoom}>
     
          <h2>{props.number}</h2>
          <BoxIcons>
            {
              (props.guest === 1) ?
                <RenderIcons busy={props.busy} painted = {picked} />
                :
                (props.guest === 2) ?
                  <>
                    <RenderIcons busy={props.busy} painted = {picked}/>
                    <RenderIcons busy={props.busy}/>
                  </>
                  :
                  <>
                    <RenderIcons busy={props.busy} painted = {picked}/>
                    <RenderIcons busy={props.busy} />
                    <RenderIcons busy={props.busy} />
                  </>
            }
          </BoxIcons>
        </Box>
        :
        (props.guest - props.busy !== 0) ?
       
          <Box onClick={selectedRoom}>
     
            <h2>{props.number}</h2>
            <BoxIcons>
              {
                (props.guest === 1) ?
                  <RenderIcons busy={props.busy} />
                  :
                  (props.guest === 2) ?
                    <>
                      <RenderIcons busy={props.busy} /><RenderIcons busy={props.busy} />
                    </>
                    :
                    <>
                      <RenderIcons busy={props.busy} />
                      <RenderIcons busy={props.busy} />
                      <RenderIcons busy={props.busy} />
                    </>
              }
            </BoxIcons>
          </Box>
    
          :
          <Box2>
     
            <h2>{props.number}</h2>
            <BoxIcons>
              {
                (props.guest === 1) ?
                  <RenderIcons busy={props.busy} />
                  :
                  (props.guest === 2) ?
                    <>
                      <RenderIcons busy={props.busy} /><RenderIcons busy={props.busy} />
                    </>
                    :
                    <>
                      <RenderIcons busy={props.busy} />
                      <RenderIcons busy={props.busy} />
                      <RenderIcons busy={props.busy} />
                    </>
              }
            </BoxIcons>
          </Box2>
      }
    
    </>
  );
}
export default function ReserveRoom(props) {
  const[reserveButton, setReserveButton] = useState(false);
  let hotelIndex = 0;
  if(props.hotelIndex  !== null) {
    hotelIndex = props.hotelIndex;
  }
  return (
    <>
      {
        (props.hotelIndex !== null) ?
          <Container>
            <h3>Ótima pedida! Agora escolha seu quarto:</h3>
            <BoxContainer>{roomsData[hotelIndex].rooms.map((item) => <RoomBox number={item.number} 
              guest={item.guest} 
              busy={item.busy} 
              setButton = {setReserveButton} 
              reserveButton = {reserveButton}/>)}
            </BoxContainer>
            { (reserveButton === true) ?
              <Buttom onClick={() => alert('em manutenção')}>
                <h3>Reservar Quarto</h3>
              </Buttom>
              :
              null
            } 
          </Container>
          : 
          null
      }
    </>
  );
}

const Container = styled.div`
margin-top: 50px;
h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }
`;
const BoxContainer = styled.div`
 display: grid;
  grid-template-rows: 60px 60px 60px 60px;
  grid-auto-flow: column;
  margin-top: 20px;

  .painted{
      background: #FFEED2;
    }

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
    margin-top: 15px;
    margin-left: 10px;
}

`
  ;

const Box2 = styled.div`
width: 190px;
height: 45px;
border: 1px solid #CECECE;
border-radius: 10px;
display: flex;
justify-content: space-between;
background-color: #E9E9E9;

h2{

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 17px;
margin-top: 15px;
margin-left: 10px;
color: #9D9D9D;
}

`
;

const Icons = styled.div`

ion-icon{
    margin-top: 12px;
    width: 20px;
    height: 20px; 
}
`;
const   SelectedIcons = styled.div`

ion-icon{
    margin-top: 12px;
    width: 20px;
    height: 20px;
    color: #8C8C8C;
}
`;
const   IconsPink = styled.div`

ion-icon{
    margin-top: 12px;
    width: 20px;
    height: 20px;
    color: #FF4791;
}
`;
const BoxIcons=styled.div`

display:flex;
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

  h3{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 14px; 
  text-align: center; 
  color: #000000; 
  width: 100%;
  } 
`
  ;
