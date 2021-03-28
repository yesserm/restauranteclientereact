import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import firebase, { FirebaseContext } from './firebase';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <div className="md:flex min-h-screen">
      <Sidebar />
        <div className="md:w-4/5 xl:w-4/5 p-6">
        <Routes>
            <Route exact="true" path='/' element={<Ordenes />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/nuevo-platillo' element={<NuevoPlatillo />} />
            </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
