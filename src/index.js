import { getEtherBalances } from '@mycrypto/eth-scan';

const envNetMapper = {
  mainnet: {
    rpcHost: 'https://rpc.exlscan.com',
    balanceScanner: '0x063e2c14c0de9cf5e49167eed9418109caf4b919',
    coinbase: '0x352dcaee65628424e43058d715a2e0399f5da78d'
  },
  testnet: {
    rpcHost: 'https://testnet-rpc.exlscan.com',
    balanceScanner: '0x67f7dcc2802effc207b433accc1ae6fcd5644cab',
    coinbase: '0xea17bc1d0750af8fb43b8e9ebe64a3c5090e162e'
  }
}

const runNote = () => console.log(
  '\n',
  'Balance Scanner on EXL-mainnet and EXL-testnet Volta',
  '\n'
);
runNote();

Object.entries(envNetMapper).forEach((
  [envNet, {rpcHost, balanceScanner, coinbase}]
) => {
  getEtherBalances(rpcHost, [
    coinbase
  ], {
    contractAddress: balanceScanner
  }).then(res => {
    console.log('-------------------')
    console.log('Environment',envNet)
    console.log('')
    console.log('getEtherBalances(\'' + rpcHost + '\', [')
    console.log('  \'' + coinbase + '\'')
    console.log('], {')
    console.log('  contractAddress: \'' + balanceScanner + '\'')
    console.log('}).then(console.log)')
    console.log(res)
  });    
})
