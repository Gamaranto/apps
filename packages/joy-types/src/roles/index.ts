import { Struct } from "@polkadot/types/codec";
import { u32, u128, GenericAccountId } from "@polkadot/types";
import { BlockNumber, Balance } from "@polkadot/types/interfaces";
import { MemberId, Role } from "../members";
import { Registry } from "@polkadot/types/types";

// re-export Role
export { Role } from "../members";

export class Actor extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        member_id: MemberId,
        role: Role,
        account: GenericAccountId,
        joined_at: u32 // BlockNumber
      },
      value
    );
  }

  get member_id(): MemberId {
    return this.get("member_id") as MemberId;
  }

  get role(): Role {
    return this.get("role") as Role;
  }

  get account(): GenericAccountId {
    return this.get("account") as GenericAccountId;
  }

  get joined_at(): BlockNumber {
    return this.get("joined_at") as BlockNumber;
  }
}

export type Request = [GenericAccountId, MemberId, Role, BlockNumber];
export type Requests = Array<Request>;

export class RoleParameters extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        min_stake: u128, // Balance,
        min_actors: u32,
        max_actors: u32,
        reward: u128, // Balance,
        reward_period: u32, // BlockNumber,
        bonding_period: u32, // BlockNumber,
        unbonding_period: u32, // BlockNumber,
        min_service_period: u32, // BlockNumber,
        startup_grace_period: u32, // BlockNumber,
        entry_request_fee: u128 // Balance
      },
      value
    );
  }

  get min_stake(): Balance {
    return this.get("min_stake") as Balance;
  }

  get max_actors(): u32 {
    return this.get("max_actors") as u32;
  }

  get min_actors(): u32 {
    return this.get("min_actors") as u32;
  }

  get reward(): Balance {
    return this.get("reward") as Balance;
  }

  get reward_period(): BlockNumber {
    return this.get("reward_period") as BlockNumber;
  }

  get unbonding_period(): BlockNumber {
    return this.get("unbonding_period") as BlockNumber;
  }

  get bonding_period(): BlockNumber {
    return this.get("bonding_period") as BlockNumber;
  }

  get min_service_period(): BlockNumber {
    return this.get("min_service_period") as BlockNumber;
  }

  get startup_grace_period(): BlockNumber {
    return this.get("startup_grace_period") as BlockNumber;
  }

  get entry_request_fee(): Balance {
    return this.get("entry_request_fee") as Balance;
  }
}

const roleTypes = {
  RoleParameters,
  Request: "(GenericAccountId, MemberId, Role, BlockNumber)",
  Requests: "Vec<Request>",
  Actor
};

export default roleTypes;
