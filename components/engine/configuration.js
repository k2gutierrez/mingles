import SimpleCrypto from "simple-crypto-js";

const cipherKey = "ff#$ldie#GkeW#$rv%guydsl"
const ethraw = "0x" /* eth private key */
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" /* hardhat private key */

export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

export var hhresell = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
export var hhnftcol = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
var hhrpc = "http://127.0.0.1:8545"

export var mainnet = hhrpc