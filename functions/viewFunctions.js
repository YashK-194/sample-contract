const { ethers } = require("ethers");
const { address, abi } = require("../utils/contractDetails");
const { provider } = require("../utils/utils");
require("dotenv").config();

const contract = new ethers.Contract(address, abi, provider);

async function getNum() {
	const num = await contract.num();
	console.log("Num is: " + parseInt(num));
}

async function getStr() {
	const str = await contract.str();
	console.log("Str is: " + str);
}

async function getBool() {
	const bool = await contract.isTrue();
	console.log("Bool is: " + bool);
}

async function getAddressAtIdx(idx) {
	const address = await contract.getAddressAtIdx(idx);
	console.log(`Address at ${idx} is: ` + address);
}

async function getStrMappedToAdd(address) {
	const string = await contract.addressToStr(address);
	console.log(`String mapped to this address is: ${string}`);
}

module.exports = { getNum, getStr, getBool, getAddressAtIdx, getStrMappedToAdd };
