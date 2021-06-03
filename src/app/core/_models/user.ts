import { logging } from 'protractor';

export class User {   //   用来登陆验证user
  openid: string;
  nickName: string;
  sex: string;
  language: string;
  city: string;
  province: string;
  country: string;
  headimgUrl: string;
  unionid: string;
  realName: string;
  phone: string;
  sessionKey?: string;
  relatedMerchant: string;
  creation: string;
  likes: number;
  reviews: number;
}


