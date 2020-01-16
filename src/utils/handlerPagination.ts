interface PageinMixin {
  pageNum: number|string;
  pageSize: number|string;
  [name: string]: any;
}
export function handlerPagination<T>(form: T & PageinMixin ): T{
  form.pageNum = +form.pageNum
  form.pageSize = +form.pageSize 
  return form
}
