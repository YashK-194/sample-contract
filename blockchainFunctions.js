const { ethers } = require("ethers");
const { provider } = require("../utils/utils");

async function getBlocknumber() {
	const blockNumber = await provider.getBlockNumber();
	console.log(`Current Block number: ${blockNumber}`);
}

async function getBalance(address) {
	const balance = await provider.getBalance(address);

	const balanceInEth = ethers.formatEther(balance);
	console.log(`Balance is: ${balanceInEth}`);

	// const balanceInWei = ethers.parseEther(balanceInEth);
	// console.log(balanceInWei);
}

module.exports = { getBlocknumber, getBalance };
