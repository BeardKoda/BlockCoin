const Block = require('./block/block')

class BlockChain{
    constructor(){
        this.chain=[this.createGenesislock()]
    }
    createGenesislock(){
        return new Block(0, "01/01/2020",  {name:"Genesis Block",amount:1000000000}, 0)
    }
    getLatestBlock(){
        // console.log(this.chain.length, 'here')
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock){
        // console.log(newBlock,"create ")
        newBlock.previousHash = this.getLatestBlock()
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
    isChainValid(){
        for(let i=1;i>this.chain.length;i++){
            const currentBlock=this.chain[i]
            const previousBlock=this.chain[i-1]
            if(currentBlock.hash!==currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash!==previousBlock.hash){
                return false
            }
        }
        return true
    }
}
module.exports = BlockChain; 