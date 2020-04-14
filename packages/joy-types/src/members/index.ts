import {
  Enum,
  getTypeRegistry,
  Option,
  Struct,
  Null,
  bool,
  u32,
  u64,
  u128,
  Text,
  GenericAccountId,
  Vec
} from "@polkadot/types";

import { BlockNumber, Moment, BalanceOf } from "@polkadot/types/interfaces";
import { OptionText } from "../index";

import { JoyStruct } from "../JoyStruct";

export class MemberId extends u64 {}
export class PaidTermId extends u64 {}
export class SubscriptionId extends u64 {}
export class ActorId extends u64 {}

export class Paid extends PaidTermId {}
export class Screening extends GenericAccountId {}
export class Genesis extends Null {}
export class EntryMethod extends Enum {
  constructor(registry: Registry, value?: any, index?: number) {
    super(
      registry,
      {
        Paid,
        Screening,
        Genesis
      },
      value,
      index
    );
  }
}

export enum RoleKeys {
  StorageProvider = "StorageProvider",
  ChannelOwner = "ChannelOwner",
  CuratorLead = "CuratorLead",
  Curator = "Curator"
}

export class Role extends Enum {
  constructor(registry: Registry, value?: any, index?: number) {
    super(
      registry,
      [RoleKeys.StorageProvider, RoleKeys.ChannelOwner, RoleKeys.CuratorLead, RoleKeys.Curator],
      value,
      index
    );
  }
}

export type IProfile = {
  handle: Text;
  avatar_uri: Text;
  about: Text;
  registered_at_block: BlockNumber;
  registered_at_time: Moment;
  entry: EntryMethod;
  suspended: bool;
  subscription: Option<SubscriptionId>;
  root_account: GenericAccountId;
  controller_account: GenericAccountId;
  roles: Vec<ActorInRole>;
};
export class Profile extends JoyStruct<IProfile> {
  constructor(registry: Registry, value?: IProfile) {
    super(
      registry,
      {
        handle: Text,
        avatar_uri: Text,
        about: Text,
        registered_at_block: u32,
        registered_at_time: u64,
        entry: EntryMethod,
        suspended: bool,
        subscription: Option.with(SubscriptionId),
        root_account: GenericAccountId,
        controller_account: GenericAccountId,
        roles: Vec.with(ActorInRole)
      },
      value
    );
  }

  get handle(): Text {
    return this.get("handle") as Text;
  }

  get avatar_uri(): Text {
    return this.get("avatar_uri") as Text;
  }

  get about(): Text {
    return this.get("about") as Text;
  }

  get registered_at_block(): u32 {
    return this.get("registered_at_block") as u32;
  }

  get registered_at_time(): u64 {
    return this.get("registered_at_time") as u64;
  }

  get entry(): EntryMethod {
    return this.get("entry") as EntryMethod;
  }

  get suspended(): bool {
    return this.get("suspended") as bool;
  }

  get subscription(): Option<SubscriptionId> {
    return this.get("subscription") as Option<SubscriptionId>;
  }

  get root_account(): GenericAccountId {
    return this.get("root_account") as GenericAccountId;
  }

  get controller_account(): GenericAccountId {
    return this.get("controller_account") as GenericAccountId;
  }

  get roles(): Vec<ActorInRole> {
    return this.get("roles") as Vec<ActorInRole>;
  }
}

export class ActorInRole extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        role: Role,
        actor_id: ActorId
      },
      value
    );
  }

  get role(): Role {
    return this.get("role") as Role;
  }

  get actor_id(): ActorId {
    return this.get("actor_id") as ActorId;
  }

  get isContentLead(): boolean {
    return this.role.eq(RoleKeys.CuratorLead);
  }

  get isCurator(): boolean {
    return this.role.eq(RoleKeys.Curator);
  }
}

export class UserInfo extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        handle: OptionText,
        avatar_uri: OptionText,
        about: OptionText
      },
      value
    );
  }
}

export type CheckedUserInfo = {
  handle: Text;
  avatar_uri: Text;
  about: Text;
};

export class PaidMembershipTerms extends Struct {
  constructor(registry: Registry, value?: any) {
    super(
      registry,
      {
        fee: u128, // BalanceOf
        text: Text
      },
      value
    );
  }

  get fee(): BalanceOf {
    return this.get("fee") as BalanceOf;
  }

  get text(): Text {
    return this.get("text") as Text;
  }
}

const membersTypes = {
  EntryMethod,
  MemberId,
  PaidTermId,
  SubscriptionId,
  Profile,
  UserInfo,
  CheckedUserInfo: {
    handle: "Text",
    avatar_uri: "Text",
    about: "Text"
  },
  PaidMembershipTerms,
  Role,
  ActorId,
  ActorInRole
};

export default membersTypes;
