import { Text, bool, Enum, Struct, Option, GenericAccountId } from '@polkadot/types';
import { Codec, Registry } from '@polkadot/types/types';

import forumTypes from './forum';
import mediaTypes from './media';
import membershipTypes from './members';
import roleTypes from './roles';
import discoveryTypes from './discovery';
import hiringTypes from './hiring';
import versionedStoreTypes from './versioned-store';
import versionedStorePermissionsTypes from './versioned-store/permissions';
import stakeTypes from './stake';
import mintTypes from './mint';
import recurringRewardsTypes,  from './recurring-rewards';
import contentWorkingGroupTypes from './content-working-group';
import electionTypes from './election'
import proposalTypes from './proposals';

export function getTextPropAsString(struct: Struct, fieldName: string): string {
  return (struct.get(fieldName) as Text).toString();
}

export function getBoolPropAsBoolean(struct: Struct, fieldName: string): boolean {
  return (struct.get(fieldName) as bool).valueOf();
}

export function getOptionPropOrUndefined<T extends Codec>(struct: Struct, fieldName: string): T | undefined {
  return (struct.get(fieldName) as Option<T>).unwrapOr(undefined);
}

export class OptionText extends Option.with(Text) {
  static none(): OptionText {
    return new Option(Text, null);
  }

  static some(text: string): OptionText {
    return new Option(Text, text);
  }
}



export const joystreamTypes = {
  ...membershipTypes,
  ...roleTypes,
  ...mediaTypes,
  ...forumTypes,
  ...electionTypes,
  ...proposalTypes,
  ...discoveryTypes,
  ...versionedStoreTypes,
  ...versionedStorePermissionsTypes,
  ...stakeTypes,
  ...mintTypes,
  ...recurringRewardsTypes,
  ...hiringTypes,
  ...contentWorkingGroupTypes
}

