const BlockChain = require('./blockchain')
const Block = require('./block/block')

let BlockCoin = new BlockChain()
BlockCoin.addBlock(new Block(1,"02/01/2020",{amount:2000}))
BlockCoin.addBlock(new Block(2,"03/01/2020",{amount:3000}))
BlockCoin.addBlock(new Block(3,"04/01/2020",{amount:4000}))
BlockCoin.addBlock(new Block(4,"05/01/2020",{amount:5000}))

console.log(BlockCoin.isChainValid())