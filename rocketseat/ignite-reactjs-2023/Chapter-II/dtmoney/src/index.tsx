import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 1000,
          category: 'Salário',
          type: 'deposit',
          created_at: new Date('2020-01-01 09:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', (schema) => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
