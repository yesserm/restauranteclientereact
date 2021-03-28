import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <Router>
      <div className="md:flex min-h-screen">
        <Sidebar />
        <div className="md:w-4/5 xl:w-4/5">
          <Switch>
            <Route exact path='/' component={Ordenes} />
            <Route path='/menu' component={Menu} />
            <Route path='/nuevo-platillo' component={NuevoPlatillo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
