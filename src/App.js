import React from 'react';
import TransactionDashboard from './components/TransactionDashboard';
import { Route, Routes } from 'react-router-dom';
import Error404 from './components/Error404';


function App() {
  return (
    <div className='w-11/12 mx-auto mt-3'>
      <Routes>
        <Route path="/" element={<TransactionDashboard />} />  
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App; 