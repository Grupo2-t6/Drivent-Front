import styled from 'styled-components';
import { useState } from 'react';

export default function Ticket({ value, type, uniqueValue, picked }) {
  return (
    <TickerBody background={picked ? '#FFEED2' : ' #FFFFFF'}>
      <TicketContent>
        <h2>{type}</h2>
        <h4>R${value}</h4>
      </TicketContent>
    </TickerBody>
  );
};

const TickerBody = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.background};
  cursor: pointer;
`;

const TicketContent = styled.div`
display: flex;
flex-direction: column;
margin-top: 35%;

  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
  h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
