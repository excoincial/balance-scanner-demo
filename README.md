# Balance Scanner contract Demo on EXL-Mainnet and EXL-Volta
[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)
[![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![GitHub license](https://badgen.net/github/license/excoincial-blockchain/balance-scanner-demo)](https://github.com/excoincial-blockchain/balance-scanner-demo/blob/master/LICENSE)

[![GitHub watchers](https://img.shields.io/github/watchers/excoincial-blockchain/balance-scanner-demo.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/excoincial-blockchain/balance-scanner-demo/watchers/)

### Prototyped from Nodejs-ES6-Boilerplate
[![Made in Indonesia](https://made-in-indonesia.github.io/made-in-indonesia.svg)](https://github.com/made-in-indonesia/made-in-indonesia)

A Node.js boilerplate with ES6, ESLint, and Prettier

<!-- https://github.com/acekyd/made-in-nigeria/blob/master/contributing.md -->

## Usage

1. Clone the repository and init new git project

```bash
$ git clone git@github.com:excoincial-blockchain/balance-scanner-demo.git ./your/project/folder
$ cd ./your/project/folder
```

2. Install dependencies

```bash
$ yarn install
```
3. Run demo script

``` sh
$ yarn start

Balance Scanner on EXL-mainnet and EXL-testnet Volta 

-------------------
Environment mainnet
```
``` js
getEtherBalances('https://rpc.exlscan.com', [
  '0x352dcaee65628424e43058d715a2e0399f5da78d'
], {
  contractAddress: '0x063e2c14c0de9cf5e49167eed9418109caf4b919'
}).then(console.log)
```
``` json
{ '0x352dcaee65628424e43058d715a2e0399f5da78d': 8215556000000000n }
```
``` sh
-------------------
Environment testnet
```
``` js
getEtherBalances('https://testnet-rpc.exlscan.com', [
  '0xea17bc1d0750af8fb43b8e9ebe64a3c5090e162e'
], {
  contractAddress: '0x67f7dcc2802effc207b433accc1ae6fcd5644cab'
}).then(console.log)
```
``` json
{ '0xea17bc1d0750af8fb43b8e9ebe64a3c5090e162e': 344111225000000000n }
```
``` sh
Done in 1.34s.
```

## Scripts

```bash
# Run the project without nodemon
yarn start

# Build the project
yarn build

# Clean build
yarn clean

# Check the lint errors
yarn lint

# Fix the lint errors
yarn lint:fix

# Run prettier
yarn format

# Check prettier errors
yarn format:check
```

## Background

Veri Ferdiansyah created a boilerplate because having several coding interviews that needs to be done using JavaScript.

## Smart contract

### Deployed on EXL mainnet

[![Balance Scanner EXL](https://img.shields.io/badge/BalanceScanner%20Mainnet-EXL%20smart%20contract-yellow.svg)](https://exlscan.com/address/0x063E2C14c0dE9cF5E49167EEd9418109caF4B919/transactions)

### Deployed on EXL-Volta testnet

[![Balance Scanner TEXL](https://img.shields.io/badge/BalanceScanner%20Testnet-TEXL%20smart%20contract-blue.svg)](https://testnet-explorer.exlscan.com/address/0x67f7DcC2802eFfc207b433accC1Ae6FcD5644CAb/transactions)


### prototyped

[![Balance Scanner Ethereum](https://img.shields.io/badge/BalanceScanner-ETH%20smart%20contract-darkBlue.svg)](https://etherscan.io/address/0x86f25b64e1fe4c5162cdeed5245575d32ec549db)


#

Copyright (c) 2020 Veri Ferdiansyah

Copyright (c) 2022 Oleksandr Papevis

Licensed under the MIT license.
