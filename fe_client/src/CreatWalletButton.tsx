import  { useCallback } from 'react';
import { WalletLogo } from './WalletLogo';
import { provider } from './provider';

const buttonStyles = {
  background: 'linear-gradient(135deg, #2D3436 0%, #000000 100%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxSizing: 'border-box' as const,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: 'auto',
  minWidth: '200px',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontWeight: '600',
  fontSize: '16px',
  color: '#FFFFFF',
  padding: '12px 20px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.06)',
  },
};

export function CreateWalletButton() { // handleSuccess, handleError
  const createWallet = useCallback(async () => {
    try {
      const address = await provider.request({
        method: 'eth_requestAccounts',
      });
      console.log(address)
    //   handleSuccess(address);
    } catch (error) {
      //handleError(error);
    }
  }, []);//handleSuccess, handleError

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <WalletLogo />
      Create Wallet
    </button>
  );
}