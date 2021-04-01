// 自定义返回类型
export interface ResponseValue<T> {
  flag?: boolean
  status?: number
  msg?: string
  data?: T
}
