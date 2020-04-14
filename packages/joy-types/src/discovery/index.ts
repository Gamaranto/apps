import { Struct } from "@polkadot/types/codec";
import { Text, u32 } from "@polkadot/types";
import { BlockNumber } from "@polkadot/types/interfaces";
import { Registry } from "@polkadot/types/types";

export class IPNSIdentity extends Text {}
export class Url extends Text {}

export class AccountInfo extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        identity: IPNSIdentity,
        expires_at: u32 // BlockNumber
      },
      value
    );
  }

  get identity(): IPNSIdentity {
    return this.get("identity") as IPNSIdentity;
  }

  get expires_at(): BlockNumber {
    return this.get("expires_at") as BlockNumber;
  }
}

const discoveryTypes = {
  Url,
  IPNSIdentity,
  AccountInfo
};

export default discoveryTypes;
