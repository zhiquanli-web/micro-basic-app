import { User } from '@/service/api';
import { ILoginResult, IMenuData } from '@/service/api/user/types';
const loginData: ILoginResult = {
  nickname: '管理员',
  token: Date.now().toString(),
  userInfo: {
    nickname: '超级管理员',
    avatar: 'http://minio-test.epshealth.com:7070/uurm/_public/userPic/1'
  }
};

const useMenuData: IMenuData[] = [
  {
    id: 1,
    pid: 0,
    path: '/main/about'
  },
  {
    id: 2,
    pid: 1,
    path: '/main/about/first'
  },
  {
    id: 3,
    pid: 1,
    path: '/main/about/secound'
  },
  {
    id: 4,
    pid: 0,
    path: '/main/config'
  }
];

const loginDataMoke = {
  [`onPost::${User.LOGIN}`]: () => {
    return {
      message: '成功',
      code: 0,
      data: {
        ...loginData
      }
    };
  },
  [`onGet::${User.USEMENU}`]: () => {
    return {
      message: '成功',
      code: 0,
      data: useMenuData
    };
  }
};

export default loginDataMoke;
