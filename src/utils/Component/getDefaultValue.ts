import { ComponentTypes } from '../../models';

const DEFAULT_VALUES = {
  [ComponentTypes.CONTAINER]: {},
};

const getDefaultValue = (component: any) => {
  if (!component) {
    return '';
  }
  if ('defaultValue' in component) {
    return component.defaultValue;
  }
  if ('defaultObjectValue' in component) {
    return component.defaultObjectValue;
  }
  return DEFAULT_VALUES[component.type] || '';
}

export default getDefaultValue;
