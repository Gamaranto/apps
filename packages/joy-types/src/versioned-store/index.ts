import { u16, u64, Text, bool, Vec } from '@polkadot/types';
import { Registry } from '@polkadot/types/types';
import { JoyStruct } from '../JoyStruct';
import PropertyType from './PropertyType';
import PropertyValue from './PropertyValue';
import { camelCase, upperFirst } from 'lodash';

export class EntityId extends u64 { }
export class ClassId extends u64 { }

export type InputValidationLengthConstraintType = {
  min: u16;
  max_min_diff: u16;
};

export class InputValidationLengthConstraint extends JoyStruct<InputValidationLengthConstraintType> {
  constructor(registry: Registry, value: InputValidationLengthConstraintType) {
    super(registry, {
      min: u16,
      max_min_diff: u16
    }, value);
  }

  get min(): u16 {
    return this.getField('min');
  }

  get max_min_diff(): u16 {
    return this.getField('max_min_diff');
  }

  get max(): u16 {
    return new u16(this.min.add(this.max_min_diff));
  }
}

export type PropertyTsType = {
  prop_type: PropertyType;
  required: bool;
  name: Text;
  description: Text;
};

export class Property extends JoyStruct<PropertyTsType> {
  constructor(registry: Registry, value: PropertyTsType) {
    super(registry, {
      prop_type: PropertyType,
      required: bool,
      name: Text,
      description: Text
    }, value);
  }

  get prop_type(): PropertyType {
    return this.getField('prop_type');
  }

  get required(): boolean {
    return this.getboolean('required');
  }

  get name(): string {
    return this.getString('name');
  }

  get description(): string {
    return this.getString('description');
  }
}

export class VecProperty extends Vec.with(Property) { }

export class VecU16 extends Vec.with(u16) { }

export type ClassSchemaType = {
  properties: VecU16;
};

export class ClassSchema extends JoyStruct<ClassSchemaType> {
  constructor(registry: Registry, value: ClassSchemaType) {
    super(registry, {
      properties: VecU16
    }, value);
  }

  get properties(): VecU16 {
    return this.getField('properties');
  }
}

export class VecClassSchema extends Vec.with(ClassSchema) { }

export type ClassPropertyValueType = {
  in_class_index: u16;
  value: PropertyValue;
};

export class ClassPropertyValue extends JoyStruct<ClassPropertyValueType> {
  constructor(registry: Registry, value: ClassPropertyValueType) {
    super(registry, {
      in_class_index: u16,
      value: PropertyValue
    }, value);
  }

  get in_class_index(): u16 {
    return this.getField('in_class_index');
  }

  get value(): PropertyValue {
    return this.getField('value');
  }
}

export class VecClassPropertyValue extends Vec.with(ClassPropertyValue) { }

export type ClassType = {
  id: ClassId;
  properties: VecProperty;
  schemas: VecClassSchema;
  name: Text;
  description: Text;
};

export class Class extends JoyStruct<ClassType> {
  constructor(registry: Registry, value: ClassType) {
    super(registry, {
      id: ClassId,
      properties: VecProperty,
      schemas: VecClassSchema,
      name: Text,
      description: Text
    }, value);
  }

  get id(): ClassId {
    return this.getField('id');
  }

  get properties(): VecProperty {
    return this.getField('properties');
  }

  get schemas(): VecClassSchema {
    return this.getField('schemas');
  }

  get name(): string {
    return this.getString('name');
  }

  get description(): string {
    return this.getString('description');
  }
}

export type EntityType = {
  id: EntityId;
  class_id: ClassId;
  in_class_schema_indexes: VecU16;
  values: VecClassPropertyValue;
};

export class Entity extends JoyStruct<EntityType> {
  constructor(registry: Registry, value: EntityType) {
    super(registry, {
      id: EntityId,
      class_id: ClassId,
      in_class_schema_indexes: VecU16,
      values: VecClassPropertyValue
    }, value);
  }

  get id(): EntityId {
    return this.getField('id');
  }

  get class_id(): ClassId {
    return this.getField('class_id');
  }

  get in_class_schema_indexes(): VecU16 {
    return this.getField('in_class_schema_indexes');
  }

  /** NOTE: Renamed to `entity_values` because `values` is already in use. */
  get entity_values(): VecClassPropertyValue {
    return this.getField('values');
  }
}

export interface ClassIdByNameMap {
  ContentLicense?: ClassId;
  CurationStatus?: ClassId;
  FeaturedContent?: ClassId;
  Language?: ClassId;
  MediaObject?: ClassId;
  MusicAlbum?: ClassId;
  MusicGenre?: ClassId;
  MusicMood?: ClassId;
  MusicTheme?: ClassId;
  MusicTrack?: ClassId;
  PublicationStatus?: ClassId;
  Video?: ClassId;
  VideoCategory?: ClassId;
}

export type ClassName = keyof ClassIdByNameMap

export function unifyClassName(className: string): ClassName {
  return upperFirst(camelCase(className)) as ClassName;
}

export function unifyPropName(propName: string): string {
  return camelCase(propName);
}

const versionedStoreTypes = {
  InputValidationLengthConstraint,
  ClassId: 'u64',
  EntityId: 'u64',
  Class,
  Entity,
  ClassSchema,
  Property,
  PropertyType,
  PropertyValue,
  ClassPropertyValue
};

export default versionedStoreTypes;
