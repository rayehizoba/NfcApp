import Contacts from '../assets/img/contacts.svg';
import Text from '../assets/img/document-text.svg';
import Link from '../assets/img/Link.svg';
import {
  CONTACT_RECORD,
  RTD_MAP,
  TEXT,
  TEXT_RECORD,
  TNF_MAP,
  URI,
  URI_RECORD,
  VCARD,
} from './consts';
import {isEqual} from 'lodash';
import {Alert, Linking} from 'react-native';
import {Ndef} from 'react-native-nfc-manager';

/**
 *
 * @param message
 * @returns {*|{type: string}}
 */
export function normalizeNdefMessage(message) {
  return Array.isArray(message.type)
    ? {
        ...message,
        type: String.fromCharCode(...message.type),
      }
    : message;
}

/**
 *
 * @param uri
 * @returns {Promise<void>}
 */
export async function goToUri(uri) {
  try {
    await Linking.openURL(uri);
  } catch (ex) {
    console.warn(ex);
    Alert.alert('Cannot open uri');
  }
}

/**
 *
 * @param value
 * @returns {string|null}
 */
export function tnfValueToName(value) {
  for (let name in TNF_MAP) {
    if (value === TNF_MAP[name]) {
      return name;
    }
  }
  return null;
}

/**
 *
 * @param value
 * @returns {string|null}
 */
export function rtdValueToName(value) {
  value = Array.isArray(value)
    ? value.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
    : value;
  for (let name in RTD_MAP) {
    if (value === RTD_MAP[name]) {
      return name;
    }
  }
  return null;
}

/**
 *
 * @param protocol
 * @returns {string}
 */
export const ndefRecordIcon = protocol => {
  if (protocol >= 1 && protocol <= 4) {
    return 'link-variant';
  } else if (protocol === 5) {
    return 'phone';
  }
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
 * @param ndefRecord
 * @returns {*}
 */
export const getRecordIcon = ndefRecord => {
  const rtdName = rtdValueToName(ndefRecord.type);
  if (ndefRecord.tnf === Ndef.TNF_WELL_KNOWN) {
    if (rtdName === URI) {
      return Link;
    } else if (rtdName === TEXT) {
      return Text;
    }
  } else if (ndefRecord.ntf === Ndef.MIME_MEDIA) {
    const mimeTypeStr = Array.isArray(ndefRecord.type)
      ? String.fromCharCode(...ndefRecord.type)
      : ndefRecord.type;
    if (mimeTypeStr === Ndef.MIME_WFA_WSC) {
    } else if (mimeTypeStr === VCARD) {
      return Contacts;
    } else if (mimeTypeStr.indexOf('text') === 0) {
    } else {
    }
  }
  return Text;
};
// export const getRecordIcon = record => {
//   if (isEqual(record, CONTACT_RECORD)) {
//     return Contacts;
//   }
//   if (isEqual(record, TEXT_RECORD)) {
//     return Text;
//   }
//   if (isEqual(record, URI_RECORD)) {
//     return Link;
//   }
//   return Contacts;
// };

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

/**
 *
 * @param input
 * @returns {{}}
 */
export function vCardParse(input) {
  var Re1 = /^(version|fn|title|org):(.+)$/i;
  var Re2 = /^([^:;]+);([^:]+):(.+)$/;
  var ReKey = /item\d{1,2}\./;
  var fields = {};

  input.split(/\r\n|\r|\n/).forEach(function (line) {
    var results, key;

    if (Re1.test(line)) {
      results = line.match(Re1);
      key = results[1].toLowerCase();
      fields[key] = results[2];
    } else if (Re2.test(line)) {
      results = line.match(Re2);
      key = results[1].replace(ReKey, '').toLowerCase();

      var meta = {};
      results[2]
        .split(';')
        .map(function (p, i) {
          var match = p.match(/([a-z]+)=(.*)/i);
          if (match) {
            return [match[1], match[2]];
          } else {
            return ['TYPE' + (i === 0 ? '' : i), p];
          }
        })
        .forEach(function (p) {
          meta[p[0]] = p[1];
        });

      if (!fields[key]) {
        fields[key] = [];
      }

      fields[key].push({
        meta: meta,
        value: results[3].split(';'),
      });
    }
  });

  return fields;
}
