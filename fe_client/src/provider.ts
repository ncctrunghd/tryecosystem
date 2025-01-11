import { sdk } from './sdk';

// Configure the provider with chain and policy
export const provider = sdk.getEthereumProvider({
  policy: 'pol_39612fcb-514a-42bb-a677-0238db6cb720'
});