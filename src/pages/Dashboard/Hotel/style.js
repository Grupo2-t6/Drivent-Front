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
    c
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

export {
  HotelContainer,
  HotelContent,
  HotelFlex,
  NotHostingStyle
}; 
