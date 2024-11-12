import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <ul className="list">
      {transactions.map(transaction => (
        <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>${Math.abs(transaction.amount)}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
      ))}
    </ul>
  );
}
