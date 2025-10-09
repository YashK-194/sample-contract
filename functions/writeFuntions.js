const { ethers } = require("ethers");
const { wallet } = require("../utils/utils");
const { address, abi } = require("../utils/contractDetails");

// write function require sending some eth to change the state of the blockchain and for sending eth,
// transactions are created, those transactions are signed by our wallet

// here we are interacting with the blockchain via backend
// in frontend, we will interact with metamask
const contract = new ethers.Contract(address, abi, wallet);

async function increaseNum(by) {
	console.log("----- Increasing Number -----");
	let tx = await contract.increaseNum(by);
	await tx.wait();
	console.log("----- Number increased -----");
}

async function decreaseNum(by) {
	console.log("----- Decreasing Number -----");
	let tx = await contract.decreaseNum(by);
	await tx.wait();
	console.log("----- Number decreased -----");
}

async function mapStr(str) {
	console.log("----- Mapping string -----");
	let tx = await contract.mapStr(str);
	await tx.wait();
	console.log("----- String Mapped -----");
}

async function pushAddress() {
	console.log("----- Pushing address -----");
	let tx = await contract.pushAddress();
	await tx.wait();
	console.log("----- Address pushed -----");
}

async function sendTo(address, ethAmount) {
	console.log("----- Sending Eth -----");
	let tx = await contract.sendTo(address, { value: ethers.parseEther(ethAmount) });
	await tx.wait();
	console.log(tx.hash);
	console.log("----- Eth sent-----");
}

module.exports = {
	increaseNum,
	decreaseNum,
	mapStr,
	pushAddress,
	sendTo,
};
