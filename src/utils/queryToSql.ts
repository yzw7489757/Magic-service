import { Diff } from './typeClass';
interface GetSimpleKey {
  [name: string]: any;
}

/**
 * Request Query 转 SQL Where
 * 去除了无效的参数 比如空字符串 和 undefined,仅适用于Query Get
 * @export queryGeneratorSql
 * @template T
 * @param {T} obj SQL Query
 * @param {string} name alias
 * @returns {[string,T]} [SQL,SQL Query]
 */
export function queryGeneratorSql<T extends GetSimpleKey>(obj: T, name: string): [string, T] {
  const hasValidatorKey = Object.keys(obj).filter(key => obj[key] !== '' && obj[key] !== undefined);
  const sqlQuery = hasValidatorKey.reduce((t, key, currentIndex) => {
    return obj[key] === '' || obj[key] === undefined ? t : `${t} ${currentIndex > 0 ? 'AND' : ''} ${name}.${key} = :${key}`;
  }, '');
  return [sqlQuery, obj];
}
/**
 * 过滤掉不需要的空数据 常用于 request.body 会忽略undefined 和 空字符串
 *
 * @export
 * @template T
 * @param {T} obj
 * @returns {Partial<T>}
 */
export function filterInvaildField<T extends object, N extends keyof T>(obj: T, keys: N[] = []): Omit<T, N> {
  const effective: Partial<T> = {};
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== '' && obj[prop] !== undefined && keys.every(item => prop !== item)) {
      effective[prop] = obj[prop];
    }
  });
  return effective as Omit<T, N>;
}
