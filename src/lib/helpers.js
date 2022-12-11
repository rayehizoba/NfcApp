import Contacts from '../assets/img/contacts.svg';
import Text from '../assets/img/document-text.svg';
import Link from '../assets/img/Link.svg';
import {CONTACT_RECORD, TEXT_RECORD, URI_RECORD} from './consts';
import {isEqual} from 'lodash';
import {warn} from 'twrnc/dist/esm/helpers';

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

/**
 *
 * @param record
 * @returns {*}
 */
export const getRecordIcon = record => {
  if (isEqual(record, CONTACT_RECORD)) {
    return Contacts;
  }
  if (isEqual(record, TEXT_RECORD)) {
    return Text;
  }
  if (isEqual(record, URI_RECORD)) {
    return Link;
  }
  return Contacts;
};

/**
 *
 * @param data
 * @param record
 * @returns {string|*}
 */
export const getRecordText = ({data, record}) => {
  if (isEqual(record, CONTACT_RECORD)) {
    return Object.keys(data)
      .filter(key => data[key])
      .map(key => data[key])
      .join('\n');
  }
  if (isEqual(record, TEXT_RECORD)) {
    return data.text;
  }
  if (isEqual(record, URI_RECORD)) {
    return data.url;
  }
  return '';
};

/**
 *
 * @param data
 * @param record
 * @returns {string}
 */
export const getRecordHeading = ({data, record}) => {
  const text = getRecordText({data, record});
  const recordSizeInBytes = text.length + ' Bytes';
  if (isEqual(record, CONTACT_RECORD)) {
    return 'Contact: ' + recordSizeInBytes;
  }
  if (isEqual(record, TEXT_RECORD)) {
    return 'Text: ' + recordSizeInBytes;
  }
  if (isEqual(record, URI_RECORD)) {
    return 'Link: ' + recordSizeInBytes;
  }
  return '';
};
