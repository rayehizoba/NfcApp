/**
 *
 * @param protocol
 * @returns {string}
 */
export const ndefRecordIcon = protocol => {
  if (protocol >= 1 && protocol <= 4) return 'link-variant';
  else if (protocol === 5) return 'phone';
};

/**
 *
 * @param errorObj
 * @param key
 * @returns {null|*}
 */
export function getValidationErrors(errorObj, key) {
  if (errorObj && errorObj[key]) {
    if (Array.isArray(errorObj[key])) {
      return errorObj[key][0];
    }
    return errorObj[key];
  }
  return null;
}
