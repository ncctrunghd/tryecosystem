import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './wagmi'
import { sdk } from './sdk'
import { useEffect } from "react";
import { CreateWalletButton } from './CreatWalletButton'
import { BatchTransactionComponent } from './interactTransaction';


function App() {
  const { isConnected } = useAccount();
  useEffect(() => {
    sdk.getEthereumProvider({policy: "pol_09d071fa-b91f-42e1-b594-c8f73edb3fe6"});
  }, []);
  if (isConnected)
    return (
      <WagmiProvider config={config}>
        {CreateWalletButton()}
      </WagmiProvider>
    )

  else
    return <BatchTransactionComponent />
}
export default App