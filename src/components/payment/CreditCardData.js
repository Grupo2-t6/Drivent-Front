import styled from 'styled-components';
import Button from '../Form/Button';
import { useState, useRef, useEffect, useContext } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import dayjs from 'dayjs';

import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { creditCardApi } from '../../services/creditCardApi';

export default function CreditCardData({ setIsApproved }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const navigate = useNavigate();
  const token = useToken();
  const value = 50;

  const thisMonth = dayjs(new Date()).format('YYYY-MM');

  useEffect(() => {
    ref.current.focus();
  }, []);

  async function pagar(e) {
    e.preventDefault();
    const paymentData = { name, number, expiry, cvc, value };
    const isApproved = await creditCardApi(paymentData, token);
    setIsApproved(isApproved);
  }  

  const ref = useRef(null);
  return (
    <>
      <h3>Pagamento</h3>
      <Container>
        
        <CardContainer>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </CardContainer>
        <form onSubmit={pagar}>
          <input
            type="number" 
            required 
            min="1000000000000000" 
            max="9999999999999999"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
          />
          <h4>E.g:49..., 51..., 36..., 37...</h4>
          <input
            type="text"
            required minLength="4" 
            maxLength="26"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <CvcAndValidate>
            <input
              type="month"
              min={thisMonth}
              name="expiry"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="number"
              name="cvc"
              min="100" 
              max="999" 
              required 
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </CvcAndValidate>
          <Button type="submit">
            FINALIZAR PAGAMENTO
          </Button>
        </form>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  input {
    width: 100%;
    display: block;
    margin: 10px auto;
    padding: 8px 16px;
    font-size: 16px;
    color: #222;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
  }

  h4{
    font-size: 13px;
    color: gray;
  }
  
  button{
    position: relative;
    top: 40px; left: -300px;
  }
  
  @media (max-width: 770px){
    flex-direction: column;
    justify-content: center;
    input{
      width: 80%;
    }
    h4{
      margin-left: 10%;
    }
    Button{
      position: relative;
      top: 20px; left: 10%;
      margin-bottom: 5px;
    }
  }
  `;

const CardContainer = styled.div`
  margin-right: 26px;
`;

const CvcAndValidate = styled.div`
  display: flex;
  input {
  /* width: 48%; */
  display: block;
  margin: 10px auto;
  padding: 8px 16px;
  font-size: 16px;
  color: #222;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 8px;
}
  input:last-child{
    width: 32%;
    margin-right: px;
  }
  input:first-child{
    width: 62%;
    margin-right: px;
  }

@media (max-width: 770px){
    /* flex-direction: column; */
    width: 82%;
    margin-left: 9%;
    justify-content: center;
  }
`;
