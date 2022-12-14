import HotelOptions from './HotelOptions';
import ReserveRoom from '../../../components/rooms/Bedroom';
import { useState } from 'react';
import HotelReservation from './HotelReservation';
import RoomContext from '../../../contexts/RoomContext';
import GuestContext from '../../../contexts/guestContext';
import OccupationContext from '../../../contexts/OccupationContext';

export default function Hotel() {
  const [hotelIndex, setHotelIndex] = useState(null);
  const [reserve, setReserve] = useState(false);
  const [hotelPicked, setHotelPicked] = useState([]);
  const [data, setData] = useState([]);
  const [roomInfo, setRoomInfo] = useState('');
  const [guestInfo, setGuestInfo] = useState('');
  const [occupation, setOccupation] = useState('');

  return (
    <>
      {(reserve === false) ?
        <>
          <OccupationContext.Provider value={{ occupation, setOccupation }}>
            <GuestContext.Provider value={{ guestInfo, setGuestInfo }}>
              <RoomContext.Provider value={{ roomInfo, setRoomInfo }}>
                <HotelOptions data={data} setHotelIndex={setHotelIndex} setHotelPicked={setHotelPicked} />
                <ReserveRoom data={data} hotelIndex={hotelIndex} setReserve={setReserve} hotelPicked={hotelPicked} />
              </RoomContext.Provider>
            </GuestContext.Provider>
          </OccupationContext.Provider>
        </>
        :
        <HotelReservation
          hotelPicked={hotelPicked}
          setData={setData}
          data={data}
          roomInfo={roomInfo}
          guestInfo={guestInfo}
          setReserve={setReserve}
          reserve={reserve}
          occupation={occupation} />
      }
    </>
  );
};

