
import { createContext, useContext } from 'react'
import LoginStore from './login.Store';
import UserStore from './user.Store'
class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}
const context = createContext(new RootStore())
export const useStore = () => useContext(context);