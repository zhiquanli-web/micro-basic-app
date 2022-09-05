export interface ILoginResult {
  nickname: string;
  token: string;
  userInfo: object;
}
export interface IAccount {
  username: string;
  password: string;
}

export interface IMenuData {
  pid: number | string;
  path: string;
  id: number | string;
  [propName: string]: any;
}
