import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from './pages/Welcome';
import CreateWallet from './pages/Create-wallet';
import Mnemonic from './pages/Import-Wallet';
import CreateRecovery from './pages/Create-Recovery';
import Index from './pages/index';
import Index2 from './pages/index2';
import Liquidity from './pages/liquididty';
import Swap from './pages/swap-first';
import Pool from './pages/Pool';
import ConvertDft from './pages/ConvertDft';
import Comingsoon from './pages/Coming-soon';
import Invest from './pages/Invest';
import Send from './pages/Send';
import Dndsend from './pages/Dnd-send';
import Receivefiat from './pages/Receieve-fiat';
import Chainlinks from './pages/Chain-links';
import Linksend from './pages/Link-send';
import Receivelink from './pages/Receive-Link';
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
                  <Route path="/fiatbalance" component={Index2} />
                  <Route path="/liquidity" component={Liquidity} />
                  <Route path="/swap" component={Swap} />
                  <Route path="/pool" component={Pool} />
                  <Route path="/convertdft" component={ConvertDft} />
                  <Route path="/comingsoon" component={Comingsoon} />
                  <Route path="/invest" component={Invest} />
                  <Route path="/send" component={Send} />
                  <Route path="/dndsend" component={Dndsend} />
                  <Route path="/receivefiat" component={Receivefiat} />
                  <Route path="/chainlinks" component={Chainlinks} />
                  <Route path="/linksend" component={Linksend} />
                  <Route path="/receivelink" component={Receivelink} />
                </Switch>
            </div>
          {/* </TableContextProvider> */}
        {/* </CardContextProvider> */}
      {/* </PaymentContextProvider> */}
    </Router>
  );
}

export default App;
