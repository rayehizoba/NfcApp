import {types} from './records.reducer';
import {ToastAndroid} from 'react-native';

/**
 *
 * @returns {{type: string}}
 */
export const clearRecords = () => {
  ToastAndroid.show('Records cleared!', ToastAndroid.SHORT);
  return {
    type: types.CLEAR,
  };
};

/**
 *
 * @param records
 * @returns {{type: string}}
 */
export const importRecords = records => {
  ToastAndroid.show('Records imported!', ToastAndroid.SHORT);
  return {
    type: types.IMPORT,
    data: records,
  };
};
