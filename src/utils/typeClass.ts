export type ignore<T, K> = { [P in keyof T]: P extends K ? never : T[P] };

export type Diff<T, U> = T extends U ? never : T;

export type SecondParams<T> = T extends (first: any, ...args: infer R) => any ? R : any;
