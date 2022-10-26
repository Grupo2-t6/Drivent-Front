import styled from 'styled-components';

export default function HotelTicket({ name, img, accomodation, vacancies, picked }) {
  return (
    <HotelOption  background={picked ? '#FFEED2' : ' #F1F1F1'}>
      <div>
        <img src={img} alt='hotel 1' />
      </div>
      <HotelName>{name}</HotelName>
      <h4>Tipos de acomodação:</h4>
      <HotelInfo>{accomodation}</HotelInfo>
      <h4>Vagas disponíveis:</h4>
      <HotelInfo>{vacancies}</HotelInfo>
    </HotelOption>
  );
};

const HotelOption = styled.div`
margin-right: 20px;
width: 196px;
height: 264px;
background-color: ${(props) => props.background};
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

