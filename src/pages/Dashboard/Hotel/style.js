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
    margin-top: 18px;
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

`;

export {
  HotelContainer,
  HotelContent,
  HotelFlex
}; 
