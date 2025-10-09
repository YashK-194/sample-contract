const { ethers } = require("ethers");
const { getBlocknumber, getBalance } = require("./functions/blockchainFunctions");
const { getNum, getStr, getBool, getAddressAtIdx, getStrMappedToAdd } = require("./functions/viewFunctions");
const { increaseNum, decreaseNum, mapStr, pushAddress, sendTo } = require("./functions/writeFuntions");

const address = "0xaBfa2B2C6817aFC6E0E0Bde4366D0270eAde1092";
const addressTwo = "0xA370F5A510a8DbB1a2955940A6d96D123e4AA97c";
const amount = "0.1";
const index = 0;

// // blockchain functions

// getBlocknumber();
// getBalance("0x01d86aedc8e126bb123e8dc4aa68f40186482f68");
// console.log(amount);
// // view functions

// getNum();
// getStr();
// getBool();
// getAddressAtIdx(index);
// getStrMappedToAdd(address);

// // write functions

// increaseNum();
// decreaseNum();
// mapStr();
// pushAddress();
sendTo(addressTwo, amount);
