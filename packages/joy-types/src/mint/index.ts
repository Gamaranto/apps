import { u32, u64, u128, Option, Enum } from "@polkadot/types";
import { Balance, BlockNumber } from "@polkadot/types/interfaces";
import { JoyStruct } from "../JoyStruct";
import { Registry } from "@polkadot/types/types";

export class MintId extends u64 {}

export class Setting extends u128 {}
export class Adding extends u128 {}
export class Reducing extends u128 {}

export class AdjustCapacityBy extends Enum {
  constructor(registry: Registry, value?: any, index?: number) {
    super(
      registry,
      {
        Setting,
        Adding,
        Reducing
      },
      value,
      index
    );
  }
}

export type IAdjustOnInterval = {
  block_interval: BlockNumber;
  adjustment_type: AdjustCapacityBy;
};
export class AdjustOnInterval extends JoyStruct<IAdjustOnInterval> {
  constructor(registry: Registry, value?: IAdjustOnInterval) {
    super(
      registry,
      {
        block_interval: u32,
        adjustment_type: AdjustCapacityBy
      },
      value
    );
  }
}

export type INextAdjustment = {
  adjustment: AdjustOnInterval;
  at_block: BlockNumber;
};
export class NextAdjustment extends JoyStruct<INextAdjustment> {
  constructor(registry: Registry, value?: INextAdjustment) {
    super(
      registry,
      {
        adjustment: AdjustOnInterval,
        at_block: u32
      },
      value
    );
  }
}

export type IMint = {
  capacity: Balance;
  next_adjustment: Option<NextAdjustment>;
  created_at: BlockNumber;
  total_minted: Balance;
};
export class Mint extends JoyStruct<IMint> {
  constructor(registry: Registry, value?: IMint) {
    super(
      registry,
      {
        capacity: u128,
        next_adjustment: Option.with(NextAdjustment),
        created_at: u32,
        total_minted: u128
      },
      value
    );
  }
}

const mintTypes = {
  MintId: "u64",
  Mint,
  "minting::BalanceOf": "Balance"
};

export default mintTypes;
