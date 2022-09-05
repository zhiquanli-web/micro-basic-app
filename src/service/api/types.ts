export interface IDataModel<T = any> {
  code: number;
  message: string;
  data: T;
}
