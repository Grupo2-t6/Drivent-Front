import styled from 'styled-components';
import { useState } from 'react';

export default function Activitie({ value }) {
  const [confirm, setConfirm] = useState(false);
  
  const finalTimeArray = value.finalTime.split(':');
  let finalTime = Number(finalTimeArray[0]);
  const startTimeArray = value.startTime.split(':');
  let startTime = Number(startTimeArray[0]);
  const deltaTime = (finalTime-startTime);
  // console.log(deltaTime);
  return(
    <ActivitieStyled onClick={() => setConfirm(!confirm)} background={confirm ? '#D0FFDB' : '#E0E0E0'} heigth={80*deltaTime}>
      <h5>{value.name}</h5> 
      <h6>{value.startTime}-{value.finalTime}</h6>        
    </ActivitieStyled>
  );
};

const ActivitieStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  border-radius: 5px;
  height: ${props => props.heigth}px;
  margin-top: 10px;
  background-color: #F1F1F1;
  font-family: 'Roboto';
  background-color: ${(props) => props.background};
  
  h5{
    margin-top: 12px;
    margin-left: 4px;
    font-size: 12px;
    font-weight: 700;
  }
  h6{
    margin-top: 6px;
    margin-left: 4px;
    font-size: 12px;
  }
  @media (max-width: 700px) {
    margin-bottom: 5px;
  }
  `;
