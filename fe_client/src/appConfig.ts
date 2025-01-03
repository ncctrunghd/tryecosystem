import { AppMetadata, Client } from "@openfort/ecosystem-js/client";

class EcosystemWallet extends Client {
    constructor(appMetadata?: AppMetadata) {
        super({
            baseConfig: {
                // ecosystemWalletDomain: 'https://id.sample.openfort.xyz',
                ecosystemWalletDomain: 'https://beaches-elite-and-its.trycloudflare.com',
                ecosystemId: 'test-29d55ffd-6e21-4939-bd26-ff2c79299c8d',
            },
            appMetadata,
        });

        return new Proxy(this, {
            get: (target, prop) => {
                if (prop in target) {
                    const value = target[prop as keyof EcosystemWallet];
                    return typeof value === 'function' ? value.bind(target) : value;
                }
                return undefined;
            }
        });
    }
}

export default EcosystemWallet;