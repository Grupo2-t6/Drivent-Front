import hotel1 from '../../../assets/images/hotel1.svg';
import { 
  HotelContainer, 
  HotelContent,
  HotelOption,
  HotelName,
  HotelInfo,
} from './style';

export default function HotelOptions() {
  return (
    <>
      <HotelContainer>
        <h1>Escolha de hotel e quarto</h1>
        <h3>Primeiro, escolha seu hotel</h3>
        <HotelContent>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
          <HotelOption>
            <div>
              <img src={hotel1} alt='hotel 1' />
            </div>
            <HotelName>Driven Resort</HotelName>
            <h4>Tipos de acomodação:</h4>
            <HotelInfo>Single e Double</HotelInfo>
            <h4>Vagas disponíveis:</h4>
            <HotelInfo>103</HotelInfo>
          </HotelOption>
        </HotelContent>
      </HotelContainer>
    </>
  );
};

