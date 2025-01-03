import { sdk } from './sdk';

// Configure the provider with chain and policy
export const provider = sdk.getEthereumProvider({
  policy: 'pol_09d071fa-b91f-42e1-b594-c8f73edb3fe6'
});