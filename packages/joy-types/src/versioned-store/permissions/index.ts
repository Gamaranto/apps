import { getTypeRegistry } from '@polkadot/types';

import { Credential, CredentialSet } from './credentials';
import EntityPermissions from './EntityPermissions';
import { ReferenceConstraint } from './reference-constraint';
import ClassPermissionsType from './ClassPermissions';
import { Operation } from './batching/';

const versionedStorePermissionsTypes = {
  Credential,
  CredentialSet,
  EntityPermissions,
  ReferenceConstraint,
  ClassPermissionsType,
  Operation
};

export default versionedStorePermissionTypes;
