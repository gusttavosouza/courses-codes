import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModelOpen(true);
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModelOpen(false);
  }

  return (
    <TransactionProvider >
      <Header onOpenNewTRansactionModal={handleNewTransactionModalOpen}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
