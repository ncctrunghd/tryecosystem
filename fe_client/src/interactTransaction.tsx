import { useWriteContracts, useCallsStatus } from 'wagmi/experimental'
import { parseAbi } from 'viem'

const abi = parseAbi([
    'function approve(address, uint256) returns (bool)',
    'function transferFrom(address, address, uint256) returns (bool)',
])

export function BatchTransactionComponent() {
    const { data: id, writeContracts } = useWriteContracts()
    const { data: callsStatus } = useCallsStatus({
        id: id as string,
        query: {
            enabled: !!id,
            // Poll every second until confirmed
            refetchInterval: (data) =>
                data.state.data?.status === "CONFIRMED" ? false : 1000,
        },
    })
    return (
        <div>
            <button
                onClick={() =>
                    writeContracts({
                        contracts: [
                            {
                                address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
                                abi,
                                functionName: 'approve',
                                args: [
                                    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
                                    100n
                                ],
                            },
                            {
                                address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
                                abi,
                                functionName: 'transferFrom',
                                args: [
                                    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
                                    '0x0000000000000000000000000000000000000000',
                                    100n
                                ],
                            },
                        ],
                    },
                    )
                }
            >
                Send calls
            </button>

            {
                callsStatus && (
                    <div >
                        <p >
                            Status: {callsStatus.status}
                        </p>
                        {callsStatus.status === 'CONFIRMED' && (
                            <p >
                                Transaction confirmed! Hash:
                            </p>
                        )}
                    </div>
                )
            }
        </div>
    )
}