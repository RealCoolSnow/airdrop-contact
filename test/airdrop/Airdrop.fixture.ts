import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Airdrop } from "../../types/Airdrop.sol";
import type { Airdrop__factory } from "../../types/factories/Airdrop.sol/Airdrop__factory";

export async function deployAirdropFixture(): Promise<{ airdrop: Airdrop }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const airdropFactory: Airdrop__factory = <Airdrop__factory>await ethers.getContractFactory("Airdrop");
  const airdrop: Airdrop = <Airdrop>await airdropFactory.connect(admin).deploy();
  await airdrop.deployed();

  return { airdrop };
}
