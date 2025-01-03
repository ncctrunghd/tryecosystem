import { http, createConfig } from 'wagmi';
import {  ancient8Sepolia} from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [ancient8Sepolia],
  connectors: [
    injected(),
  ],
  transports: {
    [ancient8Sepolia.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}