interface GetSimpleKey {
  [name: string]: string | number | boolean | Date;
}

/**
 * Request Query 转 SQL Where
 *
 * @export queryGeneratorSql
 * @template T
 * @param {T} obj SQL Query
 * @param {string} name alias
 * @returns {[string,T]} [SQL,SQL Query]
 */
export function queryGeneratorSql<T extends GetSimpleKey>(obj: T,name: string): [string,T] {
  const hasValidatorKey = Object.keys(obj).filter(key => (obj[key] !== '' && obj[key] !== undefined))
  const sqlQuery = hasValidatorKey.reduce((t,key,currentIndex)=>{
    return (obj[key] === '' || obj[key] === undefined) ? t : `${t} ${currentIndex>0?'AND':''} ${name}.${key} = :${key}`
  },'')
  return [sqlQuery, obj]
}