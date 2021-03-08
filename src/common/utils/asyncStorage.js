/**
 * AsyncStorage
 * @module src/common/utils
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Sets the value of a key in the async storage
 * @function set
 * @param {String} key storage key.
 * @param {String} value storage value.
 */
export async function set(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(`~ asyncStorage | set | ${error}`);
  }
}

/**
 * Gets the value of a key in the async storage
 * @function get
 * @param {String} key storage key.
 * @returns {String} storage value.
 */
export async function get(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(`~ asyncStorage | get | ${error}`);
  }
}
