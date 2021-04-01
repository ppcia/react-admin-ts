/* 
能发送异步ajax请求的函数模块
封装axios
*/

import { message } from "antd"
import axios from "axios"
import { ReqMethodEnum } from "./ReqMethodEnum"

export default function ajax<T>(
  url: string,
  data: Object = {},
  method: ReqMethodEnum = ReqMethodEnum.GET
):Promise<T>{
  return new Promise((reslove, reject) => {
    const headers = {
      "content-Type": "application/json;charset=UTF-8",
    }
    let promise: Promise<T>

    switch (method) {
      case ReqMethodEnum.GET:
        promise = axios.get(url, { params: data, headers: headers })
        break
      case ReqMethodEnum.POST:
        promise = axios.post(url, data, { headers })
        break
      case ReqMethodEnum.PUT:
        promise = axios.put(url, data, { headers })
        break
      case ReqMethodEnum.DELETE:
        promise = axios.delete(url, { data, headers })
        break
      default:
        promise = axios.get(url, { params: data, headers: headers })
        break
    }
    promise
      .then((response: any) => {
        reslove(response.data)
      })
      .catch((error) => {
        message.error("请求出错:", error.message)
      })
  })
}
