import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: 'deposit' | 'withdraw';
  created_at: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;

interface TransactionProvidersProps {
  children: React.ReactNode;
}

interface TransactionContextProps {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);

export function TransactionProvider({ children }:TransactionProvidersProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response =>  setTransactions(response.data.transactions));
  },[])


  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('transactions', {...transactionInput, created_at: new Date()});
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction(){
  const context = useContext(TransactionContext);

  return context;
}