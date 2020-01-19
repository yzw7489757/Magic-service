export interface PageinMixin {
  pageNum: any;
  pageSize: any;
}
export function handlerPagination<T>(form: T & PageinMixin): T & PageinMixin {
  form.pageNum = +form.pageNum || 1;
  form.pageSize = +form.pageSize || 10;
  return form;
}
