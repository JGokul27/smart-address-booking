import React, { useState } from 'react';
import AddAddress from './components/AddAddress';
import ViewAddress from './components/ViewAddress';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  const fetchAddresses = () => {
    setRefresh(!refresh); 
  };

  return (
    <div className="App flex flex-col items-center justify-center">
      <h1 className='mb-10 text-5xl font-semibold text-slate-700 mt-12'>Smart Address Book</h1>
      <AddAddress fetchAddresses={fetchAddresses} />
      <ViewAddress />
    </div>
  );
}

export default App;