import styled from 'styled-components';
import hotel1 from '../../../assets/images/hotel1.svg';

export default function HotelOptions() {
  return (
    <>
      <HotelContainer>
        <h1>Escolha de hotel e quarto</h1>
        <h3>Primeiro, escolha seu hotel</h3>
        <HotelContent>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
        </HotelContent>
      </HotelContainer>
    </>
  );
};

const HotelContainer = styled.div`
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
    margin-top: 18px;
    line-height: 23px;
    color: #8E8E8E;
  }
`;

const HotelContent = styled.div`
margin-top: 2%;
display: flex;

`;

const HotelOption = styled.div`
background-color: pink;
margin-right: 20px;
width: 196px;
height: 264px;
background: #F1F1F1;
border-radius: 10px;
div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  margin-top: 6%;
}
h4{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-left: 7%;
  margin-top: 10px;
  color: #3C3C3C;
}

`;

const HotelName = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #343434;
  margin-left: 7%;
`;

const HotelInfo = styled.h5`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-left: 7%;
`; 
