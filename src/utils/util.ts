import { SecondParams } from './typeClass';

export function pack<T extends (...args: any[]) => any>(fn: T, first: any) {
  return {
    call(...args: SecondParams<T>): ReturnType<T> {
      return fn.call(undefined, [first, ...args]);
    },
  };
}
