import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './wagmi'
import { sdk } from './sdk'
import { useEffect } from "react";
import { CreateWalletButton } from './CreatWalletButton'
import { BatchTransactionComponent } from './interactTransaction';


function App() {
  const { isConnected } = useAccount();
  useEffect(() => {
    sdk.getEthereumProvider();
  }, []);
  if (isConnected)
    return (
      <WagmiProvider config={config}>
        if()
        {CreateWalletButton()}
      </WagmiProvider>
    )

  else
    return <BatchTransactionComponent />
}
export default App