const { ethers } = require("ethers");

const num = 20

async function generate() {
    for (let i = 0; i < num; i++) {
        // uint256, 256/8 = 32 bytes
        let n = ethers.BigNumber.from(ethers.utils.randomBytes(32))
        console.log(n.toString())
    }
}

generate()
    .catch((err) => {console.log(err); process.exit(1)})