import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {  useTransaction } from '../../hooks/useTransactions';
import { formatCurrency } from '../utils/formatCurrency';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce((accumulator, transaction) => {
    if(transaction.type === 'deposit'){
      accumulator.deposits += transaction.amount;
      accumulator.total += transaction.amount;
    }else {
      accumulator.withdrawals += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
  },{
    deposits: 0,
    withdrawals: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas"/>
        </header>
        <strong>- {formatCurrency(summary.withdrawals)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}