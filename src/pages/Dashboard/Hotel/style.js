import styled from 'styled-components';

const HotelContainer = styled.div`
width: 100%;
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
    line-height: 23px;
    color: #8E8E8E;
  }
`;

const HotelContent = styled.div`
margin-top: 2%;

`;

const HotelFlex = styled.div`
margin-top: 2%;
display: flex;
@media (max-width:760px) {
    flex-direction:column;
  }

`;
const NotHostingStyle = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 0;
  `;

const HotelPicked = styled.div`
margin-right: 20px;
width: 196px;
height: 264px;
background-color: #FFEED2;
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

export {
  HotelContainer,
  HotelContent,
  HotelFlex,
  HotelPicked,
  HotelName,
  HotelInfo,
  Buttom
}; 
