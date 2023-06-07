import { expect } from "chai";

export function shouldBehaveLikeAirdrop(): void {
  it("should return 'Airdrop'", async function () {
    expect(await this.airdrop.connect(this.signers.admin).greet()).to.equal("Airdrop");
  });
}
