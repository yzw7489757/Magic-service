import { CYRPTO_SECRET_KEY } from '../conf/secretKeys';
import encryption = require('crypto');
/**
 * 转md5
 * @param {string} content 明文
 * @returns {string} md5
 */
function _md5(content: string): string {
  const md5 = encryption.createHash('md5');
  return md5.update(content).digest('hex');
}

/**
 * 加密password
 * @param {string} content 明文
 * @returns {string} md5 password
 */
function encryptionPw(content: string): string {
  return _md5(`pw=${content}&key=${CYRPTO_SECRET_KEY}`);
}

export default encryptionPw;
