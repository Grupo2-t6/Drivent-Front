import { getPayment } from '../../services/getPaymentApi';

export async function UseGetPayment(token) {
  const valueTicket = await getPayment(token);
  return valueTicket;
}  
