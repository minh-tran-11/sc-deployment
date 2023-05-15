import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    // mainnet: {},
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [process.env.DEPLOY_PRIVATE_KEY!],
    },
    // bsc: {},
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.DEPLOY_PRIVATE_KEY!],
    },
    // polygon: {},
    polygonMumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.DEPLOY_PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETH_API_KEY!,
      bscTestnet: process.env.BSC_API_KEY!,
      polygonMumbai: process.env.POLYGON_API_KEY!,
    },
  },
};

task("balance", "Get the balance of an account")
  .addOptionalParam("account", "The account's address")
  .setAction(async ({ account }) => {
    // @ts-ignore
    const balance = await ethers.provider.getBalance(
      // @ts-ignore
      account || (await ethers.provider.getSigner().getAddress())
    );
    // @ts-ignore
    console.log(ethers.utils.formatEther(balance), "ETH");
  });

export default config;
