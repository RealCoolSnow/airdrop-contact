import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { deployAirdropFixture } from "./Airdrop.fixture";
import { shouldBehaveLikeAirdrop } from "./Airdrop.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("Airdrop", function () {
    beforeEach(async function () {
      const { airdrop } = await this.loadFixture(deployAirdropFixture);
      this.airdrop = airdrop;
    });

    shouldBehaveLikeAirdrop();
  });
});
