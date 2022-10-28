import HotelOptions from './HotelOptions';
import ReserveRoom from '../../../components/rooms/Bedroom';
import { useState } from 'react';
import HotelReservation from './HotelReservation';
import RoomContext from '../../../contexts/RoomContext';
import GuestContext from '../../../contexts/guestContext';
import OccupationContext from '../../../contexts/OccupationContext';
export default function Hotel() {
  const [hotelIndex, setHotelIndex] = useState(null);
  const [hotelPage, setHotelPage] = useState(0);
  const [hotelPicked, setHotelPicked] = useState([]);
  const [roomInfo, setRoomInfo] = useState('');
  const [guestInfo, setGuestInfo] = useState('');
  const [occupation, setOccupation] = useState('');

  return (
    <>
      {(hotelPage === 0) ?
        <>
          <OccupationContext.Provider value={{ occupation, setOccupation }}>
            <GuestContext.Provider value={{ guestInfo, setGuestInfo }}>
              <RoomContext.Provider value={{ roomInfo, setRoomInfo }}>
                <HotelOptions setHotelIndex={setHotelIndex} setHotelPicked={setHotelPicked} />
                <ReserveRoom hotelIndex={hotelIndex} setHotelPage={setHotelPage} />
              </RoomContext.Provider>
            </GuestContext.Provider>
          </OccupationContext.Provider>
        </>
        :
        <HotelReservation
          hotelPicked={hotelPicked}
          setHotelPage={setHotelPage}
          roomInfo={roomInfo}
          guestInfo={guestInfo}
          occupation={occupation} />
      }
    </>
  );
}

