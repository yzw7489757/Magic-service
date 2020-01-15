export interface RouteModel {
  path: string;
  method:string;
  action():any;
}

export interface RouteGroup {
  prefix: string;
  routes: RouteModel[]
}