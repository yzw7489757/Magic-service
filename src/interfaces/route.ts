import { Context } from 'koa';
export interface RouteModel {
  path: string;
  method: string;
  action(): Context;
}

export interface RouteGroup {
  prefix: string;
  routes: RouteModel[];
}
