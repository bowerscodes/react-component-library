export const JSON_ONLY_PROPERTIES = [
  'formData',
  'source'
];

const cleanAttributes = (options: any, alsoRemove = []) => {
  const removeKeys = Array.isArray(alsoRemove) ? [...JSON_ONLY_PROPERTIES, ...alsoRemove] : JSON_ONLY_PROPERTIES;
  if (options && typeof options === 'object') {
    return Object.keys(options).reduce((obj, key) => {
      if (!removeKeys.includes(key)) {
        return {
        ...obj,
        [key]: options[key]
        };
      };
      return obj;
    }, {});
  }
  return {};
};

export default cleanAttributes;
