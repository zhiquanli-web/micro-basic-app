import { IUserState } from './modules/user/types';

export interface IRootState {
  role?: string;
}

export interface IRootWithModule {
  user: IUserState;
}

export type IStoreType = IRootState & IRootWithModule;
