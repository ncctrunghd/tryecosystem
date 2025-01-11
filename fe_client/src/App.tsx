import { sdk } from './sdk'
import { useEffect } from "react";
// import { BatchTransactionComponent } from './interactTransaction';
import CreateWalletButton from "../page/CreatWalletButton";
import BatchTransactionComponent from "../page/interactTransaction";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  useEffect(() => {
    sdk.getEthereumProvider({ policy: "pol_39612fcb-514a-42bb-a677-0238db6cb720" });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateWalletButton />} />
        <Route path="/Interact" element={<BatchTransactionComponent />} />
      </Routes>
    </Router>
  );
}
export default App