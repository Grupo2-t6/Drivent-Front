import PersonalInformationForm from '../../../components/PersonalInformationForm';
import api from '../../../services/api';
import UserContext from '../../../contexts/UserContext';
import { useState, useContext } from 'react';

export default function FillSubscription() {
  const { setUserData, userData } = useContext(UserContext);

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let code = params.code;
  signIn(code);
  
  async function signIn(code) {
    if(code) {
      const response = await api.post('auth/sign-in-oauth', { code });
      const token = response.data;
      const userData = { token };
      setUserData(userData);
      return response.data;
    };
  }

  return (
    <PersonalInformationForm />
  );
}
