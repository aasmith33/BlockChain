const { Blockchain, Transaction } = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('7c527b6eafd33e3471e645ea4d96f8d9db15616c4a3026530880a1831d7ad95e8');


const myWalletAddress = myKey.getPublic('hex');


const KennedyCoin = new Blockchain();


KennedyCoin.minePendingTransactions(myWalletAddress);


const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
KennedyCoin.addTransaction(tx1);


KennedyCoin.minePendingTransactions(myWalletAddress);


const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
KennedyCoin.addTransaction(tx2);


KennedyCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Eleanor is ${KennedyCoin.getBalanceOfAddress(myWalletAddress)}`);


console.log();
console.log('Blockchain valid?', KennedyCoin.isChainValid() ? 'Yes' : 'No');