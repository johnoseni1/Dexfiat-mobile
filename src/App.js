import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from './pages/Welcome';
import CreateWallet from './pages/Create-wallet';
import Mnemonic from './pages/Import-Wallet';
import CreateRecovery from './pages/Create-Recovery';
import Index from './pages/index';
// import AppContext from './Contexts/context';



function App() {
  return (
    <Router>
      {/* <PaymentContextProvider> */}
        {/* <CardContextProvider> */}
          {/* <TableContextProvider> */}
            <div className="app">
                <Switch>
                  <Route path="/" exact component={Welcome} />
                  <Route path="/createwallet" component={CreateWallet} />
                  <Route path="/importwallet" component={Mnemonic} />
                  <Route path="/createrecoveryphrase" component={CreateRecovery} />
                  <Route path="/index" component={Index} />
                </Switch>
            </div>
          {/* </TableContextProvider> */}
        {/* </CardContextProvider> */}
      {/* </PaymentContextProvider> */}
    </Router>
  );
}

export default App;
