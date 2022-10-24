import styled from 'styled-components';
export default function Informations(props) {
  return (
    <>
      <OrderSummary>
        <h3>Ingresso escolhido</h3>
        {(props.type === true && props.hotel === true) ?
          <Information>
            <h3 className='text'> Presencial + Com hotel</h3>
            <h4>R$ {props.value}</h4>
          </Information>
          :
          (props.type === true && props.hotel === false) ?
            <Information>
              <h3 className='text'>Presencial + Sem hotel</h3>
              <h4>R$ {props.value} </h4>
            </Information>

            :
            <Information>
              <h3 className='text'>Online + Sem hotel</h3>
              <h4>R$ 100 </h4>
            </Information>
        }

      </OrderSummary>
    </>
  );
}
const OrderSummary = styled.div` 
display: flex;
flex-direction: column;
margin-top: 10px;
h3{ 
  color: #8E8E8E; 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 18px; 
  
} 
`;
const Information = styled.div` 
  width: 290px; 
  height: 108px; 
  background: #FFEED2; 
  border-radius: 20px; 
  margin-top: 20px; 
 display:flex; 
 flex-direction: column; 
 justify-content: center; 
   
.text{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 16px; 
  text-align: center; 
  color: #454545;
} 
h4{ 
  font-family: 'Roboto'; 
  font-style: normal; 
  font-weight: 400; 
  font-size: 18px; 
  text-align: center; 
  color: #898989;
  margin-top: 10px; 
} 
`;
