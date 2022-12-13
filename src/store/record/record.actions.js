import {types} from './record.reducer';
import {Ndef} from 'react-native-nfc-manager';
import {TEXT, URI, VCARD, WIFI_SIMPLE} from '../../lib/consts';

/**
 *
 * @param type
 * @param data
 * @returns {(function(*): void)|*}
 */
export const writeNdef =
  ({type, data}) =>
  dispatch => {
    let record = null;
    if (type === TEXT) {
      // bytes = Ndef.encodeMessage([Ndef.textRecord(data)]);
      record = Ndef.textRecord(data);
    } else if (type === URI) {
      record = Ndef.uriRecord(data);
    } else if (type === WIFI_SIMPLE) {
      record = Ndef.wifiSimpleRecord(data);
    } else if (type === VCARD) {
      const {name, org, adr, tel, email, url} = data;
      const vCard = `BEGIN:VCARD\nVERSION:2.1\nN:;${name}\nORG: ${org}\nTEL;HOME:${tel}\nEMAIL:${email}\nADR;WORK:${adr}\nURL;WORK:${url}\nEND:VCARD`;
      record = Ndef.record(Ndef.TNF_MIME_MEDIA, VCARD, [], vCard);
    }

    if (record) {
      dispatch({
        type: types.WRITE,
        data: record,
      });
    }
  };

/**
 *
 * @param record
 * @returns {{data, type: string}}
 */
export const duplicateNdefRecord = record => ({
  type: types.DUPLICATE,
  data: record,
});


/**
 *
 * @param record
 * @returns {{data, type: *}}
 */
export const deleteNdefRecord = record => ({
  type: types.DELETE,
  data: record,
});
