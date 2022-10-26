import styled from 'styled-components';

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

export {
  HotelContainer,
  HotelInfo,
  HotelName,
  HotelOption,
  HotelContent
}; 
