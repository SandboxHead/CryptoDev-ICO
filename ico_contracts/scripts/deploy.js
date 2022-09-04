const {ethers} = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");
  const deployedContract = await cryptoDevTokenContract.deploy(CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);
  console.log("Crypto Devs token deployed at address:", deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
