const {Blockchain, Transaction} = require('./blockchain');

const EC = require ('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d7664804f2aaf662efa86fd70cf222481a1402b7921462543f9c393cece80712');
const myWalletAddress = myKey.getPublic('hex');


let savjeeCoin = new Blockchain();
//console.log('Mining block 1...');
//savjeeCoin.addBlock(new Block("10/07/2017", {amount: 4}));
//console.log('Mining block 2...');
//savjeeCoin.addBlock(new Block("12/07/2017", {amount: 10}));

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

//savjeeCoin.createTransaction(new Transaction('address1','address2' ,100));
//savjeeCoin.createTransaction(new Transaction('address2','address1' ,50));


console.log('\n Starting the miner ...');
savjeeCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress(myWalletAddress));

console.log('\n Starting the miner ...');
savjeeCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress(myWalletAddress));
//savjeeCoin.minePendingTransactions('xavier-address');
//console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress('xavier-address'));

//console.log('\n Starting the miner ...');
//savjeeCoin.minePendingTransactions('xavier-address');
//console.log('\n Balance of xavier is', savjeeCoin.getBalanceofAddress('xavier-address'));


//console.log(" Is blockchain valid ?", savjeeCoin.isChainValid());
//console.log(JSON.stringfy(savjeeCoin, null, 4));
