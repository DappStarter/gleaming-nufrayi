require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember solid grid narrow furnace spoon'; 
let testAccounts = [
"0xca6a6d0e0b127077fb027d2d05c0ff71842e3aa1de05c2eced35d69d65eb23f5",
"0x6ced12a86f6fbcb07c93dac04c87c3468b0df388adb7a4f5f09ea8d4ff833d8a",
"0xe53f91be401dccf5cc0ddac8b1668f0cfb9d09e3dd9afc0e4b0d1d9abda46b4c",
"0x2a001db6b198e01598737477da5df7e7452088a74d011e8036766e845e0a9593",
"0x152f8c2d4b406b0f22360a7053d47dba07ba67e6949d2cf17961e21233d5349a",
"0x92533560d5b328300e5277ce08c6002ecb398b1c0cfb4d5fc61c3cc686a0185c",
"0x53a6128fbd6f98c5379e850fdd5530ad558ab6d08abae36713f921b2695dc05d",
"0x5ae15a747f1f91510da7f6e006497f98f7ab1301689434186f00db3d15e55ea3",
"0xff7b9d04a1f18206de4140a8c79fd3a62de71d2a0f2c1a41aa680267476dceea",
"0x856a699737263f19bb050d8521e98349b5a501ee6f0407f34d6cc3f3ca4d1db9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
