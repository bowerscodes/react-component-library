const INTERPOLATE_REGEX = /\${[^}]+}/g;

const getObjPath = (path, obj, fallback = '') => {
  path.split('.').reduce((res, key) => res[key] ?? fallback, obj)
};

export const concatClasses = (...classes) => classes.flat(Infinity).filter((cs) => !!cs).join(' ') || undefined;

/**
 * Creates an array from the src parameter
 * @param {*} src 
 * @returns src, if it already an array - otherwise, an array containing src.
 */
export const toArray = (src) => Array.isArray(src) ? src : src && [src];

/**
 * Interpolates a string with variables.
 * @param {*} template  the template string
 * @param {*} variables  the values to be used in the interpolation
 * @param {*} fallback  defaults to ('')
 * @returns A fully interpolated string.
 * 
 * @example interpolateString('<span>{item.label}</span>', { item: { id: '1' label: 'Item 1' } });
 * => <span>Item 1</span>
 * @example interpolateString('<span>${forename} ${surname}</span>', { forename: 'John' }, 'Doe' );
 * => <span>John Doe</span>
 */
export const interpolateString = (template, variables, fallback) => {
  const obj = variables ?? {};
  if (typeof template ==='string') {
    return template.replace(INTERPOLATE_REGEX, (match) => {
      const path = match.slice(2, -1).trim();
      return getObjPath(path, obj, fallback);
    });
  }
  return '';
};

export const classBuilder = (block, blockModifiers, blockExtra) => {
  const bModifiers = toArray(blockModifiers);
  
  return (element, elementModifiers, elementExtra) => {
    const eModifiers = toArray(elementModifiers);
    if (element) {
      return concatClasses(`${block}__${element}`, eModifiers?.filter((e) => !!e).map((modifier) => `${block}__${element}--${modifier}`), elementExtra);
    }
    return concatClasses(`${block}`, bModifiers?.filter((b) => !!b).map((modifier) => `${block}--${modifier}`), blockExtra);
  };
};

/**
 * Converts a number from 1 and 12 to the corresponding month name.
 * @param {number} month - The month number to convert.
 * @returns the name of the month.
 */
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export const getMonthName = (month) => {
  const monthIndex = parseInt(month, 10) -1
  if (monthIndex > -1 && monthIndex <12) {
    return MONTH_NAMES[monthIndex];
  }
};

const getItemLabel = (property) => (item) => item && item[property] ? item[property] : '';

const interpolateLabel = (format) => (item) => interpolateString(format, item).trim();

export const itemLabel = (structure) => {
  if (structure) {
    return structure.format ? interpolateLabel(structure.format) : getItemLabel(structure.label);
  }
  return (item) => item || '';
}

/**
 * Takes an array and returns a string with the items written out as 
 * a list.
 * 
 * @example toWrittenList(['one', 'two', 'three']) 
 *  => 'one, two and three'
 * 
 * @example toWrittenList(['one', 'two', 'three'], 'or')
 *  => 'one, two or three'
 * 
 * @param {Array} array The array of entries to derive the list from.
 * @param {String} finalSeparator The string to use before the final entry (defaults to 'and')
 * @param {Boolean} uppercase Whether to convert the list to uppercase.
 * @returns the array in written list form.
 */
export const toWrittenList = (array, finalSeparator = 'and', uppercase = false ) => {
  if (!Array.isArray(array)) {
    return '';
  }
  const listStr = array.join(', ');
  return uppercase ?
    listStr.toUpperCase().replace(/,(?!.*,)/gmi, ` ${finalSeparator}`) :
    listStr.replace(/,(?!.*,)/gmi, ` ${finalSeparator}`);
};

export const COMPONENT_TYPES = {
  DETAILS: 'details',
  FILE_UPLOAD: 'file-upload',
  INPUT: 'input',
  LABEL: 'label',
  TEXT_AREA: 'text-area',
};

/**
* The following takes the attributes for a component and assigns them 
* to the data attribute if they are not standard HTML attributes for 
* the component.
* @param {object} attrs - The attributes to be cleaned.
* @returns an object containing Global Attributes and Data Attributes.
*/
const DETAILS_ATTRS = [
  'open',
];

const GLOBAL_ATTRS = [
  'accesskey',
  'autocapitalize',
  'autofocus',
  'class',
  'contenteditable',
  'contextmenuNon-standardDeprecated',
  'data-*',
  'dir',
  'draggable',
  'enterkeyhint',
  'exportparts',
  'hidden',
  'id',
  'inert',
  'inputmode',
  'is',
  'itemid',
  'itemprop',
  'itemref',
  'itemscope',
  'itemtype',
  'lang',
  'nonce',
  'part',
  'slot',
  'spellcheck',
  'style',
  'tabindex',
  'title',
  'translate',
  'onabort',
  'onautocomplete',
  'onautocompleteerror',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange',
  'onclick',
  'onclose',
  'oncontextmenu',
  'oncuechange',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onfocus',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreset',
  'onresize',
  'onscroll',
  'onseeked',
  'onseeking',
  'onselect',
  'onshow',
  'onsort',
  'onstalled',
  'onsubmit',
  'onsuspend',
  'ontimeupdate',
  'ontoggle',
  'onvolumechange',
  'onwaiting',
];

const INPUT_ATTRS = [
  'accept',
  'alt',
  'autofocus',
  'checked',
  'dirname',
  'disabled',
  'form',
  'formaction',
  'height',
  'list',
  'max',
  'maxlength',
  'min',
  'multiple',
  'name',
  'onsearch',
  'pattern',
  'placeholder',
  'readonly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'value',
  'width'
];

const LABEL_ATTRS = [
  'for',
  'form',
  'htmlFor'
];

const TEXTAREA_ATTRS = [
  'cols',
  'dirname',
  'disabled',
  'form',
  'maxlength',
  'name',
  'placeholder',
  'readonly',
  'required',
  'rows',
  'wrap'
];

const getAttributes = (type) => {
  switch (type) {
    case COMPONENT_TYPES.LABEL:
      return GLOBAL_ATTRS.concat(LABEL_ATTRS);
    case COMPONENT_TYPES.TEXT_AREA:
      return GLOBAL_ATTRS.concat(TEXTAREA_ATTRS);
    case COMPONENT_TYPES.DETAILS:
      return GLOBAL_ATTRS.concat(DETAILS_ATTRS);
    case COMPONENT_TYPES.INPUT:
      return GLOBAL_ATTRS.concat(INPUT_ATTRS);
    case COMPONENT_TYPES.FILE_UPLOAD:
      return GLOBAL_ATTRS.concat(INPUT_ATTRS).pop('value');
    default:
      return GLOBAL_ATTRS;
  }
};

export const cleanHtmlAttributes = (attrs, type) => {
  if (attrs && typeof attrs === 'object') {
    return Object.fromEntries(
      Object.entries(attrs).map(([key, value]) => {
        if (key.startsWith('data-')) {
          return [key, value];
        }
        if (getAttributes(type).includes(key.toLocaleLowerCase())) {
          return [key, value];
        }
        return [`data-${key}`, value];
      })
    );
  };
  return {};
};

const Utils = {
  classBuilder,
  cleanHtmlAttributes,
  getMonthName,
  interpolateString,
  itemLabel,
  toArray,
  toWrittenList,
};

export default Utils;
