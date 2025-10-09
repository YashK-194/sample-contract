## Sample Contract (ethers.js examples)

This repository contains a simple Solidity contract (`contract/SampleContract.sol`) and a small Node.js/ethers.js project that demonstrates how to read from and write to the contract using a JsonRpc provider and a wallet.

It is intended as a minimal learning example for interacting with Ethereum-like chains (this project is configured to use Sepolia via an RPC URL).

## Repository layout

-   `main.js` — Example entrypoint that imports helper functions and demonstrates how to call them (commented by default).
-   `contract/SampleContract.sol` — Example Solidity contract used for the ABI and reference.
-   `functions/` — JS helpers grouped by purpose:
    -   `blockchainFunctions.js` — provider-based read helpers (block number, balance).
    -   `viewFunctions.js` — read-only contract calls (num, str, isTrue, mappings, etc.).
    -   `writeFuntions.js` — state-changing contract calls (increaseNum, decreaseNum, mapStr, pushAddress, sendTo).
-   `utils/` — small utilities:
    -   `contractDetails.js` — contract `address` and `abi` used by the helpers.
    -   `utils.js` — provider and wallet initialization using environment variables.

## Prerequisites

-   Node.js (>= 16, recommended >=18). The project uses CommonJS `require()`.
-   npm (or a compatible package manager).
-   An RPC URL for the Sepolia network (or any JSON-RPC compatible endpoint) and a funded private key for transactions.

## Environment variables

Create a `.env` file in the project root with the following variables:

```
SEPOLIA_RPC_URL="https://your_rpc_url_here"
PRIVATE_KEY="0xyour_private_key_here"
```

Notes:

-   `SEPOLIA_RPC_URL` can be any RPC endpoint for the network you want to use. The code uses `process.env.SEPOLIA_RPC_URL` in `utils/utils.js`.
-   `PRIVATE_KEY` is used to create a `Wallet` for signing transactions. Keep it secret and do not commit it to source control.

If you only want to call read-only functions you can omit `PRIVATE_KEY` (but some helper files still import `wallet`), however write functions require a funded account.

## Install

From the project root:

```bash
npm install
```

This will install `ethers` and `dotenv` (declared in `package.json`).

## How to run

1. Configure `.env` as shown above.
2. Edit `main.js` and uncomment the helper calls you want to run. Example calls are already present in `main.js` with example arguments. For example, to see the current block number and contract `num` value:

```js
// blockchain functions
getBlocknumber();

// view functions
getNum();
getStr();
```

3. Run the file with Node:

```bash
node main.js
```

Notes on usage:

-   Read-only functions (in `functions/viewFunctions.js` and `functions/blockchainFunctions.js`) use the provider only. They do not require signing or funds.
-   Write functions (in `functions/writeFuntions.js`) use the `wallet` from `utils/utils.js` and create signed transactions — your private key must be set and the account must have enough ETH on the selected network.
-   The contract address used by the helpers is defined in `utils/contractDetails.js`. If you deploy your own copy of the contract you must update that file with the new address and ABI.

## Deploying the contract

This repository does not include a deployment script. You can deploy `contract/SampleContract.sol` using one of the following methods:

-   Remix (quick): paste the contract into the Remix editor and deploy it to Sepolia or a local node, then copy the deployed address into `utils/contractDetails.js`.
-   Hardhat/Foundry: add a small deploy script and update `utils/contractDetails.js` with the deployed address and the ABI.

If you want, I can add a small Hardhat deploy script and a convenience script in `package.json`.

## Example usage scenarios

-   Check chain status:
    -   `getBlocknumber()` — prints current block number
    -   `getBalance(address)` — prints the balance for `address`
-   Read contract state:
    -   `getNum()`, `getStr()`, `getBool()`
    -   `getAddressAtIdx(idx)`, `getStrMappedToAdd(address)`
-   Change contract state (requires funded `PRIVATE_KEY`):
    -   `increaseNum(by)`, `decreaseNum(by)`, `mapStr(message)`, `pushAddress()`
    -   `sendTo(to, amount)` — calls the contract's `sendTo` function and forwards ETH. `amount` is a string like `"0.1"`.

## Troubleshooting

-   Provider connection errors:
    -   Ensure `SEPOLIA_RPC_URL` is correct and reachable.
    -   Make sure your RPC provider supports the network you intend to use.
-   Insufficient funds / failed transactions:
    -   Ensure the `PRIVATE_KEY` account has enough ETH for gas and value you are sending.
    -   Check transaction receipts and error messages printed by `ethers`.
-   Wrong contract address/ABI:
    -   If you deploy a new contract, update `utils/contractDetails.js` with the new address and the corresponding ABI.

## Security

-   Never commit `.env` or private keys to version control.
-   Use a hardware wallet or remote signer for production secrets when possible.

## Next steps (optional)

-   Add a deployment script (Hardhat/Foundry) and a `scripts` entry in `package.json` to deploy and to run common tasks.
-   Add typed wrappers or TypeChain for safer contract interaction.

---
