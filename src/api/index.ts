/* 
 请求
*/
import { UserModel } from "../type/UserModel"
import ajax from "./ajax"
import { ResponseValue } from "./Model"
import { ReqMethodEnum } from "./ReqMethodEnum"

// 登录接口
export const reqLogin = (
  username: string,
  password: string
): Promise<ResponseValue<UserModel>> =>
  ajax<ResponseValue<UserModel>>(
    "/api/login",
    { username, password },
    ReqMethodEnum.POST
  )

// 添加用户
export const reqAddUser = (user: UserModel): Promise<string> => {
  return ajax<string>("/manage/user/add", user, ReqMethodEnum.POST)
}
