import axios from 'axios';
import { useEffect, useState } from 'react';

// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';

// CSS
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/transactions`)
          .then((res)=>{
              setTransactions(res.data);
          }).catch((err)=>{
              throw err;
          })
      }, []);

  /* Find the Bank Account Total (sum of transaction.amount) */
  const numbersToAddArray = transactions.map((transaction)=>{
      return transaction.amount;
  })
  const findSum = numbersToAddArray.reduce(function(a, b){
      return a + Number(b);
  }, 0);

  return (
    <div className="App">
      <Navbar findSum={findSum} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/transactions" element={<Index findSum={findSum} />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:id" element={<Show />} />
          <Route path="/transactions/:id/edit" element={<Edit />} />
          <Route path="/*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;