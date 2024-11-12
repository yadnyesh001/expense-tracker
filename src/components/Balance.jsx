import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </div>
  );
}
