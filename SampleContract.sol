// SPDX-License-Identifier: MIT

pragma solidity ^0.8.30;

contract SampleContract {
    uint public num = 55;
    string public str = "Hello World!";
    bool public isTrue = false;

    mapping(address => string) public addressToStr;
    address[] public addresses;

    function increaseNum(uint increaseBy) public returns (uint) {
        num += increaseBy;
        return num;
    }

    function decreaseNum(uint decreaseBy) public returns (uint) {
        num -= decreaseBy;
        return num;
    }

    function mapStr(string memory message) public {
        addressToStr[msg.sender] = message;
    }

    function pushAddress() public {
        addresses.push(msg.sender);
    }

    // Flow of eth:
    // msg.sender -> contract -> to
    function sendTo(address to) public payable {
        (bool success, ) = payable(to).call{value: msg.value}("");
        require(success);
    }

    function getAddressAtIdx(uint idx) public view returns (address) {
        return addresses[idx];
    }

    receive() external payable {}
}
