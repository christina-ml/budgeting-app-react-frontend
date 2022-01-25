// Dependencies
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Navbar total={total} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/transactions" element={<Index total={total} setTotal={setTotal} />} />
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
