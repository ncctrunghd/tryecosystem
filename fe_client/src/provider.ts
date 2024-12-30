import { sdk } from './sdk';

// Configure the provider with chain and policy
export const provider = sdk.getEthereumProvider({
  policy: 'process.env.NEXT_PUBLIC_POLICY_ID'
});