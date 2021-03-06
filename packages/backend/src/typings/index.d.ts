declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    ENVID: string;
    SECRETID: string;
    SECRETKEY: string;
  }
}

interface User {
  userId: string;
  username: string;
  password: string;
}

interface RequestUser extends User {
  // 用户可以访问的资源
  supervisionAdministrations: string[];
  // 系统管理员
  access: string;
  // 基本信息
  name: string;
}

interface AuthRequest extends Request {
  user: RequestUser;
}
