import cleanAttributes from "./cleanAttributes";
import getComponent from "./getComponent";
import getDefaultValue from '../Component/getDefaultValue';

const Component = {
  clean: cleanAttributes,
  defaultValue: getDefaultValue,
  get: getComponent
};

export default Component;
