import { useState } from 'react';
import HotelTicket from '../../../components/HotelOPtions';
import HotelOptionsData from '../../../components/HotelOPtions/HotelOptionsData';
import {
  HotelContainer,
  HotelContent,
  HotelFlex
} from './style';

export default function HotelOptions() {
  const [options, setOptions] = useState(HotelOptionsData);
  
  const handleSelect = (elementIndex, object) => {
    let newData = [];
    object.map((value, index) => {
      if (index === elementIndex) {
        const data = {
          ...value,
          picked: true
        };
        newData.push(data);
      } else {
        const data = {
          ...value
        };
        newData.push(data);
      };
    });
    setOptions(newData);
  };
  return (
    <>
      <HotelContainer>
        <h1>Escolha de hotel e quarto</h1>
        <h3>Primeiro, escolha seu hotel</h3>
        <HotelFlex>
          {options.map((e, index) => {
            return (
              <HotelContent onClick={e => handleSelect(index, HotelOptionsData)}>
                <HotelTicket
                  name={e.name}
                  vacancies={e.vacancies}
                  accomodation={e.accommodation}
                  img={e.image}
                  key={index}
                  picked={e.picked}
                />
              </HotelContent>
            );
          })}
        </HotelFlex>
      </HotelContainer>
    </>
  );
};

