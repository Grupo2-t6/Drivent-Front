import { HotelContainer, NotHostingStyle } from './style';

export default function NotHosting( { value } ) {
  // console.log(value);
  return (
    <>
      <HotelContainer>
        <h1>Escolha de hotel e quarto</h1>
        {value===0 
          ?
          <NotHostingStyle>
            <h3>Você precisa ter confirmado pagamento antes</h3>
            <h3>de fazer a escolha de hospedagem</h3>
          </NotHostingStyle>
          :
          <NotHostingStyle>
            <h3>Sua modalidade de ingresso não inclui hospedagem</h3>
            <h3>Prossiga para a escolha de atividades</h3>
          </NotHostingStyle>
        }
      </HotelContainer> 
    </>    
  );
}

