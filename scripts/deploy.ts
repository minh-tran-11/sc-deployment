import { ethers } from "hardhat";

const NAME = "TEST";
const SYMBOL = "TEST";
const URI =
  "https://raw.githubusercontent.com/minhtran2611/refresh-metadata-test/main/base-uri-2/";

const CONTROLLER = "0x0000000000000000000000000000000000000000";

async function main() {
  const factory = await ethers.getContractFactory("NFTify1155");
  const contract = await factory.deploy(NAME, SYMBOL, URI, CONTROLLER);
  await contract.deployed();

  console.log(`Contract was deployed at ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
