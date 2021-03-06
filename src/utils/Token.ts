import * as jwt from 'jsonwebtoken';
import { JWT_KEY } from '../conf/secretKeys';
// import jwt = require('koa-jwt');

/**
 * token期限为4h
 *
 * @export
 * @param {*} [payload={}]
 * @returns
 */
export function getToken(payload = {}): string {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '4h' });
}
/**
 * 验证并解析JWT
 *
 * @export
 * @param {string} token
 * @returns
 */
export function getJWTPayload(token: string): any {
  return jwt.verify(token.split(' ')[1], JWT_KEY);
}
