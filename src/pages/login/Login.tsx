import { Component } from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import classNames from "classnames"

import loginStyle from "./login.module.scss"
import { RuleObject, StoreValue } from "rc-field-form/lib/interface"

export default class Login extends Component {
  onFinish = (values: Object) => {
    console.log("Received values of form: ", values)
  }

  // 自定义用户名验证
  validateUname = (rule: RuleObject, value: StoreValue) => {
    if (!value) {
      return Promise.reject("用户名必须输入")
    } else if (value.length < 3 || value.length > 12) {
      return Promise.reject("用户名长度在3位到12位之间")
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject("用户名必须是英文,数字和下划线组成")
    } else {
      return Promise.resolve()
    }
  }

  // 自定义密码验证
  validatePwd = (rule: RuleObject, value: StoreValue) => {
    // console.log(value)
    if (!value) {
      return Promise.reject("密码必须输入")
    } else if (value.length < 3 || value.length > 12) {
      return Promise.reject("密码长度不能小于4位或大于12位")
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return Promise.reject("密码必须是英文，数字和下划线组成")
    } else {
      return Promise.resolve()
    }
  }

  // sumbit防抖
  public debounce = (
    func: Function,
    delay: number = 500,
    immediate: boolean = false
  ) => {
    let timer: number | undefined
    return (...args: []) => {
      if (immediate) {
        func.apply(this, args)
        immediate = false
        return
      }
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  render() {
    return (
      <div className={loginStyle.login}>
        <div className={loginStyle.loginContainer}>
          <h2>用户登录</h2>
          <div className={loginStyle.loginForm}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.debounce(this.onFinish)}
            >
              <Form.Item
                name="username"
                rules={[{ validator: this.validateUname }]}
              >
                <Input
                  prefix={
                    <UserOutlined
                      className={classNames(
                        "site-form-item-icon",
                        loginStyle.prefixIcon
                      )}
                    />
                  }
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ validator: this.validatePwd }]}
              >
                <Input
                  prefix={
                    <LockOutlined
                      className={classNames(
                        "site-form-item-icon",
                        loginStyle.prefixIcon
                      )}
                    />
                  }
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={loginStyle.loginFormButton}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
