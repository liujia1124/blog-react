import { makeAutoObservable } from "mobx";
import { setToken, getToken, clearToken, http } from '@/utils'
class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ mobile, code }) => {
    console.log(mobile, code)
    const res = await http.post('/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
    setToken(res.data.token)
  }
  loginOut = () => {
    this.token = ''
    clearToken()
  }
}
export default LoginStore