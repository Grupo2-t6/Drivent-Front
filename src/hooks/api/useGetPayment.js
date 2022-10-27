import { getPayment } from '../../services/getPaymentApi';
import useToken from '../../hooks/useToken';

export async function useGetPayment() {
  const token = useToken();
  const valueTicket = await getPayment(token);
  return valueTicket;
}  