import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x2A57F9FAe2c736d25E3F5252caF86d90e2174375";
const RECIPIENT = "";

// Tăng dần, test từ 1 đến 10
const ID = 1;
const AMOUNT = 10;
const DATA = "0x";
async function mint() {
  const factory = await ethers.getContractFactory("NFTify1155");
  const contract = factory.attach(CONTRACT_ADDRESS);

  const minting = await contract.mint(RECIPIENT, ID, AMOUNT, DATA);
  await minting.wait();

  console.log(`Minted successfully`);
}

mint().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
